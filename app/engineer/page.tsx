"use client";

import { motion, Variants } from "framer-motion";
import { Terminal, Cpu, Server, ShieldCheck, Zap, Code, PenTool, Wrench } from "lucide-react";

// ---------------------------------------------------------
// ANIMATION VARIANTS (Strictly Typed for Vercel)
// ---------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)", scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const profileVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.2 } 
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.4 } 
  }
};

export default function EngineerPage() {
  return (
    // overflow-x-hidden guarantees this page will never cause mobile horizontal scroll bugs
    <div className="w-full min-h-screen flex flex-col items-center justify-start pb-32 z-10 overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-transparent relative">
      
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
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00E5FF] to-transparent rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.08, 0.15, 0.08],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#2563EB] to-transparent rounded-full blur-[130px] mix-blend-screen" 
          />
          
          {/* Base Noise Texture for Premium Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0" />
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* HERO TERMINAL & BRAND IDENTITY */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl mx-auto text-center px-4 mb-24 pt-12 md:pt-24 z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4 opacity-70 shadow-[0_0_10px_#00E5FF]" />
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.6)] font-bold">
            The Story Behind The Name
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-70 shadow-[0_0_10px_#00E5FF]" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase mb-12 leading-[0.9] text-white drop-shadow-2xl">
          Meaning of <br />
          <span className="relative inline-block mt-3">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#00E5FF] to-[#2563EB] opacity-40 blur-2xl rounded-full" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">
              Takumi
            </span>
          </span>
        </motion.h1>

        {/* The Takumi Meaning Card */}
        <motion.div variants={itemVariants} className="relative max-w-3xl mx-auto text-left bg-[#080B12]/80 border border-white/[0.08] p-8 md:p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] group hover:border-[#00E5FF]/30 transition-colors duration-500 overflow-hidden">
          {/* Subtle hover gradient inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="absolute -top-6 -left-6 text-7xl text-white/[0.03] font-serif select-none pointer-events-none group-hover:text-[#00E5FF]/10 transition-colors duration-500">
            匠
          </div>
          
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl text-white font-black mb-6 uppercase tracking-tight flex items-center gap-4">
              Takumi 
              <span className="text-[#00E5FF] font-mono text-xs md:text-sm tracking-widest bg-[#00E5FF]/10 px-3 py-1.5 rounded-lg border border-[#00E5FF]/20">
                (ta-koo-mee)
              </span>
            </p>
            <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed font-medium">
              In Japanese culture, a <strong>Takumi</strong> is a master artisan—a craftsman who has dedicated their entire life to perfecting their skills. 
              We don't see fixing computers and building websites as just a job; we see it as an engineering craft. 
              <strong className="text-white"> Takumi Tech</strong> represents doing things perfectly, building systems that last, and providing top-quality service.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* LEAD ENGINEER PROFILE */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual & Status */}
          <motion.div 
            variants={profileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="relative aspect-square rounded-[2.5rem] bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] overflow-hidden flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-[#2563EB]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <Terminal className="w-24 h-24 text-[#00E5FF] opacity-80 group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
              
              {/* Active Status Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#030508]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"></span>
                </div>
                <span className="text-[10px] text-white font-mono uppercase tracking-widest font-bold truncate">Engineer Online</span>
              </div>
            </div>
            
            <div className="bg-[#080B12]/80 border border-white/[0.08] rounded-[2.5rem] p-8 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <h3 className="text-white font-black uppercase tracking-wider mb-6 text-sm flex items-center gap-3">
                <div className="w-1 h-4 bg-[#00E5FF] rounded-full" /> Top Skills
              </h3>
              <ul className="space-y-4">
                {['Hardware Upgrades', 'Computer Repair', 'Internet Setups', 'Website Building'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs md:text-sm font-bold text-gray-300 group cursor-default">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00E5FF]/50 group-hover:bg-[#00E5FF]/10 transition-colors">
                      <Zap className="w-3.5 h-3.5 text-[#00E5FF]" /> 
                    </div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Credentials & Bio */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div className="bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              
              {/* Decorative Background Glow */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />
              
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">Rudi Mouton</h2>
              <p className="text-[#00E5FF] font-mono text-xs md:text-sm font-bold tracking-widest uppercase mb-10 bg-[#00E5FF]/10 w-max px-4 py-2 rounded-xl border border-[#00E5FF]/20">
                Founder & Tech Expert
              </p>
              
              <div className="space-y-8 text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium">
                <p className="text-white/90 text-lg md:text-xl font-bold">
                  My goal is simple: I don't believe in temporary, duct-tape fixes. 
                </p>
                <p>
                  I build permanent, secure, and fast solutions for people who want their computers, internet, and websites to just work perfectly without the hassle.
                </p>
                
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-8" />

                <div className="group">
                  <h3 className="text-white font-black uppercase tracking-wider text-sm mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/30 group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(0,229,255,0.2)]">
                      <ShieldCheck className="w-5 h-5 text-[#00E5FF]" /> 
                    </div>
                    Education & Qualifications
                  </h3>
                  <p className="pl-14">
                    I am currently studying for a <strong>Diploma in Computer Engineering</strong> to deepen my technical knowledge. This builds on my existing <strong>NQF Level 5 Qualification in IT System Support</strong>. 
                    This mix of hands-on training and advanced university study means I know exactly how to fix and build your systems from the inside out.
                  </p>
                </div>

                <div className="group pt-4">
                  <h3 className="text-white font-black uppercase tracking-wider text-sm mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/30 group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(0,229,255,0.2)]">
                      <Wrench className="w-5 h-5 text-[#00E5FF]" /> 
                    </div>
                    Real-World Experience
                  </h3>
                  <p className="pl-14">
                    Studying is important, but real-world experience is what truly matters. I have spent time working alongside professional IT support companies during my internships. 
                    This experience taught me how to solve big tech problems under pressure, fix business networks, and keep clients happy by doing the job right the first time.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}