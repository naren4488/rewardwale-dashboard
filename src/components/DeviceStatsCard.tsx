import React from "react";
import { Progress } from "./ui/progress";

type Props = {};

export default function DeviceStatsCard({}: Props) {
  return (
    <div className="rounded border p-3 shadow-sm bg-gray-50 ">
      <h2 className="text-xl font-semibold mb-4">Device Stats</h2>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p>Uptime</p>
          <p className=" text-gray-500">195 Days, 8 hours</p>
        </div>
        <div className="flex justify-between items-center">
          <p>First Seen</p>
          <p className=" text-gray-500">23 Sep 2019, 2:04PM</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Collected Time</p>
          <p className=" text-gray-500">23 Sep 2019, 2:04PM</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Memory space</p>
          <p className=" text-gray-500">168.3GB</p>
        </div>
        <Progress value={60} />
      </div>
    </div>
  );
}
