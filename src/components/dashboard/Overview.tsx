import { OverviewList } from "@/src/api/overviewApi";
import { Activity } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-3 gap-2">
        {OverviewList.slice(0, 4).map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`border p-4 rounded ${
                index === 0 ? "bg-[#2B748A] text-white" : "text-[#262626]"
              }`}
            >
              <div className="flex items-center justify-between font-semibold">
                <p className="text-[12px] uppercase">{item.title}</p>
                <p className="flex text-[12px] items-center gap-1 text-red-700">
                  <span>
                    <Activity size={16} />
                  </span>
                  <span>0.8</span>
                </p>
              </div>

              <h2 className="text-base mt-1 font-medium">{item.value}</h2>

              <p className="mt-1 font-medium ">{item.taka && <span>৳ {item.taka}</span>}</p>

              <div className="flex items-center justify-between text-[14px] mt-6">
                <p className="underline hover:text-red-700 duration-300 cursor-pointer">view total value</p>
                <p className="w-6 h-6 flex items-center justify-center">{Icon && <Icon className="w-4 h-4" />}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex gap-4">
        <div className="border border-gray-200 flex-3">
          <h2>chart</h2>
        </div>
        <div className="border border-yellow-400 flex-2">
          <h2>cart</h2>
        </div>
      </div>
    </div>
  );
};

export default Overview;
