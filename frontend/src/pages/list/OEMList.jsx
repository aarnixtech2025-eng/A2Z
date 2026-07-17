import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry } from "react-icons/fa";

const oemBrands = [
  "ACE",
  "AJAX",
  "APPOLO",
  "ATLAS COPCO",
  "BEML",
  "BOBCAT",
  "BOMAG",
  "CASE",
  "CAT",
  "CATERPILLAR",
  "DAEWOO",
  "DANFOSS",
  "DEMAG",
  "DOOSAN",
  "ESCORTS",
  "GODREJ",
  "HITACHI",
  "HYUNDAI",
  "JCB",
  "KOMATSU",
  "KOBELCO",
  "LIUGONG",
  "MAHINDRA",
  "SANY",
  "TATA HITACHI",
  "VOLVO",
];

function OEMList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      <div className="relative overflow-hidden bg-[#061a38] py-16 sm:py-20">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#f5b400]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5b400] text-2xl text-[#061a38]">
            <FaIndustry />
          </div>

          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            A2Z Seals Directory
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            OEM Wise <span className="text-[#f5b400]">Seal Kit List</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Find hydraulic seal kits and industrial seals according to your
            machinery OEM brand.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {oemBrands.map((brand) => (
            <Link
              key={brand}
              to={`/shop/products?oem=${encodeURIComponent(brand)}`}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg"
            >
              <span className="font-extrabold text-[#061a38]">{brand}</span>

              <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#fff3cc] px-6 py-8 text-center">
          <h3 className="text-2xl font-extrabold text-[#061a38]">
            Need a Seal Kit for Your OEM Machine?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Share your machine brand, model number and seal kit requirement.
          </p>

          <Link
            to="/quote"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#061a38] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#0c2c5c]"
          >
            Get a Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OEMList;