import { Link } from "react-router-dom";

function Infrastructure() {
  const sectors = [
    {
      icon: "🏗️",
      title: "Road & Highway Projects",
      description:
        "Sealing support for road construction machines, compactors, pavers, excavators, and hydraulic equipment.",
    },
    {
      icon: "🌉",
      title: "Bridges & Metro Works",
      description:
        "Reliable seals for lifting systems, concrete equipment, hydraulic jacks, and heavy-duty project machinery.",
    },
    {
      icon: "🏢",
      title: "Commercial Construction",
      description:
        "Seal solutions for cranes, material handling units, concrete pumps, and building construction equipment.",
    },
    {
      icon: "⚡",
      title: "Power & Utility Projects",
      description:
        "Suitable sealing products for utility machinery, industrial pumps, hydraulic systems, and maintenance equipment.",
    },
  ];

  const sealProducts = [
    "Hydraulic Cylinder Seals",
    "Piston Seals",
    "Rod Seals",
    "Wiper Seals",
    "Oil Seals",
    "O-Rings",
    "Wear Rings",
    "Seal Kits",
  ];

  const projectBenefits = [
    "Suitable for heavy-duty construction and infrastructure equipment",
    "Helps reduce oil leakage in hydraulic systems",
    "Useful for machine repair and scheduled maintenance",
    "Supports continuous operation of project machinery",
  ];

  const equipmentList = [
    "Excavators",
    "Cranes",
    "Concrete Pumps",
    "Road Rollers",
    "Pavers",
    "Hydraulic Jacks",
    "Loaders",
    "Material Handling Equipment",
  ];

  return (
    <main className="overflow-hidden bg-[#f5f7fa]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#071a33]">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Decorative construction shapes */}
        <div className="absolute -left-20 top-10 h-[330px] w-[330px] rotate-45 border border-[#e5a600]/20" />
        <div className="absolute -right-20 bottom-[-80px] h-[400px] w-[400px] rounded-full bg-[#e5a600]/10 blur-[110px]" />
        <div className="absolute left-[48%] top-0 h-full w-[1px] bg-white/5" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            {/* Left content */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#e5a600]" />
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#e5a600]">
                  Infrastructure Industry
                </p>
              </div>

              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#e5a600]/25 bg-[#e5a600]/10 px-4 py-2">
                <span className="text-lg">🏗️</span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#f7c85a]">
                  Built for Heavy Project Machinery
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-[64px]">
                Reliable Seals For
                <span className="mt-2 block text-[#e5a600]">
                  Infrastructure Projects.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                A2Z Seals provides dependable sealing solutions for
                construction, roadwork, bridge projects, utility projects, and
                large infrastructure machinery operating in demanding
                environments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#e5a600] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-[#f7c85a]"
                >
                  Request Project Support <span>→</span>
                </Link>

                <Link
                  to="/industries"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#e5a600] hover:text-[#e5a600]"
                >
                  View All Industries
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <div className="border-l border-[#e5a600] pl-3">
                  <p className="text-2xl font-black text-white">08+</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Equipment Types
                  </p>
                </div>

                <div className="border-l border-[#e5a600] pl-3">
                  <p className="text-2xl font-black text-white">08+</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Seal Products
                  </p>
                </div>

                <div className="border-l border-[#e5a600] pl-3">
                  <p className="text-2xl font-black text-white">B2B</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Project Support
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0c2a4f] p-4 shadow-2xl sm:p-6">
                <img
                  src="/industries/infrastructure.png"
                  alt="Infrastructure construction machinery"
                  className="h-[280px] w-full rounded-[22px] object-cover sm:h-[390px] lg:h-[490px]"
                />

                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-[#06162b] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#071a33]/90 p-5 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e5a600] text-2xl text-[#061a38]">
                      ⚙
                    </div>

                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
                        Heavy Equipment Support
                      </p>

                      <p className="mt-1 text-lg font-extrabold text-white">
                        Seals for Construction & Project Machinery
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 -top-4 hidden rounded-xl border border-[#e5a600]/30 bg-[#071a33] px-4 py-3 shadow-xl sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Application Area
                </p>

                <p className="mt-1 text-sm font-extrabold text-[#e5a600]">
                  Infrastructure Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EQUIPMENT STRIP ================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#b77900]">
                Supported Equipment
              </p>
              <p className="mt-1 text-xl font-black text-[#061a38]">
                Infrastructure Machinery Applications
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {equipmentList.map((equipment) => (
                <span
                  key={equipment}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-[#e5a600] hover:bg-[#fff4d5]"
                >
                  {equipment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTORS ================= */}
      <section className="bg-[#f2f5f8] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
              Project Applications
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
              Sealing Solutions For
              <span className="block text-[#e5a600]">
                Modern Infrastructure Development.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Infrastructure projects need reliable equipment performance. Our
              seal products can support hydraulic systems and machinery used in
              multiple construction and development environments.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#e5a600]/50 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff4d5] text-2xl">
                    {sector.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#061a38]">
                      {sector.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {sector.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-[2px] w-12 bg-[#e5a600] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS + BENEFITS ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Product list */}
            <div className="rounded-[28px] border border-slate-200 bg-[#fbfcfd] p-7 sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#b77900]">
                Recommended Seal Products
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#061a38] sm:text-4xl">
                Infrastructure Seal Range
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore seal products suitable for hydraulic cylinders,
                construction machinery, lifting systems, and industrial
                maintenance applications.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {sealProducts.map((product, index) => (
                  <div
                    key={product}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-[#061a38] transition hover:border-[#e5a600] hover:bg-[#fff8e5]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#061a38] text-xs text-[#e5a600]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {product}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#061a38] p-7 text-white shadow-xl sm:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e5a600]/15 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
                  Why Choose A2Z Seals
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Built for Tough Project Conditions.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  Infrastructure machinery works under pressure, dust, vibration,
                  and demanding site conditions. The right seal helps improve
                  equipment reliability and maintenance performance.
                </p>

                <div className="mt-7 space-y-5">
                  {projectBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e5a600] text-xs font-black text-[#061a38]">
                        ✓
                      </span>

                      <p className="text-sm leading-7 text-slate-200">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#e5a600] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#061a38]/70">
              Project Machinery Support
            </p>

            <h2 className="mt-2 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl">
              Need Seals for Infrastructure Equipment?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#061a38]/80 sm:text-base">
              Share your machine type, seal size, equipment model, or part
              number. Our team will help you find a suitable sealing solution.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#061a38] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#102d58]"
          >
            Contact A2Z Seals <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Infrastructure;