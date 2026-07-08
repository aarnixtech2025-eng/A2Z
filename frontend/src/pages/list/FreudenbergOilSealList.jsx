import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
  FaLeaf,
} from "react-icons/fa";
import freudenbergImage from "../../assets/images/5.png";

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
    title: "Wide Range of Oil Seals",
    text: "Explore our extensive range of oil seals designed to cater to various sealing needs. From shaft seals to cassette seals, we have it all. Our oil seals are engineered to withstand demanding conditions and provide optimal lubrication for your machinery components. With Freudenberg oil seals, you can ensure the longevity and efficiency of your equipment.",
  },
  {
    title: "Comprehensive Seal Kit Solutions",
    text: "Our seal kits encompass a wide variety of sealing solutions, including O rings, floating seals, and engine oil seals. Whether you are a manufacturer, assembler, wholesaler, dealer, retailer, trader, or stockist, we have the perfect seal kit solutions consisting of Freudenberg seals and oil seals. Our kits are designed to ensure hassle-free installation and replacement, minimizing downtime and optimizing productivity.",
  },
  {
    title: "Cost-Effective Excellence",
    text: "We believe in providing cost-effective solutions without compromising on quality. Our seal kits and oil seals offer exceptional value for money, ensuring that you get premium sealing solutions at competitive prices. We understand the importance of cost-efficiency in today's market, and our products reflect that commitment.",
  },
  {
    title: "Transparent Seal Kit Costs",
    text: "We take pride in offering transparent pricing. Our seal kit costs are clear and competitive, enabling you to plan your budget effectively. We provide straightforward pricing with no hidden costs or surprises, helping you make informed decisions.",
  },
  {
    title: "Exceptional Customer Support",
    text: "Your satisfaction is our priority. Our dedicated team of experts is available to provide assistance and guidance throughout your seals' selection process. Whether you need help choosing the right seals for your kit or require technical support, we are here for you.",
  },
  {
    title: "Commitment to Sustainability",
    text: "Freudenberg not only dedicates itself to delivering high-quality products but also prioritizes environmental sustainability. We manufacture our seal kits and oil seals using eco-friendly materials and processes, aligning with our commitment to a greener future.",
  },
];

function FreudenbergOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Freudenberg <span className="text-[#f5b400]">Oil Seals | A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Freudenberg is a leading name in the industry, known for
                delivering top-notch seals that excel in quality and
                performance. Freudenberg Oil Seal is meticulously crafted using
                premium materials, ensuring a perfect fit and superior sealing
                capabilities. Whether you require hydraulic cylinder seals, pump
                seals, or gearbox seals, our seal kits guarantee unmatched
                performance and durability.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={freudenbergImage}
                alt="Freudenberg Premium Brand"
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
                <FaLeaf className="text-[#d99600]" />
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
            Also explore the best quality CFW Oil Seals, NOK Oil Seals, and
            Crane Seal Kits.
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
              Request a Quote
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Excellence summary */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm leading-7 text-slate-600">
            Freudenberg Seals and Oil Seals stand as a testament to
            excellence, durability, and cost-effectiveness. With our
            comprehensive range of seal kits, you can find the perfect
            solutions for your sealing needs. Trust Freudenberg for
            top-quality seal kits and oil seals that ensure the smooth and
            efficient operation of your machinery.
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Freudenberg Oil Seal and Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our Freudenberg oil seals prevent hydraulic oil,
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
              Why Choose Freudenberg Oil Seal
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
            Cannot Find Your Freudenberg Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>freudenberg-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default FreudenbergOilSealList;
