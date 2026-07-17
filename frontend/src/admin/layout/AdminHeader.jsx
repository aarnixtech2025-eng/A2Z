import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUser, FiSettings, FiLock, FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function AdminHeader() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setShowDropdown(false); };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div>
        <h2 className="text-2xl font-extrabold text-[#0b2545] dark:text-white">Admin Dashboard</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Welcome back, Administrator</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all border border-gray-200 dark:border-gray-600"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <FiSun className="text-yellow-400" size={20} /> : <FiMoon className="text-gray-600" size={20} />}
        </button>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-600"
          >
            <div className="w-8 h-8 rounded-full bg-[#0b2545] text-[#D7B25B] flex items-center justify-center font-bold">A</div>
            <span className="text-[#0b2545] dark:text-white font-semibold text-sm">Account</span>
            <FiChevronDown className="text-gray-400 dark:text-gray-300" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl py-2 z-50 transition-colors duration-300">
              <button onClick={() => navigate("/admin/profile")} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm"><FiUser /> Profile</button>
              <button onClick={() => navigate("/admin/settings")} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm"><FiSettings /> Settings</button>
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-bold"><FiLogOut /> Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}