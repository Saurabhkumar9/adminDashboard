const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const AdminRouter = require("./routes/AdminRouter");
const courseRouter = require("./routes/course/courseRouter");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection (Updated)
const DBURI = process.env.DBURI;
mongoose
  .connect(DBURI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

app.use("/api/admin", AdminRouter);



app.use("/api/admin", courseRouter)

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
