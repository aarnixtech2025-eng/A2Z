import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import oilSealImage from "../../assets/logo_a2z_seals.png";

const products = [
  {
    name: "O Rings Box & Kits",
    description: "Comprehensive Sealing Solutions - Discover our comprehensive collection of O rings and kits designed to meet your sealing needs. Our O rings are available in various materials and sizes, ensuring compatibility with different industries and applications.",
  },
  {
    name: "Engine Oil Seal",
    description: "Reliable and Effective - Engine oil seals perform a crucial role in preventing leakage and maintaining engine efficiency. We engineer our engine oil seals to withstand various conditions and provide reliable performance as shaft oil seals.",
  },
  {
    name: "PTFE Seals",
    description: "Exceptional Performance - PTFE seals exhibit outstanding chemical resistance and temperature tolerance. We design our PTFE seals to deliver exceptional performance in demanding environments, guaranteeing a reliable shaft oil seal, even in extreme conditions.",
  },
  {
    name: "Motor Seals & Kits",
    description: "Keeping Motors Protected - Protect your motors with our high-quality motor seals and kits. Our seals are engineered to prevent contaminants from entering the motor and causing damage. Our kits provide comprehensive solutions for motor maintenance and repair.",
  },
  {
    name: "HUB Kit",
    description: "The Ultimate Hub Sealing Solution - Introducing our HUB kit, a complete solution for hub sealing needs. Designed for durability and performance, our HUB kits ensure effective shaft oil seal and protection for various hub applications.",
  },
  {
    name: "Hydraulic Cylinder Seals & Seal Kit",
    description: "Ensuring Hydraulic Efficiency - Our hydraulic cylinder seals and seal kits are engineered to maintain hydraulic efficiency by preventing leaks and maintaining proper pressure. Trust in our quality seal solutions for your hydraulic systems.",
  },
  {
    name: "Floating Seals",
    description: "Enhancing Equipment Longevity - Floating seals are essential for heavy machinery where effective sealing is critical. Our floating seals are designed to endure extreme conditions, extend equipment longevity, and reduce maintenance costs.",
  },
];

const industries = [
  "Gearboxes",
  "Pumps",
  "Mining machinery",
  "Construction equipment",
  "Industrial machinery",
  "Pulp and paper",
  "Primary metals",
  "Power generation",
  "Chemical",
  "Petrochemical",
];

function OilSealShaftSeal2() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                OIL SEAL/SHAFT SEAL 2 <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Your Oil Seals Solution. At A2Z Seals, we take pride in offering a diverse range of high-quality sealing solutions for a wide array of applications. Our shaft oil seal kits are designed to ensure optimum performance and durability.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={oilSealImage}
                alt="Oil Seal/Shaft Seal 2"
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
        {/* Products */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Our Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Comprehensive Sealing Solutions
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061a38] text-xl text-[#f5b400]">
                  <FaCogs />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#061a38]">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Seal Kits */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Quality Seal Kits for Every Need
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We, as a leading manufacturer, assembler, wholesaler, dealer, retailer, trader, and stockist of seal kits, commit to offering reliable sealing solutions that adhere to the highest industry standards. We design our seal kits to deliver exceptional performance, ensuring smooth operations and minimizing downtime.
          </p>
        </div>

        {/* S-Leeve */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            S-Leeve
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            There are instances when during crankshaft seal replacement, technicians find severe shaft wear indicating that oil leaks are inevitable even after the installation of the replaced seal.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The remedy for this in older days was either to:
          </p>
          <div className="mt-3 flex gap-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">Re-machine its surface, or</p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">Replace the crankshaft</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The above-mentioned choices were both expensive. However, today, a better alternative exists in the form of S-leeve. These thin-walled stainless steel shaft repair sleeves can immediately come to the rescue when the crankshaft needs a new sealing surface. They are priced economically and can be easily and quickly slipped over the worn area. It offers a surface that is harder as compared to the new shaft. The same-sized seal fits comfortably onto the new shaft. Each of our S-leeve comes as a kit, which provides you with a disposable installation tool.
          </p>
        </div>

        {/* JM Clipper Oil Seal */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            JM Clipper Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2ZSeals' range of clipper oil seals is available in split and solid styles and in both high-performance and standard elastomer compounds.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Our clipper oil seals find application in a wide range of equipment, including gearboxes, pumps, mining machinery, and construction equipment, as well as industrial machinery. It offers particular utility with shafts and high bore eccentricity, especially on large diameters. Various industrial plants, such as those in the pulp and paper, primary metals, power generation, chemical, and petrochemical sectors, utilize our efficient seals.
          </p>
        </div>

        {/* Industries */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Industries We Serve
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Experience A2Z */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Experience the A2Z Seals Difference
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            When it comes to seal kits, oil seals, O rings, and more, A2Z Seals stands as a trusted name in the industry. Our commitment to quality, durability, and customer satisfaction makes us the preferred choice for a wide range of industries. Contact us today to discover the right sealing solutions for your specific needs.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Oil Seal/Shaft Seal Solutions?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Contact A2Z Seals today to discover the right sealing solutions for your specific needs. We offer quality seal kits for every requirement.
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

export default OilSealShaftSeal2;
