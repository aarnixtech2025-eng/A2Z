import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaIndustry,
  FaSearch,
  FaShieldAlt,
  FaShippingFast,
  FaTools,
  FaWrench,
  FaTruckMoving,
  FaBoxes,
} from "react-icons/fa";

// Product Images
import sealKitsImage from "../assets/images/a.jpg";
import hydraulicSealsImage from "../assets/images/b.jpg";
import oilSealsImage from "../assets/images/c.jpg";
import oRingsImage from "../assets/images/d.jpeg";
import pumpSealsImage from "../assets/images/a.jpg";
import gearboxSealsImage from "../assets/images/a.jpg";

const productCategories = [
  {
    id: 1,
    name: "Hydraulic Seal Kits",
    shortName: "Seal Kits",
    description:
      "Complete hydraulic cylinder seal kits for excavators, loaders, JCB and heavy machinery.",
    image: sealKitsImage,
    icon: <FaTools />,
    badge: "Best Seller",
    applications: ["Excavators", "JCB", "Loaders"],
    to: "/shop/products",
  },
  {
    id: 2,
    name: "Hydraulic Seals",
    shortName: "Hydraulic",
    description:
      "High-performance piston seals, rod seals, wiper seals and wear rings for hydraulic systems.",
    image: hydraulicSealsImage,
    icon: <FaCogs />,
    badge: "Premium Range",
    applications: ["Piston Seals", "Rod Seals", "Wiper Seals"],
    to: "/shop/products",
  },
  {
    id: 3,
    name: "Oil Seals",
    shortName: "Oil Seals",
    description:
      "Reliable rotary shaft seals, TC seals and industrial oil seals for demanding applications.",
    image: oilSealsImage,
    icon: <FaIndustry />,
    badge: "High Demand",
    applications: ["Motors", "Gearbox", "Shaft Seals"],
    to: "/shop/products",
  },
  {
    id: 4,
    name: "O-Rings",
    shortName: "O-Rings",
    description:
      "Nitrile, Viton, silicone and rubber O-rings for hydraulic, pneumatic and industrial use.",
    image: oRingsImage,
    icon: <FaCheckCircle />,
    badge: "Multiple Sizes",
    applications: ["Nitrile", "Viton", "Silicone"],
    to: "/shop/products",
  },
  {
    id: 5,
    name: "Pump Seals",
    shortName: "Pump Seals",
    description:
      "Durable seal solutions for hydraulic pumps, motors and industrial fluid handling systems.",
    image: pumpSealsImage,
    icon: <FaShieldAlt />,
    badge: "Industrial Grade",
    applications: ["Hydraulic Pumps", "Motors", "Fluid Systems"],
    to: "/shop/products",
  },
  {
    id: 6,
    name: "Gearbox Seals",
    shortName: "Gearbox",
    description:
      "Strong gearbox and transmission seals designed for machinery, vehicles and heavy equipment.",
    image: gearboxSealsImage,
    icon: <FaShippingFast />,
    badge: "Heavy Duty",
    applications: ["Transmission", "Gearbox", "Heavy Machines"],
    to: "/shop/products",
  },
];

function Products() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 sm:py-16 lg:py-20">
      {/* Background Shapes */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#f5b400]/10 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b400]/30 bg-[#fff9e8] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#a66e00] shadow-sm">
            <FaCogs className="text-[#e5a600]" />
            A2Z Industrial Sealing Solutions
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#061a38] sm:text-4xl lg:text-5xl">
            Explore Our{" "}
            <span className="text-[#f5b400]">Product Categories</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Premium hydraulic seals, oil seals, O-rings and seal kits designed
            for construction equipment, industrial machines and heavy-duty
            applications.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f5b400]/70 hover:shadow-[0_24px_50px_rgba(6,26,56,0.16)]"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061a38]/80 via-[#061a38]/15 to-transparent" />

                {/* Top badge */}
                <span className="absolute right-4 top-4 rounded-full bg-[#f5b400] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#061a38] shadow-md">
                  {product.badge}
                </span>

                {/* Icon */}
                <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/95 text-xl text-[#e5a600] shadow-lg backdrop-blur-sm">
                  {product.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#e5a600]">
                      {product.shortName}
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-[#061a38] transition-colors group-hover:text-[#b57b00]">
                      {product.name}
                    </h3>
                  </div>

                  <FaBoxes className="mt-1 text-lg text-slate-300 transition group-hover:text-[#f5b400]" />
                </div>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                {/* Applications */}
                <div className="mt-5">
                  <p className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    Suitable For
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((application) => (
                      <span
                        key={application}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-600"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500">
                    <FaCheckCircle className="text-[#e5a600]" />
                    Quality Assured
                  </span>

                  <Link
                    to={product.to}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#061a38] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#f5b400] hover:text-[#061a38]"
                  >
                    View Products
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Product Help / CTA */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#f5b400]/30 bg-gradient-to-r from-[#061a38] via-[#0b3265] to-[#061a38] px-6 py-8 shadow-xl sm:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f5b400] text-2xl text-[#061a38] shadow-lg">
                <FaWrench />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Need Help Finding the Right Seal?
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-6 text-slate-200">
                  Send your machine model, part number or seal size. Our experts
                  will help you find the correct sealing solution.
                </p>
              </div>
            </div>

            <Link
              to="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#ffc928]"
            >
              <FaSearch />
              Get Free Quote
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Extra Trust Points */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff4cc] text-[#e5a600]">
              <FaShieldAlt />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#061a38]">
                Genuine Quality
              </p>
              <p className="text-xs text-slate-500">
                Reliable industrial sealing products.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff4cc] text-[#e5a600]">
              <FaTruckMoving />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#061a38]">
                Fast Dispatch
              </p>
              <p className="text-xs text-slate-500">
                Quick support for urgent requirements.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff4cc] text-[#e5a600]">
              <FaCheckCircle />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#061a38]">
                Expert Assistance
              </p>
              <p className="text-xs text-slate-500">
                Help selecting the right seal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;