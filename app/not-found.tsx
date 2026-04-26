"use client";
import { useRouter } from "next/navigation";
import { Terminal, Home, ArrowLeft, AlertTriangle } from "lucide-react";
import DecodeText from "./components/DecodeText";
import MagneticWrapper from "./components/MagneticWrapper";
import RevealWrapper from "./components/RevealWrapper";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-[100svh] pt-24 pb-20 px-4 md:px-6 flex flex-col items-center justify-center overflow-hidden relative w-full">
      {/* Global Background Glow - Warning Crimson */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-red-600/10 rounded-[100%] blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

      <RevealWrapper delay={100} className="w-full max-w-2xl relative z-10">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 border border-red-500/20 bg-[#080808]/80 shadow-[0_0_80px_rgba(220,38,38,0.1)] text-center relative overflow-hidden flex flex-col items-center">
          
          {/* Subtle top glare */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />

          {/* Pulsing Warning Icon */}
          <div className="w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/50 shadow-[0_0_40px_rgba(220,38,38,0.3)] flex items-center justify-center mb-8 animate-[pulse_2s_ease-in-out_infinite]">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">404</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-6">
            <DecodeText text="System Anomaly" delay={300} />
          </h2>

          {/* Subtext */}
          <div className="space-y-3 mb-12">
            <p className="text-red-400 font-mono text-sm uppercase tracking-widest bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20 inline-block">
              Routing Protocol Offline
            </p>
            <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-widest leading-relaxed max-w-md mx-auto pt-2">
              The requested directory node does not exist within the Takumi Tech infrastructure. Please re-align your navigational vectors.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto relative z-10">
            
            {/* Go Back Button */}
            <MagneticWrapper pullStrength={0.1} className="w-full sm:w-1/2">
              <button
                onClick={() => router.back()}
                className="w-full px-6 py-4 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all text-gray-300 hover:text-white min-h-[56px] shadow-inner"
              >
                <ArrowLeft className="w-4 h-4" /> Previous Node
              </button>
            </MagneticWrapper>

            {/* Dashboard Button */}
            <MagneticWrapper pullStrength={0.15} className="w-full sm:w-1/2">
              <button
                onClick={() => router.push("/")}
                className="w-full px-6 py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] ring-1 ring-white/30 text-white min-h-[56px]"
              >
                Main Terminal <Terminal className="w-4 h-4" />
              </button>
            </MagneticWrapper>

          </div>

        </div>
      </RevealWrapper>
    </main>
  );
}