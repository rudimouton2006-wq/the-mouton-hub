"use client";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { Terminal, Cpu, ShieldCheck, Activity, ArrowRight, Zap, Globe, Layers, Search } from "lucide-react";
import DecodeText from "./components/DecodeText";
import RevealWrapper from "./components/RevealWrapper";
import MagneticWrapper from "./components/MagneticWrapper";

function DashboardLogic() {
  const router = useRouter();

  const QUICK_METRICS = [
    { label: "Network Status", value: "Operational", icon: <Globe className="w-4 h-4 text-emerald-400" />, color: "emerald" },
    { label: "System Load", value: "Optimized", icon: <Activity className="w-4 h-4 text-blue-400" />, color: "blue" },
    { label: "Security Level", value: "Zero-Trust", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />, color: "cyan" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-6">
      {/* --------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-7xl pt-24 md:pt-36 pb-16 flex flex-col items-center text-center">
        <RevealWrapper direction="none" delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8 backdrop-blur-xl">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">Takumi Tech Node Active</span>
          </div>
        </RevealWrapper>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
          <DecodeText text="Takumi" /> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(0,163,255,0.3)]">
            <DecodeText text="Tech" delay={500} />
          </span>
        </h1>

        <RevealWrapper delay={1000} direction="up">
          <p className="max-w-2xl text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-4">
            Enterprise-grade IT infrastructure, secure network architecture, and elite global hardware sourcing protocols.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest mb-12">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Pricing dynamically scales per client case & market</span>
          </div>
        </RevealWrapper>

        <div className="flex flex-col sm:flex-row gap-5 relative z-20 w-full sm:w-auto">
          <MagneticWrapper pullStrength={0.12} className="w-full sm:w-auto">
            <button 
              onClick={() => router.push("/services")}
              className="w-full px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.5)] ring-1 ring-blue-400/50"
            >
              Initialize Services <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticWrapper>

          <MagneticWrapper pullStrength={0.08} className="w-full sm:w-auto">
            <button 
              onClick={() => router.push("/shop")}
              className="w-full px-10 py-5 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all text-white backdrop-blur-md"
            >
              Sourcing Protocol <Search className="w-4 h-4" />
            </button>
          </MagneticWrapper>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* TELEMETRY METRICS GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {QUICK_METRICS.map((metric, idx) => (
          <RevealWrapper key={metric.label} delay={1200 + (idx * 200)} direction="up">
            <div className="glass-card p-6 rounded-3xl flex items-center justify-between group hover:border-blue-500/30 transition-all duration-500 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-${metric.color}-500/10 border border-${metric.color}-500/20 flex items-center justify-center shrink-0`}>
                  {metric.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">{metric.label}</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{metric.value}</p>
                </div>
              </div>
              <Zap className="w-3 h-3 text-gray-800 group-hover:text-blue-500/50 transition-colors" />
            </div>
          </RevealWrapper>
        ))}
      </section>

      {/* --------------------------------------------------------- */}
      {/* FEATURE PREVIEW SECTION */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <RevealWrapper delay={1600} direction="right" className="h-full">
          <div className="glass-card rounded-[2.5rem] p-10 md:p-12 border border-white/5 relative overflow-hidden h-full group bg-[#080808] hover:border-cyan-500/30 transition-colors duration-700">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-600/10 transition-colors duration-700" />
            <Layers className="w-10 h-10 text-cyan-500 mb-8" />
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">Architecture Design</h3>
            <p className="text-gray-400 font-medium mb-8 leading-relaxed">
              Explore our proprietary methods for enterprise-grade VLAN segmentation, zero-trust security layers, and high-density network deployments engineered by our technical leads.
            </p>
            <button 
              onClick={() => router.push("/services")}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View Infrastructure Modules <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={1800} direction="left" className="h-full">
          <div className="glass-card rounded-[2.5rem] p-10 md:p-12 border border-white/5 relative overflow-hidden h-full group bg-[#080808] hover:border-emerald-500/30 transition-colors duration-700">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-600/10 transition-colors duration-700" />
            <Cpu className="w-10 h-10 text-emerald-500 mb-8" />
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">Global Sourcing</h3>
            <p className="text-gray-400 font-medium mb-8 leading-relaxed">
              Leverage our secure supply chains for rare and high-performance computational hardware. Exact pricing is dynamically calculated upon request based on your precise configuration.
            </p>
            <button 
              onClick={() => router.push("/shop")}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Initiate Search Protocol <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealWrapper>
      </section>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-[100svh] relative overflow-hidden flex flex-col pt-10">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] bg-blue-600/5 rounded-[100%] blur-[150px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-10" aria-hidden="true" />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Terminal className="w-8 h-8 text-blue-500 animate-pulse" /></div>}>
        <DashboardLogic />
      </Suspense>
    </main>
  );
}