// app/privacy-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Lock,
  Gavel,
  Mail,
  Phone,
  Globe,
  AlertCircle,
  RefreshCw,
  FileText,
  ShieldOff,
  Activity,
  UserCheck,
  ShieldCheck,
  Cookie,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const PrivacyPolicyPage = () => {
  const t = useTranslations("privacyPolicy");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className="min-h-screen bg-blue-whale text-mercury">
      {/* Gradient header */}
      <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />

      <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-16 max-w-4xl">
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
              <p className="text-lg opacity-90 mt-1">{t("subtitle")}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-elf-green/20 px-3 py-1 rounded-full">
              {t("version")}
            </span>
            <span>{t("last_updated")}</span>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {/* Introduction */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-4">{t("intro_title")}</h2>
            <p className="mb-4">
              {t.rich("intro_p1", { em: (chunks) => <em>{chunks}</em> })}
            </p>
            <p className="mb-4">
              {t.rich("intro_p2", { em: (chunks) => <em>{chunks}</em> })}
            </p>
            <p className="mb-4">{t("intro_p3")}</p>
            <p className="font-medium">{t("intro_p4")}</p>
          </motion.section>

          {/* Section 1 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>{t("section1_title")}</span>
            </h2>
            <p className="mb-6">{t("section1_desc")}</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section1_personal_id_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section1_personal_id_list")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section1_financial_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section1_financial_list")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section1_identity_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section1_identity_list")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section1_device_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section1_device_list")}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>{t("section2_title")}</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section2_services_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section2_services_list")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section2_legal_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section2_legal_list")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section2_security_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section2_security_list")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section2_communication_title")}
                </h3>
                <p className="text-mercury/90 leading-relaxed">
                  {t("section2_communication_list")}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6">
              {t("section3_title")}
            </h2>
            <p className="mb-6">{t("section3_desc")}</p>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-elf-green/20 p-2 rounded-full">
                  <Lock className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("section3_identity_title")}
                  </h4>
                  <p>
                    {t.rich("section3_identity_desc", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="bg-elf-green/20 p-2 rounded-full">
                  <Lock className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("section3_transaction_title")}
                  </h4>
                  <p>
                    {t.rich("section3_transaction_desc", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full">
                  <Lock className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("section3_account_title")}
                  </h4>
                  <p>{t("section3_account_desc")}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6">
              {t("section4_title")}
            </h2>
            <p className="mb-6">{t("section4_desc")}</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section4_service_title")}
                </h3>
                <p>{t("section4_service_desc")}</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section4_regulatory_title")}
                </h3>
                <p>{t("section4_regulatory_desc")}</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section4_business_title")}
                </h3>
                <p>{t("section4_business_desc")}</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">
                  {t("section4_legal_title")}
                </h3>
                <p>{t("section4_legal_desc")}</p>
              </div>
            </div>
          </motion.section>

          {/* Section 5 - Data Security */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>{t("section5_title")}</span>
            </h2>

            <p className="mb-6">{t("section5_desc")}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">
                    {t("section5_encryption_title")}
                  </h4>
                </div>
                <p>{t("section5_encryption_desc")}</p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">{t("section5_access_title")}</h4>
                </div>
                <p>{t("section5_access_desc")}</p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Lock className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">{t("section5_audit_title")}</h4>
                </div>
                <p>{t("section5_audit_desc")}</p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <AlertCircle className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">{t("section5_notice_title")}</h4>
                </div>
                <p>{t("section5_notice_desc")}</p>
              </div>
            </div>
          </motion.section>

          {/* Section 6 - Your Rights */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>{t("section6_title")}</span>
            </h2>

            <p className="mb-6">{t("section6_desc")}</p>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <p className="text-mercury/90 leading-relaxed">
                {t("section6_rights")}
              </p>
            </div>

            <p className="font-medium">{t("section6_rights_cta")}</p>
          </motion.section>

          {/* Section 7 - Cookies */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Cookie className="w-5 h-5" />
              <span>{t("section7_title")}</span>
            </h2>

            <p className="mb-6">{t("section7_desc")}</p>

            <p className="text-mercury/90 leading-relaxed mb-6">
              {t("section7_list")}
            </p>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertCircle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("section7_cookie_title")}
                  </h4>
                  <p>{t("section7_cookie_desc")}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 8 - Compliance */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>{t("section8_title")}</span>
            </h2>

            <p className="mb-6">{t("section8_desc")}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <UserCheck className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">{t("section8_kyc_title")}</h4>
                </div>
                <p>{t("section8_kyc_desc")}</p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <Activity className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">
                    {t("section8_monitoring_title")}
                  </h4>
                </div>
                <p>{t("section8_monitoring_desc")}</p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <ShieldOff className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">{t("section8_aml_title")}</h4>
                </div>
                <p>{t("section8_aml_desc")}</p>
              </div>

              <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-elf-green/20 p-2 rounded-full">
                    <FileText className="w-4 h-4 text-elf-green" />
                  </div>
                  <h4 className="font-medium">{t("section8_vara_title")}</h4>
                </div>
                <p>{t("section8_vara_desc")}</p>
              </div>
            </div>
          </motion.section>

          {/* Section 9 - Policy Changes */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              <span>{t("section9_title")}</span>
            </h2>

            <p className="mb-6">{t("section9_desc")}</p>

            <p className="text-mercury/90 leading-relaxed mb-6">
              {t("section9_list")}
            </p>

            <div className="bg-blue-whale/50 border border-[--color-mercury]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertCircle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("section9_updates_title")}
                  </h4>
                  <p>{t("section9_updates_desc")}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4"
            }  border-elf-green pl-6 mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6">
              {t("section10_title")}
            </h2>
            <p className="mb-6">{t("section10_desc")}</p>

            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-5 h-5 text-elf-green" />
                <span>{t("section10_email")}</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-5 h-5 text-elf-green" />
                <span>{t("section10_website")}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-elf-green" />
                <span>{t("section10_phone")}</span>
              </div>
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
            {t("back_to_top")} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
