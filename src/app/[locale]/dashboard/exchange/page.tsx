"use client";

import { motion } from "framer-motion";
import ExchangeHeader from "@/components/exchange/ExchangeHeader";
import PriceChart from "@/components/exchange/PriceChart";
import TotalBalance from "@/components/exchange/TotalBalance";
import MarketTrades from "@/components/exchange/MarketTrades";
import TradeForm from "@/components/exchange/TradeForm";
import { TradingProvider } from "@/context/TradingContext";

export default function ExchangePage() {
  return (
    <TradingProvider>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-4 lg:space-y-6 h-screen flex flex-col"
      >
        {/* Top header row */}
        <div className="flex-shrink-0">
          <ExchangeHeader />
        </div>

        {/* Main content area */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6 min-h-0">
          {/* Left side: Chart */}
          <div className="xl:col-span-8 flex flex-col min-h-0">
            <div className="flex-1 min-h-0">
              <PriceChart />
            </div>
          </div>
          
          {/* Right side: Balance and Trade Form */}
          <div className="xl:col-span-4 flex flex-col gap-4 lg:gap-6 min-h-0">
            <div className="flex-1 min-h-0">
              <TotalBalance />
            </div>
            <div className="flex-1 min-h-0">
              <TradeForm />
            </div>
          </div>
        </div>

        {/* Bottom row: Market trades */}
        <div className="flex-shrink-0">
          <MarketTrades />
        </div>
      </motion.div>
    </TradingProvider>
  );
}
