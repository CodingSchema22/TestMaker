import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../api/dashboardApi";

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

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
      <div className="space-y-8">

        {/* Header */}
        <div>
          <p className="text-sm font-medium text-blue-600">
            Overview
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your questions, subjects and tests from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

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
        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Quick Actions
              </p>

              <h2 className="mt-1 text-xl font-bold text-gray-900">
                Get started
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Quickly access your most-used tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              {role === "admin" && (
                <button
                  onClick={() => navigate("/add-question")}
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  + Add Question
                </button>
              )}

              <button
                onClick={() => navigate("/create-test")}
                className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
              >
                + Create Test
              </button>

            </div>

          </div>

          {/* Welcome Card */}
          <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-200">

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

            <div className="relative">

              <p className="text-sm font-medium text-blue-100">
                TestMaker
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Ready to create a test?
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-blue-100">
                Select your subject, choose questions and generate
                a clean printable test in minutes.
              </p>

              <button
                onClick={() => navigate("/create-test")}
                className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
              >
                Create New Test →
              </button>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}