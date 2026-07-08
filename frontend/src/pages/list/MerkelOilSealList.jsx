import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";
import merkelImage from "../../assets/images/13.png";

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

const packingSeals = [
  "Ramilon",
  "Unival",
  "Carbosteam",
  "G-Spezial",
  "Arolan",
  "Alchem",
  "Arochem",
  "FDA",
];

const wiperTypes = [
  "AS",
  "ASOB",
  "AUAS",
  "AUASOB",
  "P5",
  "PU5",
  "P6",
  "PU6",
  "P8",
  "P9",
  "PT1",
  "PT2",
  "AD48",
  "AD61",
];

const rodSeals = [
  "T20",
  "L20",
  "T23",
  "T22",
  "AUN",
  "NI150",
  "NI250",
  "S8",
  "OMS-MR",
  "Omegat",
  "N05",
  "N21",
  "ES",
];

const pistonSeals = [
  "T18",
  "N100",
  "NA150",
  "NA250",
  "TM21",
  "TFMA",
  "OMK-MR",
  "Simko320",
  "Simko520",
];

const rotatingSeals = [
  "M15",
  "M16",
  "M17",
  "M19",
  "RPORA32",
  "RPORI32",
];

const veePacks = [
  "EK",
  "ES",
  "EKV",
  "ESV",
  "TFW",
  "VPS-0050",
  "VPS-0158",
  "SDS01",
  "KDS01",
];

const staticSeals = [
  "RC",
  "FLAN89",
  "PRR",
  "PRR221",
  "STU",
  "SPR",
  "SRA",
  "SRI",
  "XR",
  "Usit",
  "US",
  "USS",
];

const guideRings = [
  "FRI",
  "FRA",
  "SB",
  "SBK",
  "SF",
  "FRS05",
  "EKF",
  "KBK",
  "KF",
  "KB",
  "GS01",
  "GS05",
  "GS10",
];

const swivelingSeals = [
  "Rotomatic M 15",
  "Rotomatic M 16",
  "Rotomatic M 17",
  "Rotomatic M 19",
];

const radialSeals = [
  "BA",
  "BASL",
  "B1",
  "B2SL",
  "BABSL",
  "MSS1",
  "MSS7",
  "B2PT",
  "R35",
  "R37",
  "WA",
  "WAS",
  "WAO",
];

const guideRingMaterials = ["PTFE", "Polyamide", "Laminated Fabric"];

function MerkelOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Merkel Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Merkel Packings Seals – Ramilon, Unival, Carbosteam, G-Spezial,
                Arolan, Alchem, Arochem, FDA. The Packing seals of Freudenberg
                Sealing Technologies persuade with their durability and high
                efficiency.
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
        {/* Packing Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Packings
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Merkel Packings Seals
            </h2>
          </div>
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm leading-7 text-slate-600">
            The Packing seals of Freudenberg Sealing Technologies persuade with
            their durability and high efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {packingSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Wipers */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Merkel Wipers
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Primary and secondary seals as well as the guides of modern sealing
            systems require reliable protection the use of wipers. Wiper helps
            to stop Dirt, dust and moisture from contaminating the operating
            medium. It is kept above all from the pressure-loaded sealing edges.
            Depending on the application, simple wipers with or without metal
            reinforcement as well as double wipers with or without pressure
            relief come into use.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {wiperTypes.map((type) => (
              <span
                key={type}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Rod Seals */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">Rod Seals</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            The rod seals of Freudenberg Sealing Technologies persuade with their
            durability and high efficiency. They are primarily used in
            pneumatic and hydraulic cylinders. Their task is to seal the
            retracting and extending cylinder rod, thereby preventing the
            pressurised operating medium from escaping from the cylinder while
            protecting the cylinder from impurities. The rod seals are available
            for every type of cylinder and application.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {rodSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Piston Seals */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">Piston Seals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Freudenberg Sealing Technologies' piston seals seal cylinders
            effectively, ensuring efficient movement with minimal friction and
            no drift, meeting diverse requirements with durability and
            functionality.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {pistonSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Rotating Seals */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">Rotating Seals</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            They manufacture roof flange sets with a pressure ring, collars,
            and a support ring for robust applications, ensuring durability.
            These sets suit various piston configurations.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {rotatingSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Vee-Packs */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">Vee-Packs</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Their roof flange sets with a pressure ring, collars, and a support
            ring for robust applications. These sets offer long service lives
            for pressurized pistons.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {veePacks.map((pack) => (
              <span
                key={pack}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {pack}
              </span>
            ))}
          </div>
        </div>

        {/* Static Seals */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">Static Seals</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Static Merkel seal made of a profiled ring with two cutting edge
            shaped sealing edges on the front faces.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {staticSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Guide Rings */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">Guide Rings</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Guide rods and pistons, preventing direct metallic contact with the
            cylinder housing, handling high shearing forces and minimizing
            frictional losses. They are also available as Guide Rings. Depending
            on the load, various materials may be used: PTFE, polyamide and
            laminated fabric. For every type of cylinder and application,
            Freudenberg Sealing Technologies offers the right guide with maximum
            reliability and durability from this portfolio.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {guideRings.map((ring) => (
              <span
                key={ring}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {ring}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {guideRingMaterials.map((material) => (
              <span
                key={material}
                className="rounded-full border border-[#f5b400] bg-[#f5b400]/10 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Swiveling Seals */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            Merkel Swiveling Seals
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {swivelingSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Radial Seals */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Merkel Radial Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Fabric reinforces the static part of Simmering, securely joining it
            to the elastomer sealing lip, which also has preloaded garter
            spring.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {radialSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Merkel Seal Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon sealing
            lip, a spiraled tensioning spring, metal case and an internal case.
            Our Merkel oil seals prevent hydraulic oil, lubricants, chemicals or
            water from escaping, and dirt and dust from entering a machine.
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
            industries like cement, mine, steel, coal, sugar and oil.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose Merkel Seal
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
            Cannot Find Your Merkel Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>merkel-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default MerkelOilSealList;
