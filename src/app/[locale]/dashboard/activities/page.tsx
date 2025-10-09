"use client";
import * as React from "react";
import { FiltersBar } from "@/components/activities/FiltersBar";
import { ActivitiesTable } from "@/components/activities/ActivitiesTable";
import type { Transaction } from "@/types/activities";
import type { DateRangeKey } from "@/lib/date";
import { inRange } from "@/lib/date";

/**
 * Demo/mock data. Mixed with recent dates so "This Week/Month" show results.
 * Replace with your server data fetch if needed.
 */
const now = new Date();
const daysAgo = (n: number) =>
  new Date(now.getFullYear(), now.getMonth(), now.getDate() - n).toISOString();

const MOCK: Transaction[] = [
  {
    id: "#1455548",
    coin: { symbol: "BTC", name: "Bitcoin" },
    type: "withdrawal",
    date: daysAgo(3),
    status: "pending",
    amountUSDT: 7.7642303,
    kind: "withdrawal",
  },
  {
    id: "#1455547",
    coin: { symbol: "USDT", name: "Tether" },
    type: "deposit",
    date: daysAgo(7),
    status: "completed",
    amountUSDT: 0.3456182,
    kind: "deposit",
  },
  {
    id: "#1455546",
    coin: { symbol: "ETH", name: "Ethereum" },
    type: "transfer",
    date: daysAgo(15),
    status: "pending",
    amountUSDT: 0.3456182,
    kind: "transfer",
  },
  {
    id: "#1455545",
    coin: { symbol: "LTC", name: "Litecoin" },
    type: "deposit",
    date: "2025-02-01T10:00:00.000Z",
    status: "completed",
    amountUSDT: 1.09731151,
    kind: "deposit",
  },
  {
    id: "#1455544",
    coin: { symbol: "DOGE", name: "Dogecoin" },
    type: "withdrawal",
    date: daysAgo(12),
    status: "pending",
    amountUSDT: 2.5290621,
    kind: "withdrawal",
  },
  {
    id: "#1455543",
    coin: { symbol: "BNB", name: "Binance" },
    type: "deposit",
    date: daysAgo(21),
    status: "completed",
    amountUSDT: 1.9862542,
    kind: "deposit",
  },
  {
    id: "#1455542",
    coin: { symbol: "TRX", name: "TRON" },
    type: "transfer",
    date: daysAgo(22),
    status: "completed",
    amountUSDT: 0.3456182,
    kind: "transfer",
  },
  {
    id: "#1455541",
    coin: { symbol: "BTC", name: "Bitcoin" },
    type: "withdrawal",
    date: daysAgo(28),
    status: "pending",
    amountUSDT: 7.7642303,
    kind: "withdrawal",
  },
  {
    id: "#1455540",
    coin: { symbol: "LRC", name: "Loopring" },
    type: "deposit",
    date: daysAgo(30),
    status: "completed",
    amountUSDT: 2.5290621,
    kind: "deposit",
  },
  {
    id: "#1455539",
    coin: { symbol: "ETH", name: "Ethereum" },
    type: "deposit",
    date: daysAgo(31),
    status: "completed",
    amountUSDT: 2.5290621,
    kind: "deposit",
  },
  {
    id: "#1455538",
    coin: { symbol: "ACT", name: "Achain" },
    type: "transfer",
    date: daysAgo(34),
    status: "completed",
    amountUSDT: 1.9862542,
    kind: "transfer",
  },
  {
    id: "#1455537",
    coin: { symbol: "LRC", name: "Loopring" },
    type: "withdrawal",
    date: daysAgo(40),
    status: "pending",
    amountUSDT: 2.5290621,
    kind: "withdrawal",
  },
];

export default function ActivitiesPage() {
  // filters
  const [kind, setKind] = React.useState<"all" | Transaction["kind"]>("all");
  const [range, setRange] = React.useState<DateRangeKey>("all");

  const filtered = React.useMemo(() => {
    return MOCK.filter((t) => (kind === "all" ? true : t.kind === kind)).filter(
      (t) => inRange(t.date, range)
    );
  }, [kind, range]);

  return (
    <main className="min-h-screen bg-[var(--color-blue-whale)] px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-8">
      <section className="w-full space-y-4 sm:space-y-5 md:space-y-6">
        <FiltersBar
          activeKind={kind}
          onKindChange={setKind}
          dateRange={range}
          onDateRangeChange={setRange}
        />
        <ActivitiesTable rows={filtered} />
      </section>
    </main>
  );
}
