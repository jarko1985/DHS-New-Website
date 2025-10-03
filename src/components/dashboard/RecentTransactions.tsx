"use client";

import { motion } from "framer-motion";
import CryptoIcon from "./CryptoIcon";

type Tx = { name: string; symbol: string; time: string; amount: string };

const txs: Tx[] = [
  { name: "Bitcoin",   symbol: "BTC", time: "Today, 13:50 PM", amount: "$47,515" },
  { name: "Ethereum",  symbol: "ETH", time: "Today, 13:50 PM", amount: "$3,401"  },
  { name: "Litecoin",  symbol: "LTC", time: "Today, 13:50 PM", amount: "$31,401" },
  { name: "Dogecoin",  symbol: "DOGE", time: "Today, 13:50 PM", amount: "$2,65"   },
  { name: "Ethereum",  symbol: "ETH", time: "Today, 13:50 PM", amount: "$22,65"  },
  { name: "Tether",    symbol: "USDT", time: "Today, 13:50 PM", amount: "$120,83" },
];

export default function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-screen rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70 flex flex-col"
    >
      <div className="px-4 py-4 flex-shrink-0">
        <h3 className="text-lg font-semibold text-[var(--color-mercury)] mb-4">Recent Transaction</h3>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <ul className="space-y-3">
        {txs.map((t, i) => (
          <li
            key={i}
            className="flex items-center justify-between rounded-xl px-3 py-3 bg-[var(--color-negative)]/40 hover:bg-[var(--color-negative)]/60 transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <CryptoIcon symbol={t.symbol} size="sm" />
              <div>
                <p className="text-sm font-medium text-[var(--color-mercury)]">{t.name}</p>
                <p className="text-xs text-[var(--color-mercury)]/60">{t.time}</p>
              </div>
            </div>
            <span className="font-semibold text-[var(--color-mercury)]">{t.amount}</span>
          </li>
        ))}
        </ul>
      </div>
    </motion.div>
  );
}
