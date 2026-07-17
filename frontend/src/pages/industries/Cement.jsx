import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaTools,
  FaIndustry,
  FaWrench,
  FaTruckLoading,
  FaOilCan,
} from "react-icons/fa";

function Cement() {
  const machines = [
    "Conveyor Systems",
    "Hydraulic Presses",
    "Mixers",
    "Packing Machines",
    "Material Handling Units",
    "Industrial Pumps",
  ];

  const products = [
    "Oil Seals",
    "Hydraulic Seals",
    "O-Rings",
    "Piston Seals",
    "Rod Seals",
    "Mechanical Seals",
  ];

  const benefits = [
    "Supports continuous cement plant operation",
    "Helps control oil and fluid leakage",
    "Suitable for industrial maintenance requirements",
    "Reliable solutions for hydraulic and rotating equipment",
  ];

  const servicePoints = [
    {
      icon: <FaWrench />,
      title: "Plant Maintenance",
      text: "Seal solutions for scheduled maintenance and replacement needs.",
    },
    {
      icon: <FaTruckLoading />,
      title: "Material Handling",
      text: "Support for conveyors, loading systems, and heavy equipment.",
    },
    {
      icon: <FaOilCan />,
      title: "Hydraulic Systems",
      text: "Reliable products for pressure, oil, and fluid sealing needs.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f7f8fa]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#07172d]">
        {/* Background image */}
        <img
          src="/industries/cement.jpg"
          alt="Cement plant machinery"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38]/95 via-[#061a38]/80 to-[#07172d]/35" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07172d]/80 to-transparent" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1500px] items-center px-5 py-12 sm:min-h-[430px] sm:px-8 sm:py-14 lg:min-h-[460px] lg:px-12 lg:py-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#e5a600]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f5c34f] sm:text-xs">
                Cement Industry
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5a600] text-base text-[#061a38]">
                <FaIndustry />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-200">
                Heavy Plant Sealing Solutions
              </p>
            </div>

            <h1 className="mt-5 text-[30px] font-black leading-[1.08] text-white sm:text-[38px] lg:text-[46px]">
              Seals For
              <span className="mt-1 block text-[#f2b400]">
                Cement Plant Machinery.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              A2Z Seals provides dependable industrial sealing products for
              cement plants, hydraulic systems, conveyors, mixers, pumps,
              packing machines, and material handling equipment.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#e5a600] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-[#f7c84f] sm:text-sm"
              >
                Get a Quote
                <FaArrowRight />
              </Link>

              <Link
                to="/industries"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-[#e5a600] hover:text-[#f2b400] sm:text-sm"
              >
                View Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE STRIP ================= */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-[1500px] gap-4 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          {servicePoints.map((point) => (
            <div
              key={point.title}
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-[#fbfcfd] p-5 transition hover:-translate-y-1 hover:border-[#e5a600]/60 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#061a38] text-lg text-[#e5a600]">
                {point.icon}
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-[#061a38]">
                  {point.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT CEMENT ================= */}
      <section className="bg-[#eaf0f5] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[26px] border-2 border-[#e5a600]/40" />

            <div className="relative overflow-hidden rounded-[22px] bg-[#061a38] shadow-xl">
              <img
                src="/industries/cement.jpg"
                alt="Cement equipment"
                className="h-[290px] w-full object-cover sm:h-[390px] lg:h-[450px]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061a38]/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-5 rounded-lg border border-[#e5a600]/30 bg-[#061a38] px-5 py-4 text-white shadow-xl">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#e5a600]">
                A2Z Seals
              </p>

              <p className="mt-1 text-sm font-extrabold">
                Cement Plant Support
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
              Cement Plant Reliability
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
              Keep Cement Plant Equipment
              <span className="block text-[#e5a600]">
                Running With Confidence.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Cement production depends on reliable equipment performance.
              Hydraulic systems, mixers, conveyors, pumps, and packing machines
              need suitable seals to help reduce fluid leakage and support smooth
              maintenance operations.
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

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#061a38] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0f315d]"
            >
              Talk to Our Team
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EQUIPMENT + PRODUCTS ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
              Cement Plant Solutions
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#061a38] sm:text-4xl">
              Equipment & Recommended Seal Products
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Equipment list */}
            <div className="rounded-[24px] bg-[#061a38] p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5a600] text-xl text-[#061a38]">
                  <FaCogs />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f2b400]">
                    Equipment Support
                  </p>

                  <h3 className="text-2xl font-extrabold text-white">
                    Cement Plant Machinery
                  </h3>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {machines.map((machine, index) => (
                  <div
                    key={machine}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-[#e5a600] hover:bg-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-extrabold text-[#e5a600]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm font-bold text-white">{machine}</p>
                    </div>

                    <FaArrowRight className="text-xs text-[#e5a600]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product cards */}
            <div className="rounded-[24px] border border-slate-200 bg-[#fbfcfd] p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061a38] text-xl text-[#e5a600]">
                  <FaTools />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#b77900]">
                    Product Range
                  </p>

                  <h3 className="text-2xl font-extrabold text-[#061a38]">
                    Recommended Seals
                  </h3>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {products.map((product, index) => (
                  <div
                    key={product}
                    className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-[#e5a600] hover:shadow-md"
                  >
                    <span className="text-xs font-extrabold text-[#e5a600]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 text-sm font-extrabold leading-5 text-[#061a38] group-hover:text-[#b77900]">
                      {product}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-[#b77900] transition hover:text-[#061a38]"
              >
                Ask for Product Details
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#e5a600] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#061a38]/70">
              A2Z Seals for Cement Industry
            </p>

            <h2 className="mt-2 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl">
              Need Seals for Cement Plant Machinery?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#061a38]/80 sm:text-base">
              Send your machine model, seal size, part number, or maintenance
              requirement. Our team will help you find suitable industrial
              sealing products.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#061a38] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0f315d]"
          >
            Contact A2Z Seals
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Cement;