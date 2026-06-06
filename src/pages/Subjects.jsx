import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Subjects() {
  const [subjectName, setSubjectName] = useState("");

  const [subjects, setSubjects] = useState([
    "Mathematics",
    "English",
    "Urdu",
    "Science",
    "Computer Science",
    "Islamiat",
    "Pakistan Studies",
  ]);

  const addSubject = () => {
    if (!subjectName.trim()) return;

    setSubjects([...subjects, subjectName]);
    setSubjectName("");
  };

  const deleteSubject = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Subject Management
        </h1>

        {/* Add Subject */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Add New Subject
          </h2>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter Subject Name"
              value={subjectName}
              onChange={(e) =>
                setSubjectName(e.target.value)
              }
              className="flex-1 border p-3 rounded-lg"
            />

            <button
              onClick={addSubject}
              className="bg-blue-600 text-white px-6 rounded-lg"
            >
              Add
            </button>

          </div>

        </div>

        {/* Subject List */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            All Subjects
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left p-3">
                  #
                </th>

                <th className="text-left p-3">
                  Subject Name
                </th>

                <th className="text-left p-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {subjects.map((subject, index) => (
                <tr
                  key={index}
                  className="border-b"
                >
                  <td className="p-3">
                    {index + 1}
                  </td>

                  <td className="p-3">
                    {subject}
                  </td>

                  <td className="p-3">

                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteSubject(index)
                      }
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