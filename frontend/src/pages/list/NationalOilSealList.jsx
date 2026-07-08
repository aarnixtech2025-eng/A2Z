import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
} from "react-icons/fa";
import nationalImage from "../../assets/images/image.png";

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

const features = [
  {
    name: "Chemical Resistance",
    description:
      "They exhibit exceptional chemical resistance. Designed to withstand exposure to a variety of chemicals, these seals ensure longevity and reliability in demanding industrial environments.",
  },
  {
    name: "Cost-Effective",
    description:
      "We prioritize cost-effectiveness, and the National Oil Seal is a testament to this commitment. Our competitively priced oil seals deliver premium quality, offering businesses a cost-effective solution without compromising performance.",
  },
  {
    name: "Diverse Material Options",
    description:
      "Versatility is a hallmark of the National Oil Seal. A2Z Seals provides diverse material options to cater to various industry needs, ensuring that our oil seals are suitable for a wide range of applications.",
  },
  {
    name: "Easy Installation",
    description:
      "They are designed for user convenience. It ensures that installation is a hassle-free process, allowing businesses to minimize downtime and enhance operational efficiency.",
  },
  {
    name: "Global Availability",
    description:
      "A2Z Seals extends the reach of the National Oil Seals globally. Our commitment to global availability ensures that industries worldwide can benefit from the superior sealing performance of our product.",
  },
  {
    name: "High-Temperature Resistance",
    description:
      "Operating in high-temperature environments poses no challenge for these products. Engineers design them with high-temperature resistance, guaranteeing consistent performance even in extreme conditions.",
  },
  {
    name: "Industry Compliance",
    description:
      "A2Z Seals is dedicated to maintaining industry compliance standards. The National Oil Seal adheres to stringent regulations, ensuring that our product meets the necessary industry-specific requirements.",
  },
  {
    name: "Innovative Sealing Solutions",
    description:
      "Innovation is at the core of the National Oil Seal reflects dedication to providing innovative sealing solutions. These seals are crafted to address the evolving needs of industries, offering cutting-edge performance.",
  },
  {
    name: "Leak Prevention",
    description:
      "With the National Oil Seal, A2Z Seals prioritizes leak prevention. High-temperature resistance engineers these, ensuring consistent performance in extreme conditions for reliable operation.",
  },
  {
    name: "Long Service Life",
    description:
      "Durability is a key feature of the National Oil Seals and it ensures a long service life for these seals, contributing to reduced maintenance costs and increased productivity for businesses.",
  },
  {
    name: "Low Friction Design",
    description:
      "Reducing friction is essential for optimal machinery performance. The National incorporates a low-friction design, promoting energy efficiency and minimizing wear and tear.",
  },
  {
    name: "OEM Compatibility",
    description:
      "A2Z Seals recognizes the importance of OEM compatibility. We offer seamlessly integrates with original equipment, preserving the integrity of machinery and ensuring consistent performance.",
  },
  {
    name: "Precision Machining",
    description:
      "Precision is paramount in sealing solutions. They employs precision machining techniques in crafting the National Oil Seal, guaranteeing a perfect fit and reliable performance.",
  },
  {
    name: "Rapid Delivery",
    description:
      "Time is of the essence in industrial operations. A2Z Seals prioritizes rapid delivery of the National Oil Seal, ensuring that businesses can quickly access the sealing solutions they need to keep operations running smoothly.",
  },
  {
    name: "Versatile Applications",
    description:
      "The versatility of the National Oil Seal is a standout feature. It engineered these seals to be suitable for a wide array of applications, offering a versatile solution for diverse industries.",
  },
  {
    name: "Custom Sizing Options",
    description:
      "Recognizing that one size does not fit all, apart from the National Oil Seals, we offer custom sizing options. This flexibility ensures that customers can find the perfect fit for their specific equipment and applications.",
  },
];

function NationalOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                National Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Seals proudly introduces the National Oil Seal, a flagship
                product that embodies excellence, innovation, and reliability. Our
                commitment to delivering top-notch sealing solutions is evident in
                the unique features and qualities that define them.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={nationalImage}
                alt="National Premium Brand"
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
        {/* Catalog CTA */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <p className="text-sm leading-7 text-slate-300">
            Also explore the best quality Crane Seal Kits.
          </p>
          <Link
            to="/quote"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            Download A2Z Seal Kits Catalog
            <FaArrowRight />
          </Link>
        </div>

        {/* Features */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Features
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              National Oil Seal Features
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
            {features.map(({ name, description }) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d99600]" />
                  <h3 className="font-bold text-[#061a38]">{name}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">National Oil Seals</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            The National Oil Seals by A2Z Seals are more than a sealing
            solution; it's a commitment to excellence, innovation, and
            reliability. With features like chemical resistance,
            cost-effectiveness, custom sizing options, and more, the National
            Oil Seal sets a new standard in the industry, ensuring that
            businesses have access to top-quality sealing solutions that meet
            and exceed their expectations.
          </p>
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            National Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon sealing
            lip, a spiraled tensioning spring, metal case and an internal case.
            Our National oil seals prevent hydraulic oil, lubricants, chemicals
            or water from escaping, and dirt and dust from entering a machine.
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

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Cannot Find Your National Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>national-a2zseals@a2zseals.com | +91 98310 98320</span>
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

export default NationalOilSealList;
