"use client";

import { motion } from "framer-motion";
import UpperBar from "@/components/dashboard/UpperBar";
import StatCard from "@/components/dashboard/StatCard";
import MonthlyOverallGrowth from "@/components/dashboard/MonthlyOverallGrowth";
import TotalBalance from "@/components/dashboard/TotalBalance";
import ActiveOverallGrowth from "@/components/dashboard/ActiveOverallGrowth";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function ExchangePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-3 sm:space-y-4 lg:space-y-6 p-3 sm:p-4 lg:p-6"
    >
      {/* Row 1: Upper bar */}
      <UpperBar />

      {/* Row 2: Four KPI cards with sparklines */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <StatCard 
          title="Bitcoin" 
          amount="$47,515.00" 
          symbol="BTC" 
          tone="green" 
          data={[
            { v: 1 }, { v: 33 }, { v: 16 }, { v: 48 }, { v: 9 },
            { v: 6 }, { v: 44 }, { v: 50 }, { v: 77 }, { v: 102 },
          ]}
        />
        <StatCard 
          title="Ethereum" 
          amount="$3,250.00" 
          symbol="ETH" 
          tone="orange" 
          data={[
            { v: 3.1 }, { v: 3.3 }, { v: 3.2 }, { v: 3.4 }, { v: 3.3 },
            { v: 3.5 }, { v: 3.4 }, { v: 3.6 }, { v: 3.3 }, { v: 3.4 },
          ]}
        />
        <StatCard 
          title="Litecoin" 
          amount="$125.00" 
          symbol="LTC" 
          tone="green" 
          data={[
            { v: 120 }, { v: 125 }, { v: 123 }, { v: 127 }, { v: 125 },
            { v: 129 }, { v: 127 }, { v: 131 }, { v: 125 }, { v: 127 },
          ]}
        />
        <StatCard 
          title="Binance Coin" 
          amount="$320.00" 
          symbol="BNB" 
          tone="green" 
          data={[
            { v: 310 }, { v: 320 }, { v: 315 }, { v: 325 }, { v: 320 },
            { v: 330 }, { v: 325 }, { v: 335 }, { v: 320 }, { v: 325 },
          ]}
        />
      </div>

      {/* Row 3: Monthly growth (big line) + Total balance (donut) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
        <div className="lg:col-span-8">
          <MonthlyOverallGrowth />
        </div>
        <div className="lg:col-span-4">
          <TotalBalance />
        </div>
      </div>

      {/* Row 4: Active Overall Growth (table) + Recent Transactions (list) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
        <div className="lg:col-span-8">
          <ActiveOverallGrowth />
        </div>
        <div className="lg:col-span-4">
          <RecentTransactions />
        </div>
      </div>
    </motion.div>
  );
}
