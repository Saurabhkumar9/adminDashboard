const Lesson = require("../../models/lessonModel");

const addLesson = async (req, res) => {
  try {
    // Log incoming request body for debugging
    console.log(req.body);

    const { course_id, lesson_title, lesson_link, lesson_description } = req.body;

    // Validate required fields
    if (!course_id || !lesson_title || !lesson_link || !lesson_description) {
      return res.status(400).send({
        status: 0,
        message: "All fields are required",
      });
    }

    // Check if the lesson with the same title already exists in the database
    const existingLesson = await Lesson.findOne({ lesson_title: lesson_title, course_id: course_id });

    if (existingLesson) {
      return res.status(400).send({
        status: 0,
        message: "Lesson with the same title already exists in this course.",
      });
    }

    // Create a new lesson
    const newLesson = new Lesson({
      course_id,
      lesson_title,
      lesson_link,
      lesson_description,
    });

    // Save the lesson to the database
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
