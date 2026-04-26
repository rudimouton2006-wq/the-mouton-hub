import { Loader2, Terminal } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Deep Space Background Anomaly */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      
      {/* Centered Loading Console */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        
        {/* Spinning Brand Node */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl border border-blue-500/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <div className="w-20 h-20 rounded-2xl bg-[#080808] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(0,163,255,0.2)] backdrop-blur-md relative z-10">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            <Terminal className="w-4 h-4 text-white absolute" />
          </div>
        </div>

        {/* Telemetry Output */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] md:text-xs font-mono text-blue-400 uppercase tracking-[0.3em] animate-pulse">
            Establishing Secure Connection
          </span>
          
          {/* Faux Progress Bar */}
          <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden relative border border-white/10">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(0,163,255,0.8)] animate-[pulse_1.5s_ease-in-out_infinite] w-[75%]" />
          </div>
        </div>

      </div>
    </div>
  );
}