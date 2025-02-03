const Lesson = require("../../models/lessonModel");



const updateLesson = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedLesson = await Lesson.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedLesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json(updatedLesson); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = updateLesson
