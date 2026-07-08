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

const materialsInfo = [
  {
    name: "Leather",
    description: "Traditionally used as the lip material for oil seals.",
  },
  {
    name: "Synthetic Rubbers",
    description: "Mass production has increased the use of synthetic rubbers over time.",
  },
  {
    name: "Nitrile (NBR)",
    description: "Still dominates the market as the primary lip material.",
  },
  {
    name: "Viton",
    description: "Often replaces Silicone (VMQ) and Polyacrilate (ACM) in high-temperature applications.",
  },
];

const features = [
  "NDK Seal Catalog",
  "NDK Oil Seal Cross Reference",
  "Wide Range of NDK Oil Seal Sizes",
  "Accessible Part Numbers",
  "Resilient Materials",
];

function NdkOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                NDK Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Seals offers a wide range of NDK oil seal for industrial
                applications. Shop now for standard and custom designs that fit
                your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Intro */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <p className="text-sm leading-7 text-slate-600">
            Oil seals among top manufacturers produce effective oil seals. A2Z
            Seals globally supplies these quality seals to numerous companies.
          </p>
        </div>

        {/* Types of Oil Seals */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Types
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Oil Seals
            </h2>
          </div>
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm leading-7 text-slate-600">
            A vast collection of right oil seals are available in the market,
            covering a great range of sizes, designs and materials based on
            their applications. When it comes to world class performance,
            longevity and excellent utility, we are well stocked with these
            high quality choices that conform to international standards.
            There are quite a number of manufacturers to meet particular
            applications. Hence, an enormous selection is available.
          </p>
        </div>

        {/* Types of Materials Used */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Materials
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Types of Materials Used
            </h2>
          </div>
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm leading-7 text-slate-600">
            Traditionally, people use leather as the lip material, but mass
            production has increased the use of synthetic rubbers over time.
            However, Nitrile (NBR) still dominates. Viton often replaces
            Silicone (VMQ) and Polyacrilate (ACM) in high-temperature
            applications. We provide high-quality Oil Seals with new designs.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {materialsInfo.map(({ name, description }) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-[#061a38]">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Excellence */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            NDK Oil Seals: Engineering Excellence Unleashed
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            These are crafted with meticulous attention to detail, embodying
            the engineering prowess that NDK is celebrated for. The NDK seal
            catalog, a treasure trove of sealing solutions, encompasses a wide
            array of options catering to various industries and applications.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Features
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Features
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaCheckCircle className="text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Reference */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Crossing Boundaries with NDK Oil Seal Cross Reference
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Navigating the expansive world of sealing components can be
            daunting, but we simplifies this with the NDK oil seal
            cross-reference tool. Seamlessly identifying comparability, this
            tool ensures that you find the perfect match for your specific
            requirements, streamlining the replacement process and minimizing
            downtime.
          </p>
        </div>

        {/* Sizes and Specifications */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            Tailored Precision: NDK Oil Seal Sizes and Specifications
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            A2Z Seals takes pride in offering a diverse range of sealing
            components and sizes, ensuring that every application, irrespective
            of scale, finds a perfect fit. The specifications of these go
            beyond mere dimensions; they speak to the robustness and precision
            that define, making them the go-to choice for industries where
            performance is non-negotiable.
          </p>
        </div>

        {/* Part Numbers */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Decoding Performance: NDK Oil Seal Part Numbers
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            In the intricate world, part numbers are the language of precision.
            We simplifies this language, making them easily accessible. This
            streamlined approach facilitates efficient ordering, ensuring that
            you get the right products with utmost ease.
          </p>
        </div>

        {/* Material Mastery */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">
            Material Mastery: Unveiling the Secrets of NDK Oil Seal Material
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            A2Z masterfully uses resilient materials, ensuring product longevity
            and reliability in challenging environments, highlighting their
            commitment to quality.
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            NDK Oil Seal – Premium Sealing Solutions by A2ZSeals Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon sealing
            lip, a spiraled tensioning spring, metal case and an internal case.
            Our NDK oil seals prevent hydraulic oil, lubricants, chemicals or
            water from escaping, and dirt and dust from entering a machine.
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
            industries like cement, mine, steel, coal, sugar and oil.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose NDK Oil Seal
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
            Cannot Find Your NDK Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>ndk-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default NdkOilSealList;
