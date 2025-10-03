import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch only the specific coins we need for the cards
    const coinIds = ['bitcoin', 'ethereum', 'litecoin', 'binancecoin'];
    
    const res = await fetch(
      `https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(',')}&order=market_cap_desc&per_page=4&page=1&sparkline=true&price_change_percentage=7d`,
      {
        headers: {
          Accept: 'application/json',
          'x-cg-pro-api-key': process.env.COINGECKO_API_KEY!,
        },
        next: { revalidate: 60 }, // Cache for 1 minute
      },
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error('CoinGecko API error:', errorText);
      return NextResponse.json([], { status: 200 });
    }

    const data = await res.json();

    const formatted = data.map((coin: any) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      current_price: coin.current_price,
      price_change_percentage_7d: coin.price_change_percentage_7d_in_currency,
      sparkline_7d: coin.sparkline_in_7d?.price || [],
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
