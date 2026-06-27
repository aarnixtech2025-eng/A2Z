import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaTools,
  FaIndustry,
  FaFire,
  FaShieldAlt,
  FaWrench,
} from "react-icons/fa";

function Steel() {
  const machines = [
    "Rolling Mills",
    "Hydraulic Cylinders",
    "Press Machines",
    "Coil Handling Equipment",
    "Industrial Pumps",
    "Material Handling Systems",
  ];

  const products = [
    "Hydraulic Seal Kits",
    "Piston Seals",
    "Rod Seals",
    "Oil Seals",
    "O-Rings",
    "Guide Rings",
  ];

  const benefits = [
    "Supports pressure retention in hydraulic systems",
    "Suitable for heavy-duty steel plant equipment",
    "Helps reduce maintenance downtime",
    "Reliable sealing options for continuous operations",
  ];

  const performanceCards = [
    {
      icon: <FaFire />,
      title: "High-Heat Areas",
      description:
        "Seal support for equipment working around heat, friction, and demanding production conditions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Leakage Control",
      description:
        "Suitable sealing options that help maintain hydraulic system performance.",
    },
    {
      icon: <FaWrench />,
      title: "Maintenance Ready",
      description:
        "Products for scheduled servicing, repair work, and replacement requirements.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f6f8fb]">
      {/* ================= SMALL HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071827] via-[#0B1F33] to-[#1E3A5F]">
        {/* Industrial grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(203,213,225,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(203,213,225,0.16) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Orange industrial glow */}
        <div className="absolute -left-24 top-0 h-[300px] w-[300px] rounded-full bg-[#F97316]/25 blur-[110px]" />

        {/* Steel blue glow */}
        <div className="absolute -right-24 bottom-[-100px] h-[360px] w-[360px] rounded-full bg-[#60A5FA]/20 blur-[120px]" />

        {/* Top orange line */}
        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />

        {/* Bottom shine */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#CBD5E1]/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            {/* Left content */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F97316]" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FDBA74] sm:text-xs">
                  Steel Industry Solutions
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#F97316]/40 bg-[#F97316] text-lg text-white shadow-lg shadow-orange-500/20">
                  <FaIndustry />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                  Heavy-Duty Industrial Sealing
                </p>
              </div>

              <h1 className="mt-5 text-[32px] font-extrabold leading-[1.08] text-white sm:text-[42px] lg:text-[52px]">
                Seals Built For
                <span className="mt-1 block text-[#FDBA74]">
                  Steel Plant Machinery.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                A2Z Seals provides hydraulic and industrial sealing solutions
                for rolling mills, press machines, hydraulic cylinders, coil
                handling systems, and steel processing equipment.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-[#EA580C] sm:text-sm"
                >
                  Request a Quote
                  <FaArrowRight />
                </Link>

                <Link
                  to="/industries"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300/30 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#F97316] hover:bg-white/10 hover:text-[#FDBA74] sm:text-sm"
                >
                  All Industries
                </Link>
              </div>
            </div>

            {/* Right image card */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-[24px] border border-[#F97316]/25" />

              <div className="relative overflow-hidden rounded-[20px] border border-white/15 bg-[#102B45] shadow-2xl">
                <img
                  src="/industries/steel.png"
                  alt="Steel plant machinery"
                  className="h-[230px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#071827]/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-[#071827]/90 p-4 backdrop-blur-md">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#FDBA74]">
                    Steel Plant Application
                  </p>

                  <p className="mt-1 text-base font-extrabold text-white sm:text-lg">
                    Hydraulic, Rolling & Press Equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE CARDS ================= */}
      <section className="relative z-10 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {performanceCards.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-[#fbfcfd] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-lg sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E8] text-lg text-[#EA580C]">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#061a38]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STEEL INTRO ================= */}
      <section className="bg-[#eef2f6] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] bg-[#111820] shadow-xl">
              <img
                src="/industries/steel.jpg"
                alt="Steel processing equipment"
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[440px]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-5 rounded-lg border border-[#F97316]/30 bg-[#0B1F33] px-5 py-4 text-white shadow-xl">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#FDBA74]">
                A2Z Seals
              </p>

              <p className="mt-1 text-sm font-extrabold">
                Steel Processing Support
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#EA580C]">
              Designed for Heavy Industry
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
              Reliable Seals For
              <span className="block text-[#F97316]">
                Steel Processing Operations.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Steel machinery operates under high pressure, vibration, dust,
              friction, and continuous production schedules. Suitable seals
              help support hydraulic performance and regular maintenance needs.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#F97316]" />

                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0B1F33] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#1E3A5F]"
            >
              Get Seal Recommendation
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MACHINES AND PRODUCTS ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#EA580C]">
              Steel Industry Range
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#061a38] sm:text-4xl">
              Equipment and Seal Products
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#fbfcfd] p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1F33] text-xl text-[#FDBA74]">
                  <FaCogs />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#EA580C]">
                    Applications
                  </p>

                  <h3 className="text-2xl font-extrabold text-[#061a38]">
                    Equipment We Support
                  </h3>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {machines.map((machine, index) => (
                  <div
                    key={machine}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-[#F97316] hover:bg-[#FFF5EF]"
                  >
                    <span className="text-xs font-black text-[#EA580C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {machine}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0B1F33] p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316] text-xl text-white">
                  <FaTools />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FDBA74]">
                    Product Range
                  </p>

                  <h3 className="text-2xl font-extrabold text-white">
                    Recommended Seal Products
                  </h3>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {products.map((product, index) => (
                  <div
                    key={product}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-[#F97316] hover:bg-[#F97316]/20"
                  >
                    <span className="text-xs font-black text-[#FDBA74]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#F97316] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/75">
              Steel Industry Support
            </p>

            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Need Seals for Steel Plant Equipment?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Share your machine type, seal size, part number, or product
              requirement with A2Z Seals.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0B1F33] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#1E3A5F]"
          >
            Contact A2Z Seals
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Steel;