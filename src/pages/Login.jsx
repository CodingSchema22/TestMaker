import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <div className="mt-4 text-center">
          <Link to="/register">
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
}