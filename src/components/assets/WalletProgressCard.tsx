"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/context/PriceConversionContext";

type Bar = {
  id: string;
  label: string;
  valuePct: number; // 0-100
  subtitleAmount?: number; // USD amount
  tone?: "primary" | "orange";
};

const BARS: Bar[] = [
  { id: "exchange", label: "Exchange Balance", valuePct: 72, subtitleAmount: 124580.40, tone: "primary" },
  { id: "funding", label: "Funding Balance", valuePct: 48, subtitleAmount: 83910.22, tone: "orange" },
];

export const WalletProgressCard: React.FC = () => {
  const [animatedValues, setAnimatedValues] = React.useState<number[]>(BARS.map(() => 0));
  const { formatPrice } = useCurrency();

  React.useEffect(() => {
    // Animate the bars gradually after mount
    const t = setTimeout(() => {
      setAnimatedValues(BARS.map(b => b.valuePct));
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.08 }}
      className="group h-full"
    >
      <Card className="relative overflow-hidden border-0 bg-white/[0.02] p-4 sm:p-5 lg:p-6 text-[var(--color-mercury)] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur rounded-xl h-full flex flex-col">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft gradient lines */}
          <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />
          <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />

          {/* Orange and green circles */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FFA500]/5 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[#39FF14]/5 blur-3xl" />
        </div>

        <CardHeader className="pb-3 sm:pb-4 relative z-10">
          <CardTitle className="text-center md:text-left text-base sm:text-lg lg:text-xl font-semibold text-white">
            Portfolio Allocation
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 sm:space-y-5 lg:space-y-6 relative z-10 flex-1 flex flex-col justify-between">
          {BARS.map((bar, idx) => (
            <div key={bar.id} className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[var(--color-mercury)]/90 truncate pr-2">{bar.label}</span>
                {bar.subtitleAmount !== undefined ? (
                  <span
                    className={cn(
                      "font-medium shrink-0",
                      bar.tone === "orange"
                        ? "text-[#e47a5a]"
                        : "text-[var(--color-elf-green)]"
                    )}
                  >
                    {formatPrice(bar.subtitleAmount)}
                  </span>
                ) : null}
              </div>

              {/* Enhanced animated progress fill */}
              <div className="relative">
                <div className="h-2.5 sm:h-3 w-full rounded-full bg-[var(--color-negative)]/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedValues[idx]}%` }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.2 + (idx * 0.1)
                    }}
                    className={cn(
                      "h-full rounded-full relative overflow-hidden",
                      bar.tone === "orange"
                        ? "bg-[#e47a5a]"
                        : "bg-[var(--color-elf-green)]"
                    )}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{
                        x: "200%",
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        delay: 0.8 + (idx * 0.1),
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="absolute top-0 h-full w-6 sm:w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* Progress percentage overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (idx * 0.1), duration: 0.3 }}
                  className="absolute top-0 right-0 text-[10px] sm:text-xs font-semibold text-white/90 pr-0.5 sm:pr-1"
                >
                  {animatedValues[idx].toFixed(0)}%
                </motion.div>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs">
                <span className="text-[var(--color-mercury)]/60">0%</span>
                <span
                  className={cn(
                    "font-semibold",
                    bar.tone === "orange"
                      ? "text-[#e47a5a]"
                      : "text-[var(--color-elf-green)]"
                  )}
                >
                  {animatedValues[idx].toFixed(0)}%
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};
