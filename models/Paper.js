const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  class: String,
  subject: String,
  questions: Array,
  totalMarks: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Paper", paperSchema);