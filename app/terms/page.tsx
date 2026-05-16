"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Terminal, ShieldAlert, Lock, Server, FileText } from "lucide-react";

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

export default function TermsPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start pt-12 md:pt-24 pb-32 z-10 selection:bg-[#00E5FF]/30 selection:text-white bg-transparent overflow-hidden">
      
      {/* --------------------------------------------------------- */}
      {/* INSANELY BEAUTIFUL AMBIENT BACKGROUND (WITH EDGE MASKING) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
          {/* Dynamic Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Breathing Aurora Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1], 
              opacity: [0.08, 0.15, 0.08],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00E5FF] to-transparent rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.05, 0.1, 0.05],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#8B5CF6] to-transparent rounded-full blur-[130px] mix-blend-screen" 
          />
          
          {/* Base Noise Texture for Premium Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0" />
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* PROTOCOLS HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto text-center px-4 mb-20 z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-500 mr-4 opacity-50" />
          <span className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-[0.3em] uppercase font-bold">
            Legal & Privacy
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-500 ml-4 opacity-50" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9] text-white">
          Terms & <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Privacy
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-[#A1A1AA] text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto mt-8 backdrop-blur-sm bg-[#030508]/30 p-4 rounded-2xl border border-white/[0.02]">
          Simple, clear agreements. Below are the rules regarding how we work, how we protect your data, and what you can expect from Takumi Tech.
        </motion.p>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* DOCUMENTATION MATRIX */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-[#080B12]/80 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-16 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          
          <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-12">
            <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] uppercase tracking-widest bg-[#00E5FF]/10 px-4 py-2 rounded-full border border-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              Last Updated: Today
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
              Version 3.0
            </span>
          </div>

          <div className="space-y-16">
            
            {/* Clause 01: Service Level Agreement */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-2xl flex items-center justify-center shadow-[inset_0_0_15px_rgba(37,99,235,0.2)]">
                  <Server className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">01. Our Services & Guarantees</h2>
              </div>
              <div className="space-y-4 text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium">
                <p>
                  We promise to provide you with the best possible internet setups, website hosting, and computer repairs. We aim to keep all of our managed websites online 99.9% of the time. However, if you or someone else changes the settings on a system we built without asking us first, we can no longer guarantee its stability.
                </p>
                <p>
                  When we order computer parts for you, we try to get them as fast as possible. Please understand that delivery times can sometimes change because of shipping delays that are out of our control.
                </p>
              </div>
            </div>

            {/* Clause 02: Zero-Trust Privacy Matrix */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl flex items-center justify-center shadow-[inset_0_0_15px_rgba(16,185,129,0.2)]">
                  <Lock className="w-6 h-6 text-[#10B981]" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">02. Privacy & Data Protection</h2>
              </div>
              <div className="space-y-4 text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium">
                <p>
                  Your privacy is incredibly important to us. Takumi Tech does not sell, steal, or snoop through your personal data. We only look at technical information (like internet speed or computer temperature) to make sure your systems are running properly.
                </p>
                <p>
                  When you send us a message through this website, it is completely secure and encrypted. We will never ask you for your personal passwords or sensitive private keys.
                </p>
              </div>
            </div>

            {/* Clause 03: Security Liability */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center shadow-[inset_0_0_15px_rgba(239,68,68,0.2)]">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">03. Security Limitations</h2>
              </div>
              <div className="space-y-4 text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium">
                <p>
                  We build very strong security systems to protect your business. However, no computer network in the world is 100% immune to being hacked.
                </p>
                <p>
                  Takumi Tech is not responsible for data loss, viruses, or hacks that happen because an employee clicked a bad link, gave out a password, or used old, unsafe equipment that we advised against using.
                </p>
              </div>
            </div>

            {/* Clause 04: Contractual Termination */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-2xl flex items-center justify-center shadow-[inset_0_0_15px_rgba(139,92,246,0.2)]">
                  <Terminal className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">04. Ending Our Services</h2>
              </div>
              <div className="space-y-4 text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium">
                <p>
                  If you are on a monthly plan (like our Managed Website package), you can cancel at any time with a 30-day notice. If you cancel, we will completely delete your files and data from our systems to protect your privacy. Any computer hardware you bought from us remains yours to keep, as long as the bill is fully paid.
                </p>
              </div>
            </div>

          </div>

          {/* Footer of the Document */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase text-center sm:text-left flex items-center gap-2">
              <FileText className="w-3 h-3" /> End of Document
            </p>
            <Link 
              href="/schedule" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest transition-colors rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              Contact Us
            </Link>
          </div>

        </motion.div>
      </motion.section>

    </main>
  );
}