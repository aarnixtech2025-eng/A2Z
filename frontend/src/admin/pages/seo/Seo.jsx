import { useState, useEffect } from "react";
import axios from "axios";

export default function Seo() {
  const [seoSettings, setSeoSettings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingSeo, setEditingSeo] = useState(null);
  const [formData, setFormData] = useState({
    pageName: "",
    seoTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });

  useEffect(() => {
    fetchSeoSettings();
  }, []);

  const fetchSeoSettings = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/seo`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSeoSettings(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (editingSeo) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/seo/${editingSeo.id}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        alert("SEO settings updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/seo`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("SEO settings created successfully!");
      }
      setFormData({
        pageName: "",
        seoTitle: "",
        metaDescription: "",
        metaKeywords: "",
      });
      setEditingSeo(null);
      fetchSeoSettings();
    } catch (error) {
      alert("Failed to save SEO settings");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (seo) => {
    setEditingSeo(seo);
    setFormData({
      pageName: seo.pageName,
      seoTitle: seo.seoTitle,
      metaDescription: seo.metaDescription,
      metaKeywords: seo.metaKeywords,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this SEO setting?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/seo/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("SEO setting deleted successfully!");
      fetchSeoSettings();
    } catch (error) {
      alert("Failed to delete SEO setting");
    }
  };

  const resetForm = () => {
    setEditingSeo(null);
    setFormData({
      pageName: "",
      seoTitle: "",
      metaDescription: "",
      metaKeywords: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">SEO Settings</h1>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingSeo ? "Edit SEO Setting" : "Add New SEO Setting"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Page Name
            </label>
            <input
              type="text"
              value={formData.pageName}
              onChange={(e) =>
                setFormData({ ...formData, pageName: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
              placeholder="e.g., home, about, contact"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SEO Title
            </label>
            <input
              type="text"
              value={formData.seoTitle}
              onChange={(e) =>
                setFormData({ ...formData, seoTitle: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
              placeholder="Page title for search engines"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description
            </label>
            <textarea
              value={formData.metaDescription}
              onChange={(e) =>
                setFormData({ ...formData, metaDescription: e.target.value })
              }
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
              placeholder="Brief description for search results"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Keywords
            </label>
            <textarea
              value={formData.metaKeywords}
              onChange={(e) =>
                setFormData({ ...formData, metaKeywords: e.target.value })
              }
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
              placeholder="Comma-separated keywords"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#D7B25B] to-[#C89A38] text-black font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? "Saving..." : editingSeo ? "Update SEO" : "Add SEO"}
            </button>
            {editingSeo && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* SEO Settings List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">All SEO Settings</h2>
        {seoSettings.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No SEO settings found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Page Name
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    SEO Title
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Meta Description
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Keywords
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {seoSettings.map((seo) => (
                  <tr key={seo.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <span className="font-medium text-gray-800">
                        {seo.pageName}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {seo.seoTitle}
                    </td>
                    <td className="py-3 px-4 text-gray-600 max-w-xs truncate">
                      {seo.metaDescription}
                    </td>
                    <td className="py-3 px-4 text-gray-600 max-w-xs truncate">
                      {seo.metaKeywords}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(seo)}
                          className="text-blue-600 font-medium hover:underline text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(seo.id)}
                          className="text-red-500 font-medium hover:underline text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
