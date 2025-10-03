"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // if you have shadcn utils; otherwise inline a small cn
import { CheckCircle2, Clock4, XCircle } from "lucide-react";
import type { TxStatus } from "@/types/activities";

export function StatusBadge({ status }: { status: TxStatus }) {
  const map = {
    completed: {
      icon: <CheckCircle2 className="h-4 w-4" />,
      bg: "bg-[var(--color-elf-green)]/10",
      text: "text-[var(--color-elf-green)]",
      label: "Completed",
    },
    pending: {
      icon: <Clock4 className="h-4 w-4" />,
      bg: "bg-[var(--color-orange)]/10",
      text: "text-[var(--color-orange)]",
      label: "Pending",
    },
    failed: {
      icon: <XCircle className="h-4 w-4" />,
      bg: "bg-red-500/10",
      text: "text-red-400",
      label: "Failed",
    },
  } as const;

  const cfg = map[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        cfg.bg,
        cfg.text
      )}
    >
      {cfg.icon}
      {cfg.label}
    </span>
  );
}
