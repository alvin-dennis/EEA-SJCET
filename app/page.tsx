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
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

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

  const [velocity, setVelocity] = useState(-1);

  useEffect(() => {
    const resetVelocity = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVelocity(-1.5);
      } else if (width < 1024) {
        setVelocity(-1.5);
      } else {
        setVelocity(-1.5);
      }
    };

    resetVelocity();

    window.addEventListener("resize", resetVelocity);

    document.addEventListener("visibilitychange", resetVelocity);

    return () => {
      window.removeEventListener("resize", resetVelocity);
      document.removeEventListener("visibilitychange", resetVelocity);
      setVelocity(-1);
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
      <div className="h-[500px] grid place-content-center w-full overflow-hidden">
        <VelocityScroll
          defaultVelocity={-velocity}
          numRows={1}
          key={`scroll-1-${velocity}`}
          className=" font-nura text-4xl"
        >
          Department of Electrical and Electronics Engineering
        </VelocityScroll>

        <VelocityScroll
          defaultVelocity={velocity}
          numRows={1}
          key={`scroll-2-${velocity}`}
          className=" font-nura text-4xl"
        >
          Electrical and Electronics Association
        </VelocityScroll>
      </div>
      <EventsSection />
      <ExecomSection />
      <Footer />
    </main>
  );
}
