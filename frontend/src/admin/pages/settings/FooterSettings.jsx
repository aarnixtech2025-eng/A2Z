import { useState, useEffect } from "react";
import axios from "axios";

export default function FooterSettings() {
  const [footerData, setFooterData] = useState({ description: "", copyrightText: "" });
  const [loading, setLoading] = useState(false);
  const [existingId, setExistingId] = useState(null);

  useEffect(() => { fetchFooterSettings(); }, []);

  const fetchFooterSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/footer-settings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data?.length > 0) {
        const data = res.data[0];
        setFooterData({ description: data.description || "", copyrightText: data.copyrightText || "" });
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
        await axios.put(`${import.meta.env.VITE_API_URL}/api/footer-settings/${existingId}`, footerData, config);
        alert("Footer updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/footer-settings`, footerData, config);
        alert("Footer created successfully!");
        fetchFooterSettings();
      }
    } catch (err) { alert("Failed to save footer settings"); } finally { setLoading(false); }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 border-l-4 border-[#D7B25B] pl-4">
        <h2 className="text-3xl font-extrabold text-white">Footer Settings</h2>
        <p className="text-gray-400">Manage the footer content and copyright information.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0b2545]/40 border border-[#D7B25B]/20 p-8 rounded-2xl shadow-xl backdrop-blur-sm mb-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#D7B25B] mb-2 uppercase tracking-wider">Footer Description</label>
            <textarea rows="4" value={footerData.description} onChange={(e) => setFooterData({...footerData, description: e.target.value})} className="w-full bg-[#111111] border border-[#D7B25B]/30 rounded-lg p-4 text-white focus:ring-2 focus:ring-[#D7B25B] outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#D7B25B] mb-2 uppercase tracking-wider">Copyright Text</label>
            <input type="text" value={footerData.copyrightText} onChange={(e) => setFooterData({...footerData, copyrightText: e.target.value})} className="w-full bg-[#111111] border border-[#D7B25B]/30 rounded-lg p-4 text-white focus:ring-2 focus:ring-[#D7B25B] outline-none" required />
          </div>
        </div>
        <button type="submit" disabled={loading} className="mt-8 w-full bg-[#D7B25B] hover:bg-[#c89a38] text-[#0b2545] font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-95">
          {loading ? "Processing..." : "Save Configuration"}
        </button>
      </form>

      {existingId && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-50 px-6 py-4 border-b font-bold text-[#0b2545] uppercase tracking-wide text-sm">Live Footer Configuration</div>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b"><td className="p-4 font-bold text-gray-500 w-1/4">Description</td><td className="p-4 text-[#0b2545] italic">{footerData.description}</td></tr>
              <tr><td className="p-4 font-bold text-gray-500 w-1/4">Copyright</td><td className="p-4 text-[#0b2545] font-medium">{footerData.copyrightText}</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}