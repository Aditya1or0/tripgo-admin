"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Moon,
  Sparkles,
  ChevronsUpDown,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import Logo from "@/assets/logo.png";
import { mainNavItems, settingsNavItems } from "@/constants/nav-item";
import { SidebarProps } from "@/constants/sidebar-type";
import SidebarSection from "@/components/sidebar/sidebar-section";
import SidebarItem from "@/components/sidebar/sidebar-item";
import { Switch } from "@/components/ui/switch";

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <aside
      className={`h-screen border border-r border-gray-300/30 dark:border-gray-500/30 flex flex-col justify-between bg-zinc-200 dark:bg-[#15171B] transition-all duration-300 ease-in-out select-none ${isCollapsed ? "w-[76px] px-3 py-5" : "w-[260px] px-4 py-5"
        }`}
    >
      {/* Top Part */}
      <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar space-y-5">
        {/* Brand Logo & Collapse Toggle */}
        <div className="flex items-center justify-between min-h-[48px] px-1">          {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <Image
              src={Logo}
              alt="TripGo"
              width={180}
              height={60}
              className="h-10 w-auto object-contain dark:invert"
              priority
            />
          </Link>
        )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="size-4.5" />
            ) : (
              <PanelLeftClose className="size-4.5" />
            )}
          </button>
        </div>


        {/* Navigation Sections */}
        <div className="space-y-4 pt-1">
          <SidebarSection title="MAIN" isCollapsed={isCollapsed}>
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/dashboard" && pathname === "/");
              return (
                <SidebarItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  isActive={isActive}
                  isCollapsed={isCollapsed}
                  badge={item.badge}
                />
              );
            })}
          </SidebarSection>

          <SidebarSection title="SETTINGS" isCollapsed={isCollapsed}>
            {settingsNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SidebarItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  isActive={isActive}
                  isCollapsed={isCollapsed}
                />
              );
            })}
          </SidebarSection>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="pt-4 mt-auto space-y-4 border-t border-gray-100 dark:border-neutral-800/80">
        {/* Dark Mode Row */}
        <div
          className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between px-2"
            }`}
        >
          <div className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300">
            <Moon className="size-4 text-gray-500 dark:text-gray-400" />
            {!isCollapsed && (
              <span className="text-xs font-medium">Dark Mode</span>
            )}
          </div>
          {!isCollapsed && (
            <Switch
              checked={isDark}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              aria-label="Toggle dark mode"
            />
          )}
        </div>

      </div>
    </aside>
  );
}
