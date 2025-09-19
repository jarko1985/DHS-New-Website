import FeesHero from "@/components/fees/FeesHero";
import FeesSwiper from "@/components/fees/FeesSwiper";
import Notes from "@/components/fees/Notes";

export default function FeesPage() {
  return (
    <main className="bg-blue-whale text-mercury min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-elf-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-positive/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-warning/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <FeesHero />
        <FeesSwiper />
        <Notes />
      </div>
    </main>
  );
}