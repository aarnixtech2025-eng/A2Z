import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import parkerImage from "../../assets/images/4.png";

const oRingKits = [
  { kitNo: "Kit No 03", qty: "386 pcs" },
  { kitNo: "Kit No 04", qty: "382 pcs" },
  { kitNo: "Kit No 05", qty: "396 pcs" },
  { kitNo: "Kit No 06", qty: "407 pcs" },
  { kitNo: "Kit No 07", qty: "408 pcs" },
  { kitNo: "Kit No 08", qty: "212pcs 90 SHORE A" },
];

const advantages = [
  "High-Quality Replacement Seals",
  "Precisely-Sized O-Rings",
  "Parker Oil Seal",
  "Parker Hydraulic Seal",
  "Functions as Effectively as OEMs",
  "Expertise in Various Brand Specifications",
];

function ParkerORingKit() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Parker O-Ring Kit <span className="text-[#f5b400]">| A2Z SEALS</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Kit 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8. A2Z Seals offers Parker ORing Kit with high-quality, precisely-sized o-rings that function just as effectively as OEMs.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={parkerImage}
                alt="Parker O-Ring Kit"
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
            Why Choose A2Z Seals for Parker O-Ring Kit?
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals specializes in replacement seal kits. Their expertise lies in understanding the specifications of various brands, including Parker. They offer high-quality, precisely-sized o-rings, Parker Oil Seal, Parker hydraulic seal etc that function just as effectively as OEMs.
          </p>
        </div>

        {/* O-Ring Kit Table */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Parker O-Ring Kit Specifications
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-extrabold text-[#061a38]">O-Ring Kit No.</th>
                  <th className="px-4 py-3 text-left font-extrabold text-[#061a38]">Qty.</th>
                </tr>
              </thead>
              <tbody>
                {oRingKits.map((kit, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 font-medium text-[#061a38]">{kit.kitNo}</td>
                    <td className="px-4 py-3 text-slate-600">{kit.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Our Expertise
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              A2Z Seals Advantages
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <FaShieldAlt className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Parker O-Ring Kit?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Contact A2Z Seals for high-quality Parker O-Ring Kits that function as effectively as OEMs. Our experts can help you find the right kit for your needs.
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

export default ParkerORingKit;
