import heroImage from "../assets/hero.png";

const productCategories = [
  {
    name: "Seal Kit",
    description:
      "Complete sealing assemblies developed for hydraulic and industrial machinery applications.",
  },
  {
    name: "Hydraulic Cylinder Seals",
    description:
      "Advanced hydraulic cylinder components built to endure extreme pressure and heat.",
  },
  {
    name: "Oil Seals",
    description:
      "Precision-engineered leakage barriers that minimize contamination and fluid loss.",
  },
  {
    name: "Shaft Seals",
    description:
      "Long-lasting rotary protection solutions for industrial equipment and machinery.",
  },
  {
    name: "Hub & Cassette Seals",
    description:
      "Innovative hub and cassette systems delivering enhanced durability and protection.",
  },
  {
    name: "Gear Box Seals",
    description:
      "Dependable transmission protection products that preserve lubrication efficiency.",
  },
  {
    name: "Pump Seals & Kits",
    description:
      "Premium-grade pump components created for reliable fluid retention.",
  },
  {
    name: "O Rings Box & Kits",
    description:
      "Industrial O-ring assortments suitable for maintenance and repair operations.",
  },
  {
    name: "Floating Seals",
    description:
      "Rugged floating units engineered for demanding heavy-duty environments.",
  },
  {
    name: "Engine Oil Seal",
    description:
      "Automotive sealing elements designed to control lubricant leakage effectively.",
  },
  {
    name: "PTFE Seals",
    description:
      "High-performance PTFE solutions offering superior thermal and chemical resistance.",
  },
  {
    name: "Motor Seals & Kits",
    description:
      "Reliable protection assemblies for electric and hydraulic motor applications.",
  },
];

function OurProducts() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Comprehensive range of sealing solutions for every industrial
            application
          </p>
        </div>

        {/* Product Images */}
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-900/5"
            >
              <img
                src={heroImage}
                alt="Seal Products"
                className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* Product Categories Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm transition-all hover:shadow-lg hover:border-brand-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2L2 10l8 8 8-8-8-8zm0 14.5L3.5 10 10 3.5 16.5 10 10 16.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
