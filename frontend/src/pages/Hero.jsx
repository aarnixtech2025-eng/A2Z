import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import images from "../assets/hero.png";

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
  const [bannerData, setBannerData] = useState({
    title: "Complete Hydraulic & Industrial Sealing Solutions",
    description: "Premium Oil Seals, Hydraulic Seal Kits, O-Rings and Customized Sealing Solutions for All Industrial Applications.",
    banners: []
  });
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/banners`);
        if (response.data.success && response.data.data && response.data.data.length > 0) {
          const banner = response.data.data[0];
          setBannerData({
            title: banner.title || "Complete Hydraulic & Industrial Sealing Solutions",
            description: banner.description || "Premium Oil Seals, Hydraulic Seal Kits, O-Rings and Customized Sealing Solutions for All Industrial Applications.",
            banners: banner.banners || []
          });
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (bannerData.banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prev) => (prev + 1) % bannerData.banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [bannerData.banners.length]);

  const getBannerImage = () => {
    if (bannerData.banners.length > 0) {
      return `${import.meta.env.VITE_API_URL}/uploads/${bannerData.banners[currentBannerIndex]}`;
    }
    return images;
  };

  return (
    <section className="relative overflow-hidden bg-[#061a38]">
      {/* Hero Main Section */}
      <div className="relative min-h-[320px] overflow-hidden sm:min-h-[360px] md:min-h-[380px] lg:min-h-[440px]">
        {/* Background Image */}
        <img
          src={getBannerImage()}
          alt="Hydraulic cylinder and industrial sealing products"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38] via-[#061a38]/70 to-transparent" />

        {/* Extra Blue Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a38]/20 via-[#061a38]/10 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[320px] max-w-7xl items-center px-3 py-6 sm:min-h-[360px] sm:px-6 sm:py-8 md:min-h-[380px] lg:min-h-[440px] lg:px-8 lg:py-10">
          <div className="w-full max-w-2xl">
            <h1 className="text-xl font-black uppercase leading-[1.15] tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {loading ? "Loading..." : bannerData.title}
            </h1>

            <p className="mt-3 max-w-xl text-xs font-medium leading-5 text-gray-100 sm:text-sm sm:leading-6 md:text-base">
              {loading ? "Loading..." : bannerData.description}
            </p>

            <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3 md:flex-row">
              <Link
                to="/shop/products"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#f6b617] px-4 py-2.5 text-[11px] font-extrabold uppercase text-[#071a37] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 sm:px-5 sm:text-xs md:text-sm"
              >
                View Products
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
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

              <Link
                to="/quote"
                className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#f6b617] px-4 py-2.5 text-[11px] font-extrabold uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f6b617] hover:text-[#071a37] sm:px-5 sm:text-xs md:text-sm"
              >
                Get Instant Quote
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#071a37]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-3 sm:px-6 md:grid-cols-4 lg:px-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-2 py-2.5 text-[#d8a93a] sm:gap-2.5 sm:py-3 md:gap-3 md:py-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8a93a]/50 bg-[#0c2850] [&>svg]:h-5 [&>svg]:w-5 sm:h-9 sm:w-9 sm:[&>svg]:h-6 sm:[&>svg]:w-6">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-[10px] font-extrabold uppercase tracking-wide text-white sm:text-[11px] md:text-xs">
                  {feature.title}
                </h3>
                <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[9px] md:text-[10px]">
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