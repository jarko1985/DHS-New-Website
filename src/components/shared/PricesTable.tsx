'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown, Star, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  volume_24h: number;
  circulating_supply: number;
  sparkline_7d: number[];
}

export default function PricesTable() {
  const locale = (useParams() as { locale?: string })?.locale ?? 'en';
  const isArabic = locale === 'ar';
  const [coins, setCoins] = useState<Coin[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [timeFilter, setTimeFilter] = useState('All Time');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;

  useEffect(() => {
    fetch(`/api/prices_table`)
      .then(res => res.json())
      .then(setCoins)
      .finally(() => setLoading(false));
  }, []);

  const toggleFavorite = (coinId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(coinId)) {
        newFavorites.delete(coinId);
      } else {
        newFavorites.add(coinId);
      }
      return newFavorites;
    });
  };

  const format = (num: number, decimals = 2) =>
    Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(num);

  const filteredCoins = coins.filter(coin => {
    if (!search) return true;
    return coin.name.toLowerCase().includes(search.toLowerCase()) ||
           coin.symbol.toLowerCase().includes(search.toLowerCase());
  });

  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);
  const displayedCoins = filteredCoins.slice(
    (currentPage - 1) * coinsPerPage,
    currentPage * coinsPerPage,
  );

  return (
    <div className="min-h-screen bg-[#0d1635] py-8 px-4">
      <div className="">
        {/* Header */}
        <div className="mb-8">
         
          
          {/* Search and Filter Row - Top Right */}
          <div className="flex justify-between gap-4 mb-6">
            
            <div className="relative">
              <Input
                placeholder="Search..."
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="pr-10 pl-4 w-64 bg-[#0d1635] border-[#e2dedc]/20 text-[#e2dedc] placeholder:text-[#e2dedc]/60 focus:border-[#e2dedc]/40 rounded-md"
              />
              <Search className="absolute right-3 top-5 transform -translate-y-1/2 text-[#e2dedc]/60 w-4 h-4" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#0d1635] border border-[#e2dedc]/20 text-[#e2dedc] rounded-md transition-colors">
              <span>All Time</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <Card className="bg-[#0d1635] border-[#e2dedc]/10 overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#e2dedc]/10">
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    #
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    Name
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    Price
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    24h %
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    Market Cap
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    Volume
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    Charts
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#e2dedc]/70">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading
                  ? Array.from({ length: 10 }).map((_, i) => (
                      <tr key={i} className="border-b border-[#e2dedc]/5">
                        <td className="py-4 px-4">
                          <Skeleton className="h-4 w-6" />
                        </td>
                        <td className="py-4 px-4">
                          <Skeleton className="h-4 w-32" />
                        </td>
                        <td className="py-4 px-4">
                          <Skeleton className="h-4 w-20" />
                        </td>
                        <td className="py-4 px-4">
                          <Skeleton className="h-4 w-16" />
                        </td>
                        <td className="py-4 px-4">
                          <Skeleton className="h-4 w-24" />
                        </td>
                        <td className="py-4 px-4">
                          <Skeleton className="h-4 w-20" />
                        </td>
                        <td className="py-4 px-4">
                          <Skeleton className="h-8 w-24" />
                        </td>
                        <td className="py-4 px-4">
                          <Skeleton className="h-8 w-16" />
                        </td>
                      </tr>
                    ))
                  : displayedCoins.map((coin, index) => (
                      <tr
                        key={coin.id}
                        className="border-b border-[#e2dedc]/5 hover:bg-[#e2dedc]/5 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => toggleFavorite(coin.id)}
                              className="text-[#e2dedc]/40 hover:text-[#e2dedc]/80 transition-colors"
                            >
                              <Star 
                                className={cn(
                                  "w-4 h-4",
                                  favorites.has(coin.id) ? "fill-current" : "stroke-current"
                                )}
                              />
                            </button>
                            <span className="text-sm text-[#e2dedc]/70">
                              {index + 1}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={coin.image} 
                              alt={coin.name} 
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <div className="font-medium text-[#e2dedc]">
                                {coin.name}
                              </div>
                              <div className="text-xs text-[#e2dedc]/60 uppercase">
                                ({coin.symbol})
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-medium text-[#e2dedc]">
                            ${format(coin.price)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={cn(
                              'font-medium',
                              coin.percent_change_24h >= 0 
                                ? 'text-green-400' 
                                : 'text-orange-400'
                            )}
                          >
                            {coin.percent_change_24h >= 0 ? '+' : ''}{coin.percent_change_24h?.toFixed(2)}%
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-[#e2dedc]">
                            ${format(coin.market_cap, 0)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-[#e2dedc]">
                            ${format(coin.volume_24h, 0)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <Sparkline
                            prices={coin.sparkline_7d}
                            positive={coin.percent_change_7d >= 0}
                          />
                        </td>
                        <td className="py-4 px-4">
                          <button className="px-4 py-2 bg-[#0d1635] border border-[#e2dedc]/20 text-[#e2dedc] rounded-md hover:bg-elf-green transition-colors text-sm">
                            Trade
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Pagination Controls */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              className="flex items-center gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors"
            >
              <ChevronLeft className={`${isArabic ? 'rotate-180' : ''} w-4 h-4`} />
              Previous
            </button>
            <span className="text-sm">Page {currentPage} of {totalPages}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              className="flex items-center gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors"
            >
              Next
              <ChevronRight className={`${isArabic ? 'rotate-180' : ''} w-4 h-4`} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Sparkline({ prices, positive }: { prices: number[]; positive: boolean }) {
  const max = Math.max(...prices);
  const min = Math.min(...prices);
  const height = 40;
  const width = 100;

  if (!prices.length) {
    return <div className="w-24 h-10" />;
  }

  const points = prices
    .map((p, i) => `${(i / (prices.length - 1)) * width},${height - ((p - min) / (max - min)) * height}`)
    .join(' ');

  return (
    <motion.svg width={width} height={height} className="overflow-visible">
      <motion.polyline
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        fill="none"
        stroke={positive ? 'rgb(34, 197, 94)' : 'rgb(249, 115, 22)'}
        strokeWidth="2"
        points={points}
      />
    </motion.svg>
  );
}
