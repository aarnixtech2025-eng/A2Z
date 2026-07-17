import React, { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        const data = response.data.data;
        setBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedBlog]);

  const closeModal = () => setSelectedBlog(null);

  const getImageSrc = (image) =>
    image
      ? `${import.meta.env.VITE_API_URL}${image.startsWith("/uploads/") ? image : `/uploads/${image}`}`
      : null;

  if (loading) {
    return (
      <div className="bg-[#1A1A1A] min-h-screen flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {/* BLOG HERO BANNER */}
      <section className="relative bg-[#050505] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D7B25B]/5 blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #D7B25B 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 pt-8 lg:pt-12 pb-8 lg:pb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-[#D7B25B]" />
              <span className="uppercase tracking-[5px] text-[#D7B25B] text-xs">TANUSH INTERIORS</span>
              <div className="w-10 h-[1px] bg-[#D7B25B]" />
            </div>
          </div>
          <h1 className="font-luxury text-white text-[30px] sm:text-[42px] lg:text-[60px] leading-[0.9]">
            Our<span className="italic text-[#D7B25B]"> Blog</span>
          </h1>
          <p className="max-w-[700px] mx-auto mt-4 text-gray-400 text-[15px] md:text-[17px] leading-8">
            Explore our insights on interior design, where creativity, functionality, and luxury come together.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#D7B25B]"></div>
            <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>
          </div>
        </div>
      </section>

      <div className="bg-[#1A1A1A] flex justify-center">
        <div className="w-[90%] h-[1px] bg-[#D7B25B]/20"></div>
      </div>

      {/* BLOG CARDS */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {blogs.slice(0, 10).map((blog) => (
              <div
                key={blog.slug}
                className="group block cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="bg-[#0d0d0d] border border-white/5 rounded-[20px] overflow-hidden flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#D7B25B]/40 group-hover:shadow-[0_20px_60px_rgba(215,178,91,0.15)]">
                  {/* Image */}
                  <div className="relative w-full h-[220px] overflow-hidden bg-[#111]">
                    {blog.image ? (
                      <img
                        src={getImageSrc(blog.image)}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-700 group-hover:text-[#D7B25B]/50 text-5xl transition-colors duration-500">✦</span>
                      </div>
                    )}
                    {/* Dark overlay lifts on hover */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
                    {/* Badge — hidden until hover */}
                    <span className="absolute top-4 left-4 bg-gray-700 text-gray-300 group-hover:bg-[#D7B25B] group-hover:text-black text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-all duration-400">
                      Blog
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-gray-400 group-hover:text-white text-[16px] sm:text-[18px] font-semibold leading-[1.5] mb-3 transition-colors duration-400 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-400 text-[14px] leading-[1.8] mb-5 line-clamp-3 flex-1 transition-colors duration-400">
                      {blog.shortDescription || blog.content?.slice(0, 130)}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] group-hover:border-white/[0.10] transition-colors duration-400">
                      <span className="text-gray-600 group-hover:text-[#D7B25B] text-[13px] font-semibold tracking-wide flex items-center gap-1.5 group-hover:gap-3 transition-all duration-400">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                      <span className="text-gray-700 group-hover:text-gray-500 text-[12px] transition-colors duration-400">
                        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG POPUP MODAL */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[24px] shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #111111 0%, #1a1a1a 100%)",
              border: "1px solid rgba(215,178,91,0.25)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(215,178,91,0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: "rgba(215,178,91,0.12)",
                border: "1px solid rgba(215,178,91,0.3)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#D7B25B"; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(215,178,91,0.12)"; e.currentTarget.style.color = "#D7B25B"; }}
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-[#D7B25B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "inherit" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero Image */}
            {selectedBlog.image && (
              <div className="w-full h-[220px] sm:h-[300px] overflow-hidden rounded-t-[24px]">
                <img
                  src={getImageSrc(selectedBlog.image)}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10">
              {/* Badge + Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#D7B25B] text-black text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Blog</span>
                {selectedBlog.createdAt && (
                  <span className="text-gray-500 text-[12px]">
                    {new Date(selectedBlog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-white text-[22px] sm:text-[28px] md:text-[32px] font-bold leading-[1.25] mb-4">
                {selectedBlog.title}
              </h2>

              {/* Gold divider */}
              <div className="w-20 h-[3px] rounded-full mb-6" style={{ background: "linear-gradient(90deg,#D7B25B,#F0D080)" }} />

              {/* Body */}
              <p className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.9] whitespace-pre-line">
                {selectedBlog.content || selectedBlog.shortDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;