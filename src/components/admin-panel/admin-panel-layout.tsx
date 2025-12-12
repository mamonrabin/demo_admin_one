"use client";

import { cn } from "@/src/utils/merge";

import { Sidebar } from "./sidebar";
import { useSidebar } from "./sidebar-context";
import TopHead from "./TopHead";

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-all duration-300 px-6",
          isOpen ? "lg:ml-64" : "ml-16"
        )}
      >
        <TopHead/>
        {children}
      </main>
    </>
  );
}
