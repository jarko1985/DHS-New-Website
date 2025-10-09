'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import PromotionsGrid from '@/components/promotions/PromotionsGrid';
import type { Promotion } from '@/types/promotions';
import { Input } from '@/components/ui/input';

const promotions: Promotion[] = [
  {
    id: 'p1',
    title: 'Zero‑Fee BTC/ETH Spot Trading',
    desc:
      'Enjoy zero maker fees on BTC and ETH spot pairs for the entire month. Boost your volume and save on every trade.',
    dateRange: 'Oct 01 - Oct 31, 2025',
    image: '/images/promo/promo1.png',
    coins: ['BTC', 'ETH'],
  },
  {
    id: 'p2',
    title: 'Solana Season: Boosted Staking Rewards',
    desc:
      'Stake SOL during the campaign period to earn boosted yields. Flexible entry and exit with daily rewards.',
    dateRange: 'Oct 01 - Oct 31, 2025',
    image: '/images/promo/promo2.png',
    coins: ['SOL'],
  },
  {
    id: 'p3',
    title: 'Deposit Bonus: Earn XRP Rewards',
    desc:
      'Make your first deposit and qualify for tiered XRP rewards based on your net deposit size. New users only.',
    dateRange: 'Oct 01 - Oct 31, 2025',
    image: '/images/promo/promo3.png',
    coins: ['BTC', 'ETH', 'XRP'],
  },
  {
    id: 'p4',
    title: 'Learn & Earn: Blockchain Basics',
    desc:
      'Complete short lessons and quizzes to unlock crypto rewards. Limited spots—finish all modules to qualify.',
    dateRange: 'Oct 06 - Oct 27, 2025',
    image: '/images/promo/promo4.png',
    coins: ['XRP'],
  },
  {
    id: 'p5',
    title: 'Referral Boost: 30% Commissions Bonus',
    desc:
      'Invite friends and earn an extra 30% referral commission during the campaign. Your friends get fee discounts too.',
    dateRange: 'Oct 01 - Oct 31, 2025',
    image: '/images/promo/promo5.png',
    coins: ['BTC', 'ETH', 'SOL', 'XRP'],
  },
  {
    id: 'p6',
    title: 'SOL Trading Rebate: 20% Back on Fees',
    desc:
      'Trade SOL spot or perpetual pairs and get 20% of your trading fees rebated weekly during the promo period.',
    dateRange: 'Oct 01 - Oct 31, 2025',
    image: '/images/promo/promo6.png',
    coins: ['SOL'],
  },
  {
    id: 'p7',
    title: 'Proof‑of‑Reserves Anniversary Airdrop',
    desc:
      'Celebrate transparency with us. Deposit during the window to share a prize pool. Rewards distributed proportionally.',
    dateRange: 'Oct 10 - Oct 24, 2025',
    image: '/images/promo/promo7.png',
    coins: ['BTC', 'ETH', 'SOL', 'XRP'],
  },
  {
    id: 'p8',
    title: 'VIP Fast‑Track: Volume Challenge',
    desc:
      'Hit the 30‑day trading volume target to unlock temporary VIP status with reduced fees and higher limits.',
    dateRange: 'Oct 01 - Oct 31, 2025',
    image: '/images/promo/promo8.png',
    coins: ['BTC', 'ETH'],
  },
];

export default function PromotionsPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return promotions;
    return promotions.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-[calc(100vh-64px)] w-full bg-[var(--color-blue-whale)] px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 text-[var(--color-mercury)]"
    >
      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">Latest Promotions</h1>
          <div className="w-full sm:w-auto sm:max-w-xs">
            <Input
              placeholder="Search promotions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-white/10 bg-white/5 text-white placeholder:text-white/50 text-sm sm:text-base h-9 sm:h-10"
              aria-label="Search promotions"
            />
          </div>
        </header>

        <PromotionsGrid items={filtered} />
      </div>
    </motion.main>
  );
}
