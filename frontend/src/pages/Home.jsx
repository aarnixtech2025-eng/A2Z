import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaAward,
  FaBoxes,
  FaCheckCircle,
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

// Product images
import hydraulicSealKit from "../assets/images/a.jpg";
import oilSeal from "../assets/images/a.jpg";
import oRing from "../assets/images/a.jpg";
import floatingSeal from "../assets/images/a.jpg";
import rockBreakerSeal from "../assets/images/a.jpg";
import constructionSeal from "../assets/images/a.jpg";

// Industry images
import constructionImage from "../assets/images/construction.jpg";
import miningImage from "../assets/images/mining.jpg";
import cementImage from "../assets/images/cement.jpg";
import steelImage from "../assets/images/steel.png";
import manufacturingImage from "../assets/images/manufacturing.png";
import infrastructureImage from "../assets/images/infrastructure.png";

// Brand images
import jcbBrand from "../assets/images/a.jpg";
import caterpillarBrand from "../assets/images/a.jpg";
import komatsuBrand from "../assets/images/a.jpg";
import volvoBrand from "../assets/images/a.jpg";
import hitachiBrand from "../assets/images/a.jpg";
import hyundaiBrand from "../assets/images/a.jpg";

function Home() {
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
    { name: "JCB", image: jcbBrand },
    { name: "Caterpillar", image: caterpillarBrand },
    { name: "Komatsu", image: komatsuBrand },
    { name: "Volvo", image: volvoBrand },
    { name: "Hitachi", image: hitachiBrand },
    { name: "Hyundai", image: hyundaiBrand },
  ];

  const whyChooseUs = [
    {
      icon: <FaAward />,
      title: "ISO Certified",
      text: "Quality-focused sealing solutions for industrial applications.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Genuine Products",
      text: "Reliable products for dependable machine performance.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      text: "Quick dispatch support for urgent industrial requirements.",
    },
    {
      icon: <FaHeadset />,
      title: "Expert Support",
      text: "Professional help for product selection and enquiries.",
    },
  ];

  const featuredProducts = [
    {
      title: "Hydraulic Cylinder Seal Kit",
      image: hydraulicSealKit,
      to: "/shop/products",
    },
    {
      title: "JCB Seal Kit",
      image: rockBreakerSeal,
      to: "/shop/products",
    },
    {
      title: "Oil Seal",
      image: oilSeal,
      to: "/shop/products",
    },
    {
      title: "O-Ring Kit",
      image: oRing,
      to: "/shop/products",
    },
    {
      title: "Floating Seal",
      image: floatingSeal,
      to: "/shop/products",
    },
    {
      title: "Rock Breaker Seal Kit",
      image: constructionSeal,
      to: "/shop/products",
    },
  ];

  const industries = [
    {
      title: "Construction",
      icon: <FaTools />,
      image: constructionImage,
      to: "/industries/construction",
    },
    {
      title: "Mining",
      icon: <FaTruck />,
      image: miningImage,
      to: "/industries/mining",
    },
    {
      title: "Cement",
      icon: <FaIndustry />,
      image: cementImage,
      to: "/industries/cement",
    },
    {
      title: "Steel",
      icon: <FaCogs />,
      image: steelImage,
      to: "/industries/steel",
    },
    {
      title: "Manufacturing",
      icon: <FaBoxes />,
      image: manufacturingImage,
      to: "/industries/manufacturing",
    },
    {
      title: "Infrastructure",
      icon: <FaIndustry />,
      image: infrastructureImage,
      to: "/industries/infrastructure",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Purchase Manager",
      text: "A2Z Seals has provided us excellent quality seal kits consistently. Their products are reliable and long lasting.",
    },
    {
      name: "Sandeep Patil",
      role: "Maintenance Engineer",
      text: "We have been using A2Z Seals products for our hydraulic equipment. Best quality and knowledgeable team.",
    },
    {
      name: "Vikram Singh",
      role: "Procurement Officer",
      text: "Great product range and quick response. Highly recommended for all industrial sealing needs.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero comes first after Navbar */}
      <Hero />

      {/* Trust Strip */}
      <section className="bg-[#061a38]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-4 py-5 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            {
              icon: <FaAward />,
              title: "ISO Certified",
              text: "Quality Standards",
            },
            {
              icon: <FaShieldAlt />,
              title: "Premium Quality",
              text: "Genuine Products",
            },
            {
              icon: <FaShippingFast />,
              title: "Fast Delivery",
              text: "Pan India",
            },
            {
              icon: <FaHeadset />,
              title: "Expert Support",
              text: "24/7 Assistance",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-3 border-white/10 px-2 text-white sm:border-r last:border-r-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f5b400]/60 text-lg text-[#f5b400]">
                {item.icon}
              </div>

              <div>
                <p className="text-xs font-bold sm:text-sm">{item.title}</p>
                <p className="text-[10px] text-slate-300 sm:text-xs">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
                Explore Our Range
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-[#061a38] sm:text-3xl">
                Our <span className="text-[#f5b400]">Product Categories</span>
              </h2>
            </div>

            <Link
              to="/shop/categories"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#061a38] transition hover:text-[#e5a600]"
            >
              View All Categories
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.to}
                className="group rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg"
              >
                <div className="flex h-28 items-center justify-center overflow-hidden rounded-lg bg-slate-50">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 min-h-[38px] text-xs font-extrabold leading-5 text-[#061a38]">
                  {category.title}
                </h3>

                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#e5a600]">
                  View Products <FaArrowRight className="text-[9px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="border-y border-slate-100 bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#061a38]">
              Brands We Support
            </p>

            <h2 className="mt-1 text-xl font-extrabold text-[#061a38] sm:text-2xl">
              Aftermarket Seal Kits for Leading Brands
            </h2>
          </div>

          <div className="relative flex items-center gap-3">
            <button
              type="button"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#061a38] shadow-sm lg:flex"
            >
              <FaChevronLeft />
            </button>

            <div className="grid flex-1 grid-cols-3 gap-3 sm:grid-cols-6">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex h-16 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#061a38] shadow-sm lg:flex"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Premium Brands */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
            Premium Industrial Seals
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
            Branded Oil Seals, Seal Kits
            <span className="block text-[#f5b400]">
              & Industrial Sealing Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            A2Z Seals provides dependable hydraulic seal kits, oil seals,
            O-rings, floating seals and custom sealing solutions for industrial
            machines, heavy equipment and hydraulic systems.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["CFW", "Hallite", "NOK", "SKF", "Parker", "Trelleborg"].map(
              (brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-[#f5b400]/40 bg-[#fff9e8] px-5 py-2 text-sm font-extrabold text-[#061a38]"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
              Why Choose A2Z Seals?
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#061a38] sm:text-3xl">
              Trusted Sealing Solutions for Every Industry
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff4cc] text-xl text-[#e5a600]">
                  {feature.icon}
                </div>

                <h3 className="mt-4 text-base font-extrabold text-[#061a38]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
                Best Selling Products
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-[#061a38] sm:text-3xl">
                Featured <span className="text-[#f5b400]">Products</span>
              </h2>
            </div>

            <Link
              to="/shop/products"
              className="hidden items-center gap-2 text-sm font-bold text-[#061a38] hover:text-[#e5a600] sm:inline-flex"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.title}
                to={product.to}
                className="group rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg"
              >
                <div className="h-28 overflow-hidden rounded-lg bg-slate-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 min-h-[36px] text-xs font-extrabold leading-5 text-[#061a38]">
                  {product.title}
                </h3>

                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#e5a600]">
                  View Details <FaArrowRight className="text-[9px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
              Heavy Equipment Support
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#061a38] sm:text-3xl">
              Industries <span className="text-[#f5b400]">We Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                to={industry.to}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg"
              >
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover opacity-15 transition duration-500 group-hover:scale-110 group-hover:opacity-25"
                  />
                </div>

                <div className="relative flex min-h-[145px] flex-col items-center justify-center p-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061a38] text-lg text-[#f5b400]">
                    {industry.icon}
                  </div>

                  <h3 className="mt-3 text-sm font-extrabold text-[#061a38]">
                    {industry.title}
                  </h3>

                  <span className="mt-2 text-[11px] font-bold text-[#e5a600]">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Seal CTA */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#061a38] via-[#0b3265] to-[#061a38] px-6 py-10 shadow-xl sm:px-10 lg:px-14">
            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[#f5b400]/20 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
                  Need Custom Seal Kit?
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Get the Right Seal for Your Machine.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
                  Share your machine model, seal size or product requirement and
                  our team will help you find a suitable sealing solution.
                </p>
              </div>

              <Link
                to="/quote"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#f5b400] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
              >
                Get Free Consultation
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
              Customer Feedback
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-[#061a38] sm:text-3xl">
              What Our <span className="text-[#f5b400]">Clients Say</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-4xl font-black leading-none text-[#f5b400]">
                  “
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {testimonial.text}
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061a38] text-sm font-bold text-[#f5b400]">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[#061a38]">
                      {testimonial.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#f5b400]/30 bg-[#fff9e8] px-6 py-10 sm:px-10">
            <FaCheckCircle className="mx-auto text-3xl text-[#e5a600]" />

            <h2 className="mt-4 text-2xl font-extrabold text-[#061a38] sm:text-3xl">
              Looking for the Right Industrial Seal?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Contact A2Z Seals today for hydraulic seal kits, oil seals,
              O-rings, floating seals and industrial sealing requirements.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 rounded-md bg-[#f5b400] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
              >
                Get Quote <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#061a38] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0b3265]"
              >
                Contact Us <FaHeadset />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;