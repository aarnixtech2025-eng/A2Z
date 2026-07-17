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
        <h1 className="text-3xl font-extrabold text-[#0b2545]">Settings</h1>
        <div className="w-16 h-1 bg-[#D7B25B] mt-2 rounded-full" />
        <p className="text-gray-500 mt-4">Manage your website configuration and core operational parameters.</p>
      </div>

      {/* Settings Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {settingsItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.path}
              className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#D7B25B]/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0b2545]/5 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0b2545] group-hover:text-[#D7B25B] text-[#0b2545]">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-extrabold text-[#0b2545] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
              
              <div className="text-[#D7B25B] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Configure Settings →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}