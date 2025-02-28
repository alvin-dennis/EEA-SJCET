"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EEALOGO from "@/assets/EEA.webp";
import { Sparkles } from "@/components/ui/sparkles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 px-4">
            <div className="relative w-32 h-32 rounded-full bg-white backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 animate-pulse bg-primary/20 rounded-full blur-xl" />
              <Image
                src={EEALOGO}
                alt="EEA logo"
                width={96}
                height={96}
                className="relative z-10 object-contain p-2"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400 px-4">
            <span className="inline-block">Electrical and</span>{" "}
            <span className="inline-block">Electronics Association</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 px-4">
            Empowering future electrical engineers at St. Joseph&apos;s College
            of Engineering and Technology through innovation, knowledge, and
            community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <InteractiveHoverButton className="group">
              Explore Events
            </InteractiveHoverButton>
            <Button size="lg" variant="outline">
              Join Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 [mask-image:radial-gradient(100%_50%,white,transparent)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] opacity-40" />
          <Sparkles
            density={1800}
            speed={1.2}
            color="#48b6ff"
            direction="top"
            className="absolute inset-x-0 bottom-0 h-full w-full  "
          />
        </div>
      </div>
    </section>
  );
}
