import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaBook,
  FaPlusCircle,
  FaUser,
  FaCog,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Create Test", path: "/create-test", icon: <FaFileAlt /> },
    { name: "Question Bank", path: "/questions", icon: <FaBook /> },
    { name: "Add Question", path: "/add-question", icon: <FaPlusCircle /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Settings", path: "/setting", icon: <FaCog /> },
    { name: "Test Preview", path: "/test-preview", icon: <FaFileAlt />},
    { name: "Generated Tests", path: "/generated-tests",icon: <FaFileAlt />},
    {
  name: "Chapters",
  path: "/chapters",
  icon: <FaBook />
},
    {
  name: "Subjects",
  path: "/subjects",
  icon: <FaBook />
}
  ];

  return (
    <>
      <div
        className={`fixed md:static z-50 bg-slate-900 text-white w-64 h-screen transition-all duration-300 ${
          isOpen ? "left-0" : "-left-64 md:left-0"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-700">
          <h1 className="text-xl font-bold">Test Maker</h1>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg mb-2 ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}