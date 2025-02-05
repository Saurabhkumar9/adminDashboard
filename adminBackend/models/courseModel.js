const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    coursePrice: {
      type: String,
      required: true,
    },
    courseDescription: {
       type: String, 
       required: true },
    image: {
      type:String,
      require:true
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);


module.exports=Course
