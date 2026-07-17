import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const galleryImages = [
  "/gallery/abhra1.png",
  "/gallery/cipla1.png",
  "/gallery/abhra3.png",
  "/gallery/cipla3.png",
];

const steps = [
  {
    no: "01",
    title: "Site Visit & Briefing",
    text: "We begin by understanding your space, lifestyle, and aspirations in detail.",
  },
  {
    no: "02",
    title: "Concept Development",
    text: "Mood boards, palettes and layouts that bring your vision into focus.",
  },
  {
    no: "03",
    title: "Technical Design",
    text: "Detailed 3D visuals and drawings so you see the space before it is built.",
  },
  {
    no: "04",
    title: "On-site Execution",
    text: "Skilled craftsmen deliver every detail with precision and care.",
  },
];

const colSpans = ["lg:col-span-6", "lg:col-span-6", "lg:col-span-12"];

function LandingPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    document.title = "Tanush Interiors | Designing Inspired Living";
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/services`);
        if (response.data.success && Array.isArray(response.data.data)) {
          setServices(response.data.data.filter((s) => s.status === "active").slice(0, 3));
        }
      } catch (err) {
        // Error handled silently
      }
    };
    fetchServices();
  }, []);

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
      };

  return (
    <div className="w-full bg-[#0a0a0a] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <img
            src="/hero/woman-reading.jpg"
            alt="Interior Design"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        </div>

        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
          <span className="text-[#cfcfcf] font-['Great_Vibes',cursive] text-[44px] xl:text-[56px] leading-none">
            Varada Deodhar's
          </span>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 min-h-screen flex items-center">
          <div className="max-w-[560px] pt-20 lg:pt-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-[2px] bg-[#A9A9A9]" />
              <span className="text-[#A9A9A9] text-xs font-semibold tracking-[0.25em] uppercase">
                Tanush Interiors
              </span>
            </div>

            <h1 className="text-white leading-[1.05] mb-6 font-[Georgia,'Times_New_Roman',serif] font-normal text-[44px] sm:text-[54px] md:text-[64px] lg:text-[72px]">
              Designing
              <br />
              Inspired
              <br />
              <span className="font-['Great_Vibes',cursive] text-[#f2f2f2] text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px]">
                Living.
              </span>
            </h1>

            <p className="text-white text-[15px] sm:text-[16px] font-light mb-3">
              Timeless Spaces. Thoughtfully Designed.
            </p>

            <p className="text-[#c8c8c8] text-[14px] sm:text-[15px] leading-[1.8] mb-8 max-w-[440px] font-light">
              At Tanush Interiors, we create timeless, functional spaces that
              reflect your personality and elevate everyday living.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button className="border border-white text-white px-8 py-3 text-xs sm:text-sm uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-300">
                  Explore Our Work
                </button>
              </Link>
              <Link to="/about">
                <button className="border border-white text-white px-8 py-3 text-xs sm:text-sm tracking-[1px] hover:bg-white hover:text-black transition-all duration-300">
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }}
        />
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#0a0a0a] border-y border-[#D7B25B]/15">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { num: "13+", label: "Years", sub: "Of Excellence" },
              { num: "300+", label: "Projects", sub: "Bespoke Residences" },
              { num: "100%", label: "Personal", sub: "Attention To Detail" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`py-8 text-center ${
                  i === 1 ? "border-y md:border-y-0 md:border-x border-[#D7B25B]/15" : ""
                }`}
              >
                <h3 className="text-[#D7B25B] text-[34px] md:text-[42px] leading-none font-[Georgia,serif]">
                  {s.num}
                </h3>
                <h4 className="text-white text-[20px] md:text-[24px] mt-1 font-[Georgia,serif]">
                  {s.label}
                </h4>
                <p className="uppercase tracking-[3px] text-[10px] md:text-[11px] text-gray-400 mt-2">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CURATED DESIGN SERVICES ================= */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-[#D7B25B]" />
                <span className="uppercase tracking-[4px] text-[#D7B25B] text-xs">
                  What We Do
                </span>
              </div>
              <h2 className="font-[Georgia,serif] text-white text-[36px] md:text-[52px] leading-[1.05]">
                Curated Design Services
              </h2>
            </div>
            <p className="text-gray-400 max-w-[420px] text-[15px] leading-8">
              From a single room to a complete home, every service is tailored
              to bring elegance, comfort and function into your space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {services?.map((s, index) => (
              <div
                key={s.id}
                className={`group relative overflow-hidden rounded-[20px] h-[360px] ${colSpans[index] || "lg:col-span-6"}`}
              >
                <img
                  src={s.image ? `${import.meta.env.VITE_API_URL}/uploads/${s.image}` : null}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="font-[Georgia,serif] text-white text-[26px] md:text-[32px] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/75 max-w-[480px] text-[14px] leading-7">
                    {s.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE GALLERY ================= */}
      <section className="bg-[#0a0a0a] pb-20 lg:pb-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-[Georgia,serif] text-white text-[34px] md:text-[50px]">
              The Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages?.map((img, i) => (
              <div
                key={img}
                className={`group overflow-hidden rounded-[18px] ${
                  i % 3 === 0 ? "md:col-span-1" : "md:col-span-1"
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-[260px] md:h-[320px] object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE BUILD YOUR VISION ================= */}
      <section className="bg-[#0a0a0a] pb-20 lg:pb-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-[Georgia,serif] text-white text-[34px] md:text-[48px] leading-[1.1] mb-10">
                How We Build Your
                <br />
                Vision
              </h2>

              <div className="space-y-8">
                {steps?.map((step) => (
                  <div key={step.no} className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-full border border-[#D7B25B]/40 flex items-center justify-center text-[#D7B25B] font-[Georgia,serif]">
                      {step.no}
                    </div>
                    <div>
                      <h4 className="text-white text-[18px] md:text-[20px] font-[Georgia,serif] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-[14px] leading-7 max-w-[420px]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] group">
              <img
                src="/home/home1.png"
                alt="Our Process"
                className="w-full h-[420px] lg:h-[560px] object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-[#111] py-20 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="text-[#D7B25B] text-[60px] leading-none font-[Georgia,serif] mb-4">
            &ldquo;
          </div>
          <p className="text-white/90 text-[18px] md:text-[24px] leading-[1.7] font-[Georgia,serif] italic mb-8">
            Tanush Interiors transformed our home into a space that feels
            truly ours. Every corner reflects thought, elegance and care.
          </p>
          <p className="text-[#D7B25B] font-[Georgia,serif] text-[18px]">
            Mrs. Anita Mehta
          </p>
          <p className="uppercase tracking-[3px] text-[11px] text-gray-400 mt-1">
            Homeowner
          </p>
        </div>
      </section>

      {/* ================= BEGIN YOUR JOURNEY ================= */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-[Georgia,serif] text-white text-[40px] md:text-[60px] leading-[1.05] mb-6">
                Begin Your
                <br />
                Journey.
              </h2>
              <p className="text-gray-400 text-[15px] leading-8 mb-10 max-w-[460px]">
                Ready to design a space that inspires? Share a few details and
                our team will reach out to begin crafting your dream interior.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-[480px]">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-[#D7B25B] outline-none transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-[#D7B25B] outline-none transition-colors"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-[#D7B25B] outline-none transition-colors"
                />
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-500 focus:border-[#D7B25B] outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="bg-[#D7B25B] text-black px-10 py-4 uppercase tracking-[2px] text-sm hover:bg-white transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="overflow-hidden rounded-[24px] group">
              <img
                src="/home/home2.png"
                alt="Begin your journey"
                className="w-full h-[480px] lg:h-[640px] object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;
