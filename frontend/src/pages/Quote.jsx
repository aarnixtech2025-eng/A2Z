import { useState } from "react";
import {
  FaCheckCircle,
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaQuoteLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-bold text-brand-700 shadow-sm">
            <FaQuoteLeft />
             <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-[#EA580C] sm:text-sm"
                >
                  Request a Quote
                  
                </Link>          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Get The Right Seal Solution For Your Machine
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Share your requirement with A2Z Seals. Our team will review your
            product details and contact you with the best possible quotation.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[28px] border border-brand-100 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Information Side */}
          <div className="relative overflow-hidden bg-[#031b3d] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f5b400]">
                A2Z Seals
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                Industrial Sealing Solutions You Can Trust.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                We provide hydraulic seal kits, oil seals, O-rings, floating
                seals, custom seal kits and machine-specific sealing solutions
                for industrial applications.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5b400] text-[#031b3d]">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Product Expertise</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Support for hydraulic, pneumatic and industrial seal
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5b400] text-[#031b3d]">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Custom Solutions</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Share your seal size, machine model or sample details for
                      a suitable recommendation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5b400] text-[#031b3d]">
                    <FaCheckCircle />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Fast Response</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Our team will get back to you with product availability
                      and quotation details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-sm text-slate-200 transition hover:text-[#f5b400]"
                >
                  <FaPhoneAlt className="text-[#f5b400]" />
                  +91 12345 67890
                </a>

                <a
                  href="mailto:info@a2zseals.com"
                  className="mt-4 flex items-center gap-3 text-sm text-slate-200 transition hover:text-[#f5b400]"
                >
                  <FaEnvelope className="text-[#f5b400]" />
                  info@a2zseals.com
                </a>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
                Tell Us Your Requirement
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Request Your Quote
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Fill in the details below. Fields marked with * are required.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                <FaCheckCircle className="mt-0.5 shrink-0 text-green-600" />
                <p>
                  Your quote request has been sent successfully. Our team will
                  contact you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Product Required *
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                >
                  <option value="" disabled>
                    Select product category
                  </option>
                  <option>Hydraulic Seal Kits</option>
                  <option>Oil Seals</option>
                  <option>O-Rings</option>
                  <option>Floating Seals</option>
                  <option>Rock Breaker Seal Kits</option>
                  <option>Short Seals</option>
                  <option>Custom Seal Kits</option>
                  <option>Other Industrial Seals</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-800">
                  Requirement Details *
                </label>
                <textarea
                  required
                  rows="5"
                  placeholder="Mention seal size, machine model, quantity, part number or other requirement details..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f5b400] px-5 py-4 text-sm font-extrabold uppercase tracking-wide text-[#031b3d] shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc928] hover:shadow-xl"
              >
                Send Quote Request
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;