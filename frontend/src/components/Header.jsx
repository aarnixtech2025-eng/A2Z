import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronRight,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../assets/logo/logoform.png";

/* =========================
   DROPDOWN MENU DATA
========================= */

const homeItems = [
  { label: "About Us", to: "/about" },
  { label: "Disclaimer", to: "/disclaimer" },
];

const sealKitItems = [
  { label: "OEM A - E", to: "/shop/oem-models?range=a-e", hasArrow: true },
  { label: "OEM F - J", to: "/shop/oem-models?range=f-j", hasArrow: true },
  { label: "OEM K - P", to: "/shop/oem-models?range=k-p", hasArrow: true },
  { label: "OEM Q - U", to: "/shop/oem-models?range=q-u", hasArrow: true },
  { label: "OEM V - Z", to: "/shop/oem-models?range=v-z", hasArrow: true },
];

const rodPistonSealSubItems = [
  {
    label: "SEAL KITS FOR HYDRAULIC CYLINDER",
    to: "/hydraulic-cylinder-seal-kits",
    hasArrow: true,
    subItems: [
      { label: "ROD SEAL", to: "/rod-seal" },
      { label: "WIPER", to: "/wiper-seal" },
      { label: "O-RING", to: "/o-ring" },
      { label: "WEAR RING / GUIDE STRIP", to: "/wear-ring-guide-strip" },
    ],
  },
  {
    label: "TYPES OF SEALS FOR DIFFERENT USAGE | A2Z SEALS",
    to: "/types-of-seals-different-usage",
    hasArrow: true,
    subItems: [
      {
        label: "TILT LIFT BLADE Seal Kit | A2Z SEALS",
        to: "/tilt-lift-blade-seal-kit",
      },
    ],
  },
  {
    label: "PNEUMATIC CYLINDER | Best Seals Trader – A2Z Seals",
    to: "/pneumatic-cylinder",
  },
  {
    label: "DOUBLE ACTING PISTON SEALS",
    to: "/double-acting-piston-seals",
  },
  {
    label: "Vee Pack Seals",
    to: "/vee-pack-seals",
  },
  {
    label: "ROCK BREAKER AZS SEAL KITS",
    to: "/rock-breaker-seal-kits",
  },
];

const sealsItems = [
  { label: "Different Type of Seals", to: "/shop/categories" },
  {
    label: "Rod & Piston Seals",
    to: "/seal-kits-info",
    hasArrow: true,
    subItems: rodPistonSealSubItems,
  },
  { label: "Kastas Seals", to: "/kastas" },
  { label: "Rod Seals", to: "/brands/rod-seals" },
  {
    label: "Parker Seals | A2Z Seals – A Leading Seal Kits Trader",
    to: "/brands/parker-seals",
  },
  {
    label: "Nok | Nok Seal | What are Nok Seals? | A2Z SEALS",
    to: "/brands/nok-seals",
  },
  {
    label: "Parker ORing Kit | Kit 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | A2Z SEALS",
    to: "/brands/parker-o-ring-kit",
  },
];

const oilSealItems = [
  { label: "Seal Kits and Oil Seals", to: "/seal-kits-and-oil-seals" },
  {
    label: "OIL SEAL/SHAFT SEAL 1",
    to: "/brands/oil-seal-shaft-seal-1",
    hasArrow: true,
    subItems: [
      { label: "SOG | Why Sog Oil Seal ? | Sog Oil Seal Catalogue | SOG Oil Seal – High-Quality Sealing Solutions by A2ZSeals", to: "/brands/sog-seals" },
      { label: "TTO OIL SEALS | Get Optimal Sealing Performance | A2Z Seals", to: "/brands/tto-seals" },
      { label: "NAK | NAK Oil Seal – Quality Sealing Solutions by A2ZSeals", to: "/brands/nak-seals" },
      { label: "CHR | CHR OIL SEAL | High-Quality CHR Oil Seal – Get Yours Now at A2Z Seals!", to: "/brands/chr-seals" },
    ],
  },
  {
    label: "OIL SEAL/SHAFT SEAL 2",
    to: "/brands/oil-seal-shaft-seal-2",
    hasArrow: true,
    subItems: [
      { label: "CFW | Why Cfw Oil Seal ? | Buy CFW Oil Seal | A2Z Seals for Machinery and Industrial Use", to: "/brands/cfw" },
      { label: "Nok | Nok Seal | What are Nok Seals ? | A2Z SEALS", to: "/brands/nok-seals" },
      { label: "Nok Oil Seals", to: "/list/nok-oil-seal" },
      { label: "Parker Oil Seal | Best Quality Oil Seal Kits Provider", to: "/brands/parker-seals" },
      { label: "CR Oil Seal National – The Perfect Sealing Solution by A2ZSeals", to: "/list/cr-oil-seal" },
      { label: "NDK | NDK Oil Seal – Premium Sealing Solutions by A2ZSeals", to: "/list/ndk-oil-seal" },
      { label: "TCK | TCK Oil Seal – Superior Sealing Performance by A2ZSeals", to: "/brands/tck" },
    ],
  },
];

const shopItems = [
  { label: "My Account", to: "/login" },
  { label: "Cart", to: "/cart" },
  { label: "Checkout", to: "/checkout" },
  {
    label: "Supply Terms & Conditions",
    to: "/terms-conditions",
  },
];

const listItems = [
  { label: "Nok Oil Seal List", to: "/list/nok-oil-seal" },
  { label: "OEM List", to: "/list/oem" },
  { label: "Machine's List", to: "/list/machines" },
  { label: "Seals Profiles List", to: "/list/seal-profiles" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileMenu("");
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const keyword = searchValue.trim();

    if (!keyword) return;

    navigate(`/search?query=${encodeURIComponent(keyword)}`);
    setSearchValue("");
    closeMobileMenu();
  };

  /* Main Navbar Links */
  const navLinkClass = ({ isActive }) =>
    `group relative flex h-full items-center gap-1.5 whitespace-nowrap px-3 py-3 text-[15px] font-bold transition-all duration-300 ${
      isActive
        ? "text-brand-700"
        : "text-slate-700 hover:text-[#e5a600]"
    }`;

  /* Desktop Dropdown */
  const Dropdown = ({ label, to, items }) => (
    <div className="group relative flex h-full items-center">
      <NavLink to={to} className={navLinkClass}>
        {label}

        <FaChevronDown className="mt-0.5 text-[9px] transition-transform duration-300 group-hover:rotate-180" />

        {/* Yellow underline */}
        <span className="absolute bottom-[16px] left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-[#f5b400] transition-transform duration-300 group-hover:scale-x-100" />
      </NavLink>

      <div className="invisible absolute left-0 top-full z-50 w-[250px] translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_15px_35px_rgba(15,23,42,0.16)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <div
            key={item.label}
            className={`relative ${item.subItems ? 'group/sub' : ''}`}
          >
            <NavLink
              to={item.to}
              className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 text-[13px] font-medium leading-5 text-slate-700 transition-all duration-200 last:border-b-0 hover:bg-brand-50 hover:text-brand-700"
            >
              <span>{item.label}</span>

              {item.hasArrow && (
                <FaChevronRight className="ml-3 shrink-0 text-[10px] text-slate-500" />
              )}
            </NavLink>

            {/* Nested Submenu */}
            {item.subItems && (
              <div className="invisible absolute left-full top-0 z-[60] w-[250px] -translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_15px_35px_rgba(15,23,42,0.16)] transition-all duration-200 group-hover/sub:visible group-hover/sub:translate-y-0 group-hover/sub:opacity-100">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.label}
                    className={`relative ${subItem.subItems ? 'group/sub-sub' : ''}`}
                  >
                    <NavLink
                      to={subItem.to}
                      className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 text-[13px] font-medium leading-5 text-slate-700 transition-all duration-200 last:border-b-0 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span>{subItem.label}</span>

                      {subItem.hasArrow && (
                        <FaChevronRight className="ml-3 shrink-0 text-[10px] text-slate-500" />
                      )}
                    </NavLink>

                    {/* Third Level Submenu */}
                    {subItem.subItems && (
                      <div className="invisible absolute left-full top-0 z-[70] w-[250px] -translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_15px_35px_rgba(15,23,42,0.16)] transition-all duration-200 group-hover/sub-sub:visible group-hover/sub-sub:translate-y-0 group-hover/sub-sub:opacity-100">
                        {subItem.subItems.map((thirdItem) => (
                          <NavLink
                            key={thirdItem.label}
                            to={thirdItem.to}
                            className="block border-b border-slate-100 px-3 py-2.5 text-[13px] font-medium leading-5 text-slate-700 transition-all duration-200 last:border-b-0 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {thirdItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  /* Mobile Dropdown */
  const MobileDropdown = ({ label, items }) => {
    const isOpen = openMobileMenu === label;
    const [openSubItem, setOpenSubItem] = useState("");
    const [openSubSubItem, setOpenSubSubItem] = useState("");

    return (
      <div className="border-b border-slate-100">
        <button
          type="button"
          onClick={() => {
            setOpenMobileMenu(isOpen ? "" : label);
            setOpenSubItem("");
            setOpenSubSubItem("");
          }}
          className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-left text-[16px] font-bold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
        >
          {label}

          <FaChevronDown
            className={`text-xs transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="mb-3 ml-4 border-l-2 border-[#f5b400] pl-3">
            {items.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setOpenSubItem(openSubItem === item.label ? "" : item.label);
                        setOpenSubSubItem("");
                      }}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span>{item.label}</span>
                      <FaChevronRight
                        className={`ml-3 shrink-0 text-xs transition-transform duration-300 ${
                          openSubItem === item.label ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {openSubItem === item.label && (
                      <div className="ml-4 mt-2 border-l-2 border-slate-300 pl-3">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.label}>
                            {subItem.subItems ? (
                              <div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setOpenSubSubItem(
                                      openSubSubItem === subItem.label ? "" : subItem.label
                                    );
                                  }}
                                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                                >
                                  <span>{subItem.label}</span>
                                  <FaChevronRight
                                    className={`ml-3 shrink-0 text-xs transition-transform duration-300 ${
                                      openSubSubItem === subItem.label ? "rotate-90" : ""
                                    }`}
                                  />
                                </button>

                                {openSubSubItem === subItem.label && (
                                  <div className="ml-4 mt-2 border-l-2 border-slate-300 pl-3">
                                    {subItem.subItems.map((thirdItem) => (
                                      <NavLink
                                        key={thirdItem.label}
                                        to={thirdItem.to}
                                        onClick={closeMobileMenu}
                                        className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                                      >
                                        {thirdItem.label}
                                      </NavLink>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <NavLink
                                key={subItem.label}
                                to={subItem.to}
                                onClick={closeMobileMenu}
                                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                              >
                                <span>{subItem.label}</span>
                                {subItem.hasArrow && (
                                  <FaChevronRight className="ml-3 shrink-0 text-xs" />
                                )}
                              </NavLink>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    <span>{item.label}</span>

                    {item.hasArrow && (
                      <FaChevronRight className="ml-3 shrink-0 text-xs" />
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[70px] max-w-[1550px] items-center gap-3 px-3 sm:h-[75px] sm:gap-4 sm:px-5 lg:h-[82px] lg:gap-4 lg:px-6">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex h-full shrink-0 items-center"
        >
          <img
            src={logo}
            alt="A2Z Seals"
            className="h-[45px] w-[170px] object-contain sm:h-[50px] sm:w-[190px] lg:h-[55px] lg:w-[210px] xl:h-[62px] xl:w-[235px]"
          />
        </Link>

        {/* DESKTOP SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          className="hidden w-[150px] shrink-0 lg:block lg:w-[205px] xl:w-[270px]"
        >
          <div className="group flex h-9 items-center rounded-full border border-slate-200 bg-slate-50 px-3 shadow-sm transition-all duration-300 hover:border-[#f5b400] hover:bg-white hover:shadow-md focus-within:border-brand-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-100 lg:h-10">
            <FaSearch className="mr-2 text-[12px] text-slate-400 transition-colors group-focus-within:text-brand-600 lg:mr-2.5 lg:text-[13px]" />

            <input
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent text-[11px] font-medium text-slate-700 outline-none placeholder:font-normal placeholder:text-slate-400 lg:text-[12px]"
            />

            <button
              type="submit"
              aria-label="Search"
              className="ml-1.5 flex h-6 w-7 shrink-0 items-center justify-center rounded-full bg-brand-900 text-[11px] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#f5b400] hover:text-brand-900 active:scale-95 lg:ml-2 lg:h-7 lg:w-8 lg:text-[12px]"
            >
              <FaSearch />
            </button>
          </div>
        </form>

        {/* DESKTOP NAVBAR */}
        <nav className="ml-auto hidden h-full items-center xl:flex">
          <Dropdown label="Home" to="/" items={homeItems} />

          <Dropdown
            label="Seal Kit"
            to="/shop/categories"
            items={sealKitItems}
          />

          <Dropdown
            label="Seals"
            to="/shop/products"
            items={sealsItems}
          />

          <Dropdown
            label="Oil Seal"
            to="/shop/products"
            items={oilSealItems}
          />

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
            <span className="absolute bottom-[16px] left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-[#f5b400] transition-transform duration-300 hover:scale-x-100" />
          </NavLink>

          <Dropdown label="Shop" to="/shop" items={shopItems} />

          <NavLink to="/blog" className={navLinkClass}>
            Blog
            <span className="absolute bottom-[16px] left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-[#f5b400] transition-transform duration-300 hover:scale-x-100" />
          </NavLink>

          <Dropdown label="List" to="/shop/categories" items={listItems} />

          {/* GET QUOTE BUTTON */}
          <Link
            to="/quote"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-[#f5b400] px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide text-brand-900 shadow-[0_5px_12px_rgba(245,180,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc928] hover:shadow-[0_8px_18px_rgba(245,180,0,0.38)] active:translate-y-0 lg:px-3.5 lg:py-2.5 lg:text-[11px]"
          >
            Get Quote
            <FaArrowRight className="text-[9px] lg:text-[10px]" />
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((value) => !value)}
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-lg text-brand-900 transition hover:bg-brand-50 lg:h-10 lg:w-10 lg:text-xl xl:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE NAVBAR */}
      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-3 py-4 shadow-xl sm:px-4 xl:hidden">
          {/* MOBILE SEARCH */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="group flex h-10 items-center rounded-full border border-slate-200 bg-slate-50 px-3 transition focus-within:border-brand-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-100">
              <FaSearch className="mr-2.5 text-[13px] text-slate-400 group-focus-within:text-brand-600" />

              <input
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                aria-label="Search"
                className="ml-2 flex h-7 w-8 items-center justify-center rounded-full bg-brand-900 text-[12px] text-white"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          <MobileDropdown label="Home" items={homeItems} />
          <MobileDropdown label="Seal Kit" items={sealKitItems} />
          <MobileDropdown label="Seals" items={sealsItems} />
          <MobileDropdown label="Oil Seal" items={oilSealItems} />

          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className="block border-b border-slate-100 px-3 py-3 text-[15px] font-bold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 sm:py-3.5 sm:text-[16px]"
          >
            Contact Us
          </NavLink>

          <MobileDropdown label="Shop" items={shopItems} />

          <NavLink
            to="/blog"
            onClick={closeMobileMenu}
            className="block border-b border-slate-100 px-3 py-3 text-[15px] font-bold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 sm:py-3.5 sm:text-[16px]"
          >
            Blog
          </NavLink>

          <MobileDropdown label="List" items={listItems} />

          {/* MOBILE GET QUOTE */}
          <Link
            to="/quote"
            onClick={closeMobileMenu}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#f5b400] px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-brand-900 shadow-md transition hover:bg-[#ffc928] sm:py-3.5"
          >
            Get Quote
            <FaArrowRight />
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;