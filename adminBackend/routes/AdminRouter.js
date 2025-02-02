const express = require("express");
const router = express.Router();

const AdminSignup = require("../controllers/AdminSignup");
const AdminLogin = require("../controllers/adminLogin");
// const AdminLogin = require("../controllers/AdminLogin");

// Signup Route
router.post("/signup", AdminSignup);

// Login Route
router.post("/login", AdminLogin);

module.exports = router;



