import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NeonFloatingButton from "@/components/ui/NeonFloatingButton";
import NeonParticles from "@/components/ui/NeonParticles";
import NavigationEvents from "@/components/layout/NavigationEvents";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salim Skander | Portfolio",
  description: "Portfolio de Salim Skander, développeur full stack & mobile",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/ma_tete.jpg', type: 'image/jpeg' }
    ],
    apple: { url: '/ma_tete.jpg', type: 'image/jpeg' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NeonParticles count={25} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <NeonFloatingButton />
        <NavigationEvents />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
