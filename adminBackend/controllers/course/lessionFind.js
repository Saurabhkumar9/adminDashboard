const Lession = require("../../models/course/lessionModel");

const LessionFind = async (req, res) => {
  try {
    const data = await Lession.find();

    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = LessionFind;
