"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MonitorPlay, PackageOpen, Map as MapIcon, ArrowRight, Download, ShieldAlert, MapPin } from "lucide-react";

// ---------------------------------------------------------
// ANIMATION VARIANTS
// ---------------------------------------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

export default function SchedulePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 relative selection:bg-[#00E5FF]/30 selection:text-white bg-transparent">
      
      {/* --------------------------------------------------------- */}
      {/* INSANELY BEAUTIFUL AMBIENT BACKGROUND (WITH EDGE MASKING) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
          {/* Dynamic Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Breathing Aurora Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1], 
              opacity: [0.15, 0.25, 0.15],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00E5FF] to-transparent rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.1, 0.2, 0.1],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#A855F7] to-transparent rounded-full blur-[130px] mix-blend-screen" 
          />
          
          {/* Base Noise Texture for Premium Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0" />
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* SUPPORT HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto text-center px-4 mb-24 z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4 opacity-70 shadow-[0_0_10px_#00E5FF]" />
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.6)] font-bold">
            Deployment Protocols
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-70 shadow-[0_0_10px_#00E5FF]" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase mb-8 leading-[0.9] text-white drop-shadow-2xl">
          Support <br />
          <span className="relative inline-block mt-3">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] opacity-40 blur-2xl rounded-full" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6]">
              Avenues
            </span>
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-[#A1A1AA] text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto mt-8 backdrop-blur-sm bg-[#050505]/30 p-4 rounded-2xl border border-white/[0.02]">
          Time is the ultimate metric. Select your preferred support vector below. From instant remote diagnostics to physical hardware intervention, we operate on your schedule.
        </motion.p>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* TRI-NODE SUPPORT MATRIX */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-40 z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* NODE 1: REMOTE SUPPORT */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group flex flex-col h-full bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-10 overflow-hidden hover:border-[#00E5FF]/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(0,229,255,0.15)] z-10"
          >
            {/* Dynamic Hover Gradient Sweep */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] shadow-[inset_0_0_20px_rgba(0,229,255,0.2),0_0_20px_rgba(0,229,255,0.2)] group-hover:scale-110 transition-transform duration-500 relative z-10">
              <MonitorPlay className="w-8 h-8 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3 relative z-10">Remote Support</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-lg text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest mb-8 w-max shadow-[0_0_15px_rgba(0,229,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
              </span>
              ETA: Instantaneous
            </span>
            
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium relative z-10 group-hover:text-gray-200 transition-colors duration-300">
              Immediate system triage. We establish a secure, encrypted connection to your machine to resolve software anomalies, OS errors, and perform driver optimizations without deploying physical assets.
            </p>
            
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10 relative z-10">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-500 rounded-full" /> Initialize AnyDesk Client:
              </span>
              <a href="https://anydesk.com/en/downloads/windows" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-[#030508]/50 hover:bg-[#00E5FF]/15 border border-white/5 hover:border-[#00E5FF]/50 rounded-xl transition-all duration-300 group/dl hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest group-hover/dl:text-[#00E5FF] transition-colors font-bold">Windows.exe</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] group-hover/dl:-translate-y-1 transition-all duration-300" />
              </a>
              <a href="https://anydesk.com/en/downloads/mac-os" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-[#030508]/50 hover:bg-[#00E5FF]/15 border border-white/5 hover:border-[#00E5FF]/50 rounded-xl transition-all duration-300 group/dl hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest group-hover/dl:text-[#00E5FF] transition-colors font-bold">MacOS.dmg</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] group-hover/dl:-translate-y-1 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

          {/* NODE 2: DROP-OFF */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group flex flex-col h-full bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-10 overflow-hidden hover:border-[#A855F7]/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] lg:-translate-y-8 z-20"
          >
            {/* Dynamic Hover Gradient Sweep */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#A855F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#A855F7]/30 bg-[#A855F7]/10 text-[#A855F7] shadow-[inset_0_0_20px_rgba(168,85,247,0.2),0_0_20px_rgba(168,85,247,0.2)] group-hover:scale-110 transition-transform duration-500 relative z-10">
              <PackageOpen className="w-8 h-8 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3 relative z-10">Hardware Drop-Off</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-lg text-[10px] font-mono text-[#A855F7] uppercase tracking-widest mb-8 w-max shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" /> Status: Strictly Scheduled
            </span>
            
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium relative z-10 group-hover:text-gray-200 transition-colors duration-300">
              For critical hardware failures, thermal repasting, and deep physical repairs. Hand over your physical assets directly to our engineering bay for surgical restoration.
            </p>
            
            <div className="flex flex-col gap-6 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-start gap-4 bg-[#A855F7]/5 border border-[#A855F7]/20 p-5 rounded-xl shadow-[inset_0_0_15px_rgba(168,85,247,0.05)]">
                <ShieldAlert className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5 animate-pulse drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                <p className="text-[10px] sm:text-xs font-mono text-gray-400 leading-relaxed uppercase tracking-wider">
                  <strong className="text-white">Security Protocol:</strong> All drop-offs require a pre-logged ticket. Unscheduled arrivals will not be processed to maintain chain-of-custody protocols.
                </p>
              </div>
              <Link href="/ticket" className="group/btn flex items-center justify-center gap-3 w-full py-4 bg-[#030508]/50 border border-white/10 hover:border-[#A855F7] hover:bg-[#A855F7]/20 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                Log Arrival Ticket <ArrowRight className="w-4 h-4 text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* NODE 3: CALL-OUT / SAFARI */}
          <motion.div 
            variants={cardVariants} 
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group flex flex-col h-full bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-10 overflow-hidden hover:border-[#10B981]/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] z-10"
          >
            {/* Dynamic Hover Gradient Sweep */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] shadow-[inset_0_0_20px_rgba(16,185,129,0.2),0_0_20px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-500 relative z-10">
              <MapIcon className="w-8 h-8 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3 relative z-10">On-Site "Safari"</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg text-[10px] font-mono text-[#10B981] uppercase tracking-widest mb-8 w-max shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Logistics: Dynamic Radius
            </span>
            
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium relative z-10 group-hover:text-gray-200 transition-colors duration-300">
              We deploy physical engineering assets directly to your location. Ideal for complete network overhauls, server rack installations, and complex smart-home integrations.
            </p>
            
            <div className="flex flex-col gap-6 pt-6 border-t border-white/10 relative z-10">
               <div className="p-5 rounded-xl bg-[#030508]/50 border border-white/5 backdrop-blur-sm group-hover:bg-[#10B981]/5 group-hover:border-[#10B981]/20 transition-colors duration-300 shadow-inner">
                  <p className="text-[10px] sm:text-xs font-mono text-gray-300 uppercase tracking-widest leading-relaxed">
                    <span className="text-[#10B981] font-bold block mb-2 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">Operational Variable:</span>
                    A dynamic call-out/travel fee applies based on geographic distance from our central operational hub.
                  </p>
               </div>
              <Link href="/ticket?category=network" className="group/btn flex items-center justify-center gap-3 w-full py-4 bg-[#030508]/50 border border-white/10 hover:border-[#10B981] hover:bg-[#10B981]/20 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Request Deployment <ArrowRight className="w-4 h-4 text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* GEOGRAPHIC OPERATIONAL RADIUS (MAP) */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10"
      >
        <div className="group rounded-[3rem] p-3 border border-white/[0.08] relative overflow-hidden bg-[#080B12]/60 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] hover:border-[#00E5FF]/40 transition-all duration-700 hover:shadow-[0_30px_80px_rgba(0,229,255,0.15)]">
          
          {/* Decorative Header Overlay */}
          <div className="absolute top-8 left-8 z-20 flex items-center gap-4 bg-[#030508]/90 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] pointer-events-none group-hover:border-[#00E5FF]/40 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/30 shadow-[inset_0_0_10px_rgba(0,229,255,0.2)]">
              <MapPin className="w-6 h-6 text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-black uppercase tracking-widest text-white drop-shadow-md">Cape Town Region</span>
               <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mt-1">Primary Deployment Zone</span>
            </div>
          </div>

          {/* Map Frame */}
          <div className="w-full h-[450px] md:h-[600px] rounded-[2.5rem] overflow-hidden relative grayscale-[0.8] contrast-125 group-hover:grayscale-[0.2] transition-all duration-1000">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105886.72661845173!2d18.520268153106346!3d-33.91428581788755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1714486523932!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 scale-[1.02] group-hover:scale-100 transition-transform duration-1000 ease-out"
              />
              {/* Overlaid styling tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#030508]/80 via-[#00E5FF]/5 to-transparent pointer-events-none mix-blend-overlay" />
              {/* Inner shadow to blend edges perfectly into the dark theme */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(3,5,8,1),inset_0_0_30px_rgba(3,5,8,1)] pointer-events-none" />
          </div>
        </div>
      </motion.section>

    </div>
  );
}