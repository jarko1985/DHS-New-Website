"use client";

import { DollarSign } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { useCurrency, type Currency } from "@/context/PriceConversionContext";

const currencies: { code: Currency; label: string }[] = [
  { code: "USD", label: "USD" },
  { code: "AED", label: "AED" },
];

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  const handleSwitch = (curr: Currency) => {
    if (curr === currency) return;
    setCurrency(curr);
  };

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 shadow-md border border-white/20">
      {currency === "USD" ? (
        <DollarSign className="w-5 h-5 text-elf-green mr-1"  style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(47%) saturate(1038%) hue-rotate(101deg) brightness(94%) contrast(92%)' }} />
      ) : (
        <div className="w-5 h-5 mr-1 relative flex items-center justify-center">
          <Image
            src="/images/dirham_symbol.png"
            alt="Dirham"
            width={18}
            height={18}
            className="object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(47%) saturate(1038%) hue-rotate(101deg) brightness(94%) contrast(92%)' }}
          />
        </div>
      )}
      {currencies.map((curr) => (
        <button
          key={curr.code}
          onClick={() => handleSwitch(curr.code)}
          className={clsx(
            "px-2 py-1 rounded-full font-bold text-xs transition-all duration-200 focus:outline-none cursor-pointer",
            curr.code === currency
              ? "bg-[#e47a5a] text-white shadow"
              : "text-elf-green hover:bg-elf-green/20"
          )}
          aria-current={curr.code === currency ? "true" : undefined}
          aria-label={`Switch to ${curr.label}`}
        >
          {curr.label}
        </button>
      ))}
    </div>
  );
}

