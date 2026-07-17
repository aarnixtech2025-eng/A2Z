import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        const data = response.data.data;
        const blogs = Array.isArray(data) ? data : [];
        const foundBlog = blogs.find((item) => item.slug === slug);
        setBlog(foundBlog || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#1A1A1A] min-h-screen flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-[#1A1A1A] min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Blog Not Found</p>
      </div>
    );
  }

  return (
    <section className="relative bg-[#1A1A1A] py-10 md:py-14 lg:py-20">

      <div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(circle at center, rgba(255,255,255,0.03), transparent 70%)",
  }}
/>

      <div
        className="
          max-w-[1800px]
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-12
        "
      >
        <div
    className="
    bg-white/[0.03]
    backdrop-blur-md
    border
    border-white/10
    rounded-[30px]
    p-6
    md:p-10
    lg:p-14
    shadow-xl
    "
  >


        {/* TITLE */}
        <h1
          className="
           text-[22px]
sm:text-[28px]
md:text-[34px]
lg:text-[40px]
xl:text-[46px]
            font-bold
            text-white
            leading-[1.2]
            mb-6
            md:mb-8
          "
        >
          {blog.title}
        </h1>

        {/* Gold Divider */}
<div className="w-[120px] h-[3px] bg-[#D7B25B] rounded-full mb-8"></div>


        {/* DESCRIPTION */}
        <p
         className="
text-[13px]
sm:text-[14px]
md:text-[15px]
lg:text-[16px]
leading-[2]
text-gray-300
whitespace-pre-line
mb-8
md:mb-10
"
        >
          {blog.description || blog.shortDescription}
        </p>

        {/* IMAGE */}
        {blog.featuredImage && (
          <div className="flex justify-center">
            <img
              src={
                blog.featuredImage.startsWith('http')
                  ? blog.featuredImage
                  : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${blog.featuredImage.startsWith('/uploads') ? blog.featuredImage : `/uploads/${blog.featuredImage}`}`
              }
              alt={blog.title}
             className="
w-full
max-w-[300px]
sm:max-w-[400px]
md:max-w-[500px]
lg:max-w-[600px]
xl:max-w-[700px]
rounded-[24px]
object-cover
border
border-white/10
shadow-2xl
mx-auto
"
            />
          </div>
        )}
       </div>

      </div>

    </section>
  );
}

export default BlogDetails;