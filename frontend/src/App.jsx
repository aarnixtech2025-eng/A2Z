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


//admin side
import AdminBlog from "./pages/admin/Blog/Blog";

import AdminDashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import AdminCategories from "./pages/admin/Categories";
import AdminBrands from "./pages/admin/Brands";
import AdminMachines from "./pages/admin/Machines";
import AdminOEMModels from "./pages/admin/OEMModels";
import AdminSEOPages from "./pages/admin/SEOPages";
// import AdminBlog from "./pages/admin/Blog";
import AdminOrders from "./pages/admin/Orders";
import AdminCustomers from "./pages/admin/Customers";
import AdminMerchantFeed from "./pages/admin/MerchantFeed";
import AdminReports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";
import Quote from "./pages/Quote";
import Industries from "./pages/industries/Industries";
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
import CfwOilSealList from "./pages/list/CfwOilSealList";
import SogOilSealList from "./pages/list/SogOilSealList";
import ParkerOilSealList from "./pages/list/ParkerOilSealList";
import FreudenbergOilSealList from "./pages/list/FreudenbergOilSealList";
import SimritOilSealList from "./pages/list/SimritOilSealList";
import CortecoOilSealList from "./pages/list/CortecoOilSealList";
import TtoOilSealList from "./pages/list/TtoOilSealList";
import TckOilSealList from "./pages/list/TckOilSealList";
import CrOilSealList from "./pages/list/CrOilSealList";
import NakOilSealList from "./pages/list/NakOilSealList";
import NdkOilSealList from "./pages/list/NdkOilSealList";
import MerkelOilSealList from "./pages/list/MerkelOilSealList";
import NationalOilSealList from "./pages/list/NationalOilSealList";
import ChrOilSealList from "./pages/list/ChrOilSealList";
import SakagamiOilSealList from "./pages/list/SakagamiOilSealList";
import CfwBrandDetail from "./pages/brands/CfwBrandDetail";
import NokBrandDetail from "./pages/brands/NokBrandDetail";
import SakagamiBrandDetail from "./pages/brands/SakagamiBrandDetail";
import SogBrandDetail from "./pages/brands/SogBrandDetail";
import ParkerBrandDetail from "./pages/brands/ParkerBrandDetail";
import FreudenbergBrandDetail from "./pages/brands/FreudenbergBrandDetail";
import SimritBrandDetail from "./pages/brands/SimritBrandDetail";
import CortecoBrandDetail from "./pages/brands/CortecoBrandDetail";
import TckBrandDetail from "./pages/brands/TckBrandDetail";
import NakBrandDetail from "./pages/brands/NakBrandDetail";
import MerkelBrandDetail from "./pages/brands/MerkelBrandDetail";
import NationalBrandDetail from "./pages/brands/NationalBrandDetail";
import RodSeals from "./pages/brands/RodSeals";
import ParkerSeals from "./pages/brands/ParkerSeals";
import NokSeals from "./pages/brands/NokSeals";
import ParkerORingKit from "./pages/brands/ParkerORingKit";
import SogSeals from "./pages/brands/SogSeals";
import TtoSeals from "./pages/brands/TtoSeals";
import NakSeals from "./pages/brands/NakSeals";
import ChrSeals from "./pages/brands/ChrSeals";
import OilSealShaftSeal2 from "./pages/brands/OilSealShaftSeal2";
import OilSealShaftSeal1 from "./pages/brands/OilSealShaftSeal1";
import OEMList from "./pages/list/OEMList";
import MachinesList from "./pages/list/MachinesList";
import SealsProfilesList from "./pages/list/SealsProfilesList";
import BrandDetail from "./pages/BrandDetail";
import SealKitsInfo from "./pages/SealKitsInfo";
import SealKitsAndOilSeals from "./pages/SealKitsAndOilSeals";
import HydraulicCylinderSealKits from "./pages/HydraulicCylinderSealKits";
import RodSeal from "./pages/RodSeal";
import WiperSeal from "./pages/WiperSeal";
import ORing from "./pages/ORing";
import WearRingGuideStrip from "./pages/WearRingGuideStrip";
import TypesOfSealsDifferentUsage from "./pages/TypesOfSealsDifferentUsage";
import TiltLiftBladeSealKit from "./pages/TiltLiftBladeSealKit";
import PneumaticCylinder from "./pages/PneumaticCylinder";
import DoubleActingPistonSeals from "./pages/DoubleActingPistonSeals";
import VeePackSeals from "./pages/VeePackSeals";
import RockBreakerSealKits from "./pages/RockBreakerSealKits";
import Kastas from "./pages/Kastas";
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
<Route path="list/cfw-oil-seal" element={<CfwOilSealList />} />
<Route path="list/sog-oil-seal" element={<SogOilSealList />} />
<Route path="list/parker-oil-seal" element={<ParkerOilSealList />} />
<Route path="list/freudenberg-oil-seal" element={<FreudenbergOilSealList />} />
<Route path="list/simrit-oil-seal" element={<SimritOilSealList />} />
<Route path="list/corteco-oil-seal" element={<CortecoOilSealList />} />
<Route path="list/tto-oil-seal" element={<TtoOilSealList />} />
<Route path="list/tck-oil-seal" element={<TckOilSealList />} />
<Route path="list/cr-oil-seal" element={<CrOilSealList />} />
<Route path="list/national-oil-seal" element={<NationalOilSealList />} />
<Route path="list/merkel-oil-seal" element={<MerkelOilSealList />} />
<Route path="list/ndk-oil-seal" element={<NdkOilSealList />} />
<Route path="list/nak-oil-seal" element={<NakOilSealList />} />
        
        {/* Brand detail pages */}
        <Route path="brands/cfw" element={<CfwBrandDetail />} />
        <Route path="brands/nok" element={<NokBrandDetail />} />
        <Route path="brands/sakagami" element={<SakagamiBrandDetail />} />
        <Route path="brands/sog" element={<SogBrandDetail />} />
        <Route path="brands/parker" element={<ParkerBrandDetail />} />
        <Route path="brands/freudenberg" element={<FreudenbergBrandDetail />} />
        <Route path="brands/simrit" element={<SimritBrandDetail />} />
        <Route path="brands/corteco" element={<CortecoBrandDetail />} />
        <Route path="brands/tck" element={<TckBrandDetail />} />
        <Route path="brands/nak" element={<NakBrandDetail />} />
        <Route path="brands/merkel" element={<MerkelBrandDetail />} />
        <Route path="brands/national" element={<NationalBrandDetail />} />
        <Route path="brands/rod-seals" element={<RodSeals />} />
        <Route path="brands/parker-seals" element={<ParkerSeals />} />
        <Route path="brands/nok-seals" element={<NokSeals />} />
        <Route path="brands/parker-o-ring-kit" element={<ParkerORingKit />} />
        <Route path="brands/sog-seals" element={<SogSeals />} />
        <Route path="brands/tto-seals" element={<TtoSeals />} />
        <Route path="brands/nak-seals" element={<NakSeals />} />
        <Route path="brands/chr-seals" element={<ChrSeals />} />
        <Route path="brands/oil-seal-shaft-seal-2" element={<OilSealShaftSeal2 />} />
        <Route path="brands/oil-seal-shaft-seal-1" element={<OilSealShaftSeal1 />} />
<Route path="list/chr-oil-seal" element={<ChrOilSealList />} />
<Route path="list/sakagami-oil-seal" element={<SakagamiOilSealList />} />
<Route path="list/oem" element={<OEMList />} />
<Route path="list/machines" element={<MachinesList />} />
<Route path="list/seal-profiles" element={<SealsProfilesList />} />
<Route path="brands/:brandSlug" element={<BrandDetail />} />
        <Route path="seal-kits-info" element={<SealKitsInfo />} />
        <Route path="/seal-kits-and-oil-seals" element={<SealKitsAndOilSeals />} />
        <Route path="hydraulic-cylinder-seal-kits" element={<HydraulicCylinderSealKits />} />
        <Route path="rod-seal" element={<RodSeal />} />
        <Route path="wiper-seal" element={<WiperSeal />} />
        <Route path="o-ring" element={<ORing />} />
        <Route path="wear-ring-guide-strip" element={<WearRingGuideStrip />} />
        <Route path="types-of-seals-different-usage" element={<TypesOfSealsDifferentUsage />} />
        <Route path="tilt-lift-blade-seal-kit" element={<TiltLiftBladeSealKit />} />
        <Route path="pneumatic-cylinder" element={<PneumaticCylinder />} />
        <Route path="double-acting-piston-seals" element={<DoubleActingPistonSeals />} />
        <Route path="vee-pack-seals" element={<VeePackSeals />} />
        <Route path="rock-breaker-seal-kits" element={<RockBreakerSealKits />} />
        <Route path="kastas" element={<Kastas />} />
                
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
         <Route path="blogs" element={<AdminBlog />} />
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
