const Lesson = require("../../models/lessonModel");

const addLesson = async (req, res) => {
  try {
    const { course_id, lesson_title, lesson_description } = req.body;

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).send({
        status: 0,
        message: "Lesson video is required",
      });
    }

    const lesson_video = req.file.path; 

    
    if (!course_id || !lesson_title || !lesson_description || !lesson_video) {
      return res.status(400).send({
        status: 0,
        message: "All fields are required",
      });
    }

    // Check if lesson already exists in the same course
    const existingLesson = await Lesson.findOne({ lesson_title, course_id });
    if (existingLesson) {
      return res.status(400).send({
        status: 0,
        message: "Lesson with the same title already exists in this course.",
      });
    }

    // Create new lesson
    const newLesson = new Lesson({
      course_id,
      lesson_title,
      lesson_description,
      lesson_video,
    });

    await newLesson.save();

    return res.status(201).send({
      status: 1,
      message: "Lesson added successfully",
      lesson: newLesson,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 0,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = addLesson;
