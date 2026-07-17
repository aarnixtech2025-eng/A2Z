import { useEffect, useState } from "react";
import axios from "axios";
import { FiMail, FiTrash2, FiX, FiEye, FiClock, FiCheck } from "react-icons/fi";

export default function Inquiry() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filter, setFilter] = useState("all");
  const token = localStorage.getItem("token");

  useEffect(() => { fetchInquiries(); }, []);

  const fetchInquiries = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/inquiries`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInquiries(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) { console.error(err); } 
    finally { setLoading(false); }
  };

  const handleStatusChange = async (inquiry, newStatus) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/inquiries/${inquiry.id}/status`, 
        { status: newStatus }, { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchInquiries();
      setSelectedInquiry(null);
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/inquiries/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      fetchInquiries();
      setSelectedInquiry(null);
    } catch (err) { console.error(err); }
  };

  const filtered = filter === "all" ? inquiries : inquiries.filter(i => i.status === filter);
  const formatDate = (d) => new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Inquiries</h1>
          <div className="w-16 h-1 bg-yellow-400 mt-2 rounded-full" />
        </div>
        <div className="flex gap-2 bg-gray-700 p-1 rounded-xl">
          {["all", "unread", "read"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition ${filter === f ? "bg-gray-600 text-white shadow-sm" : "text-gray-400 hover:text-white"}`}>
              {f} ({f === "all" ? inquiries.length : inquiries.filter(i => i.status === f).length})
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700 border-b border-gray-600">
            <tr>
              <th className="p-4 text-left text-xs font-bold text-gray-300 uppercase">Status</th>
              <th className="p-4 text-left text-xs font-bold text-gray-300 uppercase">Client</th>
              <th className="p-4 text-left text-xs font-bold text-gray-300 uppercase">Message Preview</th>
              <th className="p-4 text-right text-xs font-bold text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filtered.map((inq) => (
              <tr key={inq.id} className={`hover:bg-gray-700/50 transition-colors duration-300 ${inq.status === 'unread' ? 'bg-blue-900/20' : ''}`}>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${inq.status === 'unread' ? 'bg-blue-900/30 text-blue-400' : 'bg-gray-700 text-gray-400'}`}>
                    {inq.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4">
                  <div className="font-bold text-white">{inq.name}</div>
                  <div className="text-xs text-gray-400">{inq.email}</div>
                </td>
                <td className="p-4 text-sm text-gray-300 truncate max-w-xs">{inq.message}</td>
                <td className="p-4 text-right">
                  <button onClick={() => setSelectedInquiry(inq)} className="p-2 text-white hover:bg-gray-700 rounded-lg transition-colors duration-300"><FiEye /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedInquiry && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-700">
            <div className="flex justify-between mb-6">
              <h2 className="text-xl font-extrabold text-white">Inquiry Details</h2>
              <button onClick={() => setSelectedInquiry(null)}><FiX size={24} className="text-gray-400 hover:text-white transition-colors duration-300"/></button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-gray-700 p-3 rounded-xl"><FiMail className="text-white"/></div>
                <div>
                  <p className="font-bold text-white">{selectedInquiry.name}</p>
                  <p className="text-sm text-gray-400">{selectedInquiry.email} • {selectedInquiry.phone}</p>
                </div>
              </div>
              <div className="p-4 bg-gray-700 rounded-2xl text-sm text-gray-300 leading-relaxed">{selectedInquiry.message}</div>
              <div className="flex gap-2 pt-4">
                <button onClick={() => handleStatusChange(selectedInquiry, selectedInquiry.status === 'read' ? 'unread' : 'read')} className="flex-1 bg-gray-700 py-3 rounded-xl font-bold text-sm text-white hover:bg-gray-600 transition-colors duration-300">Mark as {selectedInquiry.status === 'read' ? 'Unread' : 'Read'}</button>
                <button onClick={() => handleDelete(selectedInquiry.id)} className="flex-1 bg-red-900/30 text-red-400 py-3 rounded-xl font-bold text-sm hover:bg-red-900/50 transition-colors duration-300">Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}