"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  Zap, 
  DollarSign, 
  Users 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: 1,
    title: "Advanced Security",
    description: "State-of-the-art security protocols protect your digital assets with multi-layer encryption, cold storage solutions, and real-time threat monitoring.",
    icon: Shield,
    gradient: "from-elf-green to-elf-green/80",
    bgGradient: "from-white/95 to-white/90",
    textColor: "text-blue-whale",
    iconBg: "bg-gradient-to-r from-elf-green to-elf-green/80",
    tags: ["Multi-Signature", "Cold Storage", "24/7 Monitoring"],
    tagStyle: "bg-elf-green/10 text-elf-green"
  },
  {
    id: 2,
    title: "Lightning Fast Trading",
    description: "Execute trades in milliseconds with our high-performance matching engine. Experience zero-latency trading with institutional-grade infrastructure.",
    icon: Zap,
    gradient: "from-[#b22f26] to-[#e47a5a]",
    bgGradient: "from-blue-whale/95 to-blue/90",
    textColor: "text-white",
    iconBg: "bg-gradient-to-r from-[#b22f26] to-[#e47a5a]",
    tags: ["Sub-millisecond Execution", "99.9% Uptime", "Global Infrastructure"],
    tagStyle: "bg-white/10 text-mercury"
  },
  {
    id: 3,
    title: "Competitive Fees",
    description: "Enjoy some of the lowest trading fees in the industry. Our transparent fee structure ensures you keep more of your profits with no hidden charges.",
    icon: DollarSign,
    gradient: "from-elf-green/95 to-elf-green/80",
    bgGradient: "from-elf-green/95 to-elf-green/80",
    textColor: "text-white",
    iconBg: "bg-white/20",
    tags: ["0.1% Trading Fee", "No Hidden Charges", "Volume Discounts"],
    tagStyle: "bg-white/10 text-white"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you. Get expert help whenever you need it through multiple channels.",
    icon: Users,
    gradient: "from-blue-whale to-blue",
    bgGradient: "from-white to-white/95",
    textColor: "text-blue-whale",
    iconBg: "bg-gradient-to-r from-blue-whale to-blue",
    tags: ["Live Chat", "Email Support", "Phone Support"],
    tagStyle: "bg-blue-whale/10 text-blue-whale"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

export default function WhyDhs() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-whale via-blue to-blue-whale py-16 md:py-24">
      <div className="relative z-10 xl:max-w-[70%] mx-auto px-4 xl:px-0">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Why Choose <span className="ramp-text">DHS</span>?
          </h2>
          <p className="text-lg md:text-xl text-mercury max-w-3xl mx-auto leading-relaxed">
            Discover the advantages that make DHS the preferred choice for digital asset trading and financial innovation
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className={`relative overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm transition-all duration-300 hover:shadow-3xl hover:border-white/30 h-full`}>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="relative p-6 md:p-8 h-full flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                      <motion.div 
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className={`w-14 h-14 md:w-16 md:h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 mx-auto sm:mx-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold ${feature.textColor} text-center sm:text-left group-hover:scale-105 transition-transform duration-300`}>
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-sm md:text-base lg:text-lg ${feature.textColor === 'text-white' ? 'text-white/90' : 'text-blue-whale/80'} leading-relaxed mb-6 text-center sm:text-left flex-grow`}>
                      {feature.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {feature.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1.5 ${feature.tagStyle} text-xs md:text-sm rounded-full font-medium transition-transform duration-200 cursor-default`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <Link
              href="/signup"
              className="text-white ramp-shine-bg px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 inline-block"
            >
              Ready to Get Started?
            </Link>
          </motion.div>
          <p className="text-white mt-4 text-sm md:text-base">
            Join thousands of traders who trust DHS for their digital asset needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}