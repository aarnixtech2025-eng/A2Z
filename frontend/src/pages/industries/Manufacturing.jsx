import { Link } from "react-router-dom";

function Manufacturing() {
  const machineTypes = [
    "Hydraulic Presses",
    "Injection Moulding Machines",
    "Packaging Lines",
    "Assembly Machines",
    "Material Handling Units",
    "Industrial Pumps",
  ];

  const sealCategories = [
    {
      number: "01",
      title: "Hydraulic Seals",
      description:
        "Reliable sealing support for hydraulic cylinders, presses, power packs, and industrial automation equipment.",
    },
    {
      number: "02",
      title: "Pneumatic Seals",
      description:
        "Suitable seal options for pneumatic cylinders, air-operated systems, and factory automation machinery.",
    },
    {
      number: "03",
      title: "Rotary & Oil Seals",
      description:
        "Designed for rotating shafts, gearboxes, motors, pumps, and production equipment applications.",
    },
  ];

  const reasons = [
    "Supports regular maintenance and replacement requirements",
    "Suitable for factory machinery and production systems",
    "Helps reduce leakage and unplanned machine downtime",
    "Available for hydraulic, pneumatic, and rotary applications",
  ];

  const productTags = [
    "Piston Seals",
    "Rod Seals",
    "Wiper Seals",
    "Oil Seals",
    "O-Rings",
    "Guide Rings",
    "Wear Rings",
    "Seal Kits",
  ];

  return (
    <main className="overflow-hidden bg-[#f7f8fa]">
      {/* ================= HERO IMAGE SECTION ================= */}
      <section className="relative min-h-[470px] overflow-hidden bg-[#07172d] sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/industries/manufacturing.jpg"
          alt="Manufacturing factory machinery"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38]/95 via-[#061a38]/75 to-[#061a38]/30" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07172d]/70 to-transparent" />

        {/* Technical grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[470px] max-w-[1500px] items-center px-5 py-14 sm:min-h-[500px] sm:px-8 sm:py-16 lg:min-h-[540px] lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#e5a600]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f5c34f] sm:text-xs">
                Manufacturing Industry
              </p>
            </div>

            <h1 className="text-[34px] font-black leading-[1.08] text-white sm:text-[44px] lg:text-[56px]">
              Sealing Solutions For
              <span className="mt-1 block text-[#f2b400]">
                Smarter Manufacturing.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              A2Z Seals supports manufacturing units with dependable sealing
              products for production machines, hydraulic systems, automation
              equipment, pumps, material handling units, and maintenance
              applications.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center rounded-md bg-[#e5a600] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-[#f7c84f] sm:text-sm"
              >
                Request Manufacturing Quote <span className="ml-2">→</span>
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

      {/* ================= MACHINE TYPES STRIP ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
                Manufacturing Applications
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl">
                Equipment We Help Keep Running.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                From production lines to hydraulic machines, the right seal
                supports better equipment performance and helps reduce leakage
                during daily factory operations.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {machineTypes.map((machine, index) => (
                <div
                  key={machine}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fbfcfd] p-4 transition hover:-translate-y-1 hover:border-[#e5a600]/60 hover:shadow-lg"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#061a38] text-xs font-black text-[#e5a600]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm font-extrabold text-[#061a38]">
                    {machine}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEAL CATEGORIES ================= */}
      <section className="bg-[#eaf0f5] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
                Seal Categories
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
                Solutions Designed Around
                <span className="block text-[#e5a600]">
                  Your Machine Requirements.
                </span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center rounded-md border border-[#061a38] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-[#061a38] hover:text-white"
            >
              Talk to Our Team <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {sealCategories.map((category) => (
              <div
                key={category.number}
                className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >
                <div className="absolute right-5 top-2 text-8xl font-black text-slate-100">
                  {category.number}
                </div>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff1c9] text-xl font-black text-[#b77900]">
                    {category.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-[#061a38]">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-6 h-[2px] w-12 bg-[#e5a600] transition-all duration-300 hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPLIT DETAIL SECTION ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] bg-[#061a38] shadow-xl">
              <img
                src="/industries/manufacturing.png"
                alt="Industrial manufacturing equipment"
                className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a38] via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-xl border border-[#e5a600]/30 bg-[#061a38] p-5 text-white shadow-xl sm:-right-5 sm:p-6">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#e5a600]">
                Reliable Supply
              </p>
              <p className="mt-2 text-lg font-black">
                For Factory Maintenance Needs
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b77900]">
              Maintenance Ready
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl lg:text-5xl">
              Better Sealing Support For
              <span className="block text-[#e5a600]">
                Everyday Factory Operations.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Manufacturing equipment often works continuously under pressure,
              friction, vibration, and heat. Choosing suitable seals helps
              improve machine reliability and supports scheduled maintenance
              work.
            </p>

            <div className="mt-7 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e5a600] text-xs font-black text-[#061a38]">
                    ✓
                  </span>

                  <p className="text-sm font-semibold leading-7 text-slate-700">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-[#061a38] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0f315d]"
            >
              Get Seal Recommendation <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DARK PRODUCT SECTION ================= */}
      <section className="relative overflow-hidden bg-[#07172d] py-14 sm:py-16 lg:py-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#e5a600]/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-[100px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e5a600]">
                Recommended Products
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Manufacturing Seal
                <span className="block text-[#e5a600]">Product Range.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                Explore seal products commonly required for factory machinery,
                hydraulic applications, rotating equipment, and regular
                maintenance work.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {productTags.map((product, index) => (
                <div
                  key={product}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-[#e5a600] hover:bg-[#e5a600]/10"
                >
                  <p className="text-[10px] font-extrabold tracking-[0.14em] text-[#e5a600]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-3 text-sm font-extrabold text-white">
                    {product}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#e5a600] py-14 sm:py-16">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#061a38]/70">
              Manufacturing Support
            </p>

            <h2 className="mt-2 text-3xl font-black leading-tight text-[#061a38] sm:text-4xl">
              Need Seals for Your Manufacturing Machine?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#061a38]/80 sm:text-base">
              Share your machine type, seal size, part number, or maintenance
              requirement. Our team will help you find a suitable seal product.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center rounded-md bg-[#061a38] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0f315d]"
          >
            Contact A2Z Seals <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Manufacturing;