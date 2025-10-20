"use client";

import { useEffect, useState } from "react";

type Coin = {
  id: string;
  name: string;
  image: string;
  price: number;
  price_change: number;
  percent_change: number;
};

export default function Screener() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/screener`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setCoins(data);
        } else {
          console.error("API returned non-array:", data);
          setCoins([]);
        }
      } catch (err) {
        console.error("Error fetching screener data:", err);
        setCoins([]);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  const duplicatedCoins = [...coins, ...coins];

  return (
    <div className="overflow-hidden  bg-blue-whale dark:border-none py-2">
      <div className="ticker-track">
        {duplicatedCoins.map((coin, index) => (
          <div key={`${coin.id}-${index}`} className="ticker-item">
            <img src={coin.image} alt={coin.name} className="w-5 h-5 mr-1" />
            <strong className="mr-1 text-white ">{coin.name}</strong>
            <span className="mr-1 text-[#DAE6EA]">{coin.price?.toFixed(4) || "0.0000"}</span>
            <span
              className={`mr-2 ${
                (coin.price_change || 0) >= 0 ? "text-green-500" : "text-[#EC3B3B]"
              }`}
            >
              {(coin.price_change || 0) >= 0 ? "+" : ""}
              {coin.price_change?.toFixed(2) || "0.00"} ({coin.percent_change?.toFixed(2) || "0.00"}%)
            </span>
            <span className="text-[#DAE6EA] px-2">|</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: scrollLoop 60s linear infinite;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          color: #dae6ea;
          white-space: nowrap;
          padding-right: 16px;
        }

        @keyframes scrollLoop {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
