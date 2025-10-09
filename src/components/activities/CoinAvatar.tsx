"use client";

import * as React from "react";

type Props = { symbol: string; name: string };

const palette: Record<string, string> = {
  BTC: "#F7931A",
  ETH: "#627EEA",
  USDT: "#26A17B",
  LTC: "#345D9D",
  DOGE: "#C2A633",
  BNB: "#F0B90B",
  TRX: "#D9001B",
  LRC: "#2A5ADA",
  ACT: "#7D4AEA",
};

export function CoinAvatar({ symbol, name }: Props) {
  const color = palette[symbol] ?? "#e2dedc";
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
      <div
        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full grid place-items-center shadow shrink-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}, rgba(0,0,0,.35))`,
          boxShadow: "0 6px 14px rgba(0,0,0,.35)",
        }}
        aria-hidden
      >
        <span className="text-[10px] sm:text-xs font-semibold text-white">{symbol}</span>
      </div>
      <div className="leading-tight min-w-0">
        <div className="text-[var(--color-mercury)] font-medium text-xs sm:text-sm truncate">{name}</div>
        {/* <div className="text-[10px] sm:text-xs text-white/50">{symbol}</div> */}
      </div>
    </div>
  );
}
