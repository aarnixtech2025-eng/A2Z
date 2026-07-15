import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import contactBanner from "../assets/logo/conttt.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setShowSuccess(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <main className="bg-gray-50">

      {/* ================= HERO ================= */}

      <section className="relative h-[280px] md:h-[350px] overflow-hidden">

        <img
          src={contactBanner}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-4xl md:text-6xl font-extrabold">
              Contact Us
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              We are always ready to help you.
            </p>

          </div>

        </div>

      </section>



      {/* ================= GOOGLE MAP ================= */}

      <section className="bg-white py-12">

        <div className="max-w-7xl mx-auto px-5">

          <div className="overflow-hidden rounded-3xl shadow-xl border">

            <iframe
              title="A2Z Map"
              src="https://www.google.com/maps?q=P-27+Princep+Street+Kolkata+700072&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              allowFullScreen
              className="border-0"
            />

          </div>

        </div>

      </section>



      {/* ================= CONTACT SECTION ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid lg:grid-cols-2 gap-10">



            {/* ================= LEFT SIDE FORM ================= */}

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

                <FaPaperPlane />

                Contact Form

              </span>

              <h2 className="text-4xl font-bold mt-5">
                Send us a Message
              </h2>

              <p className="text-gray-500 mt-3">
                Fill the form and our team will contact you shortly.
              </p>



              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Full Name */}

                <div>

                  <label className="font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    required
                    className="mt-2 w-full border rounded-xl p-4 outline-none focus:border-blue-600"
                  />

                </div>



                {/* Company */}

                <div>

                  <label className="font-semibold">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="mt-2 w-full border rounded-xl p-4 outline-none focus:border-blue-600"
                  />

                </div>
                                {/* Email */}

                <div>

                  <label className="font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className="mt-2 w-full border rounded-xl p-4 outline-none focus:border-blue-600"
                  />

                </div>



                {/* Phone */}

                <div>

                  <label className="font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    required
                    className="mt-2 w-full border rounded-xl p-4 outline-none focus:border-blue-600"
                  />

                </div>



                {/* Message */}

                <div>

                  <label className="font-semibold">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your requirement..."
                    required
                    className="mt-2 w-full border rounded-xl p-4 outline-none resize-none focus:border-blue-600"
                  />

                </div>



                {/* Button */}

                <button
                  type="submit"
                  className="w-full bg-[#003366] hover:bg-[#00509d] duration-300 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-3"
                >

                  <FaPaperPlane />

                  Send Message

                </button>

              </form>

            </div>





            {/* ================= RIGHT SIDE ================= */}

            <div className="space-y-6">

              {/* Company Card */}

              <div className="bg-[#003366] text-white rounded-3xl p-8 shadow-xl">

                <h2 className="text-4xl font-bold">
                  A2Z SEALS
                </h2>

                <p className="mt-4 text-gray-200 leading-8">

                  Hydraulic Seals

                  <br />

                  Oil Seals

                  <br />

                  O-Rings

                  <br />

                  Industrial Sealing Solutions

                </p>

              </div>



              {/* Address */}

              <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5">

                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Office Address
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">

                    2nd Floor

                    <br />

                    P-27 Princep Street

                    <br />

                    Kolkata - 700072

                    <br />

                    West Bengal, India

                  </p>

                </div>

              </div>



              {/* Phone */}

              <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5">

                <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Phone Number
                  </h3>

                  <p className="mt-2 text-gray-600">

                    +91 98316 56155

                    <br />

                    +91 98310 98320

                  </p>

                </div>

              </div>



              {/* Email */}

              <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5">

                <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xl">

                  <FaEnvelope />

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Email Address
                  </h3>

                  <p className="mt-2 text-gray-600">

                    a2zseals@gmail.com

                  </p>

                </div>

              </div>



              {/* Working Hours */}

              <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5">

                <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl">

                  <FaClock />

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-gray-600">

                    Monday - Saturday

                    <br />

                    10:00 AM - 7:00 PM

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= SUCCESS POPUP ================= */}

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="w-[90%] max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl animate-[fadeIn_.3s_ease]">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

              <FaCheckCircle className="text-5xl text-green-600" />

            </div>

            <h2 className="mt-6 text-3xl font-bold text-gray-800">
              Thank You!
            </h2>

            <p className="mt-4 text-gray-600 leading-7">

              Your message has been sent successfully.

              <br />

              Our team will contact you soon.

            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-8 rounded-xl bg-[#003366] px-8 py-3 font-semibold text-white transition hover:bg-[#00509d]"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </main>
  );
}

export default Contact;