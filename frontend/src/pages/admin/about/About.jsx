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
  
  useEffect(() => {
    fetchAboutData();
  }, []);

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
          features: about.features || [],
          status: about.status || "active",
        });
        setExistingId(about.id);
      }
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAboutData({ 
        ...aboutData, 
        [field]: response.data.imageUrl,
        [`${field}File`]: file
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setAboutData({
        ...aboutData,
        features: [...aboutData.features, featureInput.trim()],
      });
      setFeatureInput("");
    }
  };

  const removeFeature = (index) => {
    setAboutData({
      ...aboutData,
      features: aboutData.features.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      
      if (existingId) {
        const formData = new FormData();
        formData.append("title", aboutData.title);
        formData.append("description", aboutData.description);
        formData.append("ourApproach", aboutData.ourApproach);
        formData.append("features", JSON.stringify(aboutData.features));
        formData.append("status", aboutData.status);

        if (aboutData.image1File) {
          formData.append("image1", aboutData.image1File);
        }

        if (aboutData.image2File) {
          formData.append("image2", aboutData.image2File);
        }

        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/about/${existingId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("About section updated successfully!");
      } else {
        const formData = new FormData();
        formData.append("title", aboutData.title);
        formData.append("description", aboutData.description);
        formData.append("ourApproach", aboutData.ourApproach);
        formData.append("features", JSON.stringify(aboutData.features));
        formData.append("status", aboutData.status);

        if (aboutData.image1File) {
          formData.append("image1", aboutData.image1File);
        }

        if (aboutData.image2File) {
          formData.append("image2", aboutData.image2File);
        }

        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/about`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("About section created successfully!");
      }
      fetchAboutData();
    } catch (error) {
      console.error("Error updating about:", error);
      console.error("Error response:", error.response?.data);
      alert(`Failed to update about section: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Section</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={aboutData.title}
            onChange={(e) =>
              setAboutData({ ...aboutData, title: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={aboutData.description}
            onChange={(e) =>
              setAboutData({ ...aboutData, description: e.target.value })
            }
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
            required
          />
        </div>

        {/* Our Approach */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Our Approach
          </label>
          <textarea
            value={aboutData.ourApproach}
            onChange={(e) =>
              setAboutData({ ...aboutData, ourApproach: e.target.value })
            }
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
            placeholder="Describe your approach"
          />
        </div>

        {/* Image 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image 1
          </label>
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, "image1")}
            accept="image/*"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          {aboutData.image1 && (
            <img
              src={aboutData.image1}
              alt="Preview 1"
              className="mt-2 h-40 w-auto rounded-lg"
            />
          )}
        </div>

        {/* Image 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image 2
          </label>
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, "image2")}
            accept="image/*"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          {aboutData.image2 && (
            <img
              src={aboutData.image2}
              alt="Preview 2"
              className="mt-2 h-40 w-auto rounded-lg"
            />
          )}
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Features
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
              placeholder="Add a feature"
            />
            <button
              type="button"
              onClick={addFeature}
              className="px-4 py-2 bg-[#D7B25B] text-black rounded-lg font-semibold hover:bg-[#C89A38] transition-colors"
            >
              Add
            </button>
          </div>
          <div className="mt-2 space-y-2">
            {aboutData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg"
              >
                <span>{feature}</span>
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={aboutData.status}
            onChange={(e) =>
              setAboutData({ ...aboutData, status: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#D7B25B] to-[#C89A38] text-black font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save About Section"}
        </button>
      </form>

      {/* Data Table */}
      {existingId && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current About Section</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Field</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Title</td>
                  <td className="py-3 px-4 text-gray-900">{aboutData.title}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Description</td>
                  <td className="py-3 px-4 text-gray-900">{aboutData.description}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Our Approach</td>
                  <td className="py-3 px-4 text-gray-900">{aboutData.ourApproach || "Not set"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Image 1</td>
                  <td className="py-3 px-4 text-gray-900">
                    {aboutData.image1 && (
                      <img
                        src={aboutData.image1}
                        alt="Image 1"
                        className="h-24 w-auto object-contain rounded"
                      />
                    )}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Image 2</td>
                  <td className="py-3 px-4 text-gray-900">
                    {aboutData.image2 && (
                      <img
                        src={aboutData.image2}
                        alt="Image 2"
                        className="h-24 w-auto object-contain rounded"
                      />
                    )}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Features</td>
                  <td className="py-3 px-4 text-gray-900">
                    {aboutData.features && aboutData.features.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {aboutData.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-500">No features</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Status</td>
                  <td className="py-3 px-4 text-gray-900">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        aboutData.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {aboutData.status}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
