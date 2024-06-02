import { Circle, LoaderCircle } from "lucide-react";
import React from "react";

type Props = {};

export default function SessionCard({}: Props) {
  return (
    <div className="rounded border p-3 shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Session By Channel</h2>
      <div className="flex items-center justify-between max-lg:flex-col">
        <div className="relative">
          <LoaderCircle size={140} className=" text-indigo-600" />
          <p className=" text-xl font-semibold absolute top-[55px] left-[55px]">
            84%
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 justify-between">
            <span className="flex items-center gap-2">
              <Circle size={8} className=" text-indigo-500" />
              <p>Firewalls(3)</p>
            </span>
            <p>4(100%)</p>
          </div>
          <div className="flex gap-4 justify-between">
            <span className="flex items-center gap-2">
              <Circle size={8} className=" text-indigo-500" />
              <p>Ports(12)</p>
            </span>
            <p>12(100%)</p>
          </div>
          <div className="flex gap-4 justify-between">
            <span className="flex items-center gap-2">
              <Circle size={8} className=" text-indigo-500" />
              <p>Servers(233)</p>
            </span>
            <p>2(100%)</p>
          </div>
          <div className="flex gap-4 justify-between">
            <span className="flex items-center gap-2">
              <Circle size={8} className=" text-indigo-500" />
              <p>Firewalls(3)</p>
            </span>
            <p>7(100%)</p>
          </div>
          <div className="flex gap-4 justify-between">
            <span className="flex items-center gap-2">
              <Circle size={8} className=" text-indigo-500" />
              <p>Firewalls(3)</p>
            </span>
            <p>6(70%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
