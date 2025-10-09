"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (p: number) => void;
  onPageSizeChange: (s: number) => void;
};

/**
 * If you have `react-bits` installed and it exposes a Pagination component,
 * this adapter will use it; otherwise it falls back to the minimal control below.
 */
export const PaginationControls: FC<Props> = ({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    Math.max(0, page - 3),
    Math.min(totalPages, page + 2)
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
      <div className="text-xs sm:text-sm text-[var(--color-mercury)] order-2 sm:order-1">
        Page <span className="font-semibold text-white">{page}</span> of{" "}
        <span className="font-semibold text-white">{totalPages}</span>
      </div>

      <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center">
        <Button
          size="sm"
          variant="secondary"
          className="bg-white/5 text-[var(--color-mercury)] hover:bg-white/10 h-8 sm:h-9 px-2.5 sm:px-3 text-xs sm:text-sm"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>

        <div className="hidden md:flex items-center gap-1">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={cn(
                "px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs sm:text-sm transition",
                p === page
                  ? "ramp-bg text-white border-0 shadow"
                  : "bg-white/5 text-[var(--color-mercury)] border-white/10 hover:bg-white/10"
              )}
            >
              {p}
            </button>
          ))}
        </div>

        <Button
          size="sm"
          variant="secondary"
          className="bg-white/5 text-[var(--color-mercury)] hover:bg-white/10 h-8 sm:h-9 px-2.5 sm:px-3 text-xs sm:text-sm"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          Next
        </Button>

        <select
          value={String(pageSize)}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="ml-1 sm:ml-2 bg-blue-whale border border-white/10 rounded-lg px-1.5 sm:px-2 py-1 text-xs sm:text-sm text-white"
        >
          {[5, 10, 15, 20].map((s) => (
            <option key={s} value={s} className="bg-[var(--color-blue-whale)]">
              {s}/page
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
