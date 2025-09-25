import Screener from "@/components/custom/Screener";
import CryptoConverter from "@/components/custom/CryptoConverter";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/home/HeroSection";
import WorldMapSection from "@/components/home/WorldMapSection";
import CalculatorSection from "@/components/home/CalculatorSection";
import HomeFaqs from "@/components/home/HomeFaqs";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-whale">
      <HeroSection />
      <Screener />
      <WorldMapSection />
      <HomeFaqs />
      <CalculatorSection />
    </main>
  );
}
