import { useState, useEffect } from "react";
import axios from "axios";
import { FiUploadCloud, FiSave, FiImage } from "react-icons/fi";

export default function LogoSettings() {
  const [logoData, setLogoData] = useState({ logo: "" });
  const [loading, setLoading] = useState(false);
  const [existingId, setExistingId] = useState(null);

  useEffect(() => { fetchLogoSettings(); }, []);

  const fetchLogoSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/logo-settings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data?.length > 0) {
        const data = res.data[0];
        setLogoData({ logo: data.logo || "" });
        setExistingId(data.id);
      }
    } catch (err) { console.error(err); }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("image", file);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, fd, {
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setLogoData({ ...logoData, logo: res.data.imageUrl });
    } catch (err) { alert("Upload failed"); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      if (existingId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/logo-settings/${existingId}`, logoData, config);
        alert("Logo updated!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/logo-settings`, logoData, config);
        alert("Logo saved!");
        fetchLogoSettings();
      }
    } catch (err) { alert("Save failed"); } finally { setLoading(false); }
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold text-[#0b2545]">Logo Settings</h1>
        <div className="w-16 h-1 bg-[#D7B25B] mt-2 rounded-full" />
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Upload Company Logo</label>
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-[#D7B25B] transition-colors cursor-pointer group">
            <input type="file" onChange={handleImageUpload} accept="image/*" className="hidden" id="logoUpload" />
            <label htmlFor="logoUpload" className="cursor-pointer">
              <FiUploadCloud size={40} className="mx-auto text-gray-300 group-hover:text-[#D7B25B] mb-2 transition-colors" />
              <p className="text-sm font-bold text-[#0b2545]">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400 mt-1">SVG, PNG or JPG (max 2MB)</p>
            </label>
          </div>
        </div>

        {logoData.logo && (
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-400 uppercase">Preview:</span>
            <img 
              src={logoData.logo.startsWith('http') ? logoData.logo : `${import.meta.env.VITE_API_URL}${logoData.logo}`} 
              alt="Logo Preview" 
              className="h-16 w-auto object-contain" 
            />
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-[#0b2545] hover:bg-[#153a66] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          {loading ? "Saving..." : <><FiSave /> Save Changes</>}
        </button>
      </form>
    </div>
  );
}