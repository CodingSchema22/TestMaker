import { FaBars, FaMoon } from "react-icons/fa";

export default function Navbar({ setIsOpen, toggleTheme }) {
  return (
    <div className="bg-white dark:bg-slate-800 shadow p-4 flex justify-between items-center">
      <button
        className="md:hidden text-xl"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      <h2 className="font-bold text-xl">
        Dashboard
      </h2>

      <button onClick={toggleTheme}>
        <FaMoon />
      </button>
    </div>
  );
}