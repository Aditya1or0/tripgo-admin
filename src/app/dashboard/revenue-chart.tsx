"use client";

import { useTheme } from "next-themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Aug 1", revenue: 400 },
  { date: "Aug 2", revenue: 300 },
  { date: "Aug 3", revenue: 500 },
  { date: "Aug 4", revenue: 700 },
  { date: "Aug 5", revenue: 200 },
  { date: "Aug 6", revenue: 650 },
  { date: "Aug 7", revenue: 800 },
];

export default function RevenueChart() {
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === "dark" ? "#DB9935" : "#1F90B2";
  return (
    <div className="bg-white/80 dark:bg-[#444]  rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Revenue Overview
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#888888" />
          <YAxis stroke="#888888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={strokeColor}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
