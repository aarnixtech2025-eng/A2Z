import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";



function ThreeD() {
const [openModal, setOpenModal] = useState(false);
  const [hds, setHds] =
    useState([]);

  const [formData, setFormData] =
    useState({
      title: '',
      description: '',
      link: '',
      image: null
    });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchHDs();
  }, []);

  const fetchHDs =
    async () => {
      try {

        const token = localStorage.getItem("token");
        const response =
          await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio-gallery`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

        if (
          response.data.success
        ) {
          const data = response.data.data;
          setHds(Array.isArray(data) ? data : []);
        }

      } catch (error) {
        setHds([]);
      }
    };


  const handleImageChange = (
    e
  ) => {
    setFormData({
      ...formData,
      image:
        e.target.files[0]
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const token = localStorage.getItem("token");

        if (editingId) {
          // Update existing hd
          const data = new FormData();
          data.append("title", formData.title);
          data.append("description", formData.description);
          data.append("link", formData.link);
          if (formData.image) {
            data.append("image", formData.image);
          }

          await axios.put(
            `${import.meta.env.VITE_API_URL}/api/portfolio-gallery/${editingId}`,
            data,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
              }
            }
          );
          alert("Portfolio Updated Successfully");
        } else {
          // Add new hd
          const data = new FormData();
          data.append("title", formData.title);
          data.append("description", formData.description);
          data.append("link", formData.link);
          if (formData.image) {
            data.append("image", formData.image);
          }

          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/portfolio-gallery/with-image`,
            data,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
              }
            }
          );
          alert("Portfolio Added Successfully");
        }

        setFormData({
          title: '',
          description: '',
          link: '',
          image: null
        });

        setEditingId(null);
        setOpenModal(false);

        fetchHDs();

      } catch (error) {
        alert("Error saving portfolio: " + (error.response?.data?.message || error.message));
      }
    };

  const handleDelete =
    async (id) => {

      if (
        !window.confirm(
          "Delete this portfolio?"
        )
      )
        return;

      try {

        const token = localStorage.getItem("token");
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/portfolio-gallery/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        alert(
          "Deleted Successfully"
        );

        fetchHDs();

      } catch (error) {
      }
    };

  const handleEdit = (hd) => {
    setFormData({
      title: hd.title || '',
      description: hd.description || '',
      link: hd.link || '',
      image: null
    });
    setEditingId(hd.id);
    setOpenModal(true);
  };

  return (
    <div className="p-6">

     <div className="flex justify-between items-center mb-8">

  <div>
    <h1 className="text-3xl font-bold">
      Portfolio Management
    </h1>

    <p className="text-gray-500 mt-1">
      Manage Website Portfolio
    </p>
  </div>

  <button
    onClick={() => setOpenModal(true)}
    className="text-blue-600 font-semibold hover:underline"
  >
    + Add Portfolio
  </button>

</div>
      <div className="bg-white rounded-xl shadow overflow-hidden">

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-gray-100">

        <tr>
          <th className="p-4 text-left">
            Image
          </th>

          <th className="p-4 text-left">
            Title
          </th>

          <th className="p-4 text-left">
            Description
          </th>

          <th className="p-4 text-left">
            Link
          </th>

          <th className="p-4 text-center">
            Actions
          </th>
        </tr>

      </thead>

      <tbody>

        {hds.length > 0 ? (

          hds.map((item) => (

            <tr
              key={item.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-4">

                <img
                  src={
                    item.image
                      ? `${import.meta.env.VITE_API_URL}/uploads/${item.image}`
                      : "/no-image.svg"
                  }
                  alt="Portfolio"
                  className="
                    w-20
                    h-20
                    rounded-lg
                    object-cover
                  "
                />

              </td>

              <td className="p-4">
                {item.title}
              </td>

              <td className="p-4">
                <div className="max-w-xs truncate">{item.description}</div>
              </td>

              <td className="p-4">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    View Link
                  </a>
                ) : '-'}
              </td>

              <td className="p-4">

                <div className="flex justify-center gap-2">

                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="text-red-500 font-medium hover:underline"
                  >
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))

        ) : (

          <tr>

            <td
              colSpan="5"
              className="
                text-center
                py-10
                text-gray-500
              "
            >
              No Portfolios Found
            </td>

          </tr>

        )}

      </tbody>

    </table>

  </div>

</div>
{openModal && (

  <div
    className="
      fixed
      inset-0
      bg-black/50
      z-50
      flex
      items-center
    justify-center
    p-4
    "
  >

    <div
      className="
        bg-white
        w-full
        sm:w-[500px]
        h-screen
        overflow-y-auto
        shadow-2xl
        animate-slideIn
      "
    >

      <div
        className="
          flex
          justify-between
          items-center
          p-6
          border-b
        "
      >

        <h2 className="text-2xl font-bold">
          {editingId ? "Edit Portfolio" : "Add Portfolio"}
        </h2>

        <button
          onClick={() =>
            setOpenModal(false)
          }
          className="
            text-3xl
            text-gray-600
          "
        >
          ×
        </button>

      </div>

      <form
        onSubmit={handleSubmit}
        className="p-6"
      >

        <div className="mb-4">
          <label className="font-medium block mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-medium block mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            rows="3"
          />
        </div>

        <div className="mb-4">
          <label className="font-medium block mb-2">
            Link
          </label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            placeholder="https://example.com"
          />
        </div>

        <div className="mb-4">

          <label className="font-medium block mb-2">
            Upload Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="
              w-full
              border
              rounded-xl
              p-3
            "
            required={!editingId}
          />

        </div>

        <button
          type="submit"
          className="w-full text-blue-600 font-semibold hover:underline py-2"
        >
          {editingId ? "Update Portfolio" : "Save Portfolio"}
        </button>

      </form>

    </div>

  </div>

)}
    </div>
  );
}

export default ThreeD;
