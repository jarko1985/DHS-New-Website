'use client';

import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Cpu, Database } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Block {
  id: string;
  height: number;
  version: number;
  timestamp: number;
  tx_count: number;
  size: number;
  weight: number;
  merkle_root: string;
  previousblockhash: string;
  mediantime: number;
  nonce: number;
  bits: number;
  difficulty: number;
}

const formatId = (id: string) => `${id.slice(0, 4)}...${id.slice(-4)}`;
const formatTime = (ts: number) => new Date(ts * 1000).toLocaleTimeString();
const toMB = (size: number) => (size / 1_000_000).toFixed(2);

export default function BlocksTable() {
  const t = useTranslations('MarketExplorer.blocksTable');
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const deferredSearch = useDeferredValue(search);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    fetch('https://mempool.space/api/blocks')
      .then(res => res.json())
      .then(data => {
        setBlocks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (!deferredSearch) return blocks;
    const s = deferredSearch.toLowerCase();
    return blocks.filter(
      b =>
        b.id.toLowerCase().includes(s) ||
        b.height.toString().includes(s) ||
        b.tx_count.toString().includes(s)
    );
  }, [blocks, deferredSearch]);

  const paginated = useMemo(
    () => filtered.slice((page - 1) * perPage, page * perPage),
    [filtered, page]
  );

  return (
    <Card className="bg-[var(--color-blue)]/40 border border-white/10 backdrop-blur-md text-[var(--color-mercury)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Cpu className="h-5 w-5 text-[var(--color-elf-green)]" />
          {t('title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* search */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[var(--color-blue-whale)]/60 border border-white/10 rounded-md px-3 py-2 w-full max-w-md">
            <Search className="shrink-0 h-4 w-4 text-[var(--color-mercury)]/80" />
            <Input
              value={search}
              onChange={e => {
                setPage(1);
                setSearch(e.target.value);
              }}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent border-0 focus-visible:ring-0 text-[var(--color-mercury)] placeholder:text-[var(--color-mercury)]/50"
            />
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-[var(--color-mercury)]/70">
            <Database className="h-4 w-4" />
            <span>{t('showing')} {filtered.length}</span>
          </div>
        </div>

        <ScrollArea className="w-full rounded-xl border border-white/10">
          <div className="min-w-[850px]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-blue)]/80 text-[var(--color-mercury)]">
                <tr>
                  <th className="p-3 text-left font-semibold">{t('columns.id')}</th>
                  <th className="p-3 text-left font-semibold">{t('columns.height')}</th>
                  <th className="p-3 text-left font-semibold">{t('columns.transactions')}</th>
                  <th className="p-3 text-left font-semibold">{t('columns.nonce')}</th>
                  <th className="p-3 text-left font-semibold">{t('columns.bits')}</th>
                  <th className="p-3 text-left font-semibold">{t('columns.medianTime')}</th>
                  <th className="p-3 text-left font-semibold w-56">{t('columns.size')}</th>
                </tr>
              </thead>
              <tbody>
                {loading
                  ? [...Array(perPage)].map((_, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td colSpan={7} className="p-3">
                          <Skeleton className="h-6 w-full bg-white/10" />
                        </td>
                      </tr>
                    ))
                  : paginated.map((block, idx) => (
                      <motion.tr
                        key={block.id}
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18, delay: idx * 0.02 }}
                        className="border-b border-white/5 hover:bg-white/[0.04] transition-colors"
                      >
                        <td className="p-3 font-mono">{formatId(block.id)}</td>
                        <td className="p-3">{block.height}</td>
                        <td className="p-3">{block.tx_count}</td>
                        <td className="p-3">{block.nonce}</td>
                        <td className="p-3">{block.bits}</td>
                        <td className="p-3">{formatTime(block.mediantime)}</td>

                        <td className="p-3">
                          <div className="relative w-full bg-white/8 h-3.5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min((block.size / 3_000_000) * 100, 100)}%` }}
                              transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                              className="absolute top-0 left-0 h-full ramp-bg"
                            />
                            <span className="absolute -top-5 right-0 text-xs text-[var(--color-mercury)]/75">
                              {toMB(block.size)} MB
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
              </tbody>
            </table>
          </div>
        </ScrollArea>

        {/* pagination */}
        <div className="mt-6 flex justify-center gap-3 items-center">
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            className="border-white/20 text-[var(--color-mercury)] hover:bg-white/[0.06]"
          >
            {t('pagination.previous')}
          </Button>
          <span className="text-sm">
            {t('pagination.page')} {page}
          </span>
          <Button
            disabled={page * perPage >= filtered.length}
            onClick={() => setPage(p => p + 1)}
            className="ramp-bg text-white hover:brightness-110"
          >
            {t('pagination.next')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
