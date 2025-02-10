const express = require("express");
const addCourse = require("../controllers/course/courseAdd");
const CourseFind = require("../controllers/course/courseFind");
const deleteCourse = require("../controllers/course/courseDelete");
const searchCourseById = require("../controllers/course/courseSearch");
const upload = require("../middleware/imageMulter");
const updateCourse = require("../controllers/course/courseUpdate");
const authMiddleware = require("../middleware/auth");

const router = express.Router();


router.post("/course/add", authMiddleware, upload.single("image"), addCourse);
router.get("/course/find", authMiddleware, CourseFind);
router.delete("/course/delete/:courseId", authMiddleware, deleteCourse);
router.get("/course/search/:id", authMiddleware, searchCourseById);
router.put("/course/update/:id", authMiddleware, updateCourse);

module.exports = router;
