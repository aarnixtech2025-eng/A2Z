import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";

const manufacturers = [
  "CFW",
  "SOG",
  "NOK",
  "Parker",
  "Freudenberg",
  "Simrit",
  "Corteco",
  "TTO",
  "TCK",
  "CR",
  "NAK",
  "NDK",
  "Merkel",
  "National",
  "CHR",
];

const oilSealTypesGeneral = [
  "Oil Seal",
  "Single Lip",
  "Double Lip",
  "Shaft",
  "HUB",
  "Cassette",
  "Gear Box",
  "Pump",
  "Engine",
  "Motor",
  "PTFE",
  "Hydraulic Cylinder",
  "O Rings",
];

const applications = [
  "Boom",
  "Dipper",
  "Arm",
  "Slew",
  "Bucket",
  "Main Pump",
  "Track Adjuster",
  "Dump",
  "Back Lift",
  "David Brown / Parker Pump",
  "Blade",
  "Excavator",
  "Lift",
];

const profiles = ["TC", "TB", "DB", "TCN", "SB", "SA", "SC", "TA"];

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

const highlights = [
  "Chemical Resistance",
  "Cost-Effective",
  "Custom Sizing Options",
  "Diverse Material Options",
  "Easy Installation",
  "Global Availability",
  "High-Temperature Resistance",
  "Industry Compliance",
  "Innovative Sealing Solutions",
  "Leak Prevention",
  "Long Service Life",
  "Low Friction Design",
  "OEM Compatibility",
  "Precision Machining",
  "Rapid Delivery",
  "Versatile Applications",
];

const sealMaterials = ["Silicone", "Polyacrylate", "Viton"];

const benefits = [
  "Leak Prevention: Oil seals effectively prevent leakage of oil and other fluids from machinery, ensuring optimal performance and reliability.",
  "Contamination Protection: They safeguard equipment from external contaminants, preventing damage to internal components and maintaining system integrity.",
  "Extended Component Life: By preventing leaks and contamination, oil seals contribute to the prolonged life and functionality of critical components within machinery.",
  "Reduced Friction: Oil seals reduce friction between moving parts, promoting smoother operation and minimizing wear and tear on components.",
  "Temperature Resistance: They exhibit resistance to varying temperatures, ensuring stability and functionality across a range of operating conditions.",
  "Versatility: Oil seals, with tailored adaptability and effectiveness, enhance specific applications by being available in various materials and designs.",
  "Cost-Effective Maintenance: By preventing fluid leaks and minimizing wear, oil seals contribute to cost-effective maintenance by reducing the frequency of repairs and replacements.",
  "Enhanced Performance: Oil seals play a crucial role in maintaining optimal system pressure, contributing to the overall efficiency and performance of machinery.",
  "Environmental Protection: They help prevent oil and fluid leaks, contributing to environmental protection by minimizing the risk of soil and water contamination.",
  "Ease of Installation: Designed for easy installation, oil seals facilitate quick and efficient maintenance in various industrial settings, ensuring seamless operations.",
];

function CrOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                CR Oil Seal <span className="text-[#f5b400]">National | A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Find the perfect CR oil seal National for your machinery at A2Z
                Seals. Get reliable sealing solutions that keep your equipment
                running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Intro */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <p className="text-sm leading-7 text-slate-600">
            A2Z Seals is a leading supplier of CR oil seals which are
            long-lasting, cost-effective and highly performance-oriented.
            For any automotive and thriving industrial business, these oil
            seals are greatly used in hydraulic cylinders, gearboxes, etc.
            A2Z Seals has a vast network of distributors worldwide, through
            which they export a large number of CR Seals to various machinery
            construction companies and agricultural, aerospace and chemical
            processing industries.
          </p>
        </div>

        {/* Constructional Aspects */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Constructional Aspects
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Design Perfection
            </h2>
          </div>
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm leading-7 text-slate-600">
            CR oil seals achieve perfection in design. They comprise a rubber
            outer part, incorporating materials such as silicone,
            polyacrylate, and Viton. The inner skeleton, a metal ring,
            enhances structural stability. A spring on the seal lip prevents
            lubricant leakage and the entry of contaminants.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {sealMaterials.map((material) => (
              <div
                key={material}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">
                  {material}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Catalog CTA */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <p className="text-sm leading-7 text-slate-300">
            Also explore the best quality Seal Kits & Oil Seal, CFW Oil Seals,
            NOK Oil Seals, and Crane Seal Kits.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/list/cfw-oil-seal"
              className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
            >
              CFW Oil Seals
            </Link>
            <Link
              to="/list/nok-oil-seal"
              className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
            >
              NOK Oil Seals
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-4 py-2 text-xs font-extrabold text-[#061a38] hover:bg-[#ffc928]"
            >
              Download A2Z Seal Kits Catalog
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Instrumental Aspects */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Instrumental Aspects
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            CR Seals are specially oriented for acting as a barrier between
            the fluid and the contaminants. They are highly effective sealing
            elements, meant to protect the lubricant from flowing outside
            even under high pressure of the oil.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The top selling CR seals of A2Z seals come in a wide variety of
            models and structures. They are well resistant at high pressure
            and accelerate performance of rotating and automotive machineries.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Benefits of CR Oil Seals
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Advantages
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d99600]" />
                  <h3 className="font-bold text-[#061a38]">
                    {benefit.split(":")[0]}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {benefit.split(":")[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            CR Oil Seal National
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our CR Oil Seal National oil seals prevent
            hydraulic oil, lubricants, chemicals or water from escaping, and
            dirt and dust from entering a machine.
          </p>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers of Oil Seals
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Brands We Stock
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {manufacturers.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase text-[#061a38] shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Imported oil seal type + profiles */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Imported Oil Seal Types
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {oilSealTypesGeneral.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Varied Profiles of Oil Seals
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {profiles.map((profile) => (
                <span
                  key={profile}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Kit Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Oil Seal Kit Applications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaTools className="text-[#d99600]" />
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement oil seal repair kits
            comprising varied types and sizes used by OEMs, such as{" "}
            {oemModels.join(", ")}, etc. We also offer oil seals used in
            industries like cement, mine, steel, coal, and sugar.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose CR Oil Seal
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Highlights
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <FaShieldAlt className="shrink-0 text-[#d99600]" />
                <span className="text-xs font-bold text-[#061a38]">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Cannot Find Your CR Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>cr-a2zseals@a2zseals.com | +91 98310 98320</span>
          </div>

          <Link
            to="/quote"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            Request a Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CrOilSealList;
