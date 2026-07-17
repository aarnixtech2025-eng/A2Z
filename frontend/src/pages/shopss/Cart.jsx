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
      <div className="relative overflow-hidden bg-[#061a38] py-8 sm:py-10 md:py-12">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f5b400]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f5b400] text-xl text-[#061a38] shadow-lg sm:h-12 sm:w-12 sm:text-2xl">
            <FaShoppingCart />
          </div>

          <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5b400] sm:mt-4 sm:text-xs">
            A2Z Seals Store
          </p>

          <h1 className="mt-2 text-2xl font-extrabold text-white sm:mt-2 sm:text-3xl md:text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-300 sm:mt-3 sm:text-sm sm:leading-6">
            Review your industrial seal products and request a quote whenever
            you are ready.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-6 lg:px-8 lg:py-12">
        {/* Empty Cart Card */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(6,26,56,0.10)] sm:rounded-3xl">
          <div className="border-b border-[#f5b400]/30 bg-gradient-to-r from-[#fff8df] via-white to-[#fff8df] px-4 py-5 text-center sm:px-6 sm:py-6 md:px-8 md:py-7">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#061a38] text-2xl text-[#f5b400] shadow-lg sm:h-16 sm:w-16 sm:text-3xl">
              <FaBoxOpen />
            </div>

            <h2 className="mt-3 text-xl font-extrabold text-[#061a38] sm:mt-4 sm:text-2xl md:text-3xl">
              Your Cart Is Empty
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-7">
              You have not added any seal kits, oil seals, O-rings or industrial
              products to your cart yet.
            </p>
          </div>

          <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
            {/* Benefits */}
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center sm:rounded-2xl sm:p-4">
                <FaShieldAlt className="mx-auto text-lg text-[#d99600] sm:text-xl" />
                <p className="mt-1.5 text-xs font-bold text-[#061a38] sm:mt-2 sm:text-sm">
                  Genuine Products
                </p>
                <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:mt-1 sm:text-xs sm:leading-5">
                  Quality sealing solutions.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center sm:rounded-2xl sm:p-4">
                <FaTruck className="mx-auto text-lg text-[#d99600] sm:text-xl" />
                <p className="mt-1.5 text-xs font-bold text-[#061a38] sm:mt-2 sm:text-sm">
                  Fast Dispatch
                </p>
                <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:mt-1 sm:text-xs sm:leading-5">
                  Support for quick delivery.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center sm:rounded-2xl sm:p-4">
                <FaHeadset className="mx-auto text-lg text-[#d99600] sm:text-xl" />
                <p className="mt-1.5 text-xs font-bold text-[#061a38] sm:mt-2 sm:text-sm">
                  Expert Support
                </p>
                <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:mt-1 sm:text-xs sm:leading-5">
                  Help finding the right seal.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col justify-center gap-2.5 sm:mt-6 sm:gap-3 sm:flex-row">
              <Link
                to="/shop/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#061a38] px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#0c2c5c] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
              >
                <FaShoppingCart />
                Browse Products
                <FaArrowRight />
              </Link>

              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b400] px-5 py-2.5 text-xs font-extrabold text-[#061a38] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#ffc928] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
              >
                Request Custom Quote
                <FaArrowRight />
              </Link>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] font-medium text-slate-500 sm:mt-5 sm:text-xs">
              <FaCheckCircle className="text-[#d99600]" />
              Need a custom seal kit? Send your machine model or seal size.
            </div>
          </div>
        </div>

        {/* Bottom Service Strip */}
        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Hydraulic Seal Kits",
            "Oil Seals & Shaft Seals",
            "Industrial O-Rings",
            "Custom Seal Solutions",
          ].map((item) => (
            <Link
              key={item}
              to="/shop/products"
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg sm:px-5 sm:py-4"
            >
              <span className="text-xs font-bold text-[#061a38] sm:text-sm">{item}</span>

              <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart;