import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
   <div className="flex min-h-screen bg-gray-100 dark:bg-gray-1500">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1">
        <Navbar
          setIsOpen={setIsOpen}
          toggleTheme={toggleTheme}
        />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}