"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Network, Wrench, Globe, Cpu, Mail, Search, Briefcase, Activity, BadgePercent, Clock, PenTool, MessageCircle, Layers } from "lucide-react";

// ---------------------------------------------------------
// DATA: CORE SERVICES
// ---------------------------------------------------------
const SERVICES = [
  {
    id: "tech-support",
    name: "Computer Help",
    icon: Server,
    theme: "from-[#00E5FF] to-[#2563EB]",
    borderGlow: "group-hover:border-[#00E5FF]/50",
    shadowGlow: "group-hover:shadow-[0_20px_60px_rgba(0,229,255,0.15)]",
    iconColor: "text-[#00E5FF]",
    iconDropShadow: "drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]",
    description: "Expert help for all your computer problems. We fix errors, recover lost data, and make sure your system runs smoothly.",
    features: ["Fast Troubleshooting", "Software Repairs", "Data Recovery"],
  },
  {
    id: "network",
    name: "Internet & Wi-Fi",
    icon: Network,
    theme: "from-[#2563EB] to-[#3B82F6]",
    borderGlow: "group-hover:border-[#2563EB]/50",
    shadowGlow: "group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]",
    iconColor: "text-[#2563EB]",
    iconDropShadow: "drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]",
    description: "Reliable internet setups. We build fast, secure connections for your home or office so you never drop offline.",
    features: ["Secure Wi-Fi", "Router Setup", "Fast Connection"],
  },
  {
    id: "web-dev",
    name: "Website Design",
    icon: Globe,
    theme: "from-[#8B5CF6] to-[#D946EF]",
    borderGlow: "group-hover:border-[#8B5CF6]/50",
    shadowGlow: "group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]",
    iconColor: "text-[#8B5CF6]",
    iconDropShadow: "drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]",
    description: "Beautiful websites that load fast. We handle everything from the design to getting your professional web address.",
    features: ["Modern Design", "Domain Setup", "Fast Loading"],
  },
  {
    id: "sourcing",
    name: "Buying Tech & Parts",
    icon: Cpu,
    theme: "from-[#10B981] to-[#059669]",
    borderGlow: "group-hover:border-[#10B981]/50",
    shadowGlow: "group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]",
    iconColor: "text-[#10B981]",
    iconDropShadow: "drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]",
    description: "We find the best computer parts for you. We help you buy the right equipment and build custom PCs at fair prices.",
    features: ["Custom PC Builds", "Buying Parts", "Honest Tech Advice"],
  },
  {
    id: "device-opt",
    name: "Computer Speed-Up",
    icon: ShieldCheck,
    theme: "from-[#F43F5E] to-[#E11D48]",
    borderGlow: "group-hover:border-[#F43F5E]/50",
    shadowGlow: "group-hover:shadow-[0_20px_60px_rgba(244,63,94,0.15)]",
    iconColor: "text-[#F43F5E]",
    iconDropShadow: "drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]",
    description: "Make your devices run like new again. We remove slow apps, clean out viruses, and boost your overall speed.",
    features: ["Performance Boost", "Virus Removal", "System Clean-up"],
  },
  {
    id: "repairs",
    name: "Physical Repairs",
    icon: Wrench,
    theme: "from-[#F59E0B] to-[#D97706]",
    borderGlow: "group-hover:border-[#F59E0B]/50",
    shadowGlow: "group-hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)]",
    iconColor: "text-[#F59E0B]",
    iconDropShadow: "drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]",
    description: "Fixing broken tech. From cooling issues to power problems, we repair your physical devices so they work perfectly.",
    features: ["Hardware Testing", "Battery Fixes", "Thermal Paste"],
  },
  {
    id: "pc-build",
    name: "Custom PC Assembly",
    icon: Layers,
    theme: "from-[#0EA5E9] to-[#0284C7]",
    borderGlow: "group-hover:border-[#0EA5E9]/50",
    shadowGlow: "group-hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]",
    iconColor: "text-[#0EA5E9]",
    iconDropShadow: "drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]",
    description: "Already bought your own parts? Bring them to us! We will professionally assemble your gaming rig or workstation with perfect cable management for a reasonable flat rate.",
    features: ["Gaming & Office PCs", "Clean Cable Management", "BIOS Setup & Testing"],
  }
];

// ---------------------------------------------------------
// ANIMATION VARIANTS (Strictly Typed)
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
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

export default function ServicesPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-transparent">
      
      {/* --------------------------------------------------------- */}
      {/* INSANELY BEAUTIFUL AMBIENT BACKGROUND */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00E5FF] to-transparent rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08], x: [0, -60, 0], y: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#8B5CF6] to-transparent rounded-full blur-[130px] mix-blend-screen" 
          />
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0" />
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl mx-auto text-center px-4 sm:px-6 mb-24 z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4 opacity-70 shadow-[0_0_10px_#00E5FF]" />
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(0,229,255,0.6)] font-bold">
            What We Do
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-70 shadow-[0_0_10px_#00E5FF]" />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter uppercase mb-8 leading-[0.9] text-white drop-shadow-2xl">
          Our Expert <br />
          <span className="relative inline-block mt-3">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6] opacity-40 blur-2xl rounded-full" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#3B82F6] to-[#8B5CF6]">
              Services.
            </span>
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-[#A1A1AA] text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto mt-8 backdrop-blur-sm bg-[#030508]/30 p-4 rounded-2xl border border-white/[0.02]">
          Professional tech help made simple. We offer high-quality computer support, fast internet setups, and beautiful business websites.
        </motion.p>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* SERVICES GRID MATRIX (PERFECTLY BALANCED FOR 7 ITEMS) */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 z-10 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            
            const isCenteredCard = index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : "";

            return (
              <motion.div 
                key={service.id}
                variants={cardVariants} 
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative group flex flex-col h-full bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-10 overflow-hidden transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 ${service.borderGlow} ${service.shadowGlow} ${isCenteredCard}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${service.theme} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none`} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out shadow-inner relative overflow-hidden mb-8`}>
                    <Icon className={`w-8 h-8 ${service.iconColor} relative z-10 ${service.iconDropShadow}`} />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-white transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-8 flex-grow font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-col gap-3 pt-6 border-t border-white/5 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-current ${service.iconColor} shadow-[0_0_8px_currentColor]`} />
                        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-200 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Link 
                      href={`/ticket?service=${service.id}`}
                      className={`inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 ${service.iconColor}`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-2`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* MONTHLY BUSINESS RETAINER */}
      {/* --------------------------------------------------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-24 z-10 relative"
      >
        <motion.div 
          variants={itemVariants}
          className="relative group flex flex-col md:flex-row items-center gap-10 bg-[#080B12]/90 backdrop-blur-3xl border border-[#F59E0B]/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_10px_50px_rgba(245,158,11,0.15)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.25)] transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="w-24 h-24 rounded-3xl bg-[#F59E0B]/10 flex items-center justify-center border border-[#F59E0B]/30 shadow-[inset_0_0_20px_rgba(245,158,11,0.2)] shrink-0 relative z-10 group-hover:scale-105 transition-transform duration-500">
            <Briefcase className="w-12 h-12 text-[#F59E0B] drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
          </div>

          <div className="flex flex-col relative z-10 text-center md:text-left flex-grow">
            <span className="text-[10px] sm:text-xs font-mono text-[#F59E0B] font-bold tracking-[0.2em] uppercase mb-2">The All-In-One Business Pack</span>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">The Takumi Retainer</h3>
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium mb-6">
              Stop waiting for things to break. Keep your business running smoothly with your own personal IT department and professional web presence managed in one place.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
              <div className="flex flex-col gap-2">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">2 Hours Monthly</span>
                <span className="text-xs text-gray-400">Remote or on-site support to fix any issues.</span>
              </div>
              <div className="flex flex-col gap-2">
                <Activity className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">Weekly Checks</span>
                <span className="text-xs text-gray-400">We monitor your speed, backups, and antivirus.</span>
              </div>
              <div className="flex flex-col gap-2">
                <Globe className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">Web Essentials</span>
                <span className="text-xs text-gray-400">Includes your .co.za domain and one custom business email.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
              <span className="text-2xl md:text-3xl font-black text-white">R450 <span className="text-sm text-gray-500 font-mono tracking-widest uppercase">/ Month</span></span>
              <Link 
                href="/ticket?service=retainer"
                className="group/btn relative px-8 py-4 bg-[#F59E0B] text-[#030508] font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:bg-white transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                Apply for Retainer <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* OPTIONAL UPGRADES & ADD-ONS */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-20 z-10 relative"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4 opacity-50" />
            <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase font-bold">
              Maximize Your Setup
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4 opacity-50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
            Optional Enhancements
          </h2>
          <p className="text-[#A1A1AA] text-sm md:text-base font-medium max-w-2xl">
            Add these powerful upgrades to your project to look more professional or attract more local customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ADD-ON 1: BUSINESS EMAIL */}
          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] hover:border-[#00E5FF]/40 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/30 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_10px_rgba(0,229,255,0.2)]">
              <Mail className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-wider text-white mb-2">Professional Email</h3>
            <span className="text-xs font-mono text-[#00E5FF] font-bold tracking-widest uppercase mb-4 block">R95 / Month</span>
            <p className="text-[#A1A1AA] text-sm leading-relaxed font-medium mb-8 flex-grow">
              Stop using Gmail for your business. We will set up and manage a professional email address (like info@yourbusiness.co.za) so you look 100% credible.
            </p>
            <Link href="/ticket?service=email" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-[#00E5FF] transition-colors mt-auto">
              Request Setup <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ADD-ON 2: LOGO DESIGN */}
          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] hover:border-[#A855F7]/40 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#A855F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 flex items-center justify-center border border-[#A855F7]/30 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_10px_rgba(168,85,247,0.2)]">
              <PenTool className="w-6 h-6 text-[#A855F7]" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-wider text-white mb-2">Custom Logo Design</h3>
            <span className="text-xs font-mono text-[#A855F7] font-bold tracking-widest uppercase mb-4 block">R450 Once-off</span>
            <p className="text-[#A1A1AA] text-sm leading-relaxed font-medium mb-8 flex-grow">
              A great business needs a great look. We will design a high-quality, modern logo for your brand to make you stand out from the competition.
            </p>
            <Link href="/ticket?service=logo" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-[#A855F7] transition-colors mt-auto">
              Request Design <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ADD-ON 3: GOOGLE SEO */}
          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] hover:border-[#10B981]/40 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/30 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_10px_rgba(16,185,129,0.2)]">
              <Search className="w-6 h-6 text-[#10B981]" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-wider text-white mb-2">Get Found On Google</h3>
            <span className="text-xs font-mono text-[#10B981] font-bold tracking-widest uppercase mb-4 block">R350 Once-off</span>
            <p className="text-[#A1A1AA] text-sm leading-relaxed font-medium mb-8 flex-grow">
              We set up your complete Google Profile. This includes adding your website, trading hours, location, contact details, and uploading your logo so local clients find you easily.
            </p>
            <Link href="/ticket?service=google" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-[#10B981] transition-colors mt-auto">
              Request Setup <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* QUICK CONTACT ALTERNATIVES (WHATSAPP / EMAIL) */}
      {/* --------------------------------------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-12 z-10 text-center"
      >
        <p className="text-gray-400 text-sm font-medium mb-6">Need to chat with us before booking?</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://wa.me/27818281861" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
          <a 
            href="mailto:rudi@takumitech.co.za" 
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300"
          >
            <Mail className="w-4 h-4" /> Email Us
          </a>
        </div>
      </motion.section>

    </main>
  );
}