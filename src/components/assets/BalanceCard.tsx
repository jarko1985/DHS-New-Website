"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bitcoin, ArrowDownToLine, ArrowUpToLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BalanceCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="group h-full"
    >
      <Card className="relative overflow-hidden border-0 bg-white/[0.02] p-6 text-[var(--color-mercury)] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur rounded-xl h-full flex flex-col">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft gradient lines */}
          <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />
          <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />

          {/* Orange circles */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FFA500]/5 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[#39FF14]/5 blur-3xl" />
        </div>

        <CardHeader className="flex flex-row items-center justify-between pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--color-elf-green)]/20 flex items-center justify-center">
              <Bitcoin className="h-5 w-5 text-yellow-400" />
            </div>
            <CardTitle className="text-lg font-semibold text-white">
              Bitcoin
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-0 relative z-10 flex-1 flex flex-col justify-between">
          <div className="text-sm text-[var(--color-mercury)]/70 mb-2">Total Balance</div>

          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            0.445455<span className="ml-2 text-lg text-[var(--color-mercury)]/70">BTC</span>
          </div>

          <div className="text-base font-medium text-[var(--color-elf-green)] mb-6">
            11,032.24 USD
          </div>

          <div className="h-px w-full bg-[#39FF14]/20 mb-6" />

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="btn-primary flex-1 sm:flex-none">
              <ArrowUpToLine className="mr-2 h-4 w-4" />
              Withdraw
            </Button>

            <Button className="btn-secondary flex-1 sm:flex-none">
              <ArrowDownToLine className="mr-2 h-4 w-4" />
              Deposit
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
