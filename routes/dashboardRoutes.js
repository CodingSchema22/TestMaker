const express = require("express");
const router = express.Router();

const Question = require("../models/Question");
const Paper = require("../models/Paper");

router.get("/stats", async (req, res) => {
  const totalQuestions = await Question.countDocuments();
  const generatedTests = await Paper.countDocuments();

  res.json({
    totalQuestions,
    generatedTests,
    subjects: 8,
    classes: 10
  });
});

module.exports = router;