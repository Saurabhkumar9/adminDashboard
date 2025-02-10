const express = require("express");
const addLesson = require("../controllers/lesson/lessonAdd");
const LessonFind = require("../controllers/lesson/lessonFind");
const deleteLesson = require("../controllers/lesson/lessonDelete");

const upload = require("../middleware/videoMulter");
const authMiddleware = require("../middleware/auth");



const router = express.Router();

// Route for adding a lesson


router.post("/lesson/add",authMiddleware,  upload.single("lesson_video"), addLesson);


// Route for finding all lessons
router.get("/lesson/find",authMiddleware, LessonFind);

// Route for deleting a lesson by ID
router.delete("/lesson/delete/:lessonId",authMiddleware, deleteLesson);








module.exports = router;



