"use client";

import { DSeletor } from "@/src/components/dashboard/DSeletor";
import Overview from "@/src/components/dashboard/Overview";

export default function DashboardPage() {
  return (
    <div className="">
      {/* PAGE TITLE */}
      <div>
        <h1 className="text-base font-medium tracking-tight capitalize">
          Wellcome back admin
        </h1>
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-2">
          <p className="text-muted-foreground mt-1">
            Here&apos;s what&apos;s happening with your store today.
          </p>
          <div className="flex items-center gap-2">
            <ul className="lg:flex hidden items-center gap-2 text-sm font-medium text-gray-500">
              <li className="border rounded px-2 py-1 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
                Today
              </li>
              <li className="border rounded px-2 py-1 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
                This Week
              </li>
              <li className="border rounded px-2 py-1 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
                This Month
              </li>
              <li className="border rounded px-2 py-1 hover:bg-[#2B748A] hover:text-white duration-300 cursor-pointer">
                This Year
              </li>
            </ul>
            <div>
              <DSeletor />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Overview />
      </div>
    </div>
  );
}

// COMPONENT: KPI CARD
