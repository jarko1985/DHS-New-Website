'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  AlertCircle,
  ShieldCheck,
  RefreshCw,
  Wifi,
  Bell,
  Server,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7 },
  }),
}

export default function SystemStatusPage() {
  const t = useTranslations('systemStatus')

  const sections = [
    {
      title: 'realTimeStatus',
      icon: Wifi,
      content: (
        <div>
          <p>
            DHS Exchange maintains an uptime target of <strong>99.9%</strong> for trading and wallet services. You can monitor availability of:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>{t('sections.realTimeStatus.tradingEngine')}</li>
            <li>{t('sections.realTimeStatus.walletServices')}</li>
            <li>{t('sections.realTimeStatus.authentication')}</li>
            <li>{t('sections.realTimeStatus.apiServices')}</li>
          </ul>
        </div>
      ),
      image: '/images/real_time.png',
    },
    {
      title: 'incidentReporting',
      icon: AlertCircle,
      content: (
        <div>
          <p>{t('sections.incidentReporting.content')}</p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>{t('sections.incidentReporting.nature')}</li>
            <li>{t('sections.incidentReporting.services')}</li>
            <li>{t('sections.incidentReporting.resolution')}</li>
          </ul>
          <p className="mt-2">
            {t('sections.incidentReporting.postMortem')}
          </p>
        </div>
      ),
      image: '/images/reporting.png',
    },
    {
      title: 'resilienceMeasures',
      icon: RefreshCw,
      content: (
        <div>
          <ul className="list-disc ml-6 space-y-2">
            <li>{t('sections.resilienceMeasures.infrastructure')}</li>
            <li>{t('sections.resilienceMeasures.disasterRecovery')}</li>
            <li>{t('sections.resilienceMeasures.monitoring')}</li>
          </ul>
        </div>
      ),
      image: '/images/resilience.png'
    },
    {
      title: 'securityProtection',
      icon: ShieldCheck,
      content: (
        <div>
          <ul className="list-disc ml-6 space-y-2">
            <li>{t('sections.securityProtection.ddos')}</li>
            <li>{t('sections.securityProtection.loadBalancing')}</li>
            <li>{t('sections.securityProtection.penetrationTesting')}</li>
          </ul>
        </div>
      ),
      image: '/images/security.png'
    },
    {
      title: 'clientCommunication',
      icon: Bell,
      content: (
        <div>
          <ul className="list-disc ml-6 space-y-2">
            <li>{t('sections.clientCommunication.notifications')}</li>
            <li>{t('sections.clientCommunication.support')}</li>
          </ul>
        </div>
      ),
      image: '/images/communication.png',
    },
    {
      title: 'commitment',
      icon: Server,
      content: (
        <div>
          <p>
            {t('sections.commitment.content')}
          </p>
          <p className="mt-2 font-semibold">
            {t('sections.commitment.promise')}
          </p>
        </div>
      ),
      image: '/images/commitment.png'
    },
  ]

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0d1635] via-[#0f1415] to-[#117f60] text-[#e2dedc] overflow-hidden">
      {/* Blurred Gradient Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#e47a5a] opacity-20 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#117f60] opacity-20 rounded-full filter blur-2xl z-0" />

      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 z-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={0}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#b22f26] via-[#e47a5a] to-[#b22f26] bg-clip-text text-transparent"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={1}
          className="mt-6 text-lg max-w-3xl mx-auto text-[#d5d2d0]"
        >
          {t('hero.description')}
        </motion.p>
      </section>

      <Separator className="my-8 bg-[#6f7273]" />

      {/* Content Blocks */}
      <div className="grid gap-10 px-6 md:px-20 pb-32 z-10 relative">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            custom={i + 2}
          >
            <Card className="backdrop-blur-md bg-white/5 border border-white/10 text-white rounded-xl shadow-lg overflow-hidden">
              <CardHeader className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <section.icon className="text-[#117f60]" size={32} />
                  <CardTitle className="text-xl md:text-2xl">{t(`sections.${section.title}.title`)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="text-[#e2dedc] text-base leading-relaxed">
                    {section.content}
                  </div>
                  {section.image && (
                    <div className="rounded-xl overflow-hidden relative w-full h-72">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="rounded-xl object-contain shadow-md w-full h-64"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

