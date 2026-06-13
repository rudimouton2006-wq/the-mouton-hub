"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Terminal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

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
          className="relative flex items-center justify-center w-12 h-12 bg-[#0A0D14] hover:bg-[#00E5FF]/10 border border-white/10 hover:border-[#00E5FF]/50 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
        >
          <Terminal className="w-5 h-5 text-gray-400 group-hover:text-[#00E5FF] transition-colors duration-300 relative z-10" />
        </Link>
        
        {/* Tooltip */}
        <div className="absolute right-[120%] px-4 py-2.5 bg-[#0A0D14] text-white text-xs font-bold tracking-wider uppercase rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl transform translate-x-2 group-hover:translate-x-0">
          Log a Ticket
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* EXPANDABLE WHATSAPP MENU */}
      {/* --------------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 pointer-events-auto w-max"
          >
            {/* Option 1: Rudi */}
            <Link 
              href="https://wa.me/27818281861"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-3 bg-[#0A0D14] border border-white/10 hover:border-[#25D366]/50 rounded-2xl shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.15)]"
            >
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-white">WhatsApp Rudi</span>
                <span className="text-xs text-gray-500 font-medium mt-0.5">Tech & Hardware</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
            </Link>

            {/* Option 2: Alex */}
            <Link 
              href="https://wa.me/27614955695"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-3 bg-[#0A0D14] border border-white/10 hover:border-[#25D366]/50 rounded-2xl shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.15)]"
            >
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-white">WhatsApp Alex</span>
                <span className="text-xs text-gray-500 font-medium mt-0.5">General Support</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --------------------------------------------------------- */}
      {/* WHATSAPP TOGGLE BUTTON */}
      {/* --------------------------------------------------------- */}
      <div className="pointer-events-auto relative group flex items-center justify-center">
        
        {/* Continuous Pulse Ring (Stops when open) */}
        {!isOpen && (
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#25D366] rounded-full z-0"
          />
        )}

        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle WhatsApp Options"
          className={`relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg ${
            isOpen 
              ? "bg-[#0A0D14] border border-white/10 hover:bg-white/10 text-white" 
              : "bg-[#25D366] hover:bg-[#1EBE5A] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
          }`}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 relative z-10" />
            ) : (
              <MessageCircle className="w-7 h-7 relative z-10 drop-shadow-md" />
            )}
          </motion.div>
        </button>
        
        {/* Tooltip (Hides when menu is open) */}
        {!isOpen && (
          <div className="absolute right-[120%] px-4 py-2.5 bg-[#0A0D14] text-white text-xs font-bold tracking-wider uppercase rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl transform translate-x-2 group-hover:translate-x-0 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366]" /> Chat With Us
          </div>
        )}
      </div>

    </motion.div>
  );
}