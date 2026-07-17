import { Routes, Route } from "react-router-dom";

import AdminLayout from "../admin/layout/AdminLayout";

import Dashboard from "../admin/pages/Dashboard";
import Service from "../admin/pages/Service";
import Gallery from "../admin/pages/Photo";
import ThreeD from "../admin/pages/HD";
import Portfolio from "../admin/pages/portfolio";
import Testimonials from "../admin/pages/Testimonials";

// Settings
import Settings from "../admin/pages/settings/Settings";
import LogoSettings from "../admin/pages/settings/LogoSettings";
import ContactSettings from "../admin/pages/settings/ContactSettings";
import SocialSettings from "../admin/pages/settings/SocialSettings";
import FooterSettings from "../admin/pages/settings/FooterSettings";
import MenuSettings from "../admin/pages/settings/MenuSettings";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>

        <Route index element={<Dashboard />} />

        <Route
          path="services"
          element={<Service />}
        />

        <Route
          path="photos"
          element={<Gallery />}
        />

        <Route
          path="hds"
          element={<ThreeD />}
        />

        <Route
          path="portfolio"
          element={<Portfolio />}
        />

        <Route
          path="testimonials"
          element={<Testimonials />}
        />

        {/* Settings */}

        <Route
          path="settings"
          element={<Settings />}
        />

        <Route
          path="settings/logo"
          element={<LogoSettings />}
        />

        <Route
          path="settings/contact"
          element={<ContactSettings />}
        />

        <Route
          path="settings/social"
          element={<SocialSettings />}
        />

        <Route
          path="settings/footer"
          element={<FooterSettings />}
        />

        <Route
          path="settings/menu"
          element={<MenuSettings />}
        />

      </Route>
    </Routes>
  );
}