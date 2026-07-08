import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";
import parkerImage from "../../assets/images/4.png";

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

const featureSections = [
  {
    title: "Unmatched Sealing Precision for Optimal Functionality",
    text: "At the heart of our commitment to quality is the Parker Oil Seal, a testament to our dedication to delivering seals that set new benchmarks. These not only meet but surpass industry standards, ensuring uninterrupted performance and system reliability.",
  },
  {
    title: "Precision-Engineered Design for Superior Performance",
    text: "The Parker Oil Seals stand out with their precision-engineered design, providing superior performance in diverse industrial applications. From heavy machinery to intricate mechanical systems, they are crafted to perfection for optimal functionality.",
  },
  {
    title: "Dynamic Sealing Solutions for Varied Applications",
    text: "We understand the diverse needs of industrial systems, and these oil seals encompass a wide array of dynamic sealing solutions. From essential components to specialized applications, they cater to the varied needs of different equipment and machinery.",
  },
  {
    title: "Enhanced Efficiency with Specialization",
    text: "Our GPD TTS Series includes specialized variants designed for enhanced efficiency in specific applications, whether it's high-speed machinery or high-pressure systems.",
  },
  {
    title: "Durability Redefined with Robust Construction",
    text: "Leakage and wear are common concerns in industrial settings. We address these issues head-on with the GPD TTS Series Oil Seals, incorporating robust materials and a durable design to withstand the rigors of industrial operations, ensuring a longer service life.",
  },
  {
    title: "Seamless Integration with Precision",
    text: "This is not just a component; it's a seamlessly integrated solution for your machinery. Our precision-engineered seals guarantee a secure fit, preventing leaks and ensuring that your industrial systems operate at peak efficiency.",
  },
  {
    title: "OEM Standard with Parker Oil Seal for Exact Compatibility",
    text: "For those who prioritize OEM specifications, we offer the Parker Oil Seal, crafted to exacting OEM standards. This guarantees precise compatibility with original equipment, preserving the integrity and performance of your machinery.",
  },
  {
    title: "Beyond OEM Standards: Aftermarket Excellence with Parker",
    text: "We offer standard OEM specification / Parker specification with aftermarket excellence. The GPD TTS Series in our aftermarket range meets or exceeds OEM standards, providing a reliable and economical alternative without compromising quality.",
  },
  {
    title: "Efficient Machinery Maintenance",
    text: "The Parker Oil Seal is not just a seal; it's a solution for efficient machinery maintenance. We simplify the maintenance process, allowing users to enhance the performance of their industrial systems with ease.",
  },
  {
    title: "Robust Construction for Reliable Sealing",
    text: "A2Z demonstrates commitment through robustly constructing our seals, ensuring durability in harsh industrial conditions and delivering reliable sealing that endures the test of time.",
  },
  {
    title: "Versatile Applications",
    text: "A2Z grasps the diverse nature of industrial systems. We design the Parker Oil Seal for compatibility with various applications, providing versatile solutions.",
  },
  {
    title: "Precision Fit with Seal Dimensions",
    text: "To ensure a perfect fit, A2Z pays meticulous attention to the dimensions of the GPD TTS Series Oil Seal. Crafted with precision, they guarantee a snug fit, optimizing performance and preventing potential issues.",
  },
  {
    title: "Proactive Maintenance with Seal Kits",
    text: "We encourage a proactive approach to equipment care with seal kits. These kits facilitate regular maintenance, extending the life of industrial systems and preventing unexpected breakdowns.",
  },
  {
    title: "Reliable Sealing for Every Industry",
    text: "A2Z caters to the sealing needs of a diverse range of industries. Parker Seals provide reliable sealing, ensuring the efficient and leak-free operation of equipment across various sectors.",
  },
];

function ParkerOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Parker Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Seals proudly introduces the Parker Oil Seal, a cutting-edge
                solution designed to elevate performance, ensure durability, and
                exceed industry standards. Dive into the world of unparalleled
                sealing with our precision-engineered oil seals.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={parkerImage}
                alt="Parker Premium Brand"
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
        {/* Feature sections */}
        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureSections.map(({ title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#d99600]" />
                <h3 className="font-bold text-[#061a38]">{title}</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        {/* Catalog CTA */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            Also Explore the Best Quality Seal Kits
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Explore our best quality Seal Kits, CFW, NOK, and Crane Kits
            alongside the Parker Oil Seal range.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/list/cfw-oil-seal"
              className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
            >
              CFW Oil Seal
            </Link>
            <Link
              to="/list/nok-oil-seal"
              className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
            >
              NOK Oil Seal
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-4 py-2 text-xs font-extrabold text-[#061a38] hover:bg-[#ffc928]"
            >
              Download A2Z Kits Catalog
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Redefines excellence */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm leading-7 text-slate-600">
            A2Z, with the Parker Oil Seal, redefines sealing excellence,
            crafting efficient, cost-effective solutions for machinery
            sealing and maintenance, meeting diverse industrial demands with
            precision engineering and robust construction.
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Parker Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our Parker oil seals prevent hydraulic oil,
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
              Why Choose Parker Oil Seal
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
            Cannot Find Your Parker Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>parker-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default ParkerOilSealList;
