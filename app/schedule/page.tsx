import Link from "next/link";
import { MonitorPlay, PackageOpen, Map, ArrowRight, Download, ShieldAlert, MapPin } from "lucide-react";

export const metadata = {
  title: "Support Hub | Takumi Tech",
  description: "Schedule your IT support. Choose from secure Remote Support via AnyDesk, Hardware Drop-Off, or On-Site Engineering.",
};

export default function SchedulePage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pb-32 pt-12 md:pt-20 z-10">
      
      {/* --------------------------------------------------------- */}
      {/* SUPPORT HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-24">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4" />
          <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase">Deployment Protocols</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Support <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">Avenues</span>
        </h1>
        
        <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          Time is the ultimate metric. Select your preferred support vector below. From instant remote diagnostics to physical hardware intervention, we operate on your schedule.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* TRI-NODE SUPPORT MATRIX */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* NODE 1: REMOTE SUPPORT */}
          <div className="relative group flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:border-[#00E5FF]/50 transition-all duration-500 shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#00E5FF]/10 transition-colors duration-700" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] shadow-[inset_0_0_20px_rgba(0,229,255,0.2)]">
              <MonitorPlay className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Remote Support</h2>
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6 w-max">
              ETA: Instantaneous
            </span>
            
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow font-medium">
              Immediate system triage. We establish a secure, encrypted connection to your machine to resolve software anomalies, OS errors, and perform driver optimizations without deploying physical assets.
            </p>
            
            <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-2">Initialize AnyDesk Client:</span>
              <a href="https://anydesk.com/en/downloads/windows" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-[#00E5FF]/10 border border-white/10 hover:border-[#00E5FF]/50 rounded-xl transition-all group/dl">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest group-hover/dl:text-[#00E5FF] transition-colors">Windows.exe</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] transition-colors" />
              </a>
              <a href="https://anydesk.com/en/downloads/mac-os" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-[#00E5FF]/10 border border-white/10 hover:border-[#00E5FF]/50 rounded-xl transition-all group/dl">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-widest group-hover/dl:text-[#00E5FF] transition-colors">MacOS.dmg</span>
                <Download className="w-4 h-4 text-gray-500 group-hover/dl:text-[#00E5FF] transition-colors" />
              </a>
            </div>
          </div>

          {/* NODE 2: DROP-OFF */}
          <div className="relative group flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:border-[#A855F7]/50 transition-all duration-500 shadow-lg lg:-translate-y-4">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#A855F7]/10 transition-colors duration-700" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#A855F7]/30 bg-[#A855F7]/10 text-[#A855F7] shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]">
              <PackageOpen className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Hardware Drop-Off</h2>
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6 w-max">
              Status: Strictly Scheduled
            </span>
            
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow font-medium">
              For critical hardware failures, thermal repasting, and deep physical repairs. Hand over your physical assets directly to our engineering bay for surgical restoration.
            </p>
            
            <div className="flex flex-col gap-4 pt-6 border-t border-white/5">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#A855F7] shrink-0 mt-0.5" />
                <p className="text-xs font-mono text-gray-400 leading-relaxed uppercase tracking-wider">
                  <strong className="text-white">Security Protocol:</strong> All drop-offs require a pre-logged ticket. Unscheduled arrivals will not be processed to maintain chain-of-custody protocols.
                </p>
              </div>
              <Link href="/ticket" className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 hover:border-[#A855F7] text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all hover:bg-[#A855F7]/10">
                Log Arrival Ticket <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* NODE 3: CALL-OUT / SAFARI */}
          <div className="relative group flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 overflow-hidden hover:border-[#10B981]/50 transition-all duration-500 shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#10B981]/10 transition-colors duration-700" />
            
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-[#10B981]/30 bg-[#10B981]/10 text-[#10B981] shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]">
              <Map className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">On-Site "Safari"</h2>
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6 w-max">
              Logistics: Dynamic Radius
            </span>
            
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow font-medium">
              We deploy physical engineering assets directly to your location. Ideal for complete network overhauls, server rack installations, and complex smart-home integrations.
            </p>
            
            <div className="flex flex-col gap-4 pt-6 border-t border-white/5">
               <div className="p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <p className="text-[10px] font-mono text-white uppercase tracking-widest leading-relaxed">
                    <span className="text-[#10B981] font-bold block mb-1">Operational Variable:</span>
                    A dynamic call-out/travel fee applies based on geographic distance from our central operational hub.
                  </p>
               </div>
              <Link href="/ticket?category=network" className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 hover:border-[#10B981] text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all hover:bg-[#10B981]/10">
                Request Deployment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* GEOGRAPHIC OPERATIONAL RADIUS (MAP) */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-[2.5rem] p-2 border border-white/10 relative overflow-hidden bg-[#0A0A0A] shadow-2xl">
          
          {/* Decorative Header Overlay */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-3 bg-[#050505]/80 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 shadow-lg pointer-events-none">
            <MapPin className="w-5 h-5 text-[#00E5FF]" />
            <div className="flex flex-col">
               <span className="text-xs font-black uppercase tracking-widest text-white">Cape Town Region</span>
               <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400">Primary Deployment Zone</span>
            </div>
          </div>

          {/* Map Frame (Dark Mode Styling via URL Params) */}
          <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative grayscale-[0.8] contrast-125 hover:grayscale-0 transition-all duration-1000">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105886.72661845173!2d18.520268153106346!3d-33.91428581788755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1714486523932!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Overlaid blue tint to match brand colors */}
              <div className="absolute inset-0 bg-[#00E5FF]/5 pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </section>

    </div>
  );
}