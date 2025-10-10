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
import { useCurrency } from "@/context/PriceConversionContext";

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
  const { formatPrice } = useCurrency();

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const paginatedRows = rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--color-negative)] bg-[var(--color-blue)]/40 shadow-[0_10px_24px_rgba(0,0,0,.35)]">
      {/* Desktop Table View - Hidden on Mobile */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[var(--color-negative)]/60 text-[var(--color-mercury)]">
            <tr className="text-left">
              <th className="px-3 lg:px-4 py-3 font-medium text-xs lg:text-sm">Transaction ID</th>
              <th className="px-3 lg:px-4 py-3 font-medium text-xs lg:text-sm">Coin</th>
              <th className="px-3 lg:px-4 py-3 font-medium text-xs lg:text-sm">Type</th>
              <th className="px-3 lg:px-4 py-3 font-medium text-xs lg:text-sm">Date</th>
              <th className="px-3 lg:px-4 py-3 font-medium text-xs lg:text-sm">Status</th>
              <th className="px-3 lg:px-4 py-3 font-medium text-xs lg:text-sm text-right">
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
                <td className="px-3 lg:px-4 py-3 lg:py-4">
                  <div className="flex items-center gap-2 text-[var(--color-mercury)]">
                    <span className="font-medium text-xs lg:text-sm">{r.id}</span>
                    <ChevronRight className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-white/25 group-hover:text-white/40 transition-colors" />
                  </div>
                </td>

                <td className="px-3 lg:px-4 py-3 lg:py-4">
                  <CoinAvatar symbol={r.coin.symbol} name={r.coin.name} />
                </td>

                <td className="px-3 lg:px-4 py-3 lg:py-4 text-[var(--color-mercury)]">
                  <div className="inline-flex items-center gap-2">
                    <span className="opacity-80 text-xs lg:text-sm">{formatTransactionType(r.type)}</span>
                    <span className="text-white/50">{kindIcon(r.kind)}</span>
                  </div>
                </td>

                <td className="px-3 lg:px-4 py-3 lg:py-4 text-white/70 text-xs lg:text-sm">
                  {formatTxDate(r.date)}
                </td>

                <td className="px-3 lg:px-4 py-3 lg:py-4">
                  <StatusBadge status={r.status} />
                </td>

                <td className="px-3 lg:px-4 py-3 lg:py-4 text-right">
                  <div className="font-semibold text-[var(--color-mercury)] text-xs lg:text-sm">
                    {formatPrice(r.amountUSDT)}
                  </div>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

      {/* Mobile Card View - Visible on Mobile Only */}
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.05 }}
        className="md:hidden divide-y divide-[var(--color-negative)]/60"
      >
        {paginatedRows.map((r) => (
          <motion.div
            key={`${r.id}-${r.date}-${r.amountUSDT}`}
            variants={rowVariants}
            className="p-3 sm:p-4 hover:bg-[var(--color-negative)]/30 transition-colors"
          >
            <div className="space-y-3">
              {/* Row 1: Coin & Status */}
              <div className="flex sm:flex-row flex-col items-center justify-between">
                <CoinAvatar symbol={r.coin.symbol} name={r.coin.name} />
                <StatusBadge status={r.status} />
              </div>

              {/* Row 2: Transaction ID & Type */}
              <div className="flex sm:flex-row flex-col items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[var(--color-mercury)]">
                  <span className="font-medium">{r.id}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[var(--color-mercury)]">
                  <span className="opacity-80">{formatTransactionType(r.type)}</span>
                  {kindIcon(r.kind)}
                </div>
              </div>

              {/* Row 3: Date & Amount */}
              <div className="flex sm:flex-row flex-col items-center justify-between">
                <div className="text-xs text-white/70">
                  {formatTxDate(r.date)}
                </div>
                <div className="font-semibold text-sm text-[var(--color-mercury)]">
                  {formatPrice(r.amountUSDT)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-4 sm:py-5 md:py-6 px-3 border-t border-[var(--color-negative)]/60">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            className="flex items-center gap-1.5 sm:gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Previous
          </button>
          <span className="text-xs sm:text-sm text-[var(--color-mercury)]">Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            className="flex items-center gap-1.5 sm:gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start"
          >
            Next
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
