const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./User");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB (ONLY ONCE)
mongoose
  .connect("mongodb://127.0.0.1:27017/loginDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// Simple route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ Signup (save in DB)
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 🔍 check existing user
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.json({ message: "User already exists ❌" });
    }

    // 🔐 hash password
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
});
// ✅ Login (check DB)
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ message: "User not found ❌" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ message: "Login successful ✅" });
    } else {
      res.json({ message: "Invalid credentials ❌" });
    }
  } catch (error) {
    res.json({ message: "Error during login ❌" });
  }
});
// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
