const Question = require("../models/Question");
const Paper = require("../models/Paper");

// GENERATE PAPER
exports.generatePaper = async (req, res) => {
  try {
    const { className, subject, mcqCount, shortCount, longCount } = req.body;

    // get questions
    const mcqs = await Question.find({
      class: className,
      subject,
      type: "MCQ",
    }).limit(mcqCount);

    const short = await Question.find({
      class: className,
      subject,
      type: "short",
    }).limit(shortCount);

    const long = await Question.find({
      class: className,
      subject,
      type: "long",
    }).limit(longCount);

    const paper = await Paper.create({
      class: className,
      subject,
      questions: [...mcqs, ...short, ...long],
      totalMarks: req.body.totalMarks,
    });

    res.json(paper);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};