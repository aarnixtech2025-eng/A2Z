import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronRight,
  FaFolderOpen,
  FaQuoteRight,
  FaSearch,
  FaTags,
} from "react-icons/fa";

/* =========================
   BLOG IMAGES
   Change image paths if needed
========================= */
import oilSealDimension from "../assets/images/bearing.jpg";
import hydraulicCylinderSeals from "../assets/images/bearing.jpg";
import hydraulicDustSeal from "../assets/images/bearing.jpg";
import nokAbOilSeal from "../assets/images/bearing.jpg";
import bearingOilSeal from "../assets/images/bearing.jpg";
import nokSealDesign from "../assets/images/bearing.jpg";
import nokOilComponents from "../assets/images/bearing.jpg";
import nokSealant from "../assets/images/bearing.jpg";




const categories = [
  "All",
  "Blog",
  "Oil Seals",
  "Hydraulic Seals",
  "Seal Kits",
  "NOK Oil Seal",
  "Industrial Seals",
];

function Blog() {
const [blogPosts, setBlogPosts] = useState([]);
const [selectedPost, setSelectedPost] = useState(null);
const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
      useEffect(() => {
  fetchBlogs();
}, []);

const fetchBlogs = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/blogs");

    console.log("Raw API response:", res.data.data);
    console.log("Published blogs:", res.data.data.filter((blog) => blog.status === "published"));

    const blogs = res.data.data
      .filter((blog) => blog.status === "published")
      .map((blog) => ({
        id: blog.id,
        title: blog.title,
        category: "Blog",
        date: new Date(blog.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        image: blog.featuredImage
          ? blog.featuredImage.startsWith('http')
            ? blog.featuredImage
            : `http://localhost:5000${blog.featuredImage.startsWith('/uploads') ? blog.featuredImage : `/uploads/${blog.featuredImage}`}`
          : bearingOilSeal, // default image

        excerpt: blog.shortDescription,

        content: [blog.description],

        points: [],

        author: blog.author,
        slug: blog.slug,
      }));

    setBlogPosts(blogs);
    console.log("Processed blogs:", blogs);
    console.log("Blog posts state set to:", blogs.length, "items");
  } catch (err) {
    console.error("Error fetching blogs:", err);
  } finally {
    setLoading(false);
  }
};
if (loading) {
  return (
    <div className="flex h-screen items-center justify-center">
      Loading...
    </div>
  );
}
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchValue.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const openPost = (post) => {
    setSelectedPost(post);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closePost = () => {
    setSelectedPost(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
     FULL BLOG DETAILS PAGE
  ========================= */
  if (selectedPost) {
    const relatedPosts = blogPosts
      .filter((post) => post.id !== selectedPost.id)
      .slice(0, 3);
    

    return (
      <section className="min-h-screen bg-[#f5f8fc]">
        {/* DETAILS HERO */}
        <div className="relative overflow-hidden bg-[#061a38] py-14 sm:py-18">
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#f5b400]/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={closePost}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#f5b400] transition hover:text-white"
            >
              <FaArrowLeft />
              Back to All Blogs
            </button>

            <div className="mt-7 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f5b400]/40 bg-[#f5b400]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#ffd45b]">
                <FaTags />
                {selectedPost.category}
              </span>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                {selectedPost.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#f5b400]" />
                  {selectedPost.date}
                </span>

                <span className="flex items-center gap-2">
                  <FaFolderOpen className="text-[#f5b400]" />
                  A2Z Seals Blog
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FULL CONTENT WITH RIGHT IMAGE */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT SIDE DESCRIPTION */}
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:p-9">
              <p className="text-lg font-semibold leading-8 text-[#061a38]">
                {selectedPost.excerpt}
              </p>

              <div className="mt-7 space-y-5 text-[15px] leading-8 text-slate-600">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* HIGHLIGHTS */}
              <div className="mt-9 rounded-2xl border border-[#f5b400]/30 bg-[#fff9e8] p-6">
                <h2 className="text-xl font-extrabold text-[#061a38]">
                  Key Highlights
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {selectedPost.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-[#d99600]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUOTE CARD */}
              <div className="mt-9 rounded-2xl bg-[#061a38] p-6 text-white">
                <FaQuoteRight className="text-2xl text-[#f5b400]" />

                <h3 className="mt-3 text-xl font-extrabold">
                  Need the Right Seal for Your Machine?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Share your machine model, seal size or product requirement and
                  our A2Z Seals team will help you find the correct sealing
                  solution.
                </p>

                <Link
                  to="/quote"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-5 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
                >
                  Request a Quote
                  <FaArrowRight />
                </Link>
              </div>
            </article>

            {/* RIGHT SIDE IMAGE */}
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_18px_45px_rgba(6,26,56,0.2)]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                />
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#b57b00]">
                  Product Support
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#061a38]">
                  Looking for Industrial Seals?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We provide hydraulic seals, oil seals, O-rings, seal kits and
                  custom sealing solutions for industrial machinery.
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#061a38] transition hover:text-[#b57b00]"
                >
                  Contact A2Z Seals
                  <FaArrowRight />
                </Link>
              </div>
            </aside>
          </div>

          {/* RELATED BLOGS */}
          <div className="mt-16">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
                  More Articles
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
                  Related Seal Insights
                </h2>
              </div>

              <button
                type="button"
                onClick={closePost}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#061a38] transition hover:text-[#b57b00]"
              >
                View All Blogs
                <FaArrowRight />
              </button>
            </div>

            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400]/60 hover:shadow-xl"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="p-5">
                    <span className="text-xs font-bold text-[#b57b00]">
                      {post.category}
                    </span>

                    <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-6 text-[#061a38]">
                      {post.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => openPost(post)}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#061a38] transition hover:text-[#b57b00]"
                    >
                      Read Article
                      <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================
     BLOG LIST PAGE
  ========================= */
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* HERO */}
      <div className="relative overflow-hidden bg-[#061a38] py-8 sm:py-10">
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#f5b400]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f5b400]/40 bg-[#f5b400]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#ffd45b]">
            <FaTags />
            A2Z Seals Knowledge Hub
          </span>

          <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            Latest <span className="text-[#f5b400]">Seal Insights</span>
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-300 sm:text-sm">
            Explore useful articles about hydraulic seals, oil seals, NOK seals,
            seal kits and industrial sealing solutions.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* SEARCH + FILTER */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#b57b00]">
                Browse Articles
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-[#061a38]">
                Industrial Sealing Blogs
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex h-11 min-w-[260px] items-center rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-[#f5b400] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#f5b400]/15">
                <FaSearch className="mr-3 text-slate-400" />

                <input
                  type="text"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Search blog articles..."
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-[#f5b400] focus:ring-4 focus:ring-[#f5b400]/15"
              >
                <option value="All">All Categories</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* BLOG CARDS */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f5b400]/60 hover:shadow-[0_20px_40px_rgba(6,26,56,0.16)]"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a38]/70 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#f5b400] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#061a38] shadow-md">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 text-lg font-extrabold leading-6 text-[#061a38] transition group-hover:text-[#b57b00]">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[#d99600]" />
                      {post.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaFolderOpen className="text-[#d99600]" />
                      Blog
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openPost(post)}
                    className="mt-5 inline-flex w-fit items-center gap-2 border-b-2 border-[#1687c7] pb-1 text-xs font-extrabold uppercase tracking-wide text-[#061a38] transition hover:border-[#f5b400] hover:text-[#b57b00]"
                  >
                    Read More
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <h3 className="text-xl font-extrabold text-[#061a38]">
              No blog article found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search keyword or category.
            </p>
          </div>
        )}

        {/* BELOW BLOG SECTION */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-[#061a38] p-7 text-white shadow-xl sm:p-9">
            <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#f5b400]">
              Need Help Choosing a Seal?
            </span>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Get the Right Seal for Your Machine
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
              Share your machine model, seal size or product requirement with
              A2Z Seals. Our experts will help you find the correct hydraulic
              seal, oil seal, O-ring or complete seal kit.
            </p>

            <Link
              to="/quote"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:-translate-y-0.5 hover:bg-[#ffc928]"
            >
              Request a Quote
              <FaArrowRight />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-extrabold text-[#061a38]">
              Popular Categories
            </h3>

            <div className="mt-5 space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);

                    window.scrollTo({
                      top: 380,
                      behavior: "smooth",
                    });
                  }}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-left text-sm font-bold text-slate-700 transition hover:border-[#f5b400]/50 hover:bg-[#fff9e8] hover:text-[#b57b00]"
                >
                  {category}
                  <FaChevronRight className="text-xs text-[#d99600]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;