import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

const productCategories = [
  {
    id: 1,
    name: "Seal Kits",
    description: "Complete cylinder kits for excavators and loaders",
    image: heroImage,
  },
  {
    id: 2,
    name: "Hydraulic Seals",
    description: "Piston, rod, and wiper seals for hydraulic systems",
    image: heroImage,
  },
  {
    id: 3,
    name: "Oil Seals",
    description: "Rotary shaft seals and TC type seals",
    image: heroImage,
  },
  {
    id: 4,
    name: "O-Rings",
    description: "Nitrile, Viton, and silicone O-rings",
    image: heroImage,
  },
  {
    id: 5,
    name: "Pump Seals",
    description: "Seals for hydraulic pumps and motors",
    image: heroImage,
  },
  {
    id: 6,
    name: "Gearbox Seals",
    description: "Seals for transmission and gearbox systems",
    image: heroImage,
  },
];

function Products() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Wide range of industrial seals and seal kits
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((product) => (
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
                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>
                <Link
                  to="/shop/products"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  View More
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
