'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  price_change_24h: number;
  volume_24h: number;
  sparkline_24h: number[];
}

interface PriceCardProps {
  coin: CoinData;
}

// Helper function to create SVG chart path
const createChartPath = (data: number[], width: number = 200, height: number = 60) => {
  if (!data || data.length === 0) return '';
  
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  });
  
  return `M ${points.join(' L ')}`;
};

const PriceCard: React.FC<PriceCardProps> = ({ coin }) => {
  const formatPrice = (price: number) => {
    if (price < 0.01) return `$${price.toFixed(6)}`;
    if (price < 1) return `$${price.toFixed(4)}`;
    if (price < 100) return `$${price.toFixed(2)}`;
    return `$${price.toLocaleString()}`;
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(1)}B`;
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(1)}M`;
    if (volume >= 1e3) return `$${(volume / 1e3).toFixed(1)}K`;
    return `$${volume.toFixed(0)}`;
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  };

  const isPositive = coin.price_change_24h >= 0;
  const chartPath = createChartPath(coin.sparkline_24h);

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
      {/* First row: Coin name/USD */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image
            src={coin.image}
            alt={coin.name}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">
            {coin.symbol}/USD
          </span>
        </div>
        <div className="text-gray-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>

      {/* Second row: Coin Price */}
      <div className="mb-3">
        <h3 className="text-2xl font-bold text-gray-900">
          {formatPrice(coin.price)}
        </h3>
      </div>

      {/* Third row: Chart SVG */}
      <div className="mb-4 h-16 flex items-center">
        <svg width="100%" height="60" viewBox="0 0 200 60" className="overflow-visible">
          <defs>
            <linearGradient id={`gradient-${coin.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isPositive ? "#10B981" : "#EF4444"} stopOpacity="0.3"/>
              <stop offset="100%" stopColor={isPositive ? "#10B981" : "#EF4444"} stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Area under the curve */}
          <path
            d={`${chartPath} L 200,60 L 0,60 Z`}
            fill={`url(#gradient-${coin.id})`}
          />
          
          {/* Chart line */}
          <path
            d={chartPath}
            fill="none"
            stroke={isPositive ? "#10B981" : "#EF4444"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Reference line */}
          <line
            x1="0"
            y1="30"
            x2="200"
            y2="30"
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        </svg>
      </div>

      {/* Last row: 24h volume and 24h change */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-gray-500 mb-1">24h volume</p>
          <p className="text-sm font-medium text-gray-700">
            {formatVolume(coin.volume_24h)}
          </p>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-gray-500 mb-1">24h change</p>
          <p className={`text-sm font-medium flex items-center gap-1 ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            <span className="text-xs">
              {isPositive ? '▲' : '▼'}
            </span>
            {formatPercentage(coin.price_change_24h)}
          </p>
        </div>
      </div>
    </div>
  );
};

const PriceCards: React.FC = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch('/api/price-cards');
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 animate-pulse">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="h-8 w-24 bg-gray-200 rounded mb-3"></div>
            <div className="h-16 w-full bg-gray-200 rounded mb-4"></div>
            <div className="flex justify-between">
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {coins.map((coin) => (
        <PriceCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default PriceCards;
