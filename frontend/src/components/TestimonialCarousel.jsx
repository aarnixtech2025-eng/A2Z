import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
  {
    name: "",
    time: "2 months ago",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    review:
      "Best interior company and good Quality and professional work thank you team",
  },
  {
    name: "Sai Reddy",
    time: "8 months ago",
    image: "https://ui-avatars.com/api/?name=S&background=ea580c&color=fff",
    review:
      "Overall, I had a fantastic experience and would absolutely recommend them to anyone...",
  },
  {
    name: "Alivelu Chipuru",
    time: "1 year ago",
    image: "https://ui-avatars.com/api/?name=A&background=c2410c&color=fff",
    review:
      "Outstanding service, timely execution, unwavering dedication and exceptional quality.",
  },
  {
    name: "Mohd Azam",
    time: "1 year ago",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    review:
      "Thank you for turning my vision into reality. Every room feels fresh and inviting.",
  },
];

export default function TestimonialCarousel() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/testimonials`
      );

      const data = Array.isArray(res.data.data) ? res.data.data : [];
      const activeTestimonials = data.filter(
        (item) => item.status === "active"
      );

      setReviews(activeTestimonials);
    } catch (error) {
          }};
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={16}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {reviews.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="
              bg-[#F3F3F3]
              rounded-[22px]
              p-5
              sm:p-6
              md:p-7
              lg:p-8
              min-h-[280px]
              md:min-h-[320px]
              h-full
            "
          >
            <div className="flex justify-between items-start mb-5">

              <div className="flex gap-3 sm:gap-4">

                <img
src={
    item.image
      ? `${import.meta.env.VITE_API_URL}/uploads/${item.image}`
      : "https://ui-avatars.com/api/?name=" +
        item.clientName
  }                  alt=""
                  className="
                    w-12 h-12
                    sm:w-14 sm:h-14
                    md:w-16 md:h-16
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h4
                    className="
                      text-[15px]
                      sm:text-[16px]
                      md:text-[18px]
                      font-bold
                    "
                  >
                   {item.clientName}
                  </h4>

                  <p
                    className="
                      text-gray-500
                      text-[12px]
                      sm:text-[13px]
                      md:text-[14px]
                    "
                  >
  {item.designation}
                  </p>
                </div>

              </div>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt=""
                className="
                  w-6 h-6
                  md:w-8 md:h-8
                "
              />
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(item.rating || 5)].map((_, i)  => (
                <span
                  key={i}
                  className="
                    text-[#F4B400]
                    text-[20px]
                    sm:text-[24px]
                    md:text-[28px]
                  "
                >
                  ★
                </span>
              ))}
            </div>

            <p
              className="
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                leading-[1.8]
                text-[#222]
                mb-5
              "
            >
              {item.review}
            </p>

            <button
              className="
                text-gray-500
                text-[14px]
                hover:text-black
                transition-all
              "
            >
              Read more
            </button>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}