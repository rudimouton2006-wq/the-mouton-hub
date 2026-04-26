import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Mouton Hub | Advanced IT & Procurement",
  description: "Enterprise-grade hardware sourcing, advanced network architecture, and diagnostic ticketing. Engineered in Cape Town by Rudi Mouton.",
  keywords: ["IT support", "Hardware sourcing", "Network architecture", "Cape Town IT", "Diagnostic ticketing"],
  themeColor: "#050505",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#050505] text-white antialiased min-h-[100dvh] flex flex-col selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden`}
      >
        {/* Global Fixed Navigation 
          Z-index is strictly managed inside the Navbar component (z-[100])
        */}
        <Navbar />

        {/* Main Content Wrapper 
          flex-grow ensures it takes up all remaining space, pushing the footer to the bottom.
          pt-24 (6rem) guarantees content will never slide under the fixed 5rem Navbar.
        */}
        <main className="flex-grow w-full flex flex-col relative z-10 pt-24">
          {children}
        </main>

        {/* Global Footer
          Z-index is strictly managed inside the Footer component (z-[50])
        */}
        <Footer />
        
      </body>
    </html>
  );
}