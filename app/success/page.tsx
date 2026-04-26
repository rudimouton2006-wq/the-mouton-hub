"use client";
import { useRouter } from "next/navigation";
import { CheckCircle2, Home, ArrowLeft } from "lucide-react";
import MagneticWrapper from "../components/MagneticWrapper";
import RevealWrapper from "../components/RevealWrapper";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-6 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Global Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

      <RevealWrapper delay={100} className="w-full max-w-2xl relative z-10">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 border border-blue-500/20 bg-[#080808]/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,163,255,0.1)] text-center relative overflow-hidden flex flex-col items-center">
          
          {/* Subtle top glare */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

          {/* Pulsing Success Icon */}
          <div className="w-24 h-24 rounded-full bg-blue-500/10 border-2 border-blue-500 shadow-[0_0_40px_rgba(0,163,255,0.4)] flex items-center justify-center mb-8 animate-[pulse_2s_ease-in-out_infinite]">
            <CheckCircle2 className="w-12 h-12 text-blue-400" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
            Transmission <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Complete.</span>
          </h1>

          {/* Subtext */}
          <div className="space-y-3 mb-12">
            <p className="text-blue-400 font-mono text-sm uppercase tracking-widest bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block">
              Diagnostic Data Received
            </p>
            <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-widest leading-relaxed max-w-md mx-auto pt-2">
              Lead Engineer Rudi Mouton will review your ticket within 24 hours.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            
            {/* The Dynamic 'Go Back' Button */}
            <MagneticWrapper pullStrength={0.1} className="w-full sm:w-1/2">
              <button
                onClick={() => router.back()}
                className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all text-gray-300 hover:text-white min-h-[56px]"
              >
                <ArrowLeft className="w-4 h-4" /> Previous Page
              </button>
            </MagneticWrapper>

            {/* The Dashboard Button */}
            <MagneticWrapper pullStrength={0.15} className="w-full sm:w-1/2">
              <button
                onClick={() => router.push("/")}
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] ring-1 ring-blue-400/50 text-white min-h-[56px]"
              >
                Dashboard <Home className="w-4 h-4" />
              </button>
            </MagneticWrapper>

          </div>

        </div>
      </RevealWrapper>
    </main>
  );
}