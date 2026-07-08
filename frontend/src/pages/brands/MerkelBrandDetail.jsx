import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaIndustry,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import merkelImage from "../../assets/images/13.png";

const oilSealTypes = [
  "Merkel Oil Seal",
  "Merkel Oil Seal NBR",
  "Merkel Oil Seal Viton",
  "Merkel Oil Seal Metal Cladded",
  "Merkel Oil Seal PTFE",
  "Merkel Shaft Seal",
  "Merkel HUB Seal",
  "Merkel Cassette Seal",
  "Merkel Gear Box Seal",
  "Merkel Hydraulic Pump Seal",
  "Merkel Seal Kit",
  "Merkel O-Ring",
];

const profiles = ["TC", "TB", "DB", "TCN", "SB", "SA", "SC", "TA"];

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
  "Blade",
  "Excavator",
  "Lift",
];

const industries = [
  "Automotive Industry",
  "Mining",
  "Heavy Earth-Moving Machinery",
  "Construction Machineries",
  "Hydraulic Equipment",
  "Oilfield Machineries",
  "Mechanical Engineering",
  "Off-Highway",
  "Marine",
  "Hydro Power",
  "Shipbuilding",
  "Chemical Processing",
  "Agricultural",
];

const highlights = [
  "Chemical Resistance",
  "Cost-Effective",
  "Custom Sizing Options",
  "Diverse Material Options",
  "Easy Installation",
  "Global Availability",
  "High-Temperature Resistance",
  "Industry Compliance",
  "Leak Prevention",
  "Long Service Life",
  "Low Friction Design",
  "OEM Compatibility",
  "Precision Machining",
  "Rapid Delivery",
];

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

function MerkelBrandDetail() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Buy Merkel Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Seals, Kolkata, India supplies and distributes Merkel Oil Seals,
                known worldwide for high performance, durability, and cost-effectiveness.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={merkelImage}
                alt="Merkel Premium Brand"
                className="h-50 w-auto object-contain"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* About */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            About Merkel Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals is one of the leading oil seal suppliers situated at
            Princep Ghat, Kolkata, India. Thanks to our wide network of
            distributors, we have emerged as a leading importer and exporter
            of Merkel oil seals, serving Indian, Middle East, African
            and Asian markets. We are well-known for the high-quality,
            trustworthiness, affordability, and durability of our products.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Industries We Serve
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Merkel Oil Seal Used Across Industries
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaIndustry className="text-[#d99600]" />
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Merkel Oil Seal Types
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {oilSealTypes.map((type) => (
              <Link
                key={type}
                to={`/shop/products?brand=merkel&product=${encodeURIComponent(type)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{type}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Profiles + applications */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
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

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Oil Seal Kit Applications
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {applications.map((app) => (
                <span
                  key={app}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  <FaTools className="text-[#d99600]" />
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement Merkel oil seal
            repair kits comprising varied types and sizes used by OEMs, such
            as {oemModels.join(", ")}, etc. We also offer oil seals used in
            industries like cement, mine, steel, coal, and sugar.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose Merkel Oil Seal
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
            Cannot Find Your Merkel Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

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

export default MerkelBrandDetail;
