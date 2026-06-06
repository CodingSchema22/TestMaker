import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { questionBank } from "../data/questionBank";

export default function CreateTest() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    class: "",
    subject: "",
    chapter: "",
    mcq: 0,
    short: 0,
    long: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getRandomQuestions = (type, count, filtered) => {
    const questions = filtered
      .filter((q) => q.type === type)
      .sort(() => 0.5 - Math.random())
      .slice(0, count);

    return questions;
  };

  const generateTest = () => {
    const filtered = questionBank.filter(
      (q) =>
        q.class === form.class &&
        q.subject === form.subject &&
        q.chapter === form.chapter
    );

    const mcqs = getRandomQuestions("MCQ", form.mcq, filtered);
    const short = getRandomQuestions("Short", form.short, filtered);
    const long = getRandomQuestions("Long", form.long, filtered);

    const test = {
      class: form.class,
      subject: form.subject,
      chapter: form.chapter,
      mcqs,
      short,
      long,
    };

    localStorage.setItem("generatedTest", JSON.stringify(test));

    navigate("/test-preview");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Create Test
        </h1>

        <div className="bg-white p-6 rounded-xl shadow space-y-4">

          {/* Class */}
          <select
            name="class"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option value="">Select Class</option>
            {[1,2,3,4,5,6,7,8,9,10].map((c) => (
              <option key={c} value={c}>
                Class {c}
              </option>
            ))}
          </select>

          {/* Subject */}
          <select
            name="subject"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option value="">Select Subject</option>
            <option>Math</option>
            <option>Computer</option>
            <option>Science</option>
          </select>

          {/* Chapter */}
          <input
            name="chapter"
            onChange={handleChange}
            placeholder="Chapter"
            className="w-full border p-3 rounded"
          />

          {/* Counts */}
          <input
            name="mcq"
            onChange={handleChange}
            type="number"
            placeholder="MCQs Count"
            className="w-full border p-3 rounded"
          />

          <input
            name="short"
            onChange={handleChange}
            type="number"
            placeholder="Short Questions"
            className="w-full border p-3 rounded"
          />

          <input
            name="long"
            onChange={handleChange}
            type="number"
            placeholder="Long Questions"
            className="w-full border p-3 rounded"
          />

          <button
            onClick={generateTest}
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Generate Test
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}