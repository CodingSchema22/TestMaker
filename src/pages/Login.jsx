import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Yahan tumhari existing API login request hogi
    // Example:
    //
    // const response = await axios.post("YOUR_LOGIN_API", {
    //   email,
    //   password,
    // });
    //
    // const data = response.data;

    // Successful login ke baad:
    // localStorage.setItem("token", data.token);
    // localStorage.setItem("role", data.user.role);

    // Jis page se user login par aya tha
    const from = location.state?.from?.pathname || "/dashboard";

    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>

        </form>

        <div className="mt-4 text-center">
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
          >
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
}