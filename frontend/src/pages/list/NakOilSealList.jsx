import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";
import nakImage from "../../assets/images/11.png";

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

const materials = [
  {
    name: "Carboxilated Nitrile",
    description: "The temperature range for this compound ranges between -54°C and +135°C. These seals are manufactured with low-temperature component with good tolerance level. They also feature good abrasion resistance.",
  },
  {
    name: "Fluorosilicone",
    description: "Fluorosilicone oil seals also come in the same temperature range as Viton ones. But the former combine both high and low temperature tolerance of Silicone and Fluorocarbon's excellent resistance power to oil, fuel and solvents.",
  },
  {
    name: "Viton",
    description: "The temperature of Viton oil seals covers the range from -40°C to +204°C. Viton seals offer excellent resistance to petroleum oils and solvents. Additionally, users can adapt them for use in hard vacuum applications and exposure to harsh chemicals.",
  },
];

const keyFeatures = [
  "High-Performance Seals",
  "Customized Sealing Solutions",
  "Wide Range of Oil Seal Sizes",
  "Comprehensive NAK Seal Catalog",
  "Oil Seal Cross Reference for Easy Replacement",
];

const oilSealTypes = ["Lip Seals", "PTFE Oil Seals", "Viton Oil Seals", "Mechanical Seals"];

const sealApplications = [
  "Automotive Seals",
  "Industrial Oil Seals",
  "Shaft Seals",
  "Rotary Shaft Seals",
];

function NakOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                NAK Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Get reliable sealing solutions for your machinery with NAK oil
                seal. Shop now for standard and custom designs that fit your
                specific needs.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={nakImage}
                alt="NAK Premium Brand"
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
        {/* Intro */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <p className="text-sm leading-7 text-slate-600">
            Oil seal is a kind of device which is used in protecting the
            lubricant inside any mechanical equipment. It is also used for
            precision bearings that can maintain the lubricant in the bearing
            and stop corrosive moisture from getting into the bearing. Also
            called dirt seals, oil gaskets or rubber seals, NAK Seals are
            supplied worldwide by the best of sealing kit companies. A2Z
            Seals is a well-known supplier of oil seals, shaft seals and
            rotary seals that are available in an arena of styles, compounds
            and sizes to meet various usages.
          </p>
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

        {/* Materials */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Materials Used
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              List of Materials Used for Oil Seals
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
            {materials.map(({ name, description }) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d99600]" />
                  <h3 className="font-bold text-[#061a38]">{name}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NAK Oil Seals: Precision and Performance */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            NAK Oil Seals: Precision and Performance
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            A2Z Seals proudly presents NAK Oil Seal, a hallmark of excellence
            in the realm of automotive and industrial sealing solutions. Our
            commitment to quality and precision sets us apart as industry
            leaders in the field of oil seals.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Features
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Features of NAK Seals
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Oil Seal Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Types
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Oil Seal Types
            </h2>
          </div>
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm leading-7 text-slate-600">
            NAK Seals specializes in various oil seal types catering to
            diverse industrial and automotive applications.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {oilSealTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Materials and Applications */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Oil Seal Materials
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We craft our Oil Seals from a variety of high-quality materials,
              ensuring durability and longevity.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Applications
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {sealApplications.map((app) => (
                <span
                  key={app}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Replacement Made Easy */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Oil Seal Replacement Made Easy
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2Z Seals, we understand the importance of seamless
            maintenance. Our NAK Oil Seal Cross Reference simplifies the
            replacement process, ensuring a hassle-free experience for our
            customers.
          </p>
        </div>

        {/* Choose A2Z */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            Choose A2Z Seals for Unmatched Quality
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            When it comes to Oil Seal Manufacturers, A2Z Seals stands out as
            a reliable partner. Our dedication to excellence, coupled with a
            wide range of high-performance seals, makes us the preferred
            choice for industries seeking top-notch sealing solutions.
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">NAK Oil Seal</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our NAK oil seals prevent hydraulic oil,
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
              Why Choose NAK Oil Seal
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
            Cannot Find Your NAK Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>nak-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default NakOilSealList;
