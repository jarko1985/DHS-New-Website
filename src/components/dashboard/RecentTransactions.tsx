"use client";

import { motion } from "framer-motion";
import CryptoIcon from "./CryptoIcon";
import { useCurrency } from "@/context/PriceConversionContext";

type Tx = { name: string; symbol: string; time: string; amount: number };

const txs: Tx[] = [
  { name: "Bitcoin",   symbol: "BTC", time: "Today, 13:50 PM", amount: 47515 },
  { name: "Ethereum",  symbol: "ETH", time: "Today, 13:50 PM", amount: 3401  },
  { name: "Litecoin",  symbol: "LTC", time: "Today, 13:50 PM", amount: 31401 },
  { name: "Dogecoin",  symbol: "DOGE", time: "Today, 13:50 PM", amount: 265   },
  { name: "Ethereum",  symbol: "ETH", time: "Today, 13:50 PM", amount: 2265  },
  { name: "Tether",    symbol: "USDT", time: "Today, 13:50 PM", amount: 12083 },
];

export default function RecentTransactions() {
  const { formatPrice } = useCurrency();
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-[400px] sm:h-[500px] lg:h-screen rounded-xl sm:rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70 flex flex-col"
    >
      <div className="px-3 sm:px-4 py-3 sm:py-4 flex-shrink-0">
        <h3 className="text-base sm:text-lg font-semibold text-[var(--color-mercury)] mb-3 sm:mb-4">Recent Transaction</h3>
      </div>

      <div className="flex-1 overflow-y-auto px-3 sm:px-4 pb-3 sm:pb-4">
        <ul className="space-y-2 sm:space-y-3">
        {txs.map((t, i) => (
          <li
            key={i}
            className="flex items-center justify-between rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-3 bg-[var(--color-negative)]/40 hover:bg-[var(--color-negative)]/60 transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <CryptoIcon symbol={t.symbol} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-[var(--color-mercury)] truncate">{t.name}</p>
                <p className="text-xs text-[var(--color-mercury)]/60 truncate">{t.time}</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[var(--color-mercury)] ml-2 whitespace-nowrap">{formatPrice(t.amount)}</span>
          </li>
        ))}
        </ul>
      </div>
    </motion.div>
  );
}
