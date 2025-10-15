import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Specific coin IDs for BTC, ETH, XRP, SOL
    const coinIds = ['bitcoin', 'ethereum', 'ripple', 'solana'];
    
    const res = await fetch(
      `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(',')}&sparkline=true&price_change_percentage=24h`,
      {
        headers: {
          Accept: 'application/json',
          'x-cg-pro-api-key': process.env.COINGECKO_API_KEY!,
        },
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error('CoinGecko API error:', errorText);
      return NextResponse.json([], { status: 200 });
    }

    const data = await res.json();

    // Sort the results to match the desired order: BTC, ETH, XRP, SOL
    const coinOrder = ['bitcoin', 'ethereum', 'ripple', 'solana'];
    const sortedData = coinOrder.map(id => data.find((coin: any) => coin.id === id)).filter(Boolean);

    const formatted = sortedData.map((coin: any) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      image: coin.image,
      price: coin.current_price,
      price_change_24h: coin.price_change_percentage_24h_in_currency || 0,
      volume_24h: coin.total_volume,
      sparkline_24h: coin.sparkline_in_7d?.price || [],
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
