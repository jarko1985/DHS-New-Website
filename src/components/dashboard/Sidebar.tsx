"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Repeat,
  BadgeDollarSign,
  Wallet,
  Megaphone,
  Activity,
  Bell,
  Settings,
  Wrench,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

type Item = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const NAV_ITEMS: Item[] = [
  { label: "Dashboard",     href: "/dashboard",                icon: LayoutDashboard },
  { label: "Exchange",      href: "/dashboard/exchange",       icon: Repeat },
  { label: "Prices",        href: "/dashboard/prices",         icon: BadgeDollarSign },
  { label: "Wallets",       href: "/dashboard/wallets",        icon: Wallet },
  { label: "Promotions",    href: "/dashboard/promotions",     icon: Megaphone },
  { label: "Activities",    href: "/dashboard/activities",     icon: Activity },
  { label: "Notifications", href: "/dashboard/notifications",  icon: Bell },
  { label: "Settings",      href: "/dashboard/settings",       icon: Settings },
  { label: "Utilities",     href: "/dashboard/utilities",      icon: Wrench },
  { label: "Authentication",href: "/dashboard/authentication", icon: ShieldCheck },
];

export default function Sidebar() {
  const pathname = usePathname();
  // Persist collapsed state
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("dash_collapsed");
    if (saved) setCollapsed(saved === "1");
  }, []);

  useEffect(() => {
    localStorage.setItem("dash_collapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  const width = collapsed ? 76 : 256;

  return (
    <TooltipProvider delayDuration={0}>
      <motion.aside
        initial={false}
        animate={{ width }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className={cn(
          "h-screen sticky top-0 z-30 border-r",
          "bg-[var(--color-blue-whale)]/95 border-[var(--color-negative)]/60",
          "shadow-[0_0_40px_-10px_rgba(17,127,96,0.35)]"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Brand */}
          <div className="flex items-center gap-3 px-4 py-4">
            <div className={cn(
              "flex items-center gap-3",
              collapsed && "justify-center w-full"
            )}>
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image 
                  src="/images/dhs_logo2.png"
                  alt="DHS Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              {!collapsed && (
                <div className="flex items-center gap-1">
                  <span className="text-white font-semibold tracking-wide text-xs">Direct Honest Safe</span>
                </div>
              )}
            </div>
            <button
              aria-label="Toggle sidebar"
              onClick={() => setCollapsed((c) => !c)}
              className={cn(
                "rounded-lg transition",
                "hover:bg-[var(--color-negative)]/60 text-[var(--color-mercury)]",
                collapsed ? "-ml-2" : "ml-auto"
              )}
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          </div>

          <Separator className="bg-[var(--color-negative)]/70" />

          {/* Nav */}
          <ScrollArea className="flex-1">
            <nav className="px-2 py-3">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href || pathname?.startsWith(item.href + "/");
                const Icon = item.icon;

                const link = (
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-3 py-4 my-3 transition-all duration-200",
                      "text-white/80 hover:text-elf-green",
                      "hover:bg-[var(--color-negative)]/30 border border-white/30 hover:border-[var(--color-elf-green)]",
                      active && [
                        "bg-[var(--color-negative)]/40",
                        "border border-[var(--color-elf-green)]",
                        "text-white"
                      ]
                    )}
                  >
                    <Icon className={cn("shrink-0 w-5 h-5 group-hover:text-elf-green", active ? "text-white" : "text-white/80")} />
                    <AnimatePresence initial={false}>
                      {!collapsed && (
                        <motion.span
                          key={item.label}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -4 }}
                          className="truncate text-sm font-medium"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Dropdown arrow for specific items */}
                    {!collapsed && (item.label === "Utilities" || item.label === "Authentication") && (
                      <ChevronRight className="ml-auto w-4 h-4 text-white/60" />
                    )}
                  </Link>
                );

                return collapsed ? (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>{link}</TooltipTrigger>
                    <TooltipContent side="right" className="border-0 bg-[var(--color-negative)] text-[var(--color-mercury)]">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <div key={item.href}>{link}</div>
                );
              })}
            </nav>
          </ScrollArea>

          <Separator className="bg-[var(--color-negative)]/70" />

          {/* Language Selector */}
          <div className="p-3">
            <div className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200",
              "bg-[var(--color-elf-green)] hover:bg-[var(--color-elf-green)]/90",
              "text-white font-medium text-sm",
              collapsed && "justify-center"
            )}>
              <span className="text-sm">EN</span>
              <AnimatePresence initial={false}>
                {!collapsed && (
                  <motion.span
                    key="language"
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -4 }}
                    className="truncate"
                  >
                    English (US)
                  </motion.span>
                )}
              </AnimatePresence>
              {!collapsed && <ChevronRight className="ml-auto w-4 h-4 text-white/80" />}
            </div>
          </div>

        </div>
      </motion.aside>
    </TooltipProvider>
  );
}
