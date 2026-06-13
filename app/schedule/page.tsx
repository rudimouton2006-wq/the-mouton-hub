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
    <div className="w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-28 z-10 relative selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508] overflow-x-hidden">
      
      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00E5FF]/5 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#A855F7]/5 to-transparent blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]" />
      </div>

      {/* --------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto text-center px-4 sm:px-6 mb-20 z-10 will-change-transform"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A0D14] border border-white/10 mb-8 shadow-sm">
          <span className="text-xs font-mono text-[#00E5FF] tracking-[0.2em] uppercase font-bold">
            How We Help You
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
          Support <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6]">
            Avenues.
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 px-4">
          Select your preferred way to get help below. From instant remote support to on-site visits, we work around your schedule to get you back online fast.
        </motion.p>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* SUPPORT OPTIONS GRID */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-32 z-10 will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          
          {/* OPTION 1: REMOTE SUPPORT */}
          <motion.div 
            variants={itemVariants} 
            className="relative group flex flex-col h-full bg-[#0A0D14] border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-[#00E5FF]/40 transition-all duration-300 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[#00E5FF]/20 bg-[#00E5FF]/10 text-[#00E5FF] group-hover:scale-105 transition-transform duration-500 relative z-10">
              <MonitorPlay className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight text-white mb-3 relative z-10">Remote Support</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-lg text-xs font-bold text-[#00E5FF] uppercase tracking-wider mb-6 w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
              </span>
              Fastest Option
            </span>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow relative z-10">
              Immediate help for software issues, email setups, and slow computers. We securely connect to your screen to fix the problem while you watch.
            </p>
            
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10 relative z-10">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                Download AnyDesk to start:
              </span>
              <a href="https://anydesk.com/en/downloads/windows" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-[#030508] hover:bg-[#00E5FF]/10 border border-white/10 hover:border-[#00E5FF]/40 rounded-2xl transition-all duration-300 group/dl">
                <span className="text-sm font-bold text-gray-300 group-hover/dl:text-[#00E5FF] transition-colors">Windows Download</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] group-hover/dl:-translate-y-1 transition-all duration-300" />
              </a>
              <a href="https://anydesk.com/en/downloads/mac-os" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-[#030508] hover:bg-[#00E5FF]/10 border border-white/10 hover:border-[#00E5FF]/40 rounded-2xl transition-all duration-300 group/dl">
                <span className="text-sm font-bold text-gray-300 group-hover/dl:text-[#00E5FF] transition-colors">Mac Download</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] group-hover/dl:-translate-y-1 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

          {/* OPTION 2: DROP-OFF */}
          <motion.div 
            variants={itemVariants} 
            className="relative group flex flex-col h-full bg-[#0A0D14] border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-[#A855F7]/40 transition-all duration-300 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#A855F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[#A855F7]/20 bg-[#A855F7]/10 text-[#A855F7] group-hover:scale-105 transition-transform duration-500 relative z-10">
              <PackageOpen className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight text-white mb-3 relative z-10">Hardware Drop-Off</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 rounded-lg text-xs font-bold text-[#A855F7] uppercase tracking-wider mb-6 w-max">
              <div className="w-2 h-2 rounded-full bg-[#A855F7]" /> Scheduled Only
            </span>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow relative z-10">
              For cracked screens, physical repairs, deep cleaning, or custom PC builds. Bring your device safely to our engineering bay.
            </p>
            
            <div className="flex flex-col gap-5 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-start gap-4 bg-[#A855F7]/10 border border-[#A855F7]/20 p-5 rounded-2xl">
                <ShieldAlert className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-gray-300 leading-relaxed uppercase tracking-wider">
                  <span className="text-white block mb-1">Security Notice:</span>
                  To keep your devices safe, all drop-offs must be scheduled via a ticket first.
                </p>
              </div>
              <Link href="/ticket?category=dropoff" className="group/btn flex items-center justify-center gap-3 w-full py-5 bg-white border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-[#030508] font-bold uppercase tracking-wider text-sm rounded-2xl transition-all duration-300">
                Log Arrival Ticket <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* OPTION 3: ON-SITE */}
          <motion.div 
            variants={itemVariants} 
            className="relative group flex flex-col h-full bg-[#0A0D14] border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-[#10B981]/40 transition-all duration-300 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981] group-hover:scale-105 transition-transform duration-500 relative z-10">
              <MapIcon className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold tracking-tight text-white mb-3 relative z-10">On-Site Visit</h2>
            <span className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg text-xs font-bold text-[#10B981] uppercase tracking-wider mb-6 w-max">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" /> We Come To You
            </span>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow relative z-10">
              Perfect for setting up new Wi-Fi networks, installing loadshedding backups, or fixing internet connections at your home or office.
            </p>
            
            <div className="flex flex-col gap-5 pt-6 border-t border-white/10 relative z-10">
               <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <MapPin className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-gray-300 leading-relaxed uppercase tracking-wider">
                    <span className="text-white block mb-1">Travel Fee:</span>
                    A standard call-out fee applies depending on your distance from our location.
                  </p>
               </div>
              <Link href="/ticket?category=onsite" className="group/btn flex items-center justify-center gap-3 w-full py-5 bg-white border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-[#030508] font-bold uppercase tracking-wider text-sm rounded-2xl transition-all duration-300">
                Request a Visit <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* MAP SECTION */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10 mb-20 will-change-transform"
      >
        <div className="group rounded-3xl p-3 border border-white/10 relative overflow-hidden bg-[#0A0D14] shadow-xl hover:border-[#00E5FF]/30 transition-all duration-500">
          
          {/* Map Overlay Info Badge */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-4 bg-[#030508] px-5 py-4 rounded-2xl border border-white/10 shadow-lg pointer-events-none">
            <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20">
              <MapPin className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <div className="flex flex-col">
               <span className="text-sm font-bold uppercase tracking-wider text-white">Cape Town Area</span>
               <span className="text-xs font-bold uppercase tracking-wider text-[#00E5FF] mt-0.5">Primary Service Zone</span>
            </div>
          </div>

          {/* Google Map iFrame */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative grayscale-[0.8] contrast-125 group-hover:grayscale-0 transition-all duration-700">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#030508]/60 via-[#00E5FF]/5 to-transparent pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </motion.section>

    </div>
  );
}