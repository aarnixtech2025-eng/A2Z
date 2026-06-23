import heroImage from "../assets/hero.png";

const featuredProducts = [
  {
    id: 1,
    name: "Hydraulic Cylinder Seal Kit",
    price: "₹2,500",
    image: heroImage,
  },
  {
    id: 2,
    name: "Oil Seal TC Type 50x72x8",
    price: "₹150",
    image: heroImage,
  },
  {
    id: 3,
    name: "O-Ring Kit (200 Pcs)",
    price: "₹800",
    image: heroImage,
  },
  {
    id: 4,
    name: "Piston Seal 100x110x12",
    price: "₹350",
    image: heroImage,
  },
];

function FeaturedProducts() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Best-selling seals and seal kits
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl hover:border-brand-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-extrabold text-brand-600">
                  {product.price}
                </p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/40"
                >
                  Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
