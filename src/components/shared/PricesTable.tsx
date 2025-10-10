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
import { useCurrency } from '@/context/PriceConversionContext';

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
  const { convertPrice, currency } = useCurrency();

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

  const format = (num: number, decimals = 2) => {
    const converted = convertPrice(num);
    return Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(converted);
  };

  const currencySymbol = currency === 'USD' ? '$' : 'AED ';

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
    <div className="w-full min-w-0">
      {/* Header */}
      <div className="mb-4 sm:mb-6 lg:mb-8">
        {/* Search and Filter Row */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative flex-1">
            <Input
              placeholder="Search..."
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="pr-10 pl-3 sm:pl-4 w-full bg-[#0d1635] border-[#e2dedc]/20 text-[#e2dedc] placeholder:text-[#e2dedc]/60 focus:border-[#e2dedc]/40 rounded-md text-sm sm:text-base h-9 sm:h-10"
            />
            <Search className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-[#e2dedc]/60 w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#0d1635] border border-[#e2dedc]/20 text-[#e2dedc] rounded-md transition-colors text-sm sm:text-base whitespace-nowrap">
            <span>All Time</span>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <Card className="bg-[#0d1635] border-[#e2dedc]/10 overflow-hidden rounded-xl sm:rounded-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full min-w-[600px] sm:min-w-[800px]">
            <thead>
              <tr className="border-b border-[#e2dedc]/10">
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap">
                  #
                </th>
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap">
                  Name
                </th>
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap">
                  Price
                </th>
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap">
                  24h %
                </th>
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap hidden sm:table-cell">
                  Market Cap
                </th>
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap hidden md:table-cell">
                  Volume
                </th>
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap">
                  Charts
                </th>
                <th className="text-left py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-[#e2dedc]/70 whitespace-nowrap">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array.from({ length: 10 }).map((_, i) => (
                    <tr key={i} className="border-b border-[#e2dedc]/5">
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <Skeleton className="h-3 sm:h-4 w-4 sm:w-6" />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <Skeleton className="h-3 sm:h-4 w-24 sm:w-32" />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <Skeleton className="h-3 sm:h-4 w-16 sm:w-20" />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <Skeleton className="h-3 sm:h-4 w-12 sm:w-16" />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 hidden sm:table-cell">
                        <Skeleton className="h-3 sm:h-4 w-20 sm:w-24" />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 hidden md:table-cell">
                        <Skeleton className="h-3 sm:h-4 w-16 sm:w-20" />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <Skeleton className="h-6 sm:h-8 w-20 sm:w-24" />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <Skeleton className="h-6 sm:h-8 w-12 sm:w-16" />
                      </td>
                    </tr>
                  ))
                : displayedCoins.map((coin, index) => (
                    <tr
                      key={coin.id}
                      className="border-b border-[#e2dedc]/5 hover:bg-[#e2dedc]/5 transition-colors"
                    >
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <button
                            onClick={() => toggleFavorite(coin.id)}
                            className="text-[#e2dedc]/40 hover:text-[#e2dedc]/80 transition-colors"
                          >
                            <Star 
                              className={cn(
                                "w-3 h-3 sm:w-4 sm:h-4",
                                favorites.has(coin.id) ? "fill-current" : "stroke-current"
                              )}
                            />
                          </button>
                          <span className="text-xs sm:text-sm text-[#e2dedc]/70">
                            {index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <img 
                            src={coin.image} 
                            alt={coin.name} 
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-[#e2dedc] text-xs sm:text-sm truncate">
                              {coin.name}
                            </div>
                            <div className="text-xs text-[#e2dedc]/60 uppercase">
                              ({coin.symbol})
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <span className="font-medium text-[#e2dedc] text-xs sm:text-sm">
                          {currency === 'USD' ? `${currencySymbol}${format(coin.price)}` : `${format(coin.price)} ${currencySymbol}`}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <span
                          className={cn(
                            'font-medium text-xs sm:text-sm',
                            coin.percent_change_24h >= 0 
                              ? 'text-green-400' 
                              : 'text-orange-400'
                          )}
                        >
                          {coin.percent_change_24h >= 0 ? '+' : ''}{coin.percent_change_24h?.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 hidden sm:table-cell">
                        <span className="text-[#e2dedc] text-xs sm:text-sm">
                          {currency === 'USD' ? `${currencySymbol}${format(coin.market_cap, 0)}` : `${format(coin.market_cap, 0)} ${currencySymbol}`}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 hidden md:table-cell">
                        <span className="text-[#e2dedc] text-xs sm:text-sm">
                          {currency === 'USD' ? `${currencySymbol}${format(coin.volume_24h, 0)}` : `${format(coin.volume_24h, 0)} ${currencySymbol}`}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <Sparkline
                          prices={coin.sparkline_7d}
                          positive={coin.percent_change_7d >= 0}
                        />
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4">
                        <button className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-[#0d1635] border border-[#e2dedc]/20 text-[#e2dedc] rounded-md hover:bg-elf-green transition-colors text-xs sm:text-sm whitespace-nowrap">
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
        <div className="flex justify-center mt-4 sm:mt-6 gap-3 sm:gap-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            className="flex items-center gap-1 sm:gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors text-sm sm:text-base"
          >
            <ChevronLeft className={`${isArabic ? 'rotate-180' : ''} w-3 h-3 sm:w-4 sm:h-4`} />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>
          <span className="text-xs sm:text-sm">Page {currentPage} of {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            className="flex items-center gap-1 sm:gap-2 disabled:opacity-40 hover:text-[#e47a5a] transition-colors text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className={`${isArabic ? 'rotate-180' : ''} w-3 h-3 sm:w-4 sm:h-4`} />
          </button>
        </div>
      )}
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
