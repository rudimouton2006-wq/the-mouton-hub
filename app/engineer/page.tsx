"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu, ShieldCheck, Mail, MessageCircle, Activity } from "lucide-react";

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

export default function EngineerPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508]">
      
      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND (ZERO CPU USAGE) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00E5FF]/5 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#2563EB]/5 to-transparent blur-3xl opacity-50" />
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
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4 opacity-70" />
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase font-bold">
            The Philosophy
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-70" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase mb-8 leading-[0.9] text-white">
          The Master <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">
            Artisan.
          </span>
        </motion.h1>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* PROFILE GRID */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10 mb-20 will-change-transform"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          
          {/* LEFT COLUMN: THE TAKUMI MEANING & BIO */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-7 flex flex-col gap-8"
          >
            <div className="bg-[#05080F] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-lg relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-[#2563EB]" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#080C16] border border-white/5 flex items-center justify-center mb-8">
                <Terminal className="w-7 h-7 text-[#00E5FF]" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
                Engineered for Precision
              </h2>
              
              <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  In Japanese culture, <strong className="text-white">"Takumi" (匠)</strong> translates to a master artisan—an individual who dedicates their entire life to perfecting a single craft. Takumi Tech was built on this exact philosophy. We do not believe in quick fixes or mass-produced templates. 
                </p>
                <p>
                  My name is Rudi, founder and lead engineer. Currently advancing my formal education in Computer Engineering, I approach every project with a deep, structural understanding of how technology actually works. I don't just troubleshoot problems; I understand the fundamental architecture of your systems.
                </p>
                <p>
                  When you hand over your business infrastructure, your website, or your custom PC build to me, I treat it with absolute respect. I tear it down, optimize it, and rebuild it with the same meticulous care as if it were my own personal machine.
                </p>
                <p className="text-[#00E5FF] font-bold">
                  Absolute trust requires absolute competence. That is the Takumi standard.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CORE VIRTUES */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-5 flex flex-col gap-6"
          >
            {/* Value 1 */}
            <div className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 shadow-lg transform-gpu hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20 shrink-0">
                  <Cpu className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wider text-white">Engineering Degree</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Backed by formal academic training in Computer Engineering, ensuring that all hardware diagnostics and network setups are mathematically and structurally sound.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 shadow-lg transform-gpu hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center border border-[#2563EB]/20 shrink-0">
                  <Activity className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wider text-white">The Artisan Standard</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Every server rack is cable-managed flawlessly. Every line of code is optimized for speed. If a job is worth doing, it is worth doing perfectly.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 shadow-lg transform-gpu hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wider text-white">Absolute Integrity</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Transparent pricing and honest diagnostics. I protect your business data and respect your hardware as if it were my own.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* 3-WAY CONTACT MATRIX (CALL TO ACTION) */}
      {/* --------------------------------------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10 text-center will-change-transform"
      >
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#05080F] border border-white/5 shadow-xl relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/5 to-transparent pointer-events-none" />
          
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4 relative z-10">
            Ready to upgrade your infrastructure?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-medium relative z-10 max-w-xl mx-auto">
            Choose your preferred communication vector below to get started. 
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full relative z-10">
            
            {/* TICKET BUTTON */}
            <Link 
              href="/ticket"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#00E5FF] text-[#030508] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#00B8CC] transition-colors duration-300 w-full md:w-auto"
            >
              <Terminal className="w-4 h-4" /> Log a Ticket
            </Link>

            {/* WHATSAPP BUTTON */}
            <a 
              href="https://wa.me/27123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#25D366] hover:text-white transition-colors duration-300 w-full md:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>

            {/* EMAIL BUTTON */}
            <a 
              href="mailto:rudi@takumitech.co.za" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#080C16] border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/10 transition-colors duration-300 w-full md:w-auto"
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>

          </div>
        </div>
      </motion.section>

    </main>
  );
}