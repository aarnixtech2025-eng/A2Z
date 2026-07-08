import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaPhone, FaEnvelope } from "react-icons/fa";

const pneumaticSealsRange = [
  "Static seals",
  "Piston seals",
  "Rod seal",
  "Wear rings",
  "Pneumatic rod seals",
  "Single-Acting Cylinder",
  "Multi-stage, telescoping cylinder",
  "Pneumatic scrapers",
];

function PneumaticCylinder() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              PNEUMATIC CYLINDER <span className="text-[#f5b400]">| Best Seals Trader – A2Z Seals</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Seal and seal kits for pneumatic cylinders. We provide high-quality sealing solutions for various pneumatic applications.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Introduction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Seal and Seal Kits
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Pneumatic cylinder seals are utilized to seal the gap between different parts within the pneumatic cylinder. The 2 main types of pneumatic seals are:
          </p>
        </div>

        {/* Types of Pneumatic Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Categories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Pneumatic Seals
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-xl font-extrabold text-[#061a38]">Dynamic Seals</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                They seal parts in relative motion.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-xl font-extrabold text-[#061a38]">Static Seals</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                They seal parts that are mounted along, but are not in relative motion.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Seal Components */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Seal Components
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Dynamic Seal Components
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              Each of the dynamic seal confine a pneumatic cylinder that affects the performance of the system:
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Piston Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Acts as a pressure barrier.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Buffer Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enhance the performance of the rod seal by protecting it from fluid pressure peaks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Rod Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Keeps the operational inside of the cylinder operational and acts as a pressure barrier.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Wiper Seal</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                It prevents the external contaminants from coming inside of the cylinder assembly.
              </p>
            </div>
          </div>
        </div>

        {/* Functions */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Functions of Pneumatic or Air Cylinders
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Pneumatic cylinders compress gas to generate power, which mechanical devices then use to produce force. Similar to hydraulic cylinders, an external force pushes the piston in the desired direction. This piston, either cylindrical or disc-shaped, transfers the force directly to the object requiring movement. Engineers often favor pneumatics because they are cleaner, quieter, and require less space for fluid storage compared to hydraulic systems.
          </p>
        </div>

        {/* Range of Pneumatic Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Range
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Our Range of Pneumatic Seals
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pneumaticSealsRange.map((seal) => (
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

        {/* Difference Between Hydraulic and Pneumatic */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Difference Between Hydraulic and Pneumatic
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Pneumatic systems provide a clean solution for food production processes where contamination risks must be minimized. This eliminates the need for fluid mechanics, which avoids potential leaks from hydraulic oil due to faulty seals, valves, or burst hoses.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Speedy movement of cylinders is provided by pneumatics as the compressor flow rate is quick and air can flow through pipes without any resistance. On the other hand, hydraulic oil is a viscous substance and requires additional energy to maneuver. Pneumatic does not have the potential force that fluid mechanics require.
          </p>
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
            Need Help Finding the Right Pneumatic Cylinder Seal?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your pneumatic seal requirements, machine model or part number. Our team will help you find the correct seal for your equipment.
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

export default PneumaticCylinder;
