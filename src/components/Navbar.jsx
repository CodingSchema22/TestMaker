import { FaBars, FaMoon, FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ setIsOpen, toggleTheme }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow p-4 flex justify-between items-center">

      {/* Mobile Menu */}
      <button
        className="md:hidden text-xl"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Heading */}
      <h2 className="font-bold text-xl">
        Dashboard
      </h2>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="text-lg"
        >
          <FaMoon />
        </button>

        {/* Authentication */}
        {token ? (
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
            >
              <FaSignInAlt />
              Login
            </Link>

            <Link
              to="/register"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              <FaUserPlus />
              Sign Up
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}