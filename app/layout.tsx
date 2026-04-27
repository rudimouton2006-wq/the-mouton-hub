import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VisualEffects from "./components/VisualEffects";
import ScrollTools from "./components/ScrollTools";
import WhatsAppButton from "./components/WhatsAppButton";
import NetworkBackground from "./components/NetworkBackground";

// Initialize the premium Inter font globally
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Ensures text is visible during font load
});

export const metadata: Metadata = {
  title: "Takumi Tech | Enterprise IT Infrastructure",
  description: "Enterprise-grade IT infrastructure, secure network architecture, and elite global hardware sourcing protocols.",
  keywords: "IT Infrastructure, Network Architecture, Zero-Trust Security, Global Sourcing, Takumi Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased min-h-[100svh] flex flex-col relative overflow-x-hidden`}>
        
        {/* The Dynamic Node Visualization Layer - Z-index: 0 */}
        <NetworkBackground />
        
        {/* Global Atmospheric Effects (Noise, Vignette) - Z-index: 1 & 2 */}
        <VisualEffects />

        {/* Global Navigation - Locked at Z-index: 100 */}
        <Navbar />

        {/* Main Content Wrapper - Z-index: 50 */}
        {/* pt-24 ensures content never slides under the transparent Navbar */}
        <main className="flex-grow relative z-50 flex flex-col pt-24 pb-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Global Tools - Z-index: 80 & 90 */}
        <ScrollTools />
        <WhatsAppButton />

        {/* Global Footer - Z-index: 50 */}
        <Footer />
        
      </body>
    </html>
  );
}