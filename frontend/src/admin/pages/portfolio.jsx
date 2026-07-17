import { useEffect, useState } from "react";
import axios from "axios";
import { FiPlus, FiEdit2, FiX } from "react-icons/fi";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ featuredImage: null, status: "active" });

  useEffect(() => { fetchPortfolios(); }, []);

  const fetchPortfolios = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolios`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) setPortfolioData(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) { console.error("Error fetching portfolios", error); }
  };

  const handleOpenModal = (item = null) => {
    setEditingId(item?.id || null);
    setFormData({ featuredImage: null, status: item?.status || "active" });
    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = new FormData();
    data.append("status", formData.status);
    if (formData.featuredImage) data.append("featuredImage", formData.featuredImage);

    try {
      if (editingId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/portfolios/${editingId}`, data, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolios`, data, {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        });
      }
      alert("Project saved successfully");
      setOpenModal(false);
      fetchPortfolios();
    } catch (err) { alert("Error saving project"); }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0b2545]">Vastu Management</h1>
          <div className="w-16 h-1 bg-[#D7B25B] mt-2 rounded-full" />
        </div>
        <button onClick={() => handleOpenModal()} className="bg-[#0b2545] text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-[#153a66] transition-colors">
          <FiPlus /> Add Project
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">Image</th>
              <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">Status</th>
              <th className="p-4 text-right text-xs font-bold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {portfolioData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50">
                <td className="p-4">
                  <img src={`${import.meta.env.VITE_API_URL}/uploads/${item.featuredImage}`} className="w-16 h-16 rounded-lg object-cover border border-gray-100" />
                </td>
                <td className="p-4 font-semibold text-[#0b2545]">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button onClick={() => handleOpenModal(item)} className="p-2 text-gray-400 hover:text-[#0b2545]"><FiEdit2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-[#0b2545]/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#0b2545]">{editingId ? "Edit Project" : "Add Project"}</h2>
              <button onClick={() => setOpenModal(false)} className="text-gray-400 hover:text-red-500"><FiX size={24} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="file" onChange={(e) => setFormData({...formData, featuredImage: e.target.files[0]})} className="w-full p-2 border-2 border-dashed border-gray-200 rounded-xl text-sm" />
              <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full border border-gray-200 rounded-xl p-3 outline-none">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button type="submit" className="w-full bg-[#0b2545] text-white py-3 rounded-xl font-bold hover:bg-[#153a66] mt-4">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;