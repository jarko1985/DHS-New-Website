"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bitcoin, ArrowDownToLine, ArrowUpToLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TbCoinBitcoinFilled } from "react-icons/tb";
import { SiBitcoinsv } from "react-icons/si";

export const BalanceCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="group h-full"
    >
      <Card className="relative text-center md:text-left overflow-hidden border-0 bg-white/[0.02] p-4 sm:p-5 lg:p-6 text-[var(--color-mercury)] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur rounded-xl h-full flex flex-col">
        <CardHeader className="flex flex-col items-center md:items-start justify-center pb-3 sm:pb-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2.5 sm:gap-1">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[var(--color-elf-green)]/20 flex items-center justify-center shrink-0">
            <TbCoinBitcoinFilled className="h-7 w-7 sm:h-8 sm:w-8 text-yellow-400" />
            </div>
            <CardTitle className="text-base sm:text-lg lg:text-xl font-semibold text-white">
              Bitcoin
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-0 relative z-10 flex-1 flex flex-col justify-between">
          <div className="text-xs sm:text-sm text-[var(--color-mercury)]/70 mb-1.5 sm:mb-2">Total Balance</div>

          <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white mb-1.5 sm:mb-2">
            0.445455<span className="ml-1.5 sm:ml-2 text-sm sm:text-base lg:text-lg text-[var(--color-mercury)]/70">BTC</span>
          </div>

          <div className="text-sm sm:text-base lg:text-lg font-medium text-[var(--color-elf-green)] mb-4 sm:mb-5 lg:mb-6">
            11,032.24 USD
          </div>

          <div className="h-px w-full bg-[#39FF14]/20 mb-4 sm:mb-5 lg:mb-6" />

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <Button className="btn-primary flex-1 sm:flex-none text-sm sm:text-base h-9 sm:h-10">
              <ArrowUpToLine className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Withdraw
            </Button>

            <Button className="btn-secondary flex-1 sm:flex-none text-sm sm:text-base h-9 sm:h-10">
              <ArrowDownToLine className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Deposit
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
