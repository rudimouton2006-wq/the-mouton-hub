"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Network, Wrench, Globe, Cpu, Zap } from "lucide-react";

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
  }
];

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
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 selection:bg-[#00E5FF]/30 selection:text-white bg-transparent">
      
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
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00E5FF] to-transparent rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.08, 0.15, 0.08],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#8B5CF6] to-transparent rounded-full blur-[130px] mix-blend-screen" 
          />
          
          {/* Base Noise Texture for Premium Grain */}
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
      {/* SERVICES GRID MATRIX */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {SERVICES.map((service) => {
            const Icon = service.icon;
            
            return (
              <motion.div 
                key={service.id}
                variants={cardVariants} 
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative group flex flex-col h-full bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-10 overflow-hidden transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10 ${service.borderGlow} ${service.shadowGlow}`}
              >
                {/* Dynamic Hover Gradient Sweep */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.theme} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none`} />
                
                {/* Top Border Glow Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Icon Header */}
                  <div className={`w-16 h-16 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out shadow-inner relative overflow-hidden mb-8`}>
                    <Icon className={`w-8 h-8 ${service.iconColor} relative z-10 ${service.iconDropShadow}`} />
                  </div>
                  
                  {/* Typography */}
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-white transition-colors">
                    {service.name}
                  </h2>
                  
                  <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-8 flex-grow font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
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
                  
                  {/* Action Button */}
                  <div className="mt-auto">
                    <Link 
                      href={`/ticket`}
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

    </main>
  );
}