import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import sogImage from "../../assets/images/CFW.png";

const materials = [
  "Silicone",
  "Nitrile elastic",
  "Poly acrylate",
  "PolytetraFluroEthylene (PTFE)",
  "Fluoroelastomer, also known as Viton",
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

function SogSeals() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                SOG Oil Seals <span className="text-[#f5b400]">| A2Z SEALS</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z SEALS, Oil seal supplier NBR, VITON etc oil seal importer. A2Z Oil seals are used to protect shafts and bearings from the ingress of dirt and foreign matter and the egress of oil or grease.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={sogImage}
                alt="SOG Oil Seals"
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
            About SOG Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            SOG Oil Seals generally consists of an outer rubber (NBR / Viton / Silicon) or metal part and an inner flexible member that does the actual sealing and is bonded to the metal part by chemical adhesive agents.
          </p>
        </div>

        {/* How Oil Seals Work */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            How do Oil seals work?
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The common radial oil seals work by creating a thin layer of oil between the rubber sealing lip and the shaft which results in the oil lifting the sealing lip clear of the shaft. This thin layer of oil performs as a barrier and prevents leakage of the oil past the sealing lip.
          </p>
        </div>

        {/* Shaft Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Shaft seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Oil seals are an important part of any moving and rotating part assembly. They are heavily used in hydraulic cylinders, gearboxes, etc.
          </p>
        </div>

        {/* Construction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Construction of an SOG Oil Seals
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                The inward skeleton consists of a metal ring, which gives it an auxiliary soundness
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                Nitrile elastic makes up the external skin
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                The lip of the oil seal has a spring that prevents grease from spilling outside and outside contaminants from entering inside
              </p>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Materials used for oil seal's external skin
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {materials.map((material) => (
              <span
                key={material}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Unveiling SOG Oil Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Unveiling SOG Oil Seals: Unmatched Quality and Reliability
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2Z Seals, we understand the critical role that oil seals play in the efficient operation of machinery. Our SOG Oil Seals stand as a testament to our commitment to quality and reliability. We craft these seals with precision and design them to perfection, engineer them to withstand the most demanding conditions, and ensure optimal performance and longevity.
          </p>
        </div>

        {/* Your Partner */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Your Partner for Seamless Performance
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            When you choose A2Z Seals, you're not just purchasing oil seals – you're partnering with a brand that prioritizes your machinery's seamless performance. Our USP lies in our unwavering dedication to delivering exceptional customer support. We believe in going the extra mile to assist machinery owners in finding the perfect sealing solutions, addressing their concerns, and ensuring their operations run smoothly.
          </p>
        </div>

        {/* Why Choose A2Z */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Why Choose A2Z Seals?
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            There are numerous reasons to make A2Z Seals your preferred choice for SOG Oil Seals:
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Quality Assurance</p>
                <p className="text-sm leading-6 text-slate-600">Our seals undergo rigorous quality checks to meet the highest industry standards, ensuring unmatched reliability.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Expertise</p>
                <p className="text-sm leading-6 text-slate-600">With years of experience, our team possesses the expertise to recommend the right oil seal for your specific machinery requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Custom Solutions</p>
                <p className="text-sm leading-6 text-slate-600">We understand that every machinery setup is unique. That's why we offer tailored sealing solutions to address your individual needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Exceptional Customer Support</p>
                <p className="text-sm leading-6 text-slate-600">Our commitment to our customers goes beyond the sale. Count on us for prompt assistance and support whenever you need it.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Longevity</p>
                <p className="text-sm leading-6 text-slate-600">SOG Oil Seals are designed to ensure prolonged machinery life, reducing downtime and maximizing productivity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SOG Oil Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            SOG Oil Seals Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of ptfe, rubber, viton or Teflon sealing lip, a spiraled tensioning spring, metal case and an internal case. Our SOG Oil Seals oil seals prevent hydraulic oil, lubricants, chemicals or water from escaping, and dirt and dust from entering a machine.
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
                to={`/shop/products?brand=sog&product=${encodeURIComponent(type)}`}
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
              Why Choose SOG Oil Seals
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
            Contact Us Today
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Ready to experience the A2Z Seals difference? Reach out to us today to discover how our SOG Oil Seals can revolutionize your machinery's performance. Join our ever-growing community of satisfied customers who rely on us for top-tier sealing solutions and unparalleled customer support.
          </p>

          <p className="mt-4 text-sm font-extrabold text-[#f5b400]">
            Enhance performance, choose A2Z Seals!
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SogSeals;
