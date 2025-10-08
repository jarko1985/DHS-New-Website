"use client";
import { motion } from "framer-motion";
import CryptoCards from '@/components/shared/CryptoCards';
import PricesTable from '@/components/shared/PricesTable';

export default function PricesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-3 sm:space-y-4 lg:space-y-6 p-3 sm:p-4 lg:p-6 w-full min-w-0 overflow-x-hidden"
    >
      <CryptoCards />
      <PricesTable />
    </motion.div>
  );
}
