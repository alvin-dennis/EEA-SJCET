"use client";

import { useState, useEffect } from "react";
import { EXECOM_MEMBERS } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Loader from "@/components/loader";
import dynamic from "next/dynamic";
import Image from "next/image";

const LinkedinIcon = dynamic(
  () => import("lucide-react").then((mod) => mod.Linkedin),
  {
    ssr: false,
  }
);

export default function ExecomPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        <main className="min-h-screen py-12">
          <div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-(--breakpoint-sm) lg:mb-16">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                EEA Execom 2024 - 2025
              </h1>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                The team leading EESA-SJCET forward
              </p>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {EXECOM_MEMBERS.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center text-gray-500 dark:text-gray-400 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      className="mx-auto mb-4 w-36 h-36 rounded-full transform transition-transform duration-300 group-hover:scale-110"
                      src={member.image}
                      alt={`${member.name} pic`}
                      width={144}
                      height={144}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                  </div>
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mb-2">{member.position}</p>
                    <ul className="flex justify-center mt-4 space-x-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {isMounted && member.socialLinks.linkedin && (
                        <li>
                          <a
                            href={member.socialLinks.linkedin}
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkedinIcon className="w-6 h-6" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12 flex justify-center">
            <Link href="/execom/previous">
              <Button size="lg" className="items-center flex cursor-pointer">
                View Previous Execoms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
}
