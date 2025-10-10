"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

export type Currency = "USD" | "AED";

interface PriceConversionContextType {
  currency: Currency;
  conversionRate: number;
  setCurrency: (currency: Currency) => void;
  convertPrice: (amount: number) => number;
  formatPrice: (amount: number, showSymbol?: boolean) => string;
}

const PriceConversionContext = createContext<PriceConversionContextType | undefined>(undefined);

const USD_TO_AED_RATE = 3.6725;

export function PriceConversionProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("USD");

  // Load currency preference from localStorage on mount
  useEffect(() => {
    const savedCurrency = localStorage.getItem("preferredCurrency") as Currency;
    if (savedCurrency === "USD" || savedCurrency === "AED") {
      setCurrencyState(savedCurrency);
    }
  }, []);

  const setCurrency = useCallback((newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("preferredCurrency", newCurrency);
  }, []);

  const convertPrice = useCallback(
    (amount: number): number => {
      if (currency === "AED") {
        return amount * USD_TO_AED_RATE;
      }
      return amount;
    },
    [currency]
  );

  const formatPrice = useCallback(
    (amount: number, showSymbol: boolean = true): string => {
      const convertedAmount = convertPrice(amount);
      const symbol = currency === "USD" ? "$" : "AED";
      
      // Format with appropriate decimal places
      const formatted = convertedAmount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      if (!showSymbol) {
        return formatted;
      }

      // USD: $1,234.56 | AED: 1,234.56 AED
      return currency === "USD" ? `${symbol}${formatted}` : `${formatted} ${symbol}`;
    },
    [currency, convertPrice]
  );

  const value = {
    currency,
    conversionRate: USD_TO_AED_RATE,
    setCurrency,
    convertPrice,
    formatPrice,
  };

  return (
    <PriceConversionContext.Provider value={value}>
      {children}
    </PriceConversionContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(PriceConversionContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a PriceConversionProvider");
  }
  return context;
}

