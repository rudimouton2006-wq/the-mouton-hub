"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Terminal, Cpu, ShieldCheck, Activity, Users, Code, ArrowRight } from "lucide-react";

// ---------------------------------------------------------
// ANIMATION VARIANTS
// ---------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function EngineerPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508]">
      
      {/* --------------------------------------------------------- */}
      {/* BACKGROUND */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00E5FF]/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#2563EB]/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]" />
      </div>

      {/* --------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl mx-auto text-center px-4 sm:px-6 mb-20 z-10 will-change-transform"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A0D14] border border-white/5 mb-8 shadow-sm">
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.2em] uppercase font-semibold">
            The Core Team
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
          The Architects <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">
            Of Performance.
          </span>
        </motion.h1>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* THE PHILOSOPHY (ORIGIN OF TAKUMI) */}
      {/* --------------------------------------------------------- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10 mb-24 text-center will-change-transform relative"
      >
        <motion.div variants={itemVariants} className="relative p-8 md:p-12 rounded-3xl bg-[#0A0D14] border border-white/5 overflow-hidden shadow-lg hover:border-[#00E5FF]/20 transition-colors duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />
          
          <Code className="w-8 h-8 text-[#00E5FF] mx-auto mb-6 opacity-80" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">The Takumi Philosophy</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
            In Japanese culture, <strong className="text-white font-bold tracking-wide">"Takumi" (匠)</strong> translates to a master artisan—an individual who dedicates their entire life to perfecting a single craft. Takumi Tech was built on this exact principle. We do not believe in quick fixes, shortcuts, or mass-produced templates. Absolute trust requires absolute competence.
          </p>
        </motion.div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* THE TEAM PROFILES */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10 mb-24 will-change-transform"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* RUDI MOUTON */}
          <motion.div 
            variants={itemVariants} 
            className="group bg-[#0A0D14] border border-white/5 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden transition-all duration-300 hover:border-[#00E5FF]/30 hover:shadow-xl flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#030508] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Terminal className="w-6 h-6 text-[#00E5FF]" />
              </div>
              
              <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                Rudi Mouton
              </h2>
              <span className="text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-widest block mb-6 pb-6 border-b border-white/5">
                Founder & Lead Engineer
              </span>
              
              <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
                <p>
                  Currently advancing my formal education in Computer Engineering, I approach every project with a deep, structural understanding of how technology actually works. I don't just troubleshoot problems; I understand the fundamental architecture of your systems.
                </p>
                <p>
                  When you hand over your business infrastructure, your website, or your custom PC build to me, I treat it with absolute respect. I tear it down, optimize it, and rebuild it with the same meticulous care as if it were my own personal machine.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ALEX DE WET */}
          <motion.div 
            variants={itemVariants} 
            className="group bg-[#0A0D14] border border-white/5 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-xl flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#2563EB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-[#030508] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6 text-[#2563EB]" />
              </div>
              
              <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                Alex de Wet
              </h2>
              <span className="text-[#2563EB] font-mono text-xs font-semibold uppercase tracking-widest block mb-6 pb-6 border-b border-white/5">
                Client Relations Manager
              </span>
              
              <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
                <p>
                  Technology is only as effective as the people supporting it. Alex brings a deep understanding of human behavior, communication, and expectation management to the Takumi Tech ecosystem.
                </p>
                <p>
                  Currently pursuing a degree in Psychology at Eduvos and backed by extensive experience in high-standard customer service environments, Alex ensures that every client interaction is seamless, transparent, and highly professional.
                </p>
                <p>
                  While the engineering bay handles the complex hardware and code, Alex ensures your project stays on track and your questions are answered immediately.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* THE VIRTUES */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-24 z-10 relative will-change-transform"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Virtue 1 */}
          <motion.div variants={itemVariants} className="flex flex-col bg-[#0A0D14] border border-white/5 rounded-3xl p-8 text-center items-center hover:bg-[#030508] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 mb-6">
              <Cpu className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Engineering Degree</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Backed by formal academic training, ensuring all hardware diagnostics and setups are structurally sound.
            </p>
          </motion.div>

          {/* Virtue 2 */}
          <motion.div variants={itemVariants} className="flex flex-col bg-[#0A0D14] border border-white/5 rounded-3xl p-8 text-center items-center hover:bg-[#030508] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center border border-[#2563EB]/20 mb-6">
              <Activity className="w-6 h-6 text-[#2563EB]" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">The Artisan Standard</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every server rack perfectly managed. Every line of code optimized. If a job is worth doing, it is worth doing perfectly.
            </p>
          </motion.div>

          {/* Virtue 3 */}
          <motion.div variants={itemVariants} className="flex flex-col bg-[#0A0D14] border border-white/5 rounded-3xl p-8 text-center items-center hover:bg-[#030508] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-base font-bold text-white mb-3">Absolute Integrity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transparent pricing and honest diagnostics. We protect your data and respect your hardware as if it were our own.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* BOTTOM CONTACT CTA */}
      {/* --------------------------------------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl mx-auto px-4 sm:px-6 mb-16 z-10 text-center will-change-transform"
      >
        <div className="bg-[#0A0D14] border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-3">Ready to get started?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Log a support ticket or reach out to our team directly via our support hub if you have any questions before booking.
          </p>
          <Link 
            href="/ticket"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#030508] font-bold uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Go to Support Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>

    </main>
  );
}