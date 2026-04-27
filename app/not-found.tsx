import Link from "next/link";
import { ArrowLeft, ServerCrash } from "lucide-react";

export const metadata = {
  title: "404: Node Offline | Takumi Tech",
  description: "The requested architectural node could not be located.",
};

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[75vh] px-4 relative z-10">
      
      {/* Background Warning Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* --------------------------------------------------------- */}
      {/* ERROR TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-2xl mx-auto bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center border border-red-500/20 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Dynamic Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-10 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono text-red-400 tracking-[0.2em] uppercase">Status: 404 Critical Error</span>
        </div>

        {/* Core Error Iconography */}
        <div className="relative mb-10">
          <div className="w-24 h-24 bg-red-500/5 border border-red-500/30 rounded-3xl flex items-center justify-center shadow-[inset_0_0_30px_rgba(239,68,68,0.1)] relative z-10">
            <ServerCrash className="w-12 h-12 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
          </div>
          {/* Hardware Failure Ring */}
          <div className="absolute inset-0 border border-red-500/50 rounded-3xl animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-white">
          Sector Not <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">Found</span>
        </h1>
        
        <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium max-w-md mx-auto mb-12">
          The routing protocol has failed. The architectural node you are attempting to access has been deprecated, moved, or never existed within the Takumi Tech framework.
        </p>

        {/* Action Vector */}
        <Link 
          href="/" 
          className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#050505] font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-gray-200 transition-all w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Terminal
        </Link>

      </section>

    </div>
  );
}