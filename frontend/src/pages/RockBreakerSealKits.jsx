import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaDownload } from "react-icons/fa";

const rockBreakerBrands = [
  "DAEMO",
  "SOOSAN",
  "ATLAS",
  "COPCO",
  "FURUKWA",
  "KRUPP",
  "NPK",
  "RANFOX",
  "INDUS SAGA",
  "DOOSAN",
];

const features = [
  "Long service life",
  "High performance",
  "Superior quality",
];

const furukawaModels = [
  "F6",
  "F12 (A)",
  "F12 (A+B+C+E)",
  "F19 (A+B+C+D+E)",
  "F22 92021 (A)",
  "F22 92021 (A+B+C+D+E)",
  "F27 (A+B+C+D+E)",
  "F35 (A+B+C+D+E)",
  "HB-20G",
  "HB-30G",
];

const daemoModels = [
  "S500",
  "S700",
  "S1300",
  "S1400",
  "S2100",
  "S2200",
  "S2300",
  "ALICON 210B",
  "DMB3600V",
];

const dowinModels = ["T20G", "T30G", "T200"];

const kruppModels = ["HM720", "HM960", "HM1000", "HM1500"];

const atlasCopcoModels = [
  "MB750",
  "MB1000",
  "MB1200",
  "MB1500",
  "MB1600",
  "MB1700",
  "MB2200",
  "HB2500",
];

const soosanModels = ["SB35", "SB50", "SB70", "SB81", "SB121"];

const fineModels = ["FINE10", "FINE20/22", "FINE23", "FINE35"];

const npkModels = ["NPK10XB"];

const indusModels = ["SAGA-120", "MSB200", "MSB210", "MSB260"];

const topaModels = ["TOPA100", "TOPA1400", "TOPA200"];

const chicagoPneumaticModels = ["CP1150", "CP1650"];

const jcbModels = ["HM2180"];

const everdigmModels = ["EHB25"];

const vainoModels = ["VAINO-2200", "VAINO-3300"];

const powerKingModels = ["PK-230"];

const okadaModels = ["OKADA-200"];

const jinsungModels = ["JSB 43", "JSB 50", "JSB 81A"];

function RockBreakerSealKits() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              ROCK BREAKER AZS SEAL KITS <span className="text-[#f5b400]">| A Leading Assembler</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              We Offer wide range of Rock Breaker Seal Kit having the best quality of Imported Seals for different OEMs / different brands.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Introduction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Rock Breaker Seal Kit
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We Offer wide range of Rock Breaker Seal Kit having the best quality of Imported Seals for different OEMs / different brands like DAEMO, SOOSAN, ATLAS, COPCO, FURUKWA, KRUPP, NPK, RANFOX, INDUS SAGA, DOOSAN and more. The offered Rock Breaker Seal Kit is extensively used for various applications like excavation of trenches, mining, etc.
          </p>
        </div>

        {/* Related Products */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Related Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Also Explore
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/seal-kits-info"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              Seal Kits & Oil Seal
            </Link>
            <Link
              to="/list/cfw-oil-seal"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              CFW Oil Seals
            </Link>
            <Link
              to="/list/nok-oil-seal"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061a38] shadow-sm transition-all hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <FaArrowRight className="text-[#d99600]" />
              NOK Oil Seals
            </Link>
          </div>
        </div>

        {/* Catalog Download */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Download A2Z Seal Kits Catalog
          </h2>
          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]">
            <FaDownload />
            Download Catalog
          </button>
        </div>

        {/* NOTE */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Our Manufacturing Capabilities
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            NOTE: We are leading Manufacturers / Assembler (Kits consist of Imported Items/Components/Seals) of Hydraulic Cylinder Seals & Seal Kit | Master Double acting Rotary Hydraulic Cylinder Seals and Seal Kit | Oil Seals | Shaft Seals | HUB Seals | Cassette Seals | Gear Box Seals | Hydraulic Pump Seal Kit | Seal Group | O Rings | O Ring Kits for Rock Breakers Kits and Spares, Hydraulic Pumps Parts, HEAVY EARTH MOVING MACHINES, ESCALATORS, etc.
          </p>
        </div>

        {/* Features */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Product Features
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Features
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <FaCheckCircle className="shrink-0 text-[#d99600]" />
                <span className="text-sm font-bold text-[#061a38]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Supported Brands
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Rock Breaker Brands We Support
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {rockBreakerBrands.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaIndustry className="text-[#d99600]" />
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* ROCK BREAKER Section */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            ROCK BREAKER
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals, a pioneering name in the industry, takes pride in delivering top-notch Rock Breaker Seal Kits designed for durability and performance. With a commitment to quality, we specialize in manufacturing seals for various models, including those from reputable brands like FURUKAWA, DAEMO, DOWIN, KRUPP, ATLAS COPCO, SOOSAN, FINE, NPK, INDUS, TOPA, CHICAGO PNEUMATIC, JCB, EVERDIGM, VAINO, POWER KING, OKADA, and JINSUNG.
          </p>
        </div>

        {/* Model Specifications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Model Specifications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              A2Z SEALS Rock Breaker Seal Kits by Brand
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl mx-auto">
              A2Z SEALS specializes in manufacturing Rock Breaker Seal Kits for various models, ensuring durability and optimal performance. Our range includes:
            </p>
          </div>

          <div className="space-y-6">
            {/* FURUKAWA */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">FURUKAWA</h3>
              <div className="flex flex-wrap gap-2">
                {furukawaModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* DAEMO */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">DAEMO</h3>
              <div className="flex flex-wrap gap-2">
                {daemoModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* DOWIN */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">DOWIN</h3>
              <div className="flex flex-wrap gap-2">
                {dowinModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* KRUPP */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">KRUPP</h3>
              <div className="flex flex-wrap gap-2">
                {kruppModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* ATLAS COPCO */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">ATLAS COPCO</h3>
              <div className="flex flex-wrap gap-2">
                {atlasCopcoModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* SOOSAN */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">SOOSAN</h3>
              <div className="flex flex-wrap gap-2">
                {soosanModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* FINE */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">FINE</h3>
              <div className="flex flex-wrap gap-2">
                {fineModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* NPK */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">NPK</h3>
              <div className="flex flex-wrap gap-2">
                {npkModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* INDUS */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">INDUS</h3>
              <div className="flex flex-wrap gap-2">
                {indusModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* TOPA */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">TOPA</h3>
              <div className="flex flex-wrap gap-2">
                {topaModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* CHICAGO PNEUMATIC */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">CHICAGO PNEUMATIC</h3>
              <div className="flex flex-wrap gap-2">
                {chicagoPneumaticModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* JCB */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">JCB</h3>
              <div className="flex flex-wrap gap-2">
                {jcbModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* EVERDIGM */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">EVERDIGM</h3>
              <div className="flex flex-wrap gap-2">
                {everdigmModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* VAINO */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">VAINO</h3>
              <div className="flex flex-wrap gap-2">
                {vainoModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* POWER KING */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">POWER KING</h3>
              <div className="flex flex-wrap gap-2">
                {powerKingModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* OKADA */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">OKADA</h3>
              <div className="flex flex-wrap gap-2">
                {okadaModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* JINSUNG */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#061a38] mb-4">JINSUNG</h3>
              <div className="flex flex-wrap gap-2">
                {jinsungModels.map((model) => (
                  <span
                    key={model}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-[#061a38]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Trust A2Z SEALS
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Trust A2Z SEALS for reliable and high-quality Rock Breaker Seal Kits across a wide range of brands and models.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Rock Breaker Seal Kit?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your rock breaker seal kit requirements, machine model or part number. Our team will help you find the correct seal kit for your equipment.
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

export default RockBreakerSealKits;
