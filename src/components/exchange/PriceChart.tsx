"use client";

import type React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import {
  createChart,
  type IChartApi,
  type ISeriesApi,
  type CandlestickData,
  type LineData,
  type Time,
  CandlestickSeries,
  LineSeries,
} from 'lightweight-charts';
import { motion } from 'framer-motion';
import { useTrading } from '@/context/TradingContext';

interface TradingChartProps {
  height?: number;
}

const TradingChart: React.FC<TradingChartProps> = ({ height = 400 }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);
  const lineSeriesRef = useRef<ISeriesApi<'Line'> | null>(null);
  const lastTimestampRef = useRef<number>(0);
  const { state, setTimeframe } = useTrading();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [chartType, setChartType] = useState<'price' | 'deep'>('price');

  useEffect(() => {
    if (state.currentPrice.timestamp) {
      setLastUpdate(new Date(state.currentPrice.timestamp).toLocaleTimeString());
    }
  }, [state.currentPrice.timestamp]);

  // Helper function to align timestamp to timeframe interval
  const alignTimestampToInterval = (timestamp: number, timeframe: string): number => {
    const intervals = {
      '5m': 5 * 60,
      '15m': 15 * 60,
      '1h': 60 * 60,
      '4h': 4 * 60 * 60,
      '1d': 24 * 60 * 60,
    };

    const interval = intervals[timeframe as keyof typeof intervals] || intervals['1h'];
    return Math.floor(timestamp / interval) * interval;
  };

  // Generate U-shaped candlestick data pattern
  const generateCandlestickData = (timeframe: string, currentPrice: number): CandlestickData[] => {
    const data: CandlestickData[] = [];
    const now = new Date();
    const intervals = {
      '5m': 5 * 60 * 1000,
      '15m': 15 * 60 * 1000,
      '1h': 60 * 60 * 1000,
      '4h': 4 * 60 * 60 * 1000,
      '1d': 24 * 60 * 60 * 1000,
    };

    const interval = intervals[timeframe as keyof typeof intervals] || intervals['1d'];
    const count = 60; // About 2 months of daily data

    // Create U-shaped pattern: start high, drop to low, then recover
    const startPrice = 18900; // Starting price around 18900
    const lowPrice = 15500;   // Bottom around 15500
    const endPrice = currentPrice; // End at current price

    for (let i = 0; i < count; i++) {
      const timestamp = Math.floor(now.getTime() / 1000);
      const alignedTime = alignTimestampToInterval(timestamp - (count - i) * (interval / 1000), timeframe);

      // Create U-shaped pattern
      let targetPrice;
      if (i < count * 0.3) {
        // Downtrend phase (first 30% of data)
        const progress = i / (count * 0.3);
        targetPrice = startPrice - (startPrice - lowPrice) * progress;
      } else if (i < count * 0.4) {
        // Bottom phase (next 10% of data)
        targetPrice = lowPrice + (Math.random() - 0.5) * 200; // Small fluctuations at bottom
      } else {
        // Uptrend phase (remaining 60% of data)
        const progress = (i - count * 0.4) / (count * 0.6);
        targetPrice = lowPrice + (endPrice - lowPrice) * progress;
      }

      // Add some realistic volatility
      const volatility = targetPrice * 0.015; // 1.5% volatility
      const randomFactor = (Math.random() - 0.5) * volatility;

      const open = targetPrice + randomFactor;
      const close = targetPrice + (Math.random() - 0.5) * volatility * 0.5;
      
      // Generate realistic high and low
      const bodySize = Math.abs(close - open);
      const wickSize = bodySize * (0.3 + Math.random() * 1.2);
      
      const high = Math.max(open, close) + Math.random() * wickSize;
      const low = Math.min(open, close) - Math.random() * wickSize;

      data.push({
        time: alignedTime as Time,
        open: Math.max(open, 1000),
        high: Math.max(high, 1000),
        low: Math.max(low, 1000),
        close: Math.max(close, 1000),
      });
    }

    return data.sort((a, b) => Number(a.time) - Number(b.time));
  };

  // Generate line chart data from candlestick data
  const generateLineData = (candlestickData: CandlestickData[]): LineData[] => {
    return candlestickData.map(candle => ({
      time: candle.time,
      value: candle.close,
    }));
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: isFullscreen ? window.innerHeight - 100 : height,
      layout: {
        background: { color: '#0f172a' },
        textColor: '#94a3b8',
      },
      grid: {
        vertLines: { color: 'rgba(255,255,255,0.1)' },
        horzLines: { color: 'rgba(255,255,255,0.1)' },
      },
      crosshair: {
        mode: 1,
      },
      rightPriceScale: {
        borderColor: 'rgba(255,255,255,0.1)',
        textColor: '#94a3b8',
        scaleMargins: {
          top: 0.02,
          bottom: 0.02,
        },
      },
      timeScale: {
        borderColor: 'rgba(255,255,255,0.1)',
        timeVisible: true,
        secondsVisible: false,
        rightOffset: 0,
        barSpacing: 16,
        minBarSpacing: 2,
        fixLeftEdge: true,
        fixRightEdge: true,
      },
    });

    chartRef.current = chart;

    // Create candlestick series
    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#10b981',
      downColor: '#ef4444',
      borderDownColor: '#ef4444',
      borderUpColor: '#10b981',
      wickDownColor: '#ef4444',
      wickUpColor: '#10b981',
      priceFormat: {
        type: 'price',
        precision: 2,
        minMove: 0.01,
      },
    });

    // Create line series
    const lineSeries = chart.addSeries(LineSeries, {
      color: '#10b981',
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
    });

    candlestickSeriesRef.current = candlestickSeries;
    lineSeriesRef.current = lineSeries;

    // Set initial data
    const initialCandlestickData = generateCandlestickData(state.chartTimeframe, state.currentPrice.price);
    const initialLineData = generateLineData(initialCandlestickData);
    
    candlestickSeries.setData(initialCandlestickData);
    lineSeries.setData(initialLineData);

    // Show/hide series based on chart type
    if (chartType === 'price') {
      candlestickSeries.applyOptions({ visible: true });
      lineSeries.applyOptions({ visible: false });
    } else {
      candlestickSeries.applyOptions({ visible: false });
      lineSeries.applyOptions({ visible: true });
    }

    // Initialize the last timestamp reference
    if (initialCandlestickData.length > 0) {
      const lastDataPoint = initialCandlestickData[initialCandlestickData.length - 1];
      lastTimestampRef.current = lastDataPoint.time as number;

      // Update with current price
      candlestickSeries.update({
        time: lastDataPoint.time,
        open: lastDataPoint.close,
        high: lastDataPoint.close,
        low: lastDataPoint.close,
        close: lastDataPoint.close,
      });

      lineSeries.update({
        time: lastDataPoint.time,
        value: lastDataPoint.close,
      });
    }

    // Handle resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (chartContainerRef.current && chartRef.current) {
          const containerWidth = chartContainerRef.current.offsetWidth;
          const containerHeight = isFullscreen ? window.innerHeight - 100 : height;
          
          chart.applyOptions({
            width: containerWidth,
            height: containerHeight,
          });
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [height, isFullscreen, state.chartTimeframe, chartType]);

  // Update chart with new price data
  useEffect(() => {
    if (!candlestickSeriesRef.current || !lineSeriesRef.current || !state.currentPrice.timestamp) return;

    const rawTimestamp = Math.floor(state.currentPrice.timestamp / 1000);
    const alignedTimestamp = alignTimestampToInterval(rawTimestamp, state.chartTimeframe);
    const currentPrice = state.currentPrice.price;

    // Prevent updating with older or duplicate timestamps
    if (alignedTimestamp <= lastTimestampRef.current) {
      return;
    }

    try {
      candlestickSeriesRef.current.update({
        time: alignedTimestamp as Time,
        open: currentPrice,
        high: currentPrice,
        low: currentPrice,
        close: currentPrice,
      });

      lineSeriesRef.current.update({
        time: alignedTimestamp as Time,
        value: currentPrice,
      });

      // Update the last timestamp after successful update
      lastTimestampRef.current = alignedTimestamp;
    } catch (error) {
      console.error('Failed to update chart:', error);
      // If update fails, try to reinitialize with new data
      if (candlestickSeriesRef.current && lineSeriesRef.current) {
        const newCandlestickData = generateCandlestickData(state.chartTimeframe, currentPrice);
        const newLineData = generateLineData(newCandlestickData);
        
        candlestickSeriesRef.current.setData(newCandlestickData);
        lineSeriesRef.current.setData(newLineData);

        // Update the last timestamp to the most recent data point
        if (newCandlestickData.length > 0) {
          lastTimestampRef.current = newCandlestickData[newCandlestickData.length - 1].time as number;
        }
      }
    }
  }, [state.currentPrice.price, state.currentPrice.timestamp, state.chartTimeframe]);

  // Reset timestamp reference when timeframe changes
  useEffect(() => {
    lastTimestampRef.current = 0;
  }, [state.chartTimeframe]);

  const timeframes = useMemo(
    () =>
      [
        { key: '5m', label: '5m' },
        { key: '15m', label: '15m' },
        { key: '1h', label: '1h' },
        { key: '4h', label: '4h' },
        { key: '1d', label: '1d' },
      ] as const,
    [],
  );

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleChartTypeChange = (type: 'price' | 'deep') => {
    setChartType(type);
    
    if (candlestickSeriesRef.current && lineSeriesRef.current) {
      if (type === 'price') {
        candlestickSeriesRef.current.applyOptions({ visible: true });
        lineSeriesRef.current.applyOptions({ visible: false });
      } else {
        candlestickSeriesRef.current.applyOptions({ visible: false });
        lineSeriesRef.current.applyOptions({ visible: true });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={`h-full rounded-xl sm:rounded-2xl border bg-[var(--color-blue)]/55 border-[var(--color-negative)]/70 p-3 sm:p-4 lg:p-5 flex flex-col w-full min-w-0 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
    >
      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 flex-shrink-0">
        {/* Row 1: Chart Type Buttons */}
        <div className="flex gap-1 sm:gap-2">
          <button 
            onClick={() => handleChartTypeChange('price')}
            className={`px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg font-medium transition-all duration-200 ${
              chartType === 'price' 
                ? 'bg-[var(--color-elf-green)] text-white shadow-[0_0_12px_rgba(17,127,96,0.4)]' 
                : 'bg-[var(--color-negative)]/50 text-[var(--color-mercury)]/70 hover:bg-[var(--color-negative)]/70'
            }`}
          >
            <span className="hidden xs:inline">Price Chart</span>
            <span className="xs:hidden">Price</span>
          </button>
          <button 
            onClick={() => handleChartTypeChange('deep')}
            className={`px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg font-medium transition-all duration-200 ${
              chartType === 'deep' 
                ? 'bg-[var(--color-elf-green)] text-white shadow-[0_0_12px_rgba(17,127,96,0.4)]' 
                : 'bg-[var(--color-negative)]/50 text-[var(--color-mercury)]/70 hover:bg-[var(--color-negative)]/70'
            }`}
          >
            <span className="hidden xs:inline">Deep Chart</span>
            <span className="xs:hidden">Deep</span>
          </button>
        </div>
        
        {/* Row 2: Timeframe selector and Fullscreen toggle */}
        <div className="flex items-center justify-between gap-2">
          {/* Timeframe selector */}
          <div className="flex space-x-0.5 sm:space-x-1 md:space-x-2 text-xs sm:text-sm overflow-x-auto">
            {timeframes.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTimeframe(key)}
                className={`px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 rounded transition-colors whitespace-nowrap ${
                  state.chartTimeframe === key
                    ? 'bg-[var(--color-elf-green)] text-white'
                    : 'text-[var(--color-mercury)]/60 hover:text-[var(--color-mercury)] hover:bg-[var(--color-negative)]/30'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Fullscreen toggle */}
          <button onClick={toggleFullscreen} className="text-[var(--color-mercury)]/60 hover:text-[var(--color-mercury)] p-0.5 sm:p-1 text-xs sm:text-sm whitespace-nowrap">
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            <span className="sm:hidden">{isFullscreen ? 'Exit' : 'Full'}</span>
          </button>
        </div>
      </div>

      {/* Chart container */}
      <div
        ref={chartContainerRef}
        className="flex-1 rounded-lg w-full min-w-0"
        style={{ height: isFullscreen ? 'calc(100vh - 200px)' : height }}
      />
    </motion.div>
  );
};

export default TradingChart;
