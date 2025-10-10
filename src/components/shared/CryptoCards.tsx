'use client';

import React, { useEffect, useMemo, useRef, useState, useId } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useCurrency } from '@/context/PriceConversionContext';

interface CryptoCard {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_7d: number;
  sparkline_7d: number[];
}

export default function CryptoCards() {
  const [cards, setCards] = useState<CryptoCard[]>([]);
  const [loading, setLoading] = useState(true);
  const { formatPrice: currencyFormatPrice } = useCurrency();

  useEffect(() => {
    let active = true;
    fetch('/api/crypto-cards')
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        setCards(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!active) return;
        setCards([]);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const formatPrice = (price: number) => currencyFormatPrice(price);

  const getChartColor = (index: number) => (index % 2 ? '#117f60' : '#e47a5a');

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full min-w-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card
            key={i}
            className="bg-[#0d1635] border-[#e2dedc]/10 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl w-full min-w-0"
          >
            <div className="animate-pulse">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div className="min-w-0">
                  <div className="h-3 bg-[#e2dedc]/20 rounded w-24 mb-2" />
                  <div className="h-5 bg-[#e2dedc]/20 rounded w-28" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e2dedc]/20 rounded-full" />
              </div>
              <div className="h-14 sm:h-16 lg:h-20 bg-[#e2dedc]/10 rounded" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full min-w-0">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          className="bg-[#0d1635] border-[#e2dedc]/10 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl hover:border-[#e2dedc]/20 transition-colors w-full min-w-0"
        >
          <div className="flex justify-between items-start mb-3 sm:mb-4 gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-[#e2dedc] font-medium text-[13px] sm:text-sm mb-1 truncate">
                {card.name}
              </h3>
              <p className="text-[#e2dedc] text-base sm:text-lg lg:text-xl font-bold leading-snug">
                {formatPrice(card.current_price)}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-[#0d1635]">
              {/* use <img> to avoid Next/Image domain config for API images */}
              <img
                src={card.image}
                alt={card.name}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="h-14 sm:h-16 lg:h-20 relative">
            <ResponsiveAreaChart
              data={card.sparkline_7d}
              color={getChartColor(index)}
              positive={card.price_change_percentage_7d >= 0}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}

/** Responsive SVG Area Chart that auto-measures its container via ResizeObserver */
function ResponsiveAreaChart({
  data,
  color,
  positive,
}: {
  data: number[];
  color: string;
  positive: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const gradId = useId(); // unique gradient ID

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // initial measure
    const measure = () => {
      const rect = el.getBoundingClientRect();
      // fallback min sizes to avoid 0 width/height on first paint
      setSize({
        w: Math.max(120, Math.floor(rect.width)),
        h: Math.max(48, Math.floor(rect.height)),
      });
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { pathD, linePoints } = useMemo(() => {
    const w = size.w;
    const h = size.h;

    if (!data || data.length === 0 || w <= 0 || h <= 0) {
      return { pathD: '', linePoints: '' };
    }

    let min = Infinity;
    let max = -Infinity;
    for (const v of data) {
      if (v < min) min = v;
      if (v > max) max = v;
    }

    // avoid div-by-zero for flat series
    const range = max - min || 1;

    const pts: Array<[number, number]> = data.map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return [x, y];
    });

    const pointsAttr = pts.map(([x, y]) => `${x},${y}`).join(' ');
    const path =
      pts.length > 1
        ? `M0,${h} L ${pointsAttr} L ${w},${h} Z`
        : `M0,${h} L ${w},${h} Z`;

    return { pathD: path, linePoints: pointsAttr };
  }, [data, size.w, size.h]);

  // If not ready yet, show a subtle placeholder
  if (!pathD || !linePoints) {
    return <div ref={containerRef} className="w-full h-full bg-[#e2dedc]/10 rounded" />;
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      <motion.svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size.w} ${size.h}`}
        preserveAspectRatio="none"
        className="overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        role="img"
        aria-label="7-day price sparkline"
      >
        <defs>
          <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
          <filter id={`${gradId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Area */}
        <motion.path
          d={pathD}
          fill={`url(#${gradId})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        {/* Line */}
        <motion.polyline
          points={linePoints}
          fill="none"
          stroke={color}
          strokeWidth={2}
          filter={`url(#${gradId}-glow)`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        {/* End Dot */}
        {(() => {
          const last = linePoints.split(' ').at(-1);
          if (!last) return null;
          const [x, y] = last.split(',').map(Number);
          return (
            <circle
              cx={x}
              cy={y}
              r={2.8}
              fill={positive ? '#15a374' : '#e47a5a'}
              opacity={0.9}
            />
          );
        })()}
      </motion.svg>
    </div>
  );
}
