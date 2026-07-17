import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaSearch,
} from "react-icons/fa";
import nokImage from "../../assets/images/2.png";

const hydraulicSealTypes = [
  "IDI",
  "ISI",
  "IUH",
  "SPNO",
  "SPN",
  "SPNC",
  "UPI",
  "ODI",
  "USI",
  "UPH",
  "USH",
  "HBY",
  "LBH",
];

const sealVarieties = [
  "Oil Seals",
  "Shaft Seals",
  "Hub Seals",
  "Gear Box Seals",
  "Pump Seals",
  "O Rings",
  "PTFE Seals",
  "Motor Seals",
  "Cassette Seals",
  "Rotary Seals",
  "Rod Seals",
  "Piston Seals",
  "Wiper Seals",
  "Guide Rings and Guide Strips",
  "O-Rings",
  "Buffer Seals",
  "Wear Rings or Bearing Rings",
  "Back-up Rings",
  "Static Seals",
  "Dynamic Seals",
];

const manufacturers = [
  "NOK",
  "HALLITE",
  "Corteco",
  "Simrit",
  "Merkel",
  "Parker",
  "CFW",
  "SAKAGAMI",
  "SKF",
  "freudenberg",
  "SOG",
  "Kastas",
];

const applications = [
  "Arm",
  "Boom",
  "Bucket",
  "Dipper",
  "Slew",
  "Track Adjuster",
  "Main pump",
  "ORing",
  "Stablizer",
  "BackLift",
  "Lift",
  "Steering",
  "DavidBrown / ParkerPump",
  "Blade",
  "Hoist",
  "Out Rigger",
  "Telescopic Cylinder",
  "Break",
  "Blade",
  "Dump",
  "Swing",
];

const advantages = [
  "Cost-Effective",
  "Custom Sizing Options",
  "Diverse Material Options",
  "Easy Installation",
  "Global Availability",
  "Long Service Life",
  "OEM Compatibility",
  "Rapid Delivery",
];

const sealProfiles = [
  "Gland",
  "Rod",
  "Secondary",
  "Rod Wiper and Dust Ring",
  "Dkbi",
  "Wiper",
  "HBY",
  "Secondary Ring",
  "Step",
  "Piston",
  "D",
  "DAS",
  "Metal ring",
  "SPGW",
  "Back Up Ring",
  "BRT",
  "CWR",
  "Double Acting",
  "Floating",
  "Oil",
  "Single Acting",
  "Vee Pack",
  "Wearing and Bearing Strip",
  "Bimetallic bearings",
  "Double Lip",
  "Single Lip",
  "Others",
  "O Rings",
];

const industries = [
  "Mining",
  "Heavy Earth-Moving",
  "Construction",
  "Hydraulic Equipment",
  "Oilfield",
  "Off-Highway",
  "Marine",
  "Industrial",
  "Hydro Power",
  "Forestry",
  "Food",
  "Pharmaceutical",
  "Defense",
  "Chemical Processing",
  "Automotive",
  "Aerospace",
  "Agriculture",
  "aerial work platforms",
  "cranes",
  "general industrial machines",
  "heavy machineries",
  "Hydraulic cylinders",
  "Hydraulic press/ injection",
  "Hydro-pneumatic cylinders",
  "industrial vehicles",
  "machine tools",
  "machines in iron foundries",
  "robots",
];

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

function NokSeals() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                NOK Seals <span className="text-[#f5b400]">| A2Z SEALS</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                NOK | Nok Seal | What are Nok Seals? An oil seal, also known as a shaft seal, is a crucial component that prevents the leakage of fluids such as oil and grease in various mechanical systems. We are proud to offer a wide range of NOK products, known for their exceptional quality and performance.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={nokImage}
                alt="NOK Seals"
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
        {/* Quality */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            The Unique Quality of NOK Oil Seal
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-[#061a38]">Superior Quality:</span> NOK using top-grade materials to ensure durability and longevity.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-[#061a38]">Effective Fluid Containment:</span> NOK Seals are designed to provide excellent sealing, minimizing the risk of fluid leakage.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-[#061a38]">Wide Application Range:</span> NOK are suitable for various applications, including hydraulic cylinders, gearboxes, pumps, and more.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-[#061a38]">High-Temperature Resistance:</span> These can withstand high temperatures and harsh operating conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Function */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            The Function of NOK Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            NOK Oil Seals play a crucial role in preventing the escape of lubricants or fluids in mechanical systems. By maintaining a barrier between moving parts, these enhance the efficiency and performance of the machinery. Hydraulic cylinders, gearboxes, pumps, and other equipment use them to ensure smooth operations and prevent contamination.
          </p>
        </div>

        {/* Usage */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            The Usage of NOK Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            They are suitable for various applications, including hydraulic cylinders, gearboxes, pumps, and more. High-Temperature Resistance: These can withstand high temperatures and harsh operating conditions.
          </p>
        </div>

        {/* Advantage */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            The Advantage of NOK Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            NOK Seal is from Japan. They known for its Performance, durability, cost-effectiveness, and acceptability worldwide. A2Z SEALS, as the leading specialist in Hydraulic / Oil Sealing Solutions proudly offers in-stock NOK Seals.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z SEALS, focuses on Innovation in the field of engineering of Sealing Technologies, In stock, and Customer Focused environment strategy. We offer them that are Cost-effective, Innovative, long-lasting, and used by all Industries: Fluid Power, Automotive Tier, cement, airplane, etc.
          </p>
        </div>

        {/* Hydraulic Seal Types */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Types of Hydraulic Seals
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {hydraulicSealTypes.map((type) => (
              <span
                key={type}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Variety of NOK Seal */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Variety of NOK Seal
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sealVarieties.map((variety) => (
              <Link
                key={variety}
                to={`/shop/products?brand=nok&product=${encodeURIComponent(variety)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{variety}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Manufacturers of Hydraulic Seals
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

        {/* Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Seal Kit Applications
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

        {/* Advantages */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            A2Z SEALS Seal's Advantage
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {advantages.map((advantage) => (
              <span
                key={advantage}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {advantage}
              </span>
            ))}
          </div>
        </div>

        {/* Seal Profiles */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Types of Hydraulic Seals Profiles
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {sealProfiles.map((profile) => (
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
            A2Z Seals offers a full line of replacement Master Hydraulic Cylinder Repair Rebulit Service Kits comprising of varied types and sized seals used by OEMs, such as {oemModels.join(", ")}, etc. We also offer Hydraulic Cylinder Oil Seal Kit used in industries like, coal, sugar and oil.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Industries We Serve
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Industries Using NOK Seals
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

        {/* Why Choose A2Z */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Choose A2Z Seals for Your Seal Needs
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            As a trusted trader with a stock of NOK Seal, we dedicate ourselves to providing our customers with top-notch sealing solutions. Our extensive range of seal caters to various industries and applications, ensuring that you find the perfect seal for your specific requirements.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            When you choose A2Z Seal, you benefit from:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm font-semibold text-[#061a38]">High-Quality Products</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm font-semibold text-[#061a38]">Competitive Seal Costs</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm font-semibold text-[#061a38]">Expertise and Experience</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm font-semibold text-[#061a38]">Wide Distribution Network</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm font-semibold text-[#061a38]">Excellent Customer Service</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Contact Us for Premium NOK SEAL
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Experience the difference in quality sealing solutions with A2Z Seals. Whether you're an assembler, wholesaler, dealer, retailer, trader, or stockiest, we have the right NOK Oil Seal for you.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            Contact Our Experts
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NokSeals;
