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
      className="h-full"
    >
      <Card className="group h-full flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border-0 bg-[var(--color-blue)]/40 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_12px_50px_rgba(0,0,0,0.45)]">
        {/* Image */}
        <div className="relative shrink-0">
          <div className="w-full aspect-[16/9] bg-black/10 relative overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              quality={90}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-center transition duration-500"
              priority={false}
            />
          </div>

          {/* Date chip */}
          <span className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 inline-flex items-center rounded-full bg-[var(--color-elf-green)] px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-medium text-white shadow-md">
            {data.dateRange}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col space-y-2.5 sm:space-y-3 p-3 sm:p-4">
          <h3 className="line-clamp-2 text-center text-sm sm:text-[15px] md:text-[16px] font-semibold leading-snug text-white">
            {data.title}
          </h3>
          <p className="line-clamp-2 text-center text-xs sm:text-[13px] text-white/90 flex-1">
            {data.desc}
          </p>

          {/* Actions */}
          <div className="mt-auto pt-2 sm:pt-3 flex flex-col gap-2 sm:gap-2.5">
            <Button
              className="ramp-bg w-full shadow-lg shadow-black/30 transition hover:opacity-95 h-9 sm:h-10 text-sm sm:text-base"
              onClick={() => onDeposit(data.coins[0] ?? 'BTC')}
            >
              Deposit {labelFor(data.coins[0] ?? 'BTC')}
              <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
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
