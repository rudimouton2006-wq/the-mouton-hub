import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh] px-4 relative z-10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="relative">
          <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center shadow-[inset_0_0_20px_rgba(34,211,238,0.2)]">
            <Terminal className="w-8 h-8 text-cyan-400" />
          </div>
          {/* Hardware-Accelerated Ping Ring */}
          <div className="absolute inset-0 border-2 border-cyan-500 rounded-2xl animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest animate-pulse">
            Establishing Connection
          </span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
}