// app/risk-disclosure/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  AlertTriangle,
  Shield,
  Lock,
  Globe,
  Cpu,
  Key,
  Scale,
  Handshake,
  FileText,
  Mail,
  Percent,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
const RiskDisclosurePage = () => {
  const t = useTranslations("riskDisclosure");
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
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          {/* Section I */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("section1_title")}</span>
            </h2>
            <p className="mb-6">{t("section1_intro")}</p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <p className="font-medium">{t("section1_note")}</p>
            </div>
            <p className="mb-6">{t("section1_understand")}</p>
            <p className="mb-6 font-medium">{t("section1_consider")}</p>
            <p className="mb-6">{t("section1_all_financial")}</p>
            <p className="mb-6">{t("section1_specific_risks")}</p>
            <p className="mb-6">{t("section1_value")}</p>
            <p className="mb-6">{t("section1_potential_risks_intro")}</p>
            <p className="text-mercury/90 leading-relaxed mb-6">
              {t("section1_potential_risks_list")}
            </p>
            <p className="mb-6">{t("section1_simultaneous")}</p>
            <p className="mb-6">{t("section1_arising")}</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertTriangle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("section1_market_conditions_title")}
                  </h4>
                  <p>{t("section1_market_conditions_desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <AlertTriangle className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t("section1_disinvestment_title")}
                  </h4>
                  <p>{t("section1_disinvestment_desc")}</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section II */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>{t("section2_title")}</span>
            </h2>
            <p className="mb-6">{t("section2_desc")}</p>
          </motion.section>

          {/* Section III */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("section3_title")}</span>
            </h2>
            <p className="mb-6">{t("section3_desc")}</p>
          </motion.section>

          {/* Section IV */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("section4_title")}</span>
            </h2>
            <p className="mb-6">{t("section4_desc")}</p>
          </motion.section>

          {/* Section V */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>{t("section5_title")}</span>
            </h2>
            <p className="mb-6">{t("section5_desc1")}</p>
            <p className="mb-6">{t("section5_desc2")}</p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 mb-6">
              <p className="font-medium">{t("section5_note")}</p>
            </div>
            <p className="mb-6">{t("section5_desc3")}</p>
          </motion.section>

          {/* Section VI */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>{t("section6_title")}</span>
            </h2>
            <p className="mb-6">{t("section6_desc")}</p>
          </motion.section>

          {/* Section VII - Digital Assets Risks (Complete) */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span>{t("section7_title")}</span>
            </h2>

            <div className="space-y-8">
              {/* Subsection a */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_a_title")}
                </h3>
                <p className="mb-4">{t("section7_a_desc")}</p>
              </div>

              {/* Subsection b */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_b_title")}
                </h3>
                <p className="mb-4">{t("section7_b_desc")}</p>
              </div>

              {/* Subsection c */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_c_title")}
                </h3>
                <p className="mb-4">{t("section7_c_desc")}</p>
              </div>

              {/* Subsection d */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_d_title")}
                </h3>
                <p className="mb-4">{t("section7_d_desc1")}</p>
                <p className="mb-4">{t("section7_d_desc2")}</p>
              </div>

              {/* Subsection e */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_e_title")}
                </h3>
                <p className="mb-4">{t("section7_e_desc1")}</p>
                <p className="mb-4">{t("section7_e_desc2")}</p>
                <p className="mb-4">{t("section7_e_desc3")}</p>
                <p className="mb-4">{t("section7_e_desc4")}</p>
                <p className="mb-4">{t("section7_e_desc5")}</p>
                <p className="mb-4">{t("section7_e_desc6")}</p>
              </div>

              {/* Subsection f */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_f_title")}
                </h3>
                <p className="mb-4">{t("section7_f_desc1")}</p>
                <p className="mb-4">{t("section7_f_desc2")}</p>
              </div>

              {/* Subsection g */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_g_title")}
                </h3>
                <p className="mb-4">{t("section7_g_desc1")}</p>
                <p className="mb-4">{t("section7_g_desc2")}</p>
              </div>

              {/* Subsection h */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_h_title")}
                </h3>
                <p className="mb-4">{t("section7_h_desc")}</p>
              </div>

              {/* Subsection i */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_i_title")}
                </h3>
                <p className="mb-4">{t("section7_i_desc")}</p>
              </div>

              {/* Subsection j */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_j_title")}
                </h3>
                <p className="mb-4">{t("section7_j_desc1")}</p>
                <p className="mb-4">{t("section7_j_desc2")}</p>
              </div>

              {/* Subsection k */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_k_title")}
                </h3>
                <p className="mb-4">{t("section7_k_desc")}</p>
              </div>

              {/* Subsection l */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_l_title")}
                </h3>
                <p className="mb-4">{t("section7_l_desc1")}</p>
                <p className="mb-4">{t("section7_l_desc2")}</p>
                <p className="mb-4">{t("section7_l_desc3")}</p>
                <p className="mb-4">{t("section7_l_desc4")}</p>
                <p className="mb-4">{t("section7_l_desc5")}</p>
              </div>

              {/* Subsection m */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_m_title")}
                </h3>
                <p className="mb-4">{t("section7_m_desc")}</p>
              </div>

              {/* Subsection n */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_n_title")}
                </h3>
                <p className="mb-4">{t("section7_n_desc1")}</p>
                <p className="mb-4">{t("section7_n_desc2")}</p>
              </div>

              {/* Subsection o */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {t("section7_o_title")}
                </h3>
                <p className="mb-4">{t("section7_o_desc1")}</p>
                <p className="mb-4">{t("section7_o_desc2")}</p>
                <p className="mb-4">{t("section7_o_desc3")}</p>
              </div>
              <p className="mb-4">{t("section7_o_desc4")}</p>
            </div>

            {/* Subsection p */}
            <div>
              <h3 className="text-xl font-medium mb-4">
                {t("section7_p_title")}
              </h3>
              <p className="mb-4">{t("section7_p_desc")}</p>
            </div>

            {/* Subsection q */}
            <div>
              <h3 className="text-xl font-medium mb-4">
                {t("section7_q_title")}
              </h3>
              <p className="mb-4">{t("section7_q_desc")}</p>
            </div>

            {/* Subsection r */}
            <div>
              <h3 className="text-xl font-medium mb-4">
                {t("section7_r_title")}
              </h3>
              <p className="mb-4">{t("section7_r_desc1")}</p>
              <p className="mb-4">{t("section7_r_desc2")}</p>
            </div>
          </motion.section>
          {/* Section VIII - Instructions and Settlement */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>{t("section8_title")}</span>
            </h2>
            <p className="mb-6">{t("section8_desc")}</p>
          </motion.section>

          {/* Section IX - Liability, indemnity, and force majeure */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>{t("section9_title")}</span>
            </h2>
            <p className="mb-6">{t("section9_desc")}</p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">{t("section9_note")}</p>
            </div>
          </motion.section>

          {/* Section X - No investment advice */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("section10_title")}</span>
            </h2>
            <p className="mb-6">{t("section10_desc")}</p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">{t("section10_note")}</p>
            </div>
          </motion.section>

          {/* Section XI - You are not acting as intermediary */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{t("section11_title")}</span>
            </h2>
            <p className="mb-6">{t("section11_desc")}</p>
          </motion.section>

          {/* Section XII - Charges, fees and taxes */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Percent className="w-5 h-5" />
              <span>{t("section12_title")}</span>
            </h2>
            <p className="mb-6">{t("section12_desc")}</p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">{t("section12_note")}</p>
            </div>
          </motion.section>

          {/* Section XIII - Conflicts of interest */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("section13_title")}</span>
            </h2>
            <p className="mb-6">{t("section13_desc1")}</p>
            <p className="mb-6">{t("section13_desc2")}</p>
          </motion.section>

          {/* Section XIV - Acknowledgement */}
          {/* Section XIV - Acknowledgement (Complete with all points a-o) */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Handshake className="w-5 h-5" />
              <span>{t("section14_title")}</span>
            </h2>
            <p className="mb-6">{t("section14_intro")}</p>

            <div className="space-y-4">
              {/* Point a */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_a")}</p>
                </div>
              </div>

              {/* Point b */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_b")}</p>
                </div>
              </div>

              {/* Point c */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_c")}</p>
                </div>
              </div>

              {/* Point d */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_d")}</p>
                </div>
              </div>

              {/* Point e */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_e")}</p>
                </div>
              </div>

              {/* Point f */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_f")}</p>
                </div>
              </div>

              {/* Point g */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_g")}</p>
                </div>
              </div>

              {/* Point h */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_h")}</p>
                </div>
              </div>

              {/* Point i */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_i")}</p>
                </div>
              </div>

              {/* Point j */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_j")}</p>
                </div>
              </div>

              {/* Point k */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_k")}</p>
                </div>
              </div>

              {/* Point l */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_l")}</p>
                </div>
              </div>

              {/* Point m */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_m")}</p>
                </div>
              </div>

              {/* Point n */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_n")}</p>
                </div>
              </div>

              {/* Point o */}
              <div className="flex items-start gap-4">
                <div className="bg-elf-green/20 p-2 rounded-full mt-1">
                  <FileText className="w-4 h-4 text-elf-green" />
                </div>
                <div>
                  <p>{t("section14_o")}</p>
                </div>
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
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default RiskDisclosurePage;
