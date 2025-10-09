"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CryptoIcon from "../dashboard/CryptoIcon";

type TradingPair = {
  pair: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
};

const tradingPairs: TradingPair[] = [
  { pair: "BTC/USDT", name: "Bitcoin",  symbol: "BTC", price: 21264.95, change24h: 2.45,  high24h: 21268.95, low24h: 21209.04, volume24h: 19411867 },
  { pair: "BNB/USDT", name: "Binance",  symbol: "BNB", price:   245.67, change24h:-1.23,  high24h:   248.90, low24h:   243.12, volume24h:  8754321 },
  { pair: "LTC/USDT", name: "Litecoin", symbol: "LTC", price:    89.45, change24h: 3.67,  high24h:    91.20, low24h:    87.89, volume24h:  3456789 },
  { pair: "ETH/USDT", name: "Ethereum", symbol: "ETH", price:  1645.32, change24h:-0.89,  high24h:  1658.90, low24h:  1632.15, volume24h: 12345678 },
];

export default function ExchangeHeader() {
  const [selectedPair, setSelectedPair] = useState<TradingPair>(tradingPairs[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0); // for keyboard nav
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const formatPrice = (price: number) =>
    price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const formatVolume = (volume: number) =>
    volume >= 1_000_000 ? `${(volume / 1_000_000).toFixed(1)}M` : volume.toLocaleString();

  // Close on click outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (
        !dropdownRef.current.contains(e.target as Node) &&
        !btnRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Keep active index in sync with currently selected option
  useEffect(() => {
    const idx = tradingPairs.findIndex(p => p.pair === selectedPair.pair);
    if (idx >= 0) setActiveIdx(idx);
  }, [selectedPair]);

  const changeClass = useMemo(
    () => (selectedPair.change24h >= 0 ? "text-[var(--color-elf-green)]" : "text-red-400"),
    [selectedPair.change24h]
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-w-0
        rounded-2xl border bg-[var(--color-blue)]/60 border-[var(--color-negative)]/70
        p-3 sm:p-4 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)]
      "
    >
      {/* MOBILE-FIRST STACK:
         - selector row
         - stats arranged 2x2 on mobile, promote to 4 cols on md+, 5 cols on lg+
      */}
      <div className="flex items-stretch gap-2">
        {/* Pair selector - full width on mobile */}
        <div className="relative flex-1" ref={dropdownRef}>
          <button
            ref={btnRef}
            type="button"
            onClick={() => setIsOpen(v => !v)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setIsOpen(true); setActiveIdx((i) => Math.min(i + 1, tradingPairs.length - 1)); }
              if (e.key === "ArrowUp")   { e.preventDefault(); setIsOpen(true); setActiveIdx((i) => Math.max(i - 1, 0)); }
              if (e.key === "Enter" && isOpen) {
                setSelectedPair(tradingPairs[activeIdx]);
                setIsOpen(false);
              }
              if (e.key === "Escape") setIsOpen(false);
            }}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            className="
              w-full rounded-xl border border-[var(--color-negative)]/70
              bg-[var(--color-blue-whale)]/60 hover:bg-[var(--color-negative)]/20
              transition-colors duration-200 px-3 py-2 text-left
              focus:outline-none focus:ring-2 focus:ring-white/20
              flex items-center gap-3
            "
          >
            <div className="shrink-0">
              <CryptoIcon symbol={selectedPair.symbol} size="sm" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-[var(--color-mercury)] truncate">{selectedPair.pair}</p>
              <p className="text-xs text-[var(--color-mercury)]/60 truncate">{selectedPair.name}</p>
            </div>
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-[var(--color-mercury)]/60" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[var(--color-mercury)]/60" />
            )}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="
                  absolute z-50 mt-1 left-0 right-0
                  rounded-xl border border-[var(--color-negative)]/70
                  bg-[var(--color-blue-whale)] shadow-xl overflow-hidden
                "
                role="listbox"
                tabIndex={-1}
              >
                <ul className="max-h-64 overflow-y-auto">
                  {tradingPairs.map((pair, i) => {
                    const selected = selectedPair.pair === pair.pair;
                    const active = activeIdx === i;
                    return (
                      <li key={pair.pair}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={selected}
                          onMouseEnter={() => setActiveIdx(i)}
                          onClick={() => {
                            setSelectedPair(pair);
                            setIsOpen(false);
                          }}
                          className={`
                            w-full px-3 py-2 flex items-center gap-3 text-left
                            transition-colors duration-150
                            ${active ? "bg-[var(--color-negative)]/30" : "hover:bg-[var(--color-negative)]/20"}
                            ${selected ? "outline outline-1 outline-[var(--color-negative)]/60" : ""}
                          `}
                        >
                          <CryptoIcon symbol={pair.symbol} size="sm" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-[var(--color-mercury)] truncate">{pair.pair}</p>
                            <p className={`text-xs truncate ${selected ? "text-[var(--color-orange)]" : "text-[var(--color-mercury)]/60"}`}>
                              {pair.name}
                            </p>
                          </div>
                          <p className="text-sm text-[var(--color-mercury)]/80">${formatPrice(pair.price)}</p>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* On mobile we show just Price beside selector; other stats wrap below */}
        <div className="hidden xs:flex flex-col justify-center rounded-xl px-3 py-2 border border-[var(--color-negative)]/70 bg-[var(--color-blue-whale)]/40 min-w-[140px]">
          <p className="text-[11px] leading-4 text-[var(--color-mercury)]/70">Price</p>
          <p className="text-sm font-semibold text-[var(--color-elf-green)] truncate">
            ${formatPrice(selectedPair.price)}
          </p>
        </div>
      </div>

      {/* Stats: mobile-first 2x2, md: 4 cols, lg: 4 cols (selector+price already shown above) */}
      <div
        className="
          mt-3 grid grid-cols-2 gap-2
          sm:gap-3
          md:grid-cols-4
        "
      >
        {/* 24h Change */}
        <StatTile label="24h change" valueClass={changeClass}>
          {selectedPair.change24h >= 0 ? "+" : ""}
          {selectedPair.change24h.toFixed(2)}%
        </StatTile>

        {/* 24h High */}
        <StatTile label="24h high" valueClass="text-[var(--color-orange)]">
          ${formatPrice(selectedPair.high24h)}
        </StatTile>

        {/* 24h Low */}
        <StatTile label="24h low" valueClass="text-[var(--color-elf-green)]">
          ${formatPrice(selectedPair.low24h)}
        </StatTile>

        {/* 24h Volume */}
        <StatTile label="24h volume" valueClass="text-[var(--color-mercury)]">
          {formatVolume(selectedPair.volume24h)}
        </StatTile>
      </div>
    </motion.section>
  );
}

/** Small stat tile for compact, touch-friendly rows */
function StatTile({
  label,
  children,
  valueClass = "",
}: {
  label: string;
  children: React.ReactNode;
  valueClass?: string;
}) {
  return (
    <div
      className="
        rounded-xl border border-[var(--color-negative)]/70
        bg-[var(--color-blue-whale)]/40 px-3 py-2
        hover:bg-[var(--color-negative)]/10 transition-colors
      "
    >
      <p className="text-[11px] leading-4 text-[var(--color-mercury)]/70">{label}</p>
      <p className={`text-sm font-semibold ${valueClass}`}>{children}</p>
    </div>
  );
}
