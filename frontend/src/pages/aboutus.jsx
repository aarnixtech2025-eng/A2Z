import React, { useEffect, useState } from "react";
import axios from "axios";
function AboutUs() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "About Us | A2Z Seals";
    fetchAboutData();
  }, []);
  const fetchAboutData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/about`);
      const data = response.data.data || response.data;
      if (data && data.length > 0) {
        setAboutData(data[0]);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About A2Z Seals</h1>
          <div className="w-20 h-1 bg-[#FFC107] mx-auto"></div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutData?.image1 ? `${import.meta.env.VITE_API_URL}/uploads/${aboutData.image1}` : "/about-placeholder.jpg"}
              alt="Industrial Sealing"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">{aboutData?.title || "Industry Leaders in Sealing Solutions"}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {aboutData?.description || "A2Z Seals is a leading manufacturer, importer, and exporter of hydraulic seal kits, oil seals, and O-rings for diverse industrial applications."}
            </p>
          </div>
        </div>
      </section>
      {/* Expertise Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Approach Card */}
            <div className="bg-white p-8 border-t-4 border-[#FFC107] shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600">{aboutData?.ourApproach || "We prioritize precision and quality in every sealing solution we provide."}</p>
            </div>
            {/* Features/Industries */}
            <div className="bg-white p-8 border-t-4 border-[#FFC107] shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
              <ul className="space-y-3">
                {(aboutData?.features || ["High-grade material sourcing", "Pan-India delivery", "24/7 Expert Support"]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[#FFC107]">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;