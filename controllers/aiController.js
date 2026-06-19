const Question = require("../models/Question");
const { generateQuestionsAI } = require("../services/aiService");

// GENERATE QUESTIONS FROM AI
exports.generateAIQuestions = async (req, res) => {
  try {
    const { topic, className, subject } = req.body;

    const questions = await generateQuestionsAI(topic);

    // Save to DB
    const saved = await Question.insertMany(
      questions.map((q) => ({
        ...q,
        class: className,
        subject,
        chapter: topic,
      }))
    );

    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};