import React, { useEffect, useState } from "react";
import axios from "axios";
function Contact() {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Contact Us | Tanush Interiors";
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/contact-settings`);
      if (response.data && response.data.length > 0) {
        setContactData(response.data[0]);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.phone || !trimmedData.message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/inquiries`,
        trimmedData,
      );

      if (res.data.success) {
        alert("Inquiry Submitted Successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
    }
  };
  return (
    <>
    {/* ================= CONTACT HERO ================= */}

<section className="relative bg-[#050505] overflow-hidden">

  {/* Background Glow */}

  <div
    className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2

    w-[500px]
    h-[500px]

    rounded-full
    blur-[150px]

    bg-[#D7B25B]/5
    pointer-events-none
    "
  />

  <div
    className="
    max-w-[1600px]
    mx-auto

    px-6
    md:px-10
    lg:px-16

    pt-10
    lg:pt-14

    pb-6
    lg:pb-8

    relative
    z-10
    "
  >

    {/* Label */}

    <div className="flex justify-center mb-5">

      <div className="flex items-center gap-3">

        <div className="w-10 h-[1px] bg-[#D7B25B]" />

        <span
          className="
          uppercase
          tracking-[4px]
          text-[#D7B25B]
          text-[11px]
          "
        >
          Contact Us
        </span>

        <div className="w-10 h-[1px] bg-[#D7B25B]" />

      </div>

    </div>

    {/* Heading */}

    <div className="text-center">

      <h1
        className="
        font-luxury

        text-white

        text-[32px]
        sm:text-[42px]
        lg:text-[62px]

        leading-[0.95]
        "
      >
        Begin Your Design Journey

        <br />

        {/* <span className="italic text-[#D7B25B]">
          Design Journey
        </span> */}

      </h1>

      <p
        className="
        max-w-[650px]
        mx-auto

        mt-4

        text-gray-400

        text-[14px]
        md:text-[16px]

        leading-7
        "
      >
        Have a query or planning your next interior project?
        Our team is here to help you with expert guidance and
        personalized solutions. Reach out to us and let's
        bring your vision to life.
      </p>

    </div>

  </div>

</section>

{/* ================= IMAGE + INTRO ================= */}

<section className="bg-[#050505] pb-12">

  <div
    className="
    max-w-[1400px]
    mx-auto

    px-6
    md:px-10
    lg:px-16
    "
  >

    <div
      className="
      grid
      lg:grid-cols-12

      gap-6
      lg:gap-10

      items-center
      "
    >

      {/* Left Content */}

      <div className="lg:col-span-5">

        <span
          className="
          uppercase
          tracking-[4px]
          text-[#D7B25B]
          text-[11px]
          "
        >
          TANUSH INTERIORS
        </span>

        <h2
          className="
          font-luxury

          text-white

          text-[26px]
          md:text-[38px]

          leading-[1.05]

          mt-3
          mb-5
          "
        >
          Any Question?

          <br />

          <span className="italic text-[#D7B25B]">
            Just Send Us
          </span>

          A Message
        </h2>

        <p
          className="
          text-gray-400

          text-[14px]
          md:text-[15px]

          leading-7

          max-w-[480px]
          "
        >
          Have a query or planning your next interior project?
          Our team is here to help you with expert guidance
          and personalized solutions. Reach out to us and
          let's bring your vision to life.
        </p>

      </div>

      {/* Right Image */}

      <div className="lg:col-span-7">

        <div
          className="
          overflow-hidden

          rounded-[24px]

          border
          border-[#D7B25B]/10

          group
          "
        >

          <img
            src="/contact.png"
            alt="Interior Design"
            className="
            w-full

            h-[220px]
            sm:h-[280px]
            md:h-[350px]
            lg:h-[420px]

            object-cover

            duration-700

            group-hover:scale-105
            "
          />

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= LUXURY CONTACT FORM ================= */}

<section className="bg-[#050505] pb-20">

  <div
    className="
    max-w-[1200px]
    mx-auto

    px-6
    md:px-10
    "
  >

    <div
      className="
      bg-[#0A0A0A]

      border
      border-[#D7B25B]/10

      rounded-[40px]

      p-8
      md:p-12
      lg:p-16

      relative
      overflow-hidden
      "
    >

      {/* Glow */}

      <div
        className="
        absolute
        top-0
        right-0

        w-[300px]
        h-[300px]

        rounded-full

        blur-[120px]

        bg-[#D7B25B]/5
        "
      />

      {/* Heading */}

      <div className="text-center mb-12">

        <span
          className="
          uppercase
          tracking-[5px]
          text-[#D7B25B]
          text-xs
          "
        >
          Consultation Form
        </span>

        <h2
          className="
          font-luxury

          text-white

          text-[32px]
          md:text-[48px]

          leading-none

          mt-5
          "
        >
          Let's Create Something Beautiful

          {/* <span className="italic text-[#D7B25B]">
            {" "}Something Beautiful
          </span> */}

        </h2>

      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="space-y-10 relative z-10"
      >

        {/* Row 1 */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* Name */}

          <div>

            <label
              className="
              block

              text-[#D7B25B]

              uppercase
              tracking-[3px]

              text-xs

              mb-4
              "
            >
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="
              w-full

              bg-transparent

              border-b
              border-[#D7B25B]/20

              pb-4

              text-white

              placeholder:text-gray-500

              focus:outline-none
              focus:border-[#D7B25B]

              transition-all
              duration-300
              "
            />

          </div>

          {/* Phone */}

          <div>

            <label
              className="
              block

              text-[#D7B25B]

              uppercase
              tracking-[3px]

              text-xs

              mb-4
              "
            >
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              required
              className="
              w-full

              bg-transparent

              border-b
              border-[#D7B25B]/20

              pb-4

              text-white

              placeholder:text-gray-500

              focus:outline-none
              focus:border-[#D7B25B]

              transition-all
              duration-300
              "
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label
            className="
            block

            text-[#D7B25B]

            uppercase
            tracking-[3px]

            text-xs

            mb-4
            "
          >
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="
            w-full

            bg-transparent

            border-b
            border-[#D7B25B]/20

            pb-4

            text-white

            placeholder:text-gray-500

            focus:outline-none
            focus:border-[#D7B25B]

            transition-all
            duration-300
            "
          />

        </div>

        {/* Message */}

        <div>

          <label
            className="
            block

            text-[#D7B25B]

            uppercase
            tracking-[3px]

            text-xs

            mb-4
            "
          >
            Message
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            rows={5}
            className="
            w-full

            bg-transparent

            border-b
            border-[#D7B25B]/20

            pb-4

            text-white

            placeholder:text-gray-500

            resize-none

            focus:outline-none
            focus:border-[#D7B25B]

            transition-all
            duration-300
            "
          />

        </div>

        {/* Button */}

        <div className="text-center pt-4">

          <button
            type="submit"
            className="
            bg-[#D7B25B]

            text-black

            px-10
            md:px-14

            h-[58px]

            rounded-full

            text-sm
            font-semibold

            uppercase
            tracking-[3px]

            hover:bg-white

            transition-all
            duration-500
            "
          >
            Send Message
          </button>

        </div>

      </form>

    </div>

  </div>

</section>

     {/* ================= CONTACT DETAILS ================= */}

<section className="bg-[#050505] pb-20">

  <div
    className="
    max-w-[1600px]
    mx-auto

    px-6
    md:px-10
    lg:px-16
    "
  >

    {/* Heading */}

    <div className="text-center mb-16">

      <div className="flex justify-center items-center gap-4 mb-5">

        <div className="w-12 h-[1px] bg-[#D7B25B]" />

        <span
          className="
          uppercase
          tracking-[5px]
          text-[#D7B25B]
          text-xs
          "
        >
          Contact Details
        </span>

        <div className="w-12 h-[1px] bg-[#D7B25B]" />

      </div>

      <h2
        className="
        font-luxury

        text-white

        text-[34px]
        sm:text-[50px]
        lg:text-[65px]

        leading-none
        "
      >
        Our Quick

        <span className="italic text-[#D7B25B]">
          {" "}Support
        </span>

      </h2>

    </div>

    {/* Cards */}

    <div
      className="
      grid

      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3

      gap-8
      "
    >

      {/* LOCATION */}

      <div
        className="
        bg-[#0A0A0A]

        border
        border-[#D7B25B]/10

        rounded-[32px]

        p-8
        lg:p-10

        hover:border-[#D7B25B]/30
        hover:-translate-y-2

        transition-all
        duration-500
        "
      >

        <div
          className="
          w-16
          h-16

          rounded-full

          border
          border-[#D7B25B]/20

          flex
          items-center
          justify-center

          text-[#D7B25B]

          mb-8
          "
        >
          📍
        </div>

        <h3
          className="
          font-luxury

          text-white

          text-[30px]

          mb-6
          "
        >
          Location
        </h3>

        {/* <p className="text-gray-400 mb-8 leading-8">
          Mumbai | Hyderabad | Goa
        </p> */}

        <div className="space-y-2 text-gray-500 text-sm leading-7">
          {contactData?.address ? (
            contactData.address?.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))
          ) : (
            <>
              <p>Shop no 2 ,Kalpavruksha ,near Prayeja city,Pune 411041</p>
              
            </>
          )}
        </div>

      </div>

      {/* PHONE */}

      <div
        className="
        bg-[#0A0A0A]

        border
        border-[#D7B25B]/10

        rounded-[32px]

        p-8
        lg:p-10

        hover:border-[#D7B25B]/30
        hover:-translate-y-2

        transition-all
        duration-500
        "
      >

        <div
          className="
          w-16
          h-16

          rounded-full

          border
          border-[#D7B25B]/20

          flex
          items-center
          justify-center

          text-[#D7B25B]

          mb-8
          "
        >
          ☎
        </div>

        <h3
          className="
          font-luxury

          text-white

          text-[30px]

          mb-6
          "
        >
          Call Us
        </h3>

        <p
  className="
  text-gray-300
  text-lg
  font-semibold
  leading-8
  "
>
  {contactData?.phone || "+91 9966305075"}
</p>

<p
  className="
  text-gray-500
  text-sm
  mt-3
  leading-7
  "
>
  Speak directly with our design consultants for project
  discussions, quotations, and interior design guidance.
</p>


      </div>

      {/* EMAIL */}

      <div
        className="
        bg-[#0A0A0A]

        border
        border-[#D7B25B]/10

        rounded-[32px]

        p-8
        lg:p-10

        hover:border-[#D7B25B]/30
        hover:-translate-y-2

        transition-all
        duration-500
        "
      >

        <div
          className="
          w-16
          h-16

          rounded-full

          border
          border-[#D7B25B]/20

          flex
          items-center
          justify-center

          text-[#D7B25B]

          mb-8
          "
        >
          ✉
        </div>

        <h3
          className="
          font-luxury

          text-white

          text-[30px]

          mb-6
          "
        >
          Email
        </h3>

        <p
  className="
  text-gray-300
  break-all
  text-lg
  font-semibold
  leading-8
  "
>
  {contactData?.email || "vjprofessional9@yahoo.in"}
</p>

<p
  className="
  text-gray-500
  text-sm
  mt-3
  leading-7
  "
>
  Send us your requirements, floor plans, or project details
  and our team will get back to you promptly.
</p>

<div className="mt-5">
  <span
    className="
    inline-flex
    items-center
    px-3
    py-1

    rounded-full

    bg-[#D7B25B]/10
    text-[#D7B25B]

    text-xs
    tracking-[2px]
    uppercase
    "
  >
    Quick Response Support
  </span>
</div>
      </div>

    </div>

  </div>

</section>

{/* ================= LUXURY MAP SECTION ================= */}

<section className="bg-[#050505] pb-16">

  <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

    <div className="text-center mb-8">

      <div className="flex justify-center items-center gap-4 mb-4">

        <div className="w-10 h-[1px] bg-[#D7B25B]" />

        <span className="uppercase tracking-[4px] text-[#D7B25B] text-[11px]">
          Visit Us
        </span>

        <div className="w-10 h-[1px] bg-[#D7B25B]" />

      </div>

      <h2
        className="
        font-luxury
        text-white

        text-[28px]
        md:text-[40px]
        lg:text-[52px]

        leading-none
        "
      >
        Find Our
        <span className="italic text-[#D7B25B]">
          {" "}Studio
        </span>
      </h2>

    </div>

    <div
      className="
      overflow-hidden
      rounded-[24px]

      border
      border-[#D7B25B]/10

      shadow-[0_10px_30px_rgba(0,0,0,0.3)]
      "
    >

      <iframe
        src="https://maps.google.com/maps?q=Shop+no+2%2C+Kalpavruksha%2C+near+Prayeja+city%2C+Pune+411041&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className="
        w-full

        h-[220px]
        sm:h-[280px]
        md:h-[320px]
        lg:h-[380px]
        "
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Tanush Interiors Location"
      />

    </div>

  </div>

</section>
    </>
  );
}

export default Contact;
