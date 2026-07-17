import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt } from "react-icons/fa";

function SealKitsInfo() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Seal Kits from A2Z Seals: <span className="text-[#f5b400]">Elevating Performance and Efficiency</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Comprehensive seal kits designed to address the intricate sealing requirements of hydraulic components across industries globally.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Understanding A2Z SEALS */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Understanding A2Z SEALS
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z SEALS is a renowned provider of hydraulic and pneumatic sealing solutions, catering to a diverse range of industries, including construction, agriculture, mining, and more. The company's commitment to innovation and quality has positioned them as a reliable partner for businesses seeking robust hydraulic solutions.
          </p>
        </div>

        {/* Importance of Seal Kits */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Importance of Seal Kits
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Seal kits serve as the lifeblood of hydraulic systems, ensuring that critical components function seamlessly by preventing fluid leakage and contamination. A hydraulic system's performance hinges on the effectiveness of its seals, making it an integral part of maintenance and repair processes. A2Z SEALS, recognizing this importance, offers a range of seal kits designed to meet the diverse needs of hydraulic systems across industries.
          </p>
        </div>

        {/* Types of A2Z SEALS Seal Kits */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Categories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of A2Z SEALS Seal Kits
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Cylinder Seal Kits */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#061a38]">1. Cylinder Seal Kits</h3>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Components:</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS cylinder seal kits typically include a variety of seals such as rod seals, piston seals, wiper seals, and O-rings.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Applications:</p>
                <p className="text-sm leading-6 text-slate-600">
                  These kits are tailored for hydraulic cylinders, providing a comprehensive set of seals to ensure optimal performance and longevity.
                </p>
              </div>
            </div>

            {/* Excavator Seal Kits */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#061a38]">2. Excavator Seal Kits</h3>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Components:</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS excavator seal kits are crafted to meet the specific sealing requirements of excavator hydraulic systems, including boom seals, arm seals, and bucket seals.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Applications:</p>
                <p className="text-sm leading-6 text-slate-600">
                  Widely used in the construction and mining industries, these kits contribute to the efficient operation of excavators in challenging environments.
                </p>
              </div>
            </div>

            {/* Loader Seal Kits */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#061a38]">3. Loader Seal Kits</h3>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Components:</p>
                <p className="text-sm leading-6 text-slate-600">
                  Tailored for loaders, A2Z SEALS loader seal kits typically include seals for lift cylinders, tilt cylinders, and various hydraulic components.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Applications:</p>
                <p className="text-sm leading-6 text-slate-600">
                  Used in agricultural and construction machinery, these kits ensure the reliable and leak-free operation of loaders.
                </p>
              </div>
            </div>

            {/* Backhoe Seal Kits */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#061a38]">4. Backhoe Seal Kits</h3>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Components:</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS backhoe seal kits encompass seals for hydraulic cylinders, ensuring efficient and reliable performance.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Applications:</p>
                <p className="text-sm leading-6 text-slate-600">
                  Commonly used in backhoe loaders, these kits contribute to the proper functioning of hydraulic systems in construction and excavation equipment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Industry Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Applications of A2Z SEALS Seal Kits
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">1. Construction Industry</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Usage:</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS seal kits find extensive applications in construction machinery, including excavators, loaders, and backhoes.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  By preventing fluid leakage and contamination, these kits contribute to the longevity and efficiency of hydraulic systems in construction equipment.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">2. Agricultural Sector</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Usage:</p>
                <p className="text-sm leading-6 text-slate-600">
                  In the agricultural sector, A2Z SEALS products play a crucial role in the hydraulic systems of tractors, harvesters, and other farming equipment.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  These kits ensure that agricultural machinery operates smoothly, contributing to increased productivity and reduced downtime.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">3. Mining Operations</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Usage:</p>
                <p className="text-sm leading-6 text-slate-600">
                  They are utilized in hydraulic systems within mining equipment, including excavators and loaders.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  The robust sealing solutions provided by these kits are vital for the harsh and demanding conditions of mining operations, preventing fluid leakage and ensuring the reliability of equipment.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaIndustry className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">4. Material Handling Equipment</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Usage:</p>
                <p className="text-sm leading-6 text-slate-600">
                  In material handling equipment such as forklifts, they contribute to the proper functioning of hydraulic cylinders.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  These kits play a crucial role in maintaining the integrity of hydraulic systems, supporting efficient material handling operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Excellence
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Features of A2Z SEALS Seal Kits
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">1. Precision Engineering</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Significance:</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS seal kits are synonymous with precision engineering, ensuring that each seal meets exacting standards for fit, function, and durability.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  The precision-engineered seals contribute to optimal performance, minimizing friction, wear, and the risk of system failure.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">2. High-Quality Materials</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Significance:</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS prioritizes the use of high-quality materials in the manufacturing of seal kits, including advanced elastomers and polyurethane compounds.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  The choice of materials enhances the wear resistance, resilience, and overall durability of the seals, extending the service life of hydraulic systems.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">3. Customization Options</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Significance:</p>
                <p className="text-sm leading-6 text-slate-600">
                  Recognizing the diverse needs of industries, A2Z SEALS provides customization options for seal kits, allowing clients to tailor kits to specific hydraulic system requirements.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  Customization ensures that the seals are precisely suited to the application, optimizing performance and addressing unique challenges.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">4. Ease of Installation</h3>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Significance:</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS seal kits are designed with ease of installation in mind, facilitating efficient maintenance and repair processes.
                </p>
              </div>
              <div className="mt-3">
                <p className="text-sm font-bold text-[#b57b00] mb-2">Benefits:</p>
                <p className="text-sm leading-6 text-slate-600">
                  Reduced downtime and simplified installation contribute to cost-effectiveness for businesses, ensuring that hydraulic systems are back in operation swiftly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Quality Assurance and Standards
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-[#b57b00] mb-2">1. Stringent Testing Protocols</p>
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold">Approach:</span> A2Z SEALS employs stringent testing protocols to ensure that each seal kit meets or exceeds industry standards.
              </p>
              <p className="text-sm leading-6 text-slate-600 mt-2">
                <span className="font-bold">Benefits:</span> Thorough testing guarantees the reliability and performance of the seals, instilling confidence in end-users and contributing to the overall quality of A2Z SEALS products.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#b57b00] mb-2">2. Compliance with Industry Standards</p>
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold">Approach:</span> A2Z SEALS seal kits adhere to industry standards and specifications, ensuring compatibility with a wide range of hydraulic systems.
              </p>
              <p className="text-sm leading-6 text-slate-600 mt-2">
                <span className="font-bold">Benefits:</span> Compliance with standards underscores the commitment to quality and reliability, providing customers with assurance in the performance of A2Z SEALS products.
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Considerations */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Environmental Considerations
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z SEALS, in alignment with global environmental consciousness, incorporates sustainable practices in its manufacturing processes. The company is committed to minimizing its environmental footprint, from the choice of materials to waste reduction initiatives. Seal kits contribute indirectly to sustainability by extending the lifespan of hydraulic systems, reducing the need for premature replacements and minimizing resource consumption.
          </p>
        </div>

        {/* Seals and Seal Kits for Equipment */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Equipment Coverage
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Seals and Seal Kits For
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">1. Excavators</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Hydraulic Excavator
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Bucket Cylinder
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Arm Cylinders
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Boom Cylinder
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">2. Wheel Loaders</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Wheel Loaders
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Steering Cylinder
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Bucket Cylinders
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Lift Cylinder
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">3. Dozers</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Crawler Dozers
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Blade Cylinder
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Ripper Cylinders
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Track Adjuster
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">4. Backhoe Loaders</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Backhoe Loaders
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Loader Bucket
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Backhoe Booms
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Stabilizer Cylinder
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">5. Cranes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Hydraulic Mobile Cranes
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Telescopic Boom Crane
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Lattice Boom Cranes
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Truck-Mounted Crane
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">6. Transit Mixers</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Transit Mixers
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Hydraulic Pump
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Drum Motors
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Control Valve
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">7. Concrete Pumps</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Concrete Pumps
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  S-Tube Valve
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Plunger Cylinders
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Hydraulic Motor
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-3">8. Motor Graders</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Motor Graders
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Moldboard Cylinder
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Circle Drives
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <FaTools className="text-[#d99600] text-xs" />
                  Blade Lift Cylinder
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Conclusion
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            In the dynamic landscape of hydraulic systems, A2Z SEALS seal kits emerge as a beacon of precision, reliability, and engineering excellence. From construction sites to agricultural fields, these kits play a crucial role in ensuring the seamless operation of hydraulic machinery. With a commitment to quality, customization options, and environmental responsibility, A2Z SEALS continues to be a trusted partner for industries seeking robust sealing solutions. Through their seal kits, A2Z SEALS not only addresses the intricate sealing needs of hydraulic systems but also contributes to the efficiency, longevity, and sustainability of the industries they serve.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Seal Kit?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your seal kit requirements, machine model or part number. Our team will help you find the correct seal kit for your equipment.
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

export default SealKitsInfo;
