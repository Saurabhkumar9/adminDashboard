const express = require("express");
const addCourse = require("../../controllers/course/courseAdd"); 
const CourseFind = require("../../controllers/course/courseFind");
const courseRouter = express.Router(); 


courseRouter.post("/course/add", addCourse);


courseRouter.get("/course/find", CourseFind)


module.exports = courseRouter;
