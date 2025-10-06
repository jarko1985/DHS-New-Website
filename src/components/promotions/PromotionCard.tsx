'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Promotion, Coin } from '@/types/promotions';
import CoinDepositButton from './CoinDepositButton';

export default function PromotionCard({ data }: { data: Promotion }) {
  const onDeposit = (coin: Coin) => {
    // TODO: navigate or open your deposit flow
    console.log('Deposit clicked:', coin, 'for promo', data.id);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <Card className="group overflow-hidden rounded-2xl border-0 bg-[var(--color-blue)]/40 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_12px_50px_rgba(0,0,0,0.45)]">
        {/* Image */}
        <div className="relative">
          <div className="w-full bg-black/10">
            <Image
              src={data.image}
              alt={data.title}
              width={1200}
              height={675}
              quality={90}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="w-full h-auto object-contain object-center transition duration-500"
              priority={false}
            />
          </div>

          {/* Date chip */}
          <span className="absolute bottom-3 right-3 inline-flex items-center rounded-full bg-[var(--color-elf-green)] px-3 py-1 text-[11px] font-medium text-white shadow-md">
            {data.dateRange}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-3 p-4">
          <h3 className="line-clamp-2 text-center text-[16px] font-semibold leading-snug text-white md:text-[17px]">
            {data.title}
          </h3>
          <p className="line-clamp-2 text-center text-[13px] text-white">
            {data.desc}
          </p>

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3">
            <Button
              className="ramp-bg w-full shadow-lg shadow-black/30 transition hover:opacity-95"
              onClick={() => onDeposit(data.coins[0] ?? 'BTC')}
            >
              Deposit {labelFor(data.coins[0] ?? 'BTC')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {data.coins.map((c) => (
                <CoinDepositButton key={c} coin={c} onClick={() => onDeposit(c)} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function labelFor(c: Coin) {
  switch (c) {
    case 'BTC':
      return 'Bitcoin';
    case 'ETH':
      return 'Ethereum';
    case 'SOL':
      return 'Solana';
    case 'XRP':
      return 'XRP';
  }
}
