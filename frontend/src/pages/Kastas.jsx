import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const kastasSealTypes = [
  "Hydraulic Seals",
  "Pneumatic Seals",
  "Rotary Seals",
  "Static Seals",
  "Oil Seals",
  "Wiper Seals",
  "Guide Rings",
  "O-Rings",
];

const kastasSealVarieties = [
  "Standard Seals",
  "Custom Seals",
  "High-Performance Seals",
  "Special Application Seals",
  "Aftermarket Seals",
];

const kastasProducts = [
  { category: "Hydraulic Piston – Rod Sealing Elements", product: "K21", type: "Rod Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston – Rod Sealing Elements", product: "K36", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston – Rod Sealing Elements", product: "K95", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston – Rod Sealing Elements", product: "K98", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston – Rod Sealing Elements", product: "KX", type: "X'Ring Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K01", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K04", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "FR200", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K22", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "XT200", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K29", type: "Buffer Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K31", type: "Heavy Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K32", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K33", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K34", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K35", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K37", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K38", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K39", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K96", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K701", type: "Spring Seals", application: "Rod Seals" },
  { category: "Hydraulic Rod Sealing Elements", product: "K704", type: "Rod Seals", application: "Rod Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K03", type: "Piston Packing Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K15", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K16", type: "Compact Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K17", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K18", type: "Compact Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K19", type: "Heavy Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K20", type: "Compact Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K23", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K26", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K40", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K41", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K42", type: "Compact Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K43", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K46", type: "COMPACT SET Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K48", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K49", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K501", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K503", type: "Compact Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K504", type: "COMPACT SET Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K518", type: "Compact Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K751", type: "Spring Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K753", type: "Piston Seals", application: "Piston Seals" },
  { category: "Hydraulic Piston Sealing Elements", product: "K755", type: "Piston Seals", application: "Piston Seals" },
  { category: "Wipers", product: "K05", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K06", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K07 (NBR)", type: "Matel Case Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K07 (PU)", type: "Matel Case Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K09", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K10", type: "Double Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K11", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K12", type: "Metal Case Double Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K27", type: "Double Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K93", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K94", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K101", type: "External Seals", application: "Piston Seals" },
  { category: "Wipers", product: "K102", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K103", type: "Double Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K703", type: "Wiper Seals", application: "Rod Seals" },
  { category: "Wipers", product: "K705", type: "Wiper Seals", application: "Rod Seals" },
];

const sealKitApplications = [
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
  "And various other cylinders",
];

const sealAdvantages = [
  "Cost-Effective",
  "Custom Sizing Options",
  "Diverse Material Options",
  "Easy Installation",
  "Global Availability",
  "Long Service Life",
  "OEM Compatibility",
  "Rapid Delivery",
];

const hydraulicSealTypes = [
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

function Kastas() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Kastas <span className="text-[#f5b400]">| Piston Rod Seals, Wipers, Guide Rings, O-rings</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              A2Z SEALS has in stock a wide range of Kastas Piston Rod Seals, piston seals, rod seals, wipers, guide rings, static seals, machined seals, and O-rings.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* KASTAS Sealing Technologies */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            KASTAS Seals by A2Z SEALS AdvanceSealingTechnologies
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We have always aimed high, and as a result, we have aligned all our investments toward achieving these goals in quality, services, and customer orientation. We will persist in our investments with the same team spirit, quality culture, and determination.
          </p>
        </div>

        {/* Types of Kastas Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Categories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Kastas Seals
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              Kastas Seals specializes in providing an extensive range of seals, each designed to meet specific sealing requirements:
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kastasSealTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Varieties of Kastas Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Varieties
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Varieties of Kastas Seals
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              Kastas Piston Rod Seals offers an impressive selection of seal varieties, each meticulously engineered for specific purposes:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kastasSealVarieties.map((variety) => (
              <div
                key={variety}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-extrabold text-[#061a38] mb-3">{variety}</h3>
                <p className="text-sm leading-6 text-slate-600">
                  {variety === "Standard Seals" && "These seals adhere to industry-standard specifications, making them suitable for a wide range of general applications."}
                  {variety === "Custom Seals" && "Kastas understands that unique applications require tailored solutions. Custom seals are designed to fit specific needs."}
                  {variety === "High-Performance Seals" && "Engineered for demanding environments, Kastas high-performance seals excel under extreme conditions, offering extended durability."}
                  {variety === "Special Application Seals" && "Certain industries and applications demand specialized sealing solutions, and Kastas delivers with seals designed for these unique challenges."}
                  {variety === "Aftermarket Seals" && "Kastas aftermarket seals provide a reliable replacement option, maintaining equipment integrity and performance."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Kastas Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Explore Kastas Seals Today
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z SEALS upholds the qualities of seals from various brands such as NOK, Parker, Hallite, KASTAS, etc. These seals are designed and developed globally to meet the demanding needs of high-quality applications and equipment.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            KASTAS Sealing Technologies is a leading manufacturer of hydraulic, and pneumatic sealing elements and custom-made sealing solutions.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We, A2Z SEALS have KASTAS Seals's wide range of piston seals, rod seals, wipers, guide rings, static seals, machined seals and o-rings.
          </p>
        </div>

        {/* Product Table */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Catalog
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              KASTAS Product Catalog
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#061a38] text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-extrabold">Category</th>
                  <th className="px-4 py-4 text-left font-extrabold">Product</th>
                  <th className="px-4 py-4 text-left font-extrabold">Type</th>
                  <th className="px-4 py-4 text-left font-extrabold">Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {kastasProducts.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-bold text-[#061a38]">{item.category}</td>
                    <td className="px-4 py-3 text-slate-600">{item.product}</td>
                    <td className="px-4 py-3 text-slate-600">{item.type}</td>
                    <td className="px-4 py-3 text-slate-600">{item.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hydraulic Seal Overview */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Kastas Hydraulic Seal Overview
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Hydraulic seal are the unsung heroes of fluid power systems and powerful kit. These kits are compact package contain a variety of seals meticulously designed to prevent leakage and ensure smooth operation in hydraulic cylinders and pumps. From O-rings to piston seals, each component plays a crucial role in maintaining system integrity and efficiency. So, the next time you're dealing with hydraulic equipment, remember the importance of a reliable seal kit keeping everything running smoothly.
          </p>
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

        {/* Seal Kit Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Seal Kit Applications
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sealKitApplications.map((app) => (
              <div
                key={app}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <FaTools className="text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* A2Z SEALS Seal's Advantage */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Our Advantages
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              A2Z SEALS Seal's Advantage
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sealAdvantages.map((advantage) => (
              <div
                key={advantage}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Hydraulic Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Profiles
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Hydraulic Seals
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              There are different profiles of "Seals". Some names are listed below:
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hydraulicSealTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <FaShieldAlt className="text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OEM */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement Master Hydraulic Cylinder Repair Rebulit Service Kits comprising of varied types and sized seals used by OEMS, such as Komatsu, Hitachi, Caterpillar, etc. We also offer Hydraulic Cylinder Oil Seal Kit used in industries like, coal, sugar and oil.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Industries Served
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Industries We Serve
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

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Kastas Seal?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your Kastas seal requirements, machine model or part number. Our team will help you find the correct seal for your equipment.
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

export default Kastas;
