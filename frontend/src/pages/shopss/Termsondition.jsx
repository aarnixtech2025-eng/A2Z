import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaBoxOpen,
  FaCheckCircle,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaGavel,
  FaHandshake,
  FaInfoCircle,
  FaShieldAlt,
  FaShippingFast,
  FaTruck,
} from "react-icons/fa";

const terms = [
  {
    number: "01",
    title: "Brand",
    icon: <FaShieldAlt />,
    content: (
      <p>
        All products supplied under this price list are offered under the{" "}
        <strong>AZS / A2Z Seals</strong> brand unless otherwise specified.
      </p>
    ),
  },
  {
    number: "02",
    title: "Price",
    icon: <FaFileInvoiceDollar />,
    content: (
      <p>
        Prices are applicable for customers worldwide and are subject to the
        final quotation, product specification, quantity, availability and
        delivery location.
      </p>
    ),
  },
  {
    number: "03",
    title: "Delivery",
    icon: <FaShippingFast />,
    content: (
      <p>
        Ex-stock seal kits may be dispatched on the same day. Products not
        available in stock may require approximately 4–6 weeks after receiving
        and accepting the confirmed order.
      </p>
    ),
  },
  {
    number: "04",
    title: "Payment",
    icon: <FaHandshake />,
    content: (
      <p>
        Payment is accepted <strong>100% against Proforma Invoice</strong>.
        Payments may be made through RTGS, NEFT or IMPS to the official A2Z
        Seals bank accounts.
      </p>
    ),
  },
  {
    number: "05",
    title: "Tax",
    icon: <FaClipboardList />,
    content: (
      <p>
        GST and other applicable government taxes will be charged extra as per
        prevailing regulations.
      </p>
    ),
  },
  {
    number: "06",
    title: "Packing & Forwarding",
    icon: <FaBoxOpen />,
    content: (
      <p>
        Packing, forwarding and handling charges will be informed at the time
        of quotation or order confirmation.
      </p>
    ),
  },
  {
    number: "07A",
    title: "Freight",
    icon: <FaTruck />,
    content: (
      <p>
        Freight charges are exclusive unless specifically mentioned in the
        approved quotation or invoice.
      </p>
    ),
  },
  {
    number: "07B",
    title: "Insurance",
    icon: <FaShieldAlt />,
    content: (
      <p>
        Transit insurance is exclusive unless specifically agreed in writing by
        A2Z Seals.
      </p>
    ),
  },
  {
    number: "08",
    title: "Price Variation",
    icon: <FaBalanceScale />,
    content: (
      <p>
        Product prices may vary based on quality, material, standard, premium
        range, tailor-made requirement, machine model and seal dimensions.
      </p>
    ),
  },
  {
    number: "09",
    title: "Price Revision",
    icon: <FaFileInvoiceDollar />,
    content: (
      <p>
        Prices are subject to change without prior notice due to changes in
        material cost, market conditions, supplier pricing or logistics costs.
      </p>
    ),
  },
  {
    number: "10",
    title: "Warranty Policy",
    icon: <FaCheckCircle />,
    content: (
      <div className="space-y-3">
        <p>
          AZS brand seal kits sold by A2Z Seals are covered under the applicable
          product warranty terms.
        </p>

        <ul className="list-disc space-y-2.5 pl-5">
          <li>
            Any warranty claim must be informed to A2Z Seals in writing by the
            end user.
          </li>
          <li>
            A2Z Seals reserves the right to inspect the product before
            accepting any warranty claim.
          </li>
          <li>
            Products must not be removed from the cylinder or assembly, returned
            or altered until A2Z Seals approves the inspection process.
          </li>
          <li>
            Warranty does not cover damage caused by incorrect installation,
            misuse, poor maintenance, abnormal operating conditions or
            consequential loss.
          </li>
        </ul>
      </div>
    ),
  },
  {
    number: "11",
    title: "Fitment Guarantee",
    icon: <FaCheckCircle />,
    content: (
      <p>
        Sealing products listed in the price list are covered under an A2Z
        Seals fitment guarantee against manufacturing defects, workmanship
        defects or incorrect fitment, provided the seal is correctly installed
        and used under normal operating conditions as per the specified OEM part
        number and machine model.
      </p>
    ),
  },
  {
    number: "12",
    title: "Anti-Defamation Policy",
    icon: <FaInfoCircle />,
    content: (
      <p>
        Equipment manufacturer names, company names, part numbers,
        descriptions, models and pictures are used only for reference purposes.
        A2Z Seals does not claim that every product shown is manufactured by the
        original equipment manufacturer. Product images and details may be used
        to help customers identify compatible seal solutions.
      </p>
    ),
  },
  {
    number: "13",
    title: "Caution",
    icon: <FaInfoCircle />,
    content: (
      <div className="space-y-3">
        <p>
          This price list and related information are provided to help users
          identify suitable products and systems. Buyers should verify technical
          specifications, machine model, dimensions and application requirements
          before placing an order.
        </p>

        <p>
          A2Z Seals is not liable for indirect, special or consequential loss,
          damage or downtime caused due to incorrect product selection,
          installation or application.
        </p>

        <p>
          Product features, specifications, availability, design and pricing may
          change at any time without prior notice.
        </p>

        <p>
          Products listed are offered for sale by A2Z Seals, its branches,
          authorised dealers and sub-dealers.
        </p>
      </div>
    ),
  },
  {
    number: "14",
    title: "Jurisdiction",
    icon: <FaGavel />,
    content: (
      <p>
        Any dispute arising from product supply, payment, warranty or service
        will be subject to the jurisdiction of Kolkata, West Bengal, India only.
      </p>
    ),
  },
  {
    number: "15",
    title: "Validity",
    icon: <FaClipboardList />,
    content: (
      <p>
        Prices are effective from the date mentioned in the quotation or price
        list and remain valid until revised, withdrawn or replaced by A2Z Seals.
        The latest quotation supersedes all previous prices.
      </p>
    ),
  },
  {
    number: "16",
    title: "Return Policy",
    icon: <FaBoxOpen />,
    content: (
      <div>
        <p className="font-bold text-[#061a38]">
          Items once sold shall not be returned.
        </p>

        <p className="mt-2">
          A2Z Seals does not accept exchanges and/or returns unless specifically
          approved in writing due to a verified supply error from our side.
        </p>
      </div>
    ),
  },
];

function TermsCondition() {
  return (
    <section className="min-h-screen bg-slate-50">
      {/* Smaller Hero Section */}
      <div className="relative overflow-hidden bg-[#061a38] py-10 sm:py-12">
        <div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-[#f5b400]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5b400] text-xl text-[#061a38] shadow-lg">
            <FaBalanceScale />
          </div>

          <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            A2Z Seals Policy
          </p>

          <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Supply Terms & Conditions
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-[15px]">
            Please read these terms carefully before placing an order for
            hydraulic seal kits, oil seals, O-rings and industrial sealing
            solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 lg:px-8 lg:py-12">
        {/* Top Information */}
        <div className="mb-7 rounded-2xl border border-[#f5b400]/30 bg-[#fff9e8] p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[#061a38] sm:text-xl">
                Important Information For Customers
              </h2>

              <p className="mt-2 max-w-3xl text-[15px] leading-6 text-slate-600">
                Product price, delivery schedule and availability are confirmed
                after reviewing your machine model, seal dimensions, quantity
                and delivery location.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#061a38] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0c2c5c]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Terms Cards */}
        <div className="space-y-4">
          {terms.map((term) => (
            <article
              key={term.number}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-[#f5b400]/70 hover:shadow-md"
            >
              <div className="grid md:grid-cols-[155px_1fr]">
                {/* Left Side: Reduced Size */}
                <div className="flex items-center gap-3 border-b border-slate-200 bg-[#061a38] px-4 py-4 md:flex-col md:items-start md:justify-center md:border-b-0 md:border-r">
                  <span className="text-lg font-extrabold text-[#f5b400]">
                    {term.number}
                  </span>

                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm text-[#f5b400]">
                      {term.icon}
                    </span>

                    <h3 className="text-[15px] font-bold text-white sm:text-base">
                      {term.title}
                    </h3>
                  </div>
                </div>

                {/* Right Side: Bigger Content */}
                <div className="p-5 text-[15px] leading-7 text-slate-700 sm:p-6 sm:text-base">
                  {term.content}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-6">
          <p className="text-[15px] leading-7 text-slate-600 sm:text-base">
            For product support or clarification regarding these terms, please
            contact A2Z Seals before placing your order.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-[#f5b400] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
            >
              Contact Us
            </Link>

            <Link
              to="/shop/products"
              className="rounded-lg border border-[#061a38] px-6 py-3 text-sm font-extrabold text-[#061a38] transition hover:bg-[#061a38] hover:text-white"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsCondition;