import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Banner from "./admin/pages/Banner";
import Inquiry from "./admin/pages/inquiry/inquiry";
import AdminRoutes from "./routes/AdminRoutes";
import About from "./admin/pages/about/About";
import Banners from "./admin/pages/banners/Banners";
import Blogs from "./admin/pages/blog/Blogs";
import Seo from "./admin/pages/seo/Seo";
import WhyChooseUs from "./admin/pages/why-choose-us/WhyChooseUs";
import Profile from "./admin/pages/profile/Profile";
import ForgotPassword from "./admin/pages/forgot-password/ForgotPassword";
import ForgotEmail from "./admin/pages/forgot-email/ForgotEmail";

import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Gallery from "./pages/photos";
import ThreeD from "./pages/hds";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
// import GalleryDetail from "./pages/GalleryDetail";
import BlogDetails from "./pages/BlogDetails";
import BlogPage2 from "./pages/BlogPage2";
import Testimonials from "./admin/pages/Testimonials";
import Service from "./admin/pages/Service";
import AdminGallery from "./admin/pages/Photo";
import AdminThreeD from "./admin/pages/HD";
import Portfolio from "./admin/pages/portfolio";
import Settings from "./admin/pages/settings/Settings";
import TestimonialsPage from "./pages/testimonialspage";
import LogoSettings from "./admin/pages/settings/LogoSettings";
import ContactSettings from "./admin/pages/settings/ContactSettings";
import SocialSettings from "./admin/pages/settings/SocialSettings";
import FooterSettings from "./admin/pages/settings/FooterSettings";
import MenuSettings from "./admin/pages/settings/MenuSettings";
import Courses from "./pages/courses";
import CoursesAdmin from "./admin/pages/courses/Courses";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import ImportedPage from "./pages/ImportedPage";
import NokOilSealList from "./pages/NokOilSealList";

export default function App() {



  return (
    <Routes>
            <Route path="/login" element={<Login />} />

      <Route
  path="/admin"
  element={
    <ProtectedRoute role="admin">
      <AdminLayout/>
    </ProtectedRoute>
  }
>
  <Route index element={<Dashboard />} />

  <Route
    path="about"
    element={<About />}
  />
  <Route
    path="why-choose-us"
    element={<WhyChooseUs />}
  />
  <Route
    path="banners"
    element={<Banners />}
  />
  <Route
    path="banner"
    element={<Banner />}
  />
   <Route
    path="adminlayout"
    element={<AdminLayout />}
  />
<Route
  path="blogs"
  element={<Blogs />}
/>
<Route
  path="seo"
  element={<Seo />}
/>
<Route
  path="portfolio"
  element={< Portfolio/>}
/>
<Route
  path="inquiries"
  element={<Inquiry />}
/>
<Route
  path="testimonials"
  element={< Testimonials/>}
/>
  <Route
    path="services"
    element={< Service/>}
  />
  <Route
    path="photos"
    element={< AdminGallery/>}
  />
  <Route
    path="portfolios"
    element={< AdminThreeD/>}
  />
  <Route
    path="settings"
    element={< Settings/>}
  />
  <Route
    path="settings/logo"
    element={< LogoSettings/>}
  />
  <Route
    path="settings/contact"
    element={< ContactSettings/>}
  />
  <Route
    path="settings/social"
    element={< SocialSettings/>}
  />
  <Route
    path="settings/footer"
    element={< FooterSettings/>}
  />
  <Route
    path="settings/menu"
    element={< MenuSettings/>}
  />
  <Route
  path="courses"
  element={< CoursesAdmin/>}
  />
  <Route
  path="profile"
  element={<Profile/>}
  />
  <Route
  path="forgot-password"
  element={<ForgotPassword/>}
  />
  <Route
  path="forgot-email"
  element={<ForgotEmail/>}
  />
</Route>
      {/* Layout Wrapper */}

      <Route path="/" element={<MainLayout />}>

        {/* Pages */}
        <Route index element={<Home />} />
        <Route path="about_us" element={<AboutUs/>} />
      
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="our_gallery" element={<Gallery />} />
        <Route path="our_portfolio" element={<ThreeD />} />
        <Route path="testimonialspage" element={<TestimonialsPage />} />
        {/* <Route path="gallery/:slug" element={<GalleryDetail />} /> */}

        <Route path="blog" element={<Blog />} />
        <Route path="blog/page/2" element={<BlogPage2 />} />
        <Route path="blog/:slug" element={<BlogDetails />} />
<Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="category/:slug" element={<CategoryProducts />} />
        <Route path="shop/product/:slug" element={<ProductDetails />} />
        <Route path="shop" element={<AllProducts />} />
        <Route path="seals/:slug" element={<ImportedPage />} />
        <Route path="oil-seal" element={<NokOilSealList listType="oil-seals" title="Oil Seal" basePath="/oil-seal" />} />
        <Route path="oil-seal/page/:page" element={<NokOilSealList listType="oil-seals" title="Oil Seal" basePath="/oil-seal" />} />
        <Route path="nok-oil-seal-list" element={<NokOilSealList />} />
        <Route path="nok-oil-seal-list/page/:page" element={<NokOilSealList />} />
        <Route path="oem-list" element={<NokOilSealList listType="oem" title="OEM List" basePath="/oem-list" />} />
        <Route path="oem-list/page/:page" element={<NokOilSealList listType="oem" title="OEM List" basePath="/oem-list" />} />
        <Route path="machines-list" element={<NokOilSealList listType="machines" title="Machine's List" basePath="/machines-list" />} />
        <Route path="machines-list/page/:page" element={<NokOilSealList listType="machines" title="Machine's List" basePath="/machines-list" />} />
        <Route path="seals-profiles-list" element={<NokOilSealList listType="seals" title="Seals Profiles List" basePath="/seals-profiles-list" />} />
        <Route path="seals-profiles-list/page/:page" element={<NokOilSealList listType="seals" title="Seals Profiles List" basePath="/seals-profiles-list" />} />
        <Route path=":slug" element={<CategoryProducts />} />
        </Route>

    </Routes>
  );
}