import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaArrowRight,
  FaAward,
  FaBoxes,
  FaChevronLeft,
  FaChevronRight,
  FaCogs,
  FaHeadset,
  FaIndustry,
  FaShieldAlt,
  FaShippingFast,
  FaTools,
  FaTruck,
} from "react-icons/fa";

import Hero from "../components/Hero";

// CTA banner image
import customSealKitBanner from "../assets/images/ChatGPT Image Jul 1, 2026, 03_03_25 PM.png";

// Product images
import hydraulicSealKit from "../assets/images/a.jpg";
import oilSeal from "../assets/images/a.jpg";
import oRing from "../assets/images/a.jpg";
import floatingSeal from "../assets/images/a.jpg";
import rockBreakerSeal from "../assets/images/a.jpg";
import constructionSeal from "../assets/images/a.jpg";



const brandLinks = {
  CFW: "/list/cfw-oil-seal",
  NOK: "/list/nok-oil-seal",
  SOG: "/list/sog-oil-seal",
  PARKER: "/list/parker-oil-seal",
  FREUDENBERG: "/list/freudenberg-oil-seal",
  SIMRIT: "/list/simrit-oil-seal",
  CORTECO: "/list/corteco-oil-seal",
  TTO: "/list/tto-oil-seal",
  TCK: "/list/tck-oil-seal",
  CR: "/list/cr-oil-seal",
  NAK: "/list/nak-oil-seal",
  NDK: "/list/ndk-oil-seal",
  MERKEL: "/list/merkel-oil-seal",
  NATIONAL: "/list/national-oil-seal",
  CHR: "/list/chr-oil-seal",
};

function Home() {
  const brandsScrollRef = useRef(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchFeaturedProducts();
    fetchProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/featured`);
      if (response.data.success) {
        setFeaturedProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
      if (response.data.products) {
        setProducts(response.data.products.slice(0, 6));
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const scrollBrands = (direction) => {
    const container = brandsScrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.7;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const categories = [
    {
      title: "Hydraulic Seal Kits",
      image: hydraulicSealKit,
      to: "/shop/products",
    },
    {
      title: "Oil Seals",
      image: oilSeal,
      to: "/shop/products",
    },
    {
      title: "O-Rings",
      image: oRing,
      to: "/shop/products",
    },
    {
      title: "Floating Seals",
      image: floatingSeal,
      to: "/shop/products",
    },
    {
      title: "Rock Breaker Seal Kits",
      image: rockBreakerSeal,
      to: "/shop/products",
    },
    {
      title: "Construction Machinery Seal Kits",
      image: constructionSeal,
      to: "/shop/products",
    },
  ];

  const brands = [
    { name: "NOK", color: "#061a38" },
    { name: "HALLITE", color: "#061a38" },
    { name: "CORTECO", color: "#061a38" },
    { name: "SIMRIT", color: "#061a38" },
    { name: "MERKEL", color: "#061a38" },
    { name: "PARKER", color: "#061a38" },
    { name: "CFW", color: "#061a38" },
    { name: "SAKAGAMI", color: "#061a38" },
    { name: "SKF", color: "#061a38" },
    { name: "FREUDENBERG", color: "#061a38" },
    { name: "SOG", color: "#061a38" },
    { name: "KASTAS", color: "#061a38" },
    { name: "TTO", color: "#061a38" },
    { name: "TCK", color: "#061a38" },
    { name: "CR", color: "#061a38" },
    { name: "NAK", color: "#061a38" },
    { name: "NDK", color: "#061a38" },
    { name: "NATIONAL", color: "#061a38" },
    { name: "CHR", color: "#061a38" },
  ];

  const whyChooseUs = [
    {
      icon: <FaAward />,
      title: "ISO Certified",
      text: "We are ISO 9001:2015 certified company ensuring quality.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Genuine Products",
      text: "100% genuine & high quality sealing products.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      text: "Pan India delivery with express shipping.",
    },
    {
      icon: <FaHeadset />,
      title: "Expert Support",
      text: "Our experts are always ready to support you 24/7.",
    },
  ];

  const industries = [
    { title: "Construction", icon: <FaTools />, to: "/industries/construction" },
    { title: "Mining", icon: <FaTruck />, to: "/industries/mining" },
    { title: "Cement", icon: <FaIndustry />, to: "/industries/cement" },
    { title: "Steel", icon: <FaCogs />, to: "/industries/steel" },
    { title: "Manufacturing", icon: <FaBoxes />, to: "/industries/manufacturing" },
    { title: "Infrastructure", icon: <FaIndustry />, to: "/industries/infrastructure" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Purchase Manager",
      company: "JCB India",
      text: "A2Z Seals has provided us excellent quality seal kits with on-time delivery. Their products are reliable and long lasting.",
    },
    {
      name: "Sandeep Patil",
      role: "Maintenance Head",
      company: "L&T Construction",
      text: "We have been using A2Z Seals products for our hydraulic equipment. Best quality and knowledgeable team.",
    },
    {
      name: "Vikram Singh",
      role: "Procurement Manager",
      company: "Tata Hitachi",
      text: "Great product range and quick response. Highly recommended for all industrial sealing needs.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero comes first after Navbar */}
      <Hero />

      {/* Product Categories */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h2 className="text-xl font-extrabold text-[#061a38] sm:text-2xl lg:text-3xl">
              Our <span className="text-[#f5b400]">Products</span>
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5b400] text-white text-sm font-bold rounded-lg hover:bg-[#e5a600] transition-colors duration-300"
            >
              View All <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/shop/product/${product.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg sm:p-3"
              >
                <div className="flex h-20 items-center justify-center overflow-hidden rounded-lg bg-slate-50 sm:h-24 lg:h-28">
                  <img
                    src={product.thumbnail || hydraulicSealKit}
                    alt={product.title}
                    className="h-full w-full object-contain p-1.5 transition duration-500 group-hover:scale-110 sm:p-2"
                  />
                </div>

                <h3 className="mt-2 min-h-[32px] text-[10px] font-extrabold leading-4 text-[#061a38] sm:mt-3 sm:min-h-[38px] sm:text-xs sm:leading-5">
                  {product.title}
                </h3>

                <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-[#e5a600] sm:mt-2 sm:text-[11px]">
                  ₹{product.price} <FaArrowRight className="text-[8px] sm:text-[9px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="border-y border-slate-100 bg-slate-50 py-5 sm:py-6">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-xl font-extrabold text-[#061a38] sm:text-2xl lg:text-3xl">
              Dealing in <span className="text-[#f5b400]">Premium Brands</span>
            </h2>
            <p className="mx-auto mt-1.5 max-w-2xl text-xs text-slate-600 sm:mt-2 sm:text-sm md:text-base">
              We supply after market replacement seals for OEM machines from
              world's leading manufacturers
            </p>
          </div>

          <div className="relative flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => scrollBrands("left")}
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#061a38] shadow-sm md:h-9 md:w-9 lg:flex"
            >
              <FaChevronLeft />
            </button>

            <div
              ref={brandsScrollRef}
              className="flex flex-1 gap-2 overflow-x-auto scroll-smooth whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3"
            >
              {brands.map((brand) => (
                <Link
                  key={brand.name}
                  to={brandLinks[brand.name] || `/brands/${brand.name.toLowerCase()}`}
                  className="flex h-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 shadow-sm transition hover:border-[#f5b400] hover:shadow-md sm:h-14 sm:px-5"
                >
                  <span
                    className="text-center text-[10px] font-black uppercase leading-tight tracking-wide sm:text-[11px] md:text-[13px]"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </span>
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollBrands("right")}
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#061a38] shadow-sm md:h-9 md:w-9 lg:flex"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-xl font-extrabold text-[#061a38] sm:text-2xl lg:text-3xl">
              Why Choose <span className="text-[#f5b400]">A2Z Seals?</span>
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-md sm:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff4cc] text-lg text-[#e5a600] sm:h-12 sm:w-12 sm:text-xl">
                  {feature.icon}
                </div>

                <h3 className="mt-3 text-sm font-extrabold text-[#061a38] sm:mt-4 sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-xl font-extrabold text-[#061a38] sm:text-2xl lg:text-3xl">
              Featured <span className="text-[#f5b400]">Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {featuredProducts.length > 0 ? featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg sm:p-3"
              >
                <div className="h-20 overflow-hidden rounded-lg bg-slate-50 sm:h-24 lg:h-28">
                  <img
                    src={product.thumbnail || hydraulicSealKit}
                    alt={product.title}
                    className="h-full w-full object-contain p-1.5 transition duration-500 group-hover:scale-110 sm:p-2"
                  />
                </div>

                <h3 className="mt-2 min-h-[32px] text-[10px] font-extrabold leading-4 text-[#061a38] sm:mt-3 sm:min-h-[36px] sm:text-xs sm:leading-5">
                  {product.title}
                </h3>

                <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-[#e5a600] sm:mt-2 sm:text-[11px]">
                  ₹{product.price} <FaArrowRight className="text-[8px] sm:text-[9px]" />
                </span>
              </Link>
            )) : (
              <div className="col-span-full text-center text-slate-500 py-8">
                No featured products available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-xl font-extrabold text-[#061a38] sm:text-2xl lg:text-3xl">
              Industries <span className="text-[#f5b400]">We Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                to={industry.to}
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg sm:p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-xl text-[#061a38] transition group-hover:bg-[#fff4cc] group-hover:text-[#f5b400] sm:h-14 sm:w-14 sm:text-2xl">
                  {industry.icon}
                </div>

                <h3 className="mt-2.5 text-xs font-extrabold text-[#061a38] sm:mt-3 sm:text-sm">
                  {industry.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Seal CTA */}
      <section className="relative overflow-hidden bg-[#061a38]">
        {/* Background seal-kit banner image */}
        <img
          src={customSealKitBanner}
          alt="Custom Seal Kits"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38]/95 via-[#061a38]/80 to-[#061a38]/60" />

        <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-base font-extrabold uppercase tracking-wide text-white sm:text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                Need Custom Seal Kit?
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-200 sm:mt-3 sm:text-sm sm:leading-6 md:text-base">
                Get high quality customized seal kits for your machines.
                <br className="hidden sm:block" />
                Share your requirement with us today!
              </p>

              <Link
                to="/quote"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#f5b400] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300 sm:mt-5 sm:px-5 sm:py-3 sm:text-xs md:px-6 md:py-3.5 md:text-sm lg:px-7 lg:py-4"
              >
                Get Free Consultation
                <FaArrowRight className="text-[10px] sm:text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-xl font-extrabold text-[#061a38] sm:text-2xl lg:text-3xl">
              What Our <span className="text-[#f5b400]">Clients Say</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:p-6"
              >
                <p className="text-3xl font-black leading-none text-[#f5b400] sm:text-4xl">
                  "
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">
                  {testimonial.text}
                </p>

                <div className="mt-4 flex items-center gap-2.5 border-t border-slate-100 pt-3 sm:mt-5 sm:gap-3 sm:pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061a38] text-xs font-bold text-[#f5b400] sm:h-10 sm:w-10 sm:text-sm">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold text-[#061a38] sm:text-sm">
                      {testimonial.name}
                    </h3>

                    <p className="text-[10px] text-slate-500 sm:text-[11px]">
                      {testimonial.role}
                    </p>

                    <p className="text-[10px] font-semibold text-[#e5a600] sm:text-[11px]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2 sm:mt-8">
            {testimonials.map((t, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === 0 ? "w-6 bg-[#f5b400]" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;