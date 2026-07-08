import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaCogs,
} from "react-icons/fa";
import oilSealImage from "../../assets/logo_a2z_seals.png";

const materials = [
  "Fluroelastomer, famously known as Viton",
  "Silicone",
  "PolytetraFluroEthylene (PTFE)",
  "Nitrile elastic",
];

const manufacturers = [
  "CFW",
  "SOG",
  "NOK",
  "Parker",
  "freudenberg",
  "Simrit",
  "Corteco",
  "TTO",
  "TCK",
  "CR",
  "NAK",
  "NDK",
  "Merkel",
  "National",
  "CHR",
];

const sealTypes = [
  "Oil",
  "Shaft",
  "Hub",
  "Cassette",
  "Gear Box",
  "Pump",
  "O Rings Box",
  "Engine",
  "PTFE",
  "Motor",
];

const importedOilSealTypes = [
  "Oil Seal",
  "Single Lip",
  "Double Lip",
  "Shaft",
  "HUB",
  "Cassette",
  "Gear Box",
  "Pump",
  "Engine",
  "Motor",
  "PTFE",
  "Hydraulic Cylinder",
  "O Rings",
];

const oilSealKitApplications = [
  "Boom",
  "Dipper",
  "Arm",
  "Slew",
  "Bucket",
  "Main pump",
  "Track Adjuster",
  "Dump",
  "Back Lift",
  "David Brown / Parker Pump",
  "Blade",
  "Excavator",
  "Lift",
];

const profiles = ["TC", "TB", "DB", "TCN", "SB", "SA", "SC", "TA"];

const highlights = [
  "Chemical Resistance",
  "Cost-Effective",
  "Custom Sizing Options",
  "Diverse Material Options",
  "Easy Installation",
  "Global Availability",
  "High-Temperature Resistance",
  "Industry Compliance",
  "Innovative Sealing Solutions",
  "Leak Prevention",
  "Long Service Life",
  "Low Friction Design",
  "OEM Compatibility",
  "Precision Machining",
  "Rapid Delivery",
  "Versatile Applications",
];

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

function OilSealShaftSeal1() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                OIL SEAL/SHAFT SEAL 1 <span className="text-[#f5b400]">| A2Z SEALS</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Your Trusted Shaft Oil Seals. We, A2Z Seals (A2Z) Your Trusted Oil Seal Home offers a comprehensive selection of replacement that comprises of various types and sized used by Original Equipment Manufacturer (OEM) under one roof.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={oilSealImage}
                alt="Oil Seal/Shaft Seal 1"
                className="h-50 w-auto object-contain"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* About */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            About A2Z Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Machines in various industries, including sugar, cement, oil, construction, mining, and more. We offer a comprehensive selection of replacement seals that comprises of various types and sized used by Original Equipment Manufacturer (OEM) under one roof.
          </p>
        </div>

        {/* Shaft Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Shaft seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            In any moving or rotating part assembly, they are a critical part. They are greatly used in hydraulic cylinders and gearboxes.
          </p>
        </div>

        {/* Oil Seal Construction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Oil seal construction
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                A metal ring forms the inward skeleton that gives it an auxiliary soundness
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                Nitrile elastic makes up the external skin
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
              <p className="text-sm leading-6 text-slate-600">
                The grease is kept from spilling outside and contaminants are kept outside with the help of the spring on its' lip
              </p>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Materials used for the external skin of the oil seal
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {materials.map((material) => (
              <span
                key={material}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Deals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Deals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Located in Princep Street, Kolkata, India, we are one of the leading wholesalers. We import them in India, via our distributor channel, and also export and supply them. We have in stock, the products of manufacturers like SOG, NOK, Parker, freudenberg, Simrit, Corteco, TTO, TCK, CR, NAK, NDK and CFW and cater to the needs of the Asian, Indian, Middle East and African markets. Price, reliability, quality and durability are the growth pillars of our company.
          </p>
        </div>

        {/* Oil Seal Kits */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            OIL SEAL KITS – Ensuring Superior Quality
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We take pride in being your go-to destination for its high-quality. Our commitment to excellence is reflected in every product we offer. Whether you're in need of seals –shaft, hub, cassette, gear box, or pump seals & kits, we have you covered.
          </p>
        </div>

        {/* USP */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Our Unique Selling Propositions (USP)
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            We A2Z stands out in the market with a set of distinctive features that set us apart from the competition and having various brands under one roof thus referred by many buyers since decades as A2Z SEALS – Trusted Oil Seal Home.
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Unparalleled Quality</p>
                <p className="text-sm leading-6 text-slate-600">Our offered products are crafted with precision and adhere to the highest quality standards.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Competitive Cost</p>
                <p className="text-sm leading-6 text-slate-600">We understand the importance of cost efficiency. A2Z provides top-notch products without breaking the bank.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Transparent Price</p>
                <p className="text-sm leading-6 text-slate-600">No hidden costs! We believe in transparent pricing, ensuring you get value for your investment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Range */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Our Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Explore Our Comprehensive Range of Seals
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sealTypes.map((type) => (
              <Link
                key={type}
                to={`/shop/products?product=${encodeURIComponent(type)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{type}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-14 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Oil Seals</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A2Z offers a wide range of sealing products designed to prevent lubricant leakage in rotating shafts. We manufacture our sealing products with precision to ensure they deliver optimal performance and durability in diverse industrial applications.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Shaft Seals</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              When it comes to protecting rotating shafts, A2Z has you covered. We craft our shaft sealing parts with the highest quality materials to provide effective sealing solutions for various machinery and equipment.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Hub Seals</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Trust A2Z for reliable hub sealing products that offer superior protection against contaminants and ensure the smooth operation of your automotive or industrial hubs. Our products are built to last, even in challenging environments.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Cassette Seals</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              These are designed for applications requiring robust sealing solutions. These provides excellent resistance to dust, dirt, and other environmental factors, ensuring the longevity of your machinery.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Gear Box Seals</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Ensure the efficiency and reliability of your gearboxes with our sealing parts. Engineers have designed them to withstand the demands of heavy-duty applications, ensuring they effectively protect against oil leakage.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Pump Seals & Kits</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A2Z offers a comprehensive range for various pumping applications. We products are designed to meet the stringent requirements of industrial pumps, ensuring optimal performance and minimal downtime.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">O Rings Box & Kits</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore A2Z collection of O rings box and kits for versatile sealing solutions. We use high-quality materials to manufacture our O rings, enabling them to excellent resist temperature, pressure, and chemical exposure.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Engine Oil Seal</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A2Z is your reliable source for engine seals that play a crucial role in preventing oil leaks and maintaining optimal engine performance. Trust our seals for their durability and precision engineering.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">PTFE Seals</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              For applications demanding exceptional chemical resistance and low friction, These products provide reliable performance in challenging environments, making them ideal for various industries.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#061a38]">Motor Seals & Kits</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A2Z understands the importance of them. Designers create these to ensure the longevity and efficiency of electric motors, offering superior protection against contaminants.
            </p>
          </div>
        </div>

        {/* Why Choose A2Z */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Why Choose A2Z SEALS?
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Quality Assurance</p>
                <p className="text-sm leading-6 text-slate-600">As A2Z offers world renowned products some of who are OE to OEMs undergo rigorous testing to ensure they meet the highest industry standards, providing you with reliable and durable solutions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Customization Options</p>
                <p className="text-sm leading-6 text-slate-600">We understand that each application is unique. A2Z offers customization options to meet your specific requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="mt-1 shrink-0 text-[#d99600]" />
              <div>
                <p className="text-sm font-bold text-[#061a38]">Expert Support</p>
                <p className="text-sm leading-6 text-slate-600">Our team of experts is ready to assist you in choosing the right seals for your applications. We're just a call or email away.</p>
              </div>
            </div>
          </div>
        </div>

        {/* AZS Oil Seals */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            AZS Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of ptfe, rubber, viton or Teflon sealing lip, a spiraled tensioning spring, metal case and an internal case. Our AZS oil seals prevent hydraulic oil, lubricants, chemicals or water from escaping, and dirt and dust from entering a machine.
          </p>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Manufacturers of Oil Seals
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {manufacturers.map((manufacturer) => (
              <span
                key={manufacturer}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaIndustry className="text-[#d99600]" />
                {manufacturer}
              </span>
            ))}
          </div>
        </div>

        {/* Imported Oil Seal Types */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Available Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Imported Oil Seal Types
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importedOilSealTypes.map((type) => (
              <Link
                key={type}
                to={`/shop/products?product=${encodeURIComponent(type)}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#d99600]" />
                  <span className="font-bold text-[#061a38]">{type}</span>
                </div>
                <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Oil Seal Kit Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Oil Seal Kit Applications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {oilSealKitApplications.map((app) => (
              <span
                key={app}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#061a38] shadow-sm"
              >
                <FaTools className="text-[#d99600]" />
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Profiles */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#061a38]">
            Varied Profiles of Oil Seals
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profiles.map((profile) => (
              <span
                key={profile}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {profile}
              </span>
            ))}
          </div>
        </div>

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement oil seal repair kits comprising of varied types and sized used by OEMs, such as {oemModels.join(", ")}, etc. We also offer oil seals used in industries like, cement, mine, steel, coal, sugar and oil.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose A2Z Oil Seals
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Key Highlights
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <FaShieldAlt className="shrink-0 text-[#d99600]" />
                <span className="text-xs font-bold text-[#061a38]">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Contact Us Today
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Ready to experience the quality and reliability of A2Z SEALS? Contact us today for all your seal needs. Trust us to be your reliable partner in the world of seals. Your satisfaction is our priority!
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OilSealShaftSeal1;
