"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { city: "Delhi", bookings: 120 },
  { city: "Mumbai", bookings: 90 },
  { city: "Bangalore", bookings: 70 },
  { city: "Goa", bookings: 60 },
  { city: "Jaipur", bookings: 50 },
];

export default function BookingsBarChart() {
  return (
    <div className="bg-white/80 dark:bg-[#444] rounded-lg shadow p-4 mt-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Bookings by City
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Bar dataKey="bookings" fill="#1F8DB2" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
