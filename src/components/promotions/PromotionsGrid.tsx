'use client';

import { motion } from 'framer-motion';
import PromotionCard from '@/components/promotions/PromotionCard';
import type { Promotion } from '@/types/promotions';

export default function PromotionsGrid({ items }: { items: Promotion[] }) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.06 },
        },
      }}
      className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {items.map((p) => (
        <PromotionCard key={p.id} data={p} />
      ))}
    </motion.section>
  );
}
