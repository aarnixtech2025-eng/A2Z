function Dashboard() {
  const stats = [
    { label: "Total Products", value: "5,234", change: "+12%", icon: "📦", color: "bg-blue-500" },
    { label: "Total Orders", value: "1,892", change: "+8%", icon: "🛒", color: "bg-green-500" },
    { label: "Total Customers", value: "847", change: "+15%", icon: "👥", color: "bg-purple-500" },
    { label: "Revenue", value: "₹12.5L", change: "+23%", icon: "💰", color: "bg-brand-600" },
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "Rajesh Kumar", product: "Seal Kit", amount: "₹2,500", status: "Completed" },
    { id: "#ORD-002", customer: "Priya Singh", product: "Oil Seal", amount: "₹150", status: "Pending" },
    { id: "#ORD-003", customer: "Amit Patel", product: "O-Ring Kit", amount: "₹800", status: "Processing" },
    { id: "#ORD-004", customer: "Suresh Reddy", product: "Piston Seal", amount: "₹350", status: "Completed" },
    { id: "#ORD-005", customer: "Anita Das", product: "Hydraulic Seal", amount: "₹1,200", status: "Pending" },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}

 
 
            className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-sm transition-all hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                <p className="mt-2 text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-green-400">{stat.change}</p>
              </div>
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color} text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="rounded-2xl border border-gray-700 bg-gray-800 shadow-sm">
        <div className="border-b border-gray-700 px-6 py-4">
          <h2 className="text-lg font-bold text-white">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-brand-400">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-white">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "Completed"
                          ? "bg-green-900 text-green-300"
                          : order.status === "Pending"
                          ? "bg-yellow-900 text-yellow-300"
                          : "bg-blue-900 text-blue-300"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
