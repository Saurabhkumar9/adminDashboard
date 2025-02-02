const Course = require("../../models/course/courseModel");

const addCourse = async (req, res) => {
    try {
        const { courseName, authorName, coursePrice, courseDescription } = req.body;

        
        if (!courseName || !authorName || !coursePrice || !courseDescription) {
            return res.status(400).send({
                status: 0,
                message: "All fields are required",
            });
        }

        
        const courseAdd = new Course({
            courseName,
            authorName,
            coursePrice,
            courseDescription,
        });

        await courseAdd.save();

        
        return res.status(201).send({
            status: 1,
            message: "Course added successfully",
            course: courseAdd, 
        });

    } catch (error) {
       
        return res.status(500).send({
            status: 0,
            message: "Internal Server Error",
            error: error.message, 
        });
    }
};

module.exports = addCourse;
