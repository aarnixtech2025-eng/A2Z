import { Link } from "react-router-dom";
import { FiImage, FiPhone, FiGlobe, FiFileText, FiMenu, FiSettings } from "react-icons/fi";

const settingsItems = [
  { title: "Site Identity", desc: "Manage logo and brand assets", icon: FiImage, path: "/admin/settings/logo" },
  { title: "Contact Details", desc: "Phone, email, and location", icon: FiPhone, path: "/admin/settings/contact" },
  { title: "Social Media", desc: "External profiles and links", icon: FiGlobe, path: "/admin/settings/social" },
  { title: "Footer Content", desc: "Copyright and legal text", icon: FiFileText, path: "/admin/settings/footer" },
  { title: "Navigation", desc: "Sidebar and menu structure", icon: FiMenu, path: "/admin/settings/menu" },
];

export default function Settings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-[#0b2545] dark:text-white">Settings</h1>
        <div className="w-16 h-1 bg-[#D7B25B] dark:bg-yellow-400 mt-2 rounded-full" />
        <p className="text-gray-500 dark:text-gray-400 mt-4">Manage your website configuration and core operational parameters.</p>
      </div>

      {/* Settings Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {settingsItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.path}
              className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#D7B25B]/30 dark:hover:border-blue-500/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0b2545]/5 dark:bg-blue-500/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0b2545] dark:group-hover:bg-blue-600 group-hover:text-[#D7B25B] dark:group-hover:text-white text-[#0b2545] dark:text-blue-400">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-extrabold text-[#0b2545] dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.desc}</p>
              
              <div className="text-[#D7B25B] dark:text-yellow-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Configure Settings →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}