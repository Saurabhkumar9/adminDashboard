const mongoose = require("mongoose");
const Course = require("../../models/course/courseModel");

// 🔥 Delete Course Controller
const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params; 

      
        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ message: "Invalid course ID format" });
        }

       
        const deletedCourse = await Course.findByIdAndDelete(courseId);

        
        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ message: "Course deleted successfully", deletedCourse });

    } catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { deleteCourse };
