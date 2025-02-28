"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-2xs"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            <span className="hidden lg:inline font-nura cursor-pointer">
              Electrical and Electronics Association
            </span>
            <span className="lg:hidden">EEA</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-hidden z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={`transform transition-all duration-300 w-6 h-0.5 bg-foreground absolute ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`transform transition-all duration-300 w-6 h-0.5 bg-foreground absolute ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`transform transition-all duration-300 w-6 h-0.5 bg-foreground absolute ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            <Link
              href="#about"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              href="#events"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Events
            </Link>
            <Link
              href="#execom"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Execom
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          className={cn(
            "absolute top-16 right-4 bg-black/95 text-white rounded-lg transform transition-all duration-300 ease-in-out lg:hidden overflow-hidden shadow-xl",
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="py-6 px-6 space-y-6 min-w-[245px] text-center">
            <Link
              href="#about"
              className="block hover:bg-white/10 p-3 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-lg">About</div>
            </Link>
            <Link
              href="#events"
              className="block hover:bg-white/10 p-3 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-lg">Events</div>
            </Link>
            <Link
              href="#execom"
              className="block hover:bg-white/10 p-3 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-lg">Execom</div>
            </Link>
            <Link
              href="#contact"
              className="block hover:bg-white/10 p-3 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-lg">Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
