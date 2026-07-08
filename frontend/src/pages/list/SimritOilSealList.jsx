import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";
import simritImage from "../../assets/images/6.png";

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

const simritMaterials = [
  "Rubber",
  "PTFE (Polytetrafluoroethylene)",
  "Various Elastomers",
];

const simritSealTypes = [
  "Oil Seals",
  "Hydraulic Cylinder Seals & Seal Kit",
  "Shaft Seals",
  "Hub Seals",
  "Cassette Seals",
  "Gear Box Seals",
  "Pump Seals",
  "O Rings Box",
  "Floating Seals",
  "Engine Oil Seal",
  "PTFE Seals",
  "Motor Seals",
  "HUB Seals",
];

const uspPoints = [
  {
    title: "Quality Seal",
    text: "Simrit is synonymous with high-quality sealing solutions, trusted by industries worldwide.",
  },
  {
    title: "Competitive Seal Cost",
    text: "Simrit offers cost-effective sealing options without compromising on performance.",
  },
  {
    title: "Seal Price Transparency",
    text: "Simrit provides clear and competitive pricing for their seal products.",
  },
  {
    title: "Vast Product Range",
    text: "Simrit offers a comprehensive range of seals to cater to various industries and applications.",
  },
  {
    title: "Reliability and Durability",
    text: "Simrit Seals are known for their longevity and dependable performance.",
  },
  {
    title: "Extensive Distribution Network",
    text: "As a wholesaler, retailer, trader, and stockist, Simrit ensures easy accessibility of their products worldwide.",
  },
];

function SimritOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Simrit Seals <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Simrit Seals are a vital component in various industries,
                ensuring efficient sealing and preventing leaks. These seals find
                applications in hydraulic systems, engines, gearboxes, pumps,
                and more. Their primary purpose is to create a barrier that
                prevents the escape of fluids, such as oil, and maintains the
                integrity of the machinery.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={simritImage}
                alt="Simrit Premium Brand"
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
        {/* Function */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            The Function of Simrit Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The function of Simrit Seal is to provide a secure and reliable
            seal to different types of machinery and equipment. They
            effectively prevent the ingress of contaminants and the egress
            of fluids, ensuring the smooth operation and longevity of the
            equipment. These seals reduce friction, thereby improving
            efficiency and reducing wear and tear.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to="/list/cfw-oil-seal"
              className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-[#061a38] hover:border-[#f5b400]/70"
            >
              CFW Oil Seals
            </Link>
            <Link
              to="/list/nok-oil-seal"
              className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-[#061a38] hover:border-[#f5b400]/70"
            >
              NOK Oil Seals
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-4 py-2 text-xs font-extrabold text-[#061a38] hover:bg-[#ffc928]"
            >
              Crane Seal Kits
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
              High-Quality Materials
            </h2>
          </div>
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm leading-7 text-slate-600">
            Simrit Seals are known for their high-quality materials, which
            contribute to their exceptional performance. They are typically
            made from a range of materials, chosen for their durability,
            resistance to temperature fluctuations, and compatibility with
            different fluids.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {simritMaterials.map((material) => (
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

        {/* Types of Simrit Seals */}
        <div className="mb-14">
          <div className="mb-8 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Simrit Seals
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {simritSealTypes.map((seal) => (
              <Link
                key={seal}
                to={`/shop/products?brand=simrit&product=${encodeURIComponent(seal)}`}
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

        {/* USP */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Unique Selling Points
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Why Simrit Seals Stand Out
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uspPoints.map(({ title, text }) => (
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

        {/* Trust statement */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-300">
            For all your sealing needs, trust Simrit Seals to provide
            top-notch solutions that offer reliability, efficiency, and
            value. Contact us today to learn more about our products and
            pricing.
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">Simrit Seals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our Simrit oil seals prevent hydraulic oil,
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
              Why Choose Simrit Seals
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
            Cannot Find Your Simrit Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>simrit-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default SimritOilSealList;
