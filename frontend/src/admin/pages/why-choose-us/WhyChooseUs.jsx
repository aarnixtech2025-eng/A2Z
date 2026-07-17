import { useState, useEffect } from "react";
import axios from "axios";

export default function WhyChooseUs() {
  const [whyChooseUsList, setWhyChooseUsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    imageFile: null,
    description: "",
    features: [],
    clients: 0,
    projects: 0,
    services: 0,
    rewards: 0,
    experience: 0,
    status: "active",
  });

  useEffect(() => {
    fetchWhyChooseUs();
  }, []);

  const fetchWhyChooseUs = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/why-choose-us`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const rawData = response.data.data || [];
      const data = rawData.map((item) => ({
        ...item,
        features: Array.isArray(item.features)
          ? item.features
          : typeof item.features === "string"
          ? (() => { try { return JSON.parse(item.features); } catch { return []; } })()
          : [],
      }));
      setWhyChooseUsList(data);
      
      if (data.length > 0 && !editingItem) {
        handleEdit(data[0]);
      }
    } catch (error) {
      setWhyChooseUsList([]);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData({ ...formData, imageFile: file });
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ""] });
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      
      const formDataSubmit = new FormData();
      formDataSubmit.append("description", formData.description);
      formDataSubmit.append("features", JSON.stringify(formData.features));
      formDataSubmit.append("clients", formData.clients);
      formDataSubmit.append("projects", formData.projects);
      formDataSubmit.append("services", formData.services);
      formDataSubmit.append("rewards", formData.rewards);
      formDataSubmit.append("experience", formData.experience);
      formDataSubmit.append("status", formData.status);
      if (formData.imageFile) {
        formDataSubmit.append("image", formData.imageFile);
      }
      
      if (editingItem) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/why-choose-us/${editingItem.id}`,
          formDataSubmit,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        alert("Why Choose Us updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/why-choose-us`, formDataSubmit, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Why Choose Us created successfully!");
      }
      setFormData({ 
        imageFile: null, 
        description: "", 
        features: [], 
        clients: 0, 
        projects: 0, 
        services: 0, 
        rewards: 0, 
        experience: 0, 
        status: "active" 
      });
      setEditingItem(null);
      fetchWhyChooseUs();
    } catch (error) {
      alert(`Failed to save: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      imageFile: null,
      description: item.description || "",
      features: Array.isArray(item.features) ? item.features : (typeof item.features === 'string' ? JSON.parse(item.features) : []),
      clients: item.clients || 0,
      projects: item.projects || 0,
      services: item.services || 0,
      rewards: item.rewards || 0,
      experience: item.experience || 0,
      status: item.status,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/why-choose-us/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Deleted successfully!");
      fetchWhyChooseUs();
    } catch (error) {
      alert("Failed to delete");
    }
  };

  const handleStatusToggle = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/why-choose-us/${id}`,
        { status: currentStatus === "active" ? "inactive" : "active" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchWhyChooseUs();
    } catch (error) {
    }
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({ 
      imageFile: null, 
      description: "", 
      features: [], 
      clients: 0, 
      projects: 0, 
      services: 0, 
      rewards: 0, 
      experience: 0, 
      status: "active" 
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Why Choose Us Management</h1>

      {/* Form */}
      <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-8 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">
          {editingItem ? "Edit Why Choose Us" : "Add Why Choose Us"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Image
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white"
            />
            {formData.imageFile ? (
              <img
                src={URL.createObjectURL(formData.imageFile)}
                alt="Preview"
                className="mt-2 h-48 w-full object-cover rounded-lg"
              />
            ) : editingItem && editingItem.image && (
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${editingItem.image}`}
                alt="Current"
                className="mt-2 h-48 w-full object-cover rounded-lg"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="4"
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Features
            </label>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder={`Feature ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addFeature}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Add Feature
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Clients
              </label>
              <input
                type="number"
                value={formData.clients}
                onChange={(e) => setFormData({ ...formData, clients: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Projects
              </label>
              <input
                type="number"
                value={formData.projects}
                onChange={(e) => setFormData({ ...formData, projects: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Services
              </label>
              <input
                type="number"
                value={formData.services}
                onChange={(e) => setFormData({ ...formData, services: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rewards
              </label>
              <input
                type="number"
                value={formData.rewards}
                onChange={(e) => setFormData({ ...formData, rewards: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Experience (Years)
              </label>
              <input
                type="number"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 text-blue-400 font-semibold hover:underline disabled:opacity-50 transition-colors duration-300"
            >
              {loading ? "Saving..." : editingItem ? "Update" : "Add"}
            </button>
            {editingItem && (
              <button
                type="button"
                onClick={resetForm}
                className="text-gray-400 font-medium hover:underline transition-colors duration-300"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List */}
      <div className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-white">Why Choose Us Entries</h2>
        {whyChooseUsList.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No entries found</p>
        ) : (
          <div className="space-y-6">
            {whyChooseUsList.map((item) => (
              <div
                key={item.id}
                className="border border-gray-700 rounded-lg p-4 bg-gray-800"
              >
                {item.image && (
                  <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                    alt="Why Choose Us"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                {item.description && (
                  <p className="text-gray-300 mb-4">{item.description}</p>
                )}
                {item.features && item.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">Features:</h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div>
                    <span className="font-semibold text-white">Clients:</span> <span className="text-gray-300">{item.clients}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Projects:</span> <span className="text-gray-300">{item.projects}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Services:</span> <span className="text-gray-300">{item.services}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Rewards:</span> <span className="text-gray-300">{item.rewards}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Experience:</span> <span className="text-gray-300">{item.experience} yrs</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "active"
                        ? "bg-green-900/30 text-green-400"
                        : "bg-red-900/30 text-red-400"
                    }`}
                  >
                    {item.status}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-400 font-medium hover:underline text-sm transition-colors duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleStatusToggle(item.id, item.status)}
                      className="text-yellow-400 font-medium hover:underline text-sm transition-colors duration-300"
                    >
                      {item.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-400 font-medium hover:underline text-sm transition-colors duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
