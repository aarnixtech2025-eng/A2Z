import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaIndustry,
  FaHardHat,
  FaMountain,
  FaBuilding,
  FaCogs,
  FaRoad,
} from "react-icons/fa";

function Industries() {
  const industries = [
    {
      name: "Construction",
      description: "Sealing solutions for construction machinery and equipment",
      icon: <FaHardHat />,
      link: "/industries/construction",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Mining",
      description: "Heavy-duty seals for mining and excavation equipment",
      icon: <FaMountain />,
      link: "/industries/mining",
      color: "from-amber-500 to-amber-600",
    },
    {
      name: "Cement",
      description: "Industrial seals for cement plant machinery",
      icon: <FaBuilding />,
      link: "/industries/cement",
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Steel",
      description: "High-performance seals for steel processing equipment",
      icon: <FaIndustry />,
      link: "/industries/steel",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Manufacturing",
      description: "Precision seals for manufacturing and production lines",
      icon: <FaCogs />,
      link: "/industries/manufacturing",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Infrastructure",
      description: "Sealing solutions for infrastructure development",
      icon: <FaRoad />,
      link: "/industries/infrastructure",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071827] via-[#0B1F33] to-[#1E3A5F]">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(203,213,225,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(203,213,225,0.16) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="absolute -left-24 top-0 h-[300px] w-[300px] rounded-full bg-[#F97316]/25 blur-[110px]" />
        <div className="absolute -right-24 bottom-[-100px] h-[360px] w-[360px] rounded-full bg-[#60A5FA]/20 blur-[120px]" />
        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#F97316]" />
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FDBA74] sm:text-xs">
                Industry Solutions
              </p>
              <span className="h-[2px] w-10 bg-[#F97316]" />
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Seals For Every
              <span className="block text-[#FDBA74]">Industry.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              A2Z Seals provides specialized hydraulic and industrial sealing
              solutions across multiple industries, from construction to steel
              processing.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#EA580C]">
              Our Expertise
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#061a38] sm:text-4xl">
              Industries We Serve
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                to={industry.link}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-xl"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${industry.color} text-2xl text-white shadow-lg`}>
                  {industry.icon}
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#061a38]">
                  {industry.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#EA580C] transition-colors group-hover:text-[#F97316]">
                  Learn More
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F97316] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/75">
              Need Industry-Specific Seals?
            </p>

            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Can't Find Your Industry?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Contact A2Z Seals for custom sealing solutions tailored to your
              specific industry requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#0B1F33] px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#1E3A5F]"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Industries;
