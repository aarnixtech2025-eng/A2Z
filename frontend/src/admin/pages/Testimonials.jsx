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
          <h1 className="text-3xl font-extrabold text-[#0b2545]">Testimonials</h1>
          <div className="w-16 h-1 bg-[#D7B25B] mt-2 rounded-full" />
        </div>
        <button onClick={() => { resetForm(); setShowModal(true); }} className="bg-[#0b2545] text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:bg-[#153a66]">
          <FiPlus /> Add Review
        </button>
      </div>

      <div className="relative">
        <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
        <input type="text" placeholder="Search by name or company..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#0b2545] outline-none" />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">Client</th>
              <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">Company</th>
              <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">Rating</th>
              <th className="p-4 text-left text-xs font-bold text-gray-500 uppercase">Status</th>
              <th className="p-4 text-right text-xs font-bold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50">
                <td className="p-4 font-semibold text-[#0b2545]">{item.clientName}</td>
                <td className="p-4 text-gray-600">{item.companyName}</td>
                <td className="p-4 text-[#D7B25B]">{"★".repeat(item.rating)}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "active" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <button onClick={() => { setEditId(item.id); setFormData(item); setShowModal(true); }} className="p-2 text-gray-400 hover:text-[#0b2545]"><FiEdit2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[#0b2545]/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#0b2545]">{editId ? "Edit Review" : "Add Review"}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-red-500"><FiX size={24} /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="clientName" placeholder="Client Name" value={formData.clientName} onChange={(e) => setFormData({...formData, clientName: e.target.value})} className="border border-gray-200 rounded-xl p-3 outline-none" />
              <input type="text" name="companyName" placeholder="Company" value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} className="border border-gray-200 rounded-xl p-3" />
              <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} className="border border-gray-200 rounded-xl p-3" />
              <select name="rating" value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} className="border border-gray-200 rounded-xl p-3">
                {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r} Stars</option>)}
              </select>
            </div>
            <textarea name="review" rows="4" placeholder="Review" value={formData.review} onChange={(e) => setFormData({...formData, review: e.target.value})} className="w-full mt-4 border border-gray-200 rounded-xl p-3" />
            <button onClick={handleSubmit} className="w-full bg-[#0b2545] text-white py-3 rounded-xl font-bold hover:bg-[#153a66] mt-6">Save Review</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;