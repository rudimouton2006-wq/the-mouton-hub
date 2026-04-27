import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Architecture Modules (To be deployed in subsequent steps)
import Navbar from "./components/Navbar";
import NetworkBackground from "./components/NetworkBackground";
import FloatingActions from "./components/FloatingActions";

// Initialize the primary reading font
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Initialize the technical display font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Takumi Tech | Elite IT Infrastructure & Services",
  description: "Masterclass IT solutions, elite network architecture, device optimization, and global hardware sourcing. Engineered for absolute precision.",
  keywords: "IT Support, Network Architecture, Device Optimization, Tech Sourcing, Cape Town IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#050505] text-[#FFFFFF] antialiased min-h-[100svh] flex flex-col relative overflow-x-hidden selection:bg-[#00E5FF] selection:text-[#050505]`}
      >
        
        {/* The Elite Tech Visualization Layer - Z-index: 0 */}
        <NetworkBackground />

        {/* Global Masterclass Navigation - Z-index: 100 */}
        <Navbar />

        {/* Main Content Wrapper - Z-index: 50 */}
        {/* pt-24 prevents the content from sliding under the fixed glassmorphic Navbar */}
        <main className="flex-grow relative z-50 flex flex-col pt-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Global Action Nodes (WhatsApp & Diagnostic Ticketing) - Z-index: 90 */}
        <FloatingActions />
        
      </body>
    </html>
  );
}