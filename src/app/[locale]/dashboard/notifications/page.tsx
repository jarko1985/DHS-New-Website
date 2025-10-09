"use client";

import { Bell } from "lucide-react";
import { NotificationsList } from "@/components/notifications/NotificationsList";
import { notificationsSeed } from "@/types/notifications";

export default function NotificationsPage() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ background: "var(--color-blue-whale)" }}
    >
      <section className="px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6">
        <header className="mb-4 sm:mb-5 md:mb-6 flex items-center gap-2.5 sm:gap-3">
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 grid place-items-center shrink-0">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--color-elf-green)]" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white truncate">Notifications</h1>
            <p className="text-[var(--color-mercury)]/80 text-xs sm:text-sm">
              Review updates and activity, filter by type, and search
            </p>
          </div>
        </header>

        <NotificationsList initial={notificationsSeed} />
      </section>
    </main>
  );
}
