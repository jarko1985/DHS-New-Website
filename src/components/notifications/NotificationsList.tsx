"use client";

import { FC, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { NotificationCard } from "./NotificationCard";
import { NotificationsFilterBar, TimeRange } from "./NotificationsFilterBar";
import { PaginationControls } from "./PaginationControls";
import type { NotificationItem, NotificationType } from "@/types/notifications";

type Props = {
  initial: NotificationItem[];
};

function inTimeRange(iso: string, range: TimeRange) {
  if (range === "all") return true;
  const t = new Date(iso).getTime();
  const now = Date.now();
  const diffDays = (now - t) / (1000 * 60 * 60 * 24);
  if (range === "week") return diffDays <= 7;
  if (range === "month") return diffDays <= 31;
  return true;
}

export const NotificationsList: FC<Props> = ({ initial }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<NotificationType | "all">("all");
  const [timeRange, setTimeRange] = useState<TimeRange>("all");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return initial.filter((n) => {
      const matchesType = typeFilter === "all" ? true : n.type === typeFilter;
      const matchesTime = inTimeRange(n.createdAt, timeRange);
      const matchesSearch =
        q.length === 0 ||
        n.user.name.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q);
      return matchesType && matchesTime && matchesSearch;
    });
  }, [initial, search, typeFilter, timeRange]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);

  const pageSlice = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage, pageSize]);

  const clearAll = () => {
    setSearch("");
    setTypeFilter("all");
    setTimeRange("all");
    setPage(1);
  };

  // Reset page if filters/search change
  const onSearch = (v: string) => {
    setSearch(v);
    setPage(1);
  };
  const onType = (t: NotificationType | "all") => {
    setTypeFilter(t);
    setPage(1);
  };
  const onRange = (r: TimeRange) => {
    setTimeRange(r);
    setPage(1);
  };

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
      <NotificationsFilterBar
        search={search}
        onSearch={onSearch}
        typeFilter={typeFilter}
        onTypeFilter={onType}
        timeRange={timeRange}
        onTimeRange={onRange}
        onClear={clearAll}
      />

      <div className="rounded-xl sm:rounded-2xl border border-white/5 bg-[var(--color-blue)]/40 p-2 sm:p-3 md:p-4">
        <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
          <AnimatePresence mode="popLayout">
            {pageSlice.map((item) => (
              <NotificationCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-3 sm:mt-4 md:mt-5 pt-3 sm:pt-4 border-t border-white/5">
          <PaginationControls
            page={safePage}
            pageSize={pageSize}
            total={total}
            onPageChange={setPage}
            onPageSizeChange={(s) => {
              setPageSize(s);
              setPage(1);
            }}
          />
        </div>
      </div>
    </div>
  );
};
