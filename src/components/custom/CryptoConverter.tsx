"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus, FiChevronDown, FiArrowRight } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";
import {
  SiBitcoin,
  SiEthereum,
  SiTether,
  SiLitecoin,
  SiDogecoin,
} from "react-icons/si";
import Image from "next/image";
import { useTranslations } from "next-intl";

/* --------------------------------------------------------------------------
 * Config
 * ------------------------------------------------------------------------ */

const COINS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", icon: SiBitcoin },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", icon: SiEthereum },
  { id: "tether", symbol: "USDT", name: "Tether", icon: SiTether },
  { id: "litecoin", symbol: "LTC", name: "Litecoin", icon: SiLitecoin },
  { id: "dogecoin", symbol: "DOGE", name: "Dogecoin", icon: SiDogecoin },
] as const;

const CURRENCIES = [
  { code: "usd", name: "US Dollar" },
  { code: "eur", name: "Euro" },
  { code: "aed", name: "UAE Dirham" },
  { code: "gbp", name: "Pound Sterling" },
] as const;

/* --------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------ */

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function formatFiat(n: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(n);
}

function classNames(...cls: (string | false)[]) {
  return cls.filter(Boolean).join(" ");
}

/* --------------------------------------------------------------------------
 * Main Component
 * ------------------------------------------------------------------------ */

export default function CryptoConverter() {
  const [amount, setAmount] = useState<number>(1);
  const [coinId, setCoinId] = useState<string>("bitcoin");
  const [currency, setCurrency] = useState<string>("usd");
  const [showCoin, setShowCoin] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const t = useTranslations("homepage.converter");

  /* ----------------------------------------------------------------------
   * Fetch price data
   * -------------------------------------------------------------------- */

  const ids = COINS.map((c) => c.id).join(",");
  const vs = CURRENCIES.map((c) => c.code).join(",");
  const { data, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs}`,
    fetcher,
    { refreshInterval: 60_000 } // refresh every 60 s
  );

  const price = data?.[coinId]?.[currency] ?? 0;
  const converted = amount * price;

  const coinObj = useMemo(() => COINS.find((c) => c.id === coinId)!, [coinId]);
  const currencyObj = useMemo(
    () => CURRENCIES.find((c) => c.code === currency)!,
    [currency]
  );

  /* -------------------------------------------------------------------- */

  return (
    <section className="mx-auto" data-aos="fade-left">
      <div className="w-full mx-auto lg:mx-0  rounded-2xl bg-blue-whale p-6 text-white shadow-xl border border-elf-green">
        {/* Amount --------------------------------------------------------- */}
        <label className="block text-sm text-white/70 mb-1">
          {t("amount")}
        </label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(+e.target.value || 0)}
            className="flex-1 bg-[#FFF] text-blue-whale md:text-3xl text-lg font-semibold outline-none px-4 py-3 rounded-lg w-[100%]"
          />
          <div className="flex flex-col gap-1">
            <button
              aria-label="Increase"
              onClick={() => setAmount((a) => a + 1)}
              className="grid h-7 w-7 place-items-center rounded-lg bg-[#e47a5a] hover:bg-[#e46a5a] transition cursor-pointer"
            >
              <FiPlus />
            </button>
            <button
              aria-label="Decrease"
              onClick={() => setAmount((a) => Math.max(0, a - 1))}
              className="grid h-7 w-7 place-items-center rounded-lg bg-[#e47a5a] hover:bg-[#e46a5a] transition cursor-pointer"
            >
              <FiMinus />
            </button>
          </div>
        </div>

        {/* Select Coin + Currency ----------------------------------------- */}
        <div className="relative mt-8">
          {/* Coin */}
          <Dropdown
            label={t("select_coin")}
            open={showCoin}
            setOpen={setShowCoin}
            button={<CoinOption {...coinObj} selected />}
            options={COINS.map((c) => (
              <CoinOption
                key={c.id}
                {...c}
                onClick={() => {
                  setCoinId(c.id);
                  setShowCoin(false);
                }}
              />
            ))}
          />

          {/* Currency */}
          <Dropdown
            className="mt-4"
            label={t("select_currency")}
            open={showCurrency}
            setOpen={setShowCurrency}
            button={<CurrencyOption {...currencyObj} selected />}
            options={CURRENCIES.map((c) => (
              <CurrencyOption
                key={c.code}
                {...c}
                onClick={() => {
                  setCurrency(c.code);
                  setShowCurrency(false);
                }}
              />
            ))}
          />
        </div>

        {/* Result bar ------------------------------------------------------ */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.15 }}
          className="mt-10 rounded-xl bg-elf-green p-4 text-sm font-medium flex justify-between items-center lg:flex-row flex-col"
        >
          {isLoading ? (
            t("loading_price")
          ) : (
            <>
              <span className="text-white text-base font-semibold">
                {amount} {coinObj.symbol} ={" "}
                {formatFiat(converted, currency.toUpperCase())}
              </span>
              <span className="text-white/80 text-xs">
                {t("last_updated", {
                  time: new Date().toUTCString().slice(17, 22),
                })}
              </span>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
 * Re-usable Dropdown component (Headless UI-style)
 * ------------------------------------------------------------------------ */

type DropdownProps = {
  label: string;
  button: React.ReactNode;
  options: React.ReactNode[];
  open: boolean;
  setOpen: (v: boolean) => void;
  className?: string;
};

function Dropdown({
  label,
  button,
  options,
  open,
  setOpen,
  className,
}: DropdownProps) {
  return (
    <div className={classNames("relative", className ?? "")}>
      <label className="block text-sm text-white/70 mb-1">{label}</label>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full text-blue-whale items-center justify-between gap-3 rounded-lg border border-[#3D3D3D] bg-[#FFF] px-2 py-1 md:px-4 md:py-3 
         transition"
      >
        <div className="flex-1 text-left">{button}</div>
        <FiChevronDown className="shrink-0 opacity-80" />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg border border-[#3D3D3D] bg-[#1F1F1F] shadow-xl"
          >
            {options}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Option render helpers
 * ------------------------------------------------------------------------ */

type Coin = (typeof COINS)[number];
type Currency = (typeof CURRENCIES)[number];

function CoinOption({
  symbol,
  name,
  icon: Icon,
  onClick,
  selected,
}: Coin & { onClick?: () => void; selected?: boolean }) {
  return (
    <li
      onClick={onClick}
      className={classNames(
        "flex cursor-pointer items-center gap-3 px-4 py-3",
        selected ? "" : "hover:bg-[#2A2A2A]"
      )}
    >
      <Icon size={22} />
      <span>{name}</span>
      <span className="ml-auto text-white/50">{symbol}</span>
    </li>
  );
}

function CurrencyOption({
  code,
  name,
  onClick,
  selected,
}: Currency & { onClick?: () => void; selected?: boolean }) {
  return (
    <li
      onClick={onClick}
      className={classNames(
        "flex cursor-pointer items-center gap-3 px-4 py-3",
        selected ? "" : "hover:bg-[#2A2A2A]"
      )}
    >
      <span>{name}</span>
      <span className="ml-auto text-white/50 uppercase">{code}</span>
    </li>
  );
}
