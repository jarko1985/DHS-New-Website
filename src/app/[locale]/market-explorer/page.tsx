'use client';

import { motion } from 'framer-motion';
import BlocksRow from '@/components/market-explorer/BlocksRow';
import BlocksTable from '@/components/market-explorer/BlocksTable';
import Disclaimer from '@/components/market-explorer/Disclaimer';

export default function MarketExplorerPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen w-full bg-[var(--color-blue-whale)] text-[var(--color-mercury)]"
    >
      <div className="mx-auto w-full xl:max-w-[70%] px-4 xl:px-0 py-10 space-y-10">
        <BlocksRow />
        <BlocksTable />
        <Disclaimer />
      </div>
    </motion.main>
  );
}
