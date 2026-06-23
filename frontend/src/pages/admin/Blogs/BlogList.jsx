import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getBlogs,
  deleteBlog,
} from "../../../services/blogService";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
const baseURL = process.env.VITE_API_URL
  const fetchBlogs = async () => {
    try {
      const res = await getBlogs(`baseURL/api/blogs`);
      setBlogs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Blog?")) return;

    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Blog Management
        </h1>

        <Link
          to="/admin/blogs/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Blog
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>{blog.status}</td>

              <td className="space-x-2">
                <Link
                  to={`/admin/blogs/edit/${blog.id}`}
                  className="bg-green-600 text-white px-2 py-1 rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    handleDelete(blog.id)
                  }
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}