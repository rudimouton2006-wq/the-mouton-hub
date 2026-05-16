"use client";

import Link from "next/link";
import { MessageCircle, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-4 items-end pointer-events-none"
    >
      
      {/* --------------------------------------------------------- */}
      {/* TICKET QUICK LINK */}
      {/* --------------------------------------------------------- */}
      <div className="pointer-events-auto relative group flex items-center justify-center">
        <Link 
          href="/ticket"
          aria-label="Log a Ticket"
          className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#080B12]/90 backdrop-blur-xl hover:bg-[#00E5FF]/10 border border-white/[0.08] hover:border-[#00E5FF]/50 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
        >
          <Terminal className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#00E5FF] transition-colors duration-300 relative z-10" />
        </Link>
        
        {/* Premium Tooltip */}
        <div className="absolute right-[110%] md:right-[120%] px-4 py-2 bg-[#080B12]/90 backdrop-blur-xl text-white text-[10px] font-mono font-bold tracking-[0.2em] uppercase rounded-lg border border-white/[0.08] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform translate-x-2 group-hover:translate-x-0">
          Log a Ticket
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* WHATSAPP DIRECT LINK (WITH PULSE) */}
      {/* --------------------------------------------------------- */}
      <div className="pointer-events-auto relative group flex items-center justify-center">
        {/* Continuous Pulse Ring */}
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#25D366] rounded-full z-0"
        />

        <Link 
          href="https://wa.me/27818281861"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quick Chat on WhatsApp"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#1EBE5A] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 z-10"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10 drop-shadow-md" />
        </Link>
        
        {/* Premium Tooltip */}
        <div className="absolute right-[110%] md:right-[120%] px-4 py-2 bg-[#080B12]/90 backdrop-blur-xl text-white text-[10px] font-mono font-bold tracking-[0.2em] uppercase rounded-lg border border-white/[0.08] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform translate-x-2 group-hover:translate-x-0 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366]" /> Quick Chat
        </div>
      </div>

    </motion.div>
  );
}