import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaBook,
  FaPlusCircle,
  FaUser,
  FaCog,
  FaTimes,
  FaLayerGroup,
  FaClipboardList,
} from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Create Test",
      path: "/create-test",
      icon: <FaFileAlt />,
    },
    {
      name: "Question Bank",
      path: "/questions",
      icon: <FaBook />,
    },
    {
      name: "Add Question",
      path: "/add-question",
      icon: <FaPlusCircle />,
    },
    {
      name: "Generated Tests",
      path: "/generated-tests",
      icon: <FaClipboardList />,
    },
    {
      name: "Test Preview",
      path: "/test-preview",
      icon: <FaFileAlt />,
    },
    {
      name: "Subjects",
      path: "/subjects",
      icon: <FaLayerGroup />,
    },
    {
      name: "Chapters",
      path: "/chapters",
      icon: <FaBook />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Settings",
      path: "/setting",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-64 flex-col
          border-r border-blue-100
          bg-white
          shadow-xl shadow-blue-100/30
          transition-transform duration-300
          md:static md:z-auto md:translate-x-0
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-blue-100 px-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
              <FaFileAlt />
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Test<span className="text-blue-600">Maker</span>
              </h1>

              <p className="text-[9px] font-medium uppercase tracking-widest text-gray-400">
                Test Management
              </p>
            </div>

          </div>

          {/* Mobile Close */}
          <button
            className="rounded-lg p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">

          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Main Menu
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                  group flex items-center gap-3
                  rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }
                  `
                }
              >
                <span className="text-base">
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </NavLink>
            ))}

          </div>

        </nav>

        {/* Bottom Card */}
        <div className="border-t border-blue-100 p-4">

          <div className="rounded-2xl bg-blue-50 p-4">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FaFileAlt />
            </div>

            <p className="mt-3 text-sm font-semibold text-gray-800">
              Create better tests
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Build customized tests quickly and easily.
            </p>

          </div>

        </div>

      </aside>
    </>
  );
}