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
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-5 sm:py-5 md:px-6 lg:px-8 lg:py-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr_1.3fr] lg:gap-5">
          {/* Company Information */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="A2Z Seals"
                className="h-10 w-36 rounded-md bg-white object-contain p-1 sm:h-12 sm:w-40 md:h-14 md:w-44"
              />
            </Link>

            <p className="mt-2 max-w-xs text-[11px] leading-4 text-slate-300 sm:mt-3 sm:text-[12px] sm:leading-5">
              A2Z Seals is a leading manufacturer, importer and exporter of
              hydraulic seal kits, O-rings and industrial sealing solutions for
              various industrial applications.
            </p>

            {/* Social Icons */}
            <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-2.5">
              <a
                href="#facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5b400] hover:text-[#031b3d] sm:h-8 sm:w-8 sm:text-sm"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#linkedin"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a66c2] sm:h-8 sm:w-8 sm:text-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 sm:h-8 sm:w-8 sm:text-sm"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="#youtube"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 sm:h-8 sm:w-8 sm:text-sm"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#f5b400] sm:mb-3 sm:text-xs">
              Products
            </h3>

            <ul className="space-y-1 sm:space-y-1.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex text-[11px] text-slate-300 transition hover:text-[#f5b400] sm:text-[12px]"
                  >
                    <span className="mr-1.5 text-[#f5b400] transition-transform duration-300 group-hover:translate-x-1">
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
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#f5b400] sm:mb-3 sm:text-xs">
              Quick Links
            </h3>

            <ul className="space-y-1 sm:space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex text-[11px] text-slate-300 transition hover:text-[#f5b400] sm:text-[12px]"
                  >
                    <span className="mr-1.5 text-[#f5b400] transition-transform duration-300 group-hover:translate-x-1">
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
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#f5b400] sm:mb-3 sm:text-xs">
              Contact Us
            </h3>

            <div className="space-y-2 text-[11px] leading-4 text-slate-300 sm:space-y-2.5 sm:text-[12px]">
              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400] sm:h-7 sm:w-7">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-[10px] sm:text-[12px]">
                  Plot No. 123, MIDC, Chakan,
                  <br />
                  Pune – 410501, Maharashtra, India
                </p>
              </div>

              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 transition hover:text-[#f5b400] sm:gap-2.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400] sm:h-7 sm:w-7">
                  <FaPhoneAlt />
                </div>

                <span className="text-[10px] sm:text-[12px]">+91 12345 67890</span>
              </a>

              <a
                href="mailto:info@a2zseals.com"
                className="flex items-center gap-2 break-all transition hover:text-[#f5b400] sm:gap-2.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400] sm:h-7 sm:w-7">
                  <FaEnvelope />
                </div>

                <span className="text-[10px] sm:text-[12px]">info@a2zseals.com</span>
              </a>

              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#f5b400] sm:h-7 sm:w-7">
                  <FaClock />
                </div>

                <p className="text-[10px] sm:text-[12px]">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Get In Touch Form */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#f5b400] sm:mb-3 sm:text-xs">
              Get In Touch
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-1.5 sm:gap-2"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-white placeholder:text-slate-400 outline-none focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400] sm:px-3 sm:py-2 sm:text-xs"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-white placeholder:text-slate-400 outline-none focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400] sm:px-3 sm:py-2 sm:text-xs"
              />

              <textarea
                rows={2}
                placeholder="Your Message"
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-white placeholder:text-slate-400 outline-none focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400] resize-none sm:px-3 sm:py-2 sm:text-xs"
              />

              <button
                type="submit"
                className="mt-0.5 rounded-md bg-[#f5b400] py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-[#031b3d] transition hover:bg-yellow-300 sm:py-2 sm:text-xs"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#02142f]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 px-4 py-2 text-[10px] text-slate-300 sm:flex-row sm:gap-2 sm:px-5 sm:py-2 sm:text-xs md:px-6 lg:px-8">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} A2Z Seals. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
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