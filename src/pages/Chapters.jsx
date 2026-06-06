import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Chapters() {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapterName, setChapterName] = useState("");

  const [chapters, setChapters] = useState([
    { id: 1, class: "9", subject: "Computer", chapter: "Introduction" },
    { id: 2, class: "9", subject: "Computer", chapter: "Hardware" },
    { id: 3, class: "10", subject: "Math", chapter: "Algebra" },
  ]);

  const addChapter = () => {
    if (!className || !subject || !chapterName) return;

    const newChapter = {
      id: Date.now(),
      class: className,
      subject,
      chapter: chapterName,
    };

    setChapters([...chapters, newChapter]);

    setClassName("");
    setSubject("");
    setChapterName("");
  };

  const deleteChapter = (id) => {
    setChapters(chapters.filter((c) => c.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Chapter Management
        </h1>

        {/* Add Chapter Form */}

        <div className="bg-white p-6 rounded-xl shadow space-y-4">

          <h2 className="text-xl font-semibold">
            Add New Chapter
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {/* Class */}
            <select
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="border p-3 rounded-lg"
            >
              <option value="">Select Class</option>
              {[1,2,3,4,5,6,7,8,9,10].map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>

            {/* Subject */}
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border p-3 rounded-lg"
            >
              <option value="">Select Subject</option>
              <option>Math</option>
              <option>English</option>
              <option>Science</option>
              <option>Computer</option>
              <option>Urdu</option>
            </select>

            {/* Chapter */}
            <input
              type="text"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
              placeholder="Chapter Name"
              className="border p-3 rounded-lg"
            />

          </div>

          <button
            onClick={addChapter}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Add Chapter
          </button>

        </div>

        {/* Chapter List */}

        <div className="bg-white rounded-xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Subject</th>
                <th className="p-4 text-left">Chapter</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>

              {chapters.map((c) => (
                <tr key={c.id} className="border-t">

                  <td className="p-4">{c.class}</td>
                  <td className="p-4">{c.subject}</td>
                  <td className="p-4">{c.chapter}</td>

                  <td className="p-4">
                    <button
                      onClick={() => deleteChapter(c.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
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