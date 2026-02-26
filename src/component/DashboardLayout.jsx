import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

