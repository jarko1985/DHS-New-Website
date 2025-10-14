// Blog post interface
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  category: string;
  image: string;
  featured?: boolean;
}

// Dummy blog data - single source of truth
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Bitcoin Reaches New All-Time High: What This Means for Investors",
    description: "Bitcoin has surged to unprecedented levels, breaking through previous resistance points and setting new records in the cryptocurrency market.",
    publishDate: "15 Jan 2025",
    category: "bitcoin",
    image: "/images/blogs/blog1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Ethereum 2.0 Staking Rewards: A Complete Guide",
    description: "Learn about the latest updates to Ethereum's staking mechanism and how to maximize your rewards in the new proof-of-stake system.",
    publishDate: "14 Jan 2025",
    category: "ethereum",
    image: "/images/blogs/blog2.jpg"
  },
  {
    id: 3,
    title: "Market Analysis: Bull vs Bear Market Indicators",
    description: "Understanding the key technical and fundamental indicators that signal market direction in the cryptocurrency space.",
    publishDate: "13 Jan 2025",
    category: "market-trends",
    image: "/images/blogs/blog3.jpg"
  },
  {
    id: 4,
    title: "Risk Management Strategies for Crypto Trading",
    description: "Essential risk management techniques every cryptocurrency trader should implement to protect their portfolio.",
    publishDate: "12 Jan 2025",
    category: "risk-management",
    image: "/images/blogs/blog4.jpg"
  },
  {
    id: 5,
    title: "Technical Indicators: RSI, MACD, and Bollinger Bands",
    description: "A comprehensive guide to the most effective technical indicators for cryptocurrency trading and analysis.",
    publishDate: "11 Jan 2025",
    category: "technical-indicators",
    image: "/images/blogs/blog5.jpg" 
  },
  {
    id: 6,
    title: "New Cryptocurrency Regulations: Impact on Global Markets",
    description: "Recent regulatory developments and their potential effects on cryptocurrency adoption and market dynamics.",
    publishDate: "10 Jan 2025",
    category: "crypto-regulations",
    image: "/images/blogs/blog6.jpg"
  },
  {
    id: 7,
    title: "Portfolio Diversification: Beyond Bitcoin and Ethereum",
    description: "Exploring alternative cryptocurrencies and investment strategies for building a well-diversified crypto portfolio.",
    publishDate: "9 Jan 2025",
    category: "portfolio-diversification",
    image: "/images/blogs/blog7.jpg"
  },
  {
    id: 8,
    title: "Bitcoin Mining Difficulty Adjustment: What Traders Need to Know",
    description: "Understanding how Bitcoin's mining difficulty adjustments affect network security and market dynamics.",
    publishDate: "8 Jan 2025",
    category: "bitcoin",
    image: "/images/blogs/blog8.jpg"
  },
  {
    id: 9,
    title: "Ethereum Gas Fees: Optimization Strategies for DeFi Users",
    description: "Learn how to minimize transaction costs and optimize your DeFi interactions on the Ethereum network.",
    publishDate: "7 Jan 2025",
    category: "ethereum",
    image: "/images/blogs/blog9.jpg"
  },
  {
    id: 10,
    title: "Market Sentiment Analysis: Fear and Greed Index Explained",
    description: "How to use market sentiment indicators to make informed trading decisions in volatile cryptocurrency markets.",
    publishDate: "6 Jan 2025",
    category: "market-trends",
    image: "/images/blogs/blog10.jpg"
  },
  {
    id: 11,
    title: "Advanced Risk Management: Position Sizing and Stop Losses",
    description: "Master the art of position sizing and stop-loss strategies to protect your capital in high-risk crypto markets.",
    publishDate: "5 Jan 2025",
    category: "risk-management",
    image: "/images/blogs/blog11.jpg"
  },
  {
    id: 12,
    title: "Altcoin Analysis: Finding the Next Big Opportunity",
    description: "Research methodologies and analysis techniques for identifying promising altcoin investments before they explode.",
    publishDate: "4 Jan 2025",
    category: "portfolio-diversification",
    image: "/images/blogs/blog12.jpg"
  }
];
