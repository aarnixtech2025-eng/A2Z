import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import ShopCategories from "./pages/shop/Categories";
import ShopBrands from "./pages/shop/Brands";
import ShopMachineTypes from "./pages/shop/MachineTypes";
import ShopOEMModels from "./pages/shop/OEMModels";
import ShopSealSizes from "./pages/shop/SealSizes";
import ShopProducts from "./pages/shop/Products";

import AdminDashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import AdminCategories from "./pages/admin/Categories";
import AdminBrands from "./pages/admin/Brands";
import AdminMachines from "./pages/admin/Machines";
import AdminOEMModels from "./pages/admin/OEMModels";
import AdminSEOPages from "./pages/admin/SEOPages";
import AdminBlog from "./pages/admin/Blog";
import AdminOrders from "./pages/admin/Orders";
import AdminCustomers from "./pages/admin/Customers";
import AdminMerchantFeed from "./pages/admin/MerchantFeed";
import AdminReports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";

function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/categories" element={<ShopCategories />} />
        <Route path="shop/brands" element={<ShopBrands />} />
        <Route path="shop/machine-types" element={<ShopMachineTypes />} />
        <Route path="shop/oem-models" element={<ShopOEMModels />} />
        <Route path="shop/seal-sizes" element={<ShopSealSizes />} />
        <Route path="shop/products" element={<ShopProducts />} />
        <Route path="search" element={<Search />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin portal */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="brands" element={<AdminBrands />} />
        <Route path="machines" element={<AdminMachines />} />
        <Route path="oem-models" element={<AdminOEMModels />} />
        <Route path="seo-pages" element={<AdminSEOPages />} />
        <Route path="blog" element={<AdminBlog />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="merchant-feed" element={<AdminMerchantFeed />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
