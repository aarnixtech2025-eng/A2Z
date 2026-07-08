import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaIndustry,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";
import cfwImage from "../../assets/images/CFW.png";

const cfwOilSealTypes = [
  "CFW Oil Seal",
  "CFW Oil Seal NBR",
  "CFW Oil Seal Viton",
  "CFW Oil Seal Metal Cladded",
  "CFW Oil Seal PTFE",
  "CFW Shaft Seal",
  "CFW HUB Seal",
  "CFW Cassette Seal",
  "CFW Gear Box Seal",
  "CFW Hydraulic Pump Seal",
  "CFW Seal Kit",
  "CFW O-Ring",
];

const constructionPoints = [
  "The inward skeleton consists of a metal ring, which gives it an auxiliary soundness",
  "Nitrile elastic makes up the external skin",
  "The lip of the oil seal has a spring that prevents grease from spilling outside and outside contaminants from entering inside",
];

const skinMaterials = [
  "Silicone",
  "Nitrile Elastic",
  "Poly Acrylate",
  "PolytetraFluroEthylene (PTFE)",
  "Fluoroelastomer (Viton)",
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
  "David Brown / Parker Pump",
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
  "Civil Aviation",
  "Oilfield Machineries",
  "Mechanical Engineering",
  "Off-Highway",
  "Marine",
  "Hydro Power",
  "Forestry",
  "Food & Pharmaceutical",
  "Shipbuilding",
  "Defense Machinery",
  "Construction",
  "Chemical Processing",
  "Agricultural",
  "Aerospace",
];

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

function CfwOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Buy CFW Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Seals, Kolkata, India supplies and distributes CFW Oil Seals,
                SIMRIT, CFW, MERKEL, NOK, and Freudenberg imported seals, known
                worldwide for high performance, durability, and cost-effectiveness.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={cfwImage}
                alt="CFW Premium Brand"
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
        {/* Intro / Shaft seals */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#061a38]">
              Shaft Seals
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Oil seals are an important part of any moving and rotating part
              assembly. They are heavily used in hydraulic cylinders,
              gearboxes, etc.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#061a38]">
              Construction of a CFW Oil Seal
            </h2>
            <ul className="mt-3 space-y-2">
              {constructionPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Materials */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              External Skin Materials
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Materials Used for CFW Oil Seal's External Skin
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skinMaterials.map((material) => (
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

        {/* Deals / About */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">Deals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals is one of the leading oil seal suppliers situated at
            Princep Ghat, Kolkata, India. Thanks to our wide network of
            distributors, we have emerged as the largest importer of oil
            seals in India, as well as an exporter. Manufacturers like NOK
            and CFW are stocked up. We serve the Indian, Middle East, African
            and Asian markets. Our company is well-known for the
            high-quality, trustworthiness, affordability, and durability of
            our products.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals supplies CFW Oil Seals also having high performance,
            durability, cost-effectiveness, and acceptability. A2Z Seals is
            the leading specialist in Hydraulic / Oil Sealing Solutions for
            different OEM model applications. We distribute CFW Oil Seal NBR,
            CFW Oil Seal Viton, CFW Oil Seal Metal Cladded, and CFW Oil Seal
            PTFE to a wide variety of industries.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Industries We Serve
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              CFW Oil Seal Used Across Industries
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

        {/* Used as / in */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-white">
          <h2 className="text-2xl font-extrabold">
            CFW Oil Seal Used As / In
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Oil Seals | Shaft Seals | HUB Seals | Cassette Seals | Gear Box
            Seals | Hydraulic Pump | Seal Kit | and More
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Our best-selling High-Temperature Oil Seals, High-Pressure Oil
            Seals, and our imported high-performance Simrit-CFW Oil Seal. We
            have a stock of high-performance CFW Oil Seal.
          </p>
        </div>

        {/* CFW Oil Seal Types list */}
        <div className="mb-14">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Browse CFW Oil Seal Types
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cfwOilSealTypes.map((seal) => (
              <Link
                key={seal}
                to={`/shop/products?brand=cfw&product=${encodeURIComponent(seal)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{seal}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Materials in seals */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Different Materials Used in CFW Simrit Seals
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><FaCheckCircle className="text-[#d99600]" /> CFW Simrit Oil Seal NBR</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-[#d99600]" /> CFW Simrit Oil Seal Viton</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-[#d99600]" /> CFW Simrit Oil Seal Metal Cladded</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-[#d99600]" /> CFW Simrit Oil Seal PTFE</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We export oil seals worldwide and maintain stock of
              high-temperature shaft seals.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Oil Seal Kits
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We also assemble kits for special applications consisting of
              CFW High-Temperature Oil Seal/Shaft Seal and CFW High-Pressure
              Oil Seal/Shaft Seal. We have CFW Oil Seal/Shaft Seal which
              resist high temperature and high pressure.
            </p>
          </div>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">CFW Oil Seals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our CFW oil seals prevent hydraulic oil,
            lubricants, chemicals or water from escaping, and dirt and dust
            from entering a machine.
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
              Why Choose CFW Oil Seal
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
            Cannot Find Your CFW Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>cfw-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default CfwOilSealList;
