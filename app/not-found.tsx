"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Terminal, ShieldAlert } from "lucide-react";

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
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508]">
      
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
      {/* HACKER TERMINAL 404 CARD */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl mx-auto bg-[#0A0D14]/80 backdrop-blur-3xl rounded-[2rem] p-8 md:p-12 flex flex-col border border-red-500/20 relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:border-[#00E5FF]/30 transition-colors duration-700"
      >
        {/* Subtle internal glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 to-transparent pointer-events-none rounded-[2rem]" />

        {/* Dynamic Status Indicator */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 mb-8 shadow-[0_0_15px_rgba(239,68,68,0.1)] relative z-10 w-max">
          <ShieldAlert className="w-4 h-4 text-red-500" />
          <span className="text-[10px] sm:text-xs font-mono text-red-400 tracking-[0.2em] uppercase font-bold">Fatal Vector: 404</span>
        </motion.div>
        
        {/* The Terminal Window */}
        <motion.div variants={itemVariants} className="w-full bg-[#030508] rounded-xl border border-white/10 p-6 font-mono text-left relative overflow-hidden mb-10 shadow-inner z-10">
           {/* Terminal Window Controls */}
           <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
             <div className="w-3 h-3 rounded-full bg-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
             <div className="w-3 h-3 rounded-full bg-green-500/50" />
           </div>
           
           {/* Terminal Output */}
           <div className="flex flex-col gap-3">
             <p className="text-gray-400 text-xs sm:text-sm break-words">
               <span className="text-[#00E5FF] font-bold">root@takumitech</span>:<span className="text-blue-400">~</span>$ ./locate_target_path
             </p>
             <p className="text-red-500 text-xs sm:text-sm font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
               &gt;_ ERROR 404: DIRECTORY NOT FOUND.
             </p>
             <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
               &gt;_ The requested URL path does not exist in the current server cluster. It may have been moved, deleted, or manually mistyped.
             </p>
             <p className="text-[#00E5FF] text-xs sm:text-sm mt-4 flex items-center">
               &gt;_ Awaiting manual reroute command
               <span className="inline-block w-2.5 h-4 bg-[#00E5FF] ml-2 animate-pulse shadow-[0_0_8px_#00E5FF]" />
             </p>
           </div>
        </motion.div>

        {/* Action Vector */}
        <motion.div variants={itemVariants} className="z-10 w-full flex justify-center sm:justify-start">
          <Link 
            href="/" 
            className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#00E5FF] text-[#030508] font-bold uppercase tracking-wider text-sm rounded-2xl shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:bg-[#00cce6] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,229,255,0.4)]"
          >
            <Terminal className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            Reroute to Main Terminal
          </Link>
        </motion.div>

      </motion.section>
    </main>
  );
}