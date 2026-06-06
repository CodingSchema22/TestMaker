import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function AddQuestion() {
  const [questionType, setQuestionType] = useState("MCQ");

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Add Question
        </h1>

        <div className="bg-white rounded-xl shadow p-6">

          <form className="space-y-6">

            {/* Class */}

            <div>
              <label className="block mb-2 font-medium">
                Class
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>Select Class</option>
                {[1,2,3,4,5,6,7,8,9,10].map((cls) => (
                  <option key={cls}>
                    Class {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}

            <div>
              <label className="block mb-2 font-medium">
                Subject
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>Select Subject</option>
                <option>Math</option>
                <option>English</option>
                <option>Science</option>
                <option>Computer</option>
                <option>Urdu</option>
              </select>
            </div>

            {/* Chapter */}

            <div>
              <label className="block mb-2 font-medium">
                Chapter
              </label>

              <input
                type="text"
                placeholder="Enter Chapter Name"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Question Type */}

            <div>
              <label className="block mb-2 font-medium">
                Question Type
              </label>

              <select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option>MCQ</option>
                <option>Short</option>
                <option>Long</option>
              </select>
            </div>

            {/* Question */}

            <div>
              <label className="block mb-2 font-medium">
                Question
              </label>

              <textarea
                rows="4"
                className="w-full border rounded-lg p-3"
                placeholder="Enter Question"
              />
            </div>

            {/* MCQ Options */}

            {questionType === "MCQ" && (
              <>
                <div>
                  <label className="block mb-2">
                    Option A
                  </label>

                  <input
                    className="w-full border rounded-lg p-3"
                    placeholder="Option A"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Option B
                  </label>

                  <input
                    className="w-full border rounded-lg p-3"
                    placeholder="Option B"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Option C
                  </label>

                  <input
                    className="w-full border rounded-lg p-3"
                    placeholder="Option C"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Option D
                  </label>

                  <input
                    className="w-full border rounded-lg p-3"
                    placeholder="Option D"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Correct Answer
                  </label>

                  <select className="w-full border rounded-lg p-3">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                  </select>
                </div>
              </>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Save Question
            </button>

          </form>

        </div>
      </div>
    </DashboardLayout>
  );
}