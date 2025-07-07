import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/shared/Footer";
import AOSWrapper from "@/components/providers/AOSWrapper";

export const metadata: Metadata = {
  title: "DHS Exchange",
  description: "We Value Your Trust!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AOSWrapper>{children}</AOSWrapper>
        <Footer />
      </body>
    </html>
  );
}
