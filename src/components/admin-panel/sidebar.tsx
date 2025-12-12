"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/src/assets/logo/logo.svg";
import { ChevronRight, Menu as MenuIcon } from "lucide-react";
import { cn } from "@/src/utils/merge";

import Menu from "./menu";
import { useSidebar } from "./sidebar-context";

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
     
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 bg-white h-screen border-r dark:bg-zinc-950 shadow-md transition-all duration-300",
        isOpen ? "w-64" : "w-20"
      )}
    >
      {/* HEADER AREA */}
      <div className="relative flex items-center justify-center py-2">
        <div className={` ${isOpen ? "w-20 h-20" : "w-10 h-10"}`}>
          <Link href="/dashboard" className="">
       
            <Image
              src={logo}
              alt="Logo"
              height={120}
              width={120}
              className="object-cover w-full h-full"
            />
         
        </Link>
        </div>

        {/* TOGGLE BUTTON */}
        <button
          onClick={toggleSidebar}
          className={`  ${isOpen ? "-right-4 top-5 p-1":"-right-3 top-4 p-0.5"} absolute  bg-[#2B748A] text-white rounded border transition`}
        >
          <ChevronRight size={18}/>
        </button>
      </div>

      {/* MENU AREA */}
      <div className={` ${isOpen ? "h-[calc(100vh-60px)]":"h-[100vh]"} overflow-y-auto`}>
        <Menu isOpen={isOpen} />
      </div>
    </aside>
   
  );
}
