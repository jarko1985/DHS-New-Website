"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Bitcoin, Coins } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/PriceConversionContext";

type AssetRow = {
  symbol: string;
  name: string;
  onOrders: number;     // USD
  available: number;    // USD
  total: number;        // USD
  change24h: number;    // %
  image: string;        // Crypto icon URL
};

const rows: AssetRow[] = [
  { symbol: "BTC", name: "Bitcoin", onOrders: 120345.23, available: 80234.66, total: 200579.89, change24h: 2.45, image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png" },
  { symbol: "ETH", name: "Ethereum", onOrders: 93450.11, available: 67120.54, total: 160570.65, change24h: -1.28, image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png" },
  { symbol: "USDT", name: "Tether", onOrders: 50234.00, available: 110234.13, total: 160468.13, change24h: 0.02, image: "https://assets.coingecko.com/coins/images/325/large/Tether.png" },
  { symbol: "BNB", name: "BNB", onOrders: 62340.55, available: 58340.55, total: 120681.10, change24h: 0.87, image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png" },
  { symbol: "SOL", name: "Solana", onOrders: 45432.88, available: 70432.10, total: 115864.98, change24h: -3.91, image: "https://assets.coingecko.com/coins/images/4128/large/solana.png" },
  { symbol: "XRP", name: "XRP", onOrders: 34012.22, available: 88045.77, total: 122057.99, change24h: 1.14, image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png" },
];

export const AssetsTable: React.FC = () => {
  const { formatPrice, currency, convertPrice } = useCurrency();

  const formatUSD = (n: number) => {
    return formatPrice(n);
  };

  const formatCompactUSD = (n: number) => {
    const converted = convertPrice(n);
    const symbol = currency === "USD" ? "$" : "AED";
    
    if (converted >= 1000000) {
      return currency === "USD" 
        ? `${symbol}${(converted / 1000000).toFixed(2)}M`
        : `${(converted / 1000000).toFixed(2)}M ${symbol}`;
    } else if (converted >= 1000) {
      return currency === "USD"
        ? `${symbol}${(converted / 1000).toFixed(2)}K`
        : `${(converted / 1000).toFixed(2)}K ${symbol}`;
    }
    return formatUSD(n);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.12 }}
      className="settings-section"
    >
      {/* Header Section */}
      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
        <h3 className="text-center md:text-left text-base sm:text-lg lg:text-xl font-semibold text-white">Asset Balances</h3>
        <p className="text-center md:text-left form-description text-xs sm:text-sm">Overview of balances, orders, and 24H changes.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[var(--color-elf-green)]/20 flex items-center justify-center shrink-0">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[var(--color-elf-green)]"></div>
            </div>
            <div className="min-w-0 flex-1 text-center md:text-left">
              <p className="text-xs sm:text-sm text-white/80 mb-0.5">Total Balance</p>
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-white truncate">{formatPrice(rows.reduce((acc, r) => acc + r.total, 0), false)}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#e47a5a]/20 flex items-center justify-center shrink-0">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#e47a5a]"></div>
            </div>
            <div className="min-w-0 flex-1 text-center md:text-left">
              <p className="text-xs sm:text-sm text-white/80 mb-0.5">On Orders</p>
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-white truncate">{formatPrice(rows.reduce((acc, r) => acc + r.onOrders, 0), false)}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <span className="text-white text-xs sm:text-sm font-bold">A</span>
            </div>
            <div className="min-w-0 flex-1 text-center md:text-left">
              <p className="text-xs sm:text-sm text-white/80 mb-0.5">Available</p>
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-white truncate">{formatPrice(rows.reduce((acc, r) => acc + r.available, 0), false)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Assets Table */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft gradient lines */}
          <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />
          <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />

          {/* Orange and green circles */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FFA500]/5 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[#39FF14]/5 blur-3xl" />
        </div>

        <div className="w-full overflow-x-auto relative z-10 -mx-2 sm:mx-0">
          <div className="min-w-full inline-block align-middle px-2 sm:px-0">
            <Table className="min-w-[640px] sm:min-w-[720px]">
              <TableHeader className="bg-[var(--color-blue)]/60">
                <TableRow className="hover:bg-transparent border-b border-white/10">
                  <TableHead className="text-[var(--color-mercury)] font-medium py-3 sm:py-4 text-xs sm:text-sm">Asset</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-3 sm:py-4 text-xs sm:text-sm">On Orders</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-3 sm:py-4 text-xs sm:text-sm hidden md:table-cell">Available Balance</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-3 sm:py-4 text-xs sm:text-sm">Total Balance</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-3 sm:py-4 text-xs sm:text-sm text-right">24H</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {rows.map((r, i) => {
                  const isPos = r.change24h >= 0;
                  return (
                    <TableRow
                      key={`${r.symbol}-${i}`}
                      className="bg-transparent hover:bg-white/[0.03] data-[state=selected]:bg-white/[0.03] border-b border-white/5"
                    >
                      {/* Asset */}
                      <TableCell className="text-[var(--color-mercury)] py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                            <img
                              src={r.image}
                              alt={`${r.name} icon`}
                              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                              loading="lazy"
                            />
                          </div>

                          <div className="min-w-0">
                            <div className="text-[var(--color-mercury)] font-semibold text-xs sm:text-sm truncate">
                              {r.name}
                            </div>
                            <div className="text-[10px] sm:text-xs text-[var(--color-mercury)]/60">
                              {r.symbol}
                            </div>
                          </div>
                        </div>
                      </TableCell>

                      {/* On Orders */}
                      <TableCell className="text-[var(--color-mercury)] py-3 sm:py-4">
                        <div className="text-[var(--color-mercury)] text-xs sm:text-sm">
                          <span className="hidden sm:inline">{formatUSD(r.onOrders)}</span>
                          <span className="sm:hidden">{formatCompactUSD(r.onOrders)}</span>
                        </div>
                      </TableCell>

                      {/* Available - Hidden on mobile */}
                      <TableCell className="text-[var(--color-mercury)] py-3 sm:py-4 hidden md:table-cell">
                        <div className="text-[var(--color-mercury)] text-xs sm:text-sm">{formatUSD(r.available)}</div>
                      </TableCell>

                      {/* Total */}
                      <TableCell className="text-[var(--color-mercury)] py-3 sm:py-4">
                        <div className="text-[var(--color-mercury)] font-semibold text-xs sm:text-sm">
                          <span className="hidden sm:inline">{formatUSD(r.total)}</span>
                          <span className="sm:hidden">{formatCompactUSD(r.total)}</span>
                        </div>
                      </TableCell>

                      {/* 24H */}
                      <TableCell className="text-[var(--color-mercury)] py-3 sm:py-4 text-right">
                        <span
                          className={cn(
                            "text-xs sm:text-sm font-semibold whitespace-nowrap",
                            isPos ? "text-[var(--color-elf-green)]" : "text-[#e47a5a]"
                          )}
                        >
                          {isPos ? "+" : ""}
                          {r.change24h.toFixed(2)}%
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
        <Button className="btn-primary w-full sm:w-auto text-sm sm:text-base">
          Refresh Balances
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="btn-secondary w-full sm:w-auto text-sm sm:text-base"
        >
          Export Data
        </Button>
      </div>
    </motion.div>
  );
};
