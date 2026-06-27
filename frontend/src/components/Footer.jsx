import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import logo from "../assets/logo/logoform.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Catalog", to: "/catalog" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

const productLinks = [
  { label: "Hydraulic Seal Kits", to: "/products/hydraulic-seal-kits" },
  { label: "Oil Seals", to: "/products/oil-seals" },
  { label: "O-Rings", to: "/products/o-rings" },
  { label: "Floating Seals", to: "/products/floating-seals" },
  { label: "Rock Breaker Seal Kits", to: "/products/rock-breaker-seal-kits" },
  { label: "Short Seals", to: "/products/short-seals" },
  { label: "Custom Seal Kits", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="mt-auto overflow-hidden bg-[#031b3d] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Company Information */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="A2Z Seals"
                className="h-16 w-52 rounded-md bg-white object-contain p-1.5 sm:h-[72px] sm:w-60"
              />
            </Link>

            <p className="mt-5 max-w-xs text-[15px] leading-7 text-slate-300">
              A2Z Seals is a leading manufacturer, importer and exporter of
              hydraulic seal kits, O-rings and industrial sealing solutions for
              various industrial applications.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5b400] hover:text-[#031b3d]"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#linkedin"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a66c2]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base text-white transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#youtube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-base font-bold uppercase tracking-wider text-[#f5b400]">
              Products
            </h3>

            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex text-[15px] text-slate-300 transition hover:text-[#f5b400]"
                  >
                    <span className="mr-2 text-[#f5b400] transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-bold uppercase tracking-wider text-[#f5b400]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex text-[15px] text-slate-300 transition hover:text-[#f5b400]"
                  >
                    <span className="mr-2 text-[#f5b400] transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-5 text-base font-bold uppercase tracking-wider text-[#f5b400]">
              Contact Us
            </h3>

            <div className="space-y-5 text-[15px] leading-6 text-slate-300">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400]">
                  <FaMapMarkerAlt />
                </div>

                <p>
                 P-27 PRINCEP STREET, 2ND FLOOR,
                  <br />
                
Kolkata 700072, West Bengal
                </p>
              </div>

              <a
                href="tel:+919831098320"
                className="flex items-center gap-3 transition hover:text-[#f5b400]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400]">
                  <FaPhoneAlt />
                </div>

                <span>+91 9831098320</span>
              </a>

              <a
                href="mailto:a2zseals@gmail.com"
                className="flex items-center gap-3 break-all transition hover:text-[#f5b400]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400]">
                  <FaEnvelope />
                </div>

                <span>a2zseals@gmail.com</span>
              </a>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400]">
                  <FaClock />
                </div>

                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#02142f]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-sm text-slate-300 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} A2Z Seals. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="transition hover:text-[#f5b400]"
            >
              Privacy Policy
            </Link>

            <span className="text-slate-600">|</span>

            <Link
              to="/terms-conditions"
              className="transition hover:text-[#f5b400]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;