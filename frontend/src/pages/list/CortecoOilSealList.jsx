import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";
import cortecoImage from "../../assets/images/7.png";

const manufacturers = [
  "CFW",
  "SOG",
  "NOK",
  "Parker",
  "Freudenberg",
  "Simrit",
  "Corteco",
  "TTO",
  "TCK",
  "CR",
  "NAK",
  "NDK",
  "Merkel",
  "National",
  "CHR",
];

const oilSealTypesGeneral = [
  "Oil Seal",
  "Single Lip",
  "Double Lip",
  "Shaft",
  "HUB",
  "Cassette",
  "Gear Box",
  "Pump",
  "Engine",
  "Motor",
  "PTFE",
  "Hydraulic Cylinder",
  "O Rings",
];

const applications = [
  "Boom",
  "Dipper",
  "Arm",
  "Slew",
  "Bucket",
  "Main Pump",
  "Track Adjuster",
  "Dump",
  "Back Lift",
  "David Brown / Parker Pump",
  "Blade",
  "Excavator",
  "Lift",
];

const profiles = ["TC", "TB", "DB", "TCN", "SB", "SA", "SC", "TA"];

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

const highlights = [
  "Chemical Resistance",
  "Cost-Effective",
  "Custom Sizing Options",
  "Diverse Material Options",
  "Easy Installation",
  "Global Availability",
  "High-Temperature Resistance",
  "Industry Compliance",
  "Innovative Sealing Solutions",
  "Leak Prevention",
  "Long Service Life",
  "Low Friction Design",
  "OEM Compatibility",
  "Precision Machining",
  "Rapid Delivery",
  "Versatile Applications",
];

const uspPoints = [
  {
    title: "Diverse Applications",
    text: "Corteco seals cover a wide spectrum of applications, including shafts, hubs, gearboxes, pumps, engines, and more, making them versatile solutions for various machinery.",
  },
  {
    title: "Premium Materials",
    text: "Crafted from high-quality materials, Corteco seals ensure longevity, durability, and resistance to heat, chemicals, and abrasion.",
  },
  {
    title: "Seamless Sealing",
    text: "Corteco oil seals provide impeccable sealing performance, preventing leakage and ensuring the integrity of your machinery.",
  },
  {
    title: "Expert Engineering",
    text: "Backed by advanced engineering, Corteco seals are precision-engineered to meet industry standards and exceed expectations.",
  },
];

const cortecoSealTypes = [
  "Oil Seals",
  "Shaft Seals",
  "Hub Seals",
  "Cassette Seals",
  "Gear Box Seals",
  "Pump Seals & Kits",
  "Engine Oil Seals",
  "PTFE Seals",
  "Motor Seals & Kits",
];

function CortecoOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Corteco Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Experience the pinnacle of sealing solutions with Corteco Oil
                Seal, exclusively available through A2Z Seals. Renowned for
                their reliability and effectiveness, these seals are engineered
                to deliver exceptional performance, ensuring your machinery
                operates at its best.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={cortecoImage}
                alt="Corteco Premium Brand"
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
        {/* Unveiling */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Unveiling Corteco Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            These seals excel in providing a tight and secure seal,
            preventing leaks and contamination. With their durability and
            longevity, Corteco Oil Seals prove to be a valuable investment
            for your equipment.
          </p>
        </div>

        {/* USP */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              What Sets Corteco Apart
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Unique Selling Points
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Precision engineering and advanced materials.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {uspPoints.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d99600]" />
                  <h3 className="font-bold text-[#061a38]">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications and Versatility */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Applications and Versatility
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            From Oil Seals and Shaft Seals to Hub Seals, Cassette Seals, Gear
            Box Seals, and Pump Seals & Kits, Corteco offers a comprehensive
            range to meet various sealing needs. Whether you require Engine
            Oil Seals, PTFE Seals, or Motor Seals & Kits, Corteco delivers
            the perfect solution.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {cortecoSealTypes.map((type) => (
              <span
                key={type}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Cost-efficient */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Cost-Efficient Performance, Corteco Oil Seal
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Optimal performance doesn't have to come at a high cost.
              Corteco Oil Seal offers cost-effective sealing solutions
              without compromising quality. Get the best of both worlds –
              exceptional performance and competitive pricing.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Maximize Efficiency with Corteco Oil Seal
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Upgrade your machinery's efficiency and longevity with Corteco
              Oil Seals from A2Z Seals. With the right sealing solution for
              every application, you can ensure smooth operation and
              minimize downtime.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300">
            For more details and seal sizes, material type kindly contact us
            at{" "}
            <a href="mailto:a2zseals@gmail.com" className="font-bold text-[#f5b400]">
              a2zseals@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+919831098320" className="font-bold text-[#f5b400]">
              +91 9831098320
            </a>
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Corteco Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our Corteco Oil Seal oil seals prevent hydraulic
            oil, lubricants, chemicals or water from escaping, and dirt and
            dust from entering a machine.
          </p>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers of Oil Seals
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Brands We Stock
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {manufacturers.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase text-[#061a38] shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Imported oil seal type + profiles */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Imported Oil Seal Types
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {oilSealTypesGeneral.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Varied Profiles of Oil Seals
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {profiles.map((profile) => (
                <span
                  key={profile}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Kit Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Oil Seal Kit Applications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaTools className="text-[#d99600]" />
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement oil seal repair kits
            comprising varied types and sizes used by OEMs, such as{" "}
            {oemModels.join(", ")}, etc. We also offer oil seals used in
            industries like cement, mine, steel, coal, and sugar.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose Corteco Oil Seal
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Highlights
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <FaShieldAlt className="shrink-0 text-[#d99600]" />
                <span className="text-xs font-bold text-[#061a38]">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Cannot Find Your Corteco Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>a2zseals@gmail.com | +91 9831098320</span>
          </div>

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

export default CortecoOilSealList;
