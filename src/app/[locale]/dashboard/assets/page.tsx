"use client";

import { motion } from "framer-motion";
import { BalanceCard } from "@/components/assets/BalanceCard";
import { WalletProgressCard } from "@/components/assets/WalletProgressCard";
import { AssetsTable } from "@/components/assets/AssetsTable";

export default function AssetsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full min-w-0 overflow-x-hidden px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6 space-y-4 sm:space-y-5 lg:space-y-6 min-h-[calc(100vh-2rem)]"
    >
      {/* Row 1: Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        <BalanceCard />
        <WalletProgressCard />
      </div>

      {/* Row 2: Table */}
      <AssetsTable />
    </motion.div>
  );
}
