// app/fees/components/FeeCard.tsx
'use client';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, ArrowUpDown, CheckCircle, XCircle, Star } from 'lucide-react';

interface Props {
  title: string;
  items: string[];
}

const getCardIcon = (title: string) => {
  switch (title) {
    case 'Trading Fees': return <ArrowUpDown className="w-6 h-6" />;
    case 'Deposit Fees': return <Wallet className="w-6 h-6" />;
    case 'Withdrawal Fees': return <CreditCard className="w-6 h-6" />;
    case 'Other Fees': return <XCircle className="w-6 h-6" />;
    case 'Key Principles': return <Star className="w-6 h-6" />;
    default: return <CheckCircle className="w-6 h-6" />;
  }
};

const getCardGradient = (title: string) => {
  switch (title) {
    case 'Trading Fees': return 'from-elf-green/20 to-elf-green/5';
    case 'Deposit Fees': return 'from-positive/20 to-positive/5';
    case 'Withdrawal Fees': return 'from-blue/20 to-blue/5';
    case 'Other Fees': return 'from-negative/20 to-negative/5';
    case 'Key Principles': return 'from-warning/20 to-warning/5';
    default: return 'from-white/20 to-white/5';
  }
};

export default function FeeCard({ title, items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`group relative bg-gradient-to-br ${getCardGradient(title)} backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6 h-full overflow-hidden hover:shadow-2xl transition-all duration-300`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/10 rounded-xl text-elf-green group-hover:bg-white/20 transition-colors">
            {getCardIcon(title)}
          </div>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>

        {/* Items */}
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 text-mercury/90 text-sm group-hover:text-white transition-colors"
            >
              {item.includes('❌') ? (
                <XCircle className="w-4 h-4 text-negative mt-0.5 flex-shrink-0" />
              ) : item.includes('✅') ? (
                <CheckCircle className="w-4 h-4 text-positive mt-0.5 flex-shrink-0" />
              ) : item.includes('🔍') || item.includes('⚖️') || item.includes('🧭') ? (
                <Star className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
              ) : (
                <div className="w-2 h-2 bg-elf-green rounded-full mt-2 flex-shrink-0"></div>
              )}
              <span className="leading-relaxed">{item.replace(/[❌✅🔍⚖️🧭]/g, '').trim()}</span>
            </motion.li>
          ))}
        </ul>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-elf-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
    </motion.div>
  );
}
