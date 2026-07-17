import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "About Us | A2Z Seals";
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/about`
      );

      const data = res.data.data || res.data;

      if (data.length > 0) {
        setAboutData(data[0]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#061A38] via-[#0B2A4A] to-[#123C63] py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white">
          ABOUT A2Z SEALS
        </h1>

        <p className="mt-5 text-lg text-yellow-400">
          Reliable Industrial Sealing Solutions
        </p>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <h2 className="text-4xl font-bold text-[#061A38]">
              {loading
                ? "Loading..."
                : aboutData?.title ||
                  "Trusted Industrial Sealing Partner"}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {loading
                ? "Loading..."
                : aboutData?.description ||
                  "A2Z Seals supplies Hydraulic Seals, Oil Seals, O Rings, Seal Kits and Industrial Sealing Products across India."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <img
              src={
                aboutData?.image1
                  ? `${import.meta.env.VITE_API_URL}/uploads/${aboutData.image1}`
                  : "/about/about1.jpg"
              }
              className="rounded-3xl shadow-xl"
            />

            <img
              src={
                aboutData?.image2
                  ? `${import.meta.env.VITE_API_URL}/uploads/${aboutData.image2}`
                  : "/about/about2.jpg"
              }
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* Approach + Products */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#061A38]">
              Our Approach
            </h2>

            <p className="leading-8 text-slate-600">
              {loading
                ? "Loading..."
                : aboutData?.ourApproach ||
                  "We understand machine applications and recommend the right sealing solution for long-lasting performance."}
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#061A38]">
              What We Supply
            </h2>

            <ul className="space-y-4">

              {aboutData?.features?.length
                ? aboutData.features.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3"
                    >
                      <span className="font-bold text-yellow-500">
                        ✔
                      </span>

                      <span>{item}</span>
                    </li>
                  ))
                : [
                    "Hydraulic Seal Kits",
                    "Oil Seals",
                    "O Rings",
                    "Piston Seals",
                    "Rod Seals",
                    "Guide Rings",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3"
                    >
                      <span className="font-bold text-yellow-500">
                        ✔
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}

            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#061A38] py-20">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-16 text-center text-4xl font-bold text-white">
            Our Working Process
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Requirement Analysis",
              "Product Selection",
              "Quality Inspection",
              "Fast Delivery",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl bg-white p-8 text-center"
              >
                <h3 className="text-5xl font-bold text-yellow-500">
                  0{index + 1}
                </h3>

                <h4 className="mt-4 text-xl font-bold text-[#061A38]">
                  {step}
                </h4>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B2A4A] to-[#061A38] py-20 text-center">

        <h2 className="text-4xl font-bold text-white">
          Need The Right Industrial Seal?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-slate-300">
          Tell us your machine model or seal size and our experts
          will recommend the right sealing solution.
        </p>

        <Link to="/contact">

          <button className="mt-10 rounded-xl bg-yellow-400 px-10 py-4 font-bold text-[#061A38] transition hover:bg-yellow-500">
            Contact Us
          </button>

        </Link>

      </section>
    </>
  );
};

export default AboutUs;