const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-500 text-white p-4 rounded">
          Total Questions
        </div>

        <div className="bg-green-500 text-white p-4 rounded">
          Generated Papers
        </div>

        <div className="bg-purple-500 text-white p-4 rounded">
          AI Usage
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;