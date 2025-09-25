import type { Metadata } from "next";
import "./globals.css";
import AOSWrapper from "@/components/providers/AOSWrapper";
import Footer from "@/components/shared/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CookieConsent } from "@/components/cookies/CookieConsent";
import { ClientProviders } from './client-providers'
import { Toaster } from "react-hot-toast";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "DHS Exchange",
  description: "We Value Your Trust!",
  openGraph: {
    title: "DHS - Way to Trade",
    description:
      "Connect to global liquidity pools, trade securely across continents, and experience real-time access to the world's leading digital assets.",
    url: "https://dhs-vert.vercel.app/en",
    type: "website",
    images: [
      {
        url: "https://dhs-vert.vercel.app/images/dhs_logo.png",
        width: 1200,
        height: 630,
        alt: "DHS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DHS - Way to Trade",
    description:
      "Connect to global liquidity pools, trade securely across continents, and experience real-time access to the world's leading digital assets.",
    images: ["https://dhs-vert.vercel.app/images/dhs_logo.png"],
  },
};


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`antialiased`}>
        <NextIntlClientProvider>
          <ClientProviders>
            <AOSWrapper>
              <Header />
              {children}
              <CookieConsent />
              <Toaster />
            </AOSWrapper>
            <Footer />
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
