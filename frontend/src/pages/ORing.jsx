import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaBox } from "react-icons/fa";

const oRingApplications = [
  "Seal Kits",
  "Oil Seal Kits",
  "Hydraulic Cylinder Seals & Seal Kit",
  "Oil Seals",
  "Shaft Seals",
  "Hub Seals",
  "Cassette Seals",
  "Gear Box Seals",
  "Pump Seals & Kits",
  "O Rings Box & Kits",
  "Floating Seals",
  "Engine Oil Seals",
  "PTFE Seals",
  "Motor Seals & Kits",
  "HUB Kit",
];

const oRingMaterials = [
  "Nitrile rubber (NBR)",
  "Fluoroelastomer (FKM or Viton)",
  "Silicone rubber (VMQ)",
  "EPDM rubber",
  "Polytetrafluoroethylene (PTFE)",
  "SILICON",
];

const oRingTypes = [
  "Standard O rings",
  "Quad rings",
  "Back-up rings",
  "O ring cord",
  "Custom O rings",
];

const sealKitRoles = [
  { role: "Manufacturers", description: "Companies that produce seal kits and related components." },
  { role: "Assemblers", description: "Entities that assemble seal kits from individual components." },
  { role: "Wholesalers", description: "Distributors that sell seal kits in bulk to retailers and other businesses." },
  { role: "Dealers", description: "Businesses that sell seal kits directly to end-users and provide support and expertise." },
  { role: "Retailers", description: "Stores that offer seal kits to consumers for DIY repairs and maintenance." },
  { role: "Traders", description: "Individuals or businesses involved in buying and selling seal kits as part of their trading activities." },
  { role: "Stockiest", description: "Entities that maintain a stock of seal kits for quick availability." },
];

function ORing() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              O-Ring <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              At A2ZSeals, we carry an impressive selection of o-rings in a variety of materials and sizes. An O-ring is basically a solid-rubber seal, which is shaped like a torus or doughnut.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Introduction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            What is an O-Ring?
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Generally, manufacturers mold an O-ring from an elastomer to create a torus, or doughnut-shaped ring. Manufacturers can also make O-rings from PTFE and other thermoplastic materials, as well as metals, both hollow and solid. However, this handbook exclusively covers elastomeric O-rings.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            People primarily use O-rings for sealing. This section describes the various types of O-ring seals under the "Scope of O-Ring Use." People also use O-rings as light-duty, mechanical drive belts. You can find more information, including design criteria for O-ring drive belts and their application, in O-rings applications.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            An O-ring seal is used to prevent the loss of a fluid or gas. The seal assembly consists of an elastomer O-rings and a gland. An O-rings is a circular cross-section ring molded from rubber. The gland — usually cut into metal or another rigid material — contains and supports the O-rings. The combination of these two elements; O-rings and gland — constitute the classic O-ring seal assembly.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Sometimes it is used as a Gasket.
          </p>
        </div>

        {/* Product Overview */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            O-Ring Overview
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            It is suitable for numerous sealing uses including reciprocal, static, dynamic, and oscillating applications at pressure and low speed. The extrusion resistance of an o-ring is increased with the addition of a backup ring during elevated operating pressure environments.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Viton, NBR, PTFE, and Silicone are some of the most common materials of o-rings. The techniques and sizes of o-rings are rapidly growing. If you require special sizes or quality, contact us without any hesitation. We have stock of NOK, Parker, and various other brands. O Ring Boxes are also available IN TAIWAN MAKE, ITALY, EUROPEAN, AND OTHERS.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Introduction
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            An O ring, also known as a seal ring or toric joint, is a simple yet essential component used in various industries. It plays a critical role in sealing applications, preventing leaks and ensuring the efficient operation of hydraulic systems, machinery, and more. In this guide, we will delve into the world of O rings, exploring their usage, function, strength, materials, types, tensile strength, and unique selling points (USP).
          </p>
        </div>

        {/* Usage of O Rings */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Usage of O Rings
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              O rings are used in a wide range of applications across industries such as automotive, aerospace, manufacturing, and hydraulic systems. Their primary purpose is to create a seal between two or more parts, preventing the escape of fluids or gases.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oRingApplications.map((app) => (
              <div
                key={app}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Function of O Rings */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            The Function of O Rings
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The primary function of an O ring is to create a tight, reliable seal between mating surfaces. When compressed between two parts, the O ring fills the gap and prevents the passage of liquids or gases. This sealing action is crucial to:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">Prevent leaks</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">Reduce friction and wear</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">Isolate contaminants</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">Maintain system integrity</p>
            </div>
          </div>
        </div>

        {/* Strength of O Rings */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Strength of O Rings
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            O rings are designed to withstand various mechanical and environmental stresses. Their strength is essential to ensure the reliability of the seals they create. Factors that contribute to the strength of O rings include:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <FaTools className="text-[#d99600]" />
              <span className="text-sm font-bold text-[#061a38]">Material selection</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <FaTools className="text-[#d99600]" />
              <span className="text-sm font-bold text-[#061a38]">Size and dimensions</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <FaTools className="text-[#d99600]" />
              <span className="text-sm font-bold text-[#061a38]">Compression and temperature tolerance</span>
            </div>
          </div>
        </div>

        {/* Materials Used */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Material Science
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Materials Used in O Rings
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              The choice of materials for O rings depends on the specific application and the operating conditions. Common materials used in O ring manufacturing include:
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oRingMaterials.map((material) => (
              <div
                key={material}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-[#061a38]">{material}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600 text-center">
            Each material has its unique properties, making it suitable for different environments and fluids.
          </p>
        </div>

        {/* Types of O Rings */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Variations
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of O Rings
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              O rings come in various types to accommodate diverse applications. The choice of O ring type depends on factors such as temperature, pressure, and chemical compatibility.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oRingTypes.map((type) => (
              <div
                key={type}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-[#061a38]">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tensile Strength */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Tensile Strength of O Rings
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The tensile strength of an O ring is a critical parameter that measures its ability to withstand stretching or pulling forces. It is crucial to ensure that the O ring remains intact under various conditions. Tensile strength is typically specified in pounds per square inch (psi) or megapascals (MPa) and varies depending on the material and size of the O ring.
          </p>
        </div>

        {/* USP */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Unique Selling Points
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Unique Selling Points (USP) of O Rings
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Cost-effective sealing solutions",
              "Wide range of materials for compatibility",
              "Highly customizable for specific applications",
              "Reliable performance in extreme conditions",
              "Easy installation and maintenance",
              "Reduced risk of leakage and system failures",
            ].map((usp) => (
              <div
                key={usp}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{usp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seal Kit Roles */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Supply Chain
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Seal Kits: Manufacturer, Assembler, Wholesaler, Dealer, Retailer, Trader, Stockiest
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              Seal kits, including oil seal kits and hydraulic cylinder seals & seal kits, are essential components in many industries. They often contain O rings along with other sealing elements necessary for equipment maintenance and repair. Seal kits are offered by a variety of businesses in the supply chain:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {sealKitRoles.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaBox className="text-[#d99600]" />
                  <h3 className="text-lg font-extrabold text-[#061a38]">{item.role}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seal Kit Cost */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Seal Kit Cost and Price
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The cost and price of seal kits, including O ring seal kits, can vary significantly depending on factors such as the type of kit, quality of components, brand reputation, and market demand. It's essential to consider the following factors when determining the cost and price of seal kits:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Kit contents</p>
                <p className="text-sm leading-6 text-slate-600">The components included in the kit, such as O rings, oil seals, and gaskets.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Quality</p>
                <p className="text-sm leading-6 text-slate-600">High-quality kits with durable components may have a higher price.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Brand</p>
                <p className="text-sm leading-6 text-slate-600">Well-known brands often come with a premium price tag.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Market competition</p>
                <p className="text-sm leading-6 text-slate-600">Prices can be influenced by the number of suppliers and their pricing strategies.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Kit type</p>
                <p className="text-sm leading-6 text-slate-600">Specialized kits for specific applications may be priced differently from general-purpose kits.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Conclusion
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            O rings are versatile and indispensable components used in various sealing applications across industries. Their ability to create reliable seals, combined with a wide range of materials and types, makes them a vital part of hydraulic systems, machinery, and equipment. Understanding the usage, function, strength, materials, types, tensile strength, and unique selling points of O rings is crucial for selecting the right sealing solution for any application.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Whether you are a manufacturer, assembler, wholesaler, dealer, retailer, trader, or stockiest of seal kits, including O ring seal kits, it's essential to provide high-quality products that meet the specific needs of your customers. The cost and price of seal kits may vary, but the value they bring in terms of preventing leaks and ensuring efficient operation is invaluable.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right O-Ring?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your o-ring requirements, machine model or part number. Our team will help you find the correct o-ring for your equipment.
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

export default ORing;
