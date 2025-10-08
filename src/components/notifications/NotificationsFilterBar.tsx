"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Filter, Search, X } from "lucide-react";
import type { NotificationType } from "@/types/notifications";

export type TimeRange = "all" | "week" | "month";

type Props = {
  search: string;
  onSearch: (v: string) => void;
  typeFilter: NotificationType | "all";
  onTypeFilter: (t: NotificationType | "all") => void;
  timeRange: TimeRange;
  onTimeRange: (t: TimeRange) => void;
  onClear: () => void;
};

const typeChips: (NotificationType | "all")[] = [
  "all",
  "system",
  "market",
  "compliance",
  "announcements",
  "security",
];

export const NotificationsFilterBar: FC<Props> = ({
  search,
  onSearch,
  typeFilter,
  onTypeFilter,
  timeRange,
  onTimeRange,
  onClear,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-[var(--color-blue)]/50 p-3 sm:p-4",
        "shadow-sm backdrop-blur-sm"
      )}
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Top row: Title + quick time range */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-[var(--color-mercury)]/90" />
            <h2 className="text-white text-lg font-semibold">Platform Updates</h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={timeRange === "all" ? "default" : "secondary"}
              className={cn(
                timeRange === "all"
                  ? "ramp-bg text-white border-0"
                  : "bg-white/5 text-[var(--color-mercury)] hover:bg-white/10"
              )}
              onClick={() => onTimeRange("all")}
            >
              All Time
            </Button>
            <Button
              size="sm"
              variant={timeRange === "month" ? "default" : "secondary"}
              className={cn(
                timeRange === "month"
                  ? "ramp-bg text-white border-0"
                  : "bg-white/5 text-[var(--color-mercury)] hover:bg-white/10"
              )}
              onClick={() => onTimeRange("month")}
            >
              This Month
            </Button>
            <Button
              size="sm"
              variant={timeRange === "week" ? "default" : "secondary"}
              className={cn(
                timeRange === "week"
                  ? "ramp-bg text-white border-0"
                  : "bg-white/5 text-[var(--color-mercury)] hover:bg-white/10"
              )}
              onClick={() => onTimeRange("week")}
            >
              This Week
            </Button>

            {search || typeFilter !== "all" || timeRange !== "all" ? (
              <Button
                size="sm"
                variant="ghost"
                className="text-[var(--color-mercury)] hover:text-white"
                onClick={onClear}
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            ) : null}
          </div>
        </div>

        {/* Second row: chips + search */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {typeChips.map((chip) => {
              const active = chip === typeFilter;
              return (
                <button
                  key={chip}
                  onClick={() => onTypeFilter(chip)}
                  className={cn(
                    "text-xs sm:text-sm px-3 py-1.5 rounded-full border transition",
                    "hover:scale-[1.02] active:scale-[0.98]",
                    active
                      ? "ramp-bg text-white border-0 shadow"
                      : "bg-white/5 text-[var(--color-mercury)] border-white/10 hover:bg-white/10"
                  )}
                >
                  {chip === "all" ? "All" : chip.charAt(0).toUpperCase() + chip.slice(1)}
                </button>
              );
            })}
          </div>

          <div className="relative xl:min-w-[450px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-mercury)]" />
            <Input
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search updates, maintenance notes, or trading pairs…"
              className="pl-9 bg-[var(--color-blue)]/60 placeholder:text-xs border-white/10 text-white placeholder:text-[var(--color-mercury)]/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
