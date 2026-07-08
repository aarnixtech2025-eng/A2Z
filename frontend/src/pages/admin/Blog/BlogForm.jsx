import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* =============================
          BASIC INFORMATION
      ============================== */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-bold text-slate-800">
          Blog Information
        </h2>

        <div className="space-y-5">

          {/* TITLE */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Blog Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Blog Title"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />

          </div>

          {/* SLUG */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              value={formData.slug}
              readOnly
              className="w-full rounded-lg border bg-slate-100 px-4 py-3"
            />

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* AUTHOR */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Author
              </label>

              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>

            {/* STATUS */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

            </div>

          </div>

        </div>

      </div>

      {/* =============================
          FEATURED IMAGE
      ============================== */}

      <div className="rounded-xl border bg-white p-5 shadow-sm">

        <h2 className="mb-4 text-lg font-bold text-slate-800">
          Featured Image
        </h2>

        <div className="space-y-4">

          {preview ? (

            <div className="relative">

              <img
                src={preview}
                alt="Preview"
                className="h-56 w-full rounded-lg border object-cover"
              />

              <button
                type="button"
                onClick={removeImage}
                className="absolute right-3 top-3 rounded bg-red-600 px-3 py-1 text-sm text-white"
              >
                Remove
              </button>

            </div>

          ) : (

            <div className="flex h-56 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">

              <p className="text-slate-400">
                No Image Selected
              </p>

            </div>

          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full rounded-lg border border-slate-300 p-2
            file:mr-4
            file:rounded-md
            file:border-0
            file:bg-blue-600
            file:px-4
            file:py-2
            file:text-white"
          />

        </div>

      </div>
            {/* =============================
          SHORT DESCRIPTION
      ============================== */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-lg font-bold text-slate-800">
          Short Description
        </h2>

        <textarea
          name="shortDescription"
          rows={5}
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="Enter short description..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
        />

      </div>

    {/* =============================
    BLOG DESCRIPTION
============================== */}

<div className="rounded-xl border bg-white p-6 shadow-sm">

  <h2 className="mb-4 text-lg font-bold text-slate-800">
    Blog Description
  </h2>

  <LexicalEditor
    value={formData.description}
    onChange={(html) =>
      setFormData((prev) => ({
        ...prev,
        description: html,
      }))
    }
  />

</div>

      {/* =============================
          ACTION BUTTONS
      ============================== */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="flex flex-wrap justify-end gap-4">

          {selectedBlog && (

            <button
              type="button"
              onClick={() => {
                resetForm();
                clearSelection();
              }}
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>

          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Saving..."
              : selectedBlog
              ? "Update Blog"
              : "Save Blog"}
          </button>

        </div>

      </div>

    </form>
  );
}

export default BlogForm;