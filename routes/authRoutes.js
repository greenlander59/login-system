const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const authController = require("../controllers/authController");

//route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to dashboard 🔐", user: req.user });
});

//protected
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "User profile 🔐",
    user: req.user,
  });
});

// Signup route
router.post("/signup", authController.signup);

// Login route
router.post("/login", authController.login);

module.exports = router;
