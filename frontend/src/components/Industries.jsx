import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaCogs,
  FaHardHat,
  FaIndustry,
  FaOilCan,
  FaSeedling,
  FaTruckLoading,
  FaBolt,
  FaMountain,
} from "react-icons/fa";

import cementImage from "../assets/images/cement.jpg";
import constructionImage from "../assets/images/construction.jpg";
import generalIndustryImage from "../assets/images/images.jpg";
import infrastructureImage from "../assets/images/infrastructure.png";
import manufacturingImage from "../assets/images/manufacturing.png";
import miningImage from "../assets/images/mining.jpg";
import steelImage from "../assets/images/steel.png";

function Industries() {
 const industries = [
  {
    title: "Construction",
    slug: "construction",
    icon: <FaHardHat />,
    image: constructionImage,
    description:
      "Reliable sealing solutions for excavators, loaders, backhoe machines, cranes, breakers, and other construction equipment.",
    applications: [
      "Excavators",
      "Backhoe Loaders",
      "Hydraulic Breakers",
      "Cranes",
    ],
    products: ["Hydraulic Seal Kits", "Oil Seals", "O-Rings"],
  },
  {
    title: "Mining",
    slug: "mining",
    icon: <FaMountain />,
    image: miningImage,
    description:
      "Heavy-duty seals designed for mining equipment operating under dust, pressure, vibration, and demanding site conditions.",
    applications: [
      "Drilling Machines",
      "Dumpers",
      "Loaders",
      "Crushers",
    ],
    products: ["Floating Seals", "Hydraulic Seals", "Wear Rings"],
  },
  {
    title: "Cement",
    slug: "cement",
    icon: <FaBuilding />,
    image: cementImage,
    description:
      "Sealing products for cement plant machinery, material handling systems, hydraulic presses, and production equipment.",
    applications: [
      "Conveyors",
      "Hydraulic Presses",
      "Mixers",
      "Packaging Machines",
    ],
    products: ["Oil Seals", "O-Rings", "Mechanical Seals"],
  },
  {
    title: "Steel",
    slug: "steel",
    icon: <FaIndustry />,
    image: steelImage,
    description:
      "Industrial seals for steel processing equipment where high temperature, pressure, dust, and continuous operation are common.",
    applications: [
      "Rolling Mills",
      "Hydraulic Cylinders",
      "Press Machines",
      "Material Handling",
    ],
    products: ["Hydraulic Seals", "Rod Seals", "Piston Seals"],
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    icon: <FaCogs />,
    image: manufacturingImage,
    description:
      "Dependable sealing solutions for industrial machines, automation systems, presses, pumps, and production lines.",
    applications: [
      "Industrial Presses",
      "Pumps",
      "Machining Units",
      "Automation Systems",
    ],
    products: ["O-Rings", "Oil Seals", "Hydraulic Seal Kits"],
  },
  {
    title: "Infrastructure",
    slug: "infrastructure",
    icon: <FaTruckLoading />,
    image: infrastructureImage,
    description:
      "Seal kits and industrial components for road projects, bridge construction equipment, lifting systems, and heavy machinery.",
    applications: [
      "Road Rollers",
      "Pavers",
      "Cranes",
      "Concrete Equipment",
    ],
    products: ["Hydraulic Seals", "Floating Seals", "Seal Kits"],
  },
  {
    title: "Agriculture",
    slug: "agriculture",
    icon: <FaSeedling />,
    image: generalIndustryImage,
    description:
      "Sealing products for tractors, harvesters, loaders, irrigation systems, and agricultural hydraulic equipment.",
    applications: [
      "Tractors",
      "Harvesters",
      "Hydraulic Loaders",
      "Irrigation Equipment",
    ],
    products: ["Oil Seals", "O-Rings", "Hydraulic Seals"],
  },
  {
    title: "Oil & Gas",
    slug: "oil-gas",
    icon: <FaOilCan />,
    image: generalIndustryImage,
    description:
      "Industrial sealing solutions for pumps, valves, hydraulic systems, and equipment used in oil and gas operations.",
    applications: [
      "Pumps",
      "Valves",
      "Hydraulic Units",
      "Pipeline Equipment",
    ],
    products: ["O-Rings", "Mechanical Seals", "Oil Seals"],
  },
  {
    title: "Power Generation",
    slug: "power-generation",
    icon: <FaBolt />,
    image: cementImage,
    description:
      "Sealing products for turbines, pumps, valves, hydraulic controls, and equipment used in power plants.",
    applications: [
      "Turbines",
      "Hydraulic Controls",
      "Cooling Pumps",
      "Valve Systems",
    ],
    products: ["Oil Seals", "O-Rings", "Hydraulic Seals"],
  },
];

  return (
    <main className="overflow-hidden bg-[#f7f9fc]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061a38]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38] via-[#092b57] to-[#0b3d70]" />

        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#f7b718]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#f7b718]" />

              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#f7b718] sm:text-sm">
                A2Z Seals Industries
              </p>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sealing Solutions for
              <span className="block text-[#f7b718]">Every Industry.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              A2Z Seals supports industries with dependable hydraulic seals,
              oil seals, O-rings, floating seals, and machinery seal kits for
              demanding equipment and industrial applications.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#f7b718] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
            >
              Get Product Support
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e5a600]">
            Industries We Serve
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#061a38] sm:text-4xl lg:text-5xl">
            Built for Machines That Keep
            <span className="block text-[#e5a600]">Industry Moving.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our sealing solutions help reduce leakage, support pressure
            retention, and improve equipment reliability across heavy-duty and
            industrial applications.
          </p>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#f7b718] hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-[#061a38]">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a38] via-[#061a38]/40 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7b718] text-xl text-[#061a38] shadow-lg">
                      {industry.icon}
                    </div>

                    <h3 className="text-2xl font-extrabold text-white">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#061a38]">
                      Applications
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.applications.map((application) => (
                        <span
                          key={application}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#061a38]">
                      Recommended Products
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.products.map((product) => (
                        <span
                          key={product}
                          className="rounded-full border border-[#f7b718]/50 bg-[#fff9e8] px-3 py-1 text-xs font-bold text-[#a86e00]"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/quote"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:text-[#e5a600]"
                  >
                    Request a Quote
                    <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY A2Z */}
      <section className="bg-[#061a38] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
                Why A2Z Seals
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                The Right Seal Helps Protect
                <span className="block text-[#f7b718]">Your Machine Investment.</span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Products for demanding industrial applications",
                "Support for hydraulic and heavy machinery seals",
                "Solutions for leakage prevention and pressure retention",
                "Fast assistance for seal kit and product enquiries",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7b718] text-sm font-extrabold text-[#061a38]">
                    0{index + 1}
                  </span>

                  <p className="text-sm font-semibold leading-6 text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#061a38] via-[#0a2b57] to-[#061a38] px-6 py-10 text-center shadow-xl sm:px-10 lg:px-16">
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#f7b718]/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#f7b718]">
                Need the Right Seal?
              </p>

              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">
                Tell Us Your Machine Model or Seal Requirement.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
                Share your product requirement with A2Z Seals and get help
                finding suitable sealing products for your application.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#f7b718] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#061a38] transition hover:bg-yellow-300"
              >
                Contact A2Z Seals
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Industries;