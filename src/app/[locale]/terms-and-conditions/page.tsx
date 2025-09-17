// app/terms-and-conditions/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Scale,
  Shield,
  Lock,
  User,
  AlertTriangle,
  Gavel,
  Percent,
  X,
  BookOpen,
  Handshake,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const TermsAndConditionsPage = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("termsAndConditions");
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
          {/* Section 1 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>{t("section1_title")}</span>
            </h2>
            <p className="mb-6">{t("section1_desc")}</p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{t("section2_title")}</span>
            </h2>
            <p className="mb-6">{t("section2_desc")}</p>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>{t("section3_title")}</span>
            </h2>
            <p className="mb-6">{t("section3_desc")}</p>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>{t("section4_title")}</span>
            </h2>
            <p className="mb-6">{t("section4_desc")}</p>
          </motion.section>

          {/* Section 5 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("section5_title")}</span>
            </h2>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">{t("section5_desc")}</p>
            </div>
          </motion.section>

          {/* Section 6 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              <span>{t("section6_title")}</span>
            </h2>
            <p className="mb-6">{t("section6_desc")}</p>
          </motion.section>

          {/* Section 7 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>{t("section7_title")}</span>
            </h2>
            <p className="mb-6">{t("section7_desc")}</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t("section7_list1")}</li>
              <li>{t("section7_list2")}</li>
              <li>{t("section7_list3")}</li>
              <li>{t("section7_list4")}</li>
            </ul>
          </motion.section>

          {/* Section 8 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{t("section8_title")}</span>
            </h2>
            <p className="mb-6">{t("section8_desc")}</p>
          </motion.section>

          {/* Section 9 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Percent className="w-5 h-5" />
              <span>{t("section9_title")}</span>
            </h2>
            <p className="mb-6">{t("section9_desc")}</p>
          </motion.section>

          {/* Section 10 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              <span>{t("section10_title")}</span>
            </h2>
            <p className="mb-6">{t("section10_desc")}</p>
          </motion.section>

          {/* Section 11 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{t("section11_title")}</span>
            </h2>
            <p className="mb-6">{t("section11_desc")}</p>
          </motion.section>

          {/* Section 12 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>{t("section12_title")}</span>
            </h2>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">{t("section12_desc")}</p>
            </div>
          </motion.section>

          {/* Section 13 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>{t("section13_title")}</span>
            </h2>
            <p className="mb-6">{t("section13_desc")}</p>
          </motion.section>

          {/* Section 14 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5" />
              <span>{t("section14_title")}</span>
            </h2>
            <p className="mb-6">{t("section14_desc")}</p>
          </motion.section>

          {/* Section 15 */}
          <motion.section
            whileHover={{ x: 5 }}
            className={`${
              isArabic ? "border-r-4 pr-6" : "border-l-4 pl-6"
            }  border-elf-green  mb-12 hover:border-[#e47a5a]`}
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{t("section15_title")}</span>
            </h2>
            <p className="mb-6">{t("section15_desc")}</p>
            <div className="bg-blue-whale/50 border border-mercury/20 rounded-lg p-6">
              <p className="font-medium">{t("section15_note")}</p>
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
            className="border-elf-green text-elf-green hover:bg-[#e47a5a] hover:text-white cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
