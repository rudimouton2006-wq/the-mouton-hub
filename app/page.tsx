"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Server, Activity, Globe } from "lucide-react";

// ---------------------------------------------------------
// DATA: CORE SERVICES
// ---------------------------------------------------------
const CAPABILITIES = [
  {
    icon: Zap,
    theme: "from-[#00E5FF]/20 to-transparent",
    iconColor: "text-[#00E5FF]",
    glow: "group-hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] group-hover:border-[#00E5FF]/40",
    title: "Fast Repairs",
    description: "We find and fix computer problems quickly so you can get back to work without the long wait."
  },
  {
    icon: ShieldCheck,
    theme: "from-[#2563EB]/20 to-transparent",
    iconColor: "text-[#2563EB]",
    glow: "group-hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] group-hover:border-[#2563EB]/40",
    title: "Total Security",
    description: "We protect your internet network and business data from outside threats, keeping everything safe and private."
  },
  {
    icon: Server,
    theme: "from-[#10B981]/20 to-transparent",
    iconColor: "text-[#10B981]",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] group-hover:border-[#10B981]/40",
    title: "Expert Hardware",
    description: "We don't just fix devices; we upgrade them. We make your computers run faster and last much longer."
  },
  {
    icon: Globe,
    theme: "from-[#8B5CF6]/20 to-transparent",
    iconColor: "text-[#8B5CF6]",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] group-hover:border-[#8B5CF6]/40",
    title: "Custom Websites",
    description: "Beautiful, fast websites built for your business. Choose a one-time build or let us manage everything for you."
  }
];

// ---------------------------------------------------------
// DATA: BACKGROUND ANIMATION NODES
// ---------------------------------------------------------
const NETWORK_NODES = [
  { top: '15%', left: '20%', size: 'w-2 h-2', delay: 0 },
  { top: '25%', left: '80%', size: 'w-1 h-1', delay: 1.2 },
  { top: '65%', left: '15%', size: 'w-2 h-2', delay: 2.5 },
  { top: '75%', left: '85%', size: 'w-1.5 h-1.5', delay: 0.8 },
  { top: '45%', left: '80%', size: 'w-1 h-1', delay: 3 },
  { top: '85%', left: '30%', size: 'w-2 h-2', delay: 1.5 },
  { top: '35%', left: '35%', size: 'w-1 h-1', delay: 2.2 },
  { top: '55%', left: '60%', size: 'w-1.5 h-1.5', delay: 0.5 },
];

// ---------------------------------------------------------
// ANIMATION VARIANTS (UNIFIED)
// ---------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)", scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const ambientGlowVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function HomePage() {
  return (
    <main className="relative w-full flex flex-col items-center justify-start z-10 pb-32 min-h-screen bg-transparent selection:bg-[#00E5FF]/30 selection:text-white">
      
      {/* --------------------------------------------------------- */}
      {/* AMBIENT BACKGROUND */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(3,7,18,0.9)_0%,transparent_80%)]" />

          <motion.div 
            variants={ambientGlowVariants}
            animate="animate"
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#00E5FF]/15 rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            variants={ambientGlowVariants}
            animate="animate"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2563EB]/15 rounded-full blur-[100px] mix-blend-screen" 
            style={{ animationDelay: "-5s" }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70" />
          
          {NETWORK_NODES.map((node, i) => (
            <motion.div
              key={i}
              className={`absolute ${node.size} bg-[#00E5FF] rounded-full shadow-[0_0_15px_3px_rgba(0,229,255,0.6)]`}
              style={{ top: node.top, left: node.left }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 5 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            />
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center w-full max-w-5xl"
        >
          <motion.div variants={itemVariants} className="group inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#030712]/80 border border-white/[0.08] mb-10 md:mb-12 backdrop-blur-2xl hover:bg-white/[0.06] hover:border-[#00E5FF]/40 transition-all duration-500 cursor-default shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5FF] shadow-[0_0_12px_#00E5FF]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-[#E4E4E7] tracking-[0.25em] uppercase font-bold">
              Ready to Help
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-black tracking-tighter leading-[1.05] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 w-full drop-shadow-sm">
            Premium IT & <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#1D4ED8] drop-shadow-[0_0_40px_rgba(0,229,255,0.4)]">
              Web Solutions.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-3xl text-base sm:text-lg md:text-xl text-[#94A3B8] mb-12 md:mb-16 leading-relaxed font-medium px-4">
            Welcome to <span className="text-white font-bold tracking-wide">Takumi Tech</span>. We build fast websites and provide top-tier computer support. Built for people who want things done right the first time.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-6 sm:px-0">
            <Link href="/schedule" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#030712] font-black uppercase tracking-[0.15em] text-xs sm:text-sm rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] w-full sm:w-auto isolate">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <Activity className="w-4 h-4 group-hover:text-white transition-colors duration-500" />
              <span className="group-hover:text-white transition-colors duration-500">Get Support</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-white transition-all duration-500" />
            </Link>
            
            <Link href="/services" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#030712]/50 border border-white/10 text-[#E4E4E7] font-bold uppercase tracking-[0.15em] text-xs sm:text-sm rounded-xl backdrop-blur-md hover:bg-white/[0.05] hover:border-white/30 transition-all duration-500 w-full sm:w-auto shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CORE SERVICES GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
              <span className="text-[#00E5FF] font-mono text-xs font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">What We Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
              Our Core <br className="hidden md:block" /> Services
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg font-medium leading-relaxed">
              Stop dealing with quick fixes that break again. We offer permanent, high-quality solutions for your computers, networks, and business websites.
            </p>
          </div>
          
          <Link href="/services" className="shrink-0 group flex items-center gap-3 px-6 py-3 rounded-lg bg-[#030712]/50 border border-white/[0.05] text-xs font-mono font-bold text-white uppercase tracking-widest backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
            See All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[#00E5FF] transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className={`group relative p-8 md:p-10 rounded-[2rem] bg-[#090E1A]/80 border border-white/[0.06] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 ${capability.glow} shadow-[0_8px_30px_rgba(0,0,0,0.4)]`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${capability.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#030712] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out shadow-inner">
                    <Icon className={`w-7 h-7 ${capability.iconColor} drop-shadow-[0_0_15px_currentColor]`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* WEB DEPLOYMENT PACKAGES MATRIX */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
            <span className="text-[#8B5CF6] font-mono text-xs font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">Website Pricing</span>
            <div className="h-px w-8 bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
            Website Design Packages
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            Choose a package that works for you. Manage your site yourself, or let us handle everything so you don't have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* OPTION 1: THE FOUNDATION BUILD */}
          <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#090E1A]/80 border border-[#00E5FF]/40 backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(0,229,255,0.3)] group shadow-[0_0_30px_rgba(0,229,255,0.15)]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">Option 1: The Foundation Build</h3>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-6">
                <span className="text-4xl font-black text-[#00E5FF]">R850</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Once-off</span>
              </div>
              <ul className="flex flex-col gap-5 text-[#94A3B8] text-sm md:text-base mb-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] shrink-0" />
                  <span>Includes full setup and your <strong>.co.za</strong> domain name.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] shrink-0" />
                  <span><strong>No</strong> monthly fees.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] shrink-0" />
                  <span>If you need updates later, we charge a simple rate of <strong>R100 per hour</strong>.</span>
                </li>
              </ul>
            </div>
            <Link href="/schedule" className="w-full relative inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#00E5FF] text-[#030712] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#00B8CC] transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] z-10 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              Start Your Build <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* OPTION 2: THE MANAGED ENVIRONMENT */}
          <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#090E1A]/80 border border-[#8B5CF6]/40 backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] group shadow-[0_0_30px_rgba(139,92,246,0.15)]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#8B5CF6]/10 to-transparent opacity-100 pointer-events-none" />
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">Option 2: The Managed Plan</h3>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-6">
                <span className="text-4xl font-black text-[#8B5CF6]">R150</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">/ Month</span>
              </div>
              <ul className="flex flex-col gap-5 text-[#94A3B8] text-sm md:text-base mb-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6] shrink-0" />
                  <span><strong>R0 upfront</strong> (The entire initial setup is free).</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6] shrink-0" />
                  <span>Covers your domain name, premium hosting, and <strong>unlimited basic updates</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6] shrink-0" />
                  <span><strong>No hourly fees.</strong> Just message us with your new items or price changes, and we update it for you within 48 hours.</span>
                </li>
              </ul>
            </div>
            <Link href="/schedule" className="w-full relative inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#8B5CF6] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#7C3AED] transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] z-10 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Choose Managed Plan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}