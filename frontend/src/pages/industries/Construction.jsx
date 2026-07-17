import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaHardHat,
  FaTools,
} from "react-icons/fa";

import {
  FaArrowUpRightFromSquare,
  FaHelmetSafety,
  FaGear,
} from "react-icons/fa6";

function Construction() {
  const machines = [
    "Excavators",
    "Backhoe Loaders",
    "Wheel Loaders",
    "Hydraulic Breakers",
    "Cranes",
    "Road Rollers",
  ];

  const products = [
    "Hydraulic Seal Kits",
    "Cylinder Seal Kits",
    "Oil Seals",
    "O-Rings",
    "Floating Seals",
    "Rock Breaker Seal Kits",
  ];

  const benefits = [
    "Helps reduce hydraulic oil leakage",
    "Supports reliable cylinder performance",
    "Suitable for heavy-duty equipment applications",
    "Quick assistance for machine seal requirements",
  ];

  return (
    <main className="overflow-hidden bg-[#f7f9fc]">
      {/* ================= NEW CONSTRUCTION HERO ================= */}
      <section className="relative overflow-hidden bg-[#07182d]">
        {/* Technical Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Gold Light */}
        <div className="absolute -left-24 top-20 h-[320px] w-[320px] rounded-full bg-[#f7b718]/15 blur-[110px]" />
        <div className="absolute right-0 top-0 h-[460px] w-[460px] rounded-full bg-sky-500/10 blur-[130px]" />

        {/* Decorative Lines */}
        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#f7b718] to-transparent" />
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-white/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Left Content */}
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#f7b718]/40 bg-[#f7b718]/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
                  Industry Solutions
                </span>

                <span className="h-[1px] w-10 bg-[#f7b718]/70" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Construction Equipment
                </span>
              </div>

              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f7b718]/30 bg-[#f7b718] text-2xl text-[#061a38] shadow-[0_12px_35px_rgba(247,183,24,0.22)]">
                  <FaHardHat />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f7b718]">
                    A2Z Seals
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    Built for heavy-duty machinery
                  </p>
                </div>
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[62px]">
                Sealing Power For
                <span className="mt-2 block text-[#f7b718]">
                  Construction Machines.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Reliable hydraulic and industrial sealing solutions for
                excavators, loaders, breakers, cranes, and other construction
                equipment working in high-pressure site conditions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#f7b718] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
                >
                  Request a Quote
                  <FaArrowRight />
                </Link>

                <Link
                  to="/industries"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#f7b718] hover:text-[#f7b718]"
                >
                  All Industries
                  <FaArrowUpRightFromSquare className="text-xs" />
                </Link>
              </div>

              {/* Hero Mini Stats */}
              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">
                <div className="border-r border-white/10 pr-4">
                  <p className="text-xl font-extrabold text-white sm:text-2xl">
                    06+
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Machine Types
                  </p>
                </div>

                <div className="border-r border-white/10 px-4">
                  <p className="text-xl font-extrabold text-white sm:text-2xl">
                    06+
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Seal Categories
                  </p>
                </div>

                <div className="pl-4">
                  <p className="text-xl font-extrabold text-white sm:text-2xl">
                    24/7
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Support Focus
                  </p>
                </div>
              </div>
            </div>

            {/* Right Industrial Visual */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] border border-[#f7b718]/15" />

              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0b2546] shadow-2xl">
                <img
                  src="/industries/construction.jpg"
                  alt="Construction machinery"
                  className="h-[290px] w-full object-cover sm:h-[390px] lg:h-[470px]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Image fallback background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0d315b] via-[#08203d] to-[#061326]" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061a38] via-transparent to-transparent" />

                {/* Top technical label */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-md border border-white/15 bg-[#061a38]/85 px-3 py-2 backdrop-blur-md">
                  <FaHelmetSafety className="text-[#f7b718]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white">
                    Heavy Duty Application
                  </span>
                </div>

                {/* Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-[#061a38]/90 p-4 backdrop-blur-md sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
                        Construction Ready
                      </p>

                      <p className="mt-2 text-lg font-extrabold text-white sm:text-xl">
                        Hydraulic & Industrial Seal Solutions
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f7b718] text-[#061a38]">
                      <FaGear className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#061a38] shadow-xl">
            <img
              src="/industries/construction.jpg"
              alt="Construction machinery and hydraulic seals"
              className="h-72 w-full object-cover sm:h-96 lg:h-[440px]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061a38] via-[#061a38]/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#061a38]/90 p-5 backdrop-blur-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
                A2Z Seals
              </p>

              <p className="mt-2 text-xl font-extrabold text-white">
                Heavy Equipment Sealing Solutions
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
              Built for Performance
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#061a38] sm:text-4xl">
              Reliable Seals for
              <span className="block text-[#e5a600]">
                Construction Equipment.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Construction equipment works under high pressure, dust,
              vibration, changing weather, and continuous workloads. A2Z Seals
              helps support machine reliability with suitable hydraulic seal
              kits, oil seals, O-rings, floating seals, and rock breaker seal
              kits.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#e5a600]" />

                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MACHINES + PRODUCTS ================= */}
      <section className="bg-[#f2f5f9] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Machinery */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061a38] text-xl text-[#f7b718]">
                  <FaCogs />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#e5a600]">
                    Applications
                  </p>

                  <h2 className="text-2xl font-extrabold text-[#061a38]">
                    Machinery We Support
                  </h2>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {machines.map((machine) => (
                  <div
                    key={machine}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-[#f7b718] hover:bg-[#fff9e8]"
                  >
                    {machine}
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="rounded-2xl bg-[#061a38] p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7b718] text-xl text-[#061a38]">
                  <FaTools />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f7b718]">
                    Product Range
                  </p>

                  <h2 className="text-2xl font-extrabold text-white">
                    Recommended Seal Products
                  </h2>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {products.map((product) => (
                  <div
                    key={product}
                    className="
                      rounded-lg
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:border-[#f7b718]
                      hover:bg-[#f7b718]/20
                      hover:text-white
                    "
                  >
                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#061a38] via-[#0a2b57] to-[#061a38] px-6 py-10 text-center shadow-xl sm:px-10 lg:px-16">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#f7b718]/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
                Need a Seal for Your Machine?
              </p>

              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
                Share Your Construction Equipment Requirement.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
                Tell us your machine model, seal size, part number, or product
                requirement. Our team will help you find a suitable sealing
                solution.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#f7b718] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
              >
                Contact A2Z Seals
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Construction;