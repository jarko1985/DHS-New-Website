'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

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

  useEffect(() => {
    fetch('/api/crypto-cards')
      .then(res => res.json())
      .then(setCards)
      .finally(() => setLoading(false));
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const getChartColor = (index: number) => {
    // Alternate colors: 0,1 = green, 2,3 = orange-red
    return index % 2 ? '#117f60' : '#e47a5a';
  };

  if (loading) {
    return (
      <div className='px-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="bg-[#0d1635] border-[#e2dedc]/10 p-6 rounded-xl">
              <div className="animate-pulse">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="h-4 bg-[#e2dedc]/20 rounded w-20 mb-2"></div>
                    <div className="h-6 bg-[#e2dedc]/20 rounded w-24"></div>
                  </div>
                  <div className="w-12 h-12 bg-[#e2dedc]/20 rounded-full"></div>
                </div>
                <div className="h-16 bg-[#e2dedc]/20 rounded"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {cards.map((card, index) => (
          <Card 
            key={card.id} 
            className="bg-[#0d1635] border-[#e2dedc]/10 p-6 rounded-xl hover:border-[#e2dedc]/20 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-[#e2dedc] font-medium text-sm mb-1">
                  {card.name}
                </h3>
                <p className="text-[#e2dedc] text-xl font-bold">
                  {formatPrice(card.current_price)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-10 h-10"
                />
              </div>
            </div>
            
            <div className="h-16 relative">
              <AreaChart 
                data={card.sparkline_7d} 
                color={getChartColor(index)}
                positive={card.price_change_percentage_7d >= 0}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AreaChart({ data, color, positive }: { data: number[]; color: string; positive: boolean }) {
  if (!data || data.length === 0) {
    return <div className="h-16 w-full bg-[#e2dedc]/10 rounded"></div>;
  }

  const max = Math.max(...data);
  const min = Math.min(...data);
  const width = 200;
  const height = 64;

  // Create SVG path for area chart
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / (max - min)) * height;
    return `${x},${y}`;
  }).join(' ');

  const areaPath = `M0,${height} L${points} L${width},${height} Z`;

  return (
    <div className="w-full h-full">
      <motion.svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill={color}
          fillOpacity={0.3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        {/* Line */}
        <motion.polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
}
