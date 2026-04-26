"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Wrench, ShieldCheck, Cpu, Activity, Clock, Server } from "lucide-react";
import DecodeText from "./components/DecodeText";
import MagneticWrapper from "./components/MagneticWrapper";
import RevealWrapper from "./components/RevealWrapper";

const QUICK_ACTIONS = [
  {
    id: "diagnostics",
    title: "Diagnostic Ticketing",
    description: "Initialize a secure support ticket for hardware, network, or software anomalies.",
    icon: <Wrench className="w-8 h-8 text-blue-400" />,
    color: "blue",
    href: "/contact",
  },
  {
    id: "sourcing",
    title: "Hardware Procurement",
    description: "Deploy search protocols for enterprise-grade components and custom builds.",
    icon: <Cpu className="w-8 h-8 text-emerald-400" />,
    color: "emerald",
    href: "/shop",
  },
  {
    id: "architecture",
    title: "Network Architecture",
    description: "Review service protocols for infrastructure optimization and security deployment.",
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    color: "cyan",
    href: "/services",
  },
];

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch on initial render

  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden">
      
      {/* ----------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ----------------------------------------------------- */}
      <section className="w-full min-h-[85vh] flex flex-col items-center justify-center relative px-4 md:px-6 pt-10 pb-20">
        
        {/* Deep Space Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-[100%] blur-[100px] pointer-events-none z-0" aria-hidden="true" />
        <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <RevealWrapper delay={100} direction="down">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(0,163,255,0.1)]">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">
                System Status: <span className="text-emerald-400 font-bold">Operational</span>
              </span>
            </div>
          </RevealWrapper>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">
            <DecodeText text="Advanced IT" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 drop-shadow-[0_0_40px_rgba(0,163,255,0.2)]">
              <DecodeText text="Architecture" delay={600} />
            </span>
          </h1>

          {/* Subtitle */}
          <RevealWrapper delay={1000} direction="up">
            <p className="text-gray-400 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
              Engineered in Cape Town. Deploying high-performance hardware sourcing, secure network infrastructures, and precision diagnostic ticketing.
            </p>
          </RevealWrapper>

          {/* Primary CTA */}
          <RevealWrapper delay={1300} direction="up">
            <MagneticWrapper pullStrength={0.2}>
              <button 
                onClick={() => router.push("/contact")}
                className="px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-4 transition-all shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)] hover:-translate-y-1"
              >
                Access Support Portal <ArrowRight className="w-5 h-5" />
              </button>
            </MagneticWrapper>
          </RevealWrapper>

        </div>
      </section>

      {/* ----------------------------------------------------- */}
      {/* QUICK ACTIONS DIRECTORY */}
      {/* ----------------------------------------------------- */}
      <section className="w-full max-w-7xl px-4 md:px-6 pb-32 relative z-10">
        
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-sm md:text-base font-mono font-bold text-gray-400 uppercase tracking-widest">
            Systems Directory
          </h2>
          <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUICK_ACTIONS.map((action, index) => (
            <RevealWrapper key={action.id} delay={index * 150} direction="up" className="h-full">
              <div 
                onClick={() => router.push(action.href)}
                className={`glass-card h-full rounded-[2rem] p-8 md:p-10 border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent hover:bg-${action.color}-900/10 hover:border-${action.color}-500/30 transition-all duration-700 ease-out group flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden`}
              >
                {/* Hover Glare */}
                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-${action.color}-500/10 rounded-full blur-[80px] group-hover:bg-${action.color}-500/20 group-hover:scale-150 transition-all duration-700 pointer-events-none`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-${action.color}-500/50 group-hover:shadow-[0_0_30px_rgba(var(--${action.color}-rgb),0.3)] transition-all duration-500 mb-8 relative z-10`}>
                  {action.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                  {action.title}
                </h3>
                
                <p className="text-sm text-gray-400 font-medium leading-relaxed mb-10 flex-grow relative z-10">
                  {action.description}
                </p>

                <div className="flex items-center text-xs font-mono font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors relative z-10 mt-auto">
                  Initialize <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </section>

      {/* ----------------------------------------------------- */}
      {/* LIVE TELEMETRY WIDGET */}
      {/* ----------------------------------------------------- */}
      <section className="w-full max-w-7xl px-4 md:px-6 pb-20 relative z-10">
        <RevealWrapper delay={300} direction="up">
          <div className="glass-card w-full rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-gradient-to-br from-black/80 to-[#080808] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
            
            <div className="flex-1 space-y-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Operational <span className="text-blue-400">Telemetry</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-md font-medium leading-relaxed">
                Systems are fully integrated and actively monitoring incoming diagnostic requests. Lead Engineer Rudi Mouton is available for immediate escalation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full md:w-auto relative z-10">
              <div className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[140px]">
                <Activity className="w-6 h-6 text-emerald-400 mb-3" />
                <span className="text-2xl font-black text-white">99.9%</span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">Uptime</span>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[140px]">
                <Clock className="w-6 h-6 text-blue-400 mb-3" />
                <span className="text-2xl font-black text-white">&lt; 24h</span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">Response</span>
              </div>
            </div>
            
          </div>
        </RevealWrapper>
      </section>

    </div>
  );
}