import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function QuestionBank() {
  const [questionsData, setQuestionsData] = useState([
    {
      id: 1,
      class: "8",
      subject: "Science",
      chapter: "Force and Motion",
      type: "MCQ",
      question: "What is Newton's First Law?"
    },
    {
      id: 2,
      class: "9",
      subject: "Math",
      chapter: "Algebra",
      type: "Short",
      question: "Define a polynomial."
    },
    {
      id: 3,
      class: "10",
      subject: "Computer",
      chapter: "Programming",
      type: "Long",
      question: "Explain object-oriented programming."
    }
  ]);

  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const filteredQuestions = questionsData.filter((q) => {
    return (
      q.question.toLowerCase().includes(search.toLowerCase()) &&
      (selectedClass === "" || q.class === selectedClass) &&
      (selectedSubject === "" || q.subject === selectedSubject)
    );
  });

  // 🟡 EDIT (simple alert for now)
  const handleEdit = (q) => {
    alert(`Edit Question: ${q.question}`);
  };

  // 🔴 DELETE
  const handleDelete = (id) => {
    const updated = questionsData.filter((q) => q.id !== id);
    setQuestionsData(updated);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Question Bank
        </h1>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search Question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded-lg"
            />

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border p-3 rounded-lg"
            >
              <option value="">All Classes</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="border p-3 rounded-lg"
            >
              <option value="">All Subjects</option>
              <option value="Science">Science</option>
              <option value="Math">Math</option>
              <option value="Computer">Computer</option>
            </select>

          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Subject</th>
                <th className="p-4 text-left">Chapter</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Question</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredQuestions.map((q) => (
                <tr key={q.id} className="border-t">

                  <td className="p-4">{q.class}</td>
                  <td className="p-4">{q.subject}</td>
                  <td className="p-4">{q.chapter}</td>
                  <td className="p-4">{q.type}</td>
                  <td className="p-4">{q.question}</td>

                  <td className="p-4 flex gap-2">

                    {/* EDIT */}
                    <button
                      onClick={() => handleEdit(q)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(q.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </DashboardLayout>
  );
}