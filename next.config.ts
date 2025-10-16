import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "statuspage.io",
      },
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
      },
    ],
  },
  transpilePackages: [
    'react-phone-number-input',
    'react-flags-select',
    'react-circular-progressbar',
    'react-webcam',
  ],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
