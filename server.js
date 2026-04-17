const express = require("express");
const app = express();

app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({ message: "Login successful ✅" });
  } else {
    res.json({ message: "Invalid credentials ❌" });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
