const express = require("express");
const addCourse = require("../controllers/course/courseAdd");
const CourseFind = require("../controllers/course/courseFind");
const deleteCourse = require("../controllers/course/courseDelete");
const searchCourseById = require("../controllers/course/courseSearch");

const router = express.Router();

router.post("/course/add", addCourse);
router.get("/course/find", CourseFind);
router.delete("/course/delete/:courseId", deleteCourse);
router.get("/course/search/:id", searchCourseById);
module.exports = router;
