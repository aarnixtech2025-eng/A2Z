import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCogs,
} from "react-icons/fa";

import Hero from "./Hero";
import CategoryCard from "./CategoryCard";

// CTA banner image
import customSealKitBanner from "../assets/hero.png";     

// ================= BASE URL =================
const BASE_URL = "http://localhost:5000/api";
const brandLinks = {
  CFW: "/list/cfw-oil-seal",
  NOK: "/list/nok-oil-seal",
  SOG: "/list/sog-oil-seal",
};
function Home() {
  const brandsScrollRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  // ================= SCROLL =================
  const scrollBrands = (direction) => {
    const container = brandsScrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.7;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  // ================= API CALLS =================
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/taxonomies/categories`);
      setCategories(res.data.data || []);
    } catch (err) {
      console.error("Category API error:", err);
      setCategories([]);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/products/featured`);
      setProducts(res.data.products || []);
    } catch (err) {
      console.error("Product API error:", err);
      setProducts([]);
    }
  };

  // ================= LIMIT =================
  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 5);

  return (
    <div>
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= CATEGORIES ================= */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b400]/30 bg-[#fff9e8] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#a66e00] shadow-sm">
              <FaCogs className="text-[#e5a600]" />
              Product Categories
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#061a38] sm:mt-5 sm:text-4xl md:text-5xl">
              Our{" "}
              <span className="text-[#f5b400]">Product Categories</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
              Explore our wide range of industrial sealing products organized by category.
            </p>
          </div>

          {/* Category Cards Grid */}
          <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {visibleCategories.map((cat) => (
              <CategoryCard key={cat.term_id || cat.id} category={cat} />
            ))}
          </div>

          {/* VIEW ALL BUTTON */}
          {categories.length > 5 && (
            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-[#061a38] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-[#f5b400] hover:text-[#061a38] hover:shadow-lg"
              >
                View All Categories
                <FaArrowRight />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="py-10">
        <h2 className="text-center text-xl font-bold mb-6">
          Dealing in Premium Brands
        </h2>

        <div className="relative px-10">
          <button
            onClick={() => scrollBrands("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={brandsScrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide"
          >
            {Object.keys(brandLinks).map((brand) => (
              <Link
                key={brand}
                to={brandLinks[brand]}
                className="min-w-[120px] bg-gray-100 p-3 text-center rounded"
              >
                {brand}
              </Link>
            ))}
          </div>

          <button
            onClick={() => scrollBrands("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-center text-2xl font-bold mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-5">
          {products.slice(0, 6).map((product) => (
            <Link
              key={product.id || product.ID}
              to={`/shop/product/${product.id}`}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition text-center"
            >
              <img
                src={
                  product.image
                    ? `http://localhost:5000${product.image}` 
                    : "/placeholder.png"
                }
                alt={product.name}
                className="h-16 mx-auto mb-3"
              />
              <h3 className="text-sm font-semibold">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 text-center">
        <Link
          to="/contact"
          className="bg-yellow-500 px-6 py-3 text-black font-semibold rounded"
        >
          Request Custom Seal Kit <FaArrowRight className="inline ml-2" />
        </Link>
      </section>
    </div>
  );
}

export default Home;