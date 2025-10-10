"use client";

import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CryptoIcon from "./CryptoIcon";
import { useCurrency } from "@/context/PriceConversionContext";

type Props = {
  title: string;
  amount: string | number;
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
  const { formatPrice } = useCurrency();
  
  // Parse amount if it's a string like "$47,515.00"
  const numericAmount = typeof amount === 'string' 
    ? parseFloat(amount.replace(/[$,]/g, ''))
    : amount;
  
  const displayAmount = formatPrice(numericAmount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-xl sm:rounded-2xl border",
        "bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70",
        "shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)] overflow-hidden",
        "hover:shadow-[0_15px_35px_-12px_rgba(0,0,0,0.6)] transition-all duration-300"
      )}
    >
      <div className="px-3 sm:px-4 pt-3 sm:pt-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm text-[var(--color-mercury)]/70 mb-1 truncate">{title}</p>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-[var(--color-mercury)] truncate">{displayAmount}</p>
          </div>
          <div className="ml-2 flex-shrink-0">
            <CryptoIcon symbol={symbol} size="sm" />
          </div>
        </div>
      </div>
      <div className="h-12 sm:h-14 lg:h-16 px-2 sm:px-3 pb-2 sm:pb-3">
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
              strokeWidth={1.5}
              type="monotone"
              isAnimationActive
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
