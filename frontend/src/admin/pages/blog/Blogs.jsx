import { useState, useEffect } from "react";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "", slug: "", shortDescription: "", content: "", image: "", status: "draft",
  });

  useEffect(() => { fetchBlogs(); }, []);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) { setBlogs([]); }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formDataUpload = new FormData();
    formDataUpload.append("image", file);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, formDataUpload, {
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
      });
      setFormData({ ...formData, image: response.data.imageUrl });
    } catch (error) { alert("Failed to upload image"); }
  };

  const generateSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({ ...formData, title, slug: generateSlug(title) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (editingBlog) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/blogs/${editingBlog.id}`, formData, { headers: { Authorization: `Bearer ${token}` } });
        alert("Blog updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs`, formData, { headers: { Authorization: `Bearer ${token}` } });
        alert("Blog created successfully!");
      }
      resetForm();
      fetchBlogs();
    } catch (error) { alert("Failed to save blog"); } finally { setLoading(false); }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({ title: blog.title, slug: blog.slug, shortDescription: blog.shortDescription, content: blog.content, image: blog.image, status: blog.status });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      fetchBlogs();
    } catch (error) { alert("Failed to delete"); }
  };

  const handleStatusToggle = async (id, currentStatus) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, { status: currentStatus === "published" ? "draft" : "published" }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      fetchBlogs();
    } catch (error) {}
  };

  const resetForm = () => {
    setEditingBlog(null);
    setFormData({ title: "", slug: "", shortDescription: "", content: "", image: "", status: "draft" });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-extrabold text-white mb-8 border-b-2 border-yellow-400 pb-4">Blogs Management</h1>

      <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">{editingBlog ? "Edit Blog Post" : "Create New Blog Post"}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Title</label>
            <input type="text" value={formData.title} onChange={handleTitleChange} className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-colors duration-300" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Slug</label>
            <input type="text" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-colors duration-300" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-300 mb-2">Short Description</label>
            <textarea value={formData.shortDescription} onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })} rows="2" className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-colors duration-300" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-300 mb-2">Content</label>
            <textarea value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows="6" className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-colors duration-300" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Featured Image</label>
            <input type="file" onChange={handleImageUpload} className="text-sm w-full text-gray-300" />
            {formData.image && <img src={`${import.meta.env.VITE_API_URL}${formData.image}`} className="mt-2 h-32 w-full object-cover rounded-lg" alt="Preview" />}
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Status</label>
            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="md:col-span-2 flex gap-4">
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition transition-colors duration-300">{loading ? "Saving..." : "Save Blog Post"}</button>
            {editingBlog && <button type="button" onClick={resetForm} className="text-gray-400 font-bold px-4 hover:text-white transition-colors duration-300">Cancel</button>}
          </div>
        </form>
      </div>

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-sm flex gap-6 items-start">
            {blog.image && <img src={`${import.meta.env.VITE_API_URL}${blog.image.startsWith('/') ? '' : '/'}${blog.image}`} className="w-32 h-32 object-cover rounded-lg" alt={blog.title} />}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">{blog.title}</h3>
              <p className="text-sm text-gray-400 mb-2 font-mono italic">{blog.slug}</p>
              <p className="text-gray-300 mb-4 line-clamp-2">{blog.shortDescription}</p>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${blog.status === "published" ? "bg-green-900/30 text-green-400" : "bg-yellow-900/30 text-yellow-400"}`}>
                {blog.status.toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => handleEdit(blog)} className="text-sm font-bold text-white hover:text-blue-400 transition-colors duration-300">Edit</button>
              <button onClick={() => handleStatusToggle(blog.id, blog.status)} className="text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300">Toggle Status</button>
              <button onClick={() => handleDelete(blog.id)} className="text-sm font-bold text-red-400 hover:text-red-300 transition-colors duration-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}