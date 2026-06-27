import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBoxOpen,
  FaCheckCircle,
  FaHeadset,
  FaShieldAlt,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";

function Cart() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#f5f8fc]">
      {/* Hero / Page Heading */}
      <div className="relative overflow-hidden bg-[#061a38] py-14 sm:py-16">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f5b400]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5b400] text-2xl text-[#061a38] shadow-lg">
            <FaShoppingCart />
          </div>

          <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            A2Z Seals Store
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Review your industrial seal products and request a quote whenever
            you are ready.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Empty Cart Card */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(6,26,56,0.10)]">
          <div className="border-b border-[#f5b400]/30 bg-gradient-to-r from-[#fff8df] via-white to-[#fff8df] px-6 py-7 text-center sm:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#061a38] text-3xl text-[#f5b400] shadow-lg">
              <FaBoxOpen />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-[#061a38] sm:text-3xl">
              Your Cart Is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
              You have not added any seal kits, oil seals, O-rings or industrial
              products to your cart yet.
            </p>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            {/* Benefits */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
                <FaShieldAlt className="mx-auto text-xl text-[#d99600]" />
                <p className="mt-2 text-sm font-bold text-[#061a38]">
                  Genuine Products
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Quality sealing solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
                <FaTruck className="mx-auto text-xl text-[#d99600]" />
                <p className="mt-2 text-sm font-bold text-[#061a38]">
                  Fast Dispatch
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Support for quick delivery.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
                <FaHeadset className="mx-auto text-xl text-[#d99600]" />
                <p className="mt-2 text-sm font-bold text-[#061a38]">
                  Expert Support
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Help finding the right seal.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/shop/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#061a38] px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#0c2c5c] hover:shadow-lg"
              >
                <FaShoppingCart />
                Browse Products
                <FaArrowRight />
              </Link>

              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b400] px-6 py-3.5 text-sm font-extrabold text-[#061a38] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#ffc928] hover:shadow-lg"
              >
                Request Custom Quote
                <FaArrowRight />
              </Link>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-center text-xs font-medium text-slate-500">
              <FaCheckCircle className="text-[#d99600]" />
              Need a custom seal kit? Send your machine model or seal size.
            </div>
          </div>
        </div>

        {/* Bottom Service Strip */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Hydraulic Seal Kits",
            "Oil Seals & Shaft Seals",
            "Industrial O-Rings",
            "Custom Seal Solutions",
          ].map((item) => (
            <Link
              key={item}
              to="/shop/products"
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg"
            >
              <span className="text-sm font-bold text-[#061a38]">{item}</span>

              <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart;