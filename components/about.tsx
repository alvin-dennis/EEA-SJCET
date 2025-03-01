"use client";

import { ABOUT_CONTENT } from "@/lib/constants";
import { Zap, Building2, Lightbulb, Rocket } from "lucide-react";

const iconMap = {
  Zap: Zap,
  Building2: Building2,
  Lightbulb: Lightbulb,
  Rocket: Rocket,
};

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-draw-lines"
        >
          <title>Circuit lines animation</title>
          <path
            className="footer-circuit"
            d="M0,50 Q150,150 300,50 T600,50 T900,50 T1200,50 T1500,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
          />
          <path
            className="footer-circuit"
            d="M100,0 Q200,150 100,300 T300,600 T100,900 T300,1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="footer-circuit"
            d="M1000,0 Q900,150 1000,300 T800,600 T1000,900 T800,1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            {ABOUT_CONTENT.title}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CONTENT.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-lg p-6 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 dark:bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {IconComponent && (
                    <IconComponent className="text-primary h-6 w-6" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
