const Course = require("../../models/courseModel");

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateCourse);
    if (!updatedCourse) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateCourse;
