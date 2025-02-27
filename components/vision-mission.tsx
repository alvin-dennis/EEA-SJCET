"use client";

import { VISION_MISSION } from "@/lib/constants";
import { Lightbulb, Target } from "lucide-react";
import { ScrollBaseAnimation } from "@/components/ui/text-marquee";

export default function VisionMission() {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/30 to-background/50 backdrop-blur-lg z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            Vision & Mission
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-950/10 border border-white/20 dark:border-gray-800/20 rounded-lg p-8 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-all duration-500 group-hover:scale-125" />
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 dark:bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">
                {VISION_MISSION.vision.title}
              </h3>
            </div>
            <p className="text-muted-foreground relative z-10">
              {VISION_MISSION.vision.description}
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-950/10 border border-white/20 dark:border-gray-800/20 rounded-lg p-8 shadow-lg">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full transition-all duration-500 group-hover:scale-125" />
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 dark:bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">
                {VISION_MISSION.mission.title}
              </h3>
            </div>
            <ul className="text-muted-foreground relative z-10 list-disc pl-5 space-y-2">
              {VISION_MISSION.mission.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VISION_MISSION.values.map((value) => (
              <div
                key={value.title}
                className="value-card bg-card border border-border rounded-lg p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[500px] grid place-content-center">
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname="font-regular tracking-[-0.07em] leading-[90%] py-4"
        >
          Department of Electrical and Electronics Engineering
        </ScrollBaseAnimation>

        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname="font-regular tracking-[-0.07em] leading-[90%]"
        >
          Electrical and Electronics Association
        </ScrollBaseAnimation>
      </div>
    </section>
  );
}
