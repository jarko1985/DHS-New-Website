"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Filter } from "lucide-react";
import type { DateRangeKey } from "@/lib/date";
import type { TxKind } from "@/types/activities";

type Props = {
  activeKind: TxKind | "all";
  onKindChange: (k: TxKind | "all") => void;
  dateRange: DateRangeKey;
  onDateRangeChange: (k: DateRangeKey) => void;
};

const btnBase =
  "transition-all rounded-lg sm:rounded-xl px-2 sm:px-3 h-8 sm:h-9 text-xs sm:text-sm border border-transparent whitespace-nowrap";

const inactiveBtn =
  "bg-[var(--color-negative)] text-[var(--color-mercury)] hover:bg-[var(--color-positive)]";

const activeBtn =
  "ramp-bg text-white shadow-[0_6px_18px_rgba(228,122,90,.35)] hover:opacity-95";

export function FiltersBar({
  activeKind,
  onKindChange,
  dateRange,
  onDateRangeChange,
}: Props) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[var(--color-mercury)]">
        History
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-normal items-center gap-2 sm:gap-3">
        {/* Type filter buttons */}
        {([
          { key: "all", label: "All" },
          { key: "withdrawal", label: "Withdrawals" },
          { key: "deposit", label: "Deposits" },
          { key: "transfer", label: "Transfers" },
        ] as { key: TxKind | "all"; label: string }[]).map((b) => (
          <Button
            key={b.key}
            variant="ghost"
            onClick={() => onKindChange(b.key)}
            className={`${btnBase} ${
              activeKind === b.key ? activeBtn : inactiveBtn
            }`}
          >
            <Filter className="mr-1 sm:mr-1.5 h-3 w-3 sm:h-4 sm:w-4 opacity-80" />
            <span className="hidden sm:inline">{b.label}</span>
            <span className="sm:hidden">{b.label === "Withdrawals" ? "Withdraw" : b.label === "Deposits" ? "Deposit" : b.label === "Transfers" ? "Transfer" : b.label}</span>
          </Button>
        ))}

        {/* Date select */}
        <Select
          value={dateRange}
          onValueChange={(v: DateRangeKey) => onDateRangeChange(v)}
        >
          <SelectTrigger className="h-8 sm:h-9 w-full sm:w-[140px] md:w-[150px] bg-[var(--color-negative)] text-[var(--color-mercury)] border-none hover:bg-[var(--color-positive)] rounded-lg sm:rounded-xl text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 opacity-80" />
              <SelectValue placeholder="All Times" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-[var(--color-blue-whale)] text-[var(--color-mercury)] border border-[var(--color-negative)] text-xs sm:text-sm">
            <SelectItem value="this_month">This Month</SelectItem>
            <SelectItem value="this_week">This Week</SelectItem>
            <SelectItem value="all">All Times</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
