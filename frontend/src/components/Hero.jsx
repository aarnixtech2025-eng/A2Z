import { Link } from "react-router-dom";
import images from "../assets/images/images.jpg";
import catalogPdf from "../assets/images/images.jpg";

const features = [
  {
    title: "ISO Certified",
    subtitle: "9001:2015",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    subtitle: "Products",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
      >
        <path d="M12 3l7 3v5c0 4.8-3 8.7-7 10-4-1.3-7-5.2-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    subtitle: "Pan India",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
      >
        <circle cx="8" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M3 5h11v11H3z" />
        <path d="M14 9h4l3 3v4h-7z" />
      </svg>
    ),
  },
  {
    title: "Expert Support",
    subtitle: "24/7",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
      >
        <path d="M4 13v-1a8 8 0 0116 0v1" />
        <path d="M4 13h3v5H4zM17 13h3v5h-3z" />
        <path d="M17 18c0 2-2 3-5 3h-1" />
      </svg>
    ),
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#061a38]">
      {/* Hero Main Section */}
      <div className="relative min-h-[530px] overflow-hidden lg:min-h-[510px]">
        {/* Background Image */}
        <img
          src={images}
          alt="Hydraulic cylinder and industrial sealing products"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38] via-[#061a38]/90 to-[#061a38]/20" />

        {/* Extra Blue Layer */}
        <div className="absolute inset-0 bg-[#061a38]/25" />

        <div className="relative z-10 mx-auto flex min-h-[530px] max-w-7xl items-center px-4 py-14 sm:px-6 lg:min-h-[510px] lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Complete Hydraulic &amp;
              <br />
              <span className="text-[#f6b617]">Industrial Sealing</span>
              <br />
              Solutions
            </h1>

            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-gray-100 sm:text-lg">
              Premium Oil Seals, Hydraulic Seal Kits, O-Rings and Customized
              Sealing Solutions for All Industrial Applications.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop/products"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#f6b617] px-7 py-4 text-sm font-extrabold uppercase text-[#071a37] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                View Products
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

          <a
  href={catalogPdf}
  download="A2Z-Seals-Product-Catalog.pdf"
  type="application/pdf"
  className="group inline-flex items-center justify-center gap-3 rounded-md border-2 border-[#f6b617] px-7 py-4 text-sm font-extrabold uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f6b617] hover:text-[#071a37]"
>
  Download Catalog

  <svg
    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
    />
  </svg>
</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#071a37]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3 py-5 text-[#d8a93a] sm:gap-4 sm:py-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8a93a]/50 bg-[#0c2850]">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wide text-white sm:text-sm">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:text-xs">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;