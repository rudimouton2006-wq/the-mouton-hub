"use client";

import Link from "next/link";
import { MessageCircle, Terminal } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-4 items-end">
      
      {/* --------------------------------------------------------- */}
      {/* NODE 1: WHATSAPP DIRECT COMM LINK */}
      {/* --------------------------------------------------------- */}
      <Link 
        href="https://wa.me/27818281861"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Initialize Secure WhatsApp Comm Link"
        className="relative group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#1EBE5A] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10" />
        
        <span className="absolute right-14 md:right-16 px-3 py-2 bg-[#050505]/90 backdrop-blur-md text-[#00E5FF] text-[10px] font-mono font-bold tracking-[0.2em] uppercase rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl transform translate-x-2 group-hover:translate-x-0">
          Initialize Comms
        </span>
      </Link>

      {/* --------------------------------------------------------- */}
      {/* NODE 2: DIAGNOSTIC TICKETING */}
      {/* --------------------------------------------------------- */}
      <Link 
        href="/ticket"
        aria-label="Log Diagnostic Ticket"
        className="relative group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#0A0A0A] hover:bg-white/10 border border-white/10 hover:border-[#00E5FF]/50 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-[#00E5FF] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        <Terminal className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#00E5FF] transition-colors duration-300 relative z-10" />
        
        <span className="absolute right-14 md:right-16 px-3 py-2 bg-[#050505]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-[0.2em] uppercase rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl transform translate-x-2 group-hover:translate-x-0">
          Log Ticket
        </span>
      </Link>

    </div>
  );
}