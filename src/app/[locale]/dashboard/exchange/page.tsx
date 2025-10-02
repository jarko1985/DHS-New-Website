"use client";

import { motion } from "framer-motion";
import UpperBar from "@/components/exchange/UpperBar";
import StatCard from "@/components/exchange/StatCard";
import MonthlyOverallGrowth from "@/components/exchange/MonthlyOverallGrowth";
import TotalBalance from "@/components/exchange/TotalBalance";
import ActiveOverallGrowth from "@/components/exchange/ActiveOverallGrowth";
import RecentTransactions from "@/components/exchange/RecentTransactions";

export default function ExchangePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-4 lg:space-y-6"
    >
      {/* Row 1: Upper bar */}
      <UpperBar />

      {/* Row 2: Four KPI cards with sparklines */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        <StatCard 
          title="Bitcoin" 
          amount="$47,515.00" 
          symbol="BTC" 
          tone="green" 
          data={[
            { v: 45 }, { v: 47 }, { v: 46 }, { v: 48 }, { v: 47 },
            { v: 49 }, { v: 48 }, { v: 50 }, { v: 47 }, { v: 48 },
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
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6">
        <div className="xl:col-span-8">
          <MonthlyOverallGrowth />
        </div>
        <div className="xl:col-span-4">
          <TotalBalance />
        </div>
      </div>

      {/* Row 4: Active Overall Growth (table) + Recent Transactions (list) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6">
        <div className="xl:col-span-8">
          <ActiveOverallGrowth />
        </div>
        <div className="xl:col-span-4">
          <RecentTransactions />
        </div>
      </div>
    </motion.div>
  );
}
