import { Link } from "react-router-dom";
import logo from "../assets/logo_a2z_seals.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

const productLinks = [
  { label: "Seal Kits", to: "/shop/categories" },
  { label: "Hydraulic Seals", to: "/shop/products" },
  { label: "Oil Seals", to: "/shop/products" },
  { label: "O-Rings", to: "/shop/products" },
];

function Footer() {
  return (
    <footer className="mt-auto bg-brand-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-brand-800 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <img src={logo} alt="A2Z Seals" className="h-10 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Trusted supplier of hydraulic &amp; oil seals and seal kits for
              leading industrial machine brands since 1975.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Products</h3>
            <ul className="space-y-3 text-sm">
              {productLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Industrial Area, Kolkata, India</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+910000000000" className="text-gray-400 hover:text-white transition-colors">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@a2zseals.com" className="text-gray-400 hover:text-white transition-colors">
                  info@a2zseals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} A2Z Seals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
