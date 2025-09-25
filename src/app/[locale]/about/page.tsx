import CompanyHistory from "@/components/about/CompanyHistory";
import Hero from "@/components/about/Hero";
import MissionAndVision from "@/components/about/MissionAndVision";
import Roadmap from "@/components/about/RoadMap";
import Team from "@/components/about/Team";

export default function AboutPage() {
  return <div>
    <Hero/>
    <Team/>
    <MissionAndVision/>
    <CompanyHistory/>
    <Roadmap/>
  </div>;
}