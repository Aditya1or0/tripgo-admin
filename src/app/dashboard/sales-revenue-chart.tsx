"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Layers } from "lucide-react";

interface DataPoint {
  month: string;
  oneTime: number;
  recurring: number;
  oneTimeFormatted: string;
  recurringFormatted: string;
}

const monthlyData: DataPoint[] = [
  { month: "Jan", oneTime: 40000, recurring: 30000, oneTimeFormatted: "$40,000", recurringFormatted: "$30,000" },
  { month: "Feb", oneTime: 20000, recurring: 22000, oneTimeFormatted: "$20,000", recurringFormatted: "$22,000" },
  { month: "Mar", oneTime: 35000, recurring: 28000, oneTimeFormatted: "$35,000", recurringFormatted: "$28,000" },
  { month: "Apr", oneTime: 38000, recurring: 25000, oneTimeFormatted: "$6,000", recurringFormatted: "$25,000" },
  { month: "May", oneTime: 18000, recurring: 16000, oneTimeFormatted: "$18,000", recurringFormatted: "$16,000" },
  { month: "Jun", oneTime: 24000, recurring: 22000, oneTimeFormatted: "$24,000", recurringFormatted: "$22,000" },
  { month: "Jul", oneTime: 55000, recurring: 65000, oneTimeFormatted: "$55,000", recurringFormatted: "$65,000" },
  { month: "Aug", oneTime: 38000, recurring: 42000, oneTimeFormatted: "$38,000", recurringFormatted: "$42,000" },
];

const quarterlyData: DataPoint[] = [
  { month: "Q1", oneTime: 95000, recurring: 80000, oneTimeFormatted: "$95,000", recurringFormatted: "$80,000" },
  { month: "Q2", oneTime: 80000, recurring: 63000, oneTimeFormatted: "$80,000", recurringFormatted: "$63,000" },
  { month: "Q3", oneTime: 93000, recurring: 107000, oneTimeFormatted: "$93,000", recurringFormatted: "$107,000" },
  { month: "Q4", oneTime: 110000, recurring: 90000, oneTimeFormatted: "$110,000", recurringFormatted: "$90,000" },
];

const yearlyData: DataPoint[] = [
  { month: "2023", oneTime: 280000, recurring: 240000, oneTimeFormatted: "$280,000", recurringFormatted: "$240,000" },
  { month: "2024", oneTime: 378000, recurring: 340000, oneTimeFormatted: "$378,000", recurringFormatted: "$340,000" },
  { month: "2025", oneTime: 450000, recurring: 490000, oneTimeFormatted: "$450,000", recurringFormatted: "$490,000" },
];

// Custom Tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as DataPoint;
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-3 shadow-xl text-xs space-y-2 min-w-[170px] z-50">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#D4E0FD] shrink-0 inline-block" />
            <span className="text-gray-500 dark:text-gray-400 font-medium">One-Time Revenue</span>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">
            {data.oneTimeFormatted}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#5051F9] shrink-0 inline-block" />
            <span className="text-gray-500 dark:text-gray-400 font-medium">Recurring Revenue</span>
          </div>
          <span className="font-semibold text-gray-900 dark:text-white">
            {data.recurringFormatted}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export default function SalesRevenueChart() {
  const [period, setPeriod] = useState<"Monthly" | "Quarterly" | "Yearly">("Monthly");

  const activeData =
    period === "Monthly"
      ? monthlyData
      : period === "Quarterly"
      ? quarterlyData
      : yearlyData;

  return (
    <div className="bg-white dark:bg-[#15171B] border border-[#EEF0F4] dark:border-neutral-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
        {/* Title & Legends */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <Layers className="size-4 text-gray-500 dark:text-gray-400" />
            <h3 className="text-base font-semibold text-gray-950 dark:text-white tracking-tight">
              Sales Revenue
            </h3>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#D4E0FD]" />
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                One-Time Revenue
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#5051F9]" />
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                Recurring Revenue
              </span>
            </div>
          </div>
        </div>

        {/* Period Selector Tabs */}
        <div className="flex items-center bg-[#F4F5F8] dark:bg-neutral-900 p-1 rounded-xl border border-gray-200/60 dark:border-neutral-800 self-start sm:self-auto">
          {(["Monthly", "Quarterly", "Yearly"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setPeriod(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                period === tab
                  ? "bg-white dark:bg-neutral-800 text-gray-900 dark:text-white shadow-xs"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activeData}
            margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F3F6"
              className="dark:stroke-neutral-800/60"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
              tickFormatter={(value) => {
                if (value === 0) return "0";
                if (value >= 1000) return `${value / 1000}K`;
                return value;
              }}
              ticks={[0, 10000, 50000, 100000, 150000]}
              domain={[0, 150000]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(80, 81, 249, 0.04)" }} />
            <Bar
              dataKey="recurring"
              stackId="revenue"
              fill="#5051F9"
              barSize={28}
            />
            <Bar
              dataKey="oneTime"
              stackId="revenue"
              fill="#D4E0FD"
              radius={[6, 6, 0, 0]}
              barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
