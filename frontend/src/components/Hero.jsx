import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 py-8 lg:py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white backdrop-blur-sm border border-white/20">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
              GROUP TRUSTED SINCE 1975 - KOLKATA, INDIA
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              A2Z SEALS
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base max-w-xl">
              Your trusted partner for hydraulic seals, oil seals, and seal kits
              for all industrial machinery. Premium quality, reliable
              performance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Link
                to="/shop/products"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-2.5 text-xs font-bold text-brand-900 shadow-lg shadow-white/20 transition-all hover:bg-gray-50 hover:scale-105"
              >
                View Products
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-6 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
              >
                Download Catalog
              </button>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-white">48+</p>
                <p className="mt-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-white">5000+</p>
                <p className="mt-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Products
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-white">1000+</p>
                <p className="mt-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-brand-700 rounded-2xl blur-xl opacity-30" />
              <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10">
                <img
                  src={heroImage}
                  alt="Seal Kits"
                  className="h-40 w-full object-cover sm:h-48 lg:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Seal Kits",
              items: ["Complete cylinder kits", "Excavator kits", "Backhoe loader kits"],
            },
            {
              title: "Hydraulic Seals",
              items: ["Piston seals", "Rod seals", "Wiper seals"],
            },
            {
              title: "Oil Seals",
              items: ["Rotary shaft seals", "TC type seals", "Metal cased seals"],
            },
            {
              title: "O-Rings",
              items: ["Nitrile O-rings", "Viton O-rings", "Silicone O-rings"],
            },
          ].map((card, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105"
            >
              <h3 className="mb-2 text-xs font-bold text-white uppercase tracking-wider">{card.title}</h3>
              <ul className="space-y-1.5 text-[10px] text-gray-300">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-0.5 flex h-1 w-1 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
