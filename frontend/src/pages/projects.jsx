import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [portfolios, setPortfolios] = useState([]);
  const [activeImageKey, setActiveImageKey] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleImageState = (key) => {
    setActiveImageKey((prev) => (prev === key ? null : key));
  };

  const getImageStateClass = (key, baseClassName = "") => {
    const isActive = activeImageKey === key;
    return `${baseClassName} ${isActive ? "grayscale-0 scale-105" : "grayscale group-hover:grayscale-0 group-hover:scale-105"}`.trim();
  };

  const openProjectPreview = (project) => {
    setSelectedProject(project);
    toggleImageState(project.id);
  };

  const closeProjectPreview = () => {
    setSelectedProject(null);
    setActiveImageKey(null);
  };

  const fetchPortfolios = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/portfolios`
      );

      setPortfolios(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
          }
  };

  useEffect(() => {
    document.title = "Projects | Tanush Interiors";
    fetchPortfolios();
  }, []);

  return (
    <>

      {/* ================= PROJECTS HERO BANNER ================= */}

<section className="relative bg-[#050505] overflow-hidden">

  {/* Luxury Gold Glow */}

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

    blur-[200px]
    "
  />

  {/* Dot Pattern */}

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

    {/* Small Label */}

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
          TANUSH INTERIORS
        </span>

        <div className="w-10 h-[1px] bg-[#D7B25B]" />

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
      Our

      <span className="italic text-[#D7B25B]">
        {" "}Vastu's
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
      Explore our Vastu's of thoughtfully crafted interiors,
      where creativity, functionality, and luxury come together
      to create inspiring spaces.
    </p>

    {/* Luxury Divider */}

     <div className="flex items-center gap-6 mt-8">

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

      <div className="w-2.5 h-2.5 rounded-full bg-[#D7B25B]"></div>

      <div className="h-[1px] flex-1 bg-[#D7B25B]/10"></div>

    </div> 

  </div>

</section>
     
      {/* Projects */}
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
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10">


          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
          >
            {portfolios?.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="group relative cursor-pointer bg-[#0d0d0d] rounded-[24px] overflow-hidden border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:border-[#D7B25B]/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(215,178,91,0.15)] transition-all duration-500"
                role="button"
                tabIndex={0}
                onClick={() => openProjectPreview(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProjectPreview(project);
                  }
                }}
              >
                <div className="relative w-full h-[340px] overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${project.featuredImage}`}
                    alt=""
                    className={getImageStateClass(project.id, "w-full h-full object-cover transition-all duration-700")}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  {/* Gold badge */}
                  <span className="absolute top-4 left-4 bg-gray-700 text-gray-300 group-hover:bg-[#D7B25B] group-hover:text-black text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full transition-all duration-400">
                    Vastu
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6"
          role="dialog"
          aria-modal="true"
          onClick={closeProjectPreview}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[24px] border border-[#D7B25B]/20 bg-[#070707] shadow-[0_20px_80px_rgba(0,0,0,0.65)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProjectPreview}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-2 text-xl text-white transition hover:bg-[#D7B25B] hover:text-black"
              aria-label="Close preview"
            >
              ×
            </button>
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${selectedProject.featuredImage}`}
              alt={selectedProject.title || selectedProject.name || "Project preview"}
              className="max-h-[85vh] w-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;