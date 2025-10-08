// src/app/[locale]/market-explorer/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

import { ArrowLeft, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';

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

interface Transaction {
  txid: string;
  size: number;
  weight: number;
  fee: number;
  vout: any[];
  status: {
    confirmed: boolean;
    block_height: number;
    block_hash: string;
    block_time: number;
  };
}

export default function BlockDetailsPage() {
  const t = useTranslations('MarketExplorer.blockDetails');
  const locale = useLocale();
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const [block, setBlock] = useState<Block | null>(null);
  const [txs, setTxs] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const perPage = 25;
  const [totalPages, setTotalPages] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const fetchBlockDetails = async () => {
      const res = await fetch(`https://mempool.space/api/block/${id}`);
      const data = await res.json();
      setBlock(data);
      if (data?.tx_count) setTotalPages(Math.ceil(data.tx_count / perPage));
    };
    if (id) fetchBlockDetails();
  }, [id]);

  useEffect(() => {
    const fetchBlockTxs = async () => {
      setLoading(true);
      const res = await fetch(`https://mempool.space/api/block/${id}/txs/${page * perPage}`);
      const data = await res.json();
      setTxs(data);
      setLoading(false);
    };
    if (id) fetchBlockTxs();
  }, [id, page]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen w-full bg-[var(--color-blue-whale)] text-white"
    >
      <div className="px-4 sm:px-6 xl:px-0 xl:max-w-[70%] mx-auto py-10 space-y-8">

        {/* Back link */}
        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}/market-explorer`}
            className="inline-flex items-center gap-2 text-sm group"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </span>
            <span className="hover:underline text-[var(--color-mercury)]">{t('backToExplorer')}</span>
          </Link>
        </div>

        {/* Page title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 pl-6 relative text-white">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-sm bg-[var(--color-elf-green)]"></span>
          {t('blockTitle')}
          {id?.slice(0, 4)}...{id?.slice(-4)}
        </h2>

        <div className="grid gap-8">

          {/* Block Details */}
          <Card className="bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                <Database className="h-5 w-5 text-[var(--color-elf-green)]" />
                {t('detailsTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="w-full">
                <table className="w-full text-xs sm:text-sm">
                  <tbody>
                    {block
                      ? Object.entries(block).map(([key, value], idx) => (
                          <motion.tr
                            key={key}
                            initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.18, delay: idx * 0.015 }}
                            className="border-b border-white/10"
                          >
                            <td className="p-3 font-semibold capitalize text-[var(--color-mercury)] whitespace-nowrap">
                              {key.replace(/_/g, ' ')}
                            </td>
                            <td className="p-3 text-[var(--color-mercury)] break-words max-w-[32rem]">
                              {value?.toString()}
                            </td>
                          </motion.tr>
                        ))
                      : [...Array(10)].map((_, i) => (
                          <tr key={i}>
                            <td colSpan={2} className="p-3">
                              <Skeleton className="h-6 w-full bg-white/10" />
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Transactions */}
          <section>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 pl-6 relative text-white">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-sm bg-[var(--color-elf-green)]"></span>
              {t('transactionsTitle')}
            </h3>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <ScrollArea className="w-full">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead className="bg-[var(--color-blue)]/60 text-white text-left">
                    <tr>
                      <th className="p-2 sm:p-3 font-semibold">{t('transactionColumns.txId')}</th>
                      <th className="p-2 sm:p-3 font-semibold">{t('transactionColumns.vout')}</th>
                      <th className="p-2 sm:p-3 font-semibold">{t('transactionColumns.size')}</th>
                      <th className="p-2 sm:p-3 font-semibold">{t('transactionColumns.weight')}</th>
                      <th className="p-2 sm:p-3 font-semibold">{t('transactionColumns.status')}</th>
                      <th className="p-2 sm:p-3 font-semibold">{t('transactionColumns.fee')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading
                      ? [...Array(10)].map((_, i) => (
                          <tr key={i} className="border-b border-white/10">
                            <td colSpan={6} className="p-2 sm:p-3">
                              <Skeleton className="h-6 w-full bg-white/10" />
                            </td>
                          </tr>
                        ))
                      : txs.map((tx, i) => (
                          <motion.tr
                            key={tx.txid}
                            initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.18, delay: i * 0.01 }}
                            whileHover={{ scale: 1.01 }}
                            className="border-b border-white/10 hover:bg-white/[0.04] transition-colors"
                          >
                            <td className="p-2 sm:p-3 text-[var(--color-mercury)] break-words max-w-xs">
                              {tx.txid.slice(0, 6)}...{tx.txid.slice(-6)}
                            </td>
                            <td className="p-2 sm:p-3 text-[var(--color-mercury)]">{tx.vout.length}</td>
                            <td className="p-2 sm:p-3 text-[var(--color-mercury)]">{tx.size}</td>
                            <td className="p-2 sm:p-3 text-[var(--color-mercury)]">{tx.weight}</td>
                            <td className="p-2 sm:p-3 text-[var(--color-mercury)]">
                              {tx.status.confirmed
                                ? t('transactionStatus.confirmed')
                                : t('transactionStatus.pending')}
                            </td>
                            <td className="p-2 sm:p-3">
                              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[var(--color-elf-green)]/20 text-white border border-[var(--color-elf-green)]/30">
                                {tx.fee}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                  </tbody>
                </table>
              </ScrollArea>
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center mt-6 gap-3 items-center text-xs sm:text-sm">
              <Button
                className="btn-primary"
                onClick={() => setPage(0)}
                disabled={page === 0}
              >
                {t('pagination.first')}
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-[var(--color-mercury)] hover:bg-white/[0.06]"
                onClick={() => setPage(p => Math.max(p - 1, 0))}
                disabled={page === 0}
              >
                {t('pagination.previous')}
              </Button>

              <span className="px-3 py-2 text-[var(--color-mercury)]">
                {t('pagination.pageInfo', { current: page + 1, total: totalPages || '?' })}
              </span>

              <Button
                className="btn-primary"
                onClick={() => setPage(p => p + 1)}
                disabled={page + 1 >= totalPages}
              >
                {t('pagination.next')}
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-[var(--color-mercury)] hover:bg-white/[0.06]"
                onClick={() => setPage(totalPages - 1)}
                disabled={page + 1 >= totalPages}
              >
                {t('pagination.last')}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </motion.main>
  );
}
