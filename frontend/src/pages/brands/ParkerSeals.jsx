import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaSearch,
} from "react-icons/fa";
import parkerImage from "../../assets/images/4.png";

const pistonSealSeries = [
  "Prädifa series SA, Ultrathan®3",
  "Prädifa series TA, Ultrathan®",
  "Prädifa series DE",
  "Prädifa series EK",
  "Prädifa series C2",
  "Prädifa series E4",
  "Prädifa series M4",
  "Prädifa series MK, Ultrathan®",
  "Prädifa series B7, Ultrathan®",
  "Prädifa series B8, Ultrathan®",
  "Prädifa series Z7",
  "Prädifa series BHO, FlexiSeal®",
  "Prädifa series Z8",
  "Prädifa series KS, Ultrathan®",
];

const profileSheets = [
  "Parker Seals Profile Sheet 1",
  "Parker's Seals Profile Sheet 2",
  "Parker Seals Profile Sheet 3",
  "Prädifa Seals Profile Sheet 4",
  "Parker Seals Profile Sheet 5",
];

const manufacturers = [
  "CFW",
  "SOG",
  "NOK",
  "Parker",
  "freudenberg",
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

const oilSealTypes = [
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
  "Main pump",
  "Track Adjuster",
  "Dump",
  "Back Lift",
  "David Brown / Parker Pump",
  "Blade",
  "Excavator",
  "Lift",
];

const profiles = ["TC", "TB", "DB", "TCN", "SB", "SA", "SC", "TA"];

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

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

function ParkerSeals() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Parker Seals <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A Leading Seal Kits Trader. We have in stock a wide range of Parker Seals including piston seals, rod seals, wipers, guide rings, static seals, machined seals, O-rings and Parker Oil Seal.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={parkerImage}
                alt="Parker Seals"
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
            About Parker Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We have always aimed high and consequently, have set all our investments to achieve these goals on quality, services, and being customer-oriented and continue our investments with the same team spirit, quality culture, and determination. For more than 3 decades we have been importing Parker Seals. In 2014 we incorporated the firm A2Z SEALS to provide high-quality and reliable solutions to many different sectors around the world.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We, A2Z SEALS are maintaining the qualities of seals from the array of brands of NOK, Parker, Hallite, KASTAS, etc. which are designed and developed for the needs of high-quality demanding applications and equipment globally. Parker Hannifin is a leading manufacturer of hydraulic, and pneumatic sealing elements and custom-made sealing solutions.
          </p>
        </div>

        {/* Profile Sheets */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Parker Seals Profile Sheets
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profileSheets.map((sheet) => (
              <span
                key={sheet}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {sheet}
              </span>
            ))}
          </div>
        </div>

        {/* Spring Loaded Rotary Shaft */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Spring Loaded Rotary Shaft
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Parker Spring Loaded Rotary Shaft Heavy-duty spring-loaded rotary shaft oil seals are available in a variety of configurations which include rubber-covered metal or composite rubber/aramid fiber case with or without metal reinforcement for greater bore retention and shock load absorption.
          </p>
        </div>

        {/* Piston Seal Series */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Piston Seal Series
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pistonSealSeries.map((series) => (
              <Link
                key={series}
                to={`/shop/products?brand=parker&product=${encodeURIComponent(series)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{series}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Parker Seals Oil Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Parker Seals Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of ptfe, rubber, viton or Teflon sealing lip, a spiraled tensioning spring, metal case and an internal case. Our Parker Seals oil seals prevent hydraulic oil, lubricants, chemicals or water from escaping, and dirt and dust from entering a machine.
          </p>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Manufacturers of Oil Seals
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {manufacturers.map((manufacturer) => (
              <span
                key={manufacturer}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaIndustry className="text-[#d99600]" />
                {manufacturer}
              </span>
            ))}
          </div>
        </div>

        {/* Oil Seal Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Imported Oil Seal Types
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {oilSealTypes.map((type) => (
              <Link
                key={type}
                to={`/shop/products?brand=parker&product=${encodeURIComponent(type)}`}
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

        {/* Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
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

        {/* Profiles */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement oil seal repair kits comprising of varied types and sized used by OEMs, such as {oemModels.join(", ")}, etc. We also offer oil seals used in industries like, cement, mine, steel, coal, sugar and oil.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose Parker Seals
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
            Cannot Find Your Parker Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your Parker seal size, machine model or part number. Our team
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

export default ParkerSeals;
