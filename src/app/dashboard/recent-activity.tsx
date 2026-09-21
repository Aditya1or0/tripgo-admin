"use client";

import React from "react";
import {
  Clock,
  ShoppingCart,
  AlertTriangle,
  Tag,
  Monitor,
} from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeClass: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    title: "Order #2048",
    subtitle: "John Doe • 12 Jan 25",
    badge: "New Order",
    badgeClass: "bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950/40 dark:text-blue-400",
    icon: ShoppingCart,
    iconBg: "bg-[#EFF6FF] dark:bg-blue-950/40",
    iconColor: "text-[#3B82F6] dark:text-blue-400",
  },
  {
    id: "2",
    title: "Low Stock Alert",
    subtitle: "MacBook Air M2 • 10 Jan 25",
    badge: "Low Stock",
    badgeClass: "bg-[#FFF1F2] text-[#E11D48] dark:bg-rose-950/40 dark:text-rose-400",
    icon: AlertTriangle,
    iconBg: "bg-[#FFF1F2] dark:bg-rose-950/40",
    iconColor: "text-[#F43F5E] dark:text-rose-400",
  },
  {
    id: "3",
    title: 'Promo code "SUMMER20"',
    subtitle: "Applied 52 times • 8 Jan 25",
    badge: "Campaign",
    badgeClass: "bg-[#F5F3FF] text-[#7C3AED] dark:bg-purple-950/40 dark:text-purple-400",
    icon: Tag,
    iconBg: "bg-[#F5F3FF] dark:bg-purple-950/40",
    iconColor: "text-[#8B5CF6] dark:text-purple-400",
  },
  {
    id: "4",
    title: "System Update",
    subtitle: "Version 1.2.1 • 2 Jan 25",
    badge: "System",
    badgeClass: "bg-[#F3F4F6] text-[#4B5563] dark:bg-neutral-800 dark:text-gray-300",
    icon: Monitor,
    iconBg: "bg-[#F3F4F6] dark:bg-neutral-800",
    iconColor: "text-[#4B5563] dark:text-gray-300",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-[#15171B] border border-[#EEF0F4] dark:border-neutral-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-gray-500 dark:text-gray-400" />
          <h3 className="text-base font-semibold text-gray-950 dark:text-white tracking-tight">
            Recent Activity
          </h3>
        </div>
        <button
          type="button"
          className="text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium transition-colors"
        >
          See All
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 p-1 rounded-xl transition-colors hover:bg-gray-50/50 dark:hover:bg-neutral-900/40"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`size-10 rounded-full flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon className="size-4.5" />
                </div>
                <div className="truncate">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-400 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <span
                className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full shrink-0 ${item.badgeClass}`}
              >
                {item.badge}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
