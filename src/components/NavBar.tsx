import { Bell, Mail, User } from "lucide-react";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="w-full flex justify-between py-6 text-gray-500">
      <div className="flex gap-8">
        <p className=" hover:cursor-pointer">Calender</p>
        <p className=" hover:cursor-pointer text-black border-b-2 border-pink-600 font-semibold px-2">
          Statistic
        </p>
        <p className=" hover:cursor-pointer">Employee</p>
      </div>
      <div className="flex gap-8">
        <p className=" hover:cursor-pointer">Help</p>
        <div className="relative">
          <Mail className="text-black hover:cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-green-500 px-1 rounded-full text-white text-[10px]">
            2
          </span>
        </div>
        <div className="relative">
          <Bell className="text-black hover:cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 px-1 rounded-full text-white text-[10px]">
            3
          </span>
        </div>

        <span className="flex items-center gap-2 hover:cursor-pointer">
          <User className="text-black" />
          <p>Evan Morales</p>
        </span>
      </div>
    </div>
  );
}
