import { useEffect, useState } from "react";
import axios from "axios";
import { FiPlus, FiEdit2, FiTrash2, FiX } from "react-icons/fi";

export default function Service() {
  const [openModal, setOpenModal] = useState(false);
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    image: null,
    status: "active",
  });

  useEffect(() => { fetchServices(); }, []);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) setServices(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) { console.error("Error fetching services", error); }
  };

  const handleOpenModal = (service = null) => {
    if (service) {
      setFormData({ 
        title: service.title, 
        shortDescription: service.shortDescription, 
        description: service.description, 
        image: null, 
        status: service.status 
      });
      setEditingId(service.id);
    } else {
      setFormData({ title: "", shortDescription: "", description: "", image: null, status: "active" });
      setEditingId(null);
    }
    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      if (editingId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/services/${editingId}`, data, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/services/with-image`, data, { headers: { Authorization: `Bearer ${token}` } });
      }
      alert("Service saved successfully");
      setOpenModal(false);
      fetchServices();
    } catch (err) { alert("Error saving service"); }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Services</h1>
          <div className="w-12 h-1 bg-yellow-400 mt-2 rounded-full" />
        </div>
        <button onClick={() => handleOpenModal()} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300">
          <FiPlus /> Add New Service
        </button>
      </div>

      <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700 border-b border-gray-600">
            <tr>
              <th className="p-4 text-left text-xs font-bold text-gray-300 uppercase">Image</th>
              <th className="p-4 text-left text-xs font-bold text-gray-300 uppercase">Service Title</th>
              <th className="p-4 text-left text-xs font-bold text-gray-300 uppercase">Status</th>
              <th className="p-4 text-right text-xs font-bold text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {services.map((item) => (
              <tr key={item.id} className="hover:bg-gray-700/50 transition-colors duration-300">
                <td className="p-4"><img src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`} className="w-16 h-16 rounded-lg object-cover" /></td>
                <td className="p-4 font-semibold text-white">{item.title}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === 'active' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button onClick={() => handleOpenModal(item)} className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"><FiEdit2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Overlay */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 w-full max-w-lg rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-white">{editingId ? "Edit Service" : "Add New Service"}</h2>
              <button onClick={() => setOpenModal(false)} className="text-gray-400 hover:text-red-400 transition-colors duration-300"><FiX size={24} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-600 rounded-xl p-3 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300" required />
              <textarea placeholder="Short Description" value={formData.shortDescription} onChange={(e) => setFormData({...formData, shortDescription: e.target.value})} className="w-full border border-gray-600 rounded-xl p-3 bg-gray-700 text-white transition-colors duration-300" rows="3" />
              <input type="file" onChange={(e) => setFormData({...formData, image: e.target.files[0]})} className="w-full p-2 border-2 border-dashed border-gray-600 rounded-xl text-gray-300" />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 mt-4 transition-colors duration-300">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}