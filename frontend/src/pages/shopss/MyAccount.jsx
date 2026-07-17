import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaSearch,
  FaShieldAlt,
  FaUser,
  FaCogs,
  FaHeadset,
  FaTruck,
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [resetEmail, setResetEmail] = useState("");

  const handleLoginChange = (event) => {
    const { name, value, checked, type } = event.target;

    setLoginData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
console.log("abc")
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    setSuccessMessage(
      "Login submitted successfully. You will be redirected shortly."
    );
  };

  const handleForgotSubmit = (event) => {
    event.preventDefault();

    if (!resetEmail.trim()) {
      setSuccessMessage("Please enter your registered email address.");
      return;
    }

    setSuccessMessage(
      "Password reset link has been sent successfully. Please check your email."
    );

    setResetEmail("");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-white to-[#fff8e5] px-4 py-8 sm:px-6 lg:flex lg:items-center lg:px-8">
      {/* Background circles */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#f5b400]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(6,26,56,0.16)] lg:grid-cols-2">
        {/* LEFT SIDE — THEME DESIGN ONLY */}
        <div className="relative hidden min-h-[680px] overflow-hidden bg-[#061a38] lg:block">
          {/* Industrial pattern */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          {/* Decorative circles */}
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full border-[28px] border-[#f5b400]/20" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full border-[36px] border-sky-400/15" />
          <div className="absolute right-14 top-16 h-16 w-16 rounded-2xl border border-[#f5b400]/30 bg-[#f5b400]/10 rotate-12" />

          <div className="relative flex h-full flex-col justify-between p-10">
            {/* Text Logo */}
            <Link to="/" className="inline-flex w-fit items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5b400] text-lg font-black text-[#061a38] shadow-lg">
                A2Z
              </div>

              <div>
                <p className="text-xl font-extrabold tracking-wide text-white">
                  A2Z SEALS
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f5b400]">
                  Industrial Sealing Solutions
                </p>
              </div>
            </Link>

            {/* Main left content */}
            <div className="max-w-md">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f5b400]/40 bg-[#f5b400]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#ffd45b]">
                <FaShieldAlt />
                Trusted Industrial Partner
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white">
                Precision Sealing For{" "}
                <span className="text-[#f5b400]">Every Industry</span>
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-200">
                Access your A2Z Seals account to manage orders, explore seal
                kits and request reliable industrial sealing solutions.
              </p>

              {/* Feature cards */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <FaCogs className="text-xl text-[#f5b400]" />
                  <p className="mt-3 text-sm font-bold text-white">
                    Premium Products
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Quality seal kits and components.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <FaTruck className="text-xl text-[#f5b400]" />
                  <p className="mt-3 text-sm font-bold text-white">
                    Fast Delivery
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Reliable dispatch across India.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <FaHeadset className="text-xl text-[#f5b400]" />
                  <p className="mt-3 text-sm font-bold text-white">
                    Expert Support
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Help from sealing specialists.
                  </p>
                </div>
              </div>

              {/* Bottom statistics */}
              <div className="mt-7 flex items-center gap-5 rounded-2xl border border-[#f5b400]/25 bg-[#061a38]/70 p-5 backdrop-blur-sm">
                <div>
                  <p className="text-2xl font-extrabold text-[#f5b400]">
                    100%
                  </p>
                  <p className="text-xs text-slate-300">Quality Focused</p>
                </div>

                <div className="h-9 w-px bg-white/20" />

                <div>
                  <p className="text-2xl font-extrabold text-[#f5b400]">
                    24/7
                  </p>
                  <p className="text-xs text-slate-300">Expert Support</p>
                </div>

                <div className="h-9 w-px bg-white/20" />

                <div>
                  <p className="text-2xl font-extrabold text-[#f5b400]">
                    PAN India
                  </p>
                  <p className="text-xs text-slate-300">Service Network</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              © {new Date().getFullYear()} A2Z Seals. Industrial sealing
              solutions you can trust.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE LOGIN / FORGOT PASSWORD */}
        <div className="flex min-h-[620px] items-center justify-center bg-white px-5 py-10 sm:px-10 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile text logo */}
            <Link to="/" className="mb-9 flex items-center justify-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5b400] text-sm font-black text-[#061a38]">
                A2Z
              </div>

              <div>
                <p className="text-lg font-extrabold text-[#061a38]">
                  A2Z SEALS
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#b57b00]">
                  Industrial Sealing Solutions
                </p>
              </div>
            </Link>

            {forgotPassword ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setForgotPassword(false);
                    setSuccessMessage("");
                  }}
                  className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition hover:text-[#e5a600]"
                >
                  <FaArrowLeft />
                  Back to Login
                </button>

                <div className="mb-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff3cc] text-xl text-[#d99600]">
                    <FaLock />
                  </span>

                  <h2 className="mt-5 text-3xl font-extrabold text-[#061a38]">
                    Forgot Password?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Enter your registered email address and we will send you a
                    secure password reset link.
                  </p>
                </div>

                {successMessage && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-green-600" />
                    <p>{successMessage}</p>
                  </div>
                )}

                <form onSubmit={handleForgotSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#061a38]">
                      Email Address
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 transition focus-within:border-[#f5b400] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#f5b400]/15">
                      <FaEnvelope className="mr-3 text-slate-400" />

                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(event) => setResetEmail(event.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-transparent py-3.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f5b400] px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#061a38] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ffc928]"
                  >
                    Send Reset Link
                    <FaArrowRight />
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf4ff] text-xl text-brand-700">
                    <FaUser />
                  </span>

                  <h2 className="mt-5 text-3xl font-extrabold text-[#061a38]">
                    Welcome Back
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Login to your A2Z Seals account and manage your industrial
                    seal requirements easily.
                  </p>
                </div>

                {successMessage && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-green-600" />
                    <p>{successMessage}</p>
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#061a38]">
                      Username or Email Address
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 transition focus-within:border-[#f5b400] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#f5b400]/15">
                      <FaEnvelope className="mr-3 text-slate-400" />

                      <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        placeholder="Enter your email address"
                        className="w-full bg-transparent py-3.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#061a38]">
                      Password
                    </label>

                    <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 transition focus-within:border-[#f5b400] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#f5b400]/15">
                      <FaLock className="mr-3 text-slate-400" />

                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="Enter your password"
                        className="w-full bg-transparent py-3.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                        required
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        className="ml-3 text-slate-400 transition hover:text-brand-700"
                        aria-label="Show or hide password"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        name="remember"
                        checked={loginData.remember}
                        onChange={handleLoginChange}
                        className="h-4 w-4 rounded border-slate-300 text-brand-700 focus:ring-brand-600"
                      />
                      Remember me
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setForgotPassword(true);
                        setSuccessMessage("");
                      }}
                      className="text-sm font-bold text-brand-700 transition hover:text-[#e5a600]"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#061a38] px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-800"
                  >
                    Login to Account
                    <FaArrowRight />
                  </button>
                </form>

                <div className="my-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-xs font-medium text-slate-400">
                    Need help?
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-[#061a38] transition hover:border-[#f5b400] hover:bg-[#fff9e8]"
                >
                  Contact A2Z Seals Support
                  <FaSearch className="text-[#d99600]" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;