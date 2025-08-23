"use client";

import {
  BadgePlus,
  History,
  Home,
  Plane,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { SidebarProps } from "@/constants/sidebar-type";
import { navItems } from "@/constants/nav-item";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={`${
        isCollapsed ? "w-16 px-2" : "w-64 px-6"
      } h-[calc(100vh-80px)] py-8 bg-white/60 dark:bg-[#555] text-gray-800 dark:text-gray-100 mx-6 my-10 rounded-lg flex flex-col justify-between transition-all duration-300 ease-in-out relative`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full p-1.5 shadow-md hover:shadow-lg transition-all duration-200 z-10"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>

      <div>
        {!isCollapsed && (
          <div className="mt-[-50px] mb-8">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-36 h-auto object-contain dark:invert"
                priority
              />
            </Link>
          </div>
        )}

        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`group relative flex items-center ${
                      isCollapsed ? "justify-center" : "gap-3"
                    } px-3 py-2 rounded transition overflow-hidden ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-sky-100 to-emerald-200/50 text-sky-600 dark:text-orange-800 dark:bg-gradient-to-r dark:from-orange-100 dark:to-rose-200/50 font-medium"
                        : "hover:bg-green-100/60 dark:hover:bg-orange-100 dark:hover:text-orange-800"
                    }`}
                  >
                    {pathname === item.href && !isCollapsed && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-sky-600 dark:bg-orange-500 rounded-r-lg" />
                    )}
                    <div className="flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>

                    {!isCollapsed && (
                      <span className="transition-opacity duration-300">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent side="right">{item.label}</TooltipContent>
                )}
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`flex items-center ${
          isCollapsed ? "flex-col space-y-4" : "justify-between"
        } mt-8`}
      >
        <div className="relative group">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "gap-3"
            }`}
          >
            <User />
            {!isCollapsed && (
              <span className="hidden md:inline text-gray-700 dark:text-gray-200 font-medium">
                Username
              </span>
            )}
          </div>
        </div>

        <ThemeToggleButton showLabel={false} variant="circle" />
      </div>
    </div>
  );
}
