import DashboardLayout from "../layouts/DashboardLayout";
import useDarkMode from "../hooks/useDarkMode";

export default function Settings() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">

        <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow p-6">

          <h1 className="text-3xl font-bold mb-6">
            Settings
          </h1>

          <div className="flex justify-between items-center">

            <span className="font-medium">
              Dark Mode
            </span>

            <button
              onClick={toggleDarkMode}
              className="bg-slate-800 text-white px-4 py-2 rounded"
            >
              {darkMode ? "Disable" : "Enable"}
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}