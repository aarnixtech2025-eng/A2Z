import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { ThemeProvider } from "../context/ThemeContext";

export default function AdminLayout() {
  return (
    <ThemeProvider>
      <div className="flex dark:bg-gray-900">
        <AdminSidebar />

        <div className="flex flex-col flex-1 min-h-screen">
          <AdminHeader />

          <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <Outlet />
          </main>

          <AdminFooter />
        </div>
      </div>
    </ThemeProvider>
  );
}