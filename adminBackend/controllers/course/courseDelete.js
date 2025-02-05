const Course = require("../../models/courseModel");
const Lesson = require("../../models/lessonModel");
const mongoose = require("mongoose");

const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid course ID" });
    }

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const lessonDeleteResult = await Lesson.deleteMany({ course_id: courseId });

    console.log(
      `${lessonDeleteResult.deletedCount} lessons deleted for course ${courseId}`
    );

    await Course.findByIdAndDelete(courseId);

    res.status(200).json({
      message: "Course and all related lessons deleted successfully",
      deletedLessons: lessonDeleteResult.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting course and lessons:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteCourse;
