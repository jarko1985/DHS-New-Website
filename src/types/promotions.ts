export type Coin = 'BTC' | 'ETH' | 'SOL' | 'XRP';

export type Promotion = {
  id: string;
  title: string;
  desc: string;
  dateRange: string;
  image: string; // URL/path to image
  coins: Coin[];
};
