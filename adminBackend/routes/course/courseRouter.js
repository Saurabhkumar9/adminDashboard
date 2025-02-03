const express = require("express");
const addCourse = require("../../controllers/course/courseAdd");
const CourseFind = require("../../controllers/course/courseFind");
const courseSearch = require("../../controllers/course/courseSearch");
const addLession = require("../../controllers/course/lessionAdd");
const LessionFind = require("../../controllers/course/lessionFind");
const { deleteCourse } = require("../../controllers/course/courseDetele");
const deleteLession = require("../../controllers/course/lessionDelete");
const courseRouter = express.Router();

courseRouter.post("/course/add", addCourse);

courseRouter.get("/course/find", CourseFind);

courseRouter.get("/course/:id", courseSearch);

courseRouter.delete("/course/delete/:courseId", deleteCourse);

courseRouter.post("/lession/add", addLession);

courseRouter.get("/lession/find", LessionFind);

courseRouter.delete("/lession/delete/:lessionId", deleteLession);

module.exports = courseRouter;
