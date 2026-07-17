function Search() {
  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Search
          </h1>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Find the seals and products you need
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              className="w-full rounded-xl border border-gray-300 px-6 py-4 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            <button
              type="button"
              className="absolute right-2 top-2 rounded-lg bg-brand-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
