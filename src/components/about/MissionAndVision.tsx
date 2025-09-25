"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function MissionAndVision() {
  return (
    <section
      id="mission-vision-section"
      className=""
      style={{ backgroundColor: "var(--color-blue-whale)" }}
    >
      <div className="xl:max-w-[70%] mx-auto min-h-screen grid md:grid-cols-2 grid-cols-1">
        {/* VISION */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center p-10 h-[50vh] md:h-[50vh] relative hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
          style={{ backgroundColor: "var(--color-elf-green)" }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-[color:var(--color-mercury)] font-bold text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm">
              Our Vision
            </h2>
            <p className="mt-4 text-[color:var(--color-mercury)] max-w-md leading-relaxed text-sm md:text-base opacity-95">
              To be a globally trusted partner in delivering innovative,
              strategic, and high-impact solutions that drive sustainable growth
              and transformation for businesses and communities.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center p-10 h-[50vh] md:h-[50vh] relative"
          style={{ backgroundColor: "var(--color-mercury)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-black/3 to-black/5"></div>
          <Image
            src="/images/vision2.png"
            alt="Vision"
            width={250}
            height={250}
            className="w-[250px] h-[250px] object-contain relative z-10 drop-shadow-lg"
          />
        </motion.div>

        {/* MISSION */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center p-10 h-[50vh] md:h-[50vh] relative"
          style={{ backgroundColor: "var(--color-mercury)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/3 to-black/5"></div>
          <Image
            src="/images/mission.png"
            alt="Mission"
            width={250}
            height={250}
            className="w-[300px] h-[300px] object-contain scale-x-[-1] relative z-10 drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center items-center text-center p-10 h-[50vh] md:h-[50vh] relative overflow-hidden"
          style={{ 
            background: "linear-gradient(90deg, #b22f26, #e47a5a, #b22f26)"
          }}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-elf-green) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-[color:var(--color-blue-whale)] font-bold text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm">
              Our Mission
            </h2>
            <p className="mt-4 text-[color:var(--color-blue-whale)] max-w-md leading-relaxed text-sm md:text-base opacity-95">
              To empower organizations through tailored branding, digital
              strategies, and design solutions — combining creativity, data-driven
              insight, and collaborative partnerships to deliver measurable
              results.
            </p>
          </div>
        </motion.div>

        {/* VALUES */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center p-10 h-[50vh] md:h-[50vh] relative overflow-hidden border border-slate-500"
          style={{ backgroundColor: "var(--color-blue-whale)" }}
        >
          {/* Accent border */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: "var(--color-elf-green)" }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-white/5"></div>
          <div className="relative z-10">
            <h2 className="text-[color:var(--color-mercury)] font-bold text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm">
              Our Core Values
            </h2>
            <p className="mt-4 text-[color:var(--color-mercury)] max-w-md leading-relaxed text-sm md:text-base opacity-95">
              We are guided by integrity, driven by innovation, committed to
              excellence, fueled by collaboration, accountable in our actions, and
              always focused on putting our clients first.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center p-10 h-[50vh] md:h-[50vh] relative"
          style={{ backgroundColor: "var(--color-warning)" }}
        >
          <div className="absolute inset-0 bg-mercury"></div>
          <Image
            src="/images/values.png"
            alt="Values"
            width={250}
            height={250}
            className="w-[350px] h-[350px] object-contain relative z-10 drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
