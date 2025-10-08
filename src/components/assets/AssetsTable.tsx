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

function formatUSD(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const AssetsTable: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.12 }}
      className="settings-section"
    >
      {/* Header Section */}
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold text-white">Asset Balances</h3>
        <p className="form-description">Overview of balances, orders, and 24H changes.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--color-elf-green)]/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-[var(--color-elf-green)]"></div>
            </div>
            <div>
              <p className="text-sm text-white">Total Balance</p>
              <p className="text-lg font-semibold text-white">${rows.reduce((acc, r) => acc + r.total, 0).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#e47a5a]/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-[#e47a5a]"></div>
            </div>
            <div>
              <p className="text-sm text-white">On Orders</p>
              <p className="text-lg font-semibold text-white">${rows.reduce((acc, r) => acc + r.onOrders, 0).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <div>
              <p className="text-sm text-white">Available</p>
              <p className="text-lg font-semibold text-white">${rows.reduce((acc, r) => acc + r.available, 0).toLocaleString()}</p>
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

        <div className="w-full overflow-x-auto relative z-10">
          <Table className="min-w-[720px]">
            <TableHeader className="bg-[var(--color-blue)]/60">
              <TableRow className="hover:bg-transparent border-b border-white/10">
                <TableHead className="text-[var(--color-mercury)] font-medium py-4">Asset</TableHead>
                <TableHead className="text-[var(--color-mercury)] font-medium py-4">On Orders</TableHead>
                <TableHead className="text-[var(--color-mercury)] font-medium py-4">Available Balance</TableHead>
                <TableHead className="text-[var(--color-mercury)] font-medium py-4">Total Balance</TableHead>
                <TableHead className="text-[var(--color-mercury)] font-medium py-4 text-right">24H Market</TableHead>
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
                    <TableCell className="text-[var(--color-mercury)] py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                          <img
                            src={r.image}
                            alt={`${r.name} icon`}
                            className="w-6 h-6 object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="text-[var(--color-mercury)] font-semibold">
                            {r.name}
                          </div>
                          <div className="text-xs text-[var(--color-mercury)]/60">
                            {r.symbol}
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    {/* On Orders */}
                    <TableCell className="text-[var(--color-mercury)] py-4">
                      <div className="text-[var(--color-mercury)]">{formatUSD(r.onOrders)}</div>
                    </TableCell>

                    {/* Available */}
                    <TableCell className="text-[var(--color-mercury)] py-4">
                      <div className="text-[var(--color-mercury)]">{formatUSD(r.available)}</div>
                    </TableCell>

                    {/* Total */}
                    <TableCell className="text-[var(--color-mercury)] py-4">
                      <div className="text-[var(--color-mercury)] font-semibold">
                        {formatUSD(r.total)}
                      </div>
                    </TableCell>

                    {/* 24H */}
                    <TableCell className="text-[var(--color-mercury)] py-4 text-right">
                      <span
                        className={cn(
                          "text-sm font-semibold",
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

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row pt-6 border-t border-white/10">
        <Button className="btn-primary">
          Refresh Balances
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="btn-secondary"
        >
          Export Data
        </Button>
      </div>
    </motion.div>
  );
};
