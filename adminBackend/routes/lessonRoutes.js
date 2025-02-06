const express = require("express");
const addLesson = require("../controllers/lesson/lessonAdd");
const LessonFind = require("../controllers/lesson/lessonFind");
const deleteLesson = require("../controllers/lesson/lessonDelete");

const upload = require("../middleware/videoMulter");



const router = express.Router();

// Route for adding a lesson


router.post("/lesson/add", upload.single("lesson_video"), addLesson);


// Route for finding all lessons
router.get("/lesson/find", LessonFind);

// Route for deleting a lesson by ID
router.delete("/lesson/delete/:lessonId", deleteLesson);








module.exports = router;



