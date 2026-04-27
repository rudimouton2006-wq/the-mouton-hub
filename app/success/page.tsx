import Link from "next/link";
import { ShieldCheck, ArrowLeft, Terminal } from "lucide-react";

export const metadata = {
  title: "Transmission Secured | Takumi Tech",
  description: "Your secure payload has been successfully transmitted to the Takumi Tech network.",
};

export default function SuccessPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[75vh] px-4 relative z-10 pb-20 pt-12 md:pt-0">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* --------------------------------------------------------- */}
      {/* SUCCESS TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-2xl mx-auto bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center border border-[#10B981]/20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Dynamic Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-10 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono text-[#10B981] tracking-[0.2em] uppercase">Status: 200 OK</span>
        </div>

        {/* Core Success Iconography */}
        <div className="w-24 h-24 bg-[#10B981]/10 border border-[#10B981]/30 rounded-3xl flex items-center justify-center mb-8 shadow-[inset_0_0_30px_rgba(16,185,129,0.2)]">
          <ShieldCheck className="w-12 h-12 text-[#10B981] drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-white">
          Transmission <span className="text-[#10B981] drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">Secured</span>
        </h1>
        
        <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium max-w-md mx-auto mb-12">
          Your encrypted payload has been successfully received by the Takumi Tech central node. A lead engineer will decrypt your parameters and establish comms shortly.
        </p>

        {/* Action Vectors */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link 
            href="/" 
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#050505] font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-gray-200 transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Terminal
          </Link>
          
          <Link 
            href="/services" 
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            Review Modules <Terminal className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </Link>
        </div>

      </section>

    </div>
  );
}