import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../api/dashboardApi";

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  // ✅ role must be inside component
  const role = localStorage.getItem("role");

  useEffect(() => {
    const loadStats = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };

    loadStats();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">

          <StatCard
            title="Total Questions"
            value={stats?.totalQuestions || 0}
          />

          <StatCard
            title="Generated Tests"
            value={stats?.generatedTests || 0}
          />

          <StatCard
            title="Subjects"
            value={stats?.subjects || 0}
          />

          <StatCard
            title="Classes"
            value={stats?.classes || 0}
          />

        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-3">

              {/* Admin only button */}
              {role === "admin" && (
                <button
                  onClick={() => navigate("/add-question")}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Add Question
                </button>
              )}

              {/* Both admin + teacher */}
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