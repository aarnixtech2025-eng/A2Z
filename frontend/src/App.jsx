import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";

/* =========================================================
   PUBLIC PAGES
========================================================= */

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Search = lazy(() => import("./pages/Search"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));

/* =========================================================
   SHOP PAGES
========================================================= */

const ShopCategories = lazy(() =>
  import("./pages/shop/Categories")
);

const ShopBrands = lazy(() =>
  import("./pages/shop/Brands")
);

const ShopMachineTypes = lazy(() =>
  import("./pages/shop/MachineTypes")
);

const ShopOEMModels = lazy(() =>
  import("./pages/shop/OEMModels")
);

const ShopSealSizes = lazy(() =>
  import("./pages/shop/SealSizes")
);

const ShopProducts = lazy(() =>
  import("./pages/shop/Products")
);

/* =========================================================
   INDUSTRIES
========================================================= */

const Industries = lazy(() =>
  import("./pages/industries/Industries")
);

const Construction = lazy(() =>
  import("./pages/industries/Construction")
);

const Mining = lazy(() =>
  import("./pages/industries/Mining")
);

const Cement = lazy(() =>
  import("./pages/industries/Cement")
);

const Steel = lazy(() =>
  import("./pages/industries/Steel")
);

const Manufacturing = lazy(() =>
  import("./pages/industries/Manufacturing")
);

const Infrastructure = lazy(() =>
  import("./pages/industries/Infrastructure")
);

/* =========================================================
   SHOP ACCOUNT PAGES
========================================================= */

const Login = lazy(() =>
  import("./pages/shopss/MyAccount")
);

const Cart = lazy(() =>
  import("./pages/shopss/Cart")
);

const Checkout = lazy(() =>
  import("./pages/shopss/Checkout")
);

const TermsCondition = lazy(() =>
  import("./pages/shopss/Termsondition")
);

/* =========================================================
   OIL SEAL LIST PAGES
========================================================= */

const NokOilSealList = lazy(() =>
  import("./pages/list/NokOilSealList")
);

const CfwOilSealList = lazy(() =>
  import("./pages/list/CfwOilSealList")
);

const SogOilSealList = lazy(() =>
  import("./pages/list/SogOilSealList")
);

const ParkerOilSealList = lazy(() =>
  import("./pages/list/ParkerOilSealList")
);

const FreudenbergOilSealList = lazy(() =>
  import("./pages/list/FreudenbergOilSealList")
);

const SimritOilSealList = lazy(() =>
  import("./pages/list/SimritOilSealList")
);

const CortecoOilSealList = lazy(() =>
  import("./pages/list/CortecoOilSealList")
);

const TtoOilSealList = lazy(() =>
  import("./pages/list/TtoOilSealList")
);

const TckOilSealList = lazy(() =>
  import("./pages/list/TckOilSealList")
);

const CrOilSealList = lazy(() =>
  import("./pages/list/CrOilSealList")
);

const NakOilSealList = lazy(() =>
  import("./pages/list/NakOilSealList")
);

const NdkOilSealList = lazy(() =>
  import("./pages/list/NdkOilSealList")
);

const MerkelOilSealList = lazy(() =>
  import("./pages/list/MerkelOilSealList")
);

const NationalOilSealList = lazy(() =>
  import("./pages/list/NationalOilSealList")
);

const ChrOilSealList = lazy(() =>
  import("./pages/list/ChrOilSealList")
);

const SakagamiOilSealList = lazy(() =>
  import("./pages/list/SakagamiOilSealList")
);

/* =========================================================
   BRAND DETAIL PAGES
========================================================= */

const CfwBrandDetail = lazy(() =>
  import("./pages/brands/CfwBrandDetail")
);

const NokBrandDetail = lazy(() =>
  import("./pages/brands/NokBrandDetail")
);

const SakagamiBrandDetail = lazy(() =>
  import("./pages/brands/SakagamiBrandDetail")
);

const SogBrandDetail = lazy(() =>
  import("./pages/brands/SogBrandDetail")
);

const ParkerBrandDetail = lazy(() =>
  import("./pages/brands/ParkerBrandDetail")
);

const FreudenbergBrandDetail = lazy(() =>
  import("./pages/brands/FreudenbergBrandDetail")
);

const SimritBrandDetail = lazy(() =>
  import("./pages/brands/SimritBrandDetail")
);

const CortecoBrandDetail = lazy(() =>
  import("./pages/brands/CortecoBrandDetail")
);

const TckBrandDetail = lazy(() =>
  import("./pages/brands/TckBrandDetail")
);

const NakBrandDetail = lazy(() =>
  import("./pages/brands/NakBrandDetail")
);

const MerkelBrandDetail = lazy(() =>
  import("./pages/brands/MerkelBrandDetail")
);

const NationalBrandDetail = lazy(() =>
  import("./pages/brands/NationalBrandDetail")
);

/* =========================================================
   BRAND SEAL PAGES
========================================================= */

const RodSeals = lazy(() =>
  import("./pages/brands/RodSeals")
);

const ParkerSeals = lazy(() =>
  import("./pages/brands/ParkerSeals")
);

const NokSeals = lazy(() =>
  import("./pages/brands/NokSeals")
);

const ParkerORingKit = lazy(() =>
  import("./pages/brands/ParkerORingKit")
);

const SogSeals = lazy(() =>
  import("./pages/brands/SogSeals")
);

const TtoSeals = lazy(() =>
  import("./pages/brands/TtoSeals")
);

const NakSeals = lazy(() =>
  import("./pages/brands/NakSeals")
);

const ChrSeals = lazy(() =>
  import("./pages/brands/ChrSeals")
);

const OilSealShaftSeal2 = lazy(() =>
  import("./pages/brands/OilSealShaftSeal2")
);

const OilSealShaftSeal1 = lazy(() =>
  import("./pages/brands/OilSealShaftSeal1")
);

/* =========================================================
   GENERAL LIST PAGES
========================================================= */

const OEMList = lazy(() =>
  import("./pages/list/OEMList")
);

const MachinesList = lazy(() =>
  import("./pages/list/MachinesList")
);

const SealsProfilesList = lazy(() =>
  import("./pages/list/SealsProfilesList")
);

/* =========================================================
   DYNAMIC BRAND PAGE
========================================================= */

const BrandDetail = lazy(() =>
  import("./pages/BrandDetail")
);

/* =========================================================
   SEAL INFORMATION PAGES
========================================================= */

const SealKitsInfo = lazy(() =>
  import("./pages/SealKitsInfo")
);

const SealKitsAndOilSeals = lazy(() =>
  import("./pages/SealKitsAndOilSeals")
);

const HydraulicCylinderSealKits = lazy(() =>
  import("./pages/HydraulicCylinderSealKits")
);

const RodSeal = lazy(() =>
  import("./pages/RodSeal")
);

const WiperSeal = lazy(() =>
  import("./pages/WiperSeal")
);

const ORing = lazy(() =>
  import("./pages/ORing")
);

const WearRingGuideStrip = lazy(() =>
  import("./pages/WearRingGuideStrip")
);

const TypesOfSealsDifferentUsage = lazy(() =>
  import("./pages/TypesOfSealsDifferentUsage")
);

const TiltLiftBladeSealKit = lazy(() =>
  import("./pages/TiltLiftBladeSealKit")
);

const PneumaticCylinder = lazy(() =>
  import("./pages/PneumaticCylinder")
);

const DoubleActingPistonSeals = lazy(() =>
  import("./pages/DoubleActingPistonSeals")
);

const VeePackSeals = lazy(() =>
  import("./pages/VeePackSeals")
);

const RockBreakerSealKits = lazy(() =>
  import("./pages/RockBreakerSealKits")
);

const Kastas = lazy(() =>
  import("./pages/Kastas")
);

/* =========================================================
   NOT FOUND
========================================================= */

const NotFound = lazy(() =>
  import("./pages/NotFound")
);

/* =========================================================
   ADMIN PAGES
========================================================= */

const AdminBlog = lazy(() =>
  import("./pages/admin/Blog/Blog")
);

const AdminDashboard = lazy(() =>
  import("./pages/admin/Dashboard")
);

const AdminProducts = lazy(() =>
  import("./pages/admin/Products")
);

const AdminCategories = lazy(() =>
  import("./pages/admin/Categories")
);

const AdminBrands = lazy(() =>
  import("./pages/admin/Brands")
);

const AdminMachines = lazy(() =>
  import("./pages/admin/Machines")
);

const AdminOEMModels = lazy(() =>
  import("./pages/admin/OEMModels")
);

const AdminSEOPages = lazy(() =>
  import("./pages/admin/SEOPages")
);

const AdminOrders = lazy(() =>
  import("./pages/admin/Orders")
);

const AdminCustomers = lazy(() =>
  import("./pages/admin/Customers")
);

const AdminMerchantFeed = lazy(() =>
  import("./pages/admin/MerchantFeed")
);

const AdminReports = lazy(() =>
  import("./pages/admin/Reports")
);

const AdminSettings = lazy(() =>
  import("./pages/admin/Settings")
);

/* =========================================================
   PAGE LOADER
========================================================= */

function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#d71920]" />
        </div>

        <div className="text-center">
          <h3 className="text-base font-semibold text-gray-800">
            A2Z Seals
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* =================================================
            PUBLIC WEBSITE
        ================================================= */}

        <Route element={<Layout />}>
          <Route index element={<Home />} />

          {/* SHOP */}

          <Route path="shop" element={<Shop />} />

          <Route
            path="shop/categories"
            element={<ShopCategories />}
          />

          <Route
            path="shop/brands"
            element={<ShopBrands />}
          />

          <Route
            path="shop/machine-types"
            element={<ShopMachineTypes />}
          />

          <Route
            path="shop/oem-models"
            element={<ShopOEMModels />}
          />

          <Route
            path="shop/seal-sizes"
            element={<ShopSealSizes />}
          />

          <Route
            path="shop/products"
            element={<ShopProducts />}
          />

          {/* INDUSTRIES */}

          <Route
            path="industries"
            element={<Industries />}
          />

          <Route
            path="industries/construction"
            element={<Construction />}
          />

          <Route
            path="industries/mining"
            element={<Mining />}
          />

          <Route
            path="industries/cement"
            element={<Cement />}
          />

          <Route
            path="industries/steel"
            element={<Steel />}
          />

          <Route
            path="industries/manufacturing"
            element={<Manufacturing />}
          />

          <Route
            path="industries/infrastructure"
            element={<Infrastructure />}
          />

          {/* GENERAL */}

          <Route
            path="search"
            element={<Search />}
          />

          <Route
            path="blog"
            element={<Blog />}
          />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          <Route
            path="quote"
            element={<Quote />}
          />

          <Route
            path="login"
            element={<Login />}
          />

          <Route
            path="cart"
            element={<Cart />}
          />

          <Route
            path="checkout"
            element={<Checkout />}
          />

          <Route
            path="terms-conditions"
            element={<TermsCondition />}
          />

          {/* =================================================
              OIL SEAL LIST PAGES
          ================================================= */}

          <Route
            path="list/nok-oil-seal"
            element={<NokOilSealList />}
          />

          <Route
            path="list/cfw-oil-seal"
            element={<CfwOilSealList />}
          />

          <Route
            path="list/sog-oil-seal"
            element={<SogOilSealList />}
          />

          <Route
            path="list/parker-oil-seal"
            element={<ParkerOilSealList />}
          />

          <Route
            path="list/freudenberg-oil-seal"
            element={<FreudenbergOilSealList />}
          />

          <Route
            path="list/simrit-oil-seal"
            element={<SimritOilSealList />}
          />

          <Route
            path="list/corteco-oil-seal"
            element={<CortecoOilSealList />}
          />

          <Route
            path="list/tto-oil-seal"
            element={<TtoOilSealList />}
          />

          <Route
            path="list/tck-oil-seal"
            element={<TckOilSealList />}
          />

          <Route
            path="list/cr-oil-seal"
            element={<CrOilSealList />}
          />

          <Route
            path="list/national-oil-seal"
            element={<NationalOilSealList />}
          />

          <Route
            path="list/merkel-oil-seal"
            element={<MerkelOilSealList />}
          />

          <Route
            path="list/ndk-oil-seal"
            element={<NdkOilSealList />}
          />

          <Route
            path="list/nak-oil-seal"
            element={<NakOilSealList />}
          />

          <Route
            path="list/chr-oil-seal"
            element={<ChrOilSealList />}
          />

          <Route
            path="list/sakagami-oil-seal"
            element={<SakagamiOilSealList />}
          />

          <Route
            path="list/oem"
            element={<OEMList />}
          />

          <Route
            path="list/machines"
            element={<MachinesList />}
          />

          <Route
            path="list/seal-profiles"
            element={<SealsProfilesList />}
          />

          {/* =================================================
              BRAND DETAIL PAGES
          ================================================= */}

          <Route
            path="brands/cfw"
            element={<CfwBrandDetail />}
          />

          <Route
            path="brands/nok"
            element={<NokBrandDetail />}
          />

          <Route
            path="brands/sakagami"
            element={<SakagamiBrandDetail />}
          />

          <Route
            path="brands/sog"
            element={<SogBrandDetail />}
          />

          <Route
            path="brands/parker"
            element={<ParkerBrandDetail />}
          />

          <Route
            path="brands/freudenberg"
            element={<FreudenbergBrandDetail />}
          />

          <Route
            path="brands/simrit"
            element={<SimritBrandDetail />}
          />

          <Route
            path="brands/corteco"
            element={<CortecoBrandDetail />}
          />

          <Route
            path="brands/tck"
            element={<TckBrandDetail />}
          />

          <Route
            path="brands/nak"
            element={<NakBrandDetail />}
          />

          <Route
            path="brands/merkel"
            element={<MerkelBrandDetail />}
          />

          <Route
            path="brands/national"
            element={<NationalBrandDetail />}
          />

          {/* BRAND SEALS */}

          <Route
            path="brands/rod-seals"
            element={<RodSeals />}
          />

          <Route
            path="brands/parker-seals"
            element={<ParkerSeals />}
          />

          <Route
            path="brands/nok-seals"
            element={<NokSeals />}
          />

          <Route
            path="brands/parker-o-ring-kit"
            element={<ParkerORingKit />}
          />

          <Route
            path="brands/sog-seals"
            element={<SogSeals />}
          />

          <Route
            path="brands/tto-seals"
            element={<TtoSeals />}
          />

          <Route
            path="brands/nak-seals"
            element={<NakSeals />}
          />

          <Route
            path="brands/chr-seals"
            element={<ChrSeals />}
          />

          <Route
            path="brands/oil-seal-shaft-seal-2"
            element={<OilSealShaftSeal2 />}
          />

          <Route
            path="brands/oil-seal-shaft-seal-1"
            element={<OilSealShaftSeal1 />}
          />

          {/* DYNAMIC BRAND ROUTE */}

          <Route
            path="brands/:brandSlug"
            element={<BrandDetail />}
          />

          {/* =================================================
              SEAL INFORMATION PAGES
          ================================================= */}

          <Route
            path="seal-kits-info"
            element={<SealKitsInfo />}
          />

          <Route
            path="seal-kits-and-oil-seals"
            element={<SealKitsAndOilSeals />}
          />

          <Route
            path="hydraulic-cylinder-seal-kits"
            element={<HydraulicCylinderSealKits />}
          />

          <Route
            path="rod-seal"
            element={<RodSeal />}
          />

          <Route
            path="wiper-seal"
            element={<WiperSeal />}
          />

          <Route
            path="o-ring"
            element={<ORing />}
          />

          <Route
            path="wear-ring-guide-strip"
            element={<WearRingGuideStrip />}
          />

          <Route
            path="types-of-seals-different-usage"
            element={<TypesOfSealsDifferentUsage />}
          />

          <Route
            path="tilt-lift-blade-seal-kit"
            element={<TiltLiftBladeSealKit />}
          />

          <Route
            path="pneumatic-cylinder"
            element={<PneumaticCylinder />}
          />

          <Route
            path="double-acting-piston-seals"
            element={<DoubleActingPistonSeals />}
          />

          <Route
            path="vee-pack-seals"
            element={<VeePackSeals />}
          />

          <Route
            path="rock-breaker-seal-kits"
            element={<RockBreakerSealKits />}
          />

          <Route
            path="kastas"
            element={<Kastas />}
          />

          {/* 404 */}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>

        {/* =================================================
            ADMIN PORTAL
        ================================================= */}

        <Route
          path="admin"
          element={<AdminLayout />}
        >
          <Route
            index
            element={<AdminDashboard />}
          />

          <Route
            path="products"
            element={<AdminProducts />}
          />

          <Route
            path="categories"
            element={<AdminCategories />}
          />

          <Route
            path="brands"
            element={<AdminBrands />}
          />

          <Route
            path="machines"
            element={<AdminMachines />}
          />

          <Route
            path="oem-models"
            element={<AdminOEMModels />}
          />

          <Route
            path="seo-pages"
            element={<AdminSEOPages />}
          />

          <Route
            path="blogs"
            element={<AdminBlog />}
          />

          <Route
            path="orders"
            element={<AdminOrders />}
          />

          <Route
            path="customers"
            element={<AdminCustomers />}
          />

          <Route
            path="merchant-feed"
            element={<AdminMerchantFeed />}
          />

          <Route
            path="reports"
            element={<AdminReports />}
          />

          <Route
            path="settings"
            element={<AdminSettings />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;