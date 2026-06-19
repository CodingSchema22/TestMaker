const axios = require("axios");

exports.generateQuestionsAI = async (topic, type) => {
  const prompt = `
You are a teacher creating exam questions based on Punjab Textbook Board syllabus.

Topic: ${topic}
Question Type: ${type}

Generate:
- 5 MCQs with answers
- 3 short questions
- 2 long questions

Return in JSON format only.
`;

  // (Mock AI response — later replace with real AI API)
  return [
    {
      question: `Sample MCQ about ${topic}`,
      type: "MCQ",
      answer: "Option A",
    },
    {
      question: `Short question about ${topic}`,
      type: "short",
      answer: "Explanation",
    },
  ];
};