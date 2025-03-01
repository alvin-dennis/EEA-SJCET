"use client"

import { EVENTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">EEA - Events</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-xl overflow-hidden hover:scale-[1.02] transition-all aspect-[4/3]"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 p-4 flex flex-col justify-end">
                  <div className="text-black">
                    <span className="inline-block px-2 py-1 bg-primary/80 rounded-md text-sm mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl text-white font-semibold mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-1">
                      {event.description}
                    </p>
                    <p className="text-sm font-medium text-primary-foreground">
                      {event.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex justify-center">
            <Link href="/">
              <Button size="lg" className="items-center flex cursor-pointer">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default EventsPage;
