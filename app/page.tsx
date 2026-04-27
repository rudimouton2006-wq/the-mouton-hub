"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Server } from "lucide-react";

export default function HomePage() {
  // ---------------------------------------------------------
  // THE BUFFER/LOAD-IN ANIMATION ENGINE
  // ---------------------------------------------------------
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const bufferVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(10px)" 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    // overflow-x-hidden added here as the ultimate failsafe against horizontal scrolling
    <div className="w-full flex flex-col items-center justify-start z-10 pb-32 overflow-x-hidden">
      
      {/* --------------------------------------------------------- */}
      {/* HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6">
        
        {/* Emissive Background Glows (Now Responsively Scaled for Mobile UI) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#00E5FF]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#2563EB]/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center w-full max-w-4xl"
        >
          {/* Status Badge */}
          <motion.div variants={bufferVariants} className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 rounded-full bg-white/5 border border-white/10 mb-8 sm:mb-10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-gray-300 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              Systems Online & Ready
            </span>
          </motion.div>

          {/* Masterclass Headline */}
          <motion.h1 variants={bufferVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 text-white w-full">
            Uncompromising <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB] drop-shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              IT Infrastructure.
            </span>
          </motion.h1>

          {/* Premium Copywriting */}
          <motion.p variants={bufferVariants} className="max-w-2xl text-sm sm:text-base md:text-lg text-[#A1A1AA] mb-10 md:mb-12 leading-relaxed font-medium px-2">
            We are <span className="text-white font-bold tracking-wide">Takumi Tech</span>. We engineer state-of-the-art digital environments, from zero-latency network deployments to masterclass device optimization. Precision-crafted for clients who demand the absolute best.
          </motion.p>

          {/* Primary Action Vectors */}
          <motion.div variants={bufferVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
            <Link 
              href="/ticket" 
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#00E5FF] text-[#050505] font-black uppercase tracking-widest text-xs sm:text-sm rounded-lg overflow-hidden transition-all hover:bg-[#00E5FF]/90 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] w-full sm:w-auto"
            >
              Log a Ticket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/schedule" 
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Explore Support
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* BRAND TRUST & CAPABILITIES TEASER */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 border-t border-white/10 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 md:mb-6">
              Elite Technical <br className="hidden md:block" /> Capabilities
            </h2>
            <p className="text-[#A1A1AA] text-sm md:text-base font-medium leading-relaxed">
              Stop settling for temporary fixes. We provide permanent, architecturally sound IT solutions. From resolving critical hardware failures to building bespoke web environments, our operational spectrum covers every facet of modern technology.
            </p>
          </div>
          <Link 
            href="/services" 
            className="shrink-0 group flex items-center gap-2 md:gap-3 text-[10px] sm:text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-widest hover:text-white transition-colors"
          >
            Check Out Our Services <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Feature Teaser Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
          
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center mb-5 md:mb-6">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#00E5FF]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-wide">Rapid Diagnostics</h3>
            <p className="text-[#A1A1AA] text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
              We identify and eliminate system anomalies with surgical precision, minimizing downtime and restoring peak performance.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-5 md:mb-6">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#2563EB]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-wide">Absolute Security</h3>
            <p className="text-[#A1A1AA] text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
              Your network is your perimeter. We harden infrastructure to protect critical data payloads from modern threat vectors.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col group sm:col-span-2 md:col-span-1">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-5 md:mb-6">
              <Server className="w-5 h-5 md:w-6 md:h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-wide">Hardware Mastery</h3>
            <p className="text-[#A1A1AA] text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
              We don't just repair devices; we optimize them to exceed factory specifications, ensuring absolute hardware longevity.
            </p>
          </div>

        </div>

      </section>
      
    </div>
  );
}