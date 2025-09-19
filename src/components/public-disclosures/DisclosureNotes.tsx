"use client";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { AlertCircle, Clock, Shield, Info } from "lucide-react";
import { useTranslations } from "next-intl";

const DisclosureNotes = () => {
  const t = useTranslations("PublicDisclosures.notes");
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="relative py-12 px-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-blue-whale)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-8 right-8 w-20 h-20 rounded-full blur-xl animate-pulse"
        style={{ backgroundColor: "rgba(17, 127, 96, 0.1)" }}
      ></div>
      <div
        className="absolute bottom-8 left-8 w-16 h-16 rounded-full blur-lg animate-pulse delay-1000"
        style={{ backgroundColor: "rgba(17, 127, 96, 0.05)" }}
      ></div>

      <motion.div
        className="xl:max-w-[70%] mx-auto px-4 xl:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-4"
            style={{
              backgroundColor: "rgba(17, 127, 96, 0.1)",
              borderColor: "rgba(17, 127, 96, 0.2)",
            }}
          >
            <Info
              className="w-4 h-4"
              style={{ color: "var(--color-elf-green)" }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-elf-green)" }}
            >
              {t("badge")}
            </span>
          </div>
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--color-mercury)" }}
          >
            {t("title")}
          </h3>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "rgba(226, 222, 220, 0.7)" }}
          >
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Main Notice Card */}
          <motion.div variants={itemVariants} className="flex">
            <Card
              className="shadow-lg hover:shadow-xl transition-all duration-300 group flex-1 flex flex-col"
              style={{
                background: `linear-gradient(135deg, var(--color-negative), var(--color-positive))`,
                borderColor: "rgba(17, 127, 96, 0.2)",
              }}
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="flex-shrink-0 p-2 rounded-lg transition-colors duration-300"
                    style={{
                      backgroundColor: "rgba(17, 127, 96, 0.1)",
                    }}
                  >
                    <AlertCircle
                      className="w-6 h-6"
                      style={{ color: "var(--color-elf-green)" }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-lg text-[#e47a5a] font-semibold mb-3">
                      {t("regulatoryUpdates.title")}
                    </h4>
                    <p
                      className="leading-relaxed flex-1"
                      style={{ color: "rgba(226, 222, 220, 0.8)" }}
                    >
                      {t("regulatoryUpdates.description")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Last Updated Card */}
          <motion.div variants={itemVariants} className="flex">
            <Card
              className="shadow-lg hover:shadow-xl transition-all duration-300 group flex-1 flex flex-col"
              style={{
                background: `linear-gradient(135deg, var(--color-negative), var(--color-positive))`,
                borderColor: "rgba(17, 127, 96, 0.2)",
              }}
            >
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="flex-shrink-0 p-2 rounded-lg transition-colors duration-300"
                    style={{
                      backgroundColor: "rgba(17, 127, 96, 0.1)",
                    }}
                  >
                    <Clock
                      className="w-6 h-6"
                      style={{ color: "var(--color-elf-green)" }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-[#e47a5a]">
                        {t("lastUpdated.title")}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <Badge
                        className="px-3 py-1"
                        style={{
                          backgroundColor: "var(--color-elf-green)",
                          color: "var(--color-blue-whale)",
                        }}
                      >
                        {t("lastUpdated.date")}
                      </Badge>
                      <span
                        className="text-sm"
                        style={{ color: "rgba(226, 222, 220, 0.6)" }}
                      >
                        {t("lastUpdated.version")}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <Card
            className="shadow-lg"
            style={{
              background: `linear-gradient(135deg, var(--color-negative), var(--color-positive))`,
              borderColor: "rgba(17, 127, 96, 0.3)",
            }}
          >
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: "rgba(17, 127, 96, 0.2)" }}
                  >
                    <Shield
                      className="w-5 h-5"
                      style={{ color: "var(--color-elf-green)" }}
                    />
                  </div>
                  <div className="text-left">
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-mercury)" }}
                    >
                      {t("cta.question")}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(226, 222, 220, 0.7)" }}
                    >
                      {t("cta.subtitle")}
                    </p>
                  </div>
                </div>
                <motion.button
                  className="px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "var(--color-elf-green)",
                    color: "var(--color-blue-whale)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("cta.button")}
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Custom Styles for Enhanced Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .disclosure-notes-card:hover {
          transform: translateY(-2px);
        }

        .disclosure-notes-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DisclosureNotes;
