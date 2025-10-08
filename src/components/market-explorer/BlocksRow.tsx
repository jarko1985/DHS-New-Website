'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Link as LinkIcon } from 'lucide-react';

interface Block {
  id: string;
  height: number;
  timestamp: number;
  tx_count: number;
  size: number;
  merkle_root: string;
  previousblockhash: string;
  mediantime: number;
  version: number;
  weight: number;
}

function getFillPercent(height: number, maxHeight: number): number {
  return Math.min((height / maxHeight) * 100, 100);
}

export default function BlocksRow() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('MarketExplorer.blocksRow');
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastHeight, setLastHeight] = useState<number | null>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const fetchBlocks = async (startHeight?: number) => {
    setLoading(true);
    try {
      const endpoint = startHeight
        ? `https://mempool.space/api/blocks/${startHeight}`
        : 'https://mempool.space/api/blocks';
      const res = await fetch(endpoint);
      const data = await res.json();
      setBlocks(prev => [...(prev || []), ...data]);
      setLastHeight(data[data.length - 1].height - 1);
      if (!startHeight) setMaxHeight(data[0].height);
    } catch (error) {
      console.error('Error fetching blocks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  return (
    <section className="w-full">
      {/* Title */}
      <h1 className="text-3xl tracking-[2px] font-bold text-center lg:text-left relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[var(--color-orange)]">
        {t('title')}
      </h1>

      <figcaption
        className={`${isArabic ? 'lg:text-right' : 'lg:text-left'} ramp-text lg:text-[1rem] lg:ml-4 italic text-[0.95rem] font-semibold tracking-wider text-center mb-6`}
      >
        &quot;{t('subtitle')}&quot;
      </figcaption>

      <p className="tracking-[2px] text-[var(--color-mercury)]/90">
        {t('description1')}
      </p>
      <p className="mb-8 tracking-[2px] text-[var(--color-mercury)]/90">
        {t('description2')}
      </p>

      <div className="w-full overflow-x-auto pb-4 custom-scroll">
        <div className="inline-flex gap-8 px-2 py-2 items-end">
          {/* skeletons */}
          {blocks.length === 0 &&
            Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={idx}
                className="w-44 h-52 rounded-md bg-[var(--color-blue)]/40 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] animate-pulse"
              />
            ))}

          {/* blocks */}
          {blocks.map((block, index) => {
            const fillPercent = getFillPercent(block.height, maxHeight);
            const timeAgo = Math.floor((Date.now() / 1000 - block.timestamp) / 60);
            const blockSizeBtc = (block.size / 100000000).toFixed(3);
            const feeRate = (block.weight / block.size).toFixed(2);

            return (
              <div key={block.id ?? index} className="flex flex-col items-center relative">
                {/* Height pill */}
                <Badge
                  variant="outline"
                  className="mb-3 bg-[var(--color-negative)] text-[var(--color-mercury)] border-white/10 rounded-full"
                >
                  #{block.height}
                </Badge>

                {/* chain link between cards */}
                {index > 0 && (
                  <div
                    className="absolute -left-[30px] top-1/2 w-7 h-1 ramp-bg rounded-sm"
                    aria-hidden
                  />
                )}

                <Link href={`/en/market-explorer/${block.id}`} className="group focus:outline-none">
                  <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="relative w-44 h-52 perspective-1000"
                  >
                    {/* main cube */}
                    <div className="relative w-full h-full preserve-3d transition-transform duration-300 group-hover:-translate-y-1 group-hover:[transform:rotateY(12deg)]">
                      {/* front */}
                      <div
                        className="absolute w-full h-full bg-[var(--color-blue)]/55 backdrop-blur-md border border-white/10 
                        rounded-md shadow-xl flex flex-col justify-between p-4 backface-hidden"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs text-[var(--color-warning)] mb-1">{t('feeRate')}</p>
                            <p className="text-sm font-mono text-[var(--color-mercury)]">{feeRate} sat/vB</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-[var(--color-warning)] mb-1">{t('transactions')}</p>
                            <p className="text-sm font-mono text-[var(--color-mercury)]">{block.tx_count}</p>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-xs text-[var(--color-warning)] mb-1">{t('blockReward')}</p>
                          <p className="text-xl font-bold font-mono text-[var(--color-mercury)]">
                            {blockSizeBtc} BTC
                          </p>
                        </div>

                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-xs text-[var(--color-warning)] mb-1">{t('mined')}</p>
                            <p className="text-xs font-mono text-[var(--color-mercury)]">{timeAgo} {t('minAgo')}</p>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-[var(--color-elf-green)]/25 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-[var(--color-elf-green)] animate-pulse" />
                          </div>
                        </div>
                      </div>

                      {/* right depth face with animated fill */}
                      <div className="absolute w-6 h-full bg-[var(--color-blue)]/70 border-l border-white/10 right-0 top-0 origin-right [transform:rotateY(90deg)] backface-hidden">
                        <div className="relative h-full w-full flex items-end justify-center overflow-hidden">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${fillPercent}%` }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: 'easeInOut' }}
                            className="w-1.5 rounded-t-sm bg-[var(--color-elf-green)] shadow-[0_0_12px_rgba(17,127,96,0.55)]"
                          />
                        </div>
                      </div>

                      {/* top face */}
                      <div className="absolute w-full h-6 bg-[var(--color-blue)]/70 border-t border-white/10 top-0 origin-top [transform:rotateX(90deg)] backface-hidden">
                        <div className="h-full w-full flex items-center justify-center">
                          <p className="text-[8px] text-[var(--color-mercury)]/70 uppercase tracking-wider rotate-90 whitespace-nowrap">
                            {t('bitcoinBlock')}
                          </p>
                        </div>
                      </div>

                      {/* bottom face (soft shadow) */}
                      <div className="absolute w-full h-6 bg-black/30 bottom-0 origin-bottom [transform:rotateX(90deg)] backface-hidden rounded-b-md" />
                    </div>

                    {/* glow on hover */}
                    <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
                  </motion.div>
                </Link>

                {/* deep link icon on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
                  <Link
                    href={`/en/market-explorer/${block.id}`}
                    className="inline-flex items-center gap-1 text-xs text-[var(--color-mercury)]/70 hover:text-[var(--color-mercury)]"
                  >
                    <LinkIcon className="h-3.5 w-3.5" />
                    {t('viewDetails')}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Load more */}
      <div className="text-center mt-8">
        <Button
          onClick={() => lastHeight && fetchBlocks(lastHeight)}
          disabled={loading}
          className="ramp-bg text-white px-6 py-5 rounded-md shadow-lg hover:brightness-110 hover:shadow-xl transition-all"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              {t('loading')}
            </span>
          ) : (
            t('loadMoreBlocks')
          )}
        </Button>
      </div>
    </section>
  );
}
