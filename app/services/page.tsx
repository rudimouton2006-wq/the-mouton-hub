import Link from "next/link";
import { ArrowRight, ShieldCheck, Server, Network, Wrench, Globe, Cpu } from "lucide-react";

export const metadata = {
  title: "Operational Modules | Takumi Tech",
  description: "Explore our masterclass IT solutions, from zero-trust network deployments to absolute device optimization and hardware sourcing.",
};

// ---------------------------------------------------------
// CORE SERVICES DATABASE
// ---------------------------------------------------------
const services = [
  {
    id: "tech-support",
    name: "Tech Support",
    icon: <Server className="w-10 h-10" />,
    color: "cyan",
    hex: "#00E5FF",
    description: "Masterclass software and systems troubleshooting. We eliminate anomalies, resolve deep-rooted OS errors, and restore absolute operational stability to your environment.",
    features: ["Remote & On-Site Triage", "OS Kernel Debugging", "Data Recovery"],
  },
  {
    id: "network",
    name: "Network Support",
    icon: <Network className="w-10 h-10" />,
    color: "blue",
    hex: "#2563EB",
    description: "Enterprise-grade infrastructure deployment. We architect zero-latency routing protocols, micro-segmented VLANs, and military-grade wireless perimeters.",
    features: ["Zero-Trust Architecture", "Router/Switch Config", "Latency Optimization"],
  },
  {
    id: "web-dev",
    name: "Web Dev & Domains",
    icon: <Globe className="w-10 h-10" />,
    color: "purple",
    hex: "#A855F7",
    description: "Cutting-edge digital environments built on Next.js and Vercel. We engineer lightning-fast, highly optimized web architectures and handle end-to-end domain logistics.",
    features: ["React/Next.js Architecture", "DNS Routing", "SEO Optimization"],
  },
  {
    id: "sourcing",
    name: "Hardware Sourcing",
    icon: <Cpu className="w-10 h-10" />,
    color: "emerald",
    hex: "#10B981",
    description: "Access our private global logistics matrix. We bypass standard bottlenecks to procure high-density compute nodes, rare components, and enterprise switches.",
    features: ["Enterprise Procurement", "Custom PC Builds", "Market Price Dynamics"],
  },
  {
    id: "device-opt",
    name: "Device Optimizations",
    icon: <ShieldCheck className="w-10 h-10" />,
    color: "cyan",
    hex: "#00E5FF",
    description: "We don't just clear cache; we re-engineer your system's performance. Thermal throttling reduction, deep malware purging, and aggressive telemetry disabling.",
    features: ["Thermal Repasting", "Bloatware Purging", "Registry Optimization"],
  },
  {
    id: "repairs",
    name: "Hardware Repairs",
    icon: <Wrench className="w-10 h-10" />,
    color: "red",
    hex: "#EF4444",
    description: "Surgical hardware restoration. From blown capacitors to shattered displays, our engineering bay restores compromised physical architecture to factory parameters.",
    features: ["Component-Level Repair", "Display Replacement", "Power Supply Diagnostics"],
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pb-32 z-10">
      
      {/* --------------------------------------------------------- */}
      {/* SERVICES HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-24 pt-12 md:pt-20">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4" />
          <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase">Operational Capabilities</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Architecture <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">Modules</span>
        </h1>
        
        <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          We do not deploy off-the-shelf solutions. Every Takumi Tech operation is a custom-engineered matrix designed for absolute security, zero latency, and infinite scalability.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* THE MASTERCLASS SERVICES GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {services.map((service) => (
            <div key={service.id} className="relative group flex flex-col h-full">
              
              {/* Dynamic Hover Glow based on Service Color */}
              <div 
                className="absolute inset-0 rounded-[2rem] blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: service.hex }}
              />

              <div className="relative z-10 flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:border-white/20 transition-all duration-500">
                
                {/* Header Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
                  style={{ 
                    backgroundColor: `${service.hex}15`, 
                    borderColor: `${service.hex}30`,
                    color: service.hex 
                  }}
                >
                  {service.icon}
                </div>

                {/* Content Matrix */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                    {service.name}
                  </h2>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>
                  
                  {/* Feature Array */}
                  <ul className="flex flex-col gap-3 mb-10 border-t border-white/5 pt-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-mono text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.hex }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dynamic Routing Button */}
                <Link 
                  href={`/ticket?category=${service.id}`}
                  className="mt-auto group/btn flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = service.hex;
                    e.currentTarget.style.color = "#050505";
                    e.currentTarget.style.borderColor = service.hex;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  Initialize Protocol <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}