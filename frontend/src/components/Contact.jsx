import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

import contactIndustrial from "../assets/logo/conttt.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Later you can connect this with backend API here.
    console.log("Inquiry Data:", formData);

    setShowSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <main className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-brand-50/30">
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white py-14 sm:py-16">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            <FaPaperPlane />
            Contact A2Z Seals
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
            Let’s Build Better{" "}
            <span className="text-brand-600">Sealing Solutions</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Speak with our sealing experts for hydraulic seal kits, oil seals,
            O-rings, custom sealing requirements and industrial machine support.
          </p>
        </div>
      </section>

      {/* Main Contact Card */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] lg:grid-cols-[1.02fr_0.98fr]">
            {/* Left Side - Image + Company Details */}
            <div className="relative min-h-[620px] overflow-hidden lg:min-h-full">
              <img
                src={contactIndustrial}
                alt="A2Z Seals Industrial Solutions"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/85 to-slate-950/80" />

              {/* Decorative circles */}
              <div className="absolute -left-16 top-10 h-44 w-44 rounded-full border border-white/10 bg-white/5" />
              <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border border-yellow-300/20 bg-yellow-400/10" />

              <div className="relative z-10 flex h-full flex-col justify-between p-7 text-white sm:p-10 lg:p-12">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-300 backdrop-blur-md">
                    <FaIndustry />
                    Industrial Sealing Experts
                  </span>

                  <h2 className="mt-6 max-w-lg text-3xl font-extrabold leading-tight sm:text-4xl">
                    Reliable Seals For Every Industrial Challenge.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                    A2Z Seals is a trusted manufacturer, importer and exporter
                    of hydraulic seals, oil seals, seal kits and O-rings for
                    construction machinery, mining equipment, cement plants,
                    steel industries and hydraulic systems.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-2xl font-extrabold text-yellow-300">
                        50+
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-200">
                        Industrial Product Categories
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                      <p className="text-2xl font-extrabold text-yellow-300">
                        1975
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-200">
                        Trusted Since
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mt-10 space-y-3">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-brand-950 shadow-lg">
                      <FaMapMarkerAlt />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                        Visit Us
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                       P-27 PRINCEP STREET, 2ND FLOOR,
KOLKATA 700072, INDIA
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+91-98310 98320"
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/20"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-brand-950 shadow-lg">
                      <FaPhoneAlt />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                        Call Us
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        +91-98310 98320
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto: a2zseals@gmail.com"
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition hover:bg-white/20"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-brand-950 shadow-lg">
                      <FaEnvelope />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                        Email Us
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                         a2zseals@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative bg-white p-7 sm:p-10 lg:p-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-brand-50" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800">
                  <FaPaperPlane className="text-brand-600" />
                  Get In Touch
                </span>

                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
                  Send Us A Message
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
                  Tell us what you need. Our team will help you find the right
                  industrial sealing solution for your machinery.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-slate-800"
                      >
                        Full Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold text-slate-800"
                      >
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00000 00000"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Your Requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Example: I need hydraulic seal kits for JCB / excavator machine..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-brand-900 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-brand-900/25 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-xl"
                  >
                    Send Message
                    <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>

                  <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                    <FaShieldAlt className="text-brand-600" />
                    Your inquiry details are safe with A2Z Seals.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About A2Z Industry Section */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-brand-100 bg-brand-50/70 p-7 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900 text-2xl text-yellow-400 shadow-lg">
                <FaIndustry />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-600">
                  A2Z Industrial Solutions
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-brand-900 sm:text-3xl">
                  Sealing Performance That Keeps Your Machines Moving
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                  From hydraulic cylinders to heavy machinery, A2Z Seals
                  supplies dependable sealing components that reduce leakage,
                  improve equipment performance and support long-term machine
                  reliability.
                </p>
              </div>

              <a
                href="tel:+910000000000"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-brand-950 shadow-md transition-all hover:-translate-y-1 hover:bg-yellow-300"
              >
                Talk To An Expert
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[28px] bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              <FaCheckCircle />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-brand-900">
              Inquiry Sent Successfully!
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Your inquiry has been sent successfully. We will get back to you
              soon.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-6 rounded-xl bg-brand-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contact;