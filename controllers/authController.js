const User = require("../models/user"); // adjust if needed
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ✅ SIGNUP
exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.json({ message: "User already exists ❌" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ message: "User registered successfully ✅" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error in signup ❌" });
  }
};

// ✅ LOGIN
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ message: "User not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid password ❌" });
    }

    // 🔐 CREATE TOKEN
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "30s" },
    );

    res.json({
      message: "Login successful ✅",
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.json({ message: "Error in login ❌" });
  }
};
