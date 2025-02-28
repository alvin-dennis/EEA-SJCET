"use client";

import { EXECOM_MEMBERS } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LinkedinIcon, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface SocialLinks {
  linkedin?: string;
}

interface ExecomMember {
  name: string;
  position: string;
  image: string;
  socialLinks: SocialLinks;
}

export default function PastExecom() {
  const [selectedYear, setSelectedYear] = useState("2022-23");
  const [isMounted, setIsMounted] = useState(false);

  const years = ["2022-23", "2021-22", "2020-21"];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Previous EEA Execoms
      </h1>

      <div className="w-[200px] mx-auto mb-8">
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger>
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="py-8 px-4 mx-auto max-w-[--breakpoint-xl] text-center lg:py-16 lg:px-6">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {EXECOM_MEMBERS.map((member: ExecomMember, index: number) => (
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
        <Link href="/">
          <Button size="lg" className="items-center flex">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
