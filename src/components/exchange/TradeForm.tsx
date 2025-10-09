"use client";

import { motion } from "framer-motion";

export default function TradeForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70 p-4 lg:p-5 flex flex-col"
    >
      <div className="flex gap-2 mb-4 flex-shrink-0">
        <button className="flex-1 rounded-lg bg-[var(--color-elf-green)] text-white px-3 py-2 text-sm font-medium shadow-[0_0_12px_rgba(17,127,96,0.4)]">
          Buy
        </button>
        <button className="flex-1 rounded-lg bg-[var(--color-negative)]/50 text-[var(--color-mercury)]/80 hover:bg-[var(--color-negative)]/70 transition-all duration-200 px-3 py-2 text-sm">
          Sell
        </button>
        <button className="flex-1 rounded-lg bg-[var(--color-negative)]/50 text-[var(--color-mercury)]/80 hover:bg-[var(--color-negative)]/70 transition-all duration-200 px-3 py-2 text-sm">
          Exchange
        </button>
      </div>

      <div className="flex-1 flex flex-col space-y-4">
        <div>
          <p className="text-xs text-[var(--color-mercury)]/70 mb-2">Coin</p>
          <div className="flex items-center gap-2 rounded-lg bg-[var(--color-negative)]/40 px-3 py-2 text-[var(--color-mercury)]">
            <span className="h-6 w-6 rounded-full bg-[var(--color-orange)] grid place-items-center text-xs font-bold">₿</span>
            <span className="text-sm">Bitcoin</span>
            <span className="ml-auto text-xs text-[var(--color-mercury)]/60">BTC</span>
          </div>
        </div>

        <div>
          <p className="text-xs text-[var(--color-mercury)]/70 mb-2">Amount</p>
          <input
            type="text"
            defaultValue="$1500"
            className="w-full rounded-lg bg-[var(--color-negative)]/40 px-3 py-2 text-[var(--color-mercury)] focus:outline-none focus:ring-2 focus:ring-[var(--color-elf-green)]/50 border border-transparent"
          />
        </div>

        <div className="flex justify-between text-sm text-[var(--color-mercury)]/70">
          <span>Total:</span>
          <span className="font-medium">$1,342.00</span>
        </div>

        <div className="mt-auto">
          <button className="w-full py-3 rounded-lg bg-[var(--color-elf-green)] text-white font-medium shadow-[0_8px_20px_-10px_rgba(17,127,96,0.4)] hover:bg-[var(--color-elf-green)]/90 transition-all duration-200">
            Buy Dogecoin
          </button>
        </div>
      </div>
    </motion.div>
  );
}
