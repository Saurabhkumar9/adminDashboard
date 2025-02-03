const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");
const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const DBURI = process.env.DBURI;
mongoose
  .connect(DBURI)
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/api/admin", adminRoutes);


app.use("/api/admin", courseRoutes);

app.use("/api/admin", lessonRoutes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
