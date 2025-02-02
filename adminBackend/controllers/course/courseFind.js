const Course = require("../../models/course/courseModel");

const CourseFind = async (req, res) => {
  try {
    
    const data = await Course.find();

    
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    
    res.status(200).json(data);
  } catch (err) {
    
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = CourseFind;

        
   
