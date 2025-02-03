const mongoose = require("mongoose");
const Lession = require("../../models/course/lessionModel");

const deleteLession = async (req, res) => {
  try {
    const { lessionId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(lessionId)) {
      return res.status(400).json({ message: "Invalid lession ID format" });
    }

    const lessionDelete = await Lession.findByIdAndDelete(lessionId);
    if (!lessionDelete) {
      return res.status(404).json({
        message: "Lession not found",
      });
    }

    return res
      .status(200)
      .json({ message: "Lession deleted successfully", lessionDelete });
  } catch (error) {
    console.error("Error deleting lession:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteLession;
