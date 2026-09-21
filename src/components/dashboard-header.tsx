"use client";

import React from "react";
import Image from "next/image";
import { Search, Bell, Plus } from "lucide-react";

interface DashboardHeaderProps {
  title?: string;
}

export default function DashboardHeader({ title = "Dashboard" }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
      {/* Title */}
      <div>
        <h1 className="text-2xl lg:text-[26px] font-bold tracking-tight text-gray-950 dark:text-white">
          {title}
        </h1>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 md:gap-4 flex-wrap">
        {/* Team Avatars Group */}
        <div className="flex items-center">
          <div className="flex items-center -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Team member 1"
              className="size-8 rounded-full border-2 border-white dark:border-[#0E0F12] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Team member 2"
              className="size-8 rounded-full border-2 border-white dark:border-[#0E0F12] object-cover"
            />
            <div className="size-8 rounded-full border-2 border-white dark:border-[#0E0F12] bg-[#F1F3F7] dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-[11px] font-semibold flex items-center justify-center">
              +2
            </div>
          </div>

          {/* Add member button */}
          <button
            type="button"
            className="ml-2 size-8 rounded-full border border-dashed border-gray-300 dark:border-neutral-700 hover:border-gray-400 dark:hover:border-neutral-500 flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            title="Add team member"
          >
            <Plus className="size-3.5" />
          </button>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            className="size-9 rounded-full bg-white dark:bg-neutral-900 border border-gray-200/80 dark:border-neutral-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors shadow-2xs"
            title="Notifications"
          >
            <Bell className="size-4" />
          </button>
          <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full ring-2 ring-white dark:ring-[#0E0F12]">
            24
          </span>
        </div>

        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <div className="flex items-center gap-2.5 w-60 md:w-68 bg-white dark:bg-neutral-900 border border-gray-200/80 dark:border-neutral-800 rounded-full px-3.5 py-1.5 shadow-2xs focus-within:border-gray-300 dark:focus-within:border-neutral-700 transition-colors">
            <Search className="size-4 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search anything"
              className="bg-transparent text-xs text-gray-800 dark:text-gray-200 placeholder:text-gray-400 outline-none w-full"
            />
            <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-medium text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
              ⌘ K
            </kbd>
          </div>
        </div>

        {/* User Profile Avatar */}
        <div className="relative cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
            alt="User profile"
            className="size-9.5 rounded-full object-cover ring-2 ring-white dark:ring-neutral-800 shadow-2xs"
          />
        </div>
      </div>
    </div>
  );
}
