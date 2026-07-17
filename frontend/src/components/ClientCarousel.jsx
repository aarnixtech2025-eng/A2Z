import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clients = [
  {
    image: "/clients/zeiss.png",
  },
  {
    image: "/clients/telangana.png",
  },
  {
    image: "/clients/siri.png",
  },
  {
    image: "/clients/ccd.png",
  },
  {
    image: "/clients/livspace.png",
  },
  {
    image: "/clients/rfcl.png",
  },
  {
    image: "/clients/ntpc.png",
  },
];

export default function ClientCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 6,
        },
      }}
    >
      {clients.map((client, index) => (
        <SwiperSlide key={index}>
          <div
            className="
              bg-white
              shadow-sm
              h-[180px]
              sm:h-[220px]
              md:h-[260px]
              lg:h-[300px]
              flex
              items-center
              justify-center
              p-4
              sm:p-6
              md:p-8
            "
          >
            <img
              src={client.image}
              alt="client"
              className="
                max-h-[100px]
                sm:max-h-[140px]
                md:max-h-[180px]
                lg:max-h-[220px]
                max-w-full
                object-contain
              "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}