import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">

          <StatCard title="Total Questions" value="1250" />
          <StatCard title="Generated Tests" value="150" />
          <StatCard title="Subjects" value="8" />
          <StatCard title="Classes" value="10" />

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3">
              <li>✅ New Math Question Added</li>
              <li>✅ Computer Test Generated</li>
              <li>✅ Science Chapter Updated</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-3">

              {/* ADD QUESTION */}
              <button
                onClick={() => navigate("/add-question")}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add Question
              </button>

              {/* CREATE TEST */}
              <button
                onClick={() => navigate("/create-test")}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Create Test
              </button>

            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}