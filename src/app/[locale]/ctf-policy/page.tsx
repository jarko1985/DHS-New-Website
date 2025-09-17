// app/ctf-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Lock,
  Globe,
  Target,
  Database,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const CtfPolicyPage = () => {
  const t = useTranslations("ctfPolicy");
  const locale = useLocale();
  const isArabic = locale === "ar";


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

        {/* Policy Sections */}
        <div className="space-y-12">
          {/* 1. Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 p-8 hover:text-[#e47a5a] group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-elf-green">
              <Target className="w-5 h-5" />
              <span>{t("sections.purpose")}</span>
            </h2>
            <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-elf-green/10">
              <p className="text-mercury/90 leading-relaxed group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                {t("purpose.description")}
              </p>
            </div>
          </motion.div>

          {/* 2. Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 p-8 hover:text-[#e47a5a] group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-elf-green">
              <Globe className="w-5 h-5" />
              <span>{t("sections.scope")}</span>
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-elf-green/10">
                <p className="text-mercury/90 leading-relaxed mb-4 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("scope.description")}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-mercury/90 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">{t("scope.list1")}</li>
                  <li className="text-mercury/90 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">{t("scope.list2")}</li>
                  <li className="text-mercury/90 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">{t("scope.list3")}</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. Core AML / CTF Measures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 p-8 group border border-elf-green hover:border-[#e47a5a]" 
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-elf-green">
              <Shield className="w-5 h-5" />
              <span>{t("sections.coreMeasures")}</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("coreMeasures.cdd")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("coreMeasures.monitoring")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("coreMeasures.sanctions")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("coreMeasures.sar")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("coreMeasures.training")}
                </h4>
              </div>
            </div>
          </motion.div>

          {/* 4. Data Protection & Privacy Commitments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 p-8 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-elf-green">
              <Lock className="w-5 h-5" />
              <span>{t("sections.dataProtection")}</span>
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-elf-green/10">
                <p className="text-mercury/90 leading-relaxed mb-6 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("dataProtection.description")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                  <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("dataProtection.minimization")}
                  </h4>
                </div>
                <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                  <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("dataProtection.consent")}
                  </h4>
                </div>
                <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                  <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("dataProtection.encryption")}
                  </h4>
                </div>
                <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">  
                  <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("dataProtection.accessControl")}
                  </h4>
                </div>
                <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                  <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("dataProtection.updates")}
                  </h4>
                </div>
                <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                  <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("dataProtection.breachResponse")}
                  </h4>
                </div>
                <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                  <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("dataProtection.vendorCompliance")}
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Data Retention & Storage Limitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 p-8 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-elf-green"> 
              <Database className="w-5 h-5" />
              <span>{t("sections.dataRetention")}</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("dataRetention.duration")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("dataRetention.purposeLimitation")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("dataRetention.transparency")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("dataRetention.dataCategories")}
                </h4>
              </div>
            </div>
          </motion.div>

          {/* 6. Governance & Oversight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 p-8 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-elf-green">
              <Building className="w-5 h-5" />
              <span>{t("sections.governance")}</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("governance.complianceOfficer")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("governance.boardOversight")}
                </h4>
              </div>
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg p-4 shadow-lg shadow-elf-green/10">
                <h4 className="font-medium mb-2 text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("governance.policyReview")}
                </h4>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="outline"
            className="border-elf-green text-elf-green hover:bg-[#e47a5a] hover:text-mercury cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CtfPolicyPage;
