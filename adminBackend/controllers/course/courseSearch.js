const mongoose = require("mongoose");
const Course = require("../../models/courseModel");

const searchCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid course ID format" });
    }

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: "Course Not Found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error searching course:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = searchCourseById;
