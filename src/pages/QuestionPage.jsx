import { useState, useEffect } from "react";
import axios from "axios";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({
    class: "",
    subject: "",
    chapter: "",
    type: "MCQ",
    question: "",
    marks: 1,
  });

  // GET QUESTIONS
  useEffect(() => {
    axios.get("/api/questions/all").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  // ADD QUESTION
  const addQuestion = async () => {
    const res = await axios.post("/api/questions/add", form);
    setQuestions([...questions, res.data]);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Question Manager</h1>

      {/* FORM */}
      <div className="grid gap-2 mt-4">
        <input
          placeholder="Class"
          onChange={(e) => setForm({ ...form, class: e.target.value })}
        />
        <input
          placeholder="Subject"
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />
        <input
          placeholder="Chapter"
          onChange={(e) => setForm({ ...form, chapter: e.target.value })}
        />
        <input
          placeholder="Question"
          onChange={(e) => setForm({ ...form, question: e.target.value })}
        />

        <button onClick={addQuestion} className="bg-blue-500 text-white p-2">
          Add Question
        </button>
      </div>

      {/* LIST */}
      <div className="mt-6">
        {questions.map((q) => (
          <div key={q._id} className="border p-2 mt-2">
            <p>{q.question}</p>
            <small>{q.subject} - {q.chapter}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;