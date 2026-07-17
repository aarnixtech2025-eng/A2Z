import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  FiGrid, FiBriefcase, FiImage, FiFolder, FiMessageSquare,
  FiMail, FiSettings, FiInfo, FiFileText, FiSearch, FiStar, FiShoppingBag,
} from "react-icons/fi";

export default function AdminSidebar() {
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => { fetchLogo(); }, []);

  const fetchLogo = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/logo-settings`);
      if (res.data?.[0]) {
        const logoPath = res.data[0].logo.startsWith('/uploads/') ? res.data[0].logo : `/uploads/${res.data[0].logo}`;
        setLogoUrl(`${import.meta.env.VITE_API_URL}${logoPath}`);
      }
    } catch (error) { console.error("Error fetching logo:", error); }
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: FiGrid },
    { name: "About", path: "/admin/about", icon: FiInfo },
    { name: "Why Choose Us", path: "/admin/why-choose-us", icon: FiStar },
    { name: "Featured Products", path: "/admin/featured-products", icon: FiShoppingBag },
    { name: "Banners", path: "/admin/banners", icon: FiImage },
    { name: "Services", path: "/admin/services", icon: FiBriefcase },
    { name: "Gallery", path: "/admin/photos", icon: FiImage },
    { name: "Portfolio", path: "/admin/portfolios", icon: FiFolder },
    { name: "Courses", path: "/admin/courses", icon: FiFileText },
    { name: "Testimonials", path: "/admin/testimonials", icon: FiMessageSquare },
    { name: "Blogs", path: "/admin/blogs", icon: FiFileText },
    { name: "Inquiries", path: "/admin/inquiries", icon: FiMail },
    { name: "SEO", path: "/admin/seo", icon: FiSearch },
    { name: "Settings", path: "/admin/settings", icon: FiSettings },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#0b2545] dark:bg-gray-900 border-r border-[#D7B25B]/20 dark:border-gray-700 flex flex-col shadow-2xl relative overflow-hidden transition-colors duration-300">
      {/* Header Section */}
      <div className="p-6 border-b border-[#D7B25B]/20 dark:border-gray-700 bg-[#0b2545] dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col items-center text-center">
          <NavLink to="/">
            <img src={logoUrl} alt="Tanush Interiors" className="h-16 w-auto mb-4 hover:scale-105 transition-transform" />
          </NavLink>
          <h2 className="text-white dark:text-white font-bold tracking-widest uppercase">Admin Panel</h2>
          <p className="text-[#D7B25B] dark:text-yellow-400 text-xs font-medium mt-1">Tanush Interiors</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200
              ${isActive 
                ? "bg-[#D7B25B] dark:bg-blue-600 text-[#0b2545] dark:text-white font-bold shadow-lg" 
                : "text-gray-300 dark:text-gray-300 hover:bg-[#D7B25B]/10 dark:hover:bg-gray-700 hover:text-[#D7B25B] dark:hover:text-blue-400"
              }
            `}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#D7B25B]/20 dark:border-gray-700 bg-[#0b2545] dark:bg-gray-900 transition-colors duration-300">
        <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center uppercase tracking-widest">
          © 2026 Tanush Interiors
        </p>
      </div>
    </aside>
  );
}