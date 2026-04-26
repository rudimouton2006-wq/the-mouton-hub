"use client";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { Server, ShieldAlert, Cpu, Network, Lock, Wrench, ArrowRight, CheckCircle2, Loader2, Activity } from "lucide-react";
import DecodeText from "../components/DecodeText";
import RevealWrapper from "../components/RevealWrapper";
import MagneticWrapper from "../components/MagneticWrapper";

const SERVICE_MODULES = [
  {
    id: "network",
    title: "Network Architecture",
    description: "Enterprise-grade infrastructure design. From high-throughput fiber routing to intelligent VLAN segmentation and SD-WAN deployment.",
    icon: <Network className="w-8 h-8 text-blue-400" />,
    color: "blue",
    features: ["VLAN Segmentation & Security", "High-Density Wi-Fi Deployment", "SD-WAN & Multi-Site Routing", "Layer 3 Switch Configuration"],
  },
  {
    id: "security",
    title: "Zero-Trust Security",
    description: "Military-grade endpoint protection and perimeter defense. Securing your data against active intrusions and lateral network movement.",
    icon: <Lock className="w-8 h-8 text-emerald-400" />,
    color: "emerald",
    features: ["Next-Gen Firewall Deployment", "Intrusion Detection Systems (IDS)", "Endpoint Detection & Response", "Encrypted VPN Tunnels"],
  },
  {
    id: "hardware",
    title: "Hardware Deployment",
    description: "Custom workstation fabrication and server rack installation. Engineered for absolute maximum computational efficiency.",
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    color: "cyan",
    features: ["Server Rack Integration", "Custom Workstation Builds", "RAID Storage Arrays", "Thermal & Power Optimization"],
  },
  {
    id: "diagnostics",
    title: "Advanced Diagnostics",
    description: "Deep-level system troubleshooting. We isolate hardware failures and software anomalies before they cause critical downtime.",
    icon: <Activity className="w-8 h-8 text-purple-400" />,
    color: "purple",
    features: ["Kernel-Level Debugging", "Hardware Failure Isolation", "Network Bottleneck Analysis", "Data Recovery Protocols"],
  },
];

function ServicesLogic() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center relative z-10 px-4 md:px-6">
      
      {/* --------------------------------------------------------- */}
      {/* HEADER */}
      {/* --------------------------------------------------------- */}
      <header className="w-full max-w-5xl mb-24 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-md">
          <Server className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">Infrastructure Protocols</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
          <DecodeText text="System" /> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <DecodeText text="Architecture" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1000} direction="up">
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            We engineer, deploy, and maintain high-performance IT ecosystems. From physical server installations to encrypted network routing, our solutions scale with your operational demands.
          </p>
        </RevealWrapper>
      </header>

      {/* --------------------------------------------------------- */}
      {/* SERVICE GRID */}
      {/* --------------------------------------------------------- */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {SERVICE_MODULES.map((service, index) => (
          <RevealWrapper key={service.id} delay={index * 200} direction="up" className="h-full">
            <div className={`glass-card h-full rounded-[2.5rem] p-8 md:p-12 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:bg-${service.color}-900/10 hover:border-${service.color}-500/30 transition-all duration-700 ease-out group flex flex-col relative overflow-hidden`}>
              
              {/* Dynamic Glow */}
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-${service.color}-500/10 rounded-full blur-[80px] group-hover:bg-${service.color}-500/20 group-hover:scale-150 transition-all duration-700 pointer-events-none`} />
              
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-${service.color}-500/50 group-hover:shadow-[0_0_30px_rgba(var(--${service.color}-rgb),0.3)] transition-all duration-500 shrink-0`}>
                  {service.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-400 text-base font-medium leading-relaxed mb-10 relative z-10">
                {service.description}
              </p>

              <div className="mt-auto relative z-10">
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 text-${service.color}-400/70 group-hover:text-${service.color}-400 transition-colors`} />
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wide leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* --------------------------------------------------------- */}
      {/* ESCALATION CTA */}
      {/* --------------------------------------------------------- */}
      <RevealWrapper delay={400} direction="up" className="w-full max-w-5xl mb-10">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 border border-cyan-500/20 bg-gradient-to-br from-cyan-900/10 to-black/60 shadow-[0_0_80px_rgba(34,211,238,0.05)] text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-20 h-20 rounded-3xl bg-black/60 backdrop-blur-xl flex items-center justify-center mb-8 border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.2)] relative z-10">
            <ShieldAlert className="w-10 h-10 text-cyan-400" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 relative z-10">
            Require Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Integration?</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-medium relative z-10">
            Bypass standard diagnostic ticketing and schedule a direct consultation with Lead Engineer Rudi Mouton to discuss enterprise-level architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
            <MagneticWrapper pullStrength={0.15} className="w-full sm:w-auto">
              <button 
                onClick={() => router.push("/schedule")}
                className="w-full sm:w-auto px-10 py-5 bg-cyan-600 hover:bg-cyan-500 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(34,211,238,0.2)] hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)] ring-1 ring-cyan-400/50"
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </MagneticWrapper>
            
            <MagneticWrapper pullStrength={0.1} className="w-full sm:w-auto">
              <button 
                onClick={() => router.push("/contact")}
                className="w-full sm:w-auto px-10 py-5 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all text-white"
              >
                Log Ticket <Wrench className="w-4 h-4" />
              </button>
            </MagneticWrapper>
          </div>

        </div>
      </RevealWrapper>

    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 flex flex-col items-center overflow-hidden relative w-full">
      {/* Global Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-cyan-600/5 rounded-[100%] blur-[150px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center w-full"><Loader2 className="w-10 h-10 text-cyan-500 animate-spin" /></div>}>
        <ServicesLogic />
      </Suspense>
    </main>
  );
}