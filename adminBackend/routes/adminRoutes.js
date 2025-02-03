const express = require("express");
const AdminSignup = require("../controllers/admin/adminSignup");
const AdminLogin = require("../controllers/admin/adminLogin");

const router = express.Router();

router.post("/signup", AdminSignup);
router.post("/login", AdminLogin);

module.exports = router;
