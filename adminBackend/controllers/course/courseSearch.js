const Course = require("../../models/course/courseModel");




const courseSearch= async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course Not Found" });
        }
        console.log("Course Data:", course); // Debugging
        res.json(course);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).json({ message: "Server Error" });
    }
  };


  module.exports=courseSearch