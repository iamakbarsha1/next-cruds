"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const TheLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="relative h-screen w-screen flex">
      {/* {showSidebar && (
        <aside className="w-64 bg-gray-800 text-white">
          <Sidebar />
        </aside>
      )} */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
      <main className="w-full flex flex-col">
        <Navbar />
        <main className="h-full w-full bg-slate-400">{children}</main>
      </main>
    </div>
  );
};

export default TheLayout;
