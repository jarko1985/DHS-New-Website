"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const percent = 89;
const chartData = [
  { name: "Used", value: percent },
  { name: "Rest", value: 100 - percent },
];

export default function TotalBalance() {
  const green = "var(--color-elf-green)";
  const orange = "#e47a5a";
  const ring = "var(--color-negative)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70 p-4 lg:p-5 flex flex-col"
    >
      <h3 className="text-lg font-semibold text-[var(--color-mercury)] mb-4 flex-shrink-0">Total Balance</h3>
      
      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={50}
                outerRadius={75}
                startAngle={90}
                endAngle={-270}
                stroke={ring}
                strokeWidth={2}
              >
                <Cell fill={green} />
                <Cell fill={orange} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-mercury)]">{percent}%</div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-3 mt-4 flex-shrink-0">
        <div>
          <p className="text-xl font-bold tracking-tight text-[var(--color-mercury)]">0.3475948</p>
          <p className="text-sm text-[var(--color-mercury)]/70">11,032.24 USD</p>
        </div>
        <div>
          <button className="px-6 py-2.5 rounded-lg bg-[var(--color-elf-green)] text-white hover:bg-[var(--color-elf-green)]/90 transition-all duration-200 text-sm font-medium shadow-[0_8px_20px_-10px_rgba(17,127,96,0.4)]">
            Withdraw
          </button>
        </div>
      </div>
    </motion.div>
  );
}
