// app/fees/components/FeesHero.tsx
'use client';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, DollarSign, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function FeesHero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #117f60 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #e47a5a 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-6 p-2 bg-elf-green/20 text-elf-green border-elf-green/30 hover:bg-elf-green/30 transition-colors">
              <Shield className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-extrabold mb-6"
            >
              <span className="ramp-text">Fees &</span>
              <br />
              <span className="text-white">Charges</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-mercury/80 mb-8 leading-relaxed"
            >
              DHS Exchange is committed to transparency and fairness. We ensure that all fees are{' '}
              <span className="text-elf-green font-semibold">Direct, Honest, and Safe</span> — with no hidden charges.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-elf-green/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#e47a5a]" />
                </div>
                <span>Low Trading Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-positive/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-[#e47a5a]" />
                </div>
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#e47a5a]" />
                </div>
                <span>Instant Processing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-blue/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#e47a5a]" />
                </div>
                <span>VARA Compliant</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-elf-green/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-positive/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Logo */}
              <div className="relative w-full h-28 mx-auto mb-6">
                <Image 
                  src="/images/trading_preview.png" 
                  alt="DHS Logo" 
                  fill 
                  className="object-contain opacity-80"
                />
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-mercury/70">Trading Fee</span>
                  <span className="text-[#e47a5a] font-bold text-xl">0.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-mercury/70">Deposit Fee</span>
                  <span className="text-elf-green font-bold text-xl">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-mercury/70">Hidden Charges</span>
                  <span className="text-mercury font-bold text-xl">NONE</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-6 space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Transparency</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div 
                      className="bg-elf-green h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 1 }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Competitive Rates</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div 
                      className="bg-[#e47a5a] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '95%' }}
                      transition={{ duration: 2, delay: 1.5 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
