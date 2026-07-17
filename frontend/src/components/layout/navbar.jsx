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
  const [wordpressMenu, setWordpressMenu] = useState(null);
  const [sealKitMenu, setSealKitMenu] = useState(null);
  const [activeOemRange, setActiveOemRange] = useState("A-E");
  const [activeOemSlug, setActiveOemSlug] = useState(null);
  const [activeProductSlug, setActiveProductSlug] = useState(null);

  useEffect(() => {
    fetchLogo();
  }, []);

  useEffect(() => {
    const fetchWordPressMenu = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/taxonomies/wordpress-menu`);
        const menu = response.data.data || [];
        setWordpressMenu(menu);
        const sealKit = menu.find(item => item.title === "Seal Kit" || item.name === "seal-kit-catalog");
        setSealKitMenu(sealKit || null);
        if (sealKit?.children?.length > 0) {
          setActiveOemSlug(sealKit.children[0].children?.[0]?.name || null);
        }
      } catch (error) {
        setWordpressMenu([]);
        setSealKitMenu(null);
      }
    };

    fetchWordPressMenu();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchLogo = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await axios.get(`${apiUrl}/api/logo-settings`);
      if (response.data && response.data.length > 0) {
        const logoData = response.data[0];
        const logoPath = logoData.logo.startsWith("/uploads/")
          ? logoData.logo
          : `/uploads/${logoData.logo}`;
        setLogoUrl(`${apiUrl}${logoPath}`);
      }
    } catch (error) {}
  };

  const oemRanges = sealKitMenu?.children || [];

  const rangeOems = oemRanges.find(range => range.name === activeOemRange)?.children || [];
  const activeOem = rangeOems.find(oem => oem.name === activeOemSlug);
  const activeProduct = activeOem?.children?.find(p => p.name === activeProductSlug);

  const selectOemRange = (range) => {
    setActiveOemRange(range);
    const rangeData = oemRanges.find(r => r.name === range);
    const firstOem = rangeData?.children?.[0];
    setActiveOemSlug(firstOem?.name || null);
    setActiveProductSlug(firstOem?.children?.[0]?.name || null);
  };

  const selectOem = (oemName) => {
    setActiveOemSlug(oemName);
    const oem = rangeOems.find(o => o.name === oemName);
    setActiveProductSlug(oem?.children?.[0]?.name || null);
  };

  return (
    <>
      <style>{`
        .nav-link-gold {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
        }
        .nav-link-gold::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: -6px;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #f5b400 0%, #ffd458 50%, #f5b400 100%);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-gold:hover::after,
        .nav-link-gold.active::after {
          transform: scaleX(1);
        }
        .nav-link-gold:hover {
          color: #d4a017;
          transform: translateY(-1px);
        }
        .glow-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f5b400 0%, #ffd458 50%, #f5b400 100%);
          background-size: 200% 200%;
          box-shadow: 0 4px 15px rgba(245,180,0,0.3), 0 0 20px rgba(245,180,0,0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: gradientShift 3s ease infinite;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .glow-btn:hover {
          box-shadow: 0 6px 25px rgba(245,180,0,0.4), 0 0 30px rgba(245,180,0,0.2);
          transform: translateY(-2px) scale(1.02);
        }
        .glow-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }
        .glow-btn:hover::before {
          left: 160%;
        }
        .mobile-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
        }
        .mobile-link::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #f5b400, #ffd458);
          border-radius: 2px;
          transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-link:hover::before,
        .mobile-link.active-mob::before {
          height: 80%;
        }
        .mobile-link:hover,
        .mobile-link.active-mob {
          background: linear-gradient(135deg, #fff8e6 0%, #fff2c8 100%);
          color: #9a6900;
          padding-left: 24px;
          transform: translateX(4px);
        }
        @keyframes drawerIn {
          from { opacity: 0; transform: translateY(-20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .drawer-open { animation: drawerIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .gold-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #f5b40088, transparent);
          margin: 6px 0;
          border-radius: 1px;
        }
        .dropdown-item {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .dropdown-item:hover {
          transform: translateX(4px);
        }
        @keyframes goldLine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <nav
        className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/95 backdrop-blur-md transition-all duration-300"
        style={{
          boxShadow: scrolled ? "0 8px 30px rgba(6,26,56,0.12)" : "0 2px 10px rgba(6,26,56,0.06)",
        }}
      >
        {/* Top gold accent line */}
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #f5b400 0%, #ffd458 25%, #f5b400 50%, #ffd458 75%, #f5b400 100%)",
            backgroundSize: "200% 100%",
            opacity: scrolled ? 1 : 0.85,
            transition: "opacity 0.3s",
            animation: "goldLine 3s linear infinite",
          }}
        />

        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-[72px] items-center">

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
                    to="/shop"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li
                  className="group relative"
                  onMouseEnter={() => selectOemRange(activeOemRange)}
                >
                  <NavLink
                    to="/seal-kit"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Seal Kit
                    <HiChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <div className="invisible absolute left-0 top-full z-50 mt-3 flex min-w-[680px] rounded-md border border-slate-200 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-40 border-r border-slate-200 py-1">
                      {oemRanges.map((range) => (
                        <li key={range.id}>
                          <button
                            type="button"
                            onMouseEnter={() => selectOemRange(range.name)}
                            onFocus={() => selectOemRange(range.name)}
                            className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs font-medium transition-colors ${activeOemRange === range.name ? "bg-slate-50 text-[#9a6900]" : "text-slate-700 hover:bg-slate-50 hover:text-[#9a6900]"}`}
                          >
                            {range.title || range.name}
                            <span>›</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <ul className="w-40 border-r border-slate-200 py-1">
                      {rangeOems.map((oem) => (
                        <li key={oem.id}>
                          <button
                            type="button"
                            onMouseEnter={() => selectOem(oem.name)}
                            onFocus={() => selectOem(oem.name)}
                            className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs font-medium transition-colors ${activeOemSlug === oem.name ? "bg-slate-50 text-[#9a6900]" : "text-slate-700 hover:bg-slate-50 hover:text-[#9a6900]"}`}
                          >
                            {oem.title || oem.name}
                            <span>›</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <ul className="w-40 border-r border-slate-200 py-1">
                      {activeOem?.children?.map((product) => (
                        <li key={product.id}>
                          {product.post ? (
                            <Link
                              to={`/seals/${product.post.slug}`}
                              onMouseEnter={() => setActiveProductSlug(product.name)}
                              onFocus={() => setActiveProductSlug(product.name)}
                              className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs font-medium transition-colors ${activeProductSlug === product.name ? "bg-slate-50 text-[#9a6900]" : "text-slate-700 hover:bg-slate-50 hover:text-[#9a6900]"}`}
                            >
                              {product.title || product.post.title}
                              <span>›</span>
                            </Link>
                          ) : (
                            <button
                              type="button"
                              onMouseEnter={() => setActiveProductSlug(product.name)}
                              onFocus={() => setActiveProductSlug(product.name)}
                              className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs font-medium transition-colors ${activeProductSlug === product.name ? "bg-slate-50 text-[#9a6900]" : "text-slate-700 hover:bg-slate-50 hover:text-[#9a6900]"}`}
                            >
                              {product.title || product.name}
                              <span>›</span>
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                    <ul className="w-48 py-1">
                      {activeProduct?.children?.map((item) => (
                        <li key={item.id}>
                          {item.post ? (
                            <Link
                              to={`/seals/${item.post.slug}`}
                              className="block px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]"
                            >
                              {item.title || item.post.title}
                            </Link>
                          ) : (
                            <span className="block px-3 py-2 text-xs font-medium text-slate-400">
                              {item.title}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="group relative">
                  <NavLink
                    to="/shop?search=seal"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Seals
                    <HiChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <ul className="invisible absolute left-0 top-full z-50 mt-3 w-56 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <li>
                      <Link
                        to="/oil-seal"
                        className="block px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]"
                      >
                        Different Type of Seals
                      </Link>
                    </li>
                    <li className="group/rod relative">
                      <Link
                        to="/oil-seal"
                        className="flex items-center justify-between border-y border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]"
                      >
                        Rod & Piston Seals
                        <span>›</span>
                      </Link>
                      <ul className="invisible absolute left-full top-0 z-50 ml-1 w-56 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover/rod:visible group-hover/rod:opacity-100 group-focus-within/rod:visible group-focus-within/rod:opacity-100">
                        <li className="group/hydraulic relative">
                          <Link to="/seals/hydraulic-cylinder" className="flex items-center justify-between border-b border-slate-200 px-3 py-2 text-xs font-medium uppercase leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Seal Kits for Hydraulic Cylinder
                            <span>›</span>
                          </Link>
                          <ul className="invisible absolute left-full top-0 z-50 ml-1 w-40 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover/hydraulic:visible group-hover/hydraulic:opacity-100 group-focus-within/hydraulic:visible group-focus-within/hydraulic:opacity-100">
                            <li>
                              <Link to="/seals/rod-seal" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium uppercase text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                                Rod Seal
                              </Link>
                            </li>
                            <li>
                              <Link to="/seals/wipers" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium uppercase text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                                Wiper
                              </Link>
                            </li>
                            <li>
                              <Link to="/seals/o-ring" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium uppercase text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                                O-Ring
                              </Link>
                            </li>
                            <li>
                              <Link to="/seals/wear-ring-guide-strip" className="block px-3 py-2 text-xs font-medium uppercase leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                                Wear Ring / Guide Strip
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="group/types relative">
                          <Link to="/seals/types-of-seals" className="flex items-center justify-between border-b border-slate-200 px-3 py-2 text-xs font-medium uppercase leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Types of Seals for Different Usage | A2Z Seals
                            <span>›</span>
                          </Link>
                          <ul className="invisible absolute left-full top-0 z-50 ml-1 w-44 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover/types:visible group-hover/types:opacity-100 group-focus-within/types:visible group-focus-within/types:opacity-100">
                            <li>
                              <Link to="/seals/tilt-lift-blade" className="block px-3 py-2 text-xs font-medium leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                                Tilt Lift Blade Seal Kit | A2Z SEALS
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/seals/pneumatic-cylinder" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium uppercase leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Pneumatic Cylinder | Best Seals Trader – A2Z Seals
                          </Link>
                        </li>
                        <li>
                          <Link to="/seals/double-acting-piston-seals" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium uppercase leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Double Acting Piston Seals
                          </Link>
                        </li>
                        <li>
                          <Link to="/seals/vee-pack" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Vee Pack Seals
                          </Link>
                        </li>
                        <li>
                          <Link to="/seals/rock-breaker-azs-seal-kits" className="block px-3 py-2 text-xs font-medium uppercase leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Rock Breaker AZS Seal Kits | A Leading Assembler
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/seals/kastas" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Kastas Seals
                      </Link>
                    </li>
                    <li>
                      <Link to="/seals/uhs-uns-unr-un" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Rod Seals
                      </Link>
                    </li>
                    <li>
                      <Link to="/seals/parker-seals" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Parker Seals | A2Z Seals – A Leading Seal Kits Trader
                      </Link>
                    </li>
                    <li>
                      <Link to="/seals/nok-seals" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Nok | Nok Seal | What are Nok Seals? | A2Z SEALS
                      </Link>
                    </li>
                    <li>
                      <Link to="/seals/parker-oring-kit" className="block px-3 py-2 text-xs font-medium leading-4 text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Parker ORing Kit | Kit 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | A2Z SEALS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <NavLink
                    to="/shop?search=oil%20seal"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Oil Seal
                    <HiChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <ul className="invisible absolute left-0 top-full z-50 mt-3 w-56 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <li>
                      <Link
                        to="/shop?search=seal%20kit%20oil%20seal"
                        className="block border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]"
                      >
                        Seal Kits and Oil Seals
                      </Link>
                    </li>
                    <li className="group/shaft-one relative">
                      <Link
                        to="/shop?search=oil%20seal%20shaft%20seal"
                        className="flex items-center justify-between border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]"
                      >
                        OIL SEAL/SHAFT SEAL 1
                        <span>›</span>
                      </Link>
                      <ul className="invisible absolute left-full top-0 z-50 ml-1 w-44 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover/shaft-one:visible group-hover/shaft-one:opacity-100 group-focus-within/shaft-one:visible group-focus-within/shaft-one:opacity-100">
                        <li>
                          <Link to="/shop?search=oil%20seal" className="block px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Oil Seals
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop?search=shaft%20seal" className="block px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Shaft Seals
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="group/shaft-two relative">
                      <Link
                        to="/shop?search=oil%20seal%20shaft%20seal"
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]"
                      >
                        OIL SEAL/SHAFT SEAL 2
                        <span>›</span>
                      </Link>
                      <ul className="invisible absolute left-full top-0 z-50 ml-1 w-44 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover/shaft-two:visible group-hover/shaft-two:opacity-100 group-focus-within/shaft-two:visible group-focus-within/shaft-two:opacity-100">
                        <li>
                          <Link to="/shop?search=oil%20seal" className="block px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Oil Seals
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop?search=shaft%20seal" className="block px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                            Shaft Seals
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    List
                    <HiChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </NavLink>
                  <ul className="invisible absolute left-0 top-full z-50 mt-3 w-48 rounded-md border border-slate-200 bg-white py-1 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <li>
                      <Link to="/nok-oil-seal-list" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Nok Oil Seal List
                      </Link>
                    </li>
                    <li>
                      <Link to="/oem-list" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        OEM List
                      </Link>
                    </li>
                    <li>
                      <Link to="/machines-list" className="block border-b border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Machine's List
                      </Link>
                    </li>
                    <li>
                      <Link to="/seals-profiles-list" className="block px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#9a6900]">
                        Seals Profiles List
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `nav-link-gold ${isActive ? "active text-[#9a6900]" : "text-[#111827]"} flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide hover:text-[#9a6900]`
                    }
                  >
                    Brands
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