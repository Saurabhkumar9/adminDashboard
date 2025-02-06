const bcrypt = require("bcryptjs");
const Admin = require("../../models/adminModel");
const AdminSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already registered please login" });
      
    }

    // Hash password
   
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({ name, email, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(404).json({ message: "Server error", error });
  }
};

module.exports = AdminSignup;