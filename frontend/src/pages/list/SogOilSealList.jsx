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
import sogImage from "../../assets/images/2.png";

const sogOilSealTypes = [
  "SOG Oil Seal",
  "SOG Oil Seal NBR",
  "SOG Oil Seal Viton",
  "SOG Oil Seal Metal Cladded",
  "SOG Oil Seal PTFE",
  "SOG Shaft Seal",
  "SOG HUB Seal",
  "SOG Cassette Seal",
  "SOG Gear Box Seal",
  "SOG Hydraulic Pump Seal",
  "SOG Seal Kit",
  "SOG O-Ring",
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

const whyChooseUs = [
  {
    title: "Quality Assurance",
    text: "Our seals undergo rigorous quality checks to meet the highest industry standards, ensuring unmatched reliability.",
  },
  {
    title: "Expertise",
    text: "With years of experience, our team possesses the expertise to recommend the right oil seal for your specific machinery requirements.",
  },
  {
    title: "Custom Solutions",
    text: "We understand that every machinery setup is unique. That's why we offer tailored sealing solutions to address your individual needs.",
  },
  {
    title: "Exceptional Customer Support",
    text: "Our commitment to our customers goes beyond the sale. Count on us for prompt assistance and support whenever you need it.",
  },
  {
    title: "Longevity",
    text: "SOG Oil Seals are designed to ensure prolonged machinery life, reducing downtime and maximizing productivity.",
  },
];

function SogOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Buy SOG Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Seals is an oil seal supplier and importer of NBR, Viton, and
                other oil seals. Our oil seals protect shafts and bearings from
                the ingress of dirt and foreign matter, and the egress of oil or
                grease. SOG Oil Seals generally consist of an outer rubber (NBR /
                Viton / Silicon) or metal part and an inner flexible member that
                does the actual sealing, bonded to the metal part by chemical
                adhesive agents.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={sogImage}
                alt="SOG Premium Brand"
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
        {/* How do oil seals work */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#061a38]">
              How Do Oil Seals Work?
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The common radial oil seals work by creating a thin layer of
              oil between the rubber sealing lip and the shaft, which results
              in the oil lifting the sealing lip clear of the shaft. This
              thin layer of oil performs as a barrier and prevents leakage of
              the oil past the sealing lip.
            </p>
          </div>

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
        </div>

        {/* Construction */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Construction of an SOG Oil Seal
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

        {/* Materials */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              External Skin Materials
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Materials Used for Oil Seal's External Skin
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

        {/* Unveiling SOG */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Unveiling SOG Oil Seals: Unmatched Quality and Reliability
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2Z Seals, we understand the critical role that oil seals play
            in the efficient operation of machinery. Our SOG Oil Seals stand
            as a testament to our commitment to quality and reliability. We
            craft these seals with precision and design them to perfection,
            engineer them to withstand the most demanding conditions, and
            ensure optimal performance and longevity.
          </p>
        </div>

        {/* Partner */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-white">
          <h2 className="text-2xl font-extrabold">
            Your Partner for Seamless Performance
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            When you choose A2Z Seals, you're not just purchasing oil seals –
            you're partnering with a brand that prioritizes your machinery's
            seamless performance. Our USP lies in our unwavering dedication
            to delivering exceptional customer support. We believe in going
            the extra mile to assist machinery owners in finding the perfect
            sealing solutions, addressing their concerns, and ensuring their
            operations run smoothly.
          </p>
        </div>

        {/* Why choose us */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why A2Z Seals
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Why Choose A2Z Seals?
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ title, text }) => (
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
        </div>

        {/* Contact us today */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Contact Us Today
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Ready to experience the A2Z Seals difference? Reach out to us
            today to discover how our SOG Oil Seals can revolutionize your
            machinery's performance. Join our ever-growing community of
            satisfied customers who rely on us for top-tier sealing solutions
            and unparalleled customer support.
          </p>
          <p className="mt-3 text-sm font-bold text-[#061a38]">
            Enhance performance, choose A2Z Seals!
          </p>
        </div>

        {/* SOG Oil Seal Types list */}
        <div className="mb-14">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Browse SOG Oil Seal Types
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sogOilSealTypes.map((seal) => (
              <Link
                key={seal}
                to={`/shop/products?brand=sog&product=${encodeURIComponent(seal)}`}
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

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">SOG Oil Seals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our SOG oil seals prevent hydraulic oil,
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
              Why Choose SOG Oil Seal
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
            Cannot Find Your SOG Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>sog-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default SogOilSealList;
