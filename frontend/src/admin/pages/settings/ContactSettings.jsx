import { useState, useEffect } from "react";
import axios from "axios";

export default function ContactSettings() {
  const [contactData, setContactData] = useState({ phone: "", email: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [existingId, setExistingId] = useState(null);

  useEffect(() => { fetchContactSettings(); }, []);

  const fetchContactSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/contact-settings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data?.length > 0) {
        const data = res.data[0];
        setContactData({ phone: data.phone || "", email: data.email || "", address: data.address || "" });
        setExistingId(data.id);
      }
    } catch (err) { console.error(err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      if (existingId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/contact-settings/${existingId}`, contactData, config);
        alert("Settings updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/contact-settings`, contactData, config);
        alert("Settings created successfully!");
        fetchContactSettings();
      }
    } catch (err) { alert("Failed to save settings"); } finally { setLoading(false); }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 border-l-4 border-[#D7B25B] pl-4">
        <h2 className="text-3xl font-extrabold text-white">Contact Settings</h2>
        <p className="text-gray-400">Configure public contact information for A2Z Seals.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0b2545]/30 border border-[#D7B25B]/20 p-8 rounded-2xl shadow-xl backdrop-blur-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Phone Number" value={contactData.phone} onChange={(e) => setContactData({...contactData, phone: e.target.value})} className="bg-[#111111] border border-[#D7B25B]/30 rounded-lg p-4 text-white focus:ring-2 focus:ring-[#D7B25B] outline-none" required />
          <input type="email" placeholder="Email Address" value={contactData.email} onChange={(e) => setContactData({...contactData, email: e.target.value})} className="bg-[#111111] border border-[#D7B25B]/30 rounded-lg p-4 text-white focus:ring-2 focus:ring-[#D7B25B] outline-none" required />
          <textarea rows="3" placeholder="Physical Address" value={contactData.address} onChange={(e) => setContactData({...contactData, address: e.target.value})} className="md:col-span-2 bg-[#111111] border border-[#D7B25B]/30 rounded-lg p-4 text-white focus:ring-2 focus:ring-[#D7B25B] outline-none" required />
        </div>
        <button type="submit" disabled={loading} className="mt-6 w-full bg-[#D7B25B] hover:bg-[#c89a38] text-[#0b2545] font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-95">
          {loading ? "Processing..." : "Save Configuration"}
        </button>
      </form>

      {existingId && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b font-bold text-[#0b2545]">Active Contact Details</div>
          <table className="w-full text-left">
            <tbody>
              {[ {l: "Phone", v: contactData.phone}, {l: "Email", v: contactData.email}, {l: "Address", v: contactData.address} ].map((row, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="p-4 font-bold text-gray-500 w-1/4">{row.l}</td>
                  <td className="p-4 text-[#0b2545] font-medium">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}