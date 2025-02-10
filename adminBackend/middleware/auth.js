const jwt = require("jsonwebtoken");
require("dotenv").config();
const Admin = require("../models/adminModel");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized access, please login" });
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token not found, please login" });
    }
    const key = process.env.JWT_SECRET;
    if (!key) {
      return res
        .status(500)
        .json({ message: "Server error: Missing JWT secret key" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, key);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Token expired, please login again" });
      }
      return res
        .status(401)
        .json({ message: "Invalid token, authentication failed" });
    }

    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    req.admin = { id: admin._id };

    next();
  } catch (error) {
    console.error("Authentication Error:", error.message);
    return res
      .status(500)
      .json({ message: "Server error, please try again later" });
  }
};

module.exports = authMiddleware;
