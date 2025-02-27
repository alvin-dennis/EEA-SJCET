"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-card text-card-foreground pt-16 relative overflow-hidden"
    >
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">EESA-SJCET</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Empowering electrical engineering students through innovation,
              knowledge, and community at St. Joseph's College of Engineering
              and Technology.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div
              key={column.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${FOOTER_LINKS.indexOf(column) * 100}ms` }}
            >
              <h3 className="font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates on events and
              activities.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EESA-SJCET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
