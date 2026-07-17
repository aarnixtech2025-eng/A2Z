import { useState, useEffect } from "react";
import axios from "axios";

export default function SocialSettings() {
  const [socialData, setSocialData] = useState({ facebook: "", instagram: "", linkedin: "", youtube: "" });
  const [loading, setLoading] = useState(false);
  const [existingId, setExistingId] = useState(null);

  useEffect(() => { fetchSocialSettings(); }, []);

  const fetchSocialSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/social-settings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data?.length > 0) {
        const data = res.data[0];
        setSocialData({
          facebook: data.facebook || "",
          instagram: data.instagram || "",
          linkedin: data.linkedin || "",
          youtube: data.youtube || "",
        });
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
        await axios.put(`${import.meta.env.VITE_API_URL}/api/social-settings/${existingId}`, socialData, config);
        alert("Social settings updated!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/social-settings`, socialData, config);
        alert("Social settings created!");
        fetchSocialSettings();
      }
    } catch (err) { alert("Failed to save settings"); } finally { setLoading(false); }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 border-l-4 border-[#D7B25B] pl-4">
        <h2 className="text-3xl font-extrabold text-white">Social Media Settings</h2>
        <p className="text-gray-400">Configure public social media profiles for A2Z Seals.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0b2545]/40 border border-[#D7B25B]/20 p-8 rounded-2xl shadow-xl backdrop-blur-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['facebook', 'instagram', 'linkedin', 'youtube'].map((platform) => (
            <div key={platform}>
              <label className="block text-xs font-bold text-[#D7B25B] mb-2 uppercase tracking-wider">{platform} URL</label>
              <input 
                type="text" 
                value={socialData[platform]} 
                onChange={(e) => setSocialData({...socialData, [platform]: e.target.value})} 
                className="w-full bg-[#111111] border border-[#D7B25B]/30 rounded-lg p-4 text-white focus:ring-2 focus:ring-[#D7B25B] outline-none" 
              />
            </div>
          ))}
        </div>
        <button type="submit" disabled={loading} className="mt-8 w-full bg-[#D7B25B] hover:bg-[#c89a38] text-[#0b2545] font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-95">
          {loading ? "Processing..." : "Save Configuration"}
        </button>
      </form>

      {existingId && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gray-50 px-6 py-4 border-b font-bold text-[#0b2545] uppercase tracking-wide text-sm">Active Social Profiles</div>
          <table className="w-full text-left">
            <tbody>
              {Object.entries(socialData).map(([key, val]) => (
                <tr key={key} className="border-b last:border-none">
                  <td className="p-4 font-bold text-gray-500 w-1/4 capitalize">{key}</td>
                  <td className="p-4 text-[#0b2545] font-medium break-all">{val || "Not configured"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}