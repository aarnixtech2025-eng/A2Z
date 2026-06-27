import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHeadset,
  FaIndustry,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";

import aboutSeals from "../assets/images/about-seals.png";

function About() {
  const strengths = [
    {
      icon: <FaShieldAlt />,
      title: "Quality Assured",
      text: "Reliable sealing products selected for demanding industrial applications.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Quick dispatch support to help keep your machines running.",
    },
    {
      icon: <FaHeadset />,
      title: "Expert Support",
      text: "Product guidance from a team that understands industrial sealing needs.",
    },
  ];

  const products = [
    "Hydraulic Seal Kits",
    "Oil Seals",
    "O-Rings & O-Ring Kits",
    "Floating Seals",
    "Rock Breaker Seal Kits",
    "Construction Machinery Seals",
  ];

  const brands = [
    "JCB",
    "Caterpillar",
    "Komatsu",
    "Volvo",
    "Hitachi",
    "Hyundai",
    "Tata Hitachi",
    "Kobelco",
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-[#061a38]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38] via-[#08234a] to-[#0d315e]" />

        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#f7b718]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#f7b718]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#f7b718] sm:text-sm">
                About A2Z Seals
              </p>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Sealing Solutions for
              <span className="block text-[#f7b718]">Every Industry.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              A2Z Seals supplies dependable hydraulic seals, oil seals, O-rings,
              seal kits, and industrial sealing solutions for construction,
              mining, manufacturing, and heavy machinery applications.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#f7b718] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
              >
                View Products
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#f7b718] hover:text-[#f7b718]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT INTRO ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-[#f7b718]/70 sm:-left-4 sm:-top-4" />

            <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
              <img
                src={aboutSeals}
                alt="Industrial seals and hydraulic components"
                className="h-72 w-full object-cover sm:h-96 lg:h-[470px]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061a38]/90 via-[#061a38]/30 to-transparent p-6 sm:p-8">
                <div className="inline-flex items-center gap-3 rounded-lg bg-white/95 px-4 py-3 shadow-lg">
                  <FaIndustry className="text-xl text-[#f7b718]" />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Industrial Solutions
                    </p>

                    <p className="text-sm font-extrabold text-[#061a38]">
                      Built for Heavy-Duty Performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
              Your Trusted Partner for
              <span className="block text-[#e5a600]">Industrial Seals.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                A2Z Seals is focused on supplying quality sealing solutions for
                hydraulic systems, industrial equipment, construction machinery,
                and heavy-duty applications.
              </p>

              <p>
                Our product range includes hydraulic seal kits, oil seals,
                O-rings, floating seals, rock breaker seal kits, and machinery
                seals designed to support reliable machine performance.
              </p>

              <p>
                We understand that downtime affects your business. That is why
                we focus on genuine products, practical support, and quick
                service for customers across industrial sectors.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Hydraulic & industrial sealing solutions",
                "Support for leading machine brands",
                "Quality-focused product selection",
                "Fast response for product enquiries",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#e5a600]" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRENGTHS ================= */}
      <section className="relative overflow-hidden bg-[#f5f7fa] py-14 sm:py-16 lg:py-20">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#061a38] via-[#f7b718] to-[#061a38]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#061a38] sm:text-4xl">
              More Than Products. Reliable Support.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              We help customers find suitable sealing products for their
              equipment with quality, speed, and service in mind.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f7b718] hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#061a38] text-2xl text-[#f7b718] transition group-hover:bg-[#f7b718] group-hover:text-[#061a38]">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#061a38]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
                What We Supply
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#061a38] sm:text-4xl">
                Complete Range of
                <span className="block text-[#e5a600]">Sealing Products.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                From routine replacement seals to specialized kits for heavy
                machinery, A2Z Seals provides products for different industrial
                requirements.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#061a38] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#e5a600] hover:text-[#061a38]"
              >
                Explore Products
                <FaArrowRight />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {products.map((product, index) => (
                <div
                  key={product}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-[#f7b718] hover:bg-white hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#061a38] text-sm font-extrabold text-[#f7b718] group-hover:bg-[#f7b718] group-hover:text-[#061a38]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-bold text-[#061a38]">{product}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="bg-[#061a38] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
              Compatible Applications
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Supporting Leading Machine Brands
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Our seal kits and industrial sealing solutions support equipment
              from leading construction and heavy machinery brands.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex min-h-16 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 text-center text-sm font-extrabold text-white transition hover:-translate-y-1 hover:border-[#f7b718] hover:bg-[#f7b718] hover:text-[#061a38]"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#061a38] via-[#0a2b57] to-[#061a38] px-6 py-10 text-center shadow-xl sm:px-10 lg:px-16">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#f7b718]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
                Need Help Finding a Seal?
              </p>

              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
                Get the Right Sealing Solution for Your Machine.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
                Share your machine details or seal requirement with us. Our team
                will help you find a suitable product.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#f7b718] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
              >
                Get In Touch
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;