"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Different datasets for different timeframes
const weekData = [
  { m: "Mon", a: 15, b: 25 },
  { m: "Tue", a: 22, b: 30 },
  { m: "Wed", a: 18, b: 28 },
  { m: "Thu", a: 35, b: 45 },
  { m: "Fri", a: 28, b: 38 },
  { m: "Sat", a: 20, b: 32 },
  { m: "Sun", a: 25, b: 35 },
];

const monthData = [
  { m: "Jan", a: 8,  b: 40 },
  { m: "Feb", a: 22, b: 25 },
  { m: "Mar", a: 14, b: 30 },
  { m: "Apr", a: 35, b: 38 },
  { m: "May", a: 80, b: 72 },
  { m: "Jun", a: 60, b: 50 },
  { m: "Jul", a: 70, b: 62 },
  { m: "Aug", a: 48, b: 48 },
  { m: "Sep", a: 90, b: 16 },
  { m: "Oct", a: 20, b: 22 },
  { m: "Nov", a: 28, b: 35 },
  { m: "Dec", a: 40, b: 42 },
];

const yearData = [
  { m: "2020", a: 15, b: 25 },
  { m: "2021", a: 35, b: 45 },
  { m: "2022", a: 55, b: 65 },
  { m: "2023", a: 75, b: 85 },
  { m: "2024", a: 85, b: 90 },
];

export default function MonthlyOverallGrowth() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Month");
  
  const getData = () => {
    switch (selectedTimeframe) {
      case "Week": return weekData;
      case "Year": return yearData;
      default: return monthData;
    }
  };

  const getTitle = () => {
    switch (selectedTimeframe) {
      case "Week": return "Weekly Overall Growth";
      case "Year": return "Yearly Overall Growth";
      default: return "Monthly Overall Growth";
    }
  };

  const data = getData();
  const fillColor = "#117f60";
  const lineColor = "rgba(17,127,96,0.5)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70 p-4 lg:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[var(--color-mercury)]">{getTitle()}</h3>
        <div className="flex gap-1">
          {["Week", "Month", "Year"].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTimeframe(t)}
              className={cn(
                "text-xs rounded-lg px-3 py-1.5 transition-all duration-200",
                selectedTimeframe === t
                  ? "bg-[var(--color-elf-green)] text-white shadow-[0_0_12px_rgba(17,127,96,0.4)]" 
                  : "bg-[var(--color-negative)]/50 hover:bg-[var(--color-negative)]/70 text-[var(--color-mercury)]/80"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={fillColor} stopOpacity={0.4} />
                <stop offset="100%" stopColor={fillColor} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="m" tick={{ fill: "rgba(226,222,220,0.60)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fill: "rgba(226,222,220,0.60)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}k`}
              width={32}
            />
            <Tooltip
              cursor={{ stroke: "rgba(255,255,255,0.06)", strokeWidth: 24 }}
              contentStyle={{
                background: "rgba(13,22,53,0.95)",
                border: "1px solid rgba(39,44,45,0.7)",
                color: "var(--color-mercury)",
              }}
            />
            {/* Filled area chart */}
            <Area
              type="monotone"
              dataKey="b"
              stroke={fillColor}
              fill="url(#growthFill)"
              strokeWidth={3}
              dot={{ fill: fillColor, strokeWidth: 2, r: 4 }}
            />
            {/* Secondary line */}
            <Line 
              type="monotone" 
              dataKey="a" 
              stroke={lineColor} 
              strokeWidth={2} 
              dot={{ fill: lineColor, strokeWidth: 2, r: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
