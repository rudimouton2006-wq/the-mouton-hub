import Link from "next/link";
import { AlertTriangle, ArrowLeft, Terminal, ServerCrash } from "lucide-react";

export const metadata = {
  title: "404: Node Offline | Takumi Tech",
  description: "The requested architectural node could not be located.",
};

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh] pt-12 md:pt-20 px-4 relative z-10">
      
      {/* Background Warning Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* --------------------------------------------------------- */}
      {/* ERROR TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="glass-card w-full max-w-3xl mx-auto rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center border-red-500/20 relative overflow-hidden group">
        
        {/* Dynamic Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-10 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono text-red-400 tracking-[0.2em] uppercase">Status: 404 Critical Error</span>
        </div>

        {/* Core Error Iconography */}
        <div className="relative mb-10">
          <div className="w-32 h-32 bg-red-500/5 border border-red-500/30 rounded-3xl flex items-center justify-center shadow-[inset_0_0_50px_rgba(239,68,68,0.1)] relative z-10">
            <ServerCrash className="w-16 h-16 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
          </div>
          {/* Hardware Failure Ring */}
          <div className="absolute inset-0 border border-red-500/50 rounded-3xl animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </div>
        
        {/* Glitched Header Effect */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-white relative">
          <span className="relative z-10">Sector Not Found</span>
          {/* Subtle simulated chromatic aberration/glitch layer */}
          <span className="absolute top-0 left-[2px] -z-10 text-red-500 opacity-50 blur-[1px]">Sector Not Found</span>
          <span className="absolute top-0 -left-[2px] -z-10 text-cyan-500 opacity-50 blur-[1px]">Sector Not Found</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-lg mx-auto mb-12">
          The routing protocol has failed. The architectural node you are attempting to access has been deprecated, moved, or never existed within the Takumi Tech framework.
        </p>

        {/* Action Vectors */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link 
            href="/" 
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-gray-200 transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Main Terminal
          </Link>
          
          <Link 
            href="/contact" 
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            Report Anomaly <AlertTriangle className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" />
          </Link>
        </div>

      </section>

    </div>
  );
}