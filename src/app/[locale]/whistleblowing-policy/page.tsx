// app/whistleblowing-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  ShieldAlert,
  FileText,
  User,
  Mail,
  Lock,
  Gavel,
  Scale,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const WhistleblowingPolicyPage = () => {
  const t = useTranslations("whistleblowingPolicy");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className="min-h-screen bg-blue-whale text-mercury">
      {/* Gradient header */}
      <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />

      <div className="mx-auto px-4 xl:px-0 py-16 xl:max-w-[70%]">
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
                }  relative`}
              >
                <span
                  className={`absolute ${
                    isArabic ? "right-0" : "left-0"
                  }  top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm`}
                ></span>
                {t("title")}
              </h2>
              <p className="text-lg opacity-90 mt-1 pl-6">{t("subtitle")}</p>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {/* Section 1 - Introduction */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>{t("sections.introduction")}</span>
            </h2>
            <div className="space-y-6">
              {/* 1.1 Background */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  1.1 {t("introduction.backgroundTitle")}
                </h3>
                <p className="mb-4">{t("introduction.background1")}</p>
                <p className="mb-4">{t("introduction.background2")}</p>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                  <p className="font-medium">{t("introduction.background3")}</p>
                </div>
              </div>
              {/* 1.2 Objective */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  1.2 {t("introduction.objectiveTitle")}
                </h3>
                <p className="mb-4">{t("introduction.objectiveA")}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t("introduction.objectiveA_list1")}</li>
                    <li>{t("introduction.objectiveA_list2")}</li>
                    <li>{t("introduction.objectiveA_list3")}</li>
                    <li>{t("introduction.objectiveA_list4")}</li>
                    <li>{t("introduction.objectiveA_list5")}</li>
                    <li>{t("introduction.objectiveA_list6")}</li>
                    <li>{t("introduction.objectiveA_list7")}</li>
                    <li>{t("introduction.objectiveA_list8")}</li>
                    <li>{t("introduction.objectiveA_list9")}</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t("introduction.objectiveA_list10")}</li>
                    <li>{t("introduction.objectiveA_list11")}</li>
                    <li>{t("introduction.objectiveA_list12")}</li>
                    <li>{t("introduction.objectiveA_list13")}</li>
                    <li>{t("introduction.objectiveA_list14")}</li>
                    <li>{t("introduction.objectiveA_list15")}</li>
                    <li>{t("introduction.objectiveA_list16")}</li>
                    <li>{t("introduction.objectiveA_list17")}</li>
                    <li>{t("introduction.objectiveA_list18")}</li>
                  </ul>
                </div>
                <p className="mb-4">{t("introduction.objectiveB")}</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>{t("introduction.objectiveB_list1")}</li>
                  <li>{t("introduction.objectiveB_list2")}</li>
                  <li>{t("introduction.objectiveB_list3")}</li>
                </ul>
              </div>
              {/* 1.3 Functional Scope and Applicability */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  1.3 {t("introduction.scopeTitle")}
                </h3>
                <p className="mb-4">{t("introduction.scopeA")}</p>
                <p className="mb-4">{t("introduction.scopeB")}</p>
              </div>
              {/* 1.4 Policy Governance */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  1.4 {t("introduction.governanceTitle")}
                </h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>{t("introduction.governance1")}</li>
                  <li>{t("introduction.governance2")}</li>
                  <li>{t("introduction.governance3")}</li>
                  <li>{t("introduction.governance4")}</li>
                  <li>{t("introduction.governance5")}</li>
                  <li>{t("introduction.governance6")}</li>
                </ul>
              </div>
              {/* 1.5 Disclaimer */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  1.5 {t("introduction.disclaimerTitle")}
                </h3>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                  <p className="font-medium">
                    {t("introduction.disclaimerNote")}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2 - Key Principles */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>{t("sections.keyPrinciples")}</span>
            </h2>
            <p className="mb-6">{t("principles.intro")}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <User className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {t("principles.ethicalBehavior")}
                    </h4>
                    <p>{t("principles.ethicalDescription")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <ShieldAlert className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {t("principles.goodFaith")}
                    </h4>
                    <p>{t("principles.goodFaithDescription")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {t("principles.confidentiality")}
                    </h4>
                    <p>{t("principles.confidentialityDescription")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Gavel className="w-4 h-4 text-elf-green" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {t("principles.noRetaliation")}
                    </h4>
                    <p>{t("principles.noRetaliationDescription")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3 - Reporting an Incident */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("sections.reportingIncident")}</span>
            </h2>
            <div className="space-y-6">
              <p className="mb-4">{t("reporting.a")}</p>
              <p className="mb-4">{t("reporting.b")}</p>
              <p className="mb-4">{t("reporting.c")}</p>
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <h4 className="font-medium mb-3">
                  {t("reporting.requiredDetails")}
                </h4>
                <p className="text-mercury/90 leading-relaxed">
                  {t("reporting.requiredList")}
                </p>
              </div>
              <p className="mb-4">{t("reporting.e")}</p>
              <p className="mb-4">{t("reporting.f")}</p>
              <p className="mb-4">{t("reporting.g")}</p>
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <p className="font-medium">{t("reporting.h")}</p>
              </div>
            </div>
          </motion.section>

          {/* Section 4 - Investigation */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>{t("sections.investigation")}</span>
            </h2>

            <div className="space-y-6">
              <p className="mb-4">{t("investigation.a")}</p>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <h4 className="font-medium mb-3">
                  {t("investigation.workingGroupTitle")}
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("investigation.workingGroupList1")}</li>
                  <li>{t("investigation.workingGroupList2")}</li>
                  <li>{t("investigation.workingGroupList3")}</li>
                  <li>{t("investigation.workingGroupList4")}</li>
                  <li>{t("investigation.workingGroupList5")}</li>
                </ul>
              </div>

              <p className="mb-4">{t("investigation.c")}</p>

              <p className="mb-4">{t("investigation.d")}</p>

              <p className="mb-4">{t("investigation.e")}</p>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <p className="mb-4">{t("investigation.f")}</p>
              </div>

              <p className="mb-4">{t("investigation.g")}</p>

              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertTriangle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("investigation.timelineTitle")}
                  </h4>
                  <p>{t("investigation.timelineDescription")}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 5 - Management Information */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>{t("sections.managementInformation")}</span>
            </h2>

            <div className="space-y-6">
              <p className="mb-4">{t("management.a")}</p>
              <p className="mb-4">{t("management.b")}</p>
              <p className="mb-4">{t("management.c")}</p>
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
                <p className="font-medium">{t("management.d")}</p>
              </div>
              <p className="mb-4">{t("management.e")}</p>
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <BookOpen className="w-5 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("management.dataRetention")}
                  </h4>
                  <p>{t("management.dataRetentionDescription")}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6 - Safeguards */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              <span>{t("sections.safeguards")}</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  a) {t("safeguards.protectionTitle")}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("safeguards.protectionList1")}</li>
                  <li>{t("safeguards.protectionList2")}</li>
                  <li>{t("safeguards.protectionList3")}</li>
                  <li>{t("safeguards.protectionList4")}</li>
                  <li>{t("safeguards.protectionList5")}</li>
                </ul>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mt-4">
                  <p className="font-medium">
                    {t("safeguards.retaliationNotice")}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">
                  b) {t("safeguards.confidentialityTitle")}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("safeguards.confidentialityList1")}</li>
                  <li>{t("safeguards.confidentialityList2")}</li>
                </ul>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mt-4">
                  <p className="font-medium">
                    {t("safeguards.identityProtectionNote")}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">
                  c) {t("safeguards.falseAllegationsTitle")}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("safeguards.falseAllegationsList1")}</li>
                  <li>{t("safeguards.falseAllegationsList2")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">
                  d) {t("safeguards.anonymousTitle")}
                </h3>
                <p className="mb-4">{t("safeguards.anonymousDescription")}</p>
                <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                  <h4 className="font-medium mb-2">
                    {t("safeguards.anonymousTitle")}
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t("safeguards.anonymousFactors1")}</li>
                    <li>{t("safeguards.anonymousFactors2")}</li>
                    <li>{t("safeguards.anonymousFactors3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 7 - Training and Awareness */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{t("sections.trainingAwareness")}</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <User className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("training.trainingNote")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <Mail className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("training.awarenessNote")}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6">
              {t("sections.contact")}
            </h2>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-5 h-5 text-elf-green" />
                <span>{t("contactEmail")}</span>
              </div>
              <p className="text-sm opacity-80">{t("confidentialNote")}</p>
            </div>
          </motion.section>
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
            className="border-elf-green text-elf-green hover:bg-[#e47a5a] hover:text-mercury cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t("sections.backToTop")} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhistleblowingPolicyPage;
