import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

function HydraulicCylinderSealKits() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Seal Kits for Hydraulic Cylinders <span className="text-[#f5b400]">| A2Z Seals</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Comprehensive seal kits designed to seal the gap between different parts of hydraulic cylinders, ensuring optimal performance and longevity.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Introduction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Seal Kits for Hydraulic Cylinders
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Seal Kits for Hydraulic cylinders are used to seal the gap between different parts of the hydraulic cylinder. Within the system, there are 2 main types of hydraulic seals in India:
          </p>
        </div>

        {/* Types of Hydraulic Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Categories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Hydraulic Seals
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Dynamic Seals */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-xl font-extrabold text-[#061a38]">Dynamic Seals</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Designed to seal various parts in relative motion. You can utilize them in high pressure, even when the rod and hydraulic cylinder seals are in reciprocal motion between the head and the connecting rod.
              </p>
            </div>

            {/* Static Seals */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-xl font-extrabold text-[#061a38]">Static Seals</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our static seal kit seals parts that are not in relative motion. The construction and look of the hydraulic cylinder determine the various locations where people use them. The primary area where people use these seals is the connection rod and piston.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Seal Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Components
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Dynamic Seal Components
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              Each of the dynamic seals confines seal kits for hydraulic cylinders, which contains a specific performance that contributes towards the system's performance:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Rod Seal */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Rod Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Acts as a pressure barrier and helps the operational fluid inside of the cylinder to regulate the fluid film extending with the connecting rod's surface. This is essential in inhibiting the corrosion of the rod and the lubrication of the wiper.
              </p>
            </div>

            {/* Piston Seal */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Piston Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Acts as a barrier to the pressure and prevents the fluid from passing the piston. Necessary for maintaining the position when at rest or for the cylinder's dominant motion.
              </p>
            </div>

            {/* Buffer Seal */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Buffer Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Buffer seals help protect the rod sealant against fluid pressure peaks that can lead to fluctuating system pressure.
              </p>
            </div>

            {/* Wiper Seal */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Wiper Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                It is designed to prevent external contaminants from coming inside the assembly of the cylinder.
              </p>
            </div>
          </div>
        </div>

        {/* Rod and Piston Functions */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            (Rod and Piston) Functions
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                Prevents contact of metal-to-metal between parts, leading to keeping the piston and connecting rod accurately centered within the assembly of the cylinder.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                Helps in improving the performance of the piston and rod waterproofing system.
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
              Also See
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/list/nok-oil-seal"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              NOK Oil Seals
            </Link>
            <Link
              to="/list/cfw-oil-seal"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              CFW Oil Seals
            </Link>
          </div>
        </div>

        {/* Cylinder Seal Kit Names */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Names Given to Cylinder Seal or Repair Kits
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Arm, loaders, backhoe, dozers, dumpers, cranes, forklifts, bucket, slew, dipper, boom, main pump, track adjuster, back lift, loader, steering, blade, break, swing, dump, back lift, and so on also refer to cylinder repair kits.
          </p>
        </div>

        {/* OEM */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2ZSeals, we offer a wide range of sealant kits that include various seals used by OEMs like Komatsu, Caterpillar, Hitachi, Terex, Samsung, JCB, L&T, BEML, Poclain, P&H Shovel 1900AL, Demag, RECP Drill, and other branded machines for equipment or machines such as Excavators, Loaders, Dumpers, Dozers, Motor Graders, Cranes, and other machines used in cement industries, mines, steel industries, coal industries, sugar industries, oil industries, and so on. Our standard sealant kits are from the UK, the US, Japan, Germany, Singapore, and other countries.
          </p>
        </div>

        {/* Dealing Pattern */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Dealing Pattern
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We are one of the leading hydraulic cylinder seal kit wholesalers situated in Eastern India. As one of the important importers of NOK and Parker in India through a trusted network of distributors, we supply, export, and distribute the highest quality seal kits.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            For the Indian, Asian, African, and Middle East markets, we are one of the top-notch suppliers in seals of NOK, Parker, Tecnotex, CFW, Technolan, and other such brands of hydraulic and pneumatic cylinder seals. Reliability, quality, durability, and affordability are the pillars of our company.
          </p>
        </div>

        {/* Hydraulic Cylinder Info */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Hydraulic Cylinder
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A hydraulic cylinder or linear hydraulic motor is a mechanical actuator used to give a unidirectional force, via a unidirectional stroke. It notably has applications in engineering vehicles, construction equipment, civil engineering, and manufacturing machinery.
          </p>
        </div>

        {/* Types of Cylinders */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Cylinder Variations
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Cylinders
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Single-Acting",
              "Double-Acting",
              "Differential",
              "Nondifferential",
              "Rod and Piston",
              "Ram-Type",
              "Multi-stage, telescoping",
              "Cushiony",
            ].map((type) => (
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

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need More Information About Hydraulic Cylinder Seal Kits?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Contact us for more information about our hydraulic cylinder seal kits and how we can help you find the right solution for your equipment.
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

export default HydraulicCylinderSealKits;
