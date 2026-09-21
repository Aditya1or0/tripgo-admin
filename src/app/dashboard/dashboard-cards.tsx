"use client";

import React from "react";
import { Package, DollarSign, TrendingUp, ArrowUpRight } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const metrics: MetricCardProps[] = [
  {
    label: "Total Products",
    value: "1,625",
    icon: Package,
    iconBg: "bg-[#EEF2FF] dark:bg-indigo-950/40",
    iconColor: "text-[#4F46E5] dark:text-indigo-400",
  },
  {
    label: "Total Sales",
    value: "10,892",
    icon: DollarSign,
    iconColor: "text-[#8B5CF6] dark:text-purple-400",
    iconBg: "bg-[#F5F3FF] dark:bg-purple-950/40",
  },
  {
    label: "Total Income",
    value: "$157,342",
    icon: TrendingUp,
    iconColor: "text-[#10B981] dark:text-emerald-400",
    iconBg: "bg-[#ECFDF5] dark:bg-emerald-950/40",
  },
  {
    label: "Total Expenses",
    value: "$12,453",
    icon: ArrowUpRight,
    iconColor: "text-[#F43F5E] dark:text-rose-400",
    iconBg: "bg-[#FFF1F2] dark:bg-rose-950/40",
  },
];

export default function DashCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="bg-white dark:bg-[#15171B] border border-[#EEF0F4] dark:border-neutral-800/80 rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-sm"
          >
            <div
              className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${metric.iconBg} ${metric.iconColor}`}
            >
              <Icon className="size-5.5" />
            </div>

            <div className="space-y-0.5">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block">
                {metric.label}
              </span>
              <p className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                {metric.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
