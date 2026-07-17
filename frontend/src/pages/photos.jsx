import React, { useState,useEffect } from "react";
import axios from "axios";
function Gallery() {

 const [photos, setPhotos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [selectedCategory, setSelectedCategory] = useState("all");
const [lightboxImage, setLightboxImage] = useState(null);

const photoTypes = [
  "all",
  "kid room",
  "mandir",
  "kitchen",
  "bedroom",
  "living",
  "3d presentation",
  "bathroom",
  "commercial"
];

const filteredPhotos = selectedCategory === "all"
  ? photos
  : photos.filter(item => item.category === selectedCategory);
      


 const fetchPhotos = async () => {
  try {

    setLoading(true);

    const response =
      await axios.get(`${import.meta.env.VITE_API_URL}/api/photos`);

    if (response.data.success) {
      setPhotos(Array.isArray(response.data.data) ? response.data.data : []);
    }

  } catch (error) {

    
    setError(
      "Unable to load photos"
    );

  } finally {

    setLoading(false);

  }
};

useEffect(()=>{
    fetchPhotos();
},[])


  return (
    <>

{/* ================= LUXURY PHOTOS BANNER ================= */}

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
        {" "}Gallery
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
      Discover premium interior design gallery crafted to
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

{/* Filter Buttons */}
<section className="py-10 bg-[#050505]">
  <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
    <div className="flex flex-wrap justify-center gap-3">
      {photoTypes?.map((type) => (
        <button
          key={type}
          onClick={() => setSelectedCategory(type)}
          className={`
            px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300
            ${selectedCategory === type
              ? 'bg-[#D7B25B] text-white shadow-lg shadow-[#D7B25B]/30'
              : 'bg-[#26262B] text-gray-300 border border-white/10 hover:border-[#D7B25B]/50 hover:text-[#D7B25B]'
            }
          `}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  </div>
</section>

{/* Photos Grid */}
<section className="relative py-20 overflow-hidden bg-[#050505]">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D7B25B]/8 blur-[180px]"></div>
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D7B25B]/5 blur-[150px]"></div>

  <div className="max-w-[1700px] mx-auto px-6 lg:px-12">

    {loading && (
      <div className="text-center py-10">
        <p className="text-lg text-gray-300">Loading Gallery...</p>
      </div>
    )}

    {error && (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    )}

    {!loading && filteredPhotos.length === 0 && (
      <div className="text-center py-10">
        <h3 className="text-2xl font-semibold text-white">No Gallery Available</h3>
        <p className="text-gray-400 mt-2">Gallery will appear here once added from Admin Panel.</p>
      </div>
    )}

    {!loading && filteredPhotos.length > 0 && (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {filteredPhotos?.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-[22px] bg-[#26262B] border border-white/10 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                onClick={() => setLightboxImage(`${import.meta.env.VITE_API_URL}/uploads/${item.image}`)}
                src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                alt={item.category}
                className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </div>
    )}

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
      &times;
    </button>
    <img
      src={lightboxImage}
      alt="Gallery preview"
      className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-black/50"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
  
    </>
  )
}

export default Gallery
