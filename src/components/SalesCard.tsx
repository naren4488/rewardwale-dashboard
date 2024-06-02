"use client";

import { Globe, GlobeLock } from "lucide-react";
import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Feb",
    online: 3000,
    offline: 2400,
    marketing: 2000,
  },
  {
    name: "Mar",
    online: 3200,
    offline: 1998,
    marketing: 2210,
  },
  {
    name: "Apr",
    online: 2100,
    offline: 2000,
    marketing: 1590,
  },
  {
    name: "May",
    online: 2780,
    offline: 1908,
    marketing: 1700,
  },
  {
    name: "Jun",
    online: 1890,
    offline: 2800,
    marketing: 1881,
  },
  {
    name: "Jul",
    online: 2390,
    offline: 2100,
    marketing: 2500,
  },
];

export default function SalesCard({}: Props) {
  return (
    <div className="rounded border p-3 shadow-sm bg-gray-50 col-span-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Sessions By Channel</h2>
        <p className="bg-gray-200 p-1 rounded">Month</p>
      </div>
      <div className="mb-4 flex items-center gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <p>Online</p>
          </div>
          <p className="text-2xl font-semibold text-[#0077b6]">23,342</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <GlobeLock size={16}/>
            <p>Offline</p>
          </div>
          <p className="text-2xl font-semibold text-[#f48c06]">13,221</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <p>Marketing</p>
          </div>
          <p className="text-2xl font-semibold text-[#f72585]">1542</p>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="10 3" />
          <Legend />
          <XAxis dataKey="name" />
          <Line type="monotone" stroke="#0077b6" dataKey={"online"} />
          <Line type="monotone" stroke="#f48c06" dataKey={"offline"} />
          <Line type="monotone" stroke="#f72585" dataKey={"marketing"} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
