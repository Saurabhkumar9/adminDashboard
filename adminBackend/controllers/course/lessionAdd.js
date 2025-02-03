const Lession = require("../../models/course/lessionModel");
const addLession = async (req, res) => {
  try {
    // Log incoming request body for debugging
    console.log(req.body);

    const { course_id, lession_title, lession_link, lession_description } =
      req.body;

    if (!course_id || !lession_title || !lession_link || !lession_description) {
      return res.status(400).send({
        status: 0,
        message: "All fields are required",
      });
    }

    const newLession = new Lession({
      course_id,
      lession_title,
      lession_link,
      lession_description,
    });

    await newLession.save();

    return res.status(201).send({
      status: 1,
      message: "Lesson added successfully",
      lesson: newLession,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 0,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = addLession;
