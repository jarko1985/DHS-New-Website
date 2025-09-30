"use client";
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Database, 
  Eye, 
  FileText, 
  Download,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Users,
  Monitor,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

// Lazy load the heavy WebGL component
const FaultyTerminal = lazy(() => import("@/components/custom/FaultyTerminal"));
// Removed sectionFade variants for better performance

// Legacy bullet function - now using memoized version in component

const handleDownloadPrivacyPolicy = () => {
  const link = document.createElement('a');
  link.href = '/documents/DHS_Privacy_Policy.pdf';
  link.download = 'DHS_Privacy_Policy.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const SecurityProtection = React.memo(function SecurityProtection() {
  const t = useTranslations('securityProtection');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  
  // Memoize the bullet function to prevent re-renders
  const bulletMemo = React.useCallback((text: string) => (
    <li key={text} className={`group flex items-start gap-3 text-[15px] ${isArabic ? 'text-base leading-loose' : 'leading-relaxed'} text-white transition-transform duration-150 ${isArabic ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition-colors group-hover:bg-white/15">
        <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--color-elf-green)]" />
      </span>
      <span className="transition-colors group-hover:text-white">{text}</span>
    </li>
  ), []);
  
  return (
    <main className="min-h-screen bg-[color:var(--color-blue-whale)] text-[color:var(--color-mercury)]" dir={isArabic ? 'rtl' : 'ltr'}>
       

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
  <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-[color:var(--color-elf-green)]/5 to-transparent opacity-10" />}>
    <FaultyTerminal
      scale={1.5}
      gridMul={[2, 1]}
      digitSize={1.2}
      timeScale={1}
      pause={false}
      scanlineIntensity={1}
      glitchAmount={1}
      flickerAmount={1}
      noiseAmp={1}
      chromaticAberration={0}
      dither={0}
      curvature={0}
      tint="#117f60"
      mouseReact={true}
      mouseStrength={0.5}
      pageLoadAnimation={false}
      brightness={2}
      className="opacity-10"
    />
  </Suspense>
</div>

        <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-10">
          <motion.div 
            initial={{ opacity: 0, y: 8 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }} 
            className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className={`text-center ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
              <Badge className="mb-4 border-0 bg-white/10 text-[color:var(--color-mercury)] backdrop-blur transition-colors hover:bg-white/15">
                {t('hero.badge')}
              </Badge>
              <h1 className={`mb-4 text-4xl font-extrabold ${isArabic ? 'tracking-normal' : 'tracking-tight'} sm:text-5xl ${isArabic ? 'leading-relaxed' : ''}`}>
                <span className="ramp-text">{t('hero.title')}</span>
              </h1>
              <p className={`mx-auto max-w-2xl text-base ${isArabic ? 'leading-loose text-lg' : 'leading-relaxed'} text-[color:var(--color-mercury)]/85 md:mx-0`}>
                {t('hero.description')}
              </p>
              <div className={`mt-6 flex flex-wrap justify-center gap-3 ${isArabic ? 'md:justify-start' : 'md:justify-start'}`}>
                <Badge className="border-0 bg-[color:var(--color-elf-green)] text-white transition-colors hover:opacity-90">
                  {t('hero.badges.vara_compliant')}
                </Badge>
                <Badge variant="outline" className="border-[color:var(--color-elf-green)] text-[color:var(--color-elf-green)] transition-colors hover:bg-[color:var(--color-elf-green)]/10">
                  {t('hero.badges.uae_dpl')}
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white/80 transition-colors hover:bg-white/10">
                  {t('hero.badges.monitored')}
                </Badge>
              </div>
            </div>

            <div className="relative">
              <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur md:rounded-3xl transition-transform duration-150 hover:-translate-y-0.5">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center gap-2 transition-transform duration-150 hover:-translate-y-0.5">
                      <div className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                        <Shield className="h-8 w-8 text-[color:var(--color-elf-green)]" />
                      </div>
                      <span className={`text-sm text-white/80 ${isArabic ? 'text-base' : ''}`}>{t('hero.icons.protection')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 transition-transform duration-150 hover:-translate-y-0.5">
                      <div className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                        <Lock className="h-8 w-8 text-[color:var(--color-elf-green)]" />
                      </div>
                      <span className={`text-sm text-white/80 ${isArabic ? 'text-base' : ''}`}>{t('hero.icons.encryption')}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 transition-transform duration-150 hover:-translate-y-0.5">
                      <div className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                        <Monitor className="h-8 w-8 text-[#e47a5a]" />
                      </div>
                      <span className={`text-sm text-white/80 ${isArabic ? 'text-base' : ''}`}>{t('hero.icons.monitoring')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Protection Principles */}
      <motion.section 
        initial={{ opacity: 0, y: 16 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }} 
        viewport={{ once: true, amount: 0.1 }} 
        className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-10"
      >
        <div className={`mb-12 text-center`}>
          <h2 className={`mb-4 text-3xl font-bold text-white ${isArabic ? 'leading-relaxed tracking-normal' : ''}`}>{t('dataProtectionPrinciples.title')}</h2>
          <p className={`text-white/70 max-w-3xl mx-auto ${isArabic ? 'leading-loose text-lg' : ''}`}>
            {t('dataProtectionPrinciples.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Database className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('dataProtectionPrinciples.dataMinimization.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('dataProtectionPrinciples.dataMinimization.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Users className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('dataProtectionPrinciples.consent.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('dataProtectionPrinciples.consent.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <AlertTriangle className="h-6 w-6 text-[#e47a5a]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('dataProtectionPrinciples.purposeLimitation.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('dataProtectionPrinciples.purposeLimitation.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Eye className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('dataProtectionPrinciples.transparency.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('dataProtectionPrinciples.transparency.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Data Security Measures & Data Retention */}
      <motion.section 
        initial={{ opacity: 0, y: 16 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }} 
        viewport={{ once: true, amount: 0.1 }} 
        className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--color-elf-green)]/30 hover:shadow-lg hover:shadow-[color:var(--color-elf-green)]/10">
            <div className="absolute inset-0 bg-[color:var(--color-elf-green)]/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[color:var(--color-elf-green)]/20">
                <Lock className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-xl font-semibold text-white ${isArabic ? 'leading-relaxed tracking-normal' : ''}`}>{t('dataSecurityMeasures.title')}</CardTitle>
              <p className={`text-sm text-white/70 ${isArabic ? 'leading-loose text-base' : ''}`}>{t('dataSecurityMeasures.subtitle')}</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-sm">
                {bulletMemo(t('dataSecurityMeasures.points.encryption'))}
                {bulletMemo(t('dataSecurityMeasures.points.backups'))}
                {bulletMemo(t('dataSecurityMeasures.points.accessControl'))}
                {bulletMemo(t('dataSecurityMeasures.points.vendorCompliance'))}
              </ul>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--color-elf-green)]/30 hover:shadow-lg hover:shadow-[color:var(--color-elf-green)]/10">
            <div className="absolute inset-0 bg-[color:var(--color-elf-green)]/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[color:var(--color-elf-green)]/20">
                <Clock className="h-6 w-6 text-[#e47a5a]" />
              </div>
              <CardTitle className={`text-xl font-semibold text-white ${isArabic ? 'leading-relaxed tracking-normal' : ''}`}>{t('dataRetention.title')}</CardTitle>
              <p className={`text-sm text-white/70 ${isArabic ? 'leading-loose text-base' : ''}`}>{t('dataRetention.subtitle')}</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-sm">
                {bulletMemo(t('dataRetention.points.lawDuration'))}
                {bulletMemo(t('dataRetention.points.federalDecree'))}
                {bulletMemo(t('dataRetention.points.categories'))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Cybersecurity Framework Banner */}
      <section className="ramp-bg">
        <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-4 text-center">
          <h2 className={`text-lg font-semibold ${isArabic ? 'tracking-normal' : 'tracking-wide'} text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('cybersecurityFramework.title')}</h2>
        </div>
      </section>

      {/* Cybersecurity Framework Details */}
      <motion.section 
        initial={{ opacity: 0, y: 16 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }} 
        viewport={{ once: true, amount: 0.1 }} 
        className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-10"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Monitor className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('cybersecurityFramework.monitoring.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('cybersecurityFramework.monitoring.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <AlertTriangle className="h-6 w-6 text-[#e47a5a]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('cybersecurityFramework.incidentResponse.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('cybersecurityFramework.incidentResponse.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('cybersecurityFramework.resilienceTesting.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('cybersecurityFramework.resilienceTesting.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 backdrop-blur transition-transform duration-150 hover:-translate-y-0.5">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Database className="h-6 w-6 text-[#e47a5a]" />
              </div>
              <CardTitle className={`text-lg text-white ${isArabic ? 'leading-relaxed' : ''}`}>{t('cybersecurityFramework.assetSegregation.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                {t('cybersecurityFramework.assetSegregation.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Client Rights & Transparency */}
      <motion.section 
        initial={{ opacity: 0, y: 16 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }} 
        viewport={{ once: true, amount: 0.1 }} 
        className="xl:max-w-[70%] mx-auto px-4 xl:px-0 py-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--color-elf-green)]/30 hover:shadow-lg hover:shadow-[color:var(--color-elf-green)]/10">
            <div className="absolute inset-0 bg-[color:var(--color-elf-green)]/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[color:var(--color-elf-green)]/20">
                <Users className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-xl font-semibold text-white ${isArabic ? 'leading-relaxed tracking-normal' : ''}`}>{t('clientRights.title')}</CardTitle>
              <p className={`text-sm text-white/70 ${isArabic ? 'leading-loose text-base' : ''}`}>{t('clientRights.subtitle')}</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-sm">
                {bulletMemo(t('clientRights.points.requestInfo'))}
                {bulletMemo(t('clientRights.points.corrections'))}
                {bulletMemo(t('clientRights.points.noSharing'))}
              </ul>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--color-elf-green)]/30 hover:shadow-lg hover:shadow-[color:var(--color-elf-green)]/10">
            <div className="absolute inset-0 bg-[color:var(--color-elf-green)]/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <CardHeader className="relative">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[color:var(--color-elf-green)]/20">
                <Eye className="h-6 w-6 text-[color:var(--color-elf-green)]" />
              </div>
              <CardTitle className={`text-xl font-semibold text-white ${isArabic ? 'leading-relaxed tracking-normal' : ''}`}>{t('transparencyCommitment.title')}</CardTitle>
              <p className={`text-sm text-white/70 ${isArabic ? 'leading-loose text-base' : ''}`}>{t('transparencyCommitment.subtitle')}</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-2 text-sm">
                {bulletMemo(t('transparencyCommitment.points.regularUpdates'))}
                {bulletMemo(t('transparencyCommitment.points.advanceDisclosure'))}
              </ul>
              <div className={`mt-5 flex items-center gap-2 rounded-lg bg-white/5 p-3 text-sm text-white/70 transition-colors group-hover:bg-white/10 ${isArabic ? 'text-base leading-loose' : ''}`}>
                <FileText className="h-4 w-4 text-[color:var(--color-elf-green)]" />
                <span>{t('transparencyCommitment.notification')}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Privacy Policy Download Banner */}
      <section className="pb-20">
        <div className="xl:max-w-[70%] mx-auto px-4 xl:px-0">
          <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur">
            <div className="ramp-bg h-1 w-full" />
            <CardContent className={`flex flex-col items-center gap-4 p-6 text-center md:flex-row md:items-center md:justify-between ${isArabic ? 'md:text-right' : 'md:text-left'}`}>
              <div className="flex flex-col items-center gap-3 md:flex-row">
                <FileText className="h-5 w-5 text-white/80" />
                <p className={`text-sm text-white/80 ${isArabic ? 'leading-loose text-base' : ''}`}>
                  {t('privacyPolicyBanner.text')}
                </p>
              </div>
              <Button
                onClick={handleDownloadPrivacyPolicy}
                className="bg-[color:var(--color-elf-green)] hover:bg-[color:var(--color-elf-green)]/90 text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4 mr-2" />
                {t('privacyPolicyBanner.downloadButton')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer Line */}
      <footer className="ramp-bg h-0.5 w-full" />
    </main>
  );
});

export default SecurityProtection;