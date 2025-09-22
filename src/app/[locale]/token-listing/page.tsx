"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    FileText,
    Search,
    RefreshCw,
    Activity,
    AlertTriangle,
    Coins,
    CheckCircle2,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function TokenListingPage() {
    const t = useTranslations("tokenListing");
    const locale = useLocale();
    const isArabic = locale === "ar";
    return (
        <main className="bg-blue-whale text-mercury min-h-screen relative overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
            {/* Gradient header */}
            <div className="w-full h-2" style={{ background: "var(--color-ramp)" }} />
            <div className={`xl:max-w-[70%] mx-auto px-4 xl:px-0 ${isArabic ? "md:text-right" : ""}`}>
                {/* Content */}
                <div className="relative z-10">
                    {/* Hero */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full pt-14 pb-10"
                    >
                        <div className={`container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center justify-items-center ${isArabic ? "md:justify-items-end" : ""}`}>
                            <div className={`flex flex-col items-center ${isArabic ? "md:items-end" : "md:items-start"}`}>
                                <div className={`w-full flex justify-center ${isArabic ? "md:justify-start" : "md:justify-start"}`}>
                                    <div className="inline-flex items-center gap-2 bg-elf-green/15 text-elf-green py-1 rounded-full text-sm mb-4">
                                    <ShieldCheck className="w-4 h-4" />
                                        <span>{t("hero.badge")}</span>
                                    </div>
                                </div>
                                <h1 className={`text-center ${isArabic ? "md:text-right" : "md:text-left"} text-3xl md:text-5xl font-bold mb-4`}>{t("hero.title")}</h1>
                                <p className={`text-center ${isArabic ? "md:text-right" : "md:text-left"} text-mercury/90 leading-relaxed max-w-2xl`}>{t("hero.description")}</p>

                                <div className={`mt-6 flex flex-wrap gap-3 text-xs justify-center ${isArabic ? "md:justify-start" : "md:justify-start "}`}>
                                    <span className="bg-blue-whale/60 border border-mercury/20 px-3 py-1 rounded-full">{t("hero.tag1")}</span>
                                    <span className="bg-blue-whale/60 border border-mercury/20 px-3 py-1 rounded-full">{t("hero.tag2")}</span>
                                    <span className="bg-blue-whale/60 border border-mercury/20 px-3 py-1 rounded-full">{t("hero.tag3")}</span>
                                </div>
                            </div>
                            <div className="w-full max-w-xl mx-auto">
                                <div className="relative w-full h-[280px] md:h-[350px] overflow-hidden">
                                    <Image
                                        src="/images/token_listing_bg.png"
                                        alt="Token Listing & Asset Admission Policy"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-whale/40 via-transparent to-elf-green/10" />
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Sections */}
                    <section className={`container mx-auto px-4 pb-16 ${isArabic ? "md:text-right" : ""}`}>
                        <div className="grid gap-8">
                            {/* 1. Purpose */}
                            <motion.section whileHover={{ x: 5 }} className={`bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 group ${isArabic ? "text-right" : ""}`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <FileText className="w-5 h-5 text-elf-green" />
                                    <h2 className="text-2xl font-semibold group-hover:text-[#e47a5a]">{t("purpose.title")}</h2>
                                </div>
                                <p className="text-mercury/90 leading-relaxed">{t("purpose.desc")}</p>
                            </motion.section>

                            {/* 2. Admission Criteria */}
                            <motion.section whileHover={{ x: 5 }} className={`bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 group ${isArabic ? "text-right" : ""}`}>
                                <div className={`flex items-center gap-3 mb-4 ${isArabic ? "justify-start" : ""}`}>
                                    <Search className="w-5 h-5 text-elf-green" />
                                    <h2 className="text-2xl font-semibold group-hover:text-[#e47a5a]">{t("criteria.title")}</h2>
                                </div>
                                <p className="mb-4 text-mercury/90">{t("criteria.intro")}</p>
                                <ul className="space-y-3">
                                    <li className={`flex items-start gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green mt-1" /><span>{t("criteria.item1")}</span></li>
                                    <li className={`flex items-start gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green mt-1" /><span>{t("criteria.item2")}</span></li>
                                    <li className={`flex items-start gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green mt-1" /><span>{t("criteria.item3")}</span></li>
                                    <li className={`flex items-start gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green mt-1" /><span>{t("criteria.item4")}</span></li>
                                    <li className={`flex items-start gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green mt-1" /><span>{t("criteria.item5")}</span></li>
                                </ul>
                            </motion.section>

                            {/* 3. Information Disclosure */}
                            <motion.section whileHover={{ x: 5 }} className={`bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 group ${isArabic ? "text-right" : ""}`}>
                                <div className={`flex items-center gap-3 mb-4 ${isArabic ? "justify-start" : ""}`}>
                                    <FileText className="w-5 h-5 text-elf-green" />
                                    <h2 className="text-2xl font-semibold group-hover:text-[#e47a5a]">{t("disclosure.title")}</h2>
                                </div>
                                <p className="mb-4 text-mercury/90">{t("disclosure.intro")}</p>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className={`flex items-center gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green" /><span>{t("disclosure.item1")}</span></div>
                                    <div className={`flex items-center gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green" /><span>{t("disclosure.item2")}</span></div>
                                    <div className={`flex items-center gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green" /><span>{t("disclosure.item3")}</span></div>
                                    <div className={`flex items-center gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green" /><span>{t("disclosure.item4")}</span></div>
                                    <div className={`flex items-center gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green" /><span>{t("disclosure.item5")}</span></div>
                                    <div className={`flex items-center gap-2`}><CheckCircle2 className="w-4 h-4 text-elf-green" /><span>{t("disclosure.item6")}</span></div>
                                </div>
                            </motion.section>

                            {/* 4. Ongoing Monitoring */}
                            <motion.section whileHover={{ x: 5 }} className={`bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 group ${isArabic ? "text-right" : ""}`}>
                                <div className={`flex items-center gap-3 mb-4 ${isArabic ? "justify-start" : ""}`}>
                                    <Activity className="w-5 h-5 text-elf-green" />
                                    <h2 className="text-2xl font-semibold group-hover:text-[#e47a5a]">{t("monitoring.title")}</h2>
                                </div>
                                <p className="mb-4 text-mercury/90">{t("monitoring.intro1")}</p>
                                <p className="mb-3 text-mercury/90">{t("monitoring.intro2")}</p>
                                <ul className="space-y-3">
                                    <li className={`flex items-start gap-2`}><AlertTriangle className="w-4 h-4 text-elf-green mt-1" /><span>{t("monitoring.item1")}</span></li>
                                    <li className={`flex items-start gap-2`}><AlertTriangle className="w-4 h-4 text-elf-green mt-1" /><span>{t("monitoring.item2")}</span></li>
                                    <li className={`flex items-start gap-2`}><AlertTriangle className="w-4 h-4 text-elf-green mt-1" /><span>{t("monitoring.item3")}</span></li>
                                    <li className={`flex items-start gap-2`}><AlertTriangle className="w-4 h-4 text-elf-green mt-1" /><span>{t("monitoring.item4")}</span></li>
                                </ul>
                            </motion.section>

                            {/* 5. Liquidity Provision */}
                            <motion.section whileHover={{ x: 5 }} className={`bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 group ${isArabic ? "text-right" : ""}`}>
                                <div className={`flex items-center gap-3 mb-3 ${isArabic ? "justify-start" : ""}`}>
                                    <Coins className="w-5 h-5 text-elf-green" />
                                    <h2 className="text-2xl font-semibold group-hover:text-[#e47a5a]">{t("liquidity.title")}</h2>
                                </div>
                                <p className="text-mercury/90 leading-relaxed">{t("liquidity.desc")}</p>
                            </motion.section>

                            {/* 6. Client Protection */}
                            <motion.section whileHover={{ x: 5 }} className={`bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 group ${isArabic ? "text-right" : ""}`}>
                                <div className={`flex items-center gap-3 mb-3 ${isArabic ? "justify-start" : ""}`}>
                                    <ShieldCheck className="w-5 h-5 text-elf-green" />
                                    <h2 className="text-2xl font-semibold group-hover:text-[#e47a5a]">{t("protection.title")}</h2>
                                </div>
                                <p className="text-mercury/90 leading-relaxed">{t("protection.desc")}</p>
                            </motion.section>

                            {/* 7. Policy Review */}
                            <motion.section whileHover={{ x: 5 }} className={`bg-blue-whale/50 border border-mercury/20 rounded-lg p-6 group ${isArabic ? "text-right" : ""}`}>
                                <div className={`flex items-center gap-3 mb-3 ${isArabic ? "justify-start" : ""}`}>
                                    <RefreshCw className="w-5 h-5 text-elf-green" />
                                    <h2 className="text-2xl font-semibold group-hover:text-[#e47a5a]">{t("review.title")}</h2>
                                </div>
                                <p className="text-mercury/90 leading-relaxed">{t("review.desc")}</p>
                            </motion.section>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}