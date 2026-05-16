"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Server, Activity, Globe } from "lucide-react";
import FAQ from "./components/FAQ";

// ---------------------------------------------------------
// DATA: CORE SERVICES
// ---------------------------------------------------------
const CAPABILITIES = [
  {
    icon: Zap,
    theme: "from-[#00E5FF]/10 to-transparent",
    iconColor: "text-[#00E5FF]",
    hoverBorder: "hover:border-[#00E5FF]/40",
    title: "Fast Repairs",
    description: "We find and fix computer problems quickly so you can get back to work without the long wait."
  },
  {
    icon: ShieldCheck,
    theme: "from-[#2563EB]/10 to-transparent",
    iconColor: "text-[#2563EB]",
    hoverBorder: "hover:border-[#2563EB]/40",
    title: "Total Security",
    description: "We protect your internet network and business data from outside threats, keeping everything safe and private."
  },
  {
    icon: Server,
    theme: "from-[#10B981]/10 to-transparent",
    iconColor: "text-[#10B981]",
    hoverBorder: "hover:border-[#10B981]/40",
    title: "Expert Hardware",
    description: "We don't just fix devices; we upgrade them. We make your computers run faster and last much longer."
  },
  {
    icon: Globe,
    theme: "from-[#8B5CF6]/10 to-transparent",
    iconColor: "text-[#8B5CF6]",
    hoverBorder: "hover:border-[#8B5CF6]/40",
    title: "Custom Websites",
    description: "Beautiful, fast websites built for your business. Choose a one-time build or let us manage everything for you."
  }
];

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

// Removed blur filters; using only GPU-friendly transform/opacity
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function HomePage() {
  return (
    <main className="relative w-full flex flex-col items-center justify-start z-10 min-h-screen bg-[#030508] selection:bg-[#00E5FF]/30 selection:text-white overflow-hidden">
      
      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND (ZERO CPU USAGE) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        {/* Subtle top gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-[#00E5FF]/5 via-[#2563EB]/5 to-transparent blur-3xl opacity-50" />
        {/* Minimal grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%)]" />
      </div>

      {/* --------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 mb-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full max-w-5xl will-change-transform"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#05080F] border border-white/10 mb-10 md:mb-12 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-[0.25em] uppercase font-bold">
              Ready to Help
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-black tracking-tighter leading-[1.05] mb-8 text-white w-full">
            Premium IT & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]">
              Web Solutions.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-400 mb-12 md:mb-16 leading-relaxed font-medium px-4">
            Welcome to <span className="text-white font-bold tracking-wide">Takumi Tech</span>. We build fast websites and provide top-tier computer support. Built for people who want things done right the first time.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-6 sm:px-0">
            <Link href="/schedule" className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#030508] font-black uppercase tracking-[0.15em] text-xs sm:text-sm rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto transform-gpu">
              <Activity className="w-4 h-4" />
              <span>Get Support</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link href="/services" className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#05080F] border border-white/10 text-gray-300 font-bold uppercase tracking-[0.15em] text-xs sm:text-sm rounded-xl transition-all duration-300 hover:bg-white/5 hover:text-white w-full sm:w-auto transform-gpu hover:-translate-y-1">
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CORE SERVICES GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#00E5FF]" />
              <span className="text-[#00E5FF] font-mono text-xs font-bold uppercase tracking-widest">What We Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
              Our Core <br className="hidden md:block" /> Services
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
              Stop dealing with quick fixes that break again. We offer permanent, high-quality solutions for your computers, networks, and business websites.
            </p>
          </div>
          
          <Link href="/services" className="shrink-0 group flex items-center gap-3 px-6 py-3 rounded-lg bg-[#05080F] border border-white/10 text-xs font-mono font-bold text-white uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:border-white/20 transform-gpu hover:-translate-y-1">
            See All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[#00E5FF] transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className={`group relative p-8 md:p-10 rounded-[2rem] bg-[#05080F] border border-white/5 flex flex-col overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-2 ${capability.hoverBorder} shadow-lg`}>
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${capability.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#080C16] border border-white/5 flex items-center justify-center mb-8">
                    <Icon className={`w-7 h-7 ${capability.iconColor}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-20">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#8B5CF6]" />
            <span className="text-[#8B5CF6] font-mono text-xs font-bold uppercase tracking-widest">Website Pricing</span>
            <div className="h-px w-8 bg-[#8B5CF6]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
            Website Design Packages
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            Choose a package that works for you. Manage your site yourself, or let us handle everything so you don't have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* OPTION 1: THE FOUNDATION BUILD */}
          <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#05080F] border border-white/5 flex flex-col overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-2 hover:border-[#00E5FF]/40 shadow-xl group">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">Option 1: The Foundation Build</h3>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-6">
                <span className="text-4xl font-black text-[#00E5FF]">R850</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Once-off</span>
              </div>
              <ul className="flex flex-col gap-5 text-gray-400 text-sm md:text-base mb-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                  <span>Includes full setup and your <strong>.co.za</strong> domain name.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                  <span><strong>No</strong> monthly fees.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                  <span>If you need updates later, we charge a simple rate of <strong>R100 per hour</strong>.</span>
                </li>
              </ul>
            </div>
            <Link href="/ticket?service=web-dev" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#00E5FF] text-[#030508] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#00B8CC] transition-colors duration-300 z-10">
              Start Your Build <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* OPTION 2: THE MANAGED ENVIRONMENT */}
          <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#05080F] border border-white/5 flex flex-col overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-2 hover:border-[#8B5CF6]/40 shadow-xl group">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#8B5CF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">Option 2: The Managed Plan</h3>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-6">
                <span className="text-4xl font-black text-[#8B5CF6]">R150</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">/ Month</span>
              </div>
              <ul className="flex flex-col gap-5 text-gray-400 text-sm md:text-base mb-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                  <span><strong>R0 upfront</strong> (The entire initial setup is free).</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                  <span>Covers your domain name, premium hosting, and <strong>unlimited basic updates</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                  <span><strong>No hourly fees.</strong> Just message us with your new items or price changes, and we update it for you within 48 hours.</span>
                </li>
              </ul>
            </div>
            <Link href="/ticket?service=web-dev" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#8B5CF6] text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#7C3AED] transition-colors duration-300 z-10">
              Choose Managed Plan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* FAQ COMPONENT */}
      {/* --------------------------------------------------------- */}
      <FAQ />

    </main>
  );
}