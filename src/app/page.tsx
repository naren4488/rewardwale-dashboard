import DeviceStatsCard from "@/components/DeviceStatsCard";
import EmployeeCard from "@/components/EmployeeCard";
import EventsCard from "@/components/EventsCard";
import NavBar from "@/components/NavBar";
import SalesCard from "@/components/SalesCard";
import SessionCard from "@/components/SessionCard";
import TitleCard from "@/components/TitleCard";
import { Calendar, ChevronDown, Info, LogOut } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <NavBar />

      <div className="flex flex-col gap-5 py-4 px-6 ">
        {/* header */}
        <section className="flex items-center justify-between">
          <div>
            <h1 className=" font-semibold text-2xl">Kenneth Osborne</h1>
            <p className=" text-gray-600 text-sm">
              Your last login: 21h ago from newzealand
            </p>
          </div>
          <div className="flex gap-4">
            <div className="rounded border p-2 shadow-sm bg-gray-50 flex items-center gap-2 hover:cursor-pointer">
              <Calendar size={16} />
              <p className="text-sm">Last 7 days</p>
              <ChevronDown size={16} />
            </div>
            <div className="rounded border p-2 shadow-sm bg-gray-50 flex items-center gap-2 hover:cursor-pointer">
              <LogOut size={16} />
              <p className="text-sm">Export</p>
            </div>
            <div className="rounded border p-2 shadow-sm bg-gray-50 flex items-center gap-2 hover:cursor-pointer">
              <Info size={16} />
              <p className="text-sm">Info</p>
            </div>
          </div>
        </section>

        {/* charts */}
        <section className="w-full">
          <div className=" grid grid-cols-3 max-lg:grid-cols-2 gap-6 mb-6">
            <SessionCard />
            <EventsCard />
            <DeviceStatsCard />
          </div>
          <div className=" grid grid-cols-4 max-lg:grid-cols-2 gap-6 mb-6">
            <EmployeeCard />
            <SalesCard />
            <TitleCard />
          </div>
        </section>
      </div>
    </div>
  );
}
