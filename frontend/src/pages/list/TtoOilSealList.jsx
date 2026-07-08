import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";

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

const featureSections = [
  {
    title: "Exceptional Quality Seals for Optimal Performance",
    text: "A2Z Seals takes pride in offering a wide range of TTO oil seals known for their exceptional quality and reliability. Our dedication to delivering premium products stems from our commitment to providing customers with the best sealing solutions for their machinery. With TTO oil seals, you can ensure optimal performance and an extended lifespan for your equipment, making us a preferred choice among machinery owners worldwide.",
  },
  {
    title: "Unmatched Expertise in Sealing Solutions",
    text: "With years of experience in the industry, A2Z Seals has garnered unmatched expertise in providing sealing solutions for various machinery applications. Our team of skilled professionals understands the unique requirements of different industries and ensures that our TTO oil seal meets or exceeds the highest standards of quality and performance.",
  },
  {
    title: "Wide Range of TTO Oil Seals",
    text: "A2Z Seals offers a diverse selection of TTO oil seals tailored to suit different machinery types and specifications. Whether you need seals for automotive, industrial, or agricultural machinery, we have the right solution for you. Our comprehensive product range ensures that you can find the perfect fit for your specific application, minimizing downtime and maximizing efficiency.",
  },
  {
    title: "Global Presence and Reliable Distribution",
    text: "As a reputable brand, A2Z Seals has established a strong global presence, serving customers across the world. Our reliable distribution network ensures that our TTO oil seals are readily available, regardless of your location.",
  },
  {
    title: "Customer-Centric Approach",
    text: "At A2Z Seals, customer satisfaction is at the core of our business philosophy. We take a customer-centric approach to ensure that your experience with our products and services is nothing short of exceptional, from personalized support to technical guidance.",
  },
];

function TtoOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                TTO Oil Seals <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Sealing, one of the top suppliers of sealing tools and kits,
                offers a wide range of high-quality TTO oil seals for various
                applications, from domestic devices to power plants and
                automotive equipment, compressors, aircraft turbines, industrial
                pumps, and gas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Styles / Sizes */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <p className="text-sm leading-7 text-slate-600">
            The styles, sizes, and components of oil seals vary from one
            another based on applications. For machinery requiring high
            speed, we manufacture the lip with PTFE-based ingredients to
            minimize heat generation and balance high pressure in certain
            equipment.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals imports highly durable and performance-based oil seals
            to Asia, Africa, and the Middle East. Our current range of TTO
            Oil Seals not only seals lubricants but also other fluids such
            as chemicals, foodstuff, and water. It's important to note that
            standard seals can work with little or no pressure, but
            high-pressure equipment requires a different variety of oil
            seals with a stainless steel casing and a pure PTFE lip. Our
            seals are generally manufactured using modern polymeric seal
            materials.
          </p>
        </div>

        {/* Feature sections */}
        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureSections.map(({ title, text }) => (
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

        {/* Conclusion */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">Conclusion</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            When it comes to TTO oil seals, A2Z Seals stands out as a
            reliable and customer-oriented brand. With a focus on delivering
            exceptional quality, unmatched expertise, and a wide product
            range, we are the preferred choice for machinery owners seeking
            top-notch sealing solutions. Choose A2Z Seals for TTO oil seals
            and experience the difference in performance, durability, and
            support.
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">TTO Oil Seals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our TTO oil seals prevent hydraulic oil,
            lubricants, chemicals or water from escaping, and dirt and dust
            from entering a machine.
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
              Why Choose TTO Oil Seal
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
            Cannot Find Your TTO Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>tto-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default TtoOilSealList;
