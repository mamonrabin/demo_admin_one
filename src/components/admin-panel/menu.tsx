"use client";

import Link from "next/link";
import { Ellipsis, LogOut} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/src/utils/merge";
import { getMenuList } from "@/src/utils/menu-list";
import { Button } from "@/components/ui/button";
import { CollapseMenuButton } from "./collapse-menu-button";

interface MenuProps {
  isOpen?: boolean;
}

export default function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
   
      <nav className={` ${isOpen ? "md:h-screen" : ""}`}>
        <ul className={`flex flex-col  space-y-1 ${isOpen ? "px-2":"px-5"} `}>
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel && "pt-5")} key={index}>
              {/* Group Label */}
              {groupLabel ? (
                isOpen ? (
                  <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">{groupLabel}</p>
                ) : (
                  <TooltipProvider>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                      </TooltipTrigger>
                      <TooltipContent side="right">{groupLabel}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              ) : (
                <div className="pb-2" />
              )}

              {/* Menu Items */}
               {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              // variant={active ? "secondary" : "ghost"}
                              className={`w-full ${isOpen ? "":"w-12"} rounded hover:bg-[#2B748A] hover:text-white duration-300 ${active ? "bg-[#2B748A]" : "bg-white text-[#262626]"} transition justify-start h-10 mb-1 `}
                              asChild
                            >
                              <Link href={href} className={`${isOpen ? "":"-left-1 relative"}`}>
                                <span
                                  className={cn(isOpen === false ? "" : "mr-2")}
                                >
                                  <Icon size={18} />
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] truncate",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100"
                                  )}
                                >
                                  {label}
                                </p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  )
              )}
            </li>
          ))}

          {/* Sign Out */}
          <li className="w-full text-white mt-auto">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <button className="w-full cursor-pointer flex items-center justify-center h-10 mt-2 bg-[#2B748A] hover:bg-[#00475C] duration-300 rounded">
                    <LogOut size={18} className={cn(!isOpen ? "" : "mr-2")} />
                    <span className={cn(!isOpen ? "hidden" : "opacity-100")}>Sign out</span>
                  </button>
                </TooltipTrigger>
                {!isOpen && <TooltipContent side="right">Sign out</TooltipContent>}
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </nav>
    
  );
}
