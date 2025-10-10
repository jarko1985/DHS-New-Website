"use client";

import { motion } from "framer-motion";
import { useCurrency } from "@/context/PriceConversionContext";

const trades = [
  { time: "21:00", price: 211.68, amount: "25,973 BTC", total: 1686.77 },
  { time: "6:00", price: 360.50, amount: "39,360 BTC", total: 4868.53 },
  { time: "15:00", price: 644.62, amount: "32,973 BTC", total: 2836.41 },
  { time: "14:00", price: 228.78, amount: "65,773 BTC", total: 3776.55 },
  { time: "12:00", price: 367.71, amount: "25,973 BTC", total: 4363.52 },
  { time: "4:00", price: 306.56, amount: "35,397 BTC", total: 3917.47 },
  { time: "16:00", price: 433.82, amount: "29,413 BTC", total: 3219.90 },
];

export default function MarketTrades() {
  const { formatPrice } = useCurrency();
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70 p-4 lg:p-5"
    >
      <h3 className="text-lg font-semibold text-[var(--color-mercury)] mb-4">Market Trades</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[var(--color-mercury)]/60 text-left border-b border-[var(--color-negative)]/60">
              <th className="py-3 pr-4 font-medium">Time</th>
              <th className="py-3 pr-4 font-medium">Price (USDT)</th>
              <th className="py-3 pr-4 font-medium">Amount (BTC)</th>
              <th className="py-3 pr-4 font-medium">Total (USDT)</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t, i) => (
              <tr
                key={i}
                className="border-b border-[var(--color-negative)]/40 hover:bg-[var(--color-negative)]/30 transition-colors duration-200"
              >
                <td className="py-3 pr-4 text-[var(--color-mercury)]/85">{t.time}</td>
                <td className="py-3 pr-4 text-[var(--color-mercury)]/85">{formatPrice(t.price)}</td>
                <td className="py-3 pr-4 text-[var(--color-mercury)]/85">{t.amount}</td>
                <td className="py-3 pr-4 text-[var(--color-mercury)]/85">{formatPrice(t.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
