import { FiFolder, FiImage, FiMessageSquare, FiDatabase } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState([
    { title: "Total Projects", value: 0, icon: FiFolder },
    { title: "Gallery Images", value: 0, icon: FiImage },
    { title: "Testimonials", value: 0, icon: FiMessageSquare },
  ]);

  useEffect(() => { fetchDashboardStats(); }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const [pRes, gRes, tRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/api/portfolios`, { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${import.meta.env.VITE_API_URL}/api/photos`, { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      setStats([
        { title: "Total Projects", value: pRes.data.data?.length || 0, icon: FiFolder },
        { title: "Gallery Images", value: gRes.data.data?.length || 0, icon: FiImage },
        { title: "Testimonials", value: tRes.data.data?.length || 0, icon: FiMessageSquare },
      ]);
    } catch (error) { console.error("Error fetching stats", error); }
  };

  return (
    <div className="space-y-6">
      {/* Intro Card */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h1 className="text-3xl font-extrabold text-[#0b2545]">Dashboard</h1>
        <div className="w-16 h-1.5 bg-[#D7B25B] rounded-full my-4" />
        <p className="text-gray-600 max-w-2xl">
          Welcome to the Tanush Interiors administration hub. Manage your portfolios, gallery, 
          testimonials, and core system settings from this central panel.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{item.title}</p>
              <h2 className="text-4xl font-extrabold text-[#0b2545] mt-2">{item.value}</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#0b2545]/5 flex items-center justify-center">
              <item.icon className="text-[#0b2545]" size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Overview Info */}
      <div className="bg-[#0b2545] p-8 rounded-2xl shadow-lg text-white">
        <div className="flex items-center gap-3 mb-4">
          <FiDatabase className="text-[#D7B25B]" size={24} />
          <h2 className="text-xl font-bold">Admin Overview</h2>
        </div>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          System operational. All updates made through this dashboard are pushed directly 
          to the live environment. Please ensure that all image assets are optimized 
          before uploading to maintain peak website performance.
        </p>
      </div>
    </div>
  );
}