"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Completed", value: 240 },
  { name: "Ongoing", value: 80 },
  { name: "Canceled", value: 30 },
];

const COLORS = [
  "oklch(64.8% 0.2 131.684)",
  "#DB9935",
  "oklch(71.2% 0.194 13.428)",
]; // green, yellow, red

export default function TripStatusPieChart() {
  return (
    <div className="bg-white/80 dark:bg-[#444] rounded-lg shadow p-4 mt-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Trip Status Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={50}
            paddingAngle={4}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
