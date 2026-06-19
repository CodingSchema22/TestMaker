const express = require("express");
const router = express.Router();

const { generateAIQuestions } = require("../controllers/aiController");

router.post("/generate", generateAIQuestions);

module.exports = router;