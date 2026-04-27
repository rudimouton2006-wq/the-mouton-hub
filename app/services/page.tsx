import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Network, Lock, Database, Cpu } from "lucide-react";

export const metadata = {
  title: "Architecture Modules | Takumi Tech",
  description: "Explore our proprietary methods for enterprise-grade VLAN segmentation, zero-trust security layers, and high-density network deployments.",
};

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-12 md:pt-20">
      
      {/* --------------------------------------------------------- */}
      {/* SERVICES HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-24 z-10">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500 mr-4" />
          <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase">Operational Capabilities</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500 ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Enterprise <br />
          <span className="text-gradient">Architecture</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          We do not deploy off-the-shelf solutions. Every Takumi Tech deployment is a custom-engineered matrix designed for absolute security, zero latency, and infinite scalability.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CORE SERVICE MODULES (Z-Pattern Grid) */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-24 md:gap-32 mb-32 z-10">

        {/* Module 01: Zero-Trust Network Defense */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-[80px] pointer-events-none group-hover:bg-blue-600/30 transition-colors duration-700" />
            <div className="glass-card aspect-[4/3] rounded-3xl p-8 relative overflow-hidden border border-blue-500/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale group-hover:scale-105 transition-transform duration-1000" />
              <ShieldCheck className="w-32 h-32 text-blue-400 relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="text-[10px] font-mono text-blue-400 tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">Module 01</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">Zero-Trust Network Defense</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The perimeter is dead. We architect networks where no entity—internal or external—is implicitly trusted. Utilizing micro-segmentation, deeply encrypted packet routing, and dynamic access policies, we isolate your critical data payloads from lateral movement and advanced persistent threats (APTs).
            </p>
            <ul className="flex flex-col gap-3 mb-8 w-full">
              {['VLAN Micro-segmentation', 'Intrusion Detection/Prevention (IDS/IPS)', 'Military-Grade Tunneling & VPNs'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-mono text-gray-300">
                  <Lock className="w-4 h-4 text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Module 02: High-Density Infrastructure */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-emerald-600/20 rounded-3xl blur-[80px] pointer-events-none group-hover:bg-emerald-600/30 transition-colors duration-700" />
            <div className="glass-card aspect-[4/3] rounded-3xl p-8 relative overflow-hidden border border-emerald-500/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale group-hover:scale-105 transition-transform duration-1000" />
              <Server className="w-32 h-32 text-emerald-400 relative z-10 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="text-[10px] font-mono text-emerald-400 tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">Module 02</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">High-Density Infrastructure</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Physical and virtual deployment built for extreme computational loads. We engineer custom server racks, establish robust hypervisor layers, and guarantee 99.99% uptime via redundant power and automated failover systems. Built to handle massive I/O operations without thermal throttling.
            </p>
            <ul className="flex flex-col gap-3 mb-8 w-full">
              {['Bare-Metal Server Provisioning', 'Proxmox & VMware Hypervisors', 'Automated Failover Clustering'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-mono text-gray-300">
                  <Network className="w-4 h-4 text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Module 03: Data Logistics & Sourcing */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-purple-600/20 rounded-3xl blur-[80px] pointer-events-none group-hover:bg-purple-600/30 transition-colors duration-700" />
            <div className="glass-card aspect-[4/3] rounded-3xl p-8 relative overflow-hidden border border-purple-500/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale group-hover:scale-105 transition-transform duration-1000" />
              <Database className="w-32 h-32 text-purple-400 relative z-10 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="text-[10px] font-mono text-purple-400 tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">Module 03</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">Logistics & Sourcing</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The bottleneck of innovation is hardware availability. Takumi Tech utilizes a private global sourcing matrix to secure enterprise-grade switches, rare compute nodes, and high-performance storage arrays. We handle the supply chain so you can focus on the deployment.
            </p>
            <ul className="flex flex-col gap-3 mb-8 w-full">
              {['Global Supply Chain Access', 'Hardware Component Auditing', 'Dynamic Market Pricing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-mono text-gray-300">
                  <Cpu className="w-4 h-4 text-purple-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* --------------------------------------------------------- */}
      {/* INITIALIZATION PROTOCOL */}
      {/* --------------------------------------------------------- */}
      <section className="w-full bg-[#080808] border-t border-white/5 py-24 z-10">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 rotate-45">
            <div className="-rotate-45">
              <Lock className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">System Diagnostics Required</h2>
          <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Prior to any architectural deployment, our engineers must audit your current operational parameters. Initialize a briefing to begin the process.
          </p>
          <Link 
            href="/schedule" 
            className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-none overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule Briefing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </section>

    </div>
  );
}