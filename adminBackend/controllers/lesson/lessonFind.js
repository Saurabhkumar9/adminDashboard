

const Lesson = require("../../models/lessonModel");

const LessonFind = async (req, res) => {
  try {
    // Retrieve all lessons from the database
    const data = await Lesson.find();

    // Check if lessons are found
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No lessons found" });
    }

    res.status(200).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = LessonFind;
