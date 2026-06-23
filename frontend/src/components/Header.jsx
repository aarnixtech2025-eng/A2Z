import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_a2z_seals.png";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Shop",
    to: "/shop",
    children: [
      { label: "Categories", to: "/shop/categories" },
      { label: "Brands", to: "/shop/brands" },
      { label: "Machine Types", to: "/shop/machine-types" },
      { label: "OEM Models", to: "/shop/oem-models" },
      { label: "Seal Sizes", to: "/shop/seal-sizes" },
      { label: "Products", to: "/shop/products" },
    ],
  },
  { label: "Search", to: "/search" },
  { label: "Blog", to: "/blog" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-brand-600" : "text-gray-700 hover:text-brand-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="hidden bg-brand-900 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs sm:px-6 lg:px-8">
          <span className="font-medium tracking-wide">Hydraulic &amp; Oil Seal Specialists</span>
          <div className="flex items-center gap-6">
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-brand-200 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 00000 00000
            </a>
            <a href="mailto:info@a2zseals.com" className="flex items-center gap-2 hover:text-brand-200 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@a2zseals.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-brand-200 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="A2Z Seals" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <NavLink to={item.to} className={linkClass}>
                    {item.label}
                  </NavLink>
                  <div className="invisible absolute left-0 top-full z-50 w-56 rounded-xl border border-brand-100 bg-white py-3 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/admin"
              className="ml-4 rounded-xl bg-brand-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-900/30 transition-all hover:bg-brand-800 hover:scale-105"
            >
              Admin Portal
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-brand-900 hover:bg-brand-50 lg:hidden transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t border-brand-100 bg-white lg:hidden">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setShopOpen((v) => !v)}
                      className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold text-gray-900 hover:bg-brand-50 rounded-lg transition-colors"
                    >
                      {item.label}
                      <svg className={`h-4 w-4 transition-transform ${shopOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {shopOpen && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-brand-200 pl-4">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-sm font-semibold text-gray-900 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <Link
                to="/admin"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block rounded-xl bg-brand-900 px-4 py-3 text-center text-sm font-bold text-white shadow-lg"
              >
                Admin Portal
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
