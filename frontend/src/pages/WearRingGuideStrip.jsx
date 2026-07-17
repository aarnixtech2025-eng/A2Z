import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaPhone } from "react-icons/fa";

function WearRingGuideStrip() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Wear Ring / Guide Strip <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              At A2ZSeals, we provide a full line of wear ring or guide stripes and bearing products that fit any kind of application. Our products are available in PTFE, nylon, and composite materials.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Introduction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Wear Ring / Guide Strip Overview
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Tight tolerance, as well as, standard wear rings are made available in varying thickness, height, and cut. You can cut our wear strips to any length you prefer and use them as wear rings for pneumatic or hydraulic pistons. It is available in polyester resin/nylon material or low-friction bronze-filled PTFE strip. Our wear strips come in a variety of thicknesses and widths, and they can function in temperatures of up to twenty-five degrees.
          </p>
        </div>

        {/* Cut Ring */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Cut Ring
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Our range of cut rings is designed specifically for use in pneumatic or hydraulic piston applications. Manufacturing from Acetal resin, our rings offer high compressive strength, and low friction and reduce the problem of metal-to-metal contact.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <FaPhone className="text-[#d99600]" />
            <p className="text-sm font-bold text-[#061a38]">You can call us for more information.</p>
          </div>
        </div>

        {/* Unmatched Quality */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Unmatched Quality Seal Kits
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The Wear Ring Hydraulic Seal from A2Z Seals is a symbol of unparalleled quality. Crafted with precision and using only the finest materials, these seal kits offer exceptional sealing capabilities. Whether it's preventing leakage or safeguarding against contaminants, our seal kits provide robust and reliable solutions. Also explore the best quality CFW Oil Seals, NOK Oil Seals, and Crane Seal Kits.
          </p>
        </div>

        {/* Wide Range of Compatible Machine Models */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Wide Range of Compatible Machine Models
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Our Wear Ring Hydraulic Seal caters to a diverse range of machine models, ensuring a perfect fit for various industrial applications. From excavators to hydraulic pumps, we offer seal kits tailored to suit specific machine models. You can be confident that your machinery has been equipped with the precise sealing solution it needs.
          </p>
        </div>

        {/* Enhanced Performance */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Enhanced Performance with Oil Seal Kits
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Optimal lubrication is essential for machinery performance. A2Z Seals provides specialized Oil Seal Kits designed to maintain the right lubrication levels, reducing friction and wear. These oil seal kits not only enhance performance but also extend the operational life of your critical components.
          </p>
        </div>

        {/* Cost-Effective Pricing */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Cost-Effective and Transparent Pricing
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2Z Seals, quality doesn't come at a high price. Our Wear Ring Hydraulic Seal kits offer exceptional value for money. We believe in transparent pricing, ensuring you know exactly what you're paying for. Our cost-effective solutions are designed to deliver top-quality performance without breaking the bank.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Features
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Features
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Multiple Materials</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Available in PTFE, nylon, and composite materials for various applications.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Customizable</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Can be cut to any length you prefer for specific requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">High Compressive Strength</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Acetal resin construction offers excellent strength and durability.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Low Friction</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Reduces metal-to-metal contact and minimizes wear.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Temperature Resistant</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Functions in temperatures of up to twenty-five degrees.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-[#d99600]" />
                <h3 className="text-lg font-extrabold text-[#061a38]">Versatile Applications</h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                Suitable for pneumatic or hydraulic piston applications.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Conclusion
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The Wear Ring Hydraulic Seal by A2Z Seals embodies reliability, performance, and affordability. Our superior seal kits safeguard your machinery's efficiency, minimize downtime, and maximize your investment. Trust A2Z Seals for the ultimate sealing solutions that redefine the performance of your machinery.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Wear Ring / Guide Strip?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your wear ring requirements, machine model or part number. Our team will help you find the correct wear ring for your equipment.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            Request a Quote
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WearRingGuideStrip;
