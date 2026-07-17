import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";

export default function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex flex-col flex-1 min-h-screen">
        <AdminHeader />

        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>

        <AdminFooter />
      </div>
    </div>
  );
}