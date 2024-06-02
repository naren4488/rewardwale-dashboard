/* eslint-disable @next/next/no-img-element */
import {
  Aperture,
  Briefcase,
  ChevronRight,
  FileText,
  Joystick,
  LayoutDashboard,
  MonitorIcon,
  PieChart,
  Rows4,
  SearchIcon,
  Sheet,
  ShieldAlertIcon,
  UserPlus,
} from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";

type Props = {};

const sidebarItems = [
  { icon: <Briefcase />, text: "UI Elements" },
  { icon: <Rows4 />, text: "Form Elements" },
  { icon: <PieChart />, text: "Charts" },
  { icon: <Sheet />, text: "Tables" },
  { icon: <Joystick />, text: "Icons" },
  { icon: <UserPlus />, text: "User Pages" },
  { icon: <ShieldAlertIcon />, text: "Error Pages" },
];

export default function SideNavbar({}: Props) {
  return (
    <div className="border-r p-4 w-[240px] flex flex-col gap-6 ">
      {/* brand-name */}
      <section className="text-pink-600 flex gap-2 items-center hover:cursor-pointer ">
        <Aperture size={24} />
        <h2 className="text-2xl font-semibold ">Celestial</h2>
      </section>
      <Separator />

      {/* user */}
      <section className="flex items-center gap-2">
        <div className="size-8 bg-gray-200 rounded-full ">
          <img
            src="https://api.dicebear.com/8.x/personas/svg?seed=Molly"
            alt="avatar"
          />
        </div>
        <div>
          <h3 className=" font-semibold">Kennethe Osborne</h3>
          <p className="text-gray-400 text-sm">Welcome</p>
        </div>
      </section>

      {/* search input */}
      <section className="border rounded p-1 flex items-center">
        <input
          className=" focus:outline-none bg-transparent"
          type="text"
          placeholder="Type to search..."
        />
        <SearchIcon size={18} />
      </section>

      {/* sidebar items */}
      <p className="text-gray-400 text-sm">Dash menu</p>
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer">
          <MonitorIcon className=" text-blue-500" />
          <h3 className="text-pink-600 font-semibold">Dashboard</h3>
          <p className=" font-semibold bg-pink-600 rounded px-2 py-1 text-white">
            New
          </p>
        </div>
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center hover:bg-gray-200 hover:cursor-pointer py-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-500">{item.icon}</span>
              <h3 className=" font-semibold">{item.text}</h3>
            </div>
            <ChevronRight />
          </div>
        ))}
        <div className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer py-1">
          <FileText className="text-gray-500" />
          <h3 className=" font-semibold">Documentation</h3>
        </div>
      </section>
    </div>
  );
}
