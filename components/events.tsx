"use client";

import { useRef } from "react";
import Image from "next/image";
import { EVENTS } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventsSection() {
  const sectionRef = useRef(null);

  return (
    <section id="events" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block relative"
          >
            Events
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Discover our exciting lineup of events, workshops, and activities
            designed to enhance your technical knowledge and professional
            skills.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="events-swiper"
        >
          {EVENTS.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="event-card bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="event-image absolute inset-0 transition-transform duration-300">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="event-overlay absolute inset-0 bg-black opacity-30 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    {event.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <Button size="lg" className="cursor-pointer">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
