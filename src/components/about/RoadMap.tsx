// src/components/RoadMap.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Shield, Rocket, Target } from "lucide-react";

type TimelineEvent = {
  id: string;
  start: string;
  end: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const DUMMY_DATA: TimelineEvent[] = [
  {
    id: "t1",
    start: "Q1 2024",
    end: "Q2 2024",
    description:
      "Foundation phase focused on establishing DHS Exchange core infrastructure, regulatory compliance framework, and building strategic partnerships with key industry players.",
    skills: ["Regulatory Compliance", "KYC/AML Systems", "Core Infrastructure", "Strategic Partnerships"],
    icon: Lightbulb,
  },
  {
    id: "t2",
    start: "Q3 2024",
    end: "Q4 2024",
    description:
      "Platform development and security implementation phase. Building robust trading engine, implementing advanced security protocols, and conducting comprehensive security audits.",
    skills: ["Trading Engine", "Security Protocols", "Multi-Sig Wallets", "Penetration Testing"],
    icon: Shield,
  },
  {
    id: "t3",
    start: "Q1 2025",
    end: "Q2 2025",
    description:
      "Beta launch and liquidity building phase. Launching beta platform for select users, establishing market maker partnerships, and building initial liquidity pools.",
    skills: ["Beta Testing", "Market Making", "Liquidity Pools", "User Onboarding"],
    icon: TrendingUp,
  },
  {
    id: "t4",
    start: "Q3 2025",
    end: "Q4 2025",
    description:
      "Public launch and expansion phase. Full platform launch with advanced trading features, mobile applications, and expansion to multiple cryptocurrency pairs.",
    skills: ["Public Launch", "Mobile Apps", "Advanced Trading", "Multi-Asset Support"],
    icon: Rocket,
  },
  {
    id: "t5",
    start: "2026",
    end: "Beyond",
    description:
      "Global expansion and innovation phase. International market expansion, DeFi integration, institutional services, and next-generation blockchain technologies.",
    skills: ["Global Expansion", "DeFi Integration", "Institutional Services", "Blockchain Innovation"],
    icon: Target,
  },
];

function SkillItem({ skill }: { skill: string }) {
  return (
    <span className="inline-block text-white m-1 px-3 py-1.5 rounded-full bg-[var(--color-elf-green)] transition-all duration-300 hover:bg-[var(--color-positive)] hover:text-white hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 text-sm font-medium">
      {skill}
    </span>
  );
}

function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="mt-4">
      <span className="text-[var(--color-positive)] font-medium mb-2 block">Key Deliverables:</span>
      <div className="flex flex-wrap gap-1">
        {skills.map((s, i) => (
          <SkillItem key={i} skill={s} />
        ))}
      </div>
    </div>
  );
}

function TimelineCard({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`
        relative bg-inherit w-1/2 px-10 py-2.5
        max-sm:w-full max-sm:pl-[70px] max-sm:pr-6 max-sm:mt-[4vh]
        ${isLeft ? 'left-[-5px]' : 'left-1/2 max-sm:left-0'}
        
        /* Timeline circle */
        after:content-[''] after:absolute after:w-6 after:h-6 after:bg-[var(--color-mercury)] 
        after:border-4 after:border-[var(--color-elf-green)] after:top-4 after:rounded-full after:z-10
        ${isLeft 
          ? 'after:-right-4 max-sm:after:left-4' 
          : 'after:-left-4 max-sm:after:left-4'
        }
        
        /* Arrow pointing to timeline */
        before:content-[''] before:absolute before:top-6 before:z-10
        before:border-[10px] before:border-solid
        ${isLeft 
          ? 'before:right-8 before:border-l-white before:border-r-0 before:border-t-transparent before:border-b-transparent max-sm:before:left-[60px] max-sm:before:border-r-white max-sm:before:border-l-0' 
          : 'before:left-8 before:border-r-white before:border-l-0 before:border-t-transparent before:border-b-transparent max-sm:before:left-[60px] max-sm:before:border-r-white max-sm:before:border-l-0'
        }
      `}
    >
      <div className="p-8 bg-white relative rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-200 hover:border-[var(--color-elf-green)]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
          <event.icon size={24} className="text-[var(--color-elf-green)]" />
          {event.start} - {event.end}
        </h2>
        <p className="mb-4 text-gray-600 leading-relaxed">{event.description}</p>
        <Skills skills={event.skills} />
      </div>
    </motion.div>
  );
}

export default function RoadMap() {
  return (
    <div className="bg-[#0d1635] min-h-screen font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--color-mercury)] mb-16 text-center">
            DHS
            <span className="ramp-text pl-2">Roadmap</span>
          </h2>

      {/* Timeline Section */}
      <section className="w-[80vw] mx-auto">
        <div className="
          relative max-w-[1200px] mx-auto
          
          /* Vertical timeline line */
          after:content-[''] after:absolute after:w-1.5 after:bg-gradient-to-b after:from-[var(--color-elf-green)] after:to-[var(--color-positive)]
          after:top-0 after:bottom-0 after:left-1/2 after:-ml-1 after:rounded-full after:shadow-lg
          max-sm:after:left-8
        ">
          {DUMMY_DATA.map((event, i) => (
            <TimelineCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </section>
  
    </div>
  );
}
