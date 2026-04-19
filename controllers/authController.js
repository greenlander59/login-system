const jwt = require("jsonwebtoken");
const User = require("../User");
const bcrypt = require("bcrypt");

// Signup
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
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

    res.json({ message: "User saved securely ✅" });
  } catch (error) {
    res.json({ message: "Error saving user ❌" });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: "User not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({
        message: "Login successful ✅",
        token: token,
      });
    } else {
      res.json({ message: "Invalid credentials ❌" });
    }
  } catch (error) {
    res.json({ message: "Error during login ❌" });
  }
};
