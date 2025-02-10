const bcrypt = require("bcryptjs");
const Admin = require("../../models/adminModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const AdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

 
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        message: "Email does not exist, please enter a valid email or sign up",
      });
    }

    
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password, please enter the correct password" });
    }

    
    const key = process.env.JWT_SECRET;
    if (!key) {
      return res.status(500).json({ message: "JWT secret key is missing" });
    }

    
    const token = jwt.sign({ id: admin._id }, key, { expiresIn: "1h" });

    
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

module.exports = AdminLogin;
