import HeroSection from "@/components/HeroSection";
import TheorySection from "@/components/TheorySection";
import NatureSection from "@/components/NatureSection";
import ApplicationSection from "@/components/ApplicationSection";
import ChatbotSection from "@/components/ChatbotSection";
import ConclusionSection from "@/components/ConclusionSection";
import DotNavigation from "@/components/DotNavigation";

export default function Home() {
  return (
    <main className="bg-gradient-main min-h-screen">
      <DotNavigation />
      <HeroSection />
      <TheorySection />
      <NatureSection />
      <ApplicationSection />
      <ChatbotSection />
      <ConclusionSection />
    </main>
  );
}

