"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import VisionMission from "@/components/vision-mission";
import Events from "@/components/events";
import Execom from "@/components/execom";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [velocity, setVelocity] = useState(-1);

  useEffect(() => {
    const timer = setTimeout(() => {
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

    const resetVelocity = () => {
      setVelocity(-1.5);
    };

    resetVelocity();
    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("resize", resetVelocity);
    document.addEventListener("visibilitychange", resetVelocity);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("resize", resetVelocity);
      document.removeEventListener("visibilitychange", resetVelocity);
      setVelocity(-1);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="min-h-screen scroll-smooth">
          <Navbar />
          <Hero />
          <About />
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
          <Events />
          <Execom />
          <Footer />
        </main>
      )}
    </>
  );
}
