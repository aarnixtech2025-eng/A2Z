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
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-[#0b2545] mb-8 border-b-2 border-[#D7B25B] pb-4">Banners Management</h1>

      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">{editingBanner ? "Edit Banner Entry" : "Add New Banner"}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D7B25B]" placeholder="Enter title" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
            <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows="3" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D7B25B]" placeholder="Enter description" />
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="space-y-2">
                <label className="block text-xs font-bold text-gray-500 uppercase">Banner {num}</label>
                <input type="file" onChange={(e) => handleBannerUpload(e, `banner${num}`)} className="text-xs w-full" />
                {formData[`banner${num}`] && <img src={URL.createObjectURL(formData[`banner${num}`])} className="h-20 w-full object-cover rounded shadow" />}
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <button type="submit" className="bg-[#0b2545] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1a3d6d] transition">{loading ? "Saving..." : "Save Banner"}</button>
            {editingBanner && <button type="button" onClick={resetForm} className="text-gray-600 font-medium">Cancel</button>}
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="grid gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white p-6 rounded-xl border shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#0b2545]">{banner.title}</h3>
              <p className="text-sm text-gray-600">{banner.description}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(banner)} className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded font-bold">Edit</button>
              <button onClick={() => handleDelete(banner.id)} className="px-4 py-2 text-sm bg-red-50 text-red-600 hover:bg-red-100 rounded font-bold">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}