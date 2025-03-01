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
  metadataBase: new URL("https://eea.sjcetpalai.ac.in"),
  title: {
    default: "EEA - SJCET | Electrical and Electronics Association",
    template: "%s | EEA SJCET",
  },
  description:
    "Official website of Electrical and Electronics Association at St. Joseph's College of Engineering and Technology",
  keywords: [
    "EEA",
    "SJCET",
    "Electrical Engineering",
    "Electronics Engineering",
    "Student Association",
    "Kerala",
  ],
  authors: [{ name: "EEA SJCET" }],
  creator: "Alvin Dennis",
  publisher: "St. Joseph's College of Engineering and Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eea.sjcetpalai.ac.in",
    title: "EEA - SJCET",
    description:
      "Official website of Electrical and Electronics Association at SJCET",
    siteName: "EEA SJCET",
  },
  twitter: {
    card: "summary_large_image",
    title: "EEA - SJCET",
    description:
      "Official website of Electrical and Electronics Association at SJCET",
  },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
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
