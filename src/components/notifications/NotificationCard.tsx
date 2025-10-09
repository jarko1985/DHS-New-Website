"use client";

import { FC, memo } from "react";
import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { timeAgo } from "@/lib/date";
import type { NotificationItem } from "@/types/notifications";

type Props = {
  item: NotificationItem;
};

const typeColors: Record<NotificationItem["type"], string> = {
  system: "text-[var(--color-mercury)]",
  market: "text-[var(--color-orange)]",
  compliance: "text-[var(--color-elf-green)]",
  announcements: "text-[var(--color-mercury)]",
  security: "text-red-400",
};

export const NotificationCard: FC<Props> = memo(({ item }) => {
  const initials = item.user.name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group rounded-lg sm:rounded-xl border border-white/5 bg-[var(--color-blue)]/40",
        "hover:bg-[var(--color-blue)]/60 shadow-sm hover:shadow-lg hover:shadow-black/30",
        "p-2.5 sm:p-3 md:p-4 flex items-start gap-2.5 sm:gap-3 md:gap-4"
      )}
    >
      <Avatar className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 ring-2 ring-white/10 group-hover:ring-[var(--color-elf-green)]/40 transition shrink-0">
        <AvatarImage src={item.user.avatarUrl} alt={item.user.name} />
        <AvatarFallback className="bg-[var(--color-negative)] text-[var(--color-mercury)] text-xs sm:text-sm">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs sm:text-sm md:text-base leading-tight text-white">
            <span className="font-semibold ramp-text">{item.user.name}</span>{" "}
            <span className={cn("opacity-90", typeColors[item.type])}>
              {
                {
                  system: "system notification",
                  market: "market update",
                  compliance: "compliance notification",
                  announcements: "announcement",
                  security: "security alert",
                }[item.type]
              }
            </span>
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            <span className="text-[10px] sm:text-xs text-[var(--color-warning)] whitespace-nowrap">{timeAgo(item.createdAt)}</span>

            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-md p-1 sm:p-1.5 hover:bg-white/5">
                <MoreHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--color-mercury)]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 sm:w-44">
                <DropdownMenuItem className="text-xs sm:text-sm">Mark as read</DropdownMenuItem>
                <DropdownMenuItem className="text-xs sm:text-sm">Mute user</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 text-xs sm:text-sm">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-[var(--color-mercury)]/90">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
});

NotificationCard.displayName = "NotificationCard";
