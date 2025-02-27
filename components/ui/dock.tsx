"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Info, Calendar, Users, Mail, Sun, Moon } from "lucide-react";
import EESALOGO from "@/assets/EESA.webp";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export function Dock() {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconMap: Record<string, JSX.Element> = {
    Home: (
      <div className="w-6 h-6 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
          <Image
            src={EESALOGO}
            alt="EESA logo"
            className="w-full h-full object-contain"
            width={20}
            height={20}
          />
        </div>
      </div>
    ),
    About: (
      <div className="w-6 h-6 flex items-center justify-center">
        <Info className="w-5 h-5" />
      </div>
    ),
    Events: (
      <div className="w-6 h-6 flex items-center justify-center">
        <Calendar className="w-5 h-5" />
      </div>
    ),
    Execom: (
      <div className="w-6 h-6 flex items-center justify-center">
        <Users className="w-5 h-5" />
      </div>
    ),
    Contact: (
      <div className="w-6 h-6 flex items-center justify-center">
        <Mail className="w-5 h-5" />
      </div>
    ),
  };

  return (
    <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md sm:w-auto">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 bg-background/80 backdrop-blur-md rounded-xl sm:rounded-2xl border">
        {NAV_LINKS.map((item) => (
          <DockItem
            key={item.href}
            href={item.href}
            icon={iconMap[item.label]}
            label={item.label}
          />
        ))}
        {/* <button
          type="button"
          className="p-1.5 sm:p-2 hover:bg-muted rounded-lg sm:rounded-xl"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          suppressHydrationWarning
        >
          {mounted && (theme === "dark" ? (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
          ))}
        </button> */}
      </div>
    </div>
  );
}

function DockItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link href={href} aria-label={label}>
      <div className="p-1.5 sm:p-2 hover:bg-muted rounded-lg sm:rounded-xl group relative">
        <div className="w-5 h-5 sm:w-6 sm:h-6">{icon}</div>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
          {label}
        </span>
      </div>
    </Link>
  );
}
