"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

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

const CategorySection: React.FC<{ title: string; items: FAQItem[] }> = ({ title, items }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-[var(--color-elf-green)] mb-6 pb-3 border-b-2 border-[#e47a5a]">
        {title}
      </h3>
      <div className="space-y-0">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default function HomeFaqs() {
  const t = useTranslations("faq");

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
  const categorizedFAQs = {
    general: faqData.filter(item => item.category === "general"),
    account: faqData.filter(item => item.category === "account"),
    deposits: faqData.filter(item => item.category === "deposits"),
    trading: faqData.filter(item => item.category === "trading"),
    security: faqData.filter(item => item.category === "security"),
    compliance: faqData.filter(item => item.category === "compliance")
  };

  return (
    <section className="py-16 px-6 bg-[var(--color-blue-whale)]">
      <div className="xl:max-w-[70%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ramp-text">
            {t("title")}
          </h1>
          <p className="text-lg text-[var(--color-mercury)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          <CategorySection 
            title={t("general_title")} 
            items={categorizedFAQs.general} 
          />
          
          <CategorySection 
            title={t("account_verification_title")} 
            items={categorizedFAQs.account} 
          />
          
          <CategorySection 
            title={t("deposits_withdrawals_title")} 
            items={categorizedFAQs.deposits} 
          />
          
          <CategorySection 
            title={t("trading_title")} 
            items={categorizedFAQs.trading} 
          />
          
          <CategorySection 
            title={t("security_custody_title")} 
            items={categorizedFAQs.security} 
          />
          
          <CategorySection 
            title={t("compliance_disputes_title")} 
            items={categorizedFAQs.compliance} 
          />
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[var(--color-elf-green)]/10 to-[#e47a5a]/10 rounded-xl border border-[#e47a5a]/30">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[var(--color-elf-green)] mb-3">
              Still have questions?
            </h3>
            <p className="text-[var(--color-mercury)] mb-4">
              Our support team is here to help you with any additional questions.
            </p>
            <button  className="text-white ramp-shine-bg px-6 py-2 rounded-full font-semibold transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}