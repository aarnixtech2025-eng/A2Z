import React from "react";

export default function MenuSettings() {
  // Mock data for demonstration - integrate with your API state
  const menuItems = [
    { name: "Home", route: "/", status: "Active" },
    { name: "About", route: "/about", status: "Active" },
    { name: "Services", route: "/services", status: "Active" },
    { name: "Contact", route: "/contact", status: "Inactive" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8 border-l-4 border-[#D7B25B] pl-4">
        <h2 className="text-3xl font-extrabold text-[#0b2545]">Menu Settings</h2>
        <p className="text-gray-600">Manage your website navigation structure.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0b2545] text-[#D7B25B]">
              <th className="p-4 font-bold uppercase tracking-wider">Menu Item</th>
              <th className="p-4 font-bold uppercase tracking-wider">Route Path</th>
              <th className="p-4 font-bold uppercase tracking-wider">Status</th>
              <th className="p-4 font-bold uppercase tracking-wider text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {menuItems.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="p-4 font-bold text-[#0b2545]">{item.name}</td>
                <td className="p-4 font-mono text-gray-600">{item.route}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-[#D7B25B] font-bold hover:underline mx-2">Edit</button>
                  <button className="text-red-600 font-bold hover:underline mx-2">Toggle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}