import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Services() {

 const [services, setServices] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [activeImageKey, setActiveImageKey] = useState(null);

 const toggleImageState = (key) => {
  setActiveImageKey((prevKey) => (prevKey === key ? null : key));
 };

 const getImageStateClass = (key, baseClassName) => {
  const isActive = activeImageKey === key;
  return `${baseClassName} ${isActive ? "grayscale-0 scale-110" : "grayscale group-hover:grayscale-0 group-hover:scale-110"}`;
 };
      


 const fetchServices = async () => {
  try {

    setLoading(true);

    const response =
      await axios.get(`${import.meta.env.VITE_API_URL}/api/services`);

    if (response.data.success) {
      const data = Array.isArray(response.data.data) ? response.data.data : [];
      const activeServices = data.filter((item) => item.status === "active");
      setServices(activeServices);
    }

  } catch (error) {

    
    setError(
      "Unable to load services"
    );

  } finally {

    setLoading(false);

  }
};

useEffect(()=>{
    fetchServices();
},[])

  return (
    <>

{/* ================= LUXURY SERVICES BANNER ================= */}

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

    blur-[180px]
    "
  />

  {/* Dot Pattern */}

  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "radial-gradient(circle, #D7B25B 1px, transparent 1px)",
      backgroundSize: "24px 24px",
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

    pt-12
    lg:pt-16

    pb-6
lg:pb-8

    text-center
    "
  >

    <div className="flex justify-center mb-3">

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
      Our

      <span className="italic text-[#D7B25B]">
        {" "}Services
      </span>

    </h1>

    <p
      className="
      max-w-[650px]
      mx-auto

      mt-3

      text-gray-400

      text-[15px]
      md:text-[17px]

      leading-8
      "
    >
      Discover premium interior design solutions crafted to
      transform your spaces with elegance, functionality,
      and timeless aesthetics.
    </p>

    {/* Luxury Divider */}

     <div className="flex items-center gap-6 mt-8">

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

      <div className="w-2.5 h-2.5 rounded-full bg-[#D7B25B]"></div>

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

    </div> 

  </div>

</section>

       {/* BANNER */}
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

    {/* <div className="text-center mb-14">

      <h2 className="text-4xl font-bold text-[#2F2F34]">
        Our Services
      </h2>

      <p className="text-gray-500 mt-3">
        Professional Interior Design Solutions
      </p>

    </div> */}

    {loading && (

      <div className="text-center py-10">
        <p className="text-lg text-gray-300">
          Loading Services...
        </p>
      </div>

    )}

    {error && (

      <div className="text-center py-10">
        <p className="text-red-500">
          {error}
        </p>
      </div>

    )}

    {!loading &&
      services.length === 0 && (

      <div className="text-center py-10">

      <h3 className="text-2xl font-semibold text-white">
          No Services Available
        </h3>

        <p className="text-gray-400 mt-2">
          Services will appear here once added from Admin Panel.
        </p>

      </div>

    )}

    {!loading &&
      services.length > 0 && (

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services?.map((item) => (

          <div
            key={item.id}
            className="
bg-[#25252B]
backdrop-blur-xl
border
border-white/10
rounded-[24px]
overflow-hidden
shadow-[0_15px_40px_rgba(0,0,0,0.35)]
hover:border-[#D7B25B]/30
hover:-translate-y-2
transition-all
duration-500
group
cursor-pointer
touch-manipulation
"
            onClick={() => toggleImageState(`service-${item.id}`)}
            tabIndex={0}
            role="button"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleImageState(`service-${item.id}`);
              }
            }}
          >

            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
              alt={item.title}
              className={getImageStateClass(
                `service-${item.id}`,
                "w-full h-[240px] sm:h-[260px] object-cover transition-all duration-700"
              )}
            />

            <div className="p-6 sm:p-7">

              <h3
                className="
                text-[24px]
                font-bold
               text-white
                mb-3
              "
              >
                {item.title}
              </h3>

              <p
                className="
               text-gray-300
                leading-relaxed
                mb-5
              "
              >
                {item.shortDescription}
              </p>

              <Link
                to="/contact"
                className="
inline-block
bg-gradient-to-r
from-[#D7B25B]
to-[#A27B36]
text-white
px-6
py-3
rounded-xl
font-semibold
shadow-lg
hover:scale-105
hover:from-[#E0BE74]
hover:to-[#B88A3F]
transition-all
duration-300
"
              >
                Enquire Now
              </Link>

            </div>

          </div>

        ))}

      </div>

    )}

  </div>

</section>
  
    </>
  )
}

export default Services