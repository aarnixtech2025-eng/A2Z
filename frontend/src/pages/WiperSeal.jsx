import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaTemperatureHigh, FaEnvelope, FaPhone } from "react-icons/fa";

const sealSpecifications = [
  { id: "33", tempRange: "-30°C to 100°C" },
  { id: "37", tempRange: "-30°C to 100°C" },
  { id: "38", tempRange: "-40°C to 120°C" },
  { id: "520", tempRange: "-45°C to 110°C" },
  { id: "521", tempRange: "-40°C to 110°C" },
  { id: "820", tempRange: "-45°C to 110°C" },
  { id: "831", tempRange: "-45°C to 110°C" },
  { id: "834", tempRange: "-45°C to 110°C" },
  { id: "839", tempRange: "-45°C to 110°C" },
  { id: "839n", displayName: "839N", tempRange: "-45°C to 110°C" },
  { id: "842", tempRange: "-45°C to 110°C" },
  { id: "844", tempRange: "-45°C to 110°C" },
  { id: "846", tempRange: "-45°C to 110°C" },
  { id: "847", tempRange: "-40°C to 100°C" },
  { id: "860", tempRange: "-40°C to 100°C" },
  { id: "862", tempRange: "-40°C to 100°C" },
  { id: "864", tempRange: "-45°C to 110°C" },
  { id: "e2w", displayName: "E2W", tempRange: "-45°C to 110°C" },
  { id: "e5w", displayName: "E5W", tempRange: "-45°C to 200°C" },
  { id: "ela", displayName: "ELA", tempRange: "-45°C to 200°C" },
  { id: "exf", displayName: "EXF", tempRange: "-45°C to 200°C" },
  { id: "exg", displayName: "EXG", tempRange: "-45°C to 200°C" },
];

function WiperSeal() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Wiper Seals <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Wiper hydraulic seals, also known as scraper seals, play a crucial role in hydraulic systems by preventing contaminants from entering and damaging sensitive components.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Introduction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Wiper Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We craft wiper's hydraulic seals from high-quality materials like polyurethane, rubber, or fabric-reinforced elastomers. These seals are designed to provide superior protection against contaminants in hydraulic systems.
          </p>
        </div>

        {/* Importance of Wiper Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Importance of Wiper Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Hydraulic systems operate under demanding conditions, often exposed to dirt, dust, moisture, and other external elements. Wiper seals act as the first line of defense against these contaminants. Also by creating a barrier between the external environment and the internal components, these seals help prevent abrasive particles and moisture from infiltrating the system. Also explore the best quality CFW Oil Seals, NOK Oil Seals, and Crane Seal Kits.
          </p>
        </div>

        {/* Function and Design */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Function and Design
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Wipers seal are typically installed in the rod or cylinder head of hydraulic systems. As the rod moves in and out, these seal scrapes off debris and moisture, ensuring that only clean hydraulic fluid enters the system. This not only prevents damage to internal components but also maintains the efficiency of seals and other crucial parts.
          </p>
        </div>

        {/* Materials and Durability */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Materials and Durability
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We craft wiper hydraulic seals from high-quality materials like polyurethane, rubber, or fabric-reinforced elastomers. So, these materials provide excellent resistance to wear, chemicals, and temperature fluctuations, ensuring the durability and reliability of the seals even in challenging environments.
          </p>
        </div>

        {/* Regular Maintenance */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Regular Maintenance and Replacement of Wiper Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Though wiper seals are designed for durability, wear, and tear can still affect them. To ensure optimal performance, it's essential to perform regular maintenance and inspections. If you notice any signs of damage like cracks or deformation in a wiper seal, promptly replace it to prevent contaminants from compromising the hydraulic system.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Benefits of Wiper Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Wiper's hydraulic seals may seem small, but their role in maintaining the cleanliness and efficiency of hydraulic systems is significant. In addition, Seals stop contaminants, boosting hydraulic part life, and reliability. Result: lower upkeep expense, less downtime, enhancing longevity and dependability.
          </p>
        </div>

        {/* Seal Specifications Table */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Technical Specifications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Wiper Seal Specifications
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#061a38] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-extrabold">Seal ID</th>
                  <th className="px-6 py-4 text-left font-extrabold">
                    <div className="flex items-center gap-2">
                      <FaTemperatureHigh />
                      Temperature Range
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {sealSpecifications.map((seal) => (
                  <tr key={seal.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#061a38]">
                      {seal.displayName || seal.id.toUpperCase()}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{seal.tempRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Contact Us for More Information
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Contact us at a2zseals@gmail.com or call +91 98310 98320 for more information about wiper hydraulic seals and hydraulic solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:a2zseals@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaEnvelope className="text-[#d99600]" />
              a2zseals@gmail.com
            </a>
            <a
              href="tel:+919831098320"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaPhone className="text-[#d99600]" />
              +91 98310 98320
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Wiper Seal?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your wiper seal requirements, machine model or part number. Our team will help you find the correct wiper seal for your equipment.
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

export default WiperSeal;
