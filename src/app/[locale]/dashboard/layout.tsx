"use client";

import { PropsWithChildren } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[var(--color-blue-whale)] text-[var(--color-mercury)]">
      <div className="flex lg:flex-row flex-col">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
