import { useNavigate } from "react-router-dom";
import { FiLogOut, FiUser, FiSettings, FiLock, FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function AdminHeader() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

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
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <div>
        <h2 className="text-2xl font-extrabold text-[#0b2545]">Admin Dashboard</h2>
        <p className="text-gray-500 text-sm">Welcome back, Administrator</p>
      </div>

      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all border border-gray-200"
        >
          <div className="w-8 h-8 rounded-full bg-[#0b2545] text-[#D7B25B] flex items-center justify-center font-bold">A</div>
          <span className="text-[#0b2545] font-semibold text-sm">Account</span>
          <FiChevronDown className="text-gray-400" />
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
            <button onClick={() => navigate("/admin/profile")} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"><FiUser /> Profile</button>
            <button onClick={() => navigate("/admin/settings")} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"><FiSettings /> Settings</button>
            <hr className="my-2" />
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 text-red-600 text-sm font-bold"><FiLogOut /> Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}