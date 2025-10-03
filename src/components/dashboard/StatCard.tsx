"use client";

import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CryptoIcon from "./CryptoIcon";

type Props = {
  title: string;
  amount: string;
  symbol: string;
  tone: "green" | "orange";
  data?: { v: number }[];
};

const defaultData = [
  { v: 12 }, { v: 14 }, { v: 13 }, { v: 16 }, { v: 15 },
  { v: 18 }, { v: 17 }, { v: 19 }, { v: 16 }, { v: 18 },
];

export default function StatCard({ title, amount, symbol, tone, data = defaultData }: Props) {
  const stroke = tone === "green" ? "var(--color-elf-green)" : "#e47a5a";
  const fill = tone === "green" ? "rgba(17,127,96,0.25)" : "rgba(228,122,90,0.25)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl border",
        "bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70",
        "shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)] overflow-hidden",
        "hover:shadow-[0_15px_35px_-12px_rgba(0,0,0,0.6)] transition-all duration-300"
      )}
    >
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[var(--color-mercury)]/70 mb-1">{title}</p>
            <p className="text-lg font-semibold text-[var(--color-mercury)]">{amount}</p>
          </div>
          <CryptoIcon symbol={symbol} size="md" />
        </div>
      </div>
      <div className="h-16 px-3 pb-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`grad-${symbol}-${tone}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stroke} stopOpacity={0.6} />
                <stop offset="100%" stopColor={stroke} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey="v"
              stroke={stroke}
              fillOpacity={1}
              fill={`url(#grad-${symbol}-${tone})`}
              strokeWidth={2}
              type="monotone"
              isAnimationActive
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
