import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import sealKitsImage from "../assets/logo_a2z_seals.png";

const brands = [
  "Parker Hydraulic Seals",
  "Merkel Hydraulic Seals",
  "SKF Hydraulic Seals",
  "(B+S) Busak Shamban Hydraulic Seals",
  "TCK Oil Seals",
  "Nok Hydraulic Seals",
  "Simrit Hydraulic Seals",
  "Sakagami Hydraulic Seals",
  "Valqua Hydraulic Seals",
  "Gapi o-rings & seals",
  "SKF Oil seals",
  "NOK Oil seals",
  "Simrit Oil seals",
  "SOG Oil Seals",
  "TTo Oil Seals",
  "CFW Oil Seals",
  "CR oil Seals",
  "NAK Oil Seals",
];

const sealTypes = [
  "Hydraulic Cylinder Seals & Seal Kits",
  "Oil Seals",
  "Shaft Seals",
  "HUB Seals",
  "Cassette Seals",
  "Gear Box Seals",
  "Hydraulic Pump Seal Kit",
  "O Rings",
  "O Ring Kits",
];

const specializedSeals = [
  "Spring-loaded",
  "Metal-inserted",
  "Metal O.D.",
  "NBR",
  "Viton",
  "Single-lip",
  "Double-lip",
];

const machineryCategories = [
  {
    category: "Mining Machinery",
    items: [
      "Excavator",
      "Bulldozer",
      "Dump Truck",
      "Drill Rig",
      "Loader",
      "Haul Truck",
      "Crusher",
      "Conveyor Belt",
      "Grader",
    ],
  },
  {
    category: "Construction Machinery",
    items: [
      "Backhoe Loader",
      "Crawler Crane",
      "Concrete Mixer",
      "Asphalt Paver",
      "Road Roller",
      "Skid-Steer Loader",
      "Tower Crane",
    ],
  },
  {
    category: "Hydraulic Equipment",
    items: [
      "Hydraulic Excavator",
      "Hydraulic Press",
      "Hydraulic Breaker",
      "Hydraulic Pump",
    ],
  },
  {
    category: "Oilfield Machinery",
    items: [
      "Oil Drilling Rig",
      "Oil Well Pump",
      "Mud Pump",
      "Oilfield Service Truck",
    ],
  },
  {
    category: "Off-Highway Machinery",
    items: [
      "Articulated Dump Truck",
      "Wheel Loader",
      "Motor Grader",
      "Scraper",
    ],
  },
  {
    category: "Marine Machinery",
    items: [
      "Cargo Ship",
      "Oil Tanker",
      "Tugboat",
      "Dredger",
    ],
  },
  {
    category: "Industrial Machinery",
    items: [
      "Industrial Robots",
      "Manufacturing Conveyor",
      "Welding Machine",
      "Machine Tools",
    ],
  },
  {
    category: "Hydro Power Machinery",
    items: [
      "Turbine Generator",
      "Hydroelectric Dam",
      "Water Turbine",
    ],
  },
  {
    category: "Forestry Machinery",
    items: [
      "Logging Skidder",
      "Wood Chipper",
      "Harvester",
    ],
  },
  {
    category: "Food & Pharmaceutical Machinery",
    items: [
      "Filling Machine",
      "Blister Packaging Machine",
      "Mixing Machine",
    ],
  },
  {
    category: "Defense Machinery",
    items: [
      "Tank",
      "Armored Personnel Carrier",
      "Military Helicopter",
    ],
  },
  {
    category: "Chemical Processing Machinery",
    items: [
      "Chemical Reactor",
      "Distillation Column",
      "Heat Exchanger",
    ],
  },
  {
    category: "Automotive Machinery",
    items: [
      "Assembly Line Robot",
      "Painting Robot",
      "Welding Robot",
    ],
  },
  {
    category: "Aerospace Machinery",
    items: [
      "Jet Engine Test Stand",
      "Aircraft Manufacturing Robot",
      "Spacecraft Launch Pad",
    ],
  },
];

function SealKitsAndOilSeals() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Seal Kits and Oil Seals <span className="text-[#f5b400]">| A2Z SEALS</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z SEALS, based in India, has earned a stellar reputation as a prominent Seal Kit manufacturer not only in India but also worldwide.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={sealKitsImage}
                alt="Seal Kits and Oil Seals"
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
            Seal Kits and Oil Seals Include
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            They have an extensive range of Seal Kits and Oil Seals including hydraulic seals, oil seals, O-rings, sealing rings, high-pressure seals, non-standard seals, and various others.
          </p>
        </div>

        {/* Renowned Brands */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Renowned Brands
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Brands such as the following are available in our stock:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Seal Kit Section */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            SEAL KIT
          </h2>
          <p className="mt-3 text-sm font-extrabold text-[#d99600]">
            Authorized Distributor and Exporter of AZS Replacement Seal Kits from India
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z SEALS proudly holds the position of an authorized distributor and exporter of AZS Replacement Seal Kits in India. Their dedication to excellence and customer satisfaction has enabled them to be entrusted with importing various seal types and representing the entire region.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Supplying a Wide Range of Seals</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS takes pride in offering an extensive selection of Seal Kits and Oil Seals, catering to diverse needs and requirements. They are capable of supplying seals ranging from small sizes to as large as 600 mm in diameter. Moreover, their expertise extends to undertaking the supply of massive seals, reaching diameters of up to 4000 mm.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Meeting Specialized Seal Kits and Oil Seals Needs</p>
                <p className="text-sm leading-6 text-slate-600">
                  With a focus on fulfilling specialized demands, A2Z SEALS can undertake the supply of high-pressure seals, ensuring seamless performance even under demanding conditions. Additionally, their product line includes high-temperature seals, designed to withstand extreme heat and maintain peak efficiency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Versatility in Seal Kits and Oil Seals Supply</p>
                <p className="text-sm leading-6 text-slate-600">
                  A2Z SEALS demonstrates remarkable versatility in supplying various types of oil seals. They offer oil seals in both metric and inch measurements, as well as in ptfe material, to accommodate diverse applications. Their stock comprises seals in inches and MM sizes, ensuring they can meet customers' specific preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">A Vast Stock of Seal Kits and Oil Seals</p>
                <p className="text-sm leading-6 text-slate-600">
                  With a vast inventory, A2Z SEALS ensures timely delivery and quick response to customers' needs. They maintain a substantial stock of fast-moving oil seals, enabling them to promptly fulfill orders and reduce lead times significantly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Meeting Every Requirement with Specialized Seals</p>
                <p className="text-sm leading-6 text-slate-600">
                  Understanding that each application may demand specific features, A2Z SEALS offers a range of specialized oil seals, including spring-loaded, metal-inserted, metal O.D., NBR, Viton, single-lip, and double-lip seals. This comprehensive offering enables customers to find the perfect seal to match their requirements precisely.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seal Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Our Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Hydraulic Cylinder Seals & Seal Kits | Oil Seals | Shaft Seals
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sealTypes.map((type) => (
              <Link
                key={type}
                to={`/shop/products?product=${encodeURIComponent(type)}`}
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

        {/* Specialized Seals */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Specialized Oil Seals
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {specializedSeals.map((seal) => (
              <span
                key={seal}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {seal}
              </span>
            ))}
          </div>
        </div>

        {/* Standard */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Standard
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z SEALS continues to be the go-to choice for all sealing needs. Whether it's hydraulic seals, oil seals, O-rings, or specialized seals, A2Z SEALS stands ready to deliver top-notch solutions for diverse applications across the globe. Our seals are used in the following:
          </p>
        </div>

        {/* Machinery Categories */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Machinery Using Our Seals
            </h2>
          </div>
          <div className="space-y-6">
            {machineryCategories.map((category) => (
              <div
                key={category.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#061a38] text-white">
                    <FaCogs />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#061a38]">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-[#061a38]"
                    >
                      <FaTools className="text-[#d99600]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Seal Kits and Oil Seals?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            A2Z SEALS has emerged as a trusted and reputable Seal Kit manufacturer and distributor, both in India and internationally. Contact us for all your sealing needs.
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

export default SealKitsAndOilSeals;
