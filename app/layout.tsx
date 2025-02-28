import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const nura = localFont({
  src: "../public/fonts/Nura-Normal.woff",
  variable: "--font-nura",
});

export const metadata: Metadata = {
  title: "EEA - SJCET | Electrical and Electronics Association",
  description:
    "Official website of Electrical and Electronics Association at St. Joseph's College of Engineering and Technology",
};

const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} ${nura.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
