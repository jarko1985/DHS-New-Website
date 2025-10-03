"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CoinAvatar } from "./CoinAvatar";
import { StatusBadge } from "./StatusBadge";
import { formatTxDate } from "@/lib/date";
import type { Transaction } from "@/types/activities";
import {
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

type Props = { rows: Transaction[] };

const rowVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const kindIcon = (k: Transaction["kind"]) => {
  if (k === "deposit") return <ArrowDownLeft className="h-4 w-4 text-green-500" />;
  if (k === "withdrawal") return <ArrowUpRight className="h-4 w-4 text-red-500" />;
  return <ArrowLeftRight className="h-4 w-4 text-yellow-500" />;
};

const formatTransactionType = (type: Transaction["type"]) => {
  switch (type) {
    case "deposit":
      return "Deposit";
    case "withdrawal":
      return "Withdrawal";
    case "transfer":
      return "Transfer";
    default:
      return type;
  }
};

export function ActivitiesTable({ rows }: Props) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const paginatedRows = rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--color-negative)] bg-[var(--color-blue)]/40 shadow-[0_10px_24px_rgba(0,0,0,.35)]">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[var(--color-negative)]/60 text-[var(--color-mercury)]">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium">Transaction ID</th>
              <th className="px-4 py-3 font-medium">Coin</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">
                Amount (USDT)
              </th>
            </tr>
          </thead>

          <motion.tbody
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.035 }}
          >
            {paginatedRows.map((r) => (
              <motion.tr
                key={`${r.id}-${r.date}-${r.amountUSDT}`}
                variants={rowVariants}
                className="group border-t border-[var(--color-negative)]/60 hover:bg-[var(--color-negative)]/50 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 text-[var(--color-mercury)]">
                    <span className="font-medium">{r.id}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-white/25 group-hover:text-white/40 transition-colors" />
                  </div>
                </td>

                <td className="px-4 py-4">
                  <CoinAvatar symbol={r.coin.symbol} name={r.coin.name} />
                </td>

                <td className="px-4 py-4 text-[var(--color-mercury)]">
                  <div className="inline-flex items-center gap-2">
                    <span className="opacity-80">{formatTransactionType(r.type)}</span>
                    <span className="text-white/50">{kindIcon(r.kind)}</span>
                  </div>
                </td>

                <td className="px-4 py-4 text-white/70">
                  {formatTxDate(r.date)}
                </td>

                <td className="px-4 py-4">
                  <StatusBadge status={r.status} />
                </td>

                <td className="px-4 py-4 text-right">
                  <div className="font-semibold text-[var(--color-mercury)]">
                    {r.amountUSDT.toFixed(6)} <span className="text-white/40">USDT</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center my-6 gap-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            className="flex items-center gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <span className="text-sm">Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            className="flex items-center gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
