"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Server, Globe, Mail, Cloud, Search } from "lucide-react";

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
    description: "We protect your internet network and business data from outside threats, keeping everything safe."
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
    description: "Beautiful, fast websites built for your business. Manage it yourself or let us handle everything."
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function HomePage() {
  return (
    <main className="relative w-full flex flex-col items-center justify-start z-10 min-h-screen bg-[#030508] selection:bg-[#00E5FF]/30 selection:text-white">
      
      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-[#00E5FF]/5 via-[#2563EB]/5 to-transparent blur-3xl opacity-40" />
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
          className="flex flex-col items-center w-full max-w-4xl will-change-transform"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A0D14] border border-white/5 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-[0.2em] uppercase font-semibold">
              Systems Online & Ready
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-8 text-white w-full">
            Premium IT & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]">
              Web Solutions.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl text-base sm:text-lg text-gray-400 mb-12 leading-relaxed font-medium px-4">
            Welcome to Takumi Tech. We build extremely fast websites and provide expert computer support. Simple, honest, and done right the first time.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0">
            <Link 
              href="/ticket"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#030508] font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Log a Ticket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/services" 
              className="flex items-center justify-center px-8 py-4 bg-[#0A0D14] border border-white/10 text-gray-300 font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl transition-all duration-300 hover:bg-white/5 hover:text-white w-full sm:w-auto hover:-translate-y-0.5"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CORE SERVICES GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Permanent, high-quality solutions for your computers, networks, and business websites. We do not take shortcuts.
            </p>
          </div>
          
          <Link href="/services" className="group flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:text-white transition-colors shrink-0">
            See All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className={`group relative p-8 rounded-3xl bg-[#0A0D14] border border-white/5 flex flex-col transition-all duration-300 ${capability.hoverBorder} hover:shadow-xl`}>
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${capability.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl pointer-events-none`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#030508] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className={`w-5 h-5 ${capability.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* WEBSITE DESIGN OPTIONS */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 mb-32">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Website Design Options
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            Choose a foundation build to manage yourself, or choose our managed plan where we handle all the technical heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* OPTION 1 */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#0A0D14] border border-white/5 flex flex-col transition-all duration-300 hover:border-[#00E5FF]/30 hover:shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">The Foundation Build</h3>
            <div className="flex items-baseline gap-2 mb-6 border-b border-white/5 pb-6">
              <span className="text-4xl font-bold text-[#00E5FF]">R950</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Once-off</span>
            </div>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm flex-grow mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                <span>Includes full setup and your <strong>.co.za</strong> web address.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                <span>Up to two rounds of design changes to ensure you are happy.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                <span><strong>No monthly fees.</strong> Future updates are billed at just R150/hr.</span>
              </li>
            </ul>
            <Link 
              href="/ticket?service=web-dev" 
              className="w-full flex items-center justify-center py-4 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#00E5FF] hover:text-[#030508] transition-all duration-300"
            >
              Start Foundation Build
            </Link>
          </div>

          {/* OPTION 2 */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#0A0D14] border border-[#8B5CF6]/30 flex flex-col transition-all duration-300 hover:border-[#8B5CF6]/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-[#8B5CF6] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">The Managed Plan</h3>
            <div className="flex items-baseline gap-2 mb-6 border-b border-white/5 pb-6">
              <span className="text-4xl font-bold text-[#8B5CF6]">R250</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">/ Month</span>
            </div>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm flex-grow mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                <span><strong>R0 upfront</strong> (The entire initial setup is free).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                <span>Covers premium hosting and your web address.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                <span>Includes <strong>1 hour</strong> of technical updates from us every month.</span>
              </li>
            </ul>
            <Link 
              href="/ticket?service=web-dev" 
              className="w-full flex items-center justify-center py-4 bg-[#8B5CF6] text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#7C3AED] transition-colors duration-300"
            >
              Choose Managed Plan
            </Link>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* OPTIONAL ADD-ONS */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-24 z-10 relative will-change-transform"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Optional Enhancements
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Add these powerful upgrades to look more professional and protect your business data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* ADD-ON 1 */}
          <motion.div variants={itemVariants} className="group flex flex-col bg-[#0A0D14] border border-white/5 hover:border-[#00E5FF]/30 rounded-3xl p-6 transition-all duration-300 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20">
                <Mail className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <span className="text-xs font-mono text-[#00E5FF] font-semibold tracking-widest uppercase">R95 / Mo</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Professional Email</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Stop using Gmail. We set up a custom email (info@yourbusiness.co.za) so your business looks credible.
            </p>
            <Link href="/ticket?service=email" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#00E5FF] transition-colors text-left flex items-center gap-1">
              Request Setup <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* ADD-ON 2 */}
          <motion.div variants={itemVariants} className="group flex flex-col bg-[#0A0D14] border border-white/5 hover:border-[#A855F7]/30 rounded-3xl p-6 transition-all duration-300 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#A855F7]/10 flex items-center justify-center border border-[#A855F7]/20">
                <Cloud className="w-5 h-5 text-[#A855F7]" />
              </div>
              <span className="text-xs font-mono text-[#A855F7] font-semibold tracking-widest uppercase">R350 Once</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Secure Cloud Backups</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Never lose files to a broken drive. We configure silent, automated cloud backups for your computers.
            </p>
            <Link href="/ticket?service=backup" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#A855F7] transition-colors text-left flex items-center gap-1">
              Protect Data <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* ADD-ON 3 */}
          <motion.div variants={itemVariants} className="group flex flex-col bg-[#0A0D14] border border-white/5 hover:border-[#10B981]/30 rounded-3xl p-6 transition-all duration-300 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
                <Search className="w-5 h-5 text-[#10B981]" />
              </div>
              <span className="text-xs font-mono text-[#10B981] font-semibold tracking-widest uppercase">R350 Once</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Google SEO Setup</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              We build your complete Google Profile so local clients can easily find your location and trading hours.
            </p>
            <Link href="/ticket?service=google" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#10B981] transition-colors text-left flex items-center gap-1">
              Get Listed <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
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
            Log a support ticket or reach out to our team directly if you have any questions before booking.
          </p>
          <Link 
            href="/ticket"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#030508] font-bold uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Log a Ticket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.section>

    </main>
  );
}