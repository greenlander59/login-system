const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({ message: "Access denied ❌ No token" });
    }

    // ✅ FIX: remove Bearer
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.json({ message: "Invalid token ❌" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    return res.json({ message: "Invalid or expired token ❌" });
  }
};
