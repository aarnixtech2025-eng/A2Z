import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const adminNav = [
  { label: "Dashboard", to: "/admin", icon: "📊" },
  { label: "Products", to: "/admin/products", icon: "📦" },
  { label: "Categories", to: "/admin/categories", icon: "🏷️" },
  { label: "Brands", to: "/admin/brands", icon: "🏢" },
  { label: "Machines", to: "/admin/machines", icon: "⚙️" },
  { label: "OEM Models", to: "/admin/oem-models", icon: "🔧" },
  { label: "SEO Pages", to: "/admin/seo-pages", icon: "🔍" },
  { label: "Blog", to: "/admin/blog", icon: "📝" },
  { label: "Orders", to: "/admin/orders", icon: "🛒" },
  { label: "Customers", to: "/admin/customers", icon: "👥" },
  { label: "Merchant Feed", to: "/admin/merchant-feed", icon: "📡" },
  { label: "Reports", to: "/admin/reports", icon: "📈" },
  { label: "Settings", to: "/admin/settings", icon: "⚙️" },
];

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
      isActive
        ? "bg-white text-brand-900 shadow-lg"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 transform bg-brand-900 transition-all lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${sidebarCollapsed ? "lg:w-20" : "lg:w-72"} w-72`}
      >
        <div className="flex h-20 items-center justify-between border-b border-brand-800 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-sm font-bold text-white shadow-lg">
              A2Z
            </div>
            <div className={`${sidebarCollapsed ? "lg:hidden" : ""}`}>
              <span className="block font-bold text-white text-lg">Admin Portal</span>
              <span className="block text-xs text-gray-400">A2Z Seals</span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Toggle sidebar collapse"
            onClick={() => setSidebarCollapsed((v) => !v)}
            className="hidden lg:block rounded-lg p-2 text-gray-400 hover:bg-brand-800 hover:text-white transition-colors"
          >
            <svg
              className={`h-5 w-5 transition-transform ${sidebarCollapsed ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <nav className="space-y-2 p-4">
          {adminNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/admin"}
              onClick={() => setSidebarOpen(false)}
              className={linkClass}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`${sidebarCollapsed ? "lg:hidden" : ""}`}>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md px-6 lg:px-8 shadow-sm">
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={() => setSidebarOpen((v) => !v)}
            className="rounded-xl p-2.5 text-brand-900 hover:bg-brand-50 lg:hidden transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-brand-900">
              A2Z Seals Admin
            </h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-800 hover:scale-105"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Site
          </Link>
        </header>
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
