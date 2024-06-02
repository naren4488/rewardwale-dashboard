"use client";

import React from "react";
import { Area, AreaChart, Legend, ResponsiveContainer } from "recharts";

type Props = {};

const data = [
  {
    name: "A",
    critical: 3000,
    error: 2400,
    warning: 2400,
  },
  {
    name: "B",
    critical: 3200,
    error: 1398,
    warning: 2210,
  },
  {
    name: "C",
    critical: 2000,
    error: 2000,
    warning: 2290,
  },
  {
    name: "D",
    critical: 2780,
    error: 1908,
    warning: 2000,
  },
  {
    name: "E",
    critical: 1890,
    error: 2800,
    warning: 2181,
  },
  {
    name: "F",
    critical: 2390,
    error: 2100,
    warning: 2500,
  },
];

export default function EventsCard({}: Props) {
  return (
    <div className="rounded border p-3 shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Events</h2>
      <ResponsiveContainer width={"100%"} height={200}>
        <AreaChart data={data}>
          <Legend />
          <Area
            type="monotone"
            stroke="#0077b6"
            fill="#0077b6"
            dataKey={"critical"}
          />
          <Area
            type="monotone"
            stroke="#f48c06"
            fill="#f48c06"
            dataKey={"warning"}
          />
          <Area
            type="monotone"
            stroke="#f72585"
            fill="#f72585"
            dataKey={"error"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
