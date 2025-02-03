const express = require("express");
const addLesson = require("../controllers/lesson/lessonAdd");
const LessonFind = require("../controllers/lesson/lessonFind");
const deleteLesson = require("../controllers/lesson/lessonDelete");
const updateLesson = require("../controllers/lesson/lessonUpdate");

const router = express.Router();

// Route for adding a lesson
router.post("/lesson/add", addLesson);

// Route for finding all lessons
router.get("/lesson/find", LessonFind);

// Route for deleting a lesson by ID
router.delete("/lesson/delete/:lessonId", deleteLesson);


router.put("/lessons/update/:id", updateLesson);

module.exports = router;
