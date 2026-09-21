"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-white/50 dark:bg-[#0E0F12] text-gray-900 dark:text-gray-100 font-sans antialiased">
      <div className="fixed top-0 left-0 h-screen z-40 shrink-0">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      <main
        className={`flex-1 min-h-screen transition-all duration-300 ease-in-out ${isCollapsed ? "ml-[76px]" : "ml-[260px]"
          }`}
      >
        <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
