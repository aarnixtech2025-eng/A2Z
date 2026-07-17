import { Link } from "react-router-dom";
import { FaArrowRight, FaIndustry, FaTools, FaShieldAlt, FaCheckCircle, FaTemperatureHigh, FaTachometerAlt } from "react-icons/fa";

const sealSpecifications = [
  { id: "15", maxPressure: "300 Bar", tempRange: "-30°C to 100°C" },
  { id: "07", maxPressure: "700 Bar", tempRange: "-30°C to 100°C" },
  { id: "09", maxPressure: "400 Bar", tempRange: "-30°C to 100°C" },
  { id: "11", maxPressure: "400 Bar", tempRange: "-30°C to 100°C" },
  { id: "13", displayName: "11B", maxPressure: "700 Bar", tempRange: "-30°C to 100°C" },
  { id: "14", maxPressure: "700 Bar", tempRange: "-30°C to 100°C" },
];

function VeePackSeals() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Hero */}
      <div className="bg-[#061a38] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Vee Pack Seals <span className="text-[#f5b400]">| A2Z SEALS</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              When it comes to reliable sealing solutions, A2Z Seals is a trusted name in the industry. The Vee Pack Seal, a product of A2Z Seals, stands out as a testament to their commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Unparalleled Quality */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Unparalleled Quality Vee Pack Seal Kits
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The Vee Pack Seal is synonymous with unmatched quality. Crafted with precision using top-grade materials, these seal kits ensure a tight and secure fit, preventing leaks and protecting against contaminants. A2Z Seals' focus on quality guarantees superior sealing capabilities that enhance the efficiency and longevity of your machinery.
          </p>
        </div>

        {/* Wide Range */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Wide Range of Vee Pack Seal Kit for Different Machine Models
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals understands the diversity of machinery in various industries. The Vee Pack Seal is designed to cater to different machine models, including those requiring oil seal kits. Whether it's excavators, loaders, or other heavy equipment, A2Z Seals offers a comprehensive range of seal kits tailored to specific requirements.
          </p>
        </div>

        {/* Oil Seal Kits */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Oil Seal Kits for Enhanced Performance
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Proper lubrication is essential for machinery performance. The Vee Pack Seal includes specialized oil seal kits that maintain optimal lubrication levels, reducing friction and wear. These oil seal kits ensure smoother operations, extend component life, and contribute to the overall efficiency of your machinery.
          </p>
        </div>

        {/* Cost-Effective */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Cost-Effective Solutions
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals believes in delivering value without compromising quality. The Vee Pack Seal offers a cost-effective solution that doesn't compromise performance. With competitive seal kit costs, A2Z Seals enables businesses to invest in quality sealing solutions without straining their budgets.
          </p>
        </div>

        {/* Transparent Pricing */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Transparent Vee Pack Seal Kit Pricing
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            With A2Z Seals, you get transparent and honest pricing. The seal kit price reflects the premium quality and features of the Vee Pack Seal. There are no hidden costs or surprises, allowing you to plan your expenses confidently and make an informed decision. Also explore the best quality CFW Oil Seals, NOK Oil Seals, and Crane Seal Kits.
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

        {/* Customer Satisfaction */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Commitment to Customer Satisfaction
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            A2Z Seals is dedicated to customer satisfaction. Their team of experts is available to assist you in selecting the right Vee Pack Seal for your machinery. Whether you need guidance on seal kit options or have technical queries, A2Z Seals provides exceptional customer support throughout your experience.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Why Choose Vee Pack Seal from A2Z Seals
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The Vee Pack Seal from A2Z Seals is a mark of quality, reliability, and cost-effectiveness. With its superior sealing capabilities, compatibility with various machine models, and dedicated customer support, the Vee Pack Seal ensures optimal machinery performance and protection. Trust A2Z Seals to provide you with top-notch sealing solutions that contribute to the efficiency and longevity of your machinery.
          </p>
        </div>

        {/* Product Overview */}
        <div className="mb-14 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-extrabold text-[#061a38]">
            Vee Pack Seals Overview
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            At A2ZSeals, we provide top-notch quality vee pack sets, which are multiple lip seals. They are generally composes of a female and male adaptor, along with a group of 1 to 7 vee rings. They are extremely popular when it comes to sealing pistons and rods in medium, as well as, heavy duty applications. They are compatible with single, as well as, double-acting cylinders. For more information, contact us.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="mb-14">
          <div className="mb-6 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#b57b00]">
              Technical Specifications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#061a38]">
              Vee Pack Seal Specifications
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#061a38] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-extrabold">Seal ID</th>
                  <th className="px-6 py-4 text-left font-extrabold">
                    <div className="flex items-center gap-2">
                      <FaTachometerAlt />
                      Max Pressure
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-extrabold">
                    <div className="flex items-center gap-2">
                      <FaTemperatureHigh />
                      Temperature Range
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {sealSpecifications.map((seal) => (
                  <tr key={seal.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#061a38]">
                      {seal.displayName || seal.id.toUpperCase()}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{seal.maxPressure}</td>
                    <td className="px-6 py-4 text-slate-600">{seal.tempRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-[#061a38] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Need Help Finding the Right Vee Pack Seal?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Send your vee pack seal requirements, machine model or part number. Our team will help you find the correct seal for your equipment.
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

export default VeePackSeals;
