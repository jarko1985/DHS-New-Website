"use client";

import Aurora from "../custom/Aurora";
import { motion } from "framer-motion";

export default function Hero() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div className="h-[100vh] w-full bg-blue-whale relative">
      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[color:var(--color-mercury)] mb-4"
          >
            About DHS Exchange
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[color:var(--color-elf-green)] mb-6"
          >
            Direct • Honest • Safe
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[color:var(--color-mercury)] leading-relaxed max-w-3xl mx-auto opacity-90 mb-8"
          >
            We are a leading cryptocurrency exchange committed to providing secure, 
            transparent, and innovative digital asset trading solutions. Our mission is to 
            empower individuals and institutions with direct access to the future of finance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button 
              onClick={() => scrollToSection('team-section')}
              className="text-white ramp-shine-bg px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 transform"
            >
              Meet Our Team
            </button>
            <button 
              onClick={() => scrollToSection('mission-vision-section')}
              className="text-white ramp-shine-bg px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 transform"
            >
              Our Core Values
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col items-center absolute bottom-28 left-0 right-0"
          >
            <p className="text-[color:var(--color-mercury)] text-sm mb-4 opacity-70">
              Scroll for more
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => scrollToSection('team-section')}
              className="w-6 h-10 border-2 border-[color:var(--color-elf-green)] rounded-full flex justify-center relative cursor-pointer hover:border-[color:var(--color-mercury)] transition-colors duration-300"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-3 bg-[color:var(--color-elf-green)] rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Aurora Background */}
      <Aurora
        colorStops={["#117f60", "#e47a5a", "#e2dedc"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  );
}
