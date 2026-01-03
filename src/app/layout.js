import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingContact from "@/components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "BRX Labz | Elite Digital Product Studio",
    template: "%s | BRX Labz"
  },
  description: "BRX Labz is a elite digital studio synthesizing code and design into high-converting experiences. We build websites, apps, and brands that scale.",
  keywords: ["BRX Labz","BRX","BRX Studios","Digital Studio", "Web Development", "UI/UX Design", "Next.js Agency", "React Developer", "Mobile App Development", "Branding", "SaaS Design"],
  authors: [{ name: "BRX Labz" }],
  creator: "BRX Labz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brxlabz.vercel.app",
    title: "BRX Labz | Elite Digital Product Studio",
    description: "Synthesizing code and design into high-converting experiences that scale your business.",
    siteName: "BRX Labz",
    images: [
      {
        url: "/og-image.png", // Ensure you have an OG image in public folder ideally
        width: 1200,
        height: 630,
        alt: "BRX Labz Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRX Labz | Elite Digital Product Studio",
    description: "Synthesizing code and design into high-converting experiences.",
    creator: "@brxlabz",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import PrismaticBurstWrapper from "@/components/PrismaticBurstWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable}  ${geistMono.variable} antialiased selection:bg-black/10 dark`}
      >
        <Preloader />
        <FloatingContact />
        <Navbar />
        <div className="fixed inset-0 -z-20 bg-background" />
        <div className="fixed inset-0 -z-10">
          <PrismaticBurstWrapper
            animationType="rotate3d"
            intensity={6}
            speed={0.35}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            mixBlendMode="lighten"
          />
        </div>
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
