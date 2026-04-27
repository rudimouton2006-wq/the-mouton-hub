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
    <div className="w-full flex flex-col items-center justify-start z-10 pb-32">
      
      {/* --------------------------------------------------------- */}
      {/* HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6">
        
        {/* Emissive Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div variants={bufferVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-[0.3em] uppercase">
              Systems Online & Ready
            </span>
          </motion.div>

          {/* Masterclass Headline */}
          <motion.h1 variants={bufferVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-white">
            Uncompromising <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB] drop-shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              IT Infrastructure.
            </span>
          </motion.h1>

          {/* Premium Copywriting */}
          <motion.p variants={bufferVariants} className="max-w-2xl text-base md:text-lg text-[#A1A1AA] mb-12 leading-relaxed font-medium">
            We are <span className="text-white font-bold tracking-wide">Takumi Tech</span>. We engineer state-of-the-art digital environments, from zero-latency network deployments to masterclass device optimization. Precision-crafted for clients who demand the absolute best.
          </motion.p>

          {/* Primary Action Vectors */}
          <motion.div variants={bufferVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link 
              href="/ticket" 
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00E5FF] text-[#050505] font-black uppercase tracking-widest text-xs sm:text-sm rounded-lg overflow-hidden transition-all hover:bg-[#00E5FF]/90 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] w-full sm:w-auto"
            >
              Log a Ticket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/schedule" 
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Explore Support Avenues
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* BRAND TRUST & CAPABILITIES TEASER */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 border-t border-white/10 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              Elite Technical <br /> Capabilities
            </h2>
            <p className="text-[#A1A1AA] font-medium leading-relaxed">
              Stop settling for temporary fixes. We provide permanent, architecturally sound IT solutions. From resolving critical hardware failures to building bespoke web environments, our operational spectrum covers every facet of modern technology.
            </p>
          </div>
          <Link 
            href="/services" 
            className="shrink-0 group flex items-center gap-3 text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-widest hover:text-white transition-colors"
          >
            Check Out Our Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Feature Teaser Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col group">
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Rapid Diagnostics</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow">
              We identify and eliminate system anomalies with surgical precision, minimizing downtime and restoring peak performance.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col group">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Absolute Security</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow">
              Your network is your perimeter. We harden infrastructure to protect critical data payloads from modern threat vectors.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col group">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Hardware Mastery</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow">
              We don't just repair devices; we optimize them to exceed factory specifications, ensuring absolute hardware longevity.
            </p>
          </div>

        </div>

      </section>
      
    </div>
  );
}