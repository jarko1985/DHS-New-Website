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
      className="w-full min-w-0 overflow-x-hidden p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 min-h-[calc(100vh-2rem)]"
    >
      {/* Row 1: Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        <BalanceCard />
        <WalletProgressCard />
      </div>

      {/* Row 2: Table */}
      <AssetsTable />
    </motion.div>
  );
}
