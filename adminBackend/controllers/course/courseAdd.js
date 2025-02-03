const Course = require("../../models/courseModel");

const addCourse = async (req, res) => {
  try {
    const { courseName, authorName, coursePrice, courseDescription } = req.body;

    // Check if all fields are provided
    if (!courseName || !authorName || !coursePrice || !courseDescription) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the course with the same name already exists
    const existingCourse = await Course.findOne({ courseName: courseName });

    if (existingCourse) {
      return res.status(400).json({
        message: "Course with the same name already exists",
        course: existingCourse,
      });
    }

    // Create a new course if it doesn't already exist
    const newCourse = new Course({
      courseName,
      authorName,
      coursePrice,
      courseDescription,
    });

    // Save the course to the database
    await newCourse.save();

    res.status(201).json({ message: "Course added successfully", course: newCourse });
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = addCourse;
