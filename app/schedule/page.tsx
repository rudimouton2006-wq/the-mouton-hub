"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { MonitorPlay, PackageOpen, Map as MapIcon, ArrowRight, Download, ShieldAlert, MapPin } from "lucide-react";

// ---------------------------------------------------------
// HARDWARE-ACCELERATED ANIMATION VARIANTS
// ---------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function SchedulePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 relative selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508] overflow-x-hidden">
      
      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND (ZERO CPU USAGE) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00E5FF]/5 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#A855F7]/5 to-transparent blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]" />
      </div>

      {/* --------------------------------------------------------- */}
      {/* SUPPORT HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto text-center px-4 mb-24 z-10 will-change-transform"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4 opacity-70" />
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase font-bold">
            Deployment Protocols
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-70" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase mb-8 leading-[0.9] text-white">
          Support <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6]">
            Avenues
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto mt-8 px-4">
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
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-40 z-10 will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* NODE 1: REMOTE SUPPORT */}
          <motion.div 
            variants={itemVariants} 
            className="relative group flex flex-col h-full bg-[#05080F] border border-white/5 rounded-[2.5rem] p-8 md:p-10 overflow-hidden hover:border-[#00E5FF]/40 transition-all duration-300 shadow-lg transform-gpu hover:-translate-y-2 z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#00E5FF]/20 bg-[#00E5FF]/10 text-[#00E5FF] group-hover:scale-110 transition-transform duration-500 relative z-10">
              <MonitorPlay className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3 relative z-10">Remote Support</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-lg text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest mb-8 w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
              </span>
              ETA: Instantaneous
            </span>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium relative z-10 group-hover:text-gray-300 transition-colors duration-300">
              Immediate system triage. We establish a secure, encrypted connection to your machine to resolve software anomalies, OS errors, and perform driver optimizations without deploying physical assets.
            </p>
            
            <div className="flex flex-col gap-3 pt-6 border-t border-white/5 relative z-10">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-500 rounded-full" /> Initialize AnyDesk Client:
              </span>
              <a href="https://anydesk.com/en/downloads/windows" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-[#080C16] hover:bg-[#00E5FF]/10 border border-white/5 hover:border-[#00E5FF]/30 rounded-xl transition-all duration-300 group/dl">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest group-hover/dl:text-[#00E5FF] transition-colors font-bold">Windows.exe</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] group-hover/dl:-translate-y-1 transition-all duration-300" />
              </a>
              <a href="https://anydesk.com/en/downloads/mac-os" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-[#080C16] hover:bg-[#00E5FF]/10 border border-white/5 hover:border-[#00E5FF]/30 rounded-xl transition-all duration-300 group/dl">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest group-hover/dl:text-[#00E5FF] transition-colors font-bold">MacOS.dmg</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] group-hover/dl:-translate-y-1 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

          {/* NODE 2: DROP-OFF */}
          <motion.div 
            variants={itemVariants} 
            className="relative group flex flex-col h-full bg-[#05080F] border border-white/5 rounded-[2.5rem] p-8 md:p-10 overflow-hidden hover:border-[#A855F7]/40 transition-all duration-300 shadow-lg transform-gpu hover:-translate-y-2 lg:-translate-y-8 z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#A855F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#A855F7]/20 bg-[#A855F7]/10 text-[#A855F7] group-hover:scale-110 transition-transform duration-500 relative z-10">
              <PackageOpen className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3 relative z-10">Hardware Drop-Off</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-lg text-[10px] font-mono text-[#A855F7] uppercase tracking-widest mb-8 w-max">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" /> Status: Strictly Scheduled
            </span>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium relative z-10 group-hover:text-gray-300 transition-colors duration-300">
              For critical hardware failures, thermal repasting, and deep physical repairs. Hand over your physical assets directly to our engineering bay for surgical restoration.
            </p>
            
            <div className="flex flex-col gap-6 pt-6 border-t border-white/5 relative z-10">
              <div className="flex items-start gap-4 bg-[#A855F7]/5 border border-[#A855F7]/20 p-5 rounded-xl">
                <ShieldAlert className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5 animate-pulse" />
                <p className="text-[10px] sm:text-xs font-mono text-gray-400 leading-relaxed uppercase tracking-wider">
                  <strong className="text-white">Security Protocol:</strong> All drop-offs require a pre-logged ticket. Unscheduled arrivals will not be processed to maintain chain-of-custody protocols.
                </p>
              </div>
              <Link href="/ticket?category=dropoff" className="group/btn flex items-center justify-center gap-3 w-full py-4 bg-[#080C16] border border-white/5 hover:border-[#A855F7] hover:bg-[#A855F7]/10 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-colors duration-300">
                Log Arrival Ticket <ArrowRight className="w-4 h-4 text-gray-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* NODE 3: CALL-OUT / SAFARI */}
          <motion.div 
            variants={itemVariants} 
            className="relative group flex flex-col h-full bg-[#05080F] border border-white/5 rounded-[2.5rem] p-8 md:p-10 overflow-hidden hover:border-[#10B981]/40 transition-all duration-300 shadow-lg transform-gpu hover:-translate-y-2 z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981] group-hover:scale-110 transition-transform duration-500 relative z-10">
              <MapIcon className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3 relative z-10">On-Site "Safari"</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg text-[10px] font-mono text-[#10B981] uppercase tracking-widest mb-8 w-max">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> Logistics: Dynamic Radius
            </span>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 flex-grow font-medium relative z-10 group-hover:text-gray-300 transition-colors duration-300">
              We deploy physical engineering assets directly to your location. Ideal for complete network overhauls, server rack installations, and complex smart-home integrations.
            </p>
            
            <div className="flex flex-col gap-6 pt-6 border-t border-white/5 relative z-10">
               <div className="p-5 rounded-xl bg-[#080C16] border border-white/5 group-hover:bg-[#10B981]/5 group-hover:border-[#10B981]/20 transition-colors duration-300">
                  <p className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
                    <span className="text-[#10B981] font-bold block mb-2">Operational Variable:</span>
                    A dynamic call-out/travel fee applies based on geographic distance from our central operational hub.
                  </p>
               </div>
              <Link href="/ticket?category=onsite" className="group/btn flex items-center justify-center gap-3 w-full py-4 bg-[#080C16] border border-white/5 hover:border-[#10B981] hover:bg-[#10B981]/10 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-colors duration-300">
                Request Deployment <ArrowRight className="w-4 h-4 text-gray-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* GEOGRAPHIC OPERATIONAL RADIUS (MAP) */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10 will-change-transform"
      >
        <div className="group rounded-[3rem] p-3 border border-white/5 relative overflow-hidden bg-[#05080F] shadow-xl hover:border-[#00E5FF]/20 transition-all duration-500">
          
          <div className="absolute top-8 left-8 z-20 flex items-center gap-4 bg-[#030508] px-6 py-4 rounded-2xl border border-white/10 shadow-lg pointer-events-none transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20">
              <MapPin className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-black uppercase tracking-widest text-white">Cape Town Region</span>
               <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mt-1">Primary Deployment Zone</span>
            </div>
          </div>

          <div className="w-full h-[450px] md:h-[600px] rounded-[2.5rem] overflow-hidden relative grayscale-[0.8] contrast-125 group-hover:grayscale-[0.2] transition-all duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105886.72661845173!2d18.520268153106346!3d-33.91428581788755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1714486523932!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#030508]/80 via-[#00E5FF]/5 to-transparent pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(3,5,8,1)] pointer-events-none" />
          </div>
        </div>
      </motion.section>

    </div>
  );
}