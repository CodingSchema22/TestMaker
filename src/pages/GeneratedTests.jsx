import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export default function GeneratedTests() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const [testsData, setTestsData] = useState([
    {
      id: 1,
      title: "Monthly Test",
      class: "9",
      subject: "Computer Science",
      date: "05-06-2026",
    },
    {
      id: 2,
      title: "Unit Test 1",
      class: "10",
      subject: "Mathematics",
      date: "04-06-2026",
    },
    {
      id: 3,
      title: "Chapter Test",
      class: "8",
      subject: "Science",
      date: "03-06-2026",
    },
  ]);

  const filteredTests = testsData.filter(
    (test) =>
      test.title.toLowerCase().includes(search.toLowerCase()) ||
      test.subject.toLowerCase().includes(search.toLowerCase())
  );

  // 👁 VIEW
  const handleView = (test) => {
    localStorage.setItem(
      "generatedTest",
      JSON.stringify({
        class: test.class,
        subject: test.subject,
        mcqs: [],
        short: [],
        long: [],
      })
    );

    navigate("/test-preview");
  };

  // 🗑 DELETE
  const handleDelete = (id) => {
    const updated = testsData.filter((t) => t.id !== id);
    setTestsData(updated);
  };

  // ⬇ DOWNLOAD (simple placeholder for now)
  const handleDownload = (test) => {
    alert(`Downloading: ${test.title}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Generated Tests
          </h1>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <input
            type="text"
            placeholder="Search test..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Class</th>
                <th className="p-4 text-left">Subject</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredTests.map((test) => (
                <tr
                  key={test.id}
                  className="border-t"
                >
                  <td className="p-4">{test.title}</td>
                  <td className="p-4">{test.class}</td>
                  <td className="p-4">{test.subject}</td>
                  <td className="p-4">{test.date}</td>

                  <td className="p-4 flex gap-2">

                    {/* VIEW */}
                    <button
                      onClick={() => handleView(test)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </button>

                    {/* DOWNLOAD */}
                    <button
                      onClick={() => handleDownload(test)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Download
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(test.id)}
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