const mongoose = require("mongoose");
const Course = require("../../models/courseModel");

const searchCourseById = async (req, res) => {
  try {
    const { id } = req.params; // URL से कोर्स ID प्राप्त करना

    // ObjectId का वैध (valid) होना चेक करें
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid course ID format" });
    }

    // MongoDB से कोर्स ID द्वारा सर्च करें
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
