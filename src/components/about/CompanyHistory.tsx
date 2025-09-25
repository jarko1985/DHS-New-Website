'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Calendar, Building2 } from 'lucide-react';

type TimelineEvent = {
  date: string; // Format like "Jan 2015" or "15 May 2018"
  title: string;
  description: string;
  image?: string; // URL or path to image
};

const getHistoryData = (t: any): TimelineEvent[] => [
  {
    date: t('history.timeline.event1.date'),
    title: t('history.timeline.event1.title'),
    description: t('history.timeline.event1.description'),
    image: '/history/lift_off.png',
  },
  {
    date: t('history.timeline.event2.date'),
    title: t('history.timeline.event2.title'),
    description: t('history.timeline.event2.description'),
    image: '/history/securing_orbit.png',
  },
  {
    date: t('history.timeline.event3.date'),
    title: t('history.timeline.event3.title'),
    description: t('history.timeline.event3.description'),
    image: '/history/expanding_horizons.png',
  },
  {
    date: t('history.timeline.event4.date'),
    title: t('history.timeline.event4.title'),
    description: t('history.timeline.event4.description'),
    image: '/history/space_mission.png',
  },
  {
    date: t('history.timeline.event5.date'),
    title: t('history.timeline.event5.title'),
    description: t('history.timeline.event5.description'),
    image: '/history/crew_expansion.png',
  },
  {
    date: t('history.timeline.event6.date'),
    title: t('history.timeline.event6.title'),
    description: t('history.timeline.event6.description'),
    image: '/history/new_fuel.png',
  },
  {
    date: t('history.timeline.event7.date'),
    title: t('history.timeline.event7.title'),
    description: t('history.timeline.event7.description'),
    image: '/history/expedition.png',
  },
];

export default function CompanyHistory() {
  const t = useTranslations('aboutPage');
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const OUR_HISTORY = getHistoryData(t);

  // Auto-scroll the timeline container when activeIndex changes
  useEffect(() => {
    if (timelineRef.current) {
      const container = timelineRef.current;
      const activeItem = container.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement;

      if (activeItem) {
        const containerWidth = container.offsetWidth;
        const itemOffset = activeItem.offsetLeft;
        const itemWidth = activeItem.offsetWidth;

        container.scrollTo({
          left: itemOffset - containerWidth / 2 + itemWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex]);

  const activeEvent = OUR_HISTORY[activeIndex];

  return (
    <section 
      id="company-history-section"
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-blue-whale)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-elf-green) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      <div className="xl:max-w-[70%] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: "var(--color-elf-green)" }}>
            <Building2 className="w-8 h-8 text-[color:var(--color-mercury)]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--color-mercury)] mb-4">
            {t('history.title')}{' '}
            <span className="ramp-text">{t('history.title_highlight')}</span>
          </h2>
          
          <p className="text-lg text-[color:var(--color-mercury)] opacity-80 max-w-2xl mx-auto">
            Discover the milestones that shaped our journey in the cryptocurrency landscape
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div
            ref={timelineRef}
            className="flex overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex space-x-12 px-8 min-w-full justify-center">
              {OUR_HISTORY.map((event, index) => (
                <motion.button
                  key={index}
                  data-index={index}
                  className="flex flex-col items-center snap-center min-w-max cursor-pointer group relative"
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`relative h-6 w-6 rounded-full mb-4 border-2 transition-all duration-300 ${
                      index === activeIndex
                        ? 'border-[color:var(--color-elf-green)] shadow-lg shadow-[color:var(--color-elf-green)]/50'
                        : 'border-[color:var(--color-warning)]'
                    }`}
                    style={{ 
                      backgroundColor: index === activeIndex 
                        ? "var(--color-elf-green)" 
                        : "var(--color-warning)"
                    }}
                    animate={{ 
                      scale: index === activeIndex ? 1.2 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {index === activeIndex && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: "var(--color-elf-green)" }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Date Label */}
                  <motion.div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      index === activeIndex
                        ? 'border-[color:var(--color-elf-green)] shadow-lg'
                        : 'border-[color:var(--color-warning)] border-opacity-30'
                    }`}
                    style={{
                      backgroundColor: index === activeIndex 
                        ? "var(--color-elf-green)" 
                        : "var(--color-negative)"
                    }}
                  >
                    <Calendar className="w-4 h-4 text-[color:var(--color-mercury)]" />
                    <span className={`text-sm font-semibold text-[color:var(--color-mercury)]`}>
                      {event.date}
                    </span>
                  </motion.div>

                  {/* Connecting Line */}
                  {index < OUR_HISTORY.length - 1 && (
                    <div 
                      className="absolute top-3 left-full w-12 h-0.5 -z-10"
                      style={{ 
                        backgroundColor: index < activeIndex 
                          ? "var(--color-elf-green)" 
                          : "var(--color-warning)"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Timeline Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full" style={{ backgroundColor: "var(--color-negative)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "var(--color-elf-green)" }}
              initial={{ width: 0 }}
              animate={{
                width: `${(activeIndex / (OUR_HISTORY.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Active Event Content */}
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative group">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                key={`img-${activeIndex}`}
                src={activeEvent.image || '/images/default-history.jpg'}
                alt={activeEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-blue-whale)]/90 via-transparent to-transparent" />
              
              {/* Image Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.h3
                  className="text-2xl font-bold text-[color:var(--color-mercury)] mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {activeEvent.title}
                </motion.h3>
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 rounded-full"
                  style={{ backgroundColor: "var(--color-elf-green)" }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Calendar className="w-4 h-4 text-[color:var(--color-mercury)]" />
                  <span className="text-sm font-medium text-[color:var(--color-mercury)]">
                    {activeEvent.date}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Decorative Border */}
            <div 
              className="absolute -inset-1 rounded-2xl opacity-50 blur-sm -z-10"
              style={{ backgroundColor: "var(--color-elf-green)" }}
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <motion.h4
                className="text-3xl font-bold mb-4 ramp-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {activeEvent.title}
              </motion.h4>
              
              <motion.p 
                className="text-lg text-[color:var(--color-mercury)] leading-relaxed opacity-90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {activeEvent.description}
              </motion.p>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  borderColor: "var(--color-warning)",
                  backgroundColor: "var(--color-negative)",
                  color: "var(--color-mercury)"
                }}
                onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                disabled={activeIndex === 0}
                whileHover={{ scale: activeIndex === 0 ? 1 : 1.05 }}
                whileTap={{ scale: activeIndex === 0 ? 1 : 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
                {t('history.navigation.previous')}
              </motion.button>
              
              <motion.button
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-[color:var(--color-mercury)]"
                style={{ backgroundColor: "var(--color-elf-green)" }}
                onClick={() => setActiveIndex(prev => Math.min(OUR_HISTORY.length - 1, prev + 1))}
                disabled={activeIndex === OUR_HISTORY.length - 1}
                whileHover={{ scale: activeIndex === OUR_HISTORY.length - 1 ? 1 : 1.05 }}
                whileTap={{ scale: activeIndex === OUR_HISTORY.length - 1 ? 1 : 0.95 }}
              >
                {t('history.navigation.next')}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-sm text-[color:var(--color-mercury)] opacity-70">
                {activeIndex + 1} of {OUR_HISTORY.length}
              </span>
              <div className="flex gap-2">
                {OUR_HISTORY.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full cursor-pointer transition-all duration-300"
                    style={{ 
                      backgroundColor: index === activeIndex 
                        ? "var(--color-elf-green)" 
                        : "var(--color-warning)"
                    }}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: index === activeIndex ? 1.2 : 1 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
