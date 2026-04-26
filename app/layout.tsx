import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from './components/Navbar'; 
import VisualEffects from './components/VisualEffects';
import ScrollTools from './components/ScrollTools';
import NetworkBackground from './components/NetworkBackground';
import Footer from './components/Footer';
import { MessageCircle, Wrench } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Mouton Hub | System Diagnostics',
  description: 'Academic-Synced IT Diagnostics and Engineering Solutions',
};

// THE 10000% MOBILE FIX: Locks the scale to prevent iOS auto-zooming on inputs
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased pb-20 md:pb-0 relative min-h-screen flex flex-col overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
        
        {/* Visual Engine Stack */}
        <VisualEffects />
        <ScrollTools />
        <NetworkBackground />

        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex-grow flex flex-col relative z-10 animate-in fade-in duration-1000 ease-in-out">
          {children}
        </div>

        {/* Global Footer */}
        <Footer /> 

        {/* --- FLOATING MOBILE ACTION BAR --- */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-2xl border-t border-white/10 p-4 z-50 flex gap-3 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
          <a 
            href="https://wa.me/27818281861" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] rounded-xl flex items-center justify-center gap-2 py-3.5 font-black text-xs uppercase tracking-widest transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <Link 
            href="/contact" 
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center gap-2 py-3.5 font-black text-xs uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <Wrench className="w-4 h-4" /> Log Ticket
          </Link>
        </div>

      </body>
    </html>
  );
}