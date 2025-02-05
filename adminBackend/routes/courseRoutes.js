const express = require("express");
const addCourse = require("../controllers/course/courseAdd");
const CourseFind = require("../controllers/course/courseFind");
const deleteCourse = require("../controllers/course/courseDelete");
const searchCourseById = require("../controllers/course/courseSearch");
const upload = require("../middleware/imageMulter");
const updateCourse = require("../controllers/course/courseUpdate");

const router = express.Router();

router.post("/course/add", upload.single("image"),   addCourse); // cahnge line

router.get("/course/find", CourseFind);

router.delete("/course/delete/:courseId", deleteCourse);

router.get("/course/search/:id", searchCourseById);



router.put("/course/update/:id", updateCourse)

module.exports = router;
