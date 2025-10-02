"use client";

import { Bell, MessageSquare, Search, ChevronDown, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function UpperBar() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-center gap-3",
        "rounded-2xl border bg-[var(--color-blue)]/60 border-[var(--color-negative)]/70",
        "px-3 py-3 lg:px-4 lg:py-4 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)]"
      )}
    >
      {/* Back to Home Button - Left */}
      <Button
        onClick={() => router.push("/")}
        className="cursor-pointer text-[var(--color-blue-whale)] ring-1 ring-transparent
                   bg-[var(--color-mercury)] hover:bg-transparent hover:text-[var(--color-mercury)]
                   hover:ring-[var(--color-mercury)] ramp-bg whitespace-nowrap"
      >
        <ChevronLeft className="mr-1 w-4 h-4" />
        <span className="text-sm">Back to Home</span>
      </Button>

      {/* Search - Middle */}
      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-mercury)]/60" />
          <Input
            placeholder="Search..."
            className="pl-9 h-10 bg-[var(--color-negative)]/50 border-[var(--color-negative)]/60 text-[var(--color-mercury)] placeholder:text-[var(--color-mercury)]/50"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Message + Notification icons with subtle badges */}
        <button className="relative rounded-xl p-2.5 bg-[var(--color-negative)]/40 hover:bg-[var(--color-negative)]/70 transition shadow-inner">
          <MessageSquare className="h-4 w-4 text-[var(--color-mercury)]" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[var(--color-elf-green)] shadow-[0_0_8px_rgba(17,127,96,0.8)]" />
        </button>
        <button className="relative rounded-xl p-2.5 bg-[var(--color-negative)]/40 hover:bg-[var(--color-negative)]/70 transition shadow-inner">
          <Bell className="h-4 w-4 text-[var(--color-mercury)]" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[var(--color-orange)] shadow-[0_0_8px_rgba(228,122,90,0.8)]" />
        </button>

        {/* Avatar + menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-xl pl-2 pr-3 py-1.5 bg-[var(--color-negative)]/40 hover:bg-[var(--color-negative)]/70 transition">
              <Avatar className="h-8 w-8 ring-1 ring-[var(--color-negative)]/60">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-[var(--color-elf-green)]/15 text-[var(--color-mercury)]">KG</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-[var(--color-mercury)]/90 text-sm">Kim Griffith</span>
              <ChevronDown className="h-4 w-4 text-[var(--color-mercury)]/70" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[var(--color-blue)]/95 text-[var(--color-mercury)] border-[var(--color-negative)]/70">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
}
