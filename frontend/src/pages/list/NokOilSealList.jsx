import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaOilCan } from "react-icons/fa";

const nokOilSeals = [
  "NOK TC Oil Seal",
  "NOK SC Oil Seal",
  "NOK SB Oil Seal",
  "NOK VC Oil Seal",
  "NOK KB Oil Seal",
  "NOK KC Oil Seal",
  "NOK MG Oil Seal",
  "NOK OC Oil Seal",
  "NOK SA1 Oil Seal",
  "NOK TB4 Oil Seal",
  "NOK TCJ Oil Seal",
  "NOK TCN Oil Seal",
];

function NokOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#061a38] py-16 sm:py-20">
        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#f5b400]/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5b400] text-2xl text-[#061a38] shadow-lg">
            <FaOilCan />
          </div>

          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            A2Z Seals Product Directory
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            NOK Oil Seal <span className="text-[#f5b400]">List</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore commonly used NOK oil seal types for industrial machines,
            hydraulic equipment, motors, pumps and gearboxes.
          </p>
        </div>
      </div>

      {/* List */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
            Available Products
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
            Browse NOK Oil Seal Types
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nokOilSeals.map((seal) => (
            <Link
              key={seal}
              to={`/shop/products?brand=nok&product=${encodeURIComponent(seal)}`}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#d99600]" />
                <span className="font-bold text-[#061a38]">{seal}</span>
              </div>

              <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Cannot Find Your NOK Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
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

export default NokOilSealList;