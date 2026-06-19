const Question = require("../models/Question");

// ADD QUESTION
exports.addQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET QUESTIONS (FILTER SYSTEM)
exports.getQuestions = async (req, res) => {
  try {
    const { className, subject, chapter, type } = req.query;

    let filter = {};

    if (className) filter.class = className;
    if (subject) filter.subject = subject;
    if (chapter) filter.chapter = chapter;
    if (type) filter.type = type;

    const questions = await Question.find(filter);

    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};