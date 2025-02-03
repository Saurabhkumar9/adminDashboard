const mongoose = require("mongoose");
const Lesson = require("../../models/lessonModel");

const deleteLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;

    // Check if the lesson ID format is valid
    if (!mongoose.Types.ObjectId.isValid(lessonId)) {
      return res.status(400).json({ message: "Invalid lesson ID format" });
    }

    // Find and delete the lesson by its ID
    const lessonDelete = await Lesson.findByIdAndDelete(lessonId);

    // If no lesson is found
    if (!lessonDelete) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    return res.status(200).json({
      message: "Lesson deleted successfully",
      lesson: lessonDelete,  // Returning the deleted lesson object
    });

  } catch (error) {
    console.error("Error deleting lesson:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteLesson;
