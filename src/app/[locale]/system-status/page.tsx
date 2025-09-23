'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
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

  // Add floating animation styles
  useEffect(() => {
    const floatingStyles = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-15px);
        }
      }
      
      .animate-float {
        animation: float 2s ease-in-out infinite;
      }
    `

    const styleElement = document.createElement('style')
    styleElement.textContent = floatingStyles
    styleElement.setAttribute('data-float-animation', 'true')
    
    if (!document.head.querySelector('style[data-float-animation]')) {
      document.head.appendChild(styleElement)
    }

    return () => {
      const existingStyle = document.head.querySelector('style[data-float-animation]')
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [])

  const sections = [
    {
      title: 'realTimeStatus',
      icon: Wifi,
      content: (
        <div>
          <p>
            DHS Exchange maintains an uptime target of <strong>99.9%</strong> for trading and wallet services. You can monitor availability of:
          </p>
          <ul className="list-disc ml-0 md:ml-6 list-none md:list-disc list-inside md:list-outside mt-3 space-y-1">
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
          <ul className="list-disc ml-0 md:ml-6 list-none md:list-disc list-inside md:list-outside mt-3 space-y-1">
            <li>{t('sections.incidentReporting.nature')}</li>
            <li>{t('sections.incidentReporting.services')}</li>
            <li>{t('sections.incidentReporting.resolution')}</li>
          </ul>
          <p className="mt-2">
            {t('sections.incidentReporting.postMortem')}
          </p>
        </div>
      ),
      image: '/images/incident_reporting.png',
    },
    {
      title: 'resilienceMeasures',
      icon: RefreshCw,
      content: (
        <div>
          <ul className="list-disc ml-0 md:ml-6 list-none md:list-disc list-inside md:list-outside space-y-2">
            <li>{t('sections.resilienceMeasures.infrastructure')}</li>
            <li>{t('sections.resilienceMeasures.disasterRecovery')}</li>
            <li>{t('sections.resilienceMeasures.monitoring')}</li>
          </ul>
        </div>
      ),
      image: '/images/resilience_measures.png'
    },
    {
      title: 'securityProtection',
      icon: ShieldCheck,
      content: (
        <div>
          <ul className="list-disc ml-0 md:ml-6 list-none md:list-disc list-inside md:list-outside space-y-2">
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
          <ul className="list-disc ml-0 md:ml-6 list-none md:list-disc list-inside md:list-outside space-y-2">
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
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            custom={index + 2}
          >
            <Card className="backdrop-blur-md bg-white/5 border border-white/10 text-white rounded-xl shadow-lg overflow-hidden">
              <CardHeader className="flex items-center justify-center md:justify-start gap-4 text-center md:text-left">
                <section.icon className="text-[#117f60]" size={32} />
                <CardTitle className="text-xl md:text-2xl">{t(`sections.${section.title}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="text-[#e2dedc] text-base leading-relaxed text-center md:text-left">
                    {section.content}
                  </div>
                  {section.image && (
                    <div className={`rounded-xl overflow-hidden relative w-full ${index === 0 || index === 5 ? 'h-[400px]' : 'h-64'}`}>
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className={`rounded-xl object-contain w-full h-64 ${index === 0 || index === 5 ? 'h-72' : 'h-64'} animate-float`}
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

