import { Link } from "react-router-dom";

function BlogPage2() {
    return (
        <>

            {/* BANNER */}
            <section
                className="
  relative
  h-[200px]
  overflow-hidden
  bg-gradient-to-r
  from-[#403D45]
  via-[#54505A]
  to-[#706A62]
  "
            >

                <div className="absolute inset-0 bg-black/20"></div>

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 70%)",
                    }}
                />

                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #000 1px, transparent 1px)",
                        backgroundSize: "6px 6px",
                    }}
                />

                <div className="relative z-10 h-full flex items-center">

                    <div className="pl-8 md:pl-12 lg:pl-16">

                        <h1
                            className="text-[32px] sm:text-[42px] md:text-[60px] font-bold leading-none"
                            style={{
                                WebkitTextStroke: "1.5px white",
                                color: "transparent",
                            }}
                        >
                            Blog
                        </h1>

                        <h2 className="text-white text-[24px] sm:text-[32px] md:text-[48px] font-bold leading-none">
                            VJProfessional
                        </h2>

                    </div>

                </div>
            </section>

            <div className="bg-[#1A1A1A] min-h-screen py-16">

                <div className="max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">

                        {/* CARD 1 */}
                        <div className="
bg-white/[0.03]
backdrop-blur-md
border
border-white/10
rounded-[24px]
p-5
sm:p-6
min-h-[380px]
lg:h-[400px]
flex
flex-col
justify-between
transition-all
duration-300
hover:bg-white/[0.05]
hover:-translate-y-2
">

                            <h4 className="font-bold text-[14px] sm:text-[16px] text-[#D7B25B] mb-3">
                                Blogs
                            </h4>

                            <h3 className="
text-white
text-[16px]
sm:text-[18px]
font-semibold
leading-[1.5]
mb-3
">
                                Affordable Interior Design Services in Hyderabad – Vj professionals
                            </h3>

                            <p className="
text-gray-300
text-[14px]
sm:text-[15px]
leading-[1.7]
sm:leading-[1.8]
mb-4
">
                                Affordable Interior Design Services in Hyderabad – Tanush Interiors. In today's fast-paced world, creating a stylish and inviting living space shouldn't come with a hefty price tag...
                            </p>

                            <Link to="/blog/affordable-interior-design-services-hyderabad">
                                <button className="
bg-gradient-to-r
from-[#D7B25B]
to-[#A27B36]
text-white
w-[140px]
sm:w-[160px]
h-[50px]
sm:h-[60px]
rounded-md
font-semibold
text-[14px]
sm:text-[16px]
hover:from-[#E0BE74]
hover:to-[#B88A3F]
transition-all
duration-300
">
                                    Readmore
                                </button>
                            </Link>

                        </div>

                        {/* CARD 2 */}
                        <div className="
bg-white/[0.03]
backdrop-blur-md
border
border-white/10
rounded-[24px]
p-5
sm:p-6
min-h-[380px]
lg:h-[400px]
flex
flex-col
justify-between
transition-all
duration-300
hover:bg-white/[0.05]
hover:-translate-y-2
">

                            <h4 className="font-bold text-[14px] sm:text-[16px] text-[#D7B25B] mb-3">
                                Blogs
                            </h4>

                            <h3 className="
text-white
text-[16px]
sm:text-[18px]
font-semibold
leading-[1.5]
mb-3
">
                                Top Interior Designers in Hyderabad
                            </h3>

                            <p className="
text-gray-300
text-[14px]
sm:text-[15px]
leading-[1.7]
sm:leading-[1.8]
mb-4
">
                                In the vibrant landscape of Hyderabad, where tradition merges seamlessly with modernity, the pursuit of impeccable interior design is an art form...
                            </p>

                            <Link to="/blog/top-interior-designers-hyderabad">
                                <button className="
bg-gradient-to-r
from-[#D7B25B]
to-[#A27B36]
text-white
w-[140px]
sm:w-[160px]
h-[50px]
sm:h-[60px]
rounded-md
font-semibold
text-[14px]
sm:text-[16px]
hover:from-[#E0BE74]
hover:to-[#B88A3F]
transition-all
duration-300
">
                                    Readmore
                                </button>
                            </Link>

                        </div>

                        {/* CARD 3 */}
                        <div className="
bg-white/[0.03]
backdrop-blur-md
border
border-white/10
rounded-[24px]
p-5
sm:p-6
min-h-[380px]
lg:h-[400px]
flex
flex-col
justify-between
transition-all
duration-300
hover:bg-white/[0.05]
hover:-translate-y-2
">

                            <h4 className="font-bold text-[14px] sm:text-[16px] text-[#D7B25B] mb-3">
                                Blogs
                            </h4>

                            <h3 className="
text-white
text-[16px]
sm:text-[18px]
font-semibold
leading-[1.5]
mb-3
">
                                Get Luxurious Master Bedroom Wardrobe Designs by Tanush Interiorss
                            </h3>

                            <p className="
text-gray-300
text-[14px]
sm:text-[15px]
leading-[1.7]
sm:leading-[1.8]
mb-4
">
                                Get Luxurious Master Bedroom Wardrobe Designs by Tanush Interiorss. In the domain of interior design, the master bedroom stands as a sanctuary...
                            </p>

                            <Link to="/blog/luxurious-master-bedroom-wardrobe">
                                <button className="
bg-gradient-to-r
from-[#D7B25B]
to-[#A27B36]
text-white
w-[140px]
sm:w-[160px]
h-[50px]
sm:h-[60px]
rounded-md
font-semibold
text-[14px]
sm:text-[16px]
hover:from-[#E0BE74]
hover:to-[#B88A3F]
transition-all
duration-300
">
                                    Readmore
                                </button>
                            </Link>

                        </div>

                        {/* CARD 1 */}
                        <div className="
bg-white/[0.03]
backdrop-blur-md
border
border-white/10
rounded-[24px]
p-5
sm:p-6
min-h-[380px]
lg:h-[400px]
flex
flex-col
justify-between
transition-all
duration-300
hover:bg-white/[0.05]
hover:-translate-y-2
">

                            <h4 className="font-bold text-[14px] sm:text-[16px] text-[#D7B25B] mb-3">
                                Blogs
                            </h4>

                            <h3 className="
text-white
text-[16px]
sm:text-[18px]
font-semibold
leading-[1.5]
mb-3
">
                                Elegant Master Bedroom Interiors
                            </h3>

                            <p className="
text-gray-300
text-[14px]
sm:text-[15px]
leading-[1.7]
sm:leading-[1.8]
mb-4
">
                                Wanna make Your Bedroom stunningly Beautiful? We have a perfect plan for beautifying Your Bedroom! At Tanush Interiors, we understand that the master bedroom is the epitome of luxury and relaxation, a sanctuary where comfort meets elegance.
                            </p>

                            <Link to="/blog/elegant-master-bedroom-interiors">
                                <button className="
bg-gradient-to-r
from-[#D7B25B]
to-[#A27B36]
text-white
w-[140px]
sm:w-[160px]
h-[50px]
sm:h-[60px]
rounded-md
font-semibold
text-[14px]
sm:text-[16px]
hover:from-[#E0BE74]
hover:to-[#B88A3F]
transition-all
duration-300
">
                                    Readmore
                                </button>
                            </Link>

                        </div>

                        {/* CARD 2 */}
                        <div className="
bg-white/[0.03]
backdrop-blur-md
border
border-white/10
rounded-[24px]
p-5
sm:p-6
min-h-[380px]
lg:h-[400px]
flex
flex-col
justify-between
transition-all
duration-300
hover:bg-white/[0.05]
hover:-translate-y-2
">
                            <h4 className="font-bold text-[14px] sm:text-[16px] text-[#D7B25B] mb-3">
                                Blogs
                            </h4>

                            <h3 className="
text-white
text-[16px]
sm:text-[18px]
font-semibold
leading-[1.5]
mb-3
">
                                Modular Kitchen Designs
                            </h3>

                            <div className="p-5 flex flex-col justify-between h-full">

                                <p className="
text-gray-300
text-[14px]
sm:text-[15px]
leading-[1.7]
sm:leading-[1.8]
mb-4
">
                                    Top Modular Kitchen Designs: The kitchen is not just the place where we cook, it is the place where we perform our most important duty of our livelihood. Kitchen Designs and space planning play a major role in creating a functional and stylish home.
                                </p>

                                <Link to="/blog/modular-kitchen-designs">
                                    <button className="
bg-gradient-to-r
from-[#D7B25B]
to-[#A27B36]
text-white
w-[140px]
sm:w-[160px]
h-[50px]
sm:h-[60px]
rounded-md
font-semibold
text-[14px]
sm:text-[16px]
hover:from-[#E0BE74]
hover:to-[#B88A3F]
transition-all
duration-300
">
                                        Readmore
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="
flex
flex-wrap
justify-center
items-center
gap-3
sm:gap-4
mt-12
sm:mt-16
px-4
">

                        {/* PREVIOUS */}
                        <Link to="/blog">
                            <button
                                className="
              px-4 sm:px-6
h-[40px] sm:h-[42px]
              rounded-md
              border
              bg-[#D7B25B]
              
              font-semibold
              text-[16px]
               hover:bg-[#D7B25B]
          hover:text-white
          transition
            "
                            >
                                Previous
                            </button>
                        </Link>

                        {/* PAGE 1 */}
                        <Link to="/blog">
                            <button
                                className="
          w-[42px]
          h-[42px]
          rounded-md
          border
         border-[#D7B25B]
         bg-[#D7B25B]
          font-semibold
          text-[16px]
         hover:bg-[#D7B25B]
          hover:text-white
          transition
        "
                            >
                                1
                            </button>
                        </Link>

                        {/* PAGE 2 ACTIVE */}
                        <button
                            className="
          w-[42px]
          h-[42px]
          rounded-md
          border
         border-[#D7B25B]
         bg-[#D7B25B]
          font-semibold
          text-[16px]
         hover:bg-[#D7B25B]
          hover:text-white
          transition
        "
                        >
                            2
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
}

export default BlogPage2;