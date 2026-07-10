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
  FaInfoCircle,
} from "react-icons/fa";
// import LexicalEditor from "./components/LexicalEditor";

const API_URL = "http://localhost:5000/api/blogs";

function BlogForm({
  selectedBlog,
  onSuccess,
  clearSelection,
}) {
  const [loading, setLoading] = useState(false);

  const [preview, setPreview] = useState("");

  const [featuredImage, setFeaturedImage] =
    useState(null);

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
      shortDescription:
        selectedBlog.shortDescription || "",
      description:
        selectedBlog.description || "",
    });

    if (selectedBlog.featuredImage) {
      setPreview(
        `http://localhost:5000/uploads/${selectedBlog.featuredImage}`
      );
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

    // Image Validation
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image");
      return;
    }

    // Max Size 5MB
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
      setPreview(
        `http://localhost:5000/uploads/${selectedBlog.featuredImage}`
      );
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
      data.append(
        "shortDescription",
        formData.shortDescription
      );
      data.append(
        "description",
        formData.description
      );

      if (featuredImage) {
        data.append(
          "featuredImage",
          featuredImage
        );
      }

      if (selectedBlog) {
        await axios.put(
          `${API_URL}/${selectedBlog.id}`,
          data,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        toast.success("Blog Updated Successfully");
      } else {
        await axios.post(API_URL, data, {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
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

  /* =============================
      RETURN
  ============================== */

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_-25px_rgba(15,23,42,0.35)]">
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 px-6 py-7 text-white sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                <FaNewspaper className="text-sm" />
                Content Studio
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {selectedBlog ? "Edit Blog Post" : "Create New Blog Post"}
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                  {selectedBlog
                    ? "Refine your article details and publish with confidence."
                    : "Craft a polished article with rich media, clear messaging, and a strong publishing flow."}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                <FaCheckCircle className="text-base text-emerald-300" />
                {selectedBlog ? "Editing existing article" : "New draft ready to publish"}
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Required fields are marked clearly for a smoother workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-slate-50/80 p-6 sm:p-8">
          <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                  <FaPen className="text-sm" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Blog Information</h2>
                  <p className="text-sm text-slate-500">Set the core details for your article.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    Blog Title <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter an engaging blog title"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 pl-10 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                    />
                    <FaPen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <FaGlobe className="text-sm" />
                    URL Slug
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      readOnly
                      className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3 py-3 pl-10 text-sm text-slate-600"
                    />
                    <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <FaUser className="text-sm" />
                      Author
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 pl-10 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                      />
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <FaToggleOn className="text-sm" />
                      Status
                    </label>
                    <div className="relative">
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 pl-10 pr-8 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                      <FaToggleOn className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <svg className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-xl bg-violet-50 p-2 text-violet-600">
                    <FaInfoCircle className="text-sm" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Publishing Tips</h2>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-500" />
                    Keep titles concise and benefits-focused.
                  </li>
                  <li className="flex gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-500" />
                    Pair strong visuals with clear descriptions.
                  </li>
                  <li className="flex gap-2">
                    <FaCheckCircle className="mt-0.5 text-emerald-500" />
                    Review the content before publishing.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Ready to publish</p>
                <p className="mt-2 text-sm text-slate-300">
                  Your article will appear polished and consistent with the rest of the admin experience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-xl bg-amber-50 p-2 text-amber-600">
                  <FaImage className="text-sm" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Featured Image</h2>
                  <p className="text-sm text-slate-500">Add a strong visual that represents the article.</p>
                </div>
              </div>

              <div className="space-y-4">
                {preview ? (
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200">
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={removeImage}
                        className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-700"
                      >
                        <FaTimes />
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/70">
                    <FaImage className="mb-3 text-4xl text-slate-300" />
                    <p className="text-sm font-medium text-slate-500">No image selected yet</p>
                    <p className="mt-1 text-xs text-slate-400">PNG, JPG, or WEBP up to 5MB</p>
                  </div>
                )}

                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="image-upload"
                    className="hidden"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <FaUpload className="text-sm" />
                    Choose Image
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                    <FaPen className="text-sm" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Short Description</h2>
                    <p className="text-sm text-slate-500">A concise summary to hook readers.</p>
                  </div>
                </div>

                <textarea
                  name="shortDescription"
                  rows={4}
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Write a compelling short description..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Suggested length: 1–2 sentences</span>
                  <span>{formData.shortDescription.length} characters</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
                    <FaNewspaper className="text-sm" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Article Content</h2>
                    <p className="text-sm text-slate-500">Write the full story with clarity and structure.</p>
                  </div>
                </div>

                <textarea
                  name="description"
                  rows={8}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, description: e.target.value }))
                  }
                  placeholder="Write your full blog content here..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Use headings and short paragraphs for readability.</span>
                  <span>{formData.description.length} characters</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            {selectedBlog && (
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  clearSelection();
                }}
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-100"
              >
                <FaTimes className="text-xs" />
                Cancel
              </button>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/35 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-none"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <FaSave className="text-xs" />
                  {selectedBlog ? "Update" : "Save"}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BlogForm;