import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import chrImage from "../../assets/images/CFW.png";

const applications = [
  "Automotive",
  "Oil refineries",
  "Manufacturing",
  "Off-highway",
  "Power transmission",
];

const manufacturers = [
  "CFW",
  "SOG",
  "NOK",
  "Parker",
  "freudenberg",
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

const oilSealTypes = [
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

const oilSealKitApplications = [
  "Boom",
  "Dipper",
  "Arm",
  "Slew",
  "Bucket",
  "Main pump",
  "Track Adjuster",
  "Dump",
  "Back Lift",
  "David Brown / Parker Pump",
  "Blade",
  "Excavator",
  "Lift",
];

const profiles = ["TC", "TB", "DB", "TCN", "SB", "SA", "SC", "TA"];

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

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

function ChrSeals() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                CHR Oil Seal <span className="text-[#f5b400]">| A2Z Seals</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                High-Quality CHR Oil Seal – Get Yours Now at A2Z Seals! CHR Oil Seal is a type of dirt or grease seal that close the gap between moving and stationery components in a machine while preventing fluid escape.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={chrImage}
                alt="CHR Oil Seals"
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
        {/* About */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            About CHR Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            CHR Oil Seal is a type of dirt or grease seal that close the gap between moving and stationery components in a machine while preventing fluid escape. It also stops any impurities from entering the machine, especially in severe conditions like high pressure and extreme temperature. While major components of almost every sort of vehicle and equipment stay in motion, CHR Oil Seals protect different types of close-fitting ball, neatly constructed sleeve and roller bearings.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals has always brought forth unique sealing solutions for customers. This time their latest invention of CHR Oil Seal is creating milestones for its durability, no erosion problem and a wide range of applications in various industrial equipments.
          </p>
        </div>

        {/* Application */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Application of CHR Oil Seal
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            CHR Oil Seals help to prevent fluids from leaving the bearings or any particular area. They also stop harmful components, dirt, grease, abrasives and corrosive moisture from getting into the equipment. Thus, they prevent the intermixture of different mediums, water and oil. These seals can be used in the following industrial equipments in various applications:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {applications.map((app) => (
              <span
                key={app}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* USP */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            USP of CHR Oil Seal
          </h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                The metal casing of CHR Oil Seal works as a prop and deflector that protects the lip and rubber body from displacement and damage by external scrap of aggressive media and rock.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                Its improved design adds to narrow installation widths.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                Torque drag and heat build-up caused by machinery frictions are low in comparison with other oil seals and rotating shaft seals. When the speed of rotation increases, its lip takes off the surface of the machine's counterface starting around 12 m/s and dropping to zero contact by 20 m/s. Since it rotates at such a high speed, it helps escape contaminants and minimize power loss.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                CHR Oil Seals are considerably more durable than its counter models and the service life of the former can go up to thousands of hours.
              </p>
            </div>
          </div>
        </div>

        {/* Why A2Z */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Why A2Z Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals has a great understanding about seals and sealing kits and also how these products impact the industrial processes. Their wide range of products is built with advanced technology to maintain international standard and make them useful for a variety of applications at different industries. Their current collection of CHR Oil Seals is best in class. They offer long shell life and service life and come with wear resistant technology. With their precision-built design, they are easy to assemble and match all mechanical applications and customer expectations.
          </p>
        </div>

        {/* CHR Oil Seal Oil Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            CHR Oil Seal Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of ptfe, rubber, viton or Teflon sealing lip, a spiraled tensioning spring, metal case and an internal case. Our CHR Oil Seal oil seals prevent hydraulic oil, lubricants, chemicals or water from escaping, and dirt and dust from entering a machine.
          </p>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Manufacturers of Oil Seals
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {manufacturers.map((manufacturer) => (
              <span
                key={manufacturer}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaIndustry className="text-[#d99600]" />
                {manufacturer}
              </span>
            ))}
          </div>
        </div>

        {/* Imported Oil Seal Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Imported Oil Seal Types
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {oilSealTypes.map((type) => (
              <Link
                key={type}
                to={`/shop/products?brand=chr&product=${encodeURIComponent(type)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{type}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Oil Seal Kit Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Oil Seal Kit Applications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {oilSealKitApplications.map((app) => (
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

        {/* Profiles */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement oil seal repair kits comprising of varied types and sized used by OEMs, such as {oemModels.join(", ")}, etc. We also offer oil seals used in industries like, cement, mine, steel, coal, sugar and oil.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose CHR Oil Seals
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
            Need CHR Oil Seals?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Get high-quality CHR Oil Seals with durability and wear-resistant technology. Contact A2Z Seals today for your sealing needs.
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

export default ChrSeals;
