import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaTemperatureHigh, FaTachometerAlt, FaDownload } from "react-icons/fa";

const sealSpecifications = [
  { id: "15", maxPressure: "300 Bar", tempRange: "-30°C to 100°C" },
  { id: "454", maxPressure: "350 Bar", tempRange: "-30°C to 100°C" },
  { id: "455", maxPressure: "350 Bar", tempRange: "-30°C to 100°C" },
  { id: "50", maxPressure: "350 Bar", tempRange: "-30°C to 100°C" },
  { id: "51", maxPressure: "700 Bar", tempRange: "-30°C to 100°C" },
  { id: "53", maxPressure: "500 Bar", tempRange: "-30°C to 100°C" },
  { id: "56", maxPressure: "500 Bar", tempRange: "-30°C to 100°C" },
  { id: "58", maxPressure: "700 Bar", tempRange: "-30°C to 100°C" },
  { id: "64", maxPressure: "400 Bar", tempRange: "-30°C to 100°C" },
  { id: "65", maxPressure: "160 Bar", tempRange: "-30°C to 100°C" },
  { id: "68", displayName: "65", maxPressure: "500 Bar", tempRange: "-30°C to 100°C" },
  { id: "714", maxPressure: "500 Bar", tempRange: "-40°C to 110°C" },
  { id: "730", maxPressure: "700 Bar", tempRange: "-40°C to 110°C" },
  { id: "735", maxPressure: "500 Bar", tempRange: "-40°C to 120°C" },
  { id: "754", displayName: "735", maxPressure: "350 Bar", tempRange: "-40°C to 110°C" },
  { id: "755", maxPressure: "350 Bar", tempRange: "-40°C to 110°C" },
  { id: "764", maxPressure: "250 Bar", tempRange: "-30°C to 110°C" },
  { id: "77", maxPressure: "350 Bar", tempRange: "-30°C to 100°C" },
  { id: "770", maxPressure: "N/A", tempRange: "N/A" },
  { id: "775", maxPressure: "350 Bar", tempRange: "-30°C to 110°C" },
  { id: "780", maxPressure: "400 Bar", tempRange: "-30°C to 100°C" },
  { id: "83", maxPressure: "400 Bar", tempRange: "-30°C to 100°C" },
  { id: "ct", displayName: "CT", maxPressure: "600 Bar", tempRange: "-45°C to 200°C" },
  { id: "g54", displayName: "G54", maxPressure: "400 Bar", tempRange: "-45°C to 200°C" },
  { id: "gp2", displayName: "GP2", maxPressure: "600 Bar", tempRange: "-45°C to 200°C" },
  { id: "gps", displayName: "GPS", maxPressure: "500 Bar", tempRange: "-45°C to 200°C" },
  { id: "p54", displayName: "P54", maxPressure: "600 Bar", tempRange: "-45°C to 200°C" },
  { id: "pca", displayName: "PCA", maxPressure: "400 Bar", tempRange: "-45°C to 200°C" },
  { id: "pcg", displayName: "PCG", maxPressure: "200 Bar", tempRange: "-45°C to 200°C" },
  { id: "pds", displayName: "PDS", maxPressure: "350 Bar", tempRange: "-45°C to 200°C" },
];

function DoubleActingPistonSeals() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Double Acting Piston Seals <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Experience unmatched sealing performance with the advanced Double Acting Piston Seals offered exclusively by A2Z SEALS. These seals are engineered to excel in double-acting hydraulic systems, providing a reliable solution to maintain efficient operation and prevent leakage.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* USP */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Unique Selling Points
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Why Choose Our Double Acting Piston Seals
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Advanced Materials</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Crafted from high-quality materials, these seals offer excellent resistance to wear, chemicals, and temperature fluctuations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Optimal Design</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                The seals are precision-designed to ensure a secure fit, maximum sealing efficiency, and reduced friction.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Reliable Performance</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                With a focus on durability and reliability, our seals deliver consistent performance even in demanding environments. Also Explore CFW Oil Seals, NOK Oil Seals, and Crane Seal Kits.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Custom Solutions</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                A2Z SEALS offers a range of sizes and configurations, allowing you to choose the perfect seal for your hydraulic system.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Related Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Also Explore
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/seal-kits-info"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              Seal Kits & Oil Seal
            </Link>
            <Link
              to="/list/cfw-oil-seal"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              CFW Oil Seals
            </Link>
            <Link
              to="/list/nok-oil-seal"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              NOK Oil Seals
            </Link>
          </div>
        </div>

        {/* Catalog Download */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Download A2Z Seal Kits Catalog
          </h2>
          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]">
            <FaDownload />
            Download Catalog
          </button>
        </div>

        {/* Function and Working Principle */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Function and Working Principle
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Double-acting piston Seals play a critical role in hydraulic systems that require bidirectional movement. To prevent hydraulic fluid from bypassing the piston as it moves back and forth, they position it in the piston's groove. Here's how they work:
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">During Forward Stroke</h3>
              <p className="text-sm leading-6 text-slate-600">
                As the hydraulic pressure pushes the piston forward, the seal's inner lip presses against the piston rod, creating a barrier that prevents fluid from leaking past the piston.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">During Reverse Stroke</h3>
              <p className="text-sm leading-6 text-slate-600">
                When the piston retracts, the seal's outer lip comes into contact with the cylinder bore, effectively sealing the fluid in the other direction.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            This bidirectional sealing action ensures that hydraulic fluid remains contained within the cylinder, optimizing the overall efficiency and performance of the system.
          </p>
        </div>

        {/* Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Applications
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              The versatility of Double Acting Piston Seals makes them suitable for a wide range of applications:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Construction Equipment</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Keep bulldozers, excavators, and loaders operating smoothly even in challenging construction environments.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Industrial Machinery</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Enhance the performance of industrial equipment such as presses, machine tools, and material handling systems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Marine Applications</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Ensure reliable hydraulic operation in marine equipment like cranes, winches, and shipyard machinery.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Excellence */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Experience Excellence with A2Z SEALS
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            When you choose A2Z SEALS' Double Acting Piston Seals, you're choosing a solution engineered for excellence. Our commitment to quality, combined with the latest manufacturing techniques, ensures that your hydraulic systems operate at their best.
          </p>
        </div>

        {/* Piston Seals Overview */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Piston Seals Overview
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Piston seals, also known as piston rings are used for fluid sealing in hydraulic cylinders. They are specifically designed to prevent leakage of pressurized fluid across the cylinder head as the system pressure pushes the piston to the cylinder bore.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Technical Specifications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Double Acting Piston Seal Specifications
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#061a38] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-extrabold">Seal ID</th>
                  <th className="px-6 py-4 text-left font-extrabold">
                    <div className="flex items-center gap-2">
                      <FaTachometerAlt />
                      Max Pressure
                    </div>
                  </th>
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
                    <td className="px-6 py-4 text-slate-600">{seal.maxPressure}</td>
                    <td className="px-6 py-4 text-slate-600">{seal.tempRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Double Acting Piston Seal?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your double acting piston seal requirements, machine model or part number. Our team will help you find the correct seal for your equipment.
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

export default DoubleActingPistonSeals;
