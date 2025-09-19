// app/fees/components/Notes.tsx
'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, FileText, Info, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Notes() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Important Information</h2>
          <p className="text-mercury/70">Regulatory compliance and transparency notes</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Regulatory Note */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-warning/20 to-warning/5 backdrop-blur-xl border border-warning/20 rounded-2xl p-6 hover:border-warning/40 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-warning/20 rounded-xl text-warning group-hover:bg-warning/30 transition-colors flex-shrink-0">
                <FileText className="w-6 h-6 text-mercury" />
              </div>
              <div>
                <h3 className="text-elf-green font-semibold text-lg mb-3">VARA Compliance</h3>
                <p className="text-mercury/90 text-sm leading-relaxed">
                  VARA requires easy-to-find, plain-language disclosure. This page is always accessible 
                  from the footer and onboarding flow to ensure full transparency and regulatory compliance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fee Adjustment Note */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-blue/20 to-blue/5 backdrop-blur-xl border border-blue/20 rounded-2xl p-6 hover:border-blue/40 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue/20 rounded-xl text-blue group-hover:bg-blue/30 transition-colors flex-shrink-0">
                <Info className="w-6 h-6 text-mercury" />
              </div>
              <div>
                <h3 className="text-[#e47a5a] font-semibold text-lg mb-3">Fee Structure</h3>
                <p className="text-mercury/90 text-sm leading-relaxed">
                  Fee rates may be adjusted based on final banking and liquidity partner agreements. 
                  All changes will be communicated in advance with full transparency to our users.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-elf-green/20 to-positive/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <Shield className="w-12 h-12 text-elf-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Questions About Fees?</h3>
            <p className="text-mercury/80 mb-6 max-w-2xl mx-auto">
              Our commitment to transparency means you'll never encounter hidden charges. 
              Contact our support team for detailed explanations of any fee structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-elf-green hover:bg-elf-green/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Contact Support
              </Link>
              <Link href="/faq" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                View FAQ
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
  