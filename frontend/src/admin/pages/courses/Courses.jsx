import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", image: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setFormData({ ...formData, image: e.target.files[0] });

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) { console.error(err); }
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      if (formData.image) data.append("image", formData.image);

      const token = localStorage.getItem("token");
      if (isEdit) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/courses/${selectedId}`, data, { headers: { Authorization: `Bearer ${token}` } });
        alert("Course Updated Successfully");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/courses`, data, { headers: { Authorization: `Bearer ${token}` } });
        alert("Course Added Successfully");
      }
      resetForm();
      fetchCourses();
    } catch (err) { console.log(err); }
  };

  const handleEdit = (item) => {
    setIsEdit(true);
    setSelectedId(item.id);
    setFormData({ title: item.title, description: item.description, image: null });
    setOpenModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/courses/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      alert("Course Deleted");
      fetchCourses();
    } catch (err) { console.log(err); }
  };

  const resetForm = () => {
    setOpenModal(false);
    setIsEdit(false);
    setSelectedId(null);
    setFormData({ title: "", description: "", image: null });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8 border-b-2 border-[#D7B25B] pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0b2545]">Courses Management</h1>
          <p className="text-gray-600 mt-1">Manage industrial training courses for A2Z Seals.</p>
        </div>
        <button onClick={() => { setIsEdit(false); setOpenModal(true); }} className="bg-[#0b2545] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#1a3d6d] transition">
          + Add Course
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left font-bold text-gray-700">Image</th>
              <th className="p-4 text-left font-bold text-gray-700">Title</th>
              <th className="p-4 text-left font-bold text-gray-700">Description</th>
              <th className="p-4 text-center font-bold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-4"><img src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`} alt={item.title} className="w-16 h-16 rounded-lg object-cover shadow-sm" /></td>
                <td className="p-4 font-bold text-[#0b2545]">{item.title}</td>
                <td className="p-4 text-gray-600 text-sm max-w-xs truncate">{item.description}</td>
                <td className="p-4 text-center">
                  <button onClick={() => handleEdit(item)} className="text-[#D7B25B] font-bold hover:underline mr-4">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600 font-bold hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#0b2545]">{isEdit ? "Edit Course" : "Add Course"}</h2>
              <button onClick={resetForm} className="text-2xl text-gray-400 hover:text-black">×</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Course Title" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#D7B25B]" required />
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-[#D7B25B]" rows="3" required />
              <input type="file" onChange={handleImageChange} className="w-full border p-3 rounded-lg" />
              <button type="submit" className="w-full bg-[#0b2545] text-white py-3 rounded-lg font-bold hover:bg-[#1a3d6d] transition">
                {isEdit ? "Update Course" : "Add Course"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}