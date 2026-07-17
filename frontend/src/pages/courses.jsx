import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

function Courses() {

useEffect(() => {
  document.title = "Courses | Tanush Interiors";
}, []);



const [coursesData, setCoursesData] = useState([]);
const [lightboxImage, setLightboxImage] = useState(null);

useEffect(() => {
  fetchCourses();
}, []);

const fetchCourses = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/courses`
    );


    if (response.data.success) {
      setCoursesData(Array.isArray(response.data.data) ? response.data.data : []);
    }
  } catch (error) {
  }
};

  return (
    <>

     {/* ================= COURSES HERO BANNER ================= */}

<section className="relative bg-[#050505] overflow-hidden">

  {/* Gold Glow */}

  <div
    className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2

    w-[800px]
    h-[800px]

    rounded-full

    bg-[#D7B25B]/5

    blur-[220px]
    "
  />

  {/* Decorative Grid */}

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

    pt-10
    lg:pt-14

    pb-10
    lg:pb-14

    text-center
    "
  >

    {/* Label */}

    <div className="flex justify-center mb-4">

      <div className="flex items-center gap-4">

        <div className="w-12 h-[1px] bg-[#D7B25B]" />

        <span
          className="
          uppercase
          tracking-[5px]
          text-[#D7B25B]
          text-xs
          "
        >
          TANUSH INTERIORS
        </span>

        <div className="w-12 h-[1px] bg-[#D7B25B]" />

      </div>

    </div>

    {/* Heading */}

    <h1
      className="
      font-luxury

      text-white

     text-[30px]
sm:text-[42px]
lg:text-[60px]

      leading-[0.9]
      "
    >
      Design

      <span className="italic text-[#D7B25B]">
        {" "}Courses
      </span>

    </h1>

    {/* Description */}

    <p
      className="
      max-w-[700px]
      mx-auto

      mt-5

      text-gray-400

      text-[15px]
      md:text-[17px]

      leading-8
      "
    >
      Explore our comprehensive interior design courses, crafted
      to help you master the art of creating beautiful, functional spaces.
      Learn from industry experts and transform your creative vision into reality.
    </p>

    {/* Luxury Divider */}

     <div className="flex items-center gap-6 mt-8">

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

      <div className="w-2.5 h-2.5 rounded-full bg-[#D7B25B]"></div>

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

    </div>

  </div>

</section>
       {/* COURSES SECTION */}

    <section
  className="
  relative
  py-20
  overflow-hidden
  bg-[#050505]
  "
>

  {/* Smokey Glow Top Right */}
 <div
  className="
  absolute
  top-0
  right-0
  w-[500px]
  h-[500px]
  rounded-full
  bg-[#D7B25B]/8
  blur-[180px]
  "
></div>

  {/* Smokey Glow Bottom Left */}
  <div
  className="
  absolute
  bottom-0
  left-0
  w-[400px]
  h-[400px]
  rounded-full
  bg-[#D7B25B]/5
  blur-[150px]
  "
></div>
        <div className="max-w-[1700px] mx-auto px-6 lg:px-12">

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            {coursesData?.map((item) => (
  <div
    key={item.id}
    className="
group
overflow-hidden
rounded-[22px]

bg-[#26262B]

border
border-white/10

backdrop-blur-md

shadow-[0_15px_50px_rgba(0,0,0,0.35)]

hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]

transition-all
duration-500

hover:-translate-y-2
ring-1 ring-white/5 hover:ring-[#D7B25B]/30
"
  >
    <div className="relative overflow-hidden">

      <img
        onClick={() => setLightboxImage(`${import.meta.env.VITE_API_URL}/uploads/${item.image}`)}
        src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
        alt={item.title}
        className="
          w-full
          h-[320px]
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          cursor-pointer
          grayscale group-hover:grayscale-0
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
         from-[#111111]/80
via-[#111111]/20
          to-transparent
          flex
          items-center
          justify-center
          pointer-events-none
        "
      >
      </div>

    </div>

    <div
  className="
    bg-gradient-to-r
    from-[#2B2A30]
via-[#34323A]
to-[#2B2A30]
    px-6
    py-5
  "
>
  <div className="flex justify-between items-start mb-3">

    <h3
      className="
        text-[#F5F5F5]
        text-[18px]
        font-semibold
        tracking-wide
        leading-[1.4]
      "
    >
      {item.title}
    </h3>

  </div>

  {item.description && (
    <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2">
      {item.description}
    </p>
  )}
</div>
  </div>
))}

          </div>

        </div>
      </section>

{lightboxImage && (
  <div
    className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
    onClick={() => setLightboxImage(null)}
  >
    <button
      className="absolute top-5 right-5 text-white text-4xl hover:text-[#D7B25B] transition-colors z-[70]"
      onClick={() => setLightboxImage(null)}
    >
      ×
    </button>
    <img
      src={lightboxImage}
      alt="Course preview"
      className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-black/50"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </>
  )
}

export default Courses;
