const express = require("express");
const router = express.Router();

const {
  addQuestion,
  getQuestions,
} = require("../controllers/questionController");
const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post(
  "/add-question",
  auth,
  role(["admin"]),
  (req, res) => {
    res.json({ message: "Question added" });
  }
);

module.exports = router;
// Add question
router.post("/add", addQuestion);

// Get filtered questions
router.get("/all", getQuestions);

module.exports = router;