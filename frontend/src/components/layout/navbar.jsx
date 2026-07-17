import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiArrowRight,
  HiChevronDown,
  HiSearch,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about_us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/our_gallery", label: "Gallery" },
  { to: "/our_portfolio", label: "Portfolio" },
  { to: "/projects", label: "Vastu" },
  { to: "/testimonialspage", label: "Testimonials" },
  { to: "/courses", label: "Courses" },
  { to: "/blog", label: "Blog" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetchLogo();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchLogo = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/logo-settings`);
      if (response.data && response.data.length > 0) {
        const logoData = response.data[0];
        const logoPath = logoData.logo.startsWith("/uploads/")
          ? logoData.logo
          : `/uploads/${logoData.logo}`;
        setLogoUrl(`${import.meta.env.VITE_API_URL}${logoPath}`);
      }
    } catch (error) {}
  };

  return (
    <>
      <style>{`
        .nav-link-gold {
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link-gold::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: -8px;
          left: 0;
          height: 2px;
          background: #f5b400;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.2s ease;
        }
        .nav-link-gold:hover::after,
        .nav-link-gold.active::after {
          transform: scaleX(1);
        }
        .glow-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f5b400 0%, #ffc52e 100%);
          box-shadow: 0 5px 12px rgba(245,180,0,0.22);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .glow-btn:hover {
          box-shadow: 0 8px 18px rgba(245,180,0,0.32);
          transform: translateY(-1px);
        }
        .glow-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transition: left 0.5s ease;
        }
        .glow-btn:hover::before {
          left: 160%;
        }
        .mobile-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
          transition: all 0.25s ease;
        }
        .mobile-link::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: #f5b400;
          border-radius: 2px;
          transition: height 0.3s ease;
        }
        .mobile-link:hover::before,
        .mobile-link.active-mob::before {
          height: 70%;
        }
        .mobile-link:hover,
        .mobile-link.active-mob {
          background: #fff8e6;
          color: #9a6900;
          padding-left: 22px;
        }
        @keyframes drawerIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .drawer-open { animation: drawerIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards; }
        .gold-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #f5b40066, transparent);
          margin: 4px 0;
        }
      `}</style>

      <nav
        className="sticky top-0 z-50 border-b border-slate-200 bg-white transition-all duration-300"
        style={{
          boxShadow: scrolled ? "0 5px 18px rgba(6,26,56,0.1)" : "0 1px 5px rgba(6,26,56,0.05)",
        }}
      >
        {/* Top gold accent line */}
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #f5b400 0%, #ffd458 50%, #f5b400 100%)",
            opacity: scrolled ? 1 : 0.75,
            transition: "opacity 0.3s",
          }}
        />

        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-[68px] items-center">

            {/* Logo */}
            <div className="flex min-w-0 flex-shrink-0 items-center mr-6">
              <Link to="/">
                <img
                  src={logoUrl}
                  alt="Taunush Interiors"
                  className="h-11 w-auto max-w-[170px] object-contain sm:h-12"
                />
              </Link>
            </div>

            <label className="relative hidden w-full max-w-[240px] xl:block mr-8">
              <span className="sr-only">Search products</span>
              <input
                type="search"
                placeholder="Search for products..."
                className="h-10 w-full rounded border border-slate-300 bg-white py-2 pl-3 pr-10 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#f5b400] focus:ring-2 focus:ring-[#f5b400]/20"
              />
              <HiSearch className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-700" />
            </label>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex items-center gap-8">
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/our_portfolio"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Industries
                    <HiChevronDown className="h-3.5 w-3.5" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about_us"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4 ml-8">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-all duration-300 hover:bg-green-600 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <Link
                to="/contact"
                className="glow-btn text-black text-sm font-semibold tracking-wide px-6 py-2.5 rounded-full flex items-center gap-2"
              >
                Contact Us
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#f5b400]/40 bg-[#fff9e8] transition-all duration-300 hover:border-[#f5b400] hover:bg-[#fff2c8] lg:hidden ml-4"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <HiX size={22} className="text-[#9a6900]" />
              ) : (
                <HiMenu size={22} className="text-[#9a6900]" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="lg:hidden drawer-open px-4 pb-5 pt-2">
            <div
              className="rounded-2xl p-4 shadow-2xl"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)",
                boxShadow: "0 20px 50px rgba(6,26,56,0.14)",
              }}
            >
              {/* Mobile Logo row */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a6900]">Navigation</span>
                <button onClick={() => setMenuOpen(false)} className="text-slate-500 transition-colors hover:text-[#9a6900]">
                  <HiX size={18} />
                </button>
              </div>

              <label className="relative mb-4 block">
                <span className="sr-only">Search products</span>
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="h-10 w-full rounded border border-slate-300 bg-white py-2 pl-3 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#f5b400] focus:ring-2 focus:ring-[#f5b400]/20"
                />
                <HiSearch className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-700" />
              </label>

              <ul className="flex flex-col gap-1">
                {navLinks.map(({ to, label }, i) => (
                  <React.Fragment key={to}>
                    <li>
                      <NavLink
                        to={to}
                        end={to === "/"}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `mobile-link text-[15px] font-medium w-full ${isActive ? "active-mob text-[#D7B25B]" : "text-[#b0aca6]"}`
                        }
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "linear-gradient(135deg,#D7B25B,#F0D080)" }}
                        />
                        {label}
                      </NavLink>
                    </li>
                    {i === 4 && <li><div className="gold-divider" /></li>}
                  </React.Fragment>
                ))}
              </ul>

              <div className="mt-4 border-t border-slate-200 pt-3">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="glow-btn text-black text-sm font-bold tracking-wide px-5 py-3 rounded-xl flex items-center justify-center gap-2 w-full"
                >
                  Book Consultation
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;