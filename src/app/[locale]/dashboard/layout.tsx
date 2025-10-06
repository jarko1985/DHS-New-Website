"use client";

import { PropsWithChildren } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[var(--color-blue-whale)] text-[var(--color-mercury)] pt-4">
      <div className="flex lg:flex-row flex-col">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
