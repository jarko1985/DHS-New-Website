"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface TradingState {
  currentPrice: {
    price: number;
    timestamp: number;
    high24h: number;
    low24h: number;
    change24h: number;
    volume24h: number;
  };
  chartTimeframe: string;
  isConnected: boolean;
}

type TradingAction =
  | { type: 'SET_PRICE'; payload: { price: number; timestamp: number; high24h: number; low24h: number; change24h: number; volume24h: number } }
  | { type: 'SET_TIMEFRAME'; payload: string }
  | { type: 'SET_CONNECTION'; payload: boolean };

const initialState: TradingState = {
  currentPrice: {
    price: 18934.31,
    timestamp: Date.now(),
    high24h: 19200.00,
    low24h: 18600.00,
    change24h: 1.85,
    volume24h: 19411867
  },
  chartTimeframe: '1d',
  isConnected: true,
};

function tradingReducer(state: TradingState, action: TradingAction): TradingState {
  switch (action.type) {
    case 'SET_PRICE':
      return {
        ...state,
        currentPrice: action.payload,
      };
    case 'SET_TIMEFRAME':
      return {
        ...state,
        chartTimeframe: action.payload,
      };
    case 'SET_CONNECTION':
      return {
        ...state,
        isConnected: action.payload,
      };
    default:
      return state;
  }
}

interface TradingContextType {
  state: TradingState;
  setPrice: (price: number, timestamp: number, high24h: number, low24h: number, change24h: number, volume24h: number) => void;
  setTimeframe: (timeframe: string) => void;
  setConnection: (connected: boolean) => void;
}

const TradingContext = createContext<TradingContextType | undefined>(undefined);

export function TradingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(tradingReducer, initialState);

  const setPrice = (price: number, timestamp: number, high24h: number, low24h: number, change24h: number, volume24h: number) => {
    dispatch({
      type: 'SET_PRICE',
      payload: { price, timestamp, high24h, low24h, change24h, volume24h },
    });
  };

  const setTimeframe = (timeframe: string) => {
    dispatch({
      type: 'SET_TIMEFRAME',
      payload: timeframe,
    });
  };

  const setConnection = (connected: boolean) => {
    dispatch({
      type: 'SET_CONNECTION',
      payload: connected,
    });
  };

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const currentPrice = state.currentPrice.price;
      const change = (Math.random() - 0.5) * 0.02; // ±1% change
      const newPrice = currentPrice * (1 + change);
      const newTimestamp = Date.now();
      
      setPrice(
        newPrice,
        newTimestamp,
        Math.max(state.currentPrice.high24h, newPrice),
        Math.min(state.currentPrice.low24h, newPrice),
        change * 100,
        state.currentPrice.volume24h + Math.random() * 1000
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [state.currentPrice.price, state.currentPrice.high24h, state.currentPrice.low24h, state.currentPrice.volume24h]);

  return (
    <TradingContext.Provider value={{ state, setPrice, setTimeframe, setConnection }}>
      {children}
    </TradingContext.Provider>
  );
}

export function useTrading() {
  const context = useContext(TradingContext);
  if (context === undefined) {
    throw new Error('useTrading must be used within a TradingProvider');
  }
  return context;
}
