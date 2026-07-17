import { useEffect, useState } from "react";
import axios from "axios";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiSearch } from "react-icons/fi";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    clientName: "", companyName: "", designation: "", review: "", rating: 5, status: "active", image: null,
  });

  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTestimonials(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) { console.error(error); }
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = new FormData();
      Object.keys(formData).forEach((key) => { if (formData[key] !== null) data.append(key, formData[key]); });

      if (editId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/testimonials/${editId}`, data, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/testimonials`, data, { headers: { Authorization: `Bearer ${token}` } });
      }
      fetchTestimonials();
      setShowModal(false);
      resetForm();
    } catch (error) { alert("Something went wrong"); }
  };

  const resetForm = () => {
    setFormData({ clientName: "", companyName: "", designation: "", review: "", rating: 5, status: "active", image: null });
    setEditId(null);
  };

  const filteredData = testimonials.filter(item => 
    item.clientName?.toLowerCase().includes(search.toLowerCase()) || 
    item.companyName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0b2545] dark:text-white">Testimonials</h1>
          <div className="w-16 h-1 bg-[#D7B25B] dark:bg-yellow-400 mt-2 rounded-full" />
        </div>
        <button onClick={() => { resetForm(); setShowModal(true); }} className="bg-[#0b2545] dark:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-[#153a66] dark:hover:bg-blue-700 transition-colors duration-300">
          <FiPlus /> Add Review
        </button>
      </div>

      <div className="relative">
        <FiSearch className="absolute left-4 top-3.5 text-gray-400 dark:text-gray-500" />
        <input type="text" placeholder="Search by name or company..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-[#0b2545] dark:focus:ring-blue-500 outline-none transition-colors duration-300" />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors duration-300">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
            <tr>
              <th className="p-4 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase">Client</th>
              <th className="p-4 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase">Company</th>
              <th className="p-4 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase">Rating</th>
              <th className="p-4 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase">Status</th>
              <th className="p-4 text-right text-xs font-bold text-gray-500 dark:text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                <td className="p-4 font-semibold text-[#0b2545] dark:text-white">{item.clientName}</td>
                <td className="p-4 text-gray-600 dark:text-gray-300">{item.companyName}</td>
                <td className="p-4 text-[#D7B25B] dark:text-yellow-400">{"★".repeat(item.rating)}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "active" ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <button onClick={() => { setEditId(item.id); setFormData(item); setShowModal(true); }} className="p-2 text-gray-400 hover:text-[#0b2545] dark:hover:text-blue-400 transition-colors duration-300"><FiEdit2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[#0b2545]/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 w-full max-w-xl rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200 transition-colors duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#0b2545] dark:text-white">{editId ? "Edit Review" : "Add Review"}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"><FiX size={24} /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="clientName" placeholder="Client Name" value={formData.clientName} onChange={(e) => setFormData({...formData, clientName: e.target.value})} className="border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl p-3 outline-none transition-colors duration-300" />
              <input type="text" name="companyName" placeholder="Company" value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} className="border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl p-3 transition-colors duration-300" />
              <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} className="border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl p-3 transition-colors duration-300" />
              <select name="rating" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} className="border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl p-3 transition-colors duration-300">
                {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r} Stars</option>)}
              </select>
            </div>
            <textarea name="review" rows="4" placeholder="Review" value={formData.review} onChange={(e) => setFormData({...formData, review: e.target.value})} className="w-full mt-4 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl p-3 transition-colors duration-300" />
            <button onClick={handleSubmit} className="w-full bg-[#0b2545] dark:bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-[#153a66] dark:hover:bg-blue-700 mt-6 transition-colors duration-300">Save Review</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;