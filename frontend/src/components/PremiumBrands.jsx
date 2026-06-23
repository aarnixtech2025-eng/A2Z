function PremiumBrands() {
  const brands = [
    "NOK",
    "HALLITE",
    "CORTECO",
    "SIMRIT",
    "MERKEL",
    "PARKER",
    "CFW",
    "SAKAGAMI",
    "SKF",
    "FREUDENBERG",
    "SOG",
    "KASTAS",
    "TTO",
    "TCK",
    "CR",
    "NAK",
    "NDK",
    "NATIONAL",
    "CHR",
  ];

  return (
    <section className="w-full bg-gradient-to-r from-brand-900 to-brand-800 py-10 overflow-hidden">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Premium Brands
        </h2>
        <p className="mt-2 text-sm text-brand-200 sm:text-base">
          Partnered with world-class seal manufacturers
        </p>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="mx-6 flex items-center justify-center rounded-xl border border-brand-700/50 bg-brand-800/50 px-6 py-3 backdrop-blur-sm transition-all hover:bg-brand-700/50 hover:border-brand-600"
            >
              <span className="text-sm font-bold text-white sm:text-base tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PremiumBrands;
