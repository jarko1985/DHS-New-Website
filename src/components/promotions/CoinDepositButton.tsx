'use client';

import { Button } from '@/components/ui/button';
import type { Coin } from '@/types/promotions';

export default function CoinDepositButton({
  coin,
  onClick,
}: {
  coin: Coin;
  onClick: () => void;
}) {
  const map: Record<Coin, string> = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    SOL: 'Solana',
    XRP: 'XRP',
  };

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={onClick}
      className="h-7 sm:h-8 rounded-full border-white/10 bg-white/5 px-2.5 sm:px-3 text-[11px] sm:text-[12px] text-[var(--color-mercury)] shadow-sm transition hover:border-[var(--color-elf-green)] hover:bg-[var(--color-elf-green)]/15 hover:text-white group-hover:!border-orange-500 group-hover:!bg-orange-500 group-hover:!text-[var(--color-elf-green)] group-hover:shadow-md group-hover:shadow-orange-500/20"
    >
      {map[coin]}
    </Button>
  );
}
