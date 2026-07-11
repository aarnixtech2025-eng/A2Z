import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import BlogForm from "./BlogForm";
import BlogTable from "./BlogTable";

const API_URL = "http://localhost:5000/api/blogs";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  /* =========================
      GET ALL BLOGS
  ========================= */

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await axios.get(API_URL);

      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (error) {
      console.error(error);

      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
      EDIT BLOG
  ========================= */

  const handleEdit = (blog) => {
    setSelectedBlog(blog);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
      DELETE BLOG
  ========================= */

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);

      toast.success("Blog deleted successfully");

      fetchBlogs();

      if (selectedBlog?.id === id || selectedBlog?._id === id) {
        setSelectedBlog(null);
      }
    } catch (error) {
      console.error(error);

      toast.error("Delete failed");
    }
  };

  /* =========================
      STATUS TOGGLE
  ========================= */

  const handleStatusChange = async (blog) => {
    try {
      const blogId = blog.id;
      await axios.put(`${API_URL}/${blogId}`, {
        status: blog.status === "Active" ? "Inactive" : "Active",
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Status Updated");

      fetchBlogs();
    } catch (error) {
      console.error(error);

      toast.error("Unable to update status");
    }
  };

  /* =========================
      AFTER SAVE
  ========================= */

  const handleSuccess = () => {
    fetchBlogs();

    setSelectedBlog(null);
  };

  /* =========================
      CANCEL EDIT
  ========================= */

  const clearSelection = () => {
    setSelectedBlog(null);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 p-6">

      <div className="mx-auto max-w-7xl">

        {/* PAGE HEADER */}

        <div className="mb-6">

          <h1 className="text-3xl font-bold text-gray-900">
            Blog Management
          </h1>

          <p className="mt-2 text-gray-600">
            Create, update, delete and manage all blogs.
          </p>

        </div>

        {/* MAIN CONTENT */}

        <div className="space-y-6">

          {/* BLOG FORM */}

          <BlogForm
            selectedBlog={selectedBlog}
            onSuccess={handleSuccess}
            clearSelection={clearSelection}
          />

          {/* BLOG TABLE */}

          <BlogTable
            blogs={blogs}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />

        </div>

      </div>

    </section>
  );
}

export default Blog;