import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBoxOpen,
  FaCheckCircle,
  FaClipboardCheck,
  FaCreditCard,
  FaHeadset,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShippingFast,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const orderItems = [
  {
    id: 1,
    name: "Hydraulic Cylinder Seal Kit",
    machine: "JCB 3DX Backhoe Loader",
    quantity: 1,
    price: 1850,
  },
  {
    id: 2,
    name: "NOK TC Oil Seal",
    machine: "Industrial Gearbox / Motor",
    quantity: 2,
    price: 320,
  },
];

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    machineModel: "",
    requirement: "",
    paymentMethod: "quote",
  });

  const [submitted, setSubmitted] = useState(false);

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Later you can connect this with backend API
    console.log("Checkout request:", formData);
    console.log("Order items:", orderItems);

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-[#f5f8fc]">
        <div className="relative overflow-hidden bg-[#061a38] py-14 sm:py-16">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f5b400]/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f5b400] text-3xl text-[#061a38] shadow-lg">
              <FaCheckCircle />
            </div>

            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
              Request Submitted Successfully
            </p>

            <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Thank You For Your Enquiry
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Your product enquiry has been received. Our A2Z Seals team will
              review your requirement and contact you shortly with price,
              availability and delivery details.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_18px_45px_rgba(6,26,56,0.10)] sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff4cc] text-4xl text-[#d99600]">
              <FaClipboardCheck />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-[#061a38]">
              We Will Get Back To You Soon
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
              For faster support, keep your machine model, seal size, OEM part
              number or old seal sample details ready.
            </p>

            <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <FaPhoneAlt className="text-lg text-[#d99600]" />
                <p className="mt-3 text-sm font-extrabold text-[#061a38]">
                  Call Support
                </p>
              <a
  href="tel:+919831098320"
  className="mt-1 inline-block text-xs text-slate-500 transition-colors hover:text-[#f5b400]"
>
  +91 9831098320
</a>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <FaHeadset className="text-lg text-[#d99600]" />
                <p className="mt-3 text-sm font-extrabold text-[#061a38]">
                  Expert Assistance
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Help to identify your seal.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <FaShippingFast className="text-lg text-[#d99600]" />
                <p className="mt-3 text-sm font-extrabold text-[#061a38]">
                  Fast Dispatch
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Delivery after confirmation.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/shop/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#061a38] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#0c2c5c]"
              >
                <FaShoppingCart />
                Continue Shopping
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3.5 text-sm font-extrabold text-[#061a38] transition hover:bg-[#ffc928]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      {/* Page Heading */}
      <div className="relative overflow-hidden bg-[#061a38] py-12 sm:py-14">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f5b400]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5b400] text-2xl text-[#061a38] shadow-lg">
            <FaClipboardCheck />
          </div>

          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            Secure Order Request
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Checkout & Request Quote
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Fill in your details and send your product requirement. Our team
            will confirm availability, final pricing and delivery details.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Back button */}
        <Link
          to="/shop/cart"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#061a38] transition hover:text-[#d99600]"
        >
          <FaArrowLeft />
          Back To Cart
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.85fr]">
          {/* Customer Details Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(6,26,56,0.08)] sm:p-8">
            <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff4cc] text-xl text-[#d99600]">
                <FaUser />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#061a38]">
                  Billing & Contact Details
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Share your contact information for order confirmation.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-6">
              {/* Personal Details */}
              <div>
                <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-[#061a38]">
                  Customer Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="border-t border-slate-100 pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#d99600]" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#061a38]">
                    Delivery Address
                  </h3>
                </div>

                <div className="space-y-4">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    placeholder="House / office number, street, area"
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                  />

                  <div className="grid gap-4 sm:grid-cols-3">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                    />

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                    />

                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                    />
                  </div>
                </div>
              </div>

              {/* Product Requirement */}
              <div className="border-t border-slate-100 pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <FaBoxOpen className="text-[#d99600]" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#061a38]">
                    Machine & Seal Requirement
                  </h3>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="machineModel"
                    value={formData.machineModel}
                    onChange={handleChange}
                    placeholder="Machine model / OEM brand / seal size"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                  />

                  <textarea
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Add any special requirement, quantity, part number or seal size..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#f5b400] focus:bg-white focus:ring-4 focus:ring-[#f5b400]/15"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="border-t border-slate-100 pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <FaCreditCard className="text-[#d99600]" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#061a38]">
                    Preferred Order Method
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      formData.paymentMethod === "quote"
                        ? "border-[#f5b400] bg-[#fff9e8]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="quote"
                      checked={formData.paymentMethod === "quote"}
                      onChange={handleChange}
                      className="sr-only"
                    />

                    <p className="font-extrabold text-[#061a38]">
                      Request Final Quote
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      We confirm product availability, shipping and final price.
                    </p>
                  </label>

                  <label
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      formData.paymentMethod === "bank"
                        ? "border-[#f5b400] bg-[#fff9e8]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === "bank"}
                      onChange={handleChange}
                      className="sr-only"
                    />

                    <p className="font-extrabold text-[#061a38]">
                      Bank Transfer
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Bank details will be shared after order confirmation.
                    </p>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#f5b400] px-6 py-4 text-sm font-extrabold text-[#061a38] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#ffc928] hover:shadow-lg"
              >
                Submit Order Request
                <FaClipboardCheck />
              </button>

              <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                <FaLock className="text-[#d99600]" />
                Your information is safe and used only for your order enquiry.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(6,26,56,0.08)] sm:p-6 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#061a38] text-lg text-[#f5b400]">
                <FaShoppingCart />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-[#061a38]">
                  Order Summary
                </h2>
                <p className="text-xs text-slate-500">
                  Review your selected products
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {orderItems.map((item) => (
                <div key={item.id} className="py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-extrabold text-[#061a38]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.machine}
                      </p>

                      <p className="mt-2 text-xs font-bold text-[#d99600]">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-extrabold text-[#061a38]">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Estimated Subtotal</span>
                <span className="font-bold text-[#061a38]">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <span>Shipping</span>
                <span className="font-bold text-[#d99600]">
                  To Be Confirmed
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-[#061a38] px-4 py-4">
                <span className="text-sm font-bold text-slate-200">
                  Estimated Total
                </span>

                <span className="text-lg font-extrabold text-[#f5b400]">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Final price may change based on seal size, quantity, GST,
                delivery location and product availability.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-[#f5b400]/30 bg-[#fff9e8] p-4">
              <div className="flex gap-3">
                <FaHeadset className="mt-0.5 text-[#d99600]" />

                <div>
                  <p className="text-sm font-extrabold text-[#061a38]">
                    Need Help?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Share your machine model or old seal size for quick
                    assistance.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-[#b57b00] hover:text-[#061a38]"
                  >
                    Contact Support
                    <FaArrowLeft className="rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Checkout;