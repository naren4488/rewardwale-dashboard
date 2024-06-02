import React from "react";

type Props = {};

export default function EmployeeCard({}: Props) {
  return (
    <div className="rounded border p-3 shadow-sm bg-gray-50 ">
      <h2 className="text-xl font-semibold mb-4">Sessions By Channel</h2>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center font-semibold">
          <p>Emplyee Name</p>
          <p>This Month</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-indigo-600">Connor Chandler</p>
          <p className=" text-gray-500">$1124</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-indigo-600">Russel Floyed</p>
          <p className=" text-gray-500">$857</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-indigo-600">Douglas white</p>
          <p className=" text-gray-500">$612</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-indigo-600">Alta fletcher</p>
          <p className=" text-gray-500">$233</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-indigo-600">Leanord Doe</p>
          <p className=" text-gray-500">$35</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-indigo-600">Helen Benson</p>
          <p className=" text-gray-500">$43</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-indigo-600">John Clant</p>
          <p className=" text-gray-500">$20</p>
        </div>
      </div>
    </div>
  );
}
