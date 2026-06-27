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

const sealsItems = [
  { label: "Different Type of Seals", to: "/shop/categories" },
  {
    label: "Rod & Piston Seals",
    to: "/shop/products?type=rod-piston",
    hasArrow: true,
  },
  { label: "Kastas Seals", to: "/shop/products?brand=kastas" },
  { label: "Rod Seals", to: "/shop/products?type=rod-seals" },
  {
    label: "Parker Seals | A2Z Seals – A Leading Seal Kits Trader",
    to: "/shop/products?brand=parker",
  },
  {
    label: "Nok | Nok Seal | What are Nok Seals? | A2Z SEALS",
    to: "/shop/products?brand=nok",
  },
  {
    label: "Parker ORing Kit | Kit 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | A2Z SEALS",
    to: "/shop/products?type=o-ring-kit",
  },
];

const oilSealItems = [
  { label: "Seal Kits and Oil Seals", to: "/shop/categories" },
  {
    label: "OIL SEAL/SHAFT SEAL 1",
    to: "/shop/products?oil-seal=1",
    hasArrow: true,
  },
  {
    label: "OIL SEAL/SHAFT SEAL 2",
    to: "/shop/products?oil-seal=2",
    hasArrow: true,
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
          <NavLink
            key={item.label}
            to={item.to}
            className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 text-[13px] font-medium leading-5 text-slate-700 transition-all duration-200 last:border-b-0 hover:bg-brand-50 hover:text-brand-700"
          >
            <span>{item.label}</span>

            {item.hasArrow && (
              <FaChevronRight className="ml-3 shrink-0 text-[10px] text-slate-500" />
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );

  /* Mobile Dropdown */
  const MobileDropdown = ({ label, items }) => {
    const isOpen = openMobileMenu === label;

    return (
      <div className="border-b border-slate-100">
        <button
          type="button"
          onClick={() => setOpenMobileMenu(isOpen ? "" : label)}
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
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-[82px] max-w-[1550px] items-center gap-4 px-3 sm:px-5 lg:px-6">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex h-full shrink-0 items-center"
        >
          <img
            src={logo}
            alt="A2Z Seals"
            className="h-[55px] w-[210px] object-contain lg:h-[62px] lg:w-[235px]"
          />
        </Link>

        {/* DESKTOP SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          className="hidden w-[205px] shrink-0 lg:block xl:w-[270px]"
        >
          <div className="group flex h-10 items-center rounded-full border border-slate-200 bg-slate-50 px-3 shadow-sm transition-all duration-300 hover:border-[#f5b400] hover:bg-white hover:shadow-md focus-within:border-brand-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-100">
            <FaSearch className="mr-2.5 text-[13px] text-slate-400 transition-colors group-focus-within:text-brand-600" />

            <input
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-[12px] font-medium text-slate-700 outline-none placeholder:font-normal placeholder:text-slate-400"
            />

            <button
              type="submit"
              aria-label="Search"
              className="ml-2 flex h-7 w-8 shrink-0 items-center justify-center rounded-full bg-brand-900 text-[12px] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#f5b400] hover:text-brand-900 active:scale-95"
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
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg bg-[#f5b400] px-3.5 py-2.5 text-[11px] font-extrabold uppercase tracking-wide text-brand-900 shadow-[0_5px_12px_rgba(245,180,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc928] hover:shadow-[0_8px_18px_rgba(245,180,0,0.38)] active:translate-y-0"
          >
            Get Quote
            <FaArrowRight className="text-[10px]" />
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((value) => !value)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-xl text-brand-900 transition hover:bg-brand-50 xl:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE NAVBAR */}
      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl xl:hidden">
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
            className="block border-b border-slate-100 px-3 py-3.5 text-[16px] font-bold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
          >
            Contact Us
          </NavLink>

          <MobileDropdown label="Shop" items={shopItems} />

          <NavLink
            to="/blog"
            onClick={closeMobileMenu}
            className="block border-b border-slate-100 px-3 py-3.5 text-[16px] font-bold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
          >
            Blog
          </NavLink>

          <MobileDropdown label="List" items={listItems} />

          {/* MOBILE GET QUOTE */}
          <Link
            to="/quote"
            onClick={closeMobileMenu}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#f5b400] px-4 py-3.5 text-sm font-extrabold uppercase tracking-wide text-brand-900 shadow-md transition hover:bg-[#ffc928]"
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