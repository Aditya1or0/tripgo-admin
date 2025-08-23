import Heading from "@/components/heading";
import DashCards from "./dashboard-cards";
import RevenueChart from "@/app/dashboard/revenue-chart";
import BookingsBarChart from "./booking-chart";
import TripStatusPieChart from "./trip-status-chart";

export default function Dashboard() {
  return (
    <div className="px-4 py-6">
      <Heading title="Dashboard" />

      <div className="mt-6 flex flex-col">
        <DashCards />

        <RevenueChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingsBarChart />
        <TripStatusPieChart />
      </div>
    </div>
  );
}
