import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FaPen,
  FaImage,
  FaSave,
  FaTimes,
  FaUpload,
  FaNewspaper,
  FaUser,
  FaToggleOn,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

const API_URL = "http://localhost:5000/api/blogs";

function BlogForm({ selectedBlog, onSuccess, clearSelection }) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    author: "Admin",
    status: "Active",
    shortDescription: "",
    description: "",
  });

  /* =============================
      AUTO SLUG
  ============================== */
  const generateSlug = (value) => {
    return value
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  /* =============================
      HANDLE INPUT
  ============================== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =============================
      LOAD EDIT DATA
  ============================== */
  useEffect(() => {
    if (!selectedBlog) {
      resetForm();
      return;
    }

    setFormData({
      title: selectedBlog.title || "",
      slug: selectedBlog.slug || "",
      author: selectedBlog.author || "Admin",
      status: selectedBlog.status || "Active",
      shortDescription: selectedBlog.shortDescription || "",
      description: selectedBlog.description || "",
    });

    if (selectedBlog.featuredImage) {
      setPreview(`http://localhost:5000/uploads/${selectedBlog.featuredImage}`);
    }
  }, [selectedBlog]);

  /* =============================
      RESET FORM
  ============================== */
  const resetForm = () => {
    setFeaturedImage(null);
    setPreview("");
    setFormData({
      title: "",
      slug: "",
      author: "Admin",
      status: "Active",
      shortDescription: "",
      description: "",
    });
  };

  /* =============================
      IMAGE UPLOAD
  ============================== */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setFeaturedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* =============================
      REMOVE IMAGE
  ============================== */
  const removeImage = () => {
    setFeaturedImage(null);
    setPreview("");

    if (selectedBlog?.featuredImage) {
      setPreview(`http://localhost:5000/uploads/${selectedBlog.featuredImage}`);
    }
  };

  /* =============================
      VALIDATION
  ============================== */
  const validateForm = () => {
    if (!formData.title.trim()) {
      toast.error("Blog title is required");
      return false;
    }
    if (!formData.shortDescription.trim()) {
      toast.error("Short description is required");
      return false;
    }
    if (!formData.description.trim()) {
      toast.error("Blog description is required");
      return false;
    }
    if (!selectedBlog && !featuredImage) {
      toast.error("Featured image is required");
      return false;
    }
    return true;
  };

  /* =============================
      SUBMIT
  ============================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("slug", formData.slug);
      data.append("author", formData.author);
      data.append("status", formData.status);
      data.append("shortDescription", formData.shortDescription);
      data.append("description", formData.description);

      if (featuredImage) {
        data.append("featuredImage", featuredImage);
      } else if (selectedBlog?.featuredImage) {
        // Keep existing image if no new image is selected
        data.append("existingImage", selectedBlog.featuredImage);
      }

      if (selectedBlog) {
        const blogId = selectedBlog.id || selectedBlog._id;
        await axios.put(`${API_URL}/${blogId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog Updated Successfully");
      } else {
        await axios.post(API_URL, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Blog Created Successfully");
      }

      resetForm();
      onSuccess();
    } catch (error) {
      console.log(error);
      toast.error("Unable to save blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100">
      <form onSubmit={handleSubmit} className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        
        {/* Header Block */}
        <div className="border-b border-slate-800 bg-slate-900/50 px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <FaNewspaper className="text-sm" />
                Content Studio
              </div>
              <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {selectedBlog ? "Edit Article" : "Create New Article"}
              </h1>
            </div>
            
            <div className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 shadow-inner">
              <FaCheckCircle className={`text-base ${selectedBlog ? "text-amber-400" : "text-emerald-400"}`} />
              {selectedBlog ? "Mode: Updating Entry" : "Mode: New Draft"}
            </div>
          </div>
        </div>

        {/* Master Form Workspace Container */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* Primary Fields Column (Spans 2 columns) */}
            <div className="space-y-6 lg:col-span-2">
              
              {/* Form Block: Identity */}
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Blog Title <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. 10 Essential Frontend Architecture Patterns"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-3 pl-10 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                    <FaPen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-400">
                    URL Slug <span className="text-xs font-normal text-slate-600">(Auto-generated)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      readOnly
                      className="w-full rounded-xl border border-slate-800/80 bg-slate-950/40 px-3 py-3 pl-10 text-sm text-slate-500 select-all outline-none"
                    />
                    <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
                  </div>
                </div>
              </div>

              {/* Form Block: Content Containers */}
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Short Description <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="shortDescription"
                    rows={3}
                    value={formData.shortDescription}
                    onChange={handleChange}
                    placeholder="Provide a brief summary hook for article lists and SEO snippets..."
                    className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-3 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                  <div className="mt-1.5 flex justify-end text-xs text-slate-500">
                    <span>{formData.shortDescription.length} characters</span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Article Body Content <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    rows={14}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, description: e.target.value }))
                    }
                    placeholder="Deep-dive into your thoughts here..."
                    className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                  <div className="mt-1.5 flex justify-end text-xs text-slate-500">
                    <span>{formData.description.length} characters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Configurations Block */}
            <div className="space-y-6">
              
              {/* Asset Block: Dark Image Upload Box */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm">
                <label className="mb-3 block text-sm font-semibold text-slate-300">
                  Featured Cover Image <span className="text-rose-500">*</span>
                </label>
                
                <div className="space-y-4">
                  {preview ? (
                    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-44 w-full object-cover brightness-90 transition group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={removeImage}
                          className="flex items-center gap-2 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-rose-700 transition"
                        >
                          <FaTimes />
                          Remove Block
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-44 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-800 bg-slate-950/50 p-4 text-center">
                      <FaImage className="mb-2 text-2xl text-slate-700" />
                      <p className="text-xs font-medium text-slate-400">No media chosen yet</p>
                      <p className="mt-0.5 text-[11px] text-slate-600">Supports PNG, JPG, WEBP (Max 5MB)</p>
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="image-upload"
                    className="hidden"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-300 shadow-sm transition hover:bg-slate-800 hover:text-white"
                  >
                    <FaUpload className="text-xs text-slate-500" />
                    Upload Image Asset
                  </label>
                </div>
              </div>

              {/* Setting Configuration Sliders/Selectors */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Assigned Author
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-slate-950 px-3 py-2.5 pl-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Publish Status
                  </label>
                  <div className="relative">
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-slate-300 bg-slate-950 px-3 py-2.5 pl-9 pr-8 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="Active">Active / Public</option>
                      <option value="Inactive">Inactive / Draft</option>
                    </select>
                    <FaToggleOn className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Workflow Controls */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-800 bg-slate-900/50 px-6 py-5 sm:px-8">
          {selectedBlog && (
            <button
              type="button"
              onClick={() => {
                resetForm();
                clearSelection();
              }}
              className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-400 shadow-sm transition hover:bg-slate-900 hover:text-slate-200"
            >
              <FaTimes className="text-xs" />
              Discard Modifications
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500 active:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <FaSave className="text-xs text-blue-200" />
                {selectedBlog ? "Update Commit" : "Publish Entry"}
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}

export default BlogForm;