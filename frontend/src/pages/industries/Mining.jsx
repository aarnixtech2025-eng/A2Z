import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaTools,
  FaIndustry,
  FaWrench,
  FaTruck,
  FaOilCan,
  FaShieldAlt,
  FaArrowUp,
} from "react-icons/fa";

function Mining() {
  const machines = [
    {
      number: "01",
      title: "Mining Excavators",
      text: "Hydraulic cylinders, boom systems, bucket linkages, and heavy-duty moving parts.",
    },
    {
      number: "02",
      title: "Wheel Loaders",
      text: "Sealing support for lifting arms, steering cylinders, and hydraulic circuits.",
    },
    {
      number: "03",
      title: "Dump Trucks",
      text: "Products for hydraulic lifting systems, wheel hubs, and heavy vehicle applications.",
    },
    {
      number: "04",
      title: "Drilling Machines",
      text: "Seal options for high-vibration drilling and rock-processing equipment.",
    },
    {
      number: "05",
      title: "Crushers & Screens",
      text: "Support for dusty crushing, screening, and material separation equipment.",
    },
    {
      number: "06",
      title: "Conveyor Systems",
      text: "Industrial sealing products for continuous material transport systems.",
    },
  ];

  const products = [
    {
      title: "Floating Seals",
      text: "For harsh, dusty and high-load mining equipment.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Hydraulic Seal Kits",
      text: "For cylinders, lifting systems, and hydraulic machinery.",
      icon: <FaCogs />,
    },
    {
      title: "Oil Seals",
      text: "For rotating shafts, hubs, gearboxes, and motors.",
      icon: <FaOilCan />,
    },
    {
      title: "O-Rings & Wear Rings",
      text: "For pressure control and protection in moving systems.",
      icon: <FaTools />,
    },
  ];

  const benefits = [
    "Suitable for dusty, abrasive, and high-load environments",
    "Helps support hydraulic system performance",
    "Products for maintenance, repair, and replacement needs",
    "Solutions for heavy machinery and continuous site operations",
  ];

  return (
    <main className="overflow-hidden bg-[#edf2f7]">
      {/* ================= UNIQUE MINING HERO ================= */}
      <section className="relative bg-[#111820]">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#111820] via-[#111820]/50 to-transparent lg:w-[62%]" />
        <div className="absolute -left-24 bottom-[-120px] h-[380px] w-[380px] rounded-full bg-[#e5a600]/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1600px] lg:grid-cols-[0.82fr_1.18fr]">
          {/* Left Content */}
          <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#e5a600]" />
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#f2b400] sm:text-xs">
                  Mining Industry Solutions
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5a600] text-xl text-[#061a38]">
                  <FaIndustry />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                  Heavy Equipment Sealing
                </p>
              </div>

              <h1 className="mt-6 text-[34px] font-black leading-[1.05] text-white sm:text-[44px] lg:text-[54px]">
                Built For
                <span className="block text-[#e5a600]">
                  Extreme Mining Conditions.
                </span>
              </h1>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                A2Z Seals supplies industrial sealing products for mining
                excavators, loaders, dump trucks, drilling machines, crushers,
                conveyors, and hydraulic equipment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#e5a600] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-[#f2b400] sm:text-sm"
                >
                  Request a Quote
                  <FaArrowRight />
                </Link>

                <Link
                  to="/industries"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#e5a600] hover:text-[#f2b400] sm:text-sm"
                >
                  All Industries
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 border-t border-white/10 pt-6">
                <div className="border-r border-white/10 pr-3">
                  <p className="text-xl font-black text-[#e5a600]">06+</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Equipment
                  </p>
                </div>

                <div className="border-r border-white/10 px-3">
                  <p className="text-xl font-black text-[#e5a600]">04+</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Seal Types
                  </p>
                </div>

                <div className="pl-3">
                  <p className="text-xl font-black text-[#e5a600]">Site</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Ready
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[600px]">
            <img
              src="/industries/mining.jpg"
              alt="Mining machinery"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#111820]/20 to-[#111820]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111820]/90 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#061a38]/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e5a600] text-[#061a38]">
                  <FaWrench />
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#e5a600]">
                    Mining Equipment Support
                  </p>

                  <p className="mt-1 text-lg font-extrabold text-white sm:text-xl">
                    Sealing Solutions For Harsh Worksites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MINING OVERVIEW ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1350px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
          <div className="relative">
            <div className="absolute -left-3 top-8 h-[85%] w-[5px] bg-[#e5a600]" />

            <p className="pl-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
              Mining Equipment Reliability
            </p>

            <h2 className="mt-4 pl-5 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
              Reliable Seals For
              <span className="block text-[#e5a600]">
                Demanding Mine Operations.
              </span>
            </h2>

            <p className="mt-6 pl-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Mining equipment works under dust, vibration, high pressure, and
              heavy loads. Suitable seals help reduce leakage and support
              maintenance requirements for hydraulic, rotating, and material
              handling equipment.
            </p>

            <div className="mt-7 grid gap-3 pl-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#e5a600]" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="ml-5 mt-8 inline-flex items-center gap-2 rounded-md bg-[#061a38] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0d315e]"
            >
              Get Seal Recommendation
              <FaArrowRight />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#061a38] shadow-2xl">
            <img
              src="/industries/mining.jpg"
              alt="Mining equipment operations"
              className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[500px]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061a38]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#061a38]/90 p-5 backdrop-blur-sm">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
                A2Z Seals
              </p>
              <p className="mt-2 text-xl font-extrabold text-white">
                Heavy-Duty Mining Seal Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EQUIPMENT TIMELINE ================= */}
      <section className="bg-[#edf2f7] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
              Equipment Applications
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl">
              Mining Equipment We Support
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Industrial sealing products for major mining equipment and
              heavy-duty hydraulic applications.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {machines.map((machine) => (
              <div
                key={machine.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e5a600]/70 hover:shadow-xl"
              >
                <span className="absolute right-5 top-4 text-5xl font-black text-[#061a38]/[0.05]">
                  {machine.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#061a38] text-[#e5a600]">
                  <FaTruck />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#061a38]">
                  {machine.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {machine.text}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#b77900]">
                  Mining Application
                  <FaArrowUp className="rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCT CARDS ================= */}
      <section className="bg-[#061a38] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e5a600]">
                Recommended Seal Products
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Products For Mining Machinery
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-[#e5a600] transition hover:text-white"
            >
              Request Product Details
              <FaArrowRight />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-[#e5a600] hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5a600] text-xl text-[#061a38]">
                    {product.icon}
                  </div>

                  <span className="text-sm font-black text-[#e5a600]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-white">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {product.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#e5a600] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1350px] flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#061a38]/70">
              Mining Industry Support
            </p>

            <h2 className="mt-2 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl">
              Need Seals for Mining Equipment?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#061a38]/80 sm:text-base">
              Share your equipment type, seal size, part number, or maintenance
              requirement with A2Z Seals.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#061a38] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0d315e]"
          >
            Contact A2Z Seals
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Mining;