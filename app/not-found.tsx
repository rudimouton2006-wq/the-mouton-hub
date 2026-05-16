"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ServerCrash } from "lucide-react";

// ---------------------------------------------------------
// ANIMATION VARIANTS
// ---------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)", scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function NotFound() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden selection:bg-red-500/30 selection:text-white bg-transparent">
      
      {/* --------------------------------------------------------- */}
      {/* INSANELY BEAUTIFUL AMBIENT BACKGROUND (WITH EDGE MASKING) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
          {/* Dynamic Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Breathing Warning Orbs (Red & Cyan) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1], 
              opacity: [0.1, 0.15, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-red-600 to-transparent rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.05, 0.1, 0.05],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-bl from-[#00E5FF] to-transparent rounded-full blur-[130px] mix-blend-screen" 
          />
          
          {/* Base Noise Texture for Premium Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0" />
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* 404 ERROR CARD */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl mx-auto bg-[#080B12]/80 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center border border-red-500/20 relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:border-red-500/40 transition-colors duration-700"
      >
        {/* Subtle internal red glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent pointer-events-none rounded-[2.5rem]" />

        {/* Dynamic Status Indicator */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 mb-10 shadow-[0_0_15px_rgba(239,68,68,0.1)] relative z-10">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#EF4444]"></span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-red-400 tracking-[0.2em] uppercase font-bold">Status: 404 Error</span>
        </motion.div>

        {/* Core Error Iconography */}
        <motion.div variants={itemVariants} className="relative mb-10 z-10">
          <div className="w-24 h-24 bg-[#030508] border border-red-500/30 rounded-[2rem] flex items-center justify-center shadow-[inset_0_0_30px_rgba(239,68,68,0.15)] relative z-10">
            <ServerCrash className="w-10 h-10 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
          </div>
          {/* Hardware Failure Ring */}
          <div className="absolute inset-0 border border-red-500/40 rounded-[2rem] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-white z-10">
          Page Not <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Found</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium max-w-md mx-auto mb-12 z-10">
          We couldn't find the page you were looking for. It might have been moved, deleted, or you may have mistyped the web address.
        </motion.p>

        {/* Action Vector */}
        <motion.div variants={itemVariants} className="z-10 w-full sm:w-auto">
          <Link 
            href="/" 
            className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#030508] font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-gray-200 transition-all duration-300 w-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </Link>
        </motion.div>

      </motion.section>
    </main>
  );
}