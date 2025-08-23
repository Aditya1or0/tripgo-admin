import Cards from "@/components/cards";
import { MapPinned, Wallet, CalendarCheck, Users } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Cards
          title="Total Trips"
          filesCount={1328}
          storageUsed="1.3GB"
          usedPercentage={65}
          bgColor="bg-white/80 dark:bg-[#444]"
          progressColor="bg-sky-500"
          icon={MapPinned}
          iconColor="text-sky-500"
        />
        <Cards
          title="Total Earnings"
          filesCount={2329}
          storageUsed="2.9GB"
          usedPercentage={72}
          bgColor="bg-white/80 dark:bg-[#444]"
          progressColor="bg-emerald-500"
          icon={Wallet}
          iconColor="text-emerald-500"
        />
        <Cards
          title="Total Bookings"
          filesCount={1986}
          storageUsed="1.7GB"
          usedPercentage={45}
          bgColor="bg-white/80 dark:bg-[#444]  dark:text-white"
          progressColor="bg-purple-500"
          icon={CalendarCheck}
          iconColor="text-purple-500"
        />
        <Cards
          title="Active Users"
          filesCount={328}
          storageUsed="1.1GB"
          usedPercentage={38}
          bgColor="bg-white/80 dark:bg-[#444]"
          progressColor="bg-cyan-500"
          icon={Users}
          iconColor="text-cyan-500"
        />
      </div>
    </div>
  );
}
