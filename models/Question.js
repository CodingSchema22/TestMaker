const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  class: String,
  subject: String,
  chapter: String,
  type: {
    type: String, // MCQ, short, long
  },
  question: String,
  marks: Number,
  answer: String,
});

module.exports = mongoose.model("Question", questionSchema);