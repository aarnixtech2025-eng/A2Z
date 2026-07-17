import React, { useEffect, useState } from "react";
import axios from "axios";
import ClientCarousel from "../components/ClientCarousel";

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/testimonials`
      );

      const activeTestimonials =
        res.data.data?.filter(
          (item) => item.status === "active"
        ) || [];

      setTestimonials(activeTestimonials);
    } catch (error) {
          }
  };

  useEffect(() => {
    document.title = "Testimonials | Tanush Interiors";
    fetchTestimonials();
  }, []);

  return (
    <>

     {/* ================= TESTIMONIAL HERO BANNER ================= */}

<section className="relative bg-[#050505] overflow-hidden">

  {/* Gold Glow */}

  <div
    className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2

    w-[700px]
    h-[700px]

    rounded-full

    bg-[#D7B25B]/5

    blur-[220px]
    "
  />

  {/* Luxury Pattern */}

  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "radial-gradient(circle, #D7B25B 1px, transparent 1px)",
      backgroundSize: "22px 22px",
    }}
  />

  <div
    className="
    relative
    z-10

    max-w-[1600px]
    mx-auto

    px-6
    md:px-10
    lg:px-16

    pt-8
    lg:pt-12

    pb-8
    lg:pb-10

    text-center
    "
  >

    {/* Label */}

    <div className="flex justify-center mb-4">

      <div className="flex items-center gap-4">

        <div className="w-10 h-[1px] bg-[#D7B25B]" />

        <span
          className="
          uppercase
          tracking-[5px]
          text-[#D7B25B]
          text-xs
          "
        >
          Client Experience
        </span>

        <div className="w-10 h-[1px] bg-[#D7B25B]" />

      </div>

    </div>

    {/* Heading */}

    <h1
      className="
      font-luxury

      text-white

      text-[32px]
      sm:text-[46px]
      lg:text-[64px]

      leading-[0.9]
      "
    >
      Client

      <span className="italic text-[#D7B25B]">
        {" "}Testimonials
      </span>

    </h1>

    {/* Description */}

    <p
      className="
      max-w-[700px]
      mx-auto

      mt-4

      text-gray-400

      text-[15px]
      md:text-[17px]

      leading-8
      "
    >
      Discover what our clients say about their experience
      with Tanush Interiors. Every testimonial reflects our
      commitment to quality, creativity, trust, and customer satisfaction.
    </p>


   {/* Luxury Divider */}

     <div className="flex items-center gap-6 mt-8">

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

      <div className="w-2.5 h-2.5 rounded-full bg-[#D7B25B]"></div>

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

    </div> 

  </div>

</section>
 {/* Testimonials Section */}
     <section
  className="
  relative
  bg-[#050505]

  pt-10
  lg:pt-12

  pb-16
  lg:pb-20

  px-5
  lg:px-10

  overflow-hidden
  "
>
  {/* Gold Glow */}

<div
  className="
  absolute
  top-0
  left-1/2
  -translate-x-1/2

  w-[700px]
  h-[700px]

  rounded-full

  bg-[#D7B25B]/5

  blur-[220px]

  pointer-events-none
  "
/>
        <div
          style={{
            maxWidth: "1800px",
            margin: "0 auto",
          }}
        >
          {/* Heading */}
          {/* <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <p
              style={{
                color: "#D7B25B",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Testimonial
            </p>

            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "42px",
                fontWeight: "700",
              }}
            >
              Testimonials From Clients
            </h2>
          </div> */}

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {testimonials?.map((item) => (
              <div
  key={item.id}
  className="
    bg-[#181818]
    border
    border-[#D7B25B]/15
    rounded-[28px]
    p-8
    hover:border-[#D7B25B]/40
    transition-all
    duration-300
    shadow-[0_15px_40px_rgba(0,0,0,0.30)]
  "
>
  {/* Rating */}
  <div className="flex mb-6">
    {[...Array(Number(item.rating) || 0)]?.map((_, index) => (
      <span
        key={index}
        className="
          text-[#D7B25B]
          text-[28px]
          mr-1
        "
      >
        ★
      </span>
    ))}
  </div>

  {/* Review */}
  <div className="mb-8">
    <p
      className="
        text-[#E5E5E5]
        text-[18px]
        leading-9
        min-h-[180px]
        overflow-hidden
      "
      style={{
        maxHeight: expandedCards[item.id] ? 'none' : '180px',
        display: '-webkit-box',
        WebkitLineClamp: expandedCards[item.id] ? 'unset' : 5,
        WebkitBoxOrient: 'vertical',
      }}
    >
      "{item.review}"
    </p>
    {item.review && item.review.length > 150 && (
      <button
        onClick={() => toggleExpanded(item.id)}
        className="text-[#D7B25B] text-[15px] font-medium mt-3 hover:text-[#E8C876] transition-colors"
      >
        {expandedCards[item.id] ? 'Read Less' : 'Read More'}
      </button>
    )}
  </div>

  {/* Client Info */}
  <div className="flex items-center gap-5">

    <img
      src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
      alt={item.clientName}
      className="
        w-20
        h-20
        rounded-full
        object-cover
        border-[3px]
        border-[#D7B25B]
      "
    />

    <div className="flex-1">

      {/* Client Name */}
      <h3
        className="
          text-white
          text-[24px]
          font-bold
          leading-tight
        "
      >
        {item.clientName}
      </h3>

      {/* Designation */}
      <p
        className="
          text-[#D7B25B]
          text-[18px]
          font-medium
          mt-1
        "
      >
        {item.designation}
      </p>

      {/* Company */}
      <p
        className="
          text-[#BDBDBD]
          text-[17px]
          mt-1
        "
      >
        {item.companyName}
      </p>

    </div>

  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      {/* <section
        style={{
          background: "#000000",
          paddingTop: "70px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#D7B25B",
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            Clients
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "42px",
              fontWeight: "700",
            }}
          >
            Our Clients
          </h2>
        </div>

        <ClientCarousel />
      </section> */}
    </>
  );
}

export default TestimonialsPage;