import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
import Quote from "./pages/Quote";
import Industries from "./pages/industries/Cement";
import Construction from "./pages/industries/Construction";
import Mining from "./pages/industries/Mining";
import Cement from "./pages/industries/Cement";
import Steel from "./pages/industries/Steel";
import Manufacturing from "./pages/industries/Manufacturing";
import Infrastructure from "./pages/industries/Infrastructure";
import Login from "./pages/shopss/MyAccount";
import Cart from "./pages/shopss/Cart";
import Checkout from "./pages/shopss/Checkout";
import terms from "./pages/shopss/Termsondition";
import TermsCondition from "./pages/shopss/Termsondition";
// Listitems
import NokOilSealList from "./pages/list/NokOilSealList";
import OEMList from "./pages/list/OEMList";
import MachinesList from "./pages/list/MachinesList";
import SealsProfilesList from "./pages/list/SealsProfilesList";
import NotFound from "./pages/NotFound";



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
        <Route path="/industries" element={<Industries />} />

        {/* industrie */}
         <Route path="/industries/construction" element={<Construction />} />
        <Route path="/industries/mining" element={<Mining />} />
        <Route path="/industries/cement" element={<Cement />} />
        <Route path="/industries/steel" element={<Steel />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/infrastructure" element={<Infrastructure />} />


        <Route path="search" element={<Search />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="quote" element={<Quote />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="terms-conditions" element={<TermsCondition />} />
        {/* Listitems */}
        {/* List dropdown pages */}
<Route path="list/nok-oil-seal" element={<NokOilSealList />} />
<Route path="list/oem" element={<OEMList />} />
<Route path="list/machines" element={<MachinesList />} />
<Route path="list/seal-profiles" element={<SealsProfilesList />} />
        
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
