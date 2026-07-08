import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaOilCan,
  FaIndustry,
  FaShieldAlt,
  FaGlobeAsia,
  FaTools,
  FaTimesCircle,
} from "react-icons/fa";
import nokImage from "../../assets/images/3.png";

const nokOilSeals = [
  "NOK TC Oil Seal",
  "NOK SC Oil Seal",
  "NOK SB Oil Seal",
  "NOK VC Oil Seal",
  "NOK KB Oil Seal",
  "NOK KC Oil Seal",
  "NOK MG Oil Seal",
  "NOK OC Oil Seal",
  "NOK SA1 Oil Seal",
  "NOK TB4 Oil Seal",
  "NOK TCJ Oil Seal",
  "NOK TCN Oil Seal",
];

const nokSealTypes = [
  "S",
  "T",
  "V",
  "K",
  "TCV",
  "T4",
  "J",
  "OC",
  "QLFY",
  "Z",
  "VR",
  "SBB",
  "MG",
  "W",
  "OKC3",
  "MO",
  "MOY",
];

const advantages = [
  "Excellent sealing performance, preventing leaks and contamination.",
  "Long lifespan, reducing the need for frequent replacements.",
  "Compatibility with various fluids and environments.",
  "High-quality materials ensure durability and reliability.",
  "Wide range of sizes to suit different applications.",
];

const disadvantages = [
  "Exposure to extreme temperatures and chemicals may affect performance.",
  "Regular inspection and replacement are necessary to avoid leakage.",
  "Ensure correct installation to prevent premature wear.",
  "Proper lubrication is crucial for optimal sealing efficiency.",
];

const hydraulicSealTypes = [
  "IDI",
  "ISI",
  "IUH",
  "SPNO",
  "SPN",
  "SPNC",
  "UPI",
  "ODI",
  "USI",
  "UPH",
  "USH",
  "HBY",
  "LBH",
];

const oilSealStdTypes = [
  "DC",
  "OC",
  "DB",
  "SA1J",
  "TB4",
  "KA3J",
  "TCJ",
  "KB",
  "VAJ",
  "SBB",
  "TC4",
  "KC",
  "MG",
  "VB",
  "ZT",
  "VR",
  "ZF",
  "QLFY",
  "VC",
  "TCN",
  "TCV",
  "TB",
  "TC",
  "SB",
  "SC",
];

const typeDetails = [
  {
    title: "S-Type (SC and SB Type)",
    text: "The S are used for dust-free applications. Usually, they have a maximum pressure of 0.03 MPa. You can use them for dust-free application with fluid sealed on one side. SA is also there along with SM & SZ.",
  },
  {
    title: "T-Type (TC, TB, TA, TF, TM and TZ)",
    text: "It is a standard oil seal that is used for dusty environments. The maximum pressure T can tolerate is 0.03 MPa. You can use these seals for various applications as they are good for fine dust duty on one side and sealing fluid on the other side.",
  },
  {
    title: "V-Type (VC and VB)",
    text: "You can't use V for high-pressure applications. However, they are best for dust or grease. The interesting thing about V types is that you can use them in combination with S types.",
  },
  {
    title: "K-Type (KC and KB)",
    text: "K are useful in the dusty environment to seal grease. You can use these for sealing grease with smaller amounts of dust on the other side. Remember, for this purpose, you can also use two V.",
  },
  {
    title: "TCV-Type",
    text: "TCV is another type of oil seal used for medium-pressure and small-diameter rotating shafts. They are highly resistant to pressure and have increased lip rigidity. TCV oil seals are useful for applications with high pressure.",
  },
  {
    title: "T4-Type",
    text: "T4 is an excellent choice for applications with reciprocating shafts. They are best for minimizing lip deformation, especially under reciprocating pressure and motion.",
  },
  {
    title: "J-Type",
    text: "They are designed specifically for torque convertors, two-cycle engines, and washers. It has an ethylene tetrafluoride resin as a sealing edge that features state-of-the-art self-lubricity. J is used in low friction torque or poor lubrication areas.",
  },
  {
    title: "OC-Type",
    text: "It is an oil seal with a rotating housing structure and is best used for sealing grease. OC has a sealing lip placed on the outer periphery and is best used for rotating housing structures.",
  },
  {
    title: "QLFY-Type",
    text: "A power tiller or tractor axle uses this unique type of oil seal. This type separates oil and muddy water and is designed to be used with a rubber sleeve, making the application easy to handle.",
  },
];

const manufacturers = [
  "CFW",
  "SOG",
  "NOK",
  "Parker",
  "Freudenberg",
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

const oilSealTypesGeneral = [
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

const applications = [
  "Boom",
  "Dipper",
  "Arm",
  "Slew",
  "Bucket",
  "Main Pump",
  "Track Adjuster",
  "Dump",
  "Back Lift",
  "David Brown / Parker Pump",
  "Blade",
  "Excavator",
  "Lift",
];

const profiles = ["TC", "TB", "DB", "TCN", "SB", "SA", "SC", "TA"];

const oemModels = ["Komatsu", "Hitachi", "Caterpillar"];

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

function NokOilSealList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                NOK <span className="text-[#f5b400]">High-Quality Sealing Solutions</span>
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                A2Z Seals offers NOK, Japan components including a good range of
                high-temperature and high-pressure oil seals for Hydro Motor,
                Hydraulic Cylinder, Shaft, Hub, Cassette, Gear Box, Pump, O Rings,
                Floating, Engine, PTFE and Motors. NOK is one of the largest
                manufacturers of oil seals in the world, extensively used in
                Automotive, Commercial, Industrial, Mining, and more.
              </p>
            </div>
            <div className="flex items-center justify-end ml-8">
              <img
                src={nokImage}
                alt="NOK Premium Brand"
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
        {/* NOK types overview */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Different Types of NOK Oil Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            NOK Oil Seal types include:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {nokSealTypes.map((type) => (
              <span
                key={type}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
              >
                {type}
              </span>
            ))}
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]">
              and more
            </span>
          </div>
        </div>

        {/* About */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              About NOK Oil Seals
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              It is widely recognized in the industry for its exceptional
              sealing performance, durability, and reliability. As a leading
              manufacturer of seals, NOK offers a comprehensive range of
              products to meet various sealing needs in different
              industries.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Explore the NOK Seal Catalog
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Our extensive NOK oil seal catalog includes a wide selection of
              seals, catering to diverse applications and industries.
              Whether you need it for shaft, radial, rotary, mechanical,
              hydraulic, automotive, or industrial use, we have you covered.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Find the Right Size and Part Numbers
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Navigating through various seal sizes and part numbers can be
              overwhelming, but our user-friendly website makes it a breeze.
              Easily cross-reference and identify the perfect NOK seal for
              your specific requirements. Our detailed product descriptions
              and part number search feature ensure you find the right seal
              in no time.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              NOK Oil Seal Stock
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              At A2Z / AZS, we take pride in having a stock of NOK oil seals.
              We offer products that deliver outstanding performance. With
              our extensive inventory, competitive pricing, and prompt
              delivery, we are your go-to source for NOK seals.
            </p>
          </div>
        </div>

        {/* Advantages / Disadvantages */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Advantages of NOK Oil Seal
            </h2>
            <ul className="mt-3 space-y-2">
              {advantages.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#d99600]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Disadvantages and Maintenance
            </h2>
            <ul className="mt-3 space-y-2">
              {disadvantages.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                  <FaTimesCircle className="mt-1 shrink-0 text-red-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quality */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-white">
          <h2 className="text-2xl font-extrabold">Quality and Specifications</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            When it comes to NOK, quality is of utmost importance. These meet
            strict quality standards and undergo rigorous testing to ensure
            superior performance and reliability. Our website provides
            detailed specifications for each product, enabling you to make
            informed decisions based on your specific needs.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Choose NOK Oil Seals for long-lasting performance. With
            exceptional performance, an extensive catalog, and excellent
            availability through our distribution network, you can trust
            NOK to keep your machinery and equipment running smoothly and
            efficiently.
          </p>
        </div>

        {/* Hydraulic seal types */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Types of Hydraulic Seals
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {hydraulicSealTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Types of Oil Seals
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {oilSealStdTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {type}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The selection of standard oil seals is based on versatility,
              availability, and customer needs.
            </p>
          </div>
        </div>

        {/* Type details */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Type Reference
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              NOK Oil Seal Type Descriptions
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {typeDetails.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#d99600]" />
                  <h3 className="font-bold text-[#061a38]">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Information */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">Information</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            For all industrial, agricultural, motorcycle, and automotive
            equipment applications, A2Z Seals has brought forth an extensive
            range of seals in distinctive styles, materials, and sizes to
            suit a wide variety of applications. These seal around a
            rotating shaft and keep an oily fluid inside the engine, axle,
            etc.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            NOK oil seals have various applications based on which materials
            like metal or rubber cases in metric or imperial systems are
            used. Nonetheless, A2Z Seals makes use of thousands of seal
            tools. Plus, it is the constant improvement in designs of
            friction that has increased the energy efficiency of these
            seals.
          </p>
        </div>

        {/* Seal reference */}
        <div className="mb-14 rounded-3xl bg-[#061a38] p-8 text-white">
          <h2 className="text-2xl font-extrabold">Seal Reference</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            These rotating seals feature accurate sealing properties which
            assure high equipment uptime for any application. In addition,
            installation ease and durable operating life enhance the
            efficiency of the equipment. Furthermore, these offer great
            sealing functions, from protecting the equipment from
            contaminating agents to securing the lubricant inside,
            preventing any leakage.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            There are many sizes and profiles as mentioned above. One profile
            and size cannot be interchanged and used everywhere as housing or
            cylinder are designed specifically. The groove is designed
            specifically for the selected seal. For more details about seals
            of any type, kindly contact us.
          </p>
        </div>

        {/* List */}
        <div className="mb-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
            Available Products
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
            Browse NOK Oil Seal Types
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nokOilSeals.map((seal) => (
            <Link
              key={seal}
              to={`/shop/products?brand=nok&product=${encodeURIComponent(seal)}`}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400]/70 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#d99600]" />
                <span className="font-bold text-[#061a38]">{seal}</span>
              </div>

              <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>

        {/* Radial oil seals description */}
        <div className="mb-14 mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">NOK Oil Seals</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Radial oil seals are made of PTFE, rubber, Viton or Teflon
            sealing lip, a spiraled tensioning spring, metal case and an
            internal case. Our NOK oil seals prevent hydraulic oil,
            lubricants, chemicals or water from escaping, and dirt and dust
            from entering a machine.
          </p>
        </div>

        {/* Manufacturers */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Manufacturers of Oil Seals
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Brands We Stock
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {manufacturers.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase text-[#061a38] shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Imported oil seal type + profiles */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a38]">
              Imported Oil Seal Types
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {oilSealTypesGeneral.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#061a38]"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
        </div>

        {/* Applications */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Kit Applications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Oil Seal Kit Applications
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {applications.map((app) => (
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

        {/* OEM */}
        <div className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Original Equipment Manufacturer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals offers a full line of replacement oil seal repair kits
            comprising varied types and sizes used by OEMs, such as{" "}
            {oemModels.join(", ")}, etc. We also offer oil seals used in
            industries like cement, mine, steel, coal, and sugar.
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Why Choose NOK Oil Seal
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
            Cannot Find Your NOK Oil Seal?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your oil seal size, machine model or part number. Our team
            will help you find the correct seal.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-300">
            <FaGlobeAsia className="text-[#f5b400]" />
            <span>nok-a2zseals@a2zseals.com | +91 98310 98320</span>
          </div>

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

export default NokOilSealList;