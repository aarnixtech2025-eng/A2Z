import { Link } from "react-router-dom";

function Brands() {
  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Brands
          </h1>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Products from leading industrial machine brands
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-lg text-gray-600">
            We supply seals for leading brands including JCB, Tata Hitachi, Volvo, Komatsu, Hyundai, Caterpillar, and more.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Why CFW Oil Seal?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore our full range of CFW Oil Seals, NBR, Viton, Metal
            Cladded and PTFE variants, imported and stocked for the Indian,
            Middle East, African and Asian markets.
          </p>
          <Link
            to="/list/cfw-oil-seal"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#f5b400] px-5 py-2.5 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            View CFW Oil Seal Range
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brands;
