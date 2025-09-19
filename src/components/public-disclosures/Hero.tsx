"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const Hero = () => {
  const t = useTranslations("PublicDisclosures.hero")
  
  return (
    <section className="text-center py-16 bg-blue-whale text-mercury">
      <motion.h1
        className="text-4xl font-bold ramp-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h1>
      <motion.p
        className="mt-4 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {t("description")}
      </motion.p>
    </section>
  )
}
export default Hero;