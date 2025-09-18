// app/complaint-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  MessageSquare,
  Clock,
  FileText,
  Users,
  AlertCircle,
  CheckCircle,
  Mail,
  Phone,
  Globe,
  Shield,
  Target,
  BookOpen,
  UserCheck,
  Calendar,
  Archive,
  GraduationCap,
  Clipboard,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const ComplaintPolicyPage = () => {
  const t = useTranslations("complaintPolicy");
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
                className={`md:text-3xl text-xl font-bold text-white mb-8 text-center md:text-left ${
                  isArabic ? "pr-6" : "pl-6"
                } relative`}
              >
                <span
                  className={`absolute ${
                    isArabic ? "right-0" : "left-0"
                  } top-1/2 -translate-y-1/2 w-1 h-8 bg-elf-green rounded-sm md:block hidden`}
                ></span>
                {t("title")}
              </h2>
              <p className="text-lg opacity-90 mt-1 text-center md:text-left">{t("subtitle")}</p>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="md:space-y-12 space-y-6">
          {/* 1. Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-4 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <MessageSquare className="w-5 h-5" />
              <span>{t("sections.introduction")}</span>
            </h2>
            <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg md:p-6 p-2 shadow-lg shadow-elf-green/10">
              <p className="text-white leading-relaxed group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                {t("introduction.description")}
              </p>
            </div>
          </motion.div>

          {/* 2. Objective and Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-4 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <Target className="w-5 h-5" />
              <span>{t("sections.objectiveScope")}</span>
            </h2>
            <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg md:p-6 p-2 shadow-lg shadow-elf-green/10">
              <p className="text-white leading-relaxed group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                {t("objectiveScope.description")}
              </p>
            </div>
          </motion.div>

          {/* 3. Defined Terms & Policy Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-4 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <BookOpen className="w-5 h-5" />
              <span>{t("sections.definedTerms")}</span>
            </h2>
            <div className="space-y-6 md:space-y-6 space-y-2">
              <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 md:gap-6 gap-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {t("definedTerms.businessUnit")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("definedTerms.businessUnitDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 md:gap-6 gap-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                    <UserCheck className="w-4 h-4" />
                    {t("definedTerms.businessSeniorManagement")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("definedTerms.businessSeniorManagementDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 md:gap-6 gap-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {t("definedTerms.feedback")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("definedTerms.feedbackDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 md:gap-6 gap-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {t("definedTerms.managementInfo")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("definedTerms.managementInfoDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 md:gap-6 gap-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {t("definedTerms.complaintDefinition")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-sm md:mb-4 mb-2 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("definedTerms.complaintDefinitionDesc")}
                  </p>
                  <div className="space-y-2 md:space-y-2 space-y-1">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                      <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                        {t("definedTerms.complaintDefinitionList1")}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                      <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                        {t("definedTerms.complaintDefinitionList2")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 md:gap-6 gap-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {t("definedTerms.resolution")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                    {t("definedTerms.resolutionDesc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* 4. Complaints Register */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-4 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <FileText className="w-5 h-5" />
              <span>{t("sections.complaintsRegister")}</span>
            </h2>
            <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg md:p-6 p-4 shadow-lg shadow-elf-green/10">
              <p className="text-white leading-relaxed group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                {t("complaintsRegister.description")}
              </p>
            </div>
          </motion.div>

          {/* 5. Handling a Complaint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-2 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <Clock className="w-5 h-5" />
              <span>{t("sections.handlingComplaint")}</span>
            </h2>
            <div className="md:space-y-6 space-y-2">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 gap-1 md:gap-6">
                  <CardHeader className="pb-3 p-2 md:p-3">
                    <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {t("handlingComplaint.websiteAccess")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("handlingComplaint.websiteAccessDesc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10 md:p-6 gap-1 md:gap-6">
                  <CardHeader className="pb-3 p-2 md:p-3">
                    <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {t("handlingComplaint.emailAccess")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("handlingComplaint.emailAccessDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="md:space-y-4 space-y-2">
                <h3 className="text-xl font-semibold text-elf-green mb-4">{t("handlingComplaint.processSteps")}</h3>
                <div className="md:space-y-3 space-y-1">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-elf-green text-white flex-shrink-0 mt-1">1</Badge>
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("handlingComplaint.step1")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-elf-green text-white flex-shrink-0 mt-1">2</Badge>
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("handlingComplaint.step2")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-elf-green text-white flex-shrink-0 mt-1">3</Badge>
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("handlingComplaint.step3")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-elf-green text-white flex-shrink-0 mt-1">4</Badge>
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("handlingComplaint.step4")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. Response and Closure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-4 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-elf-green">
              <CheckCircle className="w-5 h-5" />
              <span>{t("sections.responseClosure")}</span>
            </h2>
            <div className="md:space-y-6 space-y-2">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {t("responseClosure.timeline")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-elf-green text-white text-xs text-nowrap">5 days</Badge>
                        <span className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                          {t("responseClosure.acknowledgment")}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Badge className="bg-elf-green text-white text-xs text-nowrap">20 days</Badge>
                        <span className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                          {t("responseClosure.response")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-whale/40 backdrop-blur-sm border-elf-green/20 shadow-lg shadow-elf-green/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-elf-green text-lg flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {t("responseClosure.resolution")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("responseClosure.resolutionDesc")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg md:p-6 p-2 shadow-lg shadow-elf-green/10">
                <h3 className="text-lg font-semibold text-elf-green mb-4">{t("responseClosure.closureCriteria")}</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("responseClosure.criteria1")}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("responseClosure.criteria2")}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                    <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      {t("responseClosure.criteria3")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. Reporting and Records Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-2 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <Archive className="w-5 h-5" />
              <span>{t("sections.reportingRetention")}</span>
            </h2>
            <div className=" md:space-y-6 space-y-2">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg md:p-6 p-2 shadow-lg shadow-elf-green/10">
                <h3 className="text-lg font-semibold text-elf-green mb-4">{t("reportingRetention.regulatoryReporting")}</h3>
                <p className="text-white text-sm md:mb-4 mb-2 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("reportingRetention.regulatoryReportingDesc")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-elf-green font-medium">{t("reportingRetention.reportingItems")}</h4>
                    <ul className="space-y-1 text-sm text-white group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-elf-green mt-1 flex-shrink-0" />
                        {t("reportingRetention.item1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-elf-green mt-1 flex-shrink-0" />
                        {t("reportingRetention.item2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-elf-green mt-1 flex-shrink-0" />
                        {t("reportingRetention.item3")}
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-elf-green mt-1 flex-shrink-0" />
                        {t("reportingRetention.item4")}
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-elf-green font-medium">{t("reportingRetention.retentionPeriod")}</h4>
                    <div className="bg-elf-green/10 rounded-lg md:p-4 p-2">
                      <p className="text-elf-green font-semibold text-lg">8 Years</p>
                      <p className="text-white text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                        {t("reportingRetention.retentionDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 8. Education and Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-2 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <GraduationCap className="w-5 h-5" />
              <span>{t("sections.educationTraining")}</span>
            </h2>
            <div className="md:space-y-6 space-y-2">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg md:p-6 p-2 shadow-lg shadow-elf-green/10">
                    <p className="text-white leading-relaxed md:mb-6 mb-2 group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                  {t("educationTraining.description")}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-elf-green">{t("educationTraining.trainingSchedule")}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-elf-green" />
                        <div>
                          <p className="text-mercury/90 text-sm font-medium group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                            {t("educationTraining.initialTraining")}
                          </p>
                          <p className="text-mercury/70 text-xs group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                            {t("educationTraining.initialTrainingDesc")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <RefreshCw className="w-4 h-4 text-elf-green" />
                        <div>
                          <p className="text-mercury/90 text-sm font-medium group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                            {t("educationTraining.annualTraining")}
                          </p>
                          <p className="text-mercury/70 text-xs group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                            {t("educationTraining.annualTrainingDesc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-elf-green">{t("educationTraining.tracking")}</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                        <p className="text-mercury/90 text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                          {t("educationTraining.tracking1")}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                        <p className="text-mercury/90 text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                          {t("educationTraining.tracking2")}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-elf-green mt-1 flex-shrink-0" />
                        <p className="text-mercury/90 text-sm group-hover:text-[#e47a5a] group-hover:translate-x-2 transition-all duration-300">
                          {t("educationTraining.tracking3")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Appendix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-blue-whale/30 backdrop-blur-sm rounded-xl shadow-2xl shadow-elf-green/20 md:p-8 p-2 group border border-elf-green hover:border-[#e47a5a]"
          >
            <h2 className="text-2xl font-semibold md:mb-6 mb-2 flex items-center gap-2 text-elf-green">
              <Clipboard className="w-5 h-5" />
              <span>{t("sections.appendix")}</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-whale/40 backdrop-blur-sm rounded-lg md:p-6 p-2 shadow-lg shadow-elf-green/10">
                <p className="text-white leading-relaxed mb-6">
                  {t("appendix.description")}
                </p>
                
                {/* Complaint Form Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-mercury/30 bg-blue-whale/20 rounded-lg overflow-hidden">
                    <tbody>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium" colSpan={2}>
                          {t("appendix.complainantName")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium" colSpan={2}>
                          {t("appendix.dateTimeReceived")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium">
                          {t("appendix.writtenDetails")}
                        </td>
                        <td className="border border-mercury/30 p-4 text-center text-elf-green font-semibold">
                          {t("appendix.yesNo")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/70 text-sm italic" colSpan={2}>
                          {t("appendix.writtenDetailsNote")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium" colSpan={2}>
                          {t("appendix.complaintDetails")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium">
                          {t("appendix.materialNature")}
                        </td>
                        <td className="border border-mercury/30 p-4 text-center text-elf-green font-semibold">
                          {t("appendix.yesNo")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium">
                          {t("appendix.customerType")}
                        </td>
                        <td className="border border-mercury/30 p-4 text-center text-elf-green font-semibold">
                          {t("appendix.yesNo")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium" colSpan={2}>
                          {t("appendix.timescaleAgreed")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium">
                          {t("appendix.notifiedOfficer")}
                        </td>
                        <td className="border border-mercury/30 p-4 text-center text-elf-green font-semibold">
                          {t("appendix.yesNo")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium">
                          {t("appendix.complaintResolved")}
                        </td>
                        <td className="border border-mercury/30 p-4 text-center text-elf-green font-semibold">
                          {t("appendix.yesNo")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium">
                          {t("appendix.proceduralChanges")}
                        </td>
                        <td className="border border-mercury/30 p-4 text-center text-elf-green font-semibold">
                          {t("appendix.yesNo")}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-mercury/30 p-4 text-mercury/90 font-medium">
                          {t("appendix.changesImplemented")}
                        </td>
                        <td className="border border-mercury/30 p-4 text-center text-elf-green font-semibold">
                          {t("appendix.yesNo")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Signature Section */}
                <div className="mt-8 space-y-4">
                  <p className="text-white font-medium">
                    {t("appendix.confirmation")}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-white mb-2">{t("appendix.signed")}</p>
                      <div className="border-b border-mercury/30 h-8"></div>
                    </div>
                    <div>
                      <p className="text-white mb-2">{t("appendix.date")}</p>
                      <div className="border-b border-mercury/30 h-8"></div>
                    </div>
                  </div>
                  <p className="text-white text-sm italic">
                    {t("appendix.complaintsOfficer")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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

export default ComplaintPolicyPage;
