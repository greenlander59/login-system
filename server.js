require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./User");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", authRoutes);

// ✅ Connect MongoDB (ONLY ONCE)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// Simple route

// Start server
app.listen(process.env.PORT, () => {
  console.log("Server running on http://localhost:3000");
});
