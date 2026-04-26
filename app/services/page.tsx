"use client";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { Server, ShieldCheck, Network, Cpu, ArrowRight, Loader2, Zap, Layers } from "lucide-react";
import DecodeText from "../components/DecodeText";
import RevealWrapper from "../components/RevealWrapper";
import MagneticWrapper from "../components/MagneticWrapper";

const ARCHITECTURE_MODULES = [
  {
    id: "01",
    title: "Network Architecture & Routing",
    icon: <Network className="w-8 h-8 text-blue-400" />,
    color: "blue",
    description: "Design and deployment of high-availability network infrastructures. Specializing in enterprise-grade VLAN segmentation, latency reduction, and seamless inter-node communication.",
    tags: ["VLAN Segmentation", "Packet Prioritization", "Failover Systems"]
  },
  {
    id: "02",
    title: "Enterprise IT Infrastructure",
    icon: <Server className="w-8 h-8 text-indigo-400" />,
    color: "indigo",
    description: "End-to-end fabrication of physical and digital IT environments. From server rack installations to professional workstation deployments operating on the Takumi standard of precision.",
    tags: ["Server Deployment", "Hardware Integration", "System Diagnostics"]
  },
  {
    id: "03",
    title: "Zero-Trust Security Protocols",
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    color: "cyan",
    description: "Implementation of advanced, defense-in-depth security parameters. We lock down network perimeters, establish secure API routing, and prevent unauthorized telemetry leaks.",
    tags: ["Endpoint Security", "Traffic Encryption", "Access Control"]
  },
  {
    id: "04",
    title: "Low-Level System Optimization",
    icon: <Cpu className="w-8 h-8 text-emerald-400" />,
    color: "emerald",
    description: "Deep kernel-level tuning for maximum computational efficiency. Utilizing custom OS configurations (such as AtlasOS) to strip bloatware and maximize hardware resource allocation.",
    tags: ["OS Stripping", "Resource Allocation", "Thermal Profiling"]
  }
];

function ServicesLogic() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center relative z-10 px-4 md:px-6">
      
      {/* --------------------------------------------------------- */}
      {/* HEADER SECTION */}
      {/* --------------------------------------------------------- */}
      <header className="w-full max-w-5xl mb-24 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-md">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">System Capabilities</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
          <DecodeText text="Infrastructure" /> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <DecodeText text="Architecture" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1000} direction="up">
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Takumi Tech engineers elite digital ecosystems. We do not offer pre-packaged solutions; every network, server, and system is meticulously custom-designed to match your exact operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-500/5 p-4 rounded-xl border border-blue-500/20 max-w-3xl mx-auto">
            <Zap className="w-4 h-4 shrink-0" />
            <span className="text-center sm:text-left leading-relaxed">
              <strong>Dynamic Assessment:</strong> All infrastructure projects require a preliminary diagnostic. Costs scale dynamically based on the hardware scope and architectural complexity.
            </span>
          </div>
        </RevealWrapper>
      </header>

      {/* --------------------------------------------------------- */}
      {/* CAPABILITIES GRID */}
      {/* --------------------------------------------------------- */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
        {ARCHITECTURE_MODULES.map((module, idx) => (
          <RevealWrapper key={module.id} delay={200 + (idx * 200)} direction="up" className="h-full">
            <div className={`glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-[#080808] relative overflow-hidden h-full group hover:border-${module.color}-500/30 transition-colors duration-700 flex flex-col`}>
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${module.color}-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-${module.color}-600/10 transition-colors duration-700`} />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-${module.color}-500/10 flex items-center justify-center border border-${module.color}-500/20 shadow-[0_0_20px_rgba(0,0,0,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all`}>
                  {module.icon}
                </div>
                <span className={`text-4xl font-black text-white/5 group-hover:text-${module.color}-500/20 transition-colors select-none`}>
                  {module.id}
                </span>
              </div>

              <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-4 relative z-10">
                {module.title}
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed mb-8 relative z-10 flex-grow">
                {module.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto pt-6 border-t border-white/5">
                {module.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* --------------------------------------------------------- */}
      {/* CALL TO ACTION */}
      {/* --------------------------------------------------------- */}
      <RevealWrapper delay={400} direction="up" className="w-full max-w-4xl mb-24">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-14 border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-[#050505] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
              Require a Custom Deployment?
            </h2>
            <p className="text-blue-200 text-sm md:text-base font-medium leading-relaxed">
              Initialize a diagnostic ticket. Our engineers will review your operational requirements and engineer a Takumi-grade solution.
            </p>
          </div>

          <MagneticWrapper pullStrength={0.15} className="relative z-10 w-full md:w-auto shrink-0">
            <button 
              onClick={() => router.push("/contact")}
              className="w-full md:w-auto px-10 py-6 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.6)] ring-1 ring-blue-400/50"
            >
              Log Diagnostic Ticket <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticWrapper>
        </div>
      </RevealWrapper>

    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-[100svh] pt-24 flex flex-col items-center overflow-hidden relative w-full">
      {/* Global Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-cyan-600/5 rounded-[100%] blur-[150px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center w-full"><Loader2 className="w-10 h-10 text-cyan-500 animate-spin" /></div>}>
        <ServicesLogic />
      </Suspense>
    </main>
  );
}