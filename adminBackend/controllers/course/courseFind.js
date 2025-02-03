const Course = require("../../models/courseModel");

const CourseFind = async (req, res) => {
  try {
    const courses = await Course.find();
    if (!courses.length) return res.status(404).json({ message: "No courses found" });

    res.status(200).json(courses);
  } catch (error) {
    console.error("Error finding courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = CourseFind;
