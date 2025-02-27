"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import VisionMission from "@/components/vision-mission";
import EventsSection from "@/components/events";
import ExecomSection from "@/components/execom";
import Footer from "@/components/footer";
import Loader from "@/components/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <EventsSection />
      <ExecomSection />
      <Footer />
    </main>
  );
}
