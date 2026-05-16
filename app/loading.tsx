"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh] px-4 relative z-10 bg-transparent">
      
      {/* --------------------------------------------------------- */}
      {/* BACKGROUND AMBIENT GLOW */}
      {/* --------------------------------------------------------- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#00E5FF]/10 to-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="flex flex-col items-center gap-10 relative z-10">
        
        {/* Core Icon Matrix */}
        <div className="relative flex items-center justify-center">
          
          {/* Hardware-Accelerated Ripple Effect (Zero Lag) */}
          <motion.div 
            animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-[2rem] border border-[#00E5FF]/50"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
            className="absolute inset-0 rounded-[2rem] border border-[#00E5FF]/50"
          />

          {/* Center Glassmorphic Block */}
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#080B12]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,229,255,0.15),0_20px_40px_rgba(0,0,0,0.5)] relative z-10">
            <Terminal className="w-8 h-8 md:w-10 md:h-10 text-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
          </div>
          
        </div>
        
        {/* Loading Text & Dots */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] md:text-xs font-mono text-[#00E5FF] uppercase tracking-[0.3em] font-bold drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]">
            Loading
          </span>
          
          {/* Buttery Smooth Loading Dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}