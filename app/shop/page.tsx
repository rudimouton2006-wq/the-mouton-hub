import Link from "next/link";
import { ArrowRight, Cpu, Network, ShieldAlert, HardDrive, Anchor } from "lucide-react";

export const metadata = {
  title: "Global Logistics & Sourcing | Takumi Tech",
  description: "Secure supply chains for rare, high-performance computational hardware and enterprise network infrastructure.",
};

// ---------------------------------------------------------
// HARDWARE INVENTORY DATABASE
// ---------------------------------------------------------
const hardwareInventory = [
  {
    id: "TK-AI-01",
    category: "Compute",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    color: "purple",
    name: "NVIDIA H100 Tensor Core Node",
    description: "Unprecedented performance for massive-scale AI and HPC workloads. Features Transformer Engine and fourth-generation NVLink.",
    specs: ["80GB HBM3 Memory", "3.35 TB/s Bandwidth", "SXM5 Form Factor"],
    status: "Limited Allocation",
  },
  {
    id: "TK-NW-02",
    category: "Routing",
    icon: <Network className="w-6 h-6 text-blue-400" />,
    color: "blue",
    name: "Cisco Catalyst 9300 Series",
    description: "The industry's most widely deployed enterprise switching platform built for security, IoT, mobility, and cloud.",
    specs: ["48-Port PoE+", "UADP 2.0 ASIC", "Encrypted Traffic Analytics"],
    status: "In Stock - Global Hub",
  },
  {
    id: "TK-SV-03",
    category: "Infrastructure",
    icon: <HardDrive className="w-6 h-6 text-emerald-400" />,
    color: "emerald",
    name: "Supermicro MicroBlade Chassis",
    description: "High-density server foundation. Supports 112 nodes in an 8U enclosure with redundant Titanium-level power supplies.",
    specs: ["8U Enclosure", "Up to 112 Nodes", "96% Efficiency Platinum PSU"],
    status: "Build to Order",
  },
  {
    id: "TK-SC-04",
    category: "Security",
    icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
    color: "red",
    name: "Palo Alto Networks PA-3200",
    description: "Next-Generation Firewall preventing advanced threats with inline machine learning and deep packet inspection.",
    specs: ["5.8 Gbps App-ID", "Intelligent Traffic Routing", "Zero-Day Prevention"],
    status: "In Stock - Global Hub",
  }
];

export default function ShopPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-12 md:pt-20">
      
      {/* --------------------------------------------------------- */}
      {/* LOGISTICS HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-5xl mx-auto text-center px-4 mb-20 z-10">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500 mr-4" />
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase">Global Logistics Matrix</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500 ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Hardware <br />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">Procurement</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          Access our private supply chain. We bypass traditional distribution bottlenecks to secure rare compute nodes, high-density storage, and enterprise routing hardware for your architecture.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* INVENTORY GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-32 z-10">
        
        {/* Inventory Header */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-6 mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Anchor className="w-5 h-5 text-gray-500" />
            <h3 className="text-sm font-black tracking-widest text-white uppercase">Active Supply Lines</h3>
          </div>
          <div className="flex gap-4">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Market PRICING: <span className="text-cyan-400">DYNAMIC</span></span>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">|</span>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">AUTHENTICITY: <span className="text-emerald-400">VERIFIED</span></span>
          </div>
        </div>

        {/* The Hardware Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hardwareInventory.map((item) => (
            <div key={item.id} className="glass-card relative group flex flex-col rounded-3xl p-8 overflow-hidden hover:border-white/20 transition-all duration-500">
              
              {/* Dynamic Glow Based on Category */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-${item.color}-600`} />
              
              {/* Header: Icon & ID */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${item.color}-500/10 border border-${item.color}-500/20 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]`}>
                  {item.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-1">Asset ID</span>
                  <span className="text-xs font-black text-white tracking-wider">{item.id}</span>
                </div>
              </div>

              {/* Core Details */}
              <div className="relative z-10 flex-grow">
                <span className={`text-[10px] font-mono text-${item.color}-400 tracking-[0.2em] uppercase mb-2 block`}>{item.category}</span>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-4">{item.name}</h4>
                <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="relative z-10 border-t border-white/5 pt-6 mt-auto">
                <ul className="flex flex-col gap-2 mb-8">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      <div className="w-1 h-1 bg-white/30 rounded-full" /> {spec}
                    </li>
                  ))}
                </ul>
                
                {/* Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.status.includes('Stock') ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">{item.status}</span>
                  </div>
                  
                  <Link 
                    href="/schedule" 
                    className="w-full sm:w-auto px-6 py-3 bg-[#111] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
                  >
                    Initiate Procurement <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CUSTOM SOURCING PROTOCOL CTA */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-24 z-10">
        <div className="glass-card w-full rounded-[2.5rem] p-10 md:p-16 flex flex-col text-center items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 relative overflow-hidden group">
          
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] pointer-events-none" />
          
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white relative z-10">Require Unlisted Assets?</h2>
          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
            Our global sourcing network can secure specific computational hardware, obsolete networking components, or specialized cryptology processors upon request.
          </p>
          
          <Link 
            href="/contact" 
            className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02]"
          >
            Submit Custom Requisition <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}