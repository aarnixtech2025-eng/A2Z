import { useMemo, useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function BlogTable({
  blogs,
  loading,
  onEdit,
  onDelete,
  onStatusChange,
}) {

  /* =============================
      STATES
  ============================== */

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const blogsPerPage = 10;

  /* =============================
      SEARCH + FILTER
  ============================== */

  const filteredBlogs = useMemo(() => {

    return blogs.filter((blog) => {

      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        blog.author
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : blog.status === statusFilter;

      return matchesSearch && matchesStatus;

    });

  }, [blogs, search, statusFilter]);

  /* =============================
      PAGINATION
  ============================== */

  const totalPages = Math.ceil(
    filteredBlogs.length / blogsPerPage
  );

  const startIndex =
    (currentPage - 1) * blogsPerPage;

  const endIndex =
    startIndex + blogsPerPage;

  const currentBlogs =
    filteredBlogs.slice(
      startIndex,
      endIndex
    );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (

    <div className="rounded-xl border bg-white shadow-sm">

      {/* =============================
          HEADER
      ============================== */}

      <div className="border-b p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              Blog List
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage all uploaded blogs
            </p>

          </div>

          {/* SEARCH */}

          <div className="flex flex-col gap-4 md:flex-row">

            <div className="relative">

              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search Blog..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-72 rounded-lg border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

            {/* STATUS FILTER */}

            <select
              value={statusFilter}
              onChange={(e) => {

                setStatusFilter(e.target.value);

                setCurrentPage(1);

              }}
              className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            >

              <option value="All">
                All Status
              </option>

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

      {/* =============================
          TABLE START
      ============================== */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-4 text-left text-sm font-bold">
                Image
              </th>

              <th className="px-5 py-4 text-left text-sm font-bold">
                Blog
              </th>

              <th className="px-5 py-4 text-left text-sm font-bold">
                Author
              </th>

              <th className="px-5 py-4 text-left text-sm font-bold">
                Status
              </th>

              <th className="px-5 py-4 text-left text-sm font-bold">
                Created
              </th>

              <th className="px-5 py-4 text-center text-sm font-bold">
                Actions
              </th>

            </tr>

          </thead>

       <tbody>

  {loading ? (

    <tr>

      <td
        colSpan="6"
        className="py-16 text-center text-slate-500"
      >
        Loading Blogs...
      </td>

    </tr>

  ) : currentBlogs.length === 0 ? (

    <tr>

      <td
        colSpan="6"
        className="py-16 text-center text-slate-500"
      >
        No Blogs Found
      </td>

    </tr>

  ) : (

    currentBlogs.map((blog) => (

      <tr
        key={blog.id}
        className="border-b transition hover:bg-slate-50"
      >

        {/* IMAGE */}

        <td className="px-5 py-4">

          <img
            src={`http://localhost:5000/uploads/${blog.featuredImage}`}
            alt={blog.title}
            className="h-20 w-28 rounded-lg border object-cover"
          />

        </td>

        {/* BLOG */}

        <td className="px-5 py-4">

          <h3 className="line-clamp-2 font-semibold text-slate-800">
            {blog.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-slate-500">
            {blog.shortDescription}
          </p>

        </td>

        {/* AUTHOR */}

        <td className="px-5 py-4">
          {blog.author}
        </td>

        {/* STATUS */}

        <td className="px-5 py-4">

          <span
            className={`inline-flex rounded-full px-4 py-2 text-xs font-bold ${
              blog.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {blog.status}
          </span>

        </td>

        {/* CREATED */}

        <td className="px-5 py-4">

          {new Date(blog.createdAt).toLocaleDateString(
            "en-IN"
          )}

        </td>

        {/* ACTION */}

        <td className="px-5 py-4">

          <div className="flex justify-center gap-3">

            {/* Edit */}

            <button
              onClick={() => onEdit(blog)}
              className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
            >
              <FaEdit />
            </button>

            {/* Delete */}

            <button
              onClick={() => onDelete(blog.id)}
              className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
            >
              <FaTrash />
            </button>

            {/* Status */}

            <button
              onClick={() => onStatusChange(blog)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold text-white ${
                blog.status === "Active"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {blog.status === "Active"
                ? "Deactivate"
                : "Activate"}
            </button>

          </div>

        </td>

      </tr>

    ))

  )}

</tbody>

        </table>

      </div>

      {/* =============================
          TABLE FOOTER
      ============================== */}

      <div className="flex flex-col items-center justify-between gap-4 border-t bg-slate-50 px-6 py-4 md:flex-row">

        <div className="text-sm text-slate-600">

          Showing{" "}
          <span className="font-semibold">
            {filteredBlogs.length === 0
              ? 0
              : startIndex + 1}
          </span>

          {" "}to{" "}

          <span className="font-semibold">
            {Math.min(
              endIndex,
              filteredBlogs.length
            )}
          </span>

          {" "}of{" "}

          <span className="font-semibold">
            {filteredBlogs.length}
          </span>

          {" "}Blogs

        </div>
                {/* PAGINATION */}

        <div className="flex items-center gap-2">

          {/* Previous */}

          <button
            type="button"
            onClick={prevPage}
            disabled={currentPage === 1}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>

          {/* Page Numbers */}

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (

              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition
                  ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "border border-slate-300 bg-white hover:bg-slate-100"
                  }`}
              >
                {page}
              </button>

            )
          )}

          {/* Next */}

          <button
            type="button"
            onClick={nextPage}
            disabled={
              currentPage === totalPages ||
              totalPages === 0
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>

    </div>

  );
}

export default BlogTable;