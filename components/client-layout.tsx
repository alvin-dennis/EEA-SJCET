"use client";

import { Navbar } from "@/components/navbar";
import { Dock } from "@/components/ui/dock";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isDesktop && <Navbar />}
      {children}
      {!isDesktop && <Dock />}
    </>
  );
}
