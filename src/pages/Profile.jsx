import DashboardLayout from "../layouts/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-xl shadow p-6">

          <h1 className="text-3xl font-bold mb-6">
            Profile
          </h1>

          <div className="space-y-4">

            <input
              type="text"
              value="Teacher Name"
              className="w-full border p-3 rounded-lg"
              readOnly
            />

            <input
              type="email"
              value="teacher@example.com"
              className="w-full border p-3 rounded-lg"
              readOnly
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Edit Profile
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}