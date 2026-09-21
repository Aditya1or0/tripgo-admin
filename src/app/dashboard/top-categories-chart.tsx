"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Award } from "lucide-react";

interface CategoryData {
  name: string;
  value: number;
  sales: string;
  percentage: string;
  color: string;
}

const categories: CategoryData[] = [
  {
    name: "Electronics",
    value: 68,
    sales: "$65,000",
    percentage: "68%",
    color: "#5051F9",
  },
  {
    name: "Fashion",
    value: 20,
    sales: "$25,000",
    percentage: "20%",
    color: "#EC4899",
  },
  {
    name: "Health & Wellness",
    value: 8,
    sales: "$10,000",
    percentage: "8%",
    color: "#F59E0B",
  },
  {
    name: "Home & Living",
    value: 4,
    sales: "$5,000",
    percentage: "4%",
    color: "#10B981",
  },
];

export default function TopCategoriesChart() {
  return (
    <div className="bg-white dark:bg-[#15171B] border border-[#EEF0F4] dark:border-neutral-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Award className="size-4 text-gray-500 dark:text-gray-400" />
          <h3 className="text-base font-semibold text-gray-950 dark:text-white tracking-tight">
            Top Categories
          </h3>
        </div>
        <button
          type="button"
          className="text-xs text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium transition-colors"
        >
          See All
        </button>
      </div>

      {/* Donut Chart with Centered Total */}
      <div className="relative w-full h-[180px] flex items-center justify-center my-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categories}
              cx="50%"
              cy="50%"
              innerRadius={58}
              outerRadius={78}
              paddingAngle={3}
              dataKey="value"
              strokeWidth={0}
              cornerRadius={4}
            >
              {categories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[11px] text-gray-400 dark:text-gray-400 font-medium">
            Total Sales
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-950 dark:text-white">
            $125,000
          </span>
        </div>
      </div>

      {/* Breakdown List */}
      <div className="space-y-2.5 pt-2">
        {categories.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <span
                className="size-2 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {item.name}
              </span>
            </div>

            <div className="flex items-center gap-2.5 font-medium">
              <span className="text-gray-950 dark:text-white">{item.sales}</span>
              <span className="text-gray-400 w-8 text-right">{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
