import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaPhone, FaEnvelope } from "react-icons/fa";

const reciprocatingSeals = [
  "Hydraulic Rod Seals",
  "Hydraulic Piston Seals",
  "Hydraulic Wear Rings",
  "Pneumatic Rod Seals",
  "Hydraulic Scrapers/Hydraulic Wipers",
  "Pneumatic Scrapers/Pneumatic Wipers",
  "Rubber Scrapers/Rubber Seals",
  "Polyurethane Scrapers/Polyurethane Seals",
  "Pneumatic Piston Seals",
  "Spring-energized Seals",
];

const staticSeals = [
  "Airseals",
  "Back-Up Rings/O-Rings",
  "FEP Encapsulated O-ring",
  "Face Seals",
  "Gas Filled O-ring",
  "Airframe Seals",
  "Inflatable Air Seals",
  "Bonded Seals",
  "Metal C-Rings",
  "Gaskets",
  "Metal Seals",
  "Metal O-rings",
  "Rod Seals",
  "Piston Seals",
];

const rotarySeals = [
  "Cassette Seals",
  "V-Rings",
  "Elastomeric Shaft Seals",
  "Radial Lip Seals",
  "Rubber Seals/Rubber Lip Seals",
  "PTFE Rotary Shaft Seals",
  "Spring-energized Seals",
  "Radial Oil Seals",
];

const earthmovingMachines = [
  "Dragger",
  "Rock Breaker",
  "Trucks",
  "Dozers",
  "Drillers",
  "Excavators",
  "Wheel Loaders",
];

const industries = [
  "Cement",
  "Sugar",
  "OEM",
  "Miner",
  "Earthmover",
  "Cylinder Manufacturer",
  "Machine Operator",
];

function TypesOfSealsDifferentUsage() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              TYPES OF SEALS FOR DIFFERENT USAGE <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              At A2ZSeals, we specialize in supplying seal kits in different sizes, types and profile to different industries.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Introduction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Our Specialization
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2ZSeals, we specialize in supplying seal kits in different sizes, types and profile to different industries, such as cement, sugar, OEM, miner, earthmover, cylinder manufacturer, machine operator and so on.
          </p>
        </div>

        {/* Industries We Serve */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Industries
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

        {/* Reciprocating Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Categories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Reciprocating Seals
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reciprocatingSeals.map((seal) => (
              <div
                key={seal}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{seal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Static Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Categories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Static Seals
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staticSeals.map((seal) => (
              <div
                key={seal}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{seal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rotary Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Categories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Rotary Seals
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rotarySeals.map((seal) => (
              <div
                key={seal}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{seal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Earthmoving Machinery */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Earthmoving Machinery
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Currently, we are distributing various types of seal kits for earthmoving machineries. These machines are used for varied application like, mining, loading and unloading at dockyard, road construction, etc. The type of earthmovers include dragger, rock breaker, trucks, dozers, drillers, excavators, wheel loaders, etc. We also provide replacement spare parts of the highest quality.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {earthmovingMachines.map((machine) => (
              <div
                key={machine}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaTools className="text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{machine}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Contact Us for More Information
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            You can contact us at 98310 98320 / a2zseals@gmail.com us for more information.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="tel:+919831098320"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaPhone className="text-[#d99600]" />
              +91 98310 98320
            </a>
            <a
              href="mailto:a2zseals@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaEnvelope className="text-[#d99600]" />
              a2zseals@gmail.com
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Seal Type?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your seal requirements, machine model or part number. Our team will help you find the correct seal type for your application.
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

export default TypesOfSealsDifferentUsage;
