import { useMemo, useState, useEffect } from "react";
import {
  FaEdit,
  FaTrash,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function BlogTable({
  blogs = [],
  loading,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  /* =============================
      STATES
  ============================== */
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  /* =============================
      SEARCH + FILTER
  ============================== */
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        (blog.title || "").toLowerCase().includes(search.toLowerCase()) ||
        (blog.author || "").toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ? true : blog.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [blogs, search, statusFilter]);

  /* =============================
      PAGINATION LOGIC
  ============================== */
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Sync current page if items are removed/hidden and the page becomes empty
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [filteredBlogs.length, totalPages, currentPage]);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

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
    <div className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8 bg-slate-950 text-slate-100">
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        
        {/* =============================
            HEADER & FILTERS
        ============================== */}
        <div className="border-b border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Blog List
              </h2>
              <p className="text-sm text-slate-400">
                Manage all uploaded blogs
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              {/* SEARCH */}
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
                <input
                  type="text"
                  placeholder="Search Blog..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full md:w-72 rounded-xl border border-slate-800 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* STATUS FILTER */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 pr-10 text-sm text-white outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============================
            TABLE START
        ============================== */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800/60">
            <thead className="bg-slate-950/60">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Image</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Blog</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Author</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Created</th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800 bg-slate-900/20">
              {loading ? (
                <tr>
                  <td colSpan="6" className="py-16 text-center text-sm font-medium text-slate-500">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <svg className="h-6 w-6 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading Blogs Dashboard...
                    </div>
                  </td>
                </tr>
              ) : currentBlogs.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-16 text-center text-sm font-medium text-slate-500">
                    No Blogs Found
                  </td>
                </tr>
              ) : (
                currentBlogs.map((blog) => (
                  <tr key={blog.id || blog._id} className="group border-b border-slate-800/50 transition-colors hover:bg-slate-850/40">
                    
                    {/* IMAGE */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative h-16 w-24 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                        <img
                          src={blog.featuredImage ? `http://localhost:5000/uploads/${blog.featuredImage}` : "/placeholder.png"}
                          alt={blog.title}
                          className="h-full w-full object-cover brightness-90 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-100"
                          onError={(e) => { e.target.src = "https://placehold.co/600x400/0f172a/fff?text=No+Image"; }}
                        />
                      </div>
                    </td>

                    {/* BLOG INFO */}
                    <td className="px-6 py-4 max-w-md">
                      <h3 className="line-clamp-1 font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {blog.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-slate-500">
                        {blog.shortDescription || "No description provided."}
                      </p>
                    </td>

                    {/* AUTHOR */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-300">
                      {blog.author}
                    </td>

                    {/* STATUS BADGE */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                          blog.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${blog.status === "Active" ? "bg-emerald-400" : "bg-rose-400"}`} />
                        {blog.status}
                      </span>
                    </td>

                    {/* CREATED DATE */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                      {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString("en-IN") : "N/A"}
                    </td>

                    {/* ACTION BUTTONS */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2.5">
                        
                        {/* Edit Button */}
                        <button
                          type="button"
                          onClick={() => onEdit && onEdit(blog)}
                          className="rounded-xl border border-slate-800 bg-slate-950 p-2 text-blue-400 shadow-sm transition hover:bg-slate-800 hover:text-blue-300"
                          title="Edit Post"
                        >
                          <FaEdit className="text-sm" />
                        </button>

                        {/* Delete Button */}
                        <button
                          type="button"
                          onClick={() => onDelete && onDelete(blog.id || blog._id)}
                          className="rounded-xl border border-slate-800 bg-slate-950 p-2 text-rose-400 shadow-sm transition hover:bg-slate-800 hover:text-rose-300"
                          title="Delete Post"
                        >
                          <FaTrash className="text-sm" />
                        </button>

                        {/* Status Toggle Button */}
                        <button
                          type="button"
                          onClick={() => onStatusChange && onStatusChange(blog)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-bold border transition duration-200 ${
                            blog.status === "Active"
                              ? "border-amber-500/20 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20"
                              : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                          }`}
                        >
                          {blog.status === "Active" ? "Deactivate" : "Activate"}
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
            TABLE FOOTER / PAGINATION
        ============================== */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 bg-slate-900/50 px-6 py-5 sm:px-8 md:flex-row">
          <div className="text-xs font-medium text-slate-400">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredBlogs.length === 0 ? 0 : startIndex + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-white">
              {Math.min(endIndex, filteredBlogs.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-white">
              {filteredBlogs.length}
            </span>{" "}
            Blogs
          </div>
          
          <div className="flex items-center gap-2">
            {/* Previous Page */}
            <button
              type="button"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                    : "border border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Page */}
            <button
              type="button"
              onClick={nextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlogTable;