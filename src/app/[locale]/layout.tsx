import type { Metadata } from "next";
import "./globals.css";
import AOSWrapper from "@/components/providers/AOSWrapper";
import Footer from "@/components/shared/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CookieConsent } from "@/components/cookies/CookieConsent";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "DHS Exchange",
  description: "We Value Your Trust!",
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
          <Providers>
            <AOSWrapper>
              {children}
              <CookieConsent />
              <Toaster />
            </AOSWrapper>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
