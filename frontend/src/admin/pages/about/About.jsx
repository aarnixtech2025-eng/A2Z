import { useState, useEffect } from "react";
import axios from "axios";

export default function About() {
  const [aboutData, setAboutData] = useState({
    title: "",
    description: "",
    ourApproach: "",
    image1: "",
    image2: "",
    features: [],
    status: "active",
  });
  const [loading, setLoading] = useState(false);
  const [featureInput, setFeatureInput] = useState("");
  const [existingId, setExistingId] = useState(null);

  useEffect(() => { fetchAboutData(); }, []);

  const fetchAboutData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/about`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data.data || response.data;
      if (data && data.length > 0) {
        const about = data[0];
        setAboutData({
          title: about.title || "",
          description: about.description || "",
          ourApproach: about.ourApproach || "",
          image1: about.image1 || "",
          image2: about.image2 || "",
          features: Array.isArray(about.features) ? about.features : (typeof about.features === 'string' ? JSON.parse(about.features) : []),
          status: about.status || "active",
        });
        setExistingId(about.id);
      }
    } catch (error) { console.error("Error fetching data:", error); }
  };

  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
      });
      setAboutData({ ...aboutData, [field]: response.data.imageUrl, [`${field}File`]: file });
    } catch (error) { alert("Failed to upload image"); }
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setAboutData({ ...aboutData, features: [...aboutData.features, featureInput.trim()] });
      setFeatureInput("");
    }
  };

  const removeFeature = (index) => {
    setAboutData({ ...aboutData, features: aboutData.features.filter((_, i) => i !== index) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", aboutData.title);
      formData.append("description", aboutData.description);
      formData.append("ourApproach", aboutData.ourApproach);
      formData.append("features", JSON.stringify(aboutData.features));
      formData.append("status", aboutData.status);
      if (aboutData.image1File) formData.append("image1", aboutData.image1File);
      if (aboutData.image2File) formData.append("image2", aboutData.image2File);

      if (existingId) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/about/${existingId}`, formData, { headers: { Authorization: `Bearer ${token}` } });
        alert("Updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/about`, formData, { headers: { Authorization: `Bearer ${token}` } });
        alert("Created successfully!");
      }
      fetchAboutData();
    } catch (error) { alert("Failed to update"); } finally { setLoading(false); }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-100">
      <h1 className="text-2xl font-extrabold text-[#0b2545] mb-8 border-b pb-4 border-[#D7B25B]">About Us Management</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
          <input type="text" value={aboutData.title} onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D7B25B]" required />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
          <textarea value={aboutData.description} onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })} rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D7B25B]" required />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-bold text-gray-700 mb-1">Our Approach</label>
          <textarea value={aboutData.ourApproach} onChange={(e) => setAboutData({ ...aboutData, ourApproach: e.target.value })} rows="3" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D7B25B]" />
        </div>

        {/* File Uploads */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <label className="block text-sm font-bold text-gray-700 mb-2">Primary Image</label>
          <input type="file" onChange={(e) => handleImageUpload(e, "image1")} className="w-full text-sm" />
          {aboutData.image1 && <img src={aboutData.image1.startsWith('http') ? aboutData.image1 : `${import.meta.env.VITE_API_URL}/uploads/${aboutData.image1}`} className="mt-2 h-24 object-cover rounded" alt="Preview 1" />}
        </div>

        <div className="p-4 border rounded-lg bg-gray-50">
          <label className="block text-sm font-bold text-gray-700 mb-2">Secondary Image</label>
          <input type="file" onChange={(e) => handleImageUpload(e, "image2")} className="w-full text-sm" />
          {aboutData.image2 && <img src={aboutData.image2.startsWith('http') ? aboutData.image2 : `${import.meta.env.VITE_API_URL}/uploads/${aboutData.image2}`} className="mt-2 h-24 object-cover rounded" alt="Preview 2" />}
        </div>

        <button type="submit" disabled={loading} className="col-span-1 md:col-span-2 bg-[#D7B25B] text-[#0b2545] font-bold py-3 rounded-lg hover:bg-[#c89a38] transition duration-300">
          {loading ? "SAVING..." : "SAVE ABOUT SECTION"}
        </button>
      </form>
    </div>
  );
}