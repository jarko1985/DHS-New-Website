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
  commented: "text-[var(--color-mercury)]",
  posted: "text-[var(--color-orange)]",
  liked: "text-[var(--color-elf-green)]",
  mentioned: "text-[var(--color-mercury)]",
  followed: "text-[var(--color-mercury)]",
  added: "text-[var(--color-mercury)]",
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
        "group rounded-xl border border-white/5 bg-[var(--color-blue)]/40",
        "hover:bg-[var(--color-blue)]/60 shadow-sm hover:shadow-lg hover:shadow-black/30",
        "p-3 sm:p-4 flex items-start gap-3 sm:gap-4"
      )}
    >
      <Avatar className="h-11 w-11 ring-2 ring-white/10 group-hover:ring-[var(--color-elf-green)]/40 transition">
        <AvatarImage src={item.user.avatarUrl} alt={item.user.name} />
        <AvatarFallback className="bg-[var(--color-negative)] text-[var(--color-mercury)]">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm sm:text-base leading-tight text-white">
            <span className="font-semibold ramp-text">{item.user.name}</span>{" "}
            <span className={cn("opacity-90", typeColors[item.type])}>
              {
                {
                  commented: "commented on your post",
                  posted: "posted a new update",
                  liked: "liked your post",
                  mentioned: "mentioned you",
                  followed: "started following you",
                  added: "added you to a list",
                }[item.type]
              }
            </span>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-[var(--color-warning)]">{timeAgo(item.createdAt)}</span>

            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-md p-1.5 hover:bg-white/5">
                <MoreHorizontal className="h-4 w-4 text-[var(--color-mercury)]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem>Mark as read</DropdownMenuItem>
                <DropdownMenuItem>Mute user</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <p className="mt-1.5 text-sm text-[var(--color-mercury)]/90">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
});

NotificationCard.displayName = "NotificationCard";
