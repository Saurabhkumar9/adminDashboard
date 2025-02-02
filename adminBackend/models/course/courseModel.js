const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    coursePrice: {
        type: String,
        required: true
    },
    courseDescription: {  
        type: String,
        required: true
    }
}, { timestamps: true }); 

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
