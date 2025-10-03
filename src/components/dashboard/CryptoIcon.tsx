"use client";

import { cn } from "@/lib/utils";

interface CryptoIconProps {
  symbol: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const cryptoIcons: Record<string, { symbol: string; color: string; bgColor: string }> = {
  BTC: { symbol: "₿", color: "#f7931a", bgColor: "rgba(247, 147, 26, 0.1)" },
  ETH: { symbol: "Ξ", color: "#627eea", bgColor: "rgba(98, 126, 234, 0.1)" },
  LTC: { symbol: "Ł", color: "#bfbbbb", bgColor: "rgba(191, 187, 187, 0.1)" },
  BNB: { symbol: "B", color: "#f3ba2f", bgColor: "rgba(243, 186, 47, 0.1)" },
  XLM: { symbol: "★", color: "#7b00ff", bgColor: "rgba(123, 0, 255, 0.1)" },
  DOGE: { symbol: "Ð", color: "#c2a633", bgColor: "rgba(194, 166, 51, 0.1)" },
  USDT: { symbol: "₮", color: "#26a17b", bgColor: "rgba(38, 161, 123, 0.1)" },
};

const sizeClasses = {
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-sm",
  lg: "w-12 h-12 text-base",
};

export default function CryptoIcon({ symbol, size = "md", className }: CryptoIconProps) {
  const crypto = cryptoIcons[symbol.toUpperCase()];
  
  if (!crypto) {
    return (
      <div className={cn(
        "rounded-full bg-[var(--color-negative)]/60 flex items-center justify-center text-[var(--color-mercury)]/80",
        sizeClasses[size],
        className
      )}>
        ?
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "rounded-full flex items-center justify-center font-bold",
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: crypto.bgColor,
        color: crypto.color,
        border: `1px solid ${crypto.color}20`
      }}
    >
      {crypto.symbol}
    </div>
  );
}
