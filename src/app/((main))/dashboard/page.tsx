import DashboardChart from "@/components/dasboard-chart";
import React from "react";

function page() {
  return (
    <div className="w-full">
      <div className="w-4/6 rounded bg-white px-10 pt-5 pb-7 shadow-md">
        <p className="text-xl font-semibold">Batch Quantity</p>
        <div className="mt-2 grid grid-cols-4 gap-4">
          <div className="border-r-2 border-r-blue-200 py-2">
            <p className="text-muted-foreground text-sm font-semibold">Total Today Batch</p>
            <p className="text-3xl font-bold">
              200 <span className="text-sm font-medium text-blue-500">Qty</span>{" "}
            </p>
          </div>
          <div className="border-r-2 border-r-blue-200 py-2">
            <p className="text-muted-foreground text-sm font-semibold">Total Week Batch</p>
            <p className="text-3xl font-bold">
              1656 <span className="text-sm font-medium text-blue-500">Qty</span>{" "}
            </p>
          </div>
          <div className="border-r-2 border-r-blue-200 py-2">
            <p className="text-muted-foreground text-sm font-semibold">Total Month Batch</p>
            <p className="text-3xl font-bold">
              6342 <span className="text-sm font-medium text-blue-500">Qty</span>{" "}
            </p>
          </div>
          <div className="py-2">
            <p className="text-muted-foreground text-sm font-semibold">Total Year Batch</p>
            <p className="text-3xl font-bold">
              431323 <span className="text-sm font-medium text-blue-500">Qty</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <DashboardChart />
      </div>
    </div>
  );
}

export default page;
