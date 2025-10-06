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
    <div className="flex items-center justify-between gap-3">
      <div className="text-sm text-[var(--color-mercury)]">
        Page <span className="font-semibold text-white">{page}</span> of{" "}
        <span className="font-semibold text-white">{totalPages}</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="secondary"
          className="bg-white/5 text-[var(--color-mercury)] hover:bg-white/10"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>

        <div className="hidden sm:flex items-center gap-1">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={cn(
                "px-3 py-1.5 rounded-lg border text-sm transition",
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
          className="bg-white/5 text-[var(--color-text-white)] hover:bg-white/10"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          Next
        </Button>

        <select
          value={String(pageSize)}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="ml-2 bg-[var(--color-blue)]/60 border border-white/10 rounded-lg px-2 py-1 text-sm text-[var(--color-blue-whale)]"
        >
          {[5, 10, 15, 20].map((s) => (
            <option key={s} value={s}>
              {s}/page
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
