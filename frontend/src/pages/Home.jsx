import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import PremiumBrands from "../components/PremiumBrands";
import OurProducts from "../components/OurProducts";
import FeaturedProducts from "../components/FeaturedProducts";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <PremiumBrands />
      <OurProducts />
      <FeaturedProducts />
      <Contact />
    </>
  );
}

export default Home;
