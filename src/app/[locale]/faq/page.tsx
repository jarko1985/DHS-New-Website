"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  HelpCircle,
  User,
  CreditCard,
  TrendingUp,
  Shield,
  Scale,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState } from "react";

const FAQPage = () => {
  const t = useTranslations("faq");
  const locale = useLocale();
  const isArabic = locale === "ar";

  // State for accordion open/close
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqSections = [
    {
      title: t("general_title"),
      icon: HelpCircle,
      questions: [
        { q: "q1", a: "a1" },
        { q: "q2", a: "a2" },
        { q: "q3", a: "a3" }
      ]
    },
    {
      title: t("account_verification_title"),
      icon: User,
      questions: [
        { q: "q4", a: "a4" },
        { q: "q5", a: "a5" },
        { q: "q6", a: "a6" },
        { q: "q7", a: "a7" }
      ]
    },
    {
      title: t("deposits_withdrawals_title"),
      icon: CreditCard,
      questions: [
        { q: "q8", a: "a8" },
        { q: "q9", a: "a9" },
        { q: "q10", a: "a10" }
      ]
    },
    {
      title: t("trading_title"),
      icon: TrendingUp,
      questions: [
        { q: "q11", a: "a11" },
        { q: "q12", a: "a12" },
        { q: "q13", a: "a13" },
        { q: "q14", a: "a14" }
      ]
    },
    {
      title: t("security_custody_title"),
      icon: Shield,
      questions: [
        { q: "q15", a: "a15" },
        { q: "q16", a: "a16" },
        { q: "q17", a: "a17" }
      ]
    },
    {
      title: t("compliance_disputes_title"),
      icon: Scale,
      questions: [
        { q: "q18", a: "a18" },
        { q: "q19", a: "a19" },
        { q: "q20", a: "a20" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-blue-whale text-mercury">
      {/* Gradient header */}
      <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />

      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-16">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h2
                className={`md:text-3xl text-xl font-bold text-white mb-8 ${
                  isArabic ? "pr-6" : "pl-6"
                } relative`}
              >
                <span
                  className={`absolute ${
                    isArabic ? "right-0" : "left-0"
                  } top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm`}
                ></span>
                {t("title")}
              </h2>
              <p className="text-lg opacity-90 mt-1">{t("subtitle")}</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {faqSections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <motion.section
                key={sectionIndex}
                whileHover={{ x: 5 }}
                className={`${
                  isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
                } border-elf-green hover:border-[#e47a5a]`}
              >
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <IconComponent className="w-5 h-5" />
                  <span>{section.title}</span>
                </h2>
                
                <div className="space-y-4">
                  {section.questions.map((item, questionIndex) => {
                    const globalIndex = sectionIndex * 10 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <motion.div
                        key={questionIndex}
                        className="bg-blue-whale/30 border border-mercury/20 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: questionIndex * 0.1 }}
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-elf-green/10 transition-colors"
                        >
                          <span className="font-medium text-mercury pr-4">
                            {t(item.q)}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-elf-green flex-shrink-0" />
                          </motion.div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <div className="text-mercury/90 leading-relaxed">
                              {t(item.a)}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </motion.div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="outline"
            className="border-elf-green text-elf-green hover:bg-elf-green/10 hover:text-mercury cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
