"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Target, ShieldCheck } from "lucide-react";

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
            The Founder
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-70" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase mb-8 leading-[0.9] text-white">
          Meet The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">
            Engineer.
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
          
          {/* LEFT COLUMN: BIO & VISION */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-7 flex flex-col gap-8"
          >
            <div className="bg-[#05080F] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-[#2563EB]" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#080C16] border border-white/5 flex items-center justify-center mb-8">
                <Terminal className="w-7 h-7 text-[#00E5FF]" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
                Engineered for Precision
              </h2>
              
              <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  My name is Rudi, and I built Takumi Tech with a singular focus: to strip away the corporate bloat of the IT industry and deliver raw, uncompromised performance to local businesses.
                </p>
                <p>
                  Grounded in formal Computer Engineering disciplines, I approach every project—whether it is a complex network deployment, a custom PC build, or a highly optimized web infrastructure—with surgical exactness. There are no band-aid fixes here; only permanent solutions.
                </p>
                <p>
                  When you log a ticket with Takumi Tech, you aren't being routed to a call center. You are speaking directly to the engineer who will be writing the code, configuring the router, and testing your hardware.
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
                <h3 className="text-lg font-black uppercase tracking-wider text-white">Hardware Mastery</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Deep-level diagnostics and custom assemblies. We don't just replace parts; we optimize the entire chassis for maximum efficiency and longevity.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#05080F] border border-white/5 rounded-[2rem] p-8 shadow-lg transform-gpu hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center border border-[#2563EB]/20 shrink-0">
                  <Target className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wider text-white">Zero-Lag Code</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Websites engineered without heavy templates. Clean code, hardware-accelerated animations, and instant load times that rank perfectly on Google.
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
                Transparent pricing and honest diagnostics. If your system doesn't need an expensive upgrade, we won't sell you one.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* CALL TO ACTION */}
      {/* --------------------------------------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl mx-auto px-4 sm:px-6 z-10 text-center will-change-transform"
      >
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#05080F] border border-white/5 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/5 to-transparent pointer-events-none" />
          
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 relative z-10">
            Ready to upgrade your infrastructure?
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-medium relative z-10 max-w-xl mx-auto">
            Log a ticket today. Whether it's a critical hardware failure or a brand new web deployment, the solution starts here.
          </p>
          
          <Link 
            href="/ticket"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00E5FF] text-[#030508] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors duration-300 relative z-10 w-full sm:w-auto"
          >
            Initialize Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>

    </main>
  );
}