import heroImage from "../assets/hero.png";

function About() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/5">
            <img
              src={heroImage}
              alt="A2Z Seals Factory"
              className="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About A2Z Seals
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              Trusted supplier of seals &amp; seal kits since 1975. We work with
              leading industrial machine brands including Caterpillar, JCB,
              Hitachi, Komatsu, Volvo, and Hyundai.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Our extensive inventory includes hydraulic cylinder seals, oil
              seals, O-ring kits, pump seals, and gearbox seals for all types of
              heavy machinery and construction equipment.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: "✓", label: "Quality Assured" },
                { icon: "✓", label: "Fast Delivery" },
                { icon: "✓", label: "Expert Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-brand-50 px-4 py-3 ring-1 ring-brand-200"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
