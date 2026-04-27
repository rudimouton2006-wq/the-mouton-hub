import Link from "next/link";
import { ArrowRight, Server, ShieldCheck, Cpu, Activity, Lock, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      
      {/* --------------------------------------------------------- */}
      {/* HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 mt-12 md:mt-20 z-10">
        
        {/* Live Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono text-gray-300 tracking-[0.2em] uppercase">Takumi Node Active</span>
        </div>
        
        {/* Core Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6 uppercase">
          Engineer Your <br className="hidden md:block" />
          <span className="text-gradient drop-shadow-[0_0_40px_rgba(96,165,250,0.3)]">Digital Reality</span>
        </h1>
        
        {/* Mission Statement */}
        <p className="max-w-2xl text-base md:text-lg text-gray-400 mb-10 leading-relaxed font-medium">
          Enterprise-grade IT infrastructure, zero-trust network architecture, and elite global hardware sourcing protocols deployed with uncompromising precision.
        </p>
        
        {/* Primary Action Vectors */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="/services" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs sm:text-sm rounded-none overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto border border-white"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Link 
            href="/contact" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#050505] border border-white/20 text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-none hover:bg-white/5 hover:border-white/40 transition-all w-full sm:w-auto"
          >
            Establish Comms
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* SYSTEM METRICS BAR */}
      {/* --------------------------------------------------------- */}
      <section className="w-full border-y border-white/10 bg-white/[0.02] backdrop-blur-md py-8 my-20 z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <Lock className="w-8 h-8 text-blue-400" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Security Protocol</span>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-200">Zero-Trust Architecture</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/10" />
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <Server className="w-8 h-8 text-emerald-400" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">System Load</span>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-200">99.99% Uptime SLA</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/10" />
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <Globe className="w-8 h-8 text-purple-400" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Logistics</span>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-200">Global Sourcing Matrix</span>
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CORE ARCHITECTURE GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-500 mr-4" />
            <h2 className="text-sm font-mono text-gray-400 tracking-[0.3em] uppercase">System Capabilities</h2>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-500 ml-4" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white">Operational Modules</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Module 1: Network Defense */}
          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-500 flex flex-col rounded-2xl">
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[inset_0_0_25px_rgba(59,130,246,0.4)] transition-all duration-500">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-xl font-black tracking-wider mb-3 uppercase text-white">Network Defense</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow font-medium">
              Enterprise-grade VLAN segmentation and military-encrypted packet routing. We isolate your critical data from external vectors and internal anomalies.
            </p>
            <Link href="/services" className="text-[10px] font-mono text-blue-400 uppercase tracking-widest flex items-center gap-2 hover:text-blue-300 transition-colors mt-auto w-max">
              Access Module <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Module 2: Infrastructure */}
          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-500 flex flex-col rounded-2xl">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[inset_0_0_25px_rgba(16,185,129,0.4)] transition-all duration-500">
              <Server className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-xl font-black tracking-wider mb-3 uppercase text-white">Infrastructure</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow font-medium">
              End-to-end fabrication of physical and digital server environments. From high-density rack deployments to low-level kernel and hypervisor optimization.
            </p>
            <Link href="/services" className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2 hover:text-emerald-300 transition-colors mt-auto w-max">
              Access Module <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Module 3: Global Sourcing */}
          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-500 flex flex-col rounded-2xl">
            <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(168,85,247,0.2)] group-hover:shadow-[inset_0_0_25px_rgba(168,85,247,0.4)] transition-all duration-500">
              <Cpu className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-xl font-black tracking-wider mb-3 uppercase text-white">Global Sourcing</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-grow font-medium">
              Secure supply chains for rare, high-performance computational hardware. Exact pricing dynamically scales based on precise architectural constraints.
            </p>
            <Link href="/shop" className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2 hover:text-purple-300 transition-colors mt-auto w-max">
              Access Module <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* FINAL DIRECTIVE CTA */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-6xl mx-auto my-24 z-10 px-4">
        <div className="glass-card w-full rounded-[2rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#0a0a0a] border border-white/10 relative overflow-hidden group">
          
          {/* Reactive Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-600/20 transition-colors duration-700" />
          
          <div className="flex flex-col text-center lg:text-left relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Require a Custom Deployment?</h2>
            <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
              Initialize a diagnostic ticket. Our engineers will review your operational requirements and construct a Takumi-grade solution tailored to your exact specifications.
            </p>
          </div>
          
          <Link 
            href="/schedule" 
            className="shrink-0 relative z-10 flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all ring-1 ring-blue-400/50 w-full md:w-auto"
          >
            Log Diagnostic Ticket <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>
      </section>

    </div>
  );
}