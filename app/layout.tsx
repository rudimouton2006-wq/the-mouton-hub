import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Takumi Tech | Advanced IT Infrastructure & Sourcing",
  description: "Enterprise-grade IT infrastructure, secure network architecture, and elite custom hardware sourcing protocols by Takumi Tech (Takumitech.co.za).",
  keywords: ["IT Infrastructure", "Takumi Tech", "Network Architecture", "Custom Hardware Sourcing", "Cape Town IT", "Systems Engineering"],
  authors: [{ name: "Lead Engineer" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://takumitech.co.za",
    title: "Takumi Tech | Advanced IT Infrastructure & Sourcing",
    description: "High-performance digital ecosystems, secure network architecture, and global hardware sourcing.",
    siteName: "Takumi Tech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-blue-500/30 selection:text-blue-200">
      <body
        className={`${inter.variable} font-sans bg-[#050505] text-white antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* Global UI Framework */}
        <Navbar />
        
        <div className="flex-grow flex flex-col relative">
          {/* Main Content Viewport */}
          {children}
        </div>

        <Footer />

        {/* Global Aesthetic Overlays */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" aria-hidden="true" />
      </body>
    </html>
  );
}