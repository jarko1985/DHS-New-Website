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
        className="space-y-3 sm:space-y-4 lg:space-y-6 p-3 sm:p-4 lg:p-6"
      >
        {/* Top header row */}
        <ExchangeHeader />

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
          {/* Left side: Chart */}
          <div className="lg:col-span-8">
            <PriceChart />
          </div>
          
          {/* Right side: Balance and Trade Form */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4 lg:space-y-6">
            <TotalBalance />
            <TradeForm />
          </div>
        </div>

        {/* Bottom row: Market trades */}
        <MarketTrades />
      </motion.div>
    </TradingProvider>
  );
}
