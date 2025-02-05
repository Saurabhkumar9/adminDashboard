const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  lesson_title: {
    type: String,
    required: true,
  },
  lesson_description: {
    type: String,
    required: true,
  },
  lesson_video:{
    type:String,
    require:true
  }
});

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;


