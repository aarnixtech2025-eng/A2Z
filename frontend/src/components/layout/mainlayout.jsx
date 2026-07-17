import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


function MainLayout() {
  return (
    <div className="w-full overflow-x-hidden">

      <Header />

      <main className="w-full min-h-screen">
        <Outlet />
      </main>
      
      <Footer />


    </div>
  );
}

export default MainLayout;