import { useState } from "react";
import { createBlog } from "../../../services/blogService";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    content: "",
    featuredImage: "",
    category: "Hydraulic Seal Kits",
    tags: "",
    author: "Admin",
    relatedProduct: "",
    status: "draft",
    metaTitle: "",
    metaDescription: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createBlog(formData);

      alert("Blog Created Successfully");

      navigate("/admin/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-4"
    >
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="slug"
        placeholder="Slug"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="shortDescription"
        placeholder="Short Description"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="content"
        placeholder="Content"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="featuredImage"
        placeholder="Image URL"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Blog
      </button>
    </form>
  );
}