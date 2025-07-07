import Header from "../components/shared/Header";
import HeroSection from "../components/home/HeroSection";
import WorldMapSection from "../components/home/WorldMapSection";
import Screener from "@/components/custom/Screener";
import CryptoConverter from "@/components/custom/CryptoConverter";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-whale">
      <Header />
      <HeroSection />
      <Screener />
      <WorldMapSection />
      <CryptoConverter />
    </main>
  );
}
