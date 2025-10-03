"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CryptoIcon from "../dashboard/CryptoIcon";

type TradingPair = {
  pair: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
};

const tradingPairs: TradingPair[] = [
  {
    pair: "BTC/USDT",
    name: "Bitcoin",
    symbol: "BTC",
    price: 21264.95,
    change24h: 2.45,
    high24h: 21268.95,
    low24h: 21209.04,
    volume24h: 19411867
  },
  {
    pair: "BNB/USDT",
    name: "Binance",
    symbol: "BNB",
    price: 245.67,
    change24h: -1.23,
    high24h: 248.90,
    low24h: 243.12,
    volume24h: 8754321
  },
  {
    pair: "LTC/USDT",
    name: "Litecoin",
    symbol: "LTC",
    price: 89.45,
    change24h: 3.67,
    high24h: 91.20,
    low24h: 87.89,
    volume24h: 3456789
  },
  {
    pair: "ETH/USDT",
    name: "Ethereum",
    symbol: "ETH",
    price: 1645.32,
    change24h: -0.89,
    high24h: 1658.90,
    low24h: 1632.15,
    volume24h: 12345678
  }
];

export default function ExchangeHeader() {
  const [selectedPair, setSelectedPair] = useState<TradingPair>(tradingPairs[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    return volume.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-5 gap-3 rounded-2xl border bg-[var(--color-blue)]/60 border-[var(--color-negative)]/70 px-3 py-4 lg:px-5 lg:py-5 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)]"
    >
      {/* Trading Pair Selector */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 w-full text-left hover:bg-[var(--color-negative)]/20 rounded-lg px-2 py-1 transition-colors duration-200"
        >
          <ChevronDown className="w-4 h-4 text-[var(--color-mercury)]/60 flex-shrink-0" />
          <CryptoIcon symbol={selectedPair.symbol} size="sm" />
          <div>
            <p className="text-sm text-[var(--color-mercury)]/80">{selectedPair.pair}</p>
            <p className="text-xs text-[var(--color-mercury)]/60">{selectedPair.name}</p>
          </div>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[var(--color-blue-whale)] border border-[var(--color-negative)]/70 rounded-lg shadow-lg z-10">
            {tradingPairs.map((pair) => (
              <button
                key={pair.pair}
                onClick={() => {
                  setSelectedPair(pair);
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-3 py-2 hover:bg-[var(--color-negative)]/30 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  selectedPair.pair === pair.pair ? 'bg-[var(--color-negative)]/20' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <CryptoIcon symbol={pair.symbol} size="sm" />
                  <div className="flex-1">
                    <p className="text-sm text-[var(--color-mercury)]">{pair.pair}</p>
                    <p className={`text-xs ${selectedPair.pair === pair.pair ? 'text-[var(--color-orange)]' : 'text-[var(--color-mercury)]/60'}`}>
                      {pair.name}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--color-mercury)]/80">${formatPrice(pair.price)}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div>
        <p className="text-sm text-[var(--color-mercury)]/80">Price</p>
        <p className="text-sm font-semibold text-[var(--color-elf-green)]">${formatPrice(selectedPair.price)}</p>
      </div>

      {/* 24h Change */}
      <div>
        <p className="text-sm text-[var(--color-mercury)]/80">24h change</p>
        <p className={`text-sm font-semibold ${selectedPair.change24h >= 0 ? 'text-[var(--color-elf-green)]' : 'text-red-400'}`}>
          {selectedPair.change24h >= 0 ? '+' : ''}{selectedPair.change24h.toFixed(2)}%
        </p>
      </div>

      {/* 24h High */}
      <div>
        <p className="text-sm text-[var(--color-mercury)]/80">24h high</p>
        <p className="text-sm font-semibold text-[var(--color-orange)]">${formatPrice(selectedPair.high24h)}</p>
      </div>

      {/* 24h Low */}
      <div>
        <p className="text-sm text-[var(--color-mercury)]/80">24h low</p>
        <p className="text-sm font-semibold text-[var(--color-elf-green)]">${formatPrice(selectedPair.low24h)}</p>
      </div>
    </motion.div>
  );
}
