"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

type FaqCategory = "general" | "account" | "deposits" | "trading" | "security" | "compliance";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

interface Tab {
  id: FaqCategory;
  label: string;
  translationKey: string;
}

const TABS: Tab[] = [
  { id: "general", label: "General", translationKey: "general_title" },
  { id: "account", label: "Account & Verification", translationKey: "account_verification_title" },
  { id: "deposits", label: "Deposits & Withdrawals", translationKey: "deposits_withdrawals_title" },
  { id: "trading", label: "Trading", translationKey: "trading_title" },
  { id: "security", label: "Security & Custody", translationKey: "security_custody_title" },
  { id: "compliance", label: "Compliance & Disputes", translationKey: "compliance_disputes_title" },
] as const;

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[var(--color-mercury)]/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 px-0 text-left hover:bg-[var(--color-elf-green)]/10 transition-colors duration-200 focus:outline-none focus:bg-[var(--color-elf-green)]/10"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-[var(--color-mercury)] pr-4 leading-relaxed">
          {item.question}
        </span>
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#e47a5a] transition-transform duration-200" />
          ) : (
            <Plus className="w-5 h-5 text-[#e47a5a] transition-transform duration-200" />
          )}
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 px-0">
          <p className="text-[#e47a5a] leading-relaxed text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};


export default function HomeFaqs() {
  const t = useTranslations("faq");
  const [activeTab, setActiveTab] = useState<FaqCategory>("general");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // FAQ data organized by categories
  const faqData: FAQItem[] = [
    // General Questions
    {
      id: "q1",
      question: t("q1"),
      answer: t("a1"),
      category: "general"
    },
    {
      id: "q2",
      question: t("q2"),
      answer: t("a2"),
      category: "general"
    },
    {
      id: "q3",
      question: t("q3"),
      answer: t("a3"),
      category: "general"
    },
    // Account & Verification
    {
      id: "q4",
      question: t("q4"),
      answer: t("a4"),
      category: "account"
    },
    {
      id: "q5",
      question: t("q5"),
      answer: t("a5"),
      category: "account"
    },
    {
      id: "q6",
      question: t("q6"),
      answer: t("a6"),
      category: "account"
    },
    {
      id: "q7",
      question: t("q7"),
      answer: t("a7"),
      category: "account"
    },
    // Deposits & Withdrawals
    {
      id: "q8",
      question: t("q8"),
      answer: t("a8"),
      category: "deposits"
    },
    {
      id: "q9",
      question: t("q9"),
      answer: t("a9"),
      category: "deposits"
    },
    {
      id: "q10",
      question: t("q10"),
      answer: t("a10"),
      category: "deposits"
    },
    // Trading
    {
      id: "q11",
      question: t("q11"),
      answer: t("a11"),
      category: "trading"
    },
    {
      id: "q12",
      question: t("q12"),
      answer: t("a12"),
      category: "trading"
    },
    {
      id: "q13",
      question: t("q13"),
      answer: t("a13"),
      category: "trading"
    },
    {
      id: "q14",
      question: t("q14"),
      answer: t("a14"),
      category: "trading"
    },
    // Security & Custody
    {
      id: "q15",
      question: t("q15"),
      answer: t("a15"),
      category: "security"
    },
    {
      id: "q16",
      question: t("q16"),
      answer: t("a16"),
      category: "security"
    },
    {
      id: "q17",
      question: t("q17"),
      answer: t("a17"),
      category: "security"
    },
    // Compliance & Disputes
    {
      id: "q18",
      question: t("q18"),
      answer: t("a18"),
      category: "compliance"
    },
    {
      id: "q19",
      question: t("q19"),
      answer: t("a19"),
      category: "compliance"
    },
    {
      id: "q20",
      question: t("q20"),
      answer: t("a20"),
      category: "compliance"
    }
  ];

  // Group FAQs by category
  const categorizedFAQs: Record<FaqCategory, FAQItem[]> = {
    general: faqData.filter(item => item.category === "general"),
    account: faqData.filter(item => item.category === "account"),
    deposits: faqData.filter(item => item.category === "deposits"),
    trading: faqData.filter(item => item.category === "trading"),
    security: faqData.filter(item => item.category === "security"),
    compliance: faqData.filter(item => item.category === "compliance")
  };

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  // Update indicator position when active tab changes
  useEffect(() => {
    const activeIndex = TABS.findIndex(tab => tab.id === activeTab);
    const activeButton = tabsRef.current[activeIndex];
    if (activeButton) {
      const parent = activeButton.parentElement;
      if (parent) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        });
      }
    }
  }, [activeTab]);

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : TABS.length - 1;
        break;
      case "ArrowRight":
        e.preventDefault();
        newIndex = currentIndex < TABS.length - 1 ? currentIndex + 1 : 0;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = TABS.length - 1;
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        setActiveTab(TABS[currentIndex].id);
        return;
      default:
        return;
    }

    tabsRef.current[newIndex]?.focus();
    setActiveTab(TABS[newIndex].id);
  };

  return (
    <section className="py-12 px-6 bg-[var(--color-blue-whale)]">
      <div className="xl:max-w-[70%] mx-auto min-w-0">
        {/* Header */}
        <div className="relative h-[200px] mb-12">
          <Image src={"/images/info.png"} alt="FAQ Header" fill className="object-contain" />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ramp-text">
            {t("title")}
          </h1>
          <p className="text-lg text-[var(--color-mercury)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div 
            role="tablist" 
            aria-label="FAQ Categories"
            className="relative"
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {TABS.map((tab, index) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => { tabsRef.current[index] = el; }}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    data-testid={`faq-tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`
                      relative text-white
                      rounded-xl
                      bg-[var(--color-blue)]/40 backdrop-blur
                      px-4 py-2.5 sm:px-5 sm:py-3
                      text-sm sm:text-base
                      transition-all duration-200 ease-out
                      focus:outline-none focus:ring-[var(--color-orange)]/50 focus:ring-offset-2 focus:ring-offset-[var(--color-blue-whale)]
                      ${isActive 
                        ? 'font-semibold text-[var(--color-elf-green)] shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)] scale-105' 
                        : 'text-[var(--color-mercury)]/70 hover:bg-[var(--color-negative)]/15 hover:text-[var(--color-mercury)] hover:shadow-md'
                      }
                    `}
                  >
                    <span className="relative z-10">{t(tab.translationKey)}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full ramp-bg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Panels */}
        {TABS.map((tab) => {
          const items = categorizedFAQs[tab.id];
          const isActive = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              data-testid={`faq-panel-${tab.id}`}
              className={isActive ? 'block' : 'hidden'}
            >
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-0"
                >
                  {items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isOpen={openItems.has(item.id)}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[var(--color-elf-green)]/10 to-[#e47a5a]/10 rounded-xl border border-[#e47a5a]/30">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[var(--color-elf-green)] mb-3">
              Still have questions?
            </h3>
            <p className="text-[var(--color-mercury)] mb-4">
              Our support team is here to help you with any additional questions.
            </p>
            <button className="text-white ramp-shine-bg px-6 py-2 rounded-full font-semibold transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}