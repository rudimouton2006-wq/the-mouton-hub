import Link from "next/link";
import { ArrowRight, Terminal, Cpu, Fingerprint, ShieldAlert, Zap, Lock } from "lucide-react";

export const metadata = {
  title: "Engineering Team & Diagnostics | Takumi Tech",
  description: "Meet the elite system architects, network defense specialists, and infrastructure engineers driving Takumi Tech.",
};

// ---------------------------------------------------------
// ENGINEERING DISCIPLINES DATABASE
// ---------------------------------------------------------
const engineeringDisciplines = [
  {
    id: "ARCH-01",
    role: "Lead Systems Architect",
    focus: "Low-Level Kernel Ops & Hypervisor Routing",
    clearance: "Level 5 / Absolute",
    icon: <Terminal className="w-6 h-6 text-cyan-400" />,
    color: "cyan",
    description: "Responsible for the overarching blueprint of client deployments. Specializes in bare-metal hypervisor configuration, Linux kernel optimization, and zero-latency routing protocols.",
    skills: ["Proxmox VE", "BGP/OSPF", "Kernel Tuning", "C/Rust"],
  },
  {
    id: "DEF-02",
    role: "Network Defense Specialist",
    focus: "Intrusion Prevention & Packet Auditing",
    clearance: "Level 4 / Restricted",
    icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
    color: "red",
    description: "Operates on the philosophy of Zero-Trust. Designs military-grade VLAN micro-segmentation, deploys advanced persistent threat (APT) honey-pots, and actively audits network traffic anomalies.",
    skills: ["Wireshark", "pfSense/OPNsense", "Deep Packet Inspection", "Zero-Trust Auth"],
  },
  {
    id: "INF-03",
    role: "Physical Infrastructure Engineer",
    focus: "High-Density Rack Deployment & Thermal Dynamics",
    clearance: "Level 4 / Restricted",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    color: "emerald",
    description: "Translates digital blueprints into physical reality. Experts in power redundancy (N+1/2N), fiber optic cable management, and high-density thermal dissipation for massive computational loads.",
    skills: ["Rack Topology", "Fiber Splicing", "Thermal Load Balancing", "Hardware Provisioning"],
  },
  {
    id: "CRYP-04",
    role: "Cryptography & Data Integrity Architect",
    focus: "End-to-End Payload Encryption",
    clearance: "Level 5 / Absolute",
    icon: <Fingerprint className="w-6 h-6 text-purple-400" />,
    color: "purple",
    description: "Secures data at rest and in transit. Implements post-quantum cryptographic standards, manages secure key exchange lifecycles, and ensures total data sovereignty for high-value client payloads.",
    skills: ["AES-256-GCM", "IPsec/WireGuard", "Key Management Systems", "Blockchain Integrity"],
  }
];

export default function EngineerPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-12 md:pt-20">
      
      {/* --------------------------------------------------------- */}
      {/* ENGINEERING HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-24 z-10">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500 mr-4" />
          <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase">Technical Division</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500 ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          System <br />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Architects</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          Hardware is useless without the elite minds required to configure it. Meet the engineers who design, deploy, and defend Takumi Tech infrastructure protocols.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* ENGINEERING GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {engineeringDisciplines.map((engineer) => (
            <div key={engineer.id} className="glass-card relative group flex flex-col rounded-[2rem] p-8 md:p-10 overflow-hidden hover:border-white/20 transition-all duration-500">
              
              {/* Dynamic Glow Based on Role */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity duration-700 bg-${engineer.color}-500`} />
              
              {/* Header: Clearance & ID */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${engineer.color}-500/10 border border-${engineer.color}-500/20 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]`}>
                  {engineer.icon}
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-1 flex items-center gap-2">
                    <Lock className="w-3 h-3 text-gray-400" /> Clearance
                  </span>
                  <span className={`text-[10px] font-mono font-bold text-${engineer.color}-400 tracking-wider uppercase`}>{engineer.clearance}</span>
                </div>
              </div>

              {/* Core Identity */}
              <div className="relative z-10 flex-grow mb-8">
                <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-2 block border-b border-white/10 pb-2 w-max">ID: {engineer.id}</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">{engineer.role}</h3>
                <h4 className={`text-xs font-mono text-${engineer.color}-300 uppercase tracking-widest mb-6`}>{engineer.focus}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {engineer.description}
                </p>
              </div>

              {/* Technical Skill Arrays */}
              <div className="relative z-10 border-t border-white/5 pt-6 mt-auto">
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-4 block">Verified Competencies:</span>
                <div className="flex flex-wrap gap-2">
                  {engineer.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-gray-300 uppercase tracking-wider hover:bg-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* DEPLOYMENT CTA TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-5xl mx-auto px-4 mb-24 z-10">
        <div className="glass-card w-full rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-[#050505] to-[#0a0a0a] border border-cyan-500/20 relative overflow-hidden group shadow-[0_0_50px_rgba(34,211,238,0.05)]">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-600/20 transition-colors duration-700 translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex flex-col text-center md:text-left relative z-10 max-w-xl">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">Require Architectural Audit?</h2>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Deploy a Takumi Tech lead engineer to review your current physical infrastructure, routing protocols, and security matrices. We will identify vulnerabilities and draft a custom deployment blueprint.
            </p>
          </div>
          
          <Link 
            href="/schedule" 
            className="shrink-0 relative z-10 flex items-center justify-center gap-3 px-8 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all ring-1 ring-cyan-400/50 w-full md:w-auto"
          >
            Deploy Engineer <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>
      </section>

    </div>
  );
}