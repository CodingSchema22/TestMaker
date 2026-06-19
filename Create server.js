const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

const cors = require("cors");

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use("/api/auth", authRoutes);
const questionRoutes = require("./routes/questionRoutes");

app.use("/api/questions", questionRoutes);
const paperRoutes = require("./routes/paperRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/papers", paperRoutes);
const aiRoutes = require("./routes/aiRoutes");

app.use("/api/ai", aiRoutes);

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Test Maker Backend Running");
});

// server start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log("Server running on port", PORT));
  })
  .catch((err) => console.log(err));