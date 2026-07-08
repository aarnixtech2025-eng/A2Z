import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaTemperatureHigh, FaTachometerAlt } from "react-icons/fa";

const sealSpecifications = [
  { id: "15", maxPressure: "300 Bar", tempRange: "-30°C to 100°C" },
  { id: "18", maxPressure: "300 Bar", tempRange: "-30°C to 100°C" },
  { id: "511", maxPressure: "350 Bar", tempRange: "-40°C to 110°C" },
  { id: "512", maxPressure: "350 Bar", tempRange: "-40°C to 110°C" },
  { id: "513", maxPressure: "350 Bar", tempRange: "-40°C to 110°C" },
  { id: "601", maxPressure: "400 Bar", tempRange: "-45°C to 110°C" },
  { id: "605", maxPressure: "400 Bar", tempRange: "-45°C to 110°C" },
  { id: "610", maxPressure: "400 Bar", tempRange: "-45°C to 110°C" },
  { id: "616", maxPressure: "240 Bar", tempRange: "-45°C to 110°C" },
  { id: "617", maxPressure: "250 Bar", tempRange: "-45°C to 110°C" },
  { id: "620", maxPressure: "400 Bar", tempRange: "-45°C to 110°C" },
  { id: "621", maxPressure: "700 Bar", tempRange: "-45°C to 110°C" },
  { id: "622", maxPressure: "400 Bar", tempRange: "-45°C to 110°C" },
  { id: "652", maxPressure: "700 Bar", tempRange: "-45°C to 110°C" },
  { id: "658", maxPressure: "400 Bar", tempRange: "-45°C to 110°C" },
  { id: "663", maxPressure: "400 Bar", tempRange: "-45°C to 110°C" },
  { id: "673", maxPressure: "N/A", tempRange: "-45°C to 110°C" },
  { id: "716spn", displayName: "716 SPN", maxPressure: "250 Bar", tempRange: "-40°C to 100°C" },
  { id: "ol", displayName: "OL", maxPressure: "N/A", tempRange: "N/A" },
  { id: "r16", displayName: "R16", maxPressure: "600 Bar", tempRange: "-45°C to 200°C" },
  { id: "rcg", displayName: "RCG", maxPressure: "200 Bar", tempRange: "-45°C to 200°C" },
  { id: "rda", displayName: "RDA", maxPressure: "600 Bar", tempRange: "-45°C to 200°C" },
  { id: "rds", displayName: "RDS", maxPressure: "350 Bar", tempRange: "-45°C to 200°C" },
];

function RodSeal() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              ROD SEAL <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              A2Z SEALS is proud to present our exceptional Rod Seal, designed to meet the highest industry standards and provide outstanding performance. Our Rod Seals come with unique selling points (USPs) that set them apart from the competition.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* The Function of Rod Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            The Function of Rod Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Rod seal, also known as piston seals, play a crucial role in hydraulic and pneumatic systems. Their primary function is to prevent the leakage of fluid from the hydraulic or pneumatic cylinder while the rod is in motion. These seals create a barrier between the moving rod and the static housing, effectively sealing the system and maintaining pressure. We have and our kits consist of Rod Seals of brands i.e. BULLDOG, NOK, SIMRIT, CFW, PARKER, KASTAS, BUSAK + SHAMBAN, AZS. Also explore the best quality CFW Oil Seals, NOK Oil Seals, and Crane Seal Kits.
          </p>
        </div>

        {/* Key Functions */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Features
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              The Key Functions of A2Z SEALS' Rod Seals
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Leak Prevention</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We expertly engineer our Rod Seals to prevent the escape of hydraulic or pneumatic fluids, ensuring system efficiency and reducing the risk of contamination.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Friction Reduction</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A2Z SEALS designs Rod Seals to minimize friction between the rod and the seal, resulting in smoother operation and an increased equipment lifespan.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">High Durability</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We construct our seals using premium materials, which enhance their resistance to wear and tear, ultimately leading to a longer service life.
              </p>
            </div>
          </div>
        </div>

        {/* Usage of Rod Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Usage of Rod Seals
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              A2Z SEALS' Rod Seal find application in a wide range of industries and hydraulic systems where efficient sealing of the rod in a cylinder is essential.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Industrial Machinery</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Various industrial machines, such as hydraulic presses, injection molding machines, and mining equipment, use rod seals to maintain fluid integrity and ensure reliable operation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Automotive</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our Rod Seals in automotive applications are used in hydraulic and pneumatic cylinders for steering systems, suspension components, and transmission systems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Construction</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Construction equipment like excavators, bulldozers, and cranes rely on rod seals to prevent hydraulic fluid leaks and maintain hydraulic system efficiency.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Aerospace</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                In the aerospace industry, precision and reliability are critical. Rod seals from A2Z SEALS are used in hydraulic systems for landing gear, flight control surfaces, and more.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Marine</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our Rod Seals excel in marine applications, ensuring strong seals for ship steering and cargo handling in challenging saltwater conditions.
              </p>
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
              Materials Used in A2Z SEALS' Rod Seals
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              We understand that ensuring the effectiveness and longevity of our Rod Seals relies heavily on the choice of materials. At A2Z SEALS, we carefully select high-quality materials to meet the demands of various applications for our Rod Seals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">Nitrile Rubber (NBR)</h3>
              <p className="text-sm leading-6 text-slate-600">
                NBR is a versatile material known for its excellent resistance to oil, fuel, and hydraulic fluids. It offers good sealing properties and durability, making it suitable for a wide range of applications.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">Fluoroelastomer (FKM/Viton)</h3>
              <p className="text-sm leading-6 text-slate-600">
                FKM seals excel in extreme conditions, withstanding heat, harsh chemicals, and hydraulic fluids, rendering them perfect for aerospace and automotive sectors.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">Polyurethane (PU)</h3>
              <p className="text-sm leading-6 text-slate-600">
                Their exceptional wear resistance and ability to maintain sealing integrity even under high pressure make PU seals valuable. Heavy-duty hydraulic applications commonly use them.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">PTFE (Teflon)</h3>
              <p className="text-sm leading-6 text-slate-600">
                PTFE seals offer low friction and high-temperature resistance. They are often used in applications where minimal friction and high chemical resistance are required.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              Our dedication to premium materials ensures reliable, efficient Rod Seals, enhancing hydraulic/pneumatic system durability and sealing performance consistently.
            </p>
          </div>
        </div>

        {/* Rod Seal Overview */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Rod Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The rod seal is one of the most important seals on any kind of fluid power equipment. This seal helps in the prevention of fluid leakage from within the cylinder to the outside. Performance of the equipment can be compromised if there is any leakage through the rod seal. Also, in some extreme cases, it can lead to causing environmental problems.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2ZSeals, we offer a vast selection of hydraulic rod seals for both single and double-acting systems. Our products include a unique profiled NBR energized polyurethane (PU) seal and an exclusively designed 3 element seal for the mining industry, which consists of an O-ring energizer, polyacetal anti-extrusion ring and a PU shell.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A lot of emphasis must be paid in pairing the wiper and the rod seal for the best sealing performance. In case an aggressive wiper is paired with a less aggressive rod seal, the wiper will be capable of scraping off the microscopically thin film of oil remaining on the rod in a microscopic surface, eventually resulting in a leakage.
          </p>
        </div>

        {/* Seal Specifications Table */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Technical Specifications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Rod Seal Specifications
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
            Need Help Finding the Right Rod Seal?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your rod seal requirements, machine model or part number. Our team will help you find the correct rod seal for your equipment.
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

export default RodSeal;
