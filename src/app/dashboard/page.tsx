"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard-header";
import DashCards from "./dashboard-cards";
import SalesRevenueChart from "./sales-revenue-chart";
import TopCategoriesChart from "./top-categories-chart";
import RecentActivity from "./recent-activity";
import TopProductsTable from "./top-products-table";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Header */}
      <DashboardHeader title="Dashboard" />

      {/* 4 Metric Stat Cards */}
      <DashCards />

      {/* Middle Row: Sales Revenue (8 cols) & Top Categories (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8">
          <SalesRevenueChart />
        </div>
        <div className="lg:col-span-4">
          <TopCategoriesChart />
        </div>
      </div>

      {/* Bottom Row: Recent Activity (5 cols) & Top Products (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-5">
          <RecentActivity />
        </div>
        <div className="lg:col-span-7">
          <TopProductsTable />
        </div>
      </div>
    </div>
  );
}
