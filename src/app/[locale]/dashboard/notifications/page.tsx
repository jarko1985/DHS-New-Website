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
      <section className="px-3 sm:px-6">
        <header className="mb-4 sm:mb-6 flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
            <Bell className="h-5 w-5 text-[var(--color-elf-green)]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Notifications</h1>
            <p className="text-[var(--color-mercury)]/80 text-sm">
              Review updates and activity, filter by type, and search
            </p>
          </div>
        </header>

        <NotificationsList initial={notificationsSeed} />
      </section>
    </main>
  );
}
