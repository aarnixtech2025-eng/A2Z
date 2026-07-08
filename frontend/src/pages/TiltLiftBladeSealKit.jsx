import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaPhone, FaEnvelope, FaDownload } from "react-icons/fa";

const replacementProducts = [
  "Seal Kits",
  "Hydraulic Cylinder Seal Kits",
  "Hydraulic Seals",
  "Piston Seals",
  "Rod seals",
  "Wiper Seals",
  "Wear Rings",
  "Dust Seals",
  "O Rings",
  "Back Up Rings",
  "Arm Seal Kit",
  "Boom Seal Kit",
  "Bucket Seal Kit",
  "Blade Seal Kit",
  "Centre Joint Kit",
  "Control Valve Kit",
  "Dipper Kit",
  "Dump Kit",
  "Hoist Kit",
  "Hydraulic & Pneumatic Seals",
  "Lift Seal Kit",
  "O V Kit",
  "Oil Seals",
  "Piston Seal Kit",
  "Pump Kit",
  "Rings",
  "Rod Seal Kit",
  "Rotary Shaft Seals",
  "Sealing Washers",
  "Shovel Seal Kit",
  "Slew Seal Kit",
  "Stabilizer Seal Kit",
  "Steering 2 Wd & 4 Wd Seal Kit",
  "Steering Seal Kit",
  "Stick Seal Kit",
  "Swing Seal Kit",
  "Seal Kit",
  "Track Adjuster Seal Kit",
  "O ring Kits",
];

const machineryTypes = [
  "Excavators",
  "Backhoe",
  "Loaders",
  "Dumpers",
  "Dozers",
  "Wheel Loaders",
  "Forklifts",
  "Underground truck",
  "Cranes",
];

function TiltLiftBladeSealKit() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              TILT LIFT BLADE Seal Kit <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              A2ZSeals is one of the top-notch seal kit suppliers in India. We specializing in distributing replacement spare parts of TILT LIFT BLADE seal KITS and seals.
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
            A2ZSeals is one of the top-notch seal kit suppliers in India. We specializing in distributing replacement spare parts of TILT LIFT BLADE seal KITS and seals.
          </p>
        </div>

        {/* Replacement Products */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Range
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Replacement Products
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              Find a complete range of replacement products of Seal Kits, Hydraulic Cylinder Seal Kits, Hydraulic Seals, and more.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {replacementProducts.map((product) => (
              <div
                key={product}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{product}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Machinery Types */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Machinery We Support
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We also provide Seal Kits for various heavy earth-moving, mining and construction machinery. We also provide Seal Kits for various Excavators, Backhoe, Loaders, Dumpers, Dozers, Wheel Loaders, Forklifts, underground truck, Cranes etc.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {machineryTypes.map((machine) => (
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
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We offer customized TILT LIFT BLADE seal KITS as per the individualized requirement and preferences of customers. Furthermore, we offer products for mining, heavy earth-moving and construction machinery. TILT seal kits for varied TILT dozers, excavators, loaders, underground trucks, cranes, etc. are offered by us.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]">
            <FaDownload />
            Download Catalog
          </button>
        </div>

        {/* Custom Solutions */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Custom Solutions
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We provide TILT seal kits on a large scale, along with supplying hydraulic cylinder seal kits to designers and manufacturers of designers, and fluid power cylinder manufacturer. We also offer customized seal kit as per customers choice.
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
            Need Help Finding the Right TILT LIFT BLADE Seal Kit?
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

export default TiltLiftBladeSealKit;
