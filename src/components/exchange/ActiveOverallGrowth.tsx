"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CryptoIcon from "./CryptoIcon";

type Row = {
  type: string;
  asset: string;
  symbol: string;
  date: string;
  ip: string;
  status: "Pending" | "Success" | "Unpaid";
  amount: string;
};

const rows: Row[] = [
  { type: "Exchange", asset: "Bitcoin",   symbol: "BTC", date: "Apr 14,2023", ip: "140.91.94.219", status: "Pending", amount: "11,250 BTC" },
  { type: "Exchange", asset: "Ethereum",  symbol: "ETH", date: "Apr 09,2023", ip: "140.91.94.219", status: "Success", amount: "11,250 ETH" },
  { type: "Exchange", asset: "Litecoin",  symbol: "LTC", date: "Nov 16,2023", ip: "140.91.94.219", status: "Unpaid",  amount: "11,250 LTC" },
  { type: "Exchange", asset: "Stellar",   symbol: "XLM", date: "Dec 18,2023", ip: "140.91.94.219", status: "Success", amount: "11,250 XLM" },
  { type: "Exchange", asset: "Dogecoin",  symbol: "DOGE", date: "Jul 11,2023", ip: "140.91.94.219", status: "Unpaid",  amount: "11,250 DOGE" },
  { type: "Exchange", asset: "Tether",    symbol: "USDT", date: "Aug 27,2023", ip: "140.91.94.219", status: "Pending", amount: "11,250 USDT" },
];

export default function ActiveOverallGrowth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70"
    >
      <div className="px-4 py-4">
        <h3 className="text-lg font-semibold text-[var(--color-mercury)] mb-4">Active Overall Growth</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[var(--color-mercury)]/60 border-b border-[var(--color-negative)]/60">
                {["Type", "Asset", "Date", "IP Address", "Status List", "Amount"].map((h) => (
                  <th key={h} className="py-3 pr-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-[var(--color-negative)]/40 hover:bg-[var(--color-negative)]/30 transition-colors duration-200"
                >
                  <td className="py-4 pr-4 text-[var(--color-mercury)]/85">{r.type}</td>
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <CryptoIcon symbol={r.symbol} size="sm" />
                      <span className="text-[var(--color-mercury)]/85">{r.asset}</span>
                    </div>
                  </td>
                  <td className="py-4 pr-4 text-[var(--color-mercury)]/70">{r.date}</td>
                  <td className="py-4 pr-4 text-[var(--color-mercury)]/70">{r.ip}</td>
                  <td className="py-4 pr-4">
                    <span
                      className={cn(
                        "px-2.5 py-1 text-xs rounded-full font-medium",
                        r.status === "Success" &&
                          "bg-[var(--color-elf-green)]/20 text-[var(--color-elf-green)] border border-[var(--color-elf-green)]/30",
                        r.status === "Pending" &&
                          "bg-[#e47a5a]/20 text-[#e47a5a] border border-[#e47a5a]/30",
                        r.status === "Unpaid" &&
                          "bg-red-500/20 text-red-400 border border-red-500/30"
                      )}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-[var(--color-mercury)]/85 font-medium">{r.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
