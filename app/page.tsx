"use client";

import { useEffect } from "react";
import ClientLayout from "@/components/client-layout";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import VisionMission from "@/components/vision-mission";
import EventsSection from "@/components/events";
import ExecomSection from "@/components/execom";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = target.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <ClientLayout>
      <main className="min-h-screen scroll-smooth">
        <HeroSection />
        <AboutSection />
        <VisionMission />
        <EventsSection />
        <ExecomSection />
        <Footer />
      </main>
    </ClientLayout>
  );
}
