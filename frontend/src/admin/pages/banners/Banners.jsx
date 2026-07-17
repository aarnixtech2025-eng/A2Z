import { useState, useEffect } from "react";
import axios from "axios";

export default function Banners() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    banner1: null,
    banner2: null,
    banner3: null,
    banner4: null,
    banner5: null,
    status: "active",
  });

  useEffect(() => { fetchBanners(); }, []);

  const fetchBanners = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/banners`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const rawData = Array.isArray(response.data.data) ? response.data.data : [];
      const bannerData = rawData.map((item) => ({
        ...item,
        banners: Array.isArray(item.banners) ? item.banners : typeof item.banners === "string" ? JSON.parse(item.banners) : [],
      }));
      setBanners(bannerData);
      if (bannerData.length > 0 && !editingBanner) handleEdit(bannerData[0]);
    } catch (error) { setBanners([]); }
  };

  const handleBannerUpload = (e, position) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [position]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const bannerFiles = [formData.banner1, formData.banner2, formData.banner3, formData.banner4, formData.banner5].filter(Boolean);
      
      const formDataSubmit = new FormData();
      formDataSubmit.append("title", formData.title);
      formDataSubmit.append("description", formData.description);
      formDataSubmit.append("status", formData.status);
      bannerFiles.forEach((file) => formDataSubmit.append("banners", file));
      
      if (editingBanner) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/banners/${editingBanner.id}`, formDataSubmit, { headers: { Authorization: `Bearer ${token}` } });
        alert("Banner updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/banners`, formDataSubmit, { headers: { Authorization: `Bearer ${token}` } });
        alert("Banner entry created successfully!");
      }
      resetForm();
      fetchBanners();
    } catch (error) { alert(`Failed to save: ${error.response?.data?.message || error.message}`); } finally { setLoading(false); }
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setFormData({ title: banner.title || "", description: banner.description || "", banner1: null, banner2: null, banner3: null, banner4: null, banner5: null, status: banner.status });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/banners/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      fetchBanners();
    } catch (error) { alert("Failed to delete"); }
  };

  const resetForm = () => {
    setEditingBanner(null);
    setFormData({ title: "", description: "", banner1: null, banner2: null, banner3: null, banner4: null, banner5: null, status: "active" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-extrabold text-white mb-8 border-b-2 border-yellow-400 pb-4">Banners Management</h1>

      {/* Form Section */}
      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">{editingBanner ? "Edit Banner Entry" : "Add New Banner"}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-300 mb-2">Title</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-colors duration-300" placeholder="Enter title" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-300 mb-2">Description</label>
            <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows="3" className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-colors duration-300" placeholder="Enter description" />
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase">Banner {num}</label>
                <input type="file" onChange={(e) => handleBannerUpload(e, `banner${num}`)} className="text-xs w-full text-gray-300" />
                {formData[`banner${num}`] && <img src={URL.createObjectURL(formData[`banner${num}`])} className="h-20 w-full object-cover rounded shadow" />}
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition transition-colors duration-300">{loading ? "Saving..." : "Save Banner"}</button>
            {editingBanner && <button type="button" onClick={resetForm} className="text-gray-400 font-medium hover:text-white transition-colors duration-300">Cancel</button>}
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="grid gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">{banner.title}</h3>
              <p className="text-sm text-gray-300">{banner.description}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(banner)} className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded font-bold text-white transition-colors duration-300">Edit</button>
              <button onClick={() => handleDelete(banner.id)} className="px-4 py-2 text-sm bg-red-900/30 text-red-400 hover:bg-red-900/50 rounded font-bold transition-colors duration-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}