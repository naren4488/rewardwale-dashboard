"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

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

export default function TitleCard({}: Props) {
  return (
    <div className="rounded border p-3 shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Card Title</h2>
      <div className="flex flex-col gap-1 mb-3">
        <p className=" text-blue-500">Total Earning</p>
        <p className=" text-2xl font-semibold">$287,493</p>
        <p className=" font-semibold">1.4% since last month</p>
      </div>
      <Separator className="mb-3" />
      <div className="flex flex-col gap-1 mb-3">
        <p className=" text-blue-500">Total Expense</p>
        <p className=" text-2xl font-semibold">$123,445</p>
        <p className=" font-semibold">5.4% since last month</p>
      </div>
      <ResponsiveContainer width={"100%"} height={150}>
        <BarChart data={data}>
          <Bar dataKey="online" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
