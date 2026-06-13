"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Server, Network, Wrench, Globe, Cpu, 
  Mail, Search, Briefcase, Activity, Clock, MessageCircle, Layers, 
  Cloud, Zap, BatteryCharging, Users, Terminal, X, ArrowUpRight, Ticket 
} from "lucide-react";

// ---------------------------------------------------------
// DATA: CORE SERVICES
// ---------------------------------------------------------
const SERVICES = [
  {
    id: "tech-support",
    name: "Computer Help",
    icon: Server,
    theme: "from-[#00E5FF]/10 to-transparent",
    hoverBorder: "hover:border-[#00E5FF]/30",
    iconColor: "text-[#00E5FF]",
    price: "R150 / Hr",
    description: "Expert help for all your computer problems. We fix errors, recover lost data, and optimize your system.",
    features: ["Fast Troubleshooting", "Software Repairs", "Data Recovery"],
  },
  {
    id: "os-tuning",
    name: "Speed & OS Tuning",
    icon: Zap,
    theme: "from-[#D946EF]/10 to-transparent",
    hoverBorder: "hover:border-[#D946EF]/30",
    iconColor: "text-[#D946EF]",
    price: "R350",
    description: "Strip out bloatware, remove viruses, and reduce system latency for maximum workflow speed and gaming FPS.",
    features: ["Remote Service", "Virus Removal", "Maximum FPS"],
  },
  {
    id: "network",
    name: "Internet & Wi-Fi",
    icon: Network,
    theme: "from-[#2563EB]/10 to-transparent",
    hoverBorder: "hover:border-[#2563EB]/30",
    iconColor: "text-[#2563EB]",
    price: "From R350",
    description: "Reliable internet setups. We build fast, secure connections for your home or office so you never drop offline.",
    features: ["Secure Wi-Fi", "Router Setup", "Fast Connection"],
  },
  {
    id: "ups-network",
    name: "Loadshedding Wi-Fi",
    icon: BatteryCharging,
    theme: "from-[#14B8A6]/10 to-transparent",
    hoverBorder: "hover:border-[#14B8A6]/30",
    iconColor: "text-[#14B8A6]",
    price: "R350 + Parts",
    description: "Never lose internet during power cuts. We supply and configure mini-UPS units for your fibre box and routers.",
    features: ["Supply & Install", "Fibre ONT Support", "Zero Downtime"],
  },
  {
    id: "repairs",
    name: "Physical Repairs",
    icon: Wrench,
    theme: "from-[#F59E0B]/10 to-transparent",
    hoverBorder: "hover:border-[#F59E0B]/30",
    iconColor: "text-[#F59E0B]",
    price: "R150 / Hr + Parts",
    description: "From cooling issues to power problems, we repair your physical devices meticulously so they work perfectly.",
    features: ["Hardware Testing", "Battery Fixes", "Thermal Paste"],
  },
  {
    id: "pc-build",
    name: "Custom PC Builds",
    icon: Layers,
    theme: "from-[#0EA5E9]/10 to-transparent",
    hoverBorder: "hover:border-[#0EA5E9]/30",
    iconColor: "text-[#0EA5E9]",
    price: "R450",
    description: "Already bought your own parts? We will professionally assemble your gaming rig with perfect cable management.",
    features: ["Gaming & Office", "Cable Management", "BIOS Setup"],
  },
  {
    id: "sourcing",
    name: "Buying Tech Parts",
    icon: Cpu,
    theme: "from-[#10B981]/10 to-transparent",
    hoverBorder: "hover:border-[#10B981]/30",
    iconColor: "text-[#10B981]",
    price: "R150 Consult",
    description: "We find the best computer parts for you. We help you buy the right equipment at honest, fair prices.",
    features: ["Part Sourcing", "Compatibility Check", "Honest Advice"],
  },
  {
    id: "web-dev",
    name: "Website Design",
    icon: Globe,
    theme: "from-[#8B5CF6]/10 to-transparent",
    hoverBorder: "hover:border-[#8B5CF6]/30",
    iconColor: "text-[#8B5CF6]",
    price: "From R950",
    description: "Beautiful websites that load fast. We handle everything from the design to getting your professional domain.",
    features: ["Modern Design", "Domain Setup", "Fast Loading"],
  }
];

// ---------------------------------------------------------
// ANIMATION VARIANTS
// ---------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start pb-32 pt-12 md:pt-24 z-10 overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508]">
      
      {/* --------------------------------------------------------- */}
      {/* CONTACT MODAL (POPUP) */}
      {/* --------------------------------------------------------- */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md px-4"
            >
              <div className="bg-[#0A0D14] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-[#2563EB]" />
                
                <button 
                  onClick={() => setIsContactOpen(false)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">How can we help?</h3>
                <p className="text-gray-400 text-sm mb-6">Choose an option below to get in touch or log a formal support request.</p>

                <div className="flex flex-col gap-3">
                  {/* Log a Ticket */}
                  <Link 
                    href="/ticket"
                    className="group flex items-center p-4 rounded-2xl bg-[#00E5FF]/5 border border-[#00E5FF]/20 hover:bg-[#00E5FF]/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00E5FF]/10 flex items-center justify-center shrink-0 mr-4">
                      <Ticket className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[#00E5FF] font-bold text-sm tracking-wide">Log a Support Ticket</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Best for new service requests.</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="w-full h-px bg-white/5 my-1" />

                  {/* Rudi Contact */}
                  <a 
                    href="https://wa.me/27818281861" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-2xl bg-[#030508] border border-white/5 hover:border-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4">
                      <Terminal className="w-4 h-4 text-gray-300" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-semibold text-sm">Message Rudi</h4>
                      <p className="text-gray-500 text-xs mt-0.5">Founder & Lead Engineer</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </a>

                  {/* Alex Contact */}
                  <a 
                    href="https://wa.me/27614955695" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-2xl bg-[#030508] border border-white/5 hover:border-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-4">
                      <Users className="w-4 h-4 text-gray-300" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-semibold text-sm">Message Alex</h4>
                      <p className="text-gray-500 text-xs mt-0.5">Client Relations</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@takumitech.co.za"
                    className="flex items-center justify-center gap-2 w-full pt-4 pb-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" /> info@takumitech.co.za
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00E5FF]/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#8B5CF6]/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%)]" />
      </div>

      {/* --------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto text-center px-4 sm:px-6 mb-20 z-10 will-change-transform"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0A0D14] border border-white/5 mb-8 shadow-sm">
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] tracking-[0.2em] uppercase font-semibold">
            Capabilities & Pricing
          </span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
          Our Expert <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
            Services.
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto px-4">
          Professional tech help made simple. We offer high-quality computer support, fast internet setups, and unbeatable pricing so you never overpay.
        </motion.p>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* SERVICES GRID (8 CARDS) */}
      {/* --------------------------------------------------------- */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 z-10 mb-24 will-change-transform"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                variants={itemVariants} 
                className={`relative group flex flex-col h-full bg-[#0A0D14] border border-white/5 rounded-3xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl ${service.hoverBorder}`}
              >
                <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b ${service.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#030508] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-bold tracking-tight text-white mb-2">
                    {service.name}
                  </h2>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-xl font-bold ${service.iconColor}`}>{service.price}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-col gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${service.iconColor} bg-current`} />
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-gray-500">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <Link 
                      href={`/ticket?service=${service.id}`}
                      className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
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
        variants={containerVariants}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-24 z-10 relative will-change-transform"
      >
        <motion.div 
          variants={itemVariants}
          className="relative group flex flex-col md:flex-row items-center gap-8 bg-[#0A0D14] border border-[#F59E0B]/20 hover:border-[#F59E0B]/40 rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="w-20 h-20 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center border border-[#F59E0B]/20 shrink-0 relative z-10 group-hover:scale-105 transition-transform">
            <Briefcase className="w-8 h-8 text-[#F59E0B]" />
          </div>

          <div className="flex flex-col relative z-10 text-center md:text-left flex-grow">
            <span className="text-[10px] sm:text-xs font-mono text-[#F59E0B] font-bold tracking-widest uppercase mb-2">The All-In-One Pack</span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">The Takumi Retainer</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Keep your business running smoothly with your own personal IT department and professional web presence managed in one single place.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white">2 Hours Monthly</span>
                <span className="text-xs text-gray-500 leading-relaxed">Remote or on-site support to fix any issues.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white">Weekly Checks</span>
                <span className="text-xs text-gray-500 leading-relaxed">We monitor your speed, backups, and antivirus.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white">Web Essentials</span>
                <span className="text-xs text-gray-500 leading-relaxed">Includes your .co.za domain & custom email.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">R450</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">/ Month</span>
              </div>
              <Link 
                href="/ticket?service=retainer"
                className="px-8 py-3.5 bg-[#F59E0B] text-[#030508] font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Apply for Retainer
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
        variants={containerVariants}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-24 z-10 relative will-change-transform"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Optional Enhancements
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Add these powerful upgrades to your project to look more professional or protect your business data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* ADD-ON 1 */}
          <motion.div variants={itemVariants} className="group flex flex-col bg-[#0A0D14] border border-white/5 hover:border-[#00E5FF]/30 rounded-3xl p-6 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/20">
                <Mail className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <span className="text-xs font-mono text-[#00E5FF] font-semibold tracking-widest uppercase">R95 / Mo</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Professional Email</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              Stop using Gmail. We manage a custom email (info@yourbusiness.co.za) for ultimate credibility.
            </p>
            <Link href="/ticket?service=email" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#00E5FF] transition-colors text-left flex items-center gap-1">
              Request Setup <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* ADD-ON 2 */}
          <motion.div variants={itemVariants} className="group flex flex-col bg-[#0A0D14] border border-white/5 hover:border-[#A855F7]/30 rounded-3xl p-6 transition-all duration-300">
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
              Protect Data <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* ADD-ON 3 */}
          <motion.div variants={itemVariants} className="group flex flex-col bg-[#0A0D14] border border-white/5 hover:border-[#10B981]/30 rounded-3xl p-6 transition-all duration-300">
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
              Get Listed <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

        </div>
      </motion.section>

      {/* --------------------------------------------------------- */}
      {/* CLEAN CONTACT CTA */}
      {/* --------------------------------------------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl mx-auto px-4 sm:px-6 mb-16 z-10 text-center will-change-transform"
      >
        <div className="bg-[#0A0D14] border border-white/5 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-3">Ready to get started?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
            Log a support ticket directly or reach out to our team via WhatsApp or email if you have any questions.
          </p>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#030508] font-bold uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Contact Us
          </button>
        </div>
      </motion.section>

    </main>
  );
}