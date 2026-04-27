"use client";

import { Terminal, Cpu, Server, ShieldCheck, Zap, Code, PenTool } from "lucide-react";

export default function EngineerPage() {
  return (
    // overflow-x-hidden guarantees this page will never cause mobile horizontal scroll bugs
    <div className="w-full flex flex-col items-center justify-start pb-32 z-10 overflow-x-hidden">
      
      {/* --------------------------------------------------------- */}
      {/* HERO TERMINAL & BRAND IDENTITY */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-5xl mx-auto text-center px-4 mb-20 pt-12 md:pt-20">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4" />
          <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase">The Architecture Behind The Name</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-8 leading-tight text-white">
          Meaning of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">Takumi</span>
        </h1>

        {/* The Takumi Meaning Card */}
        <div className="relative max-w-3xl mx-auto text-left bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md shadow-2xl">
          <div className="absolute -top-6 -left-6 text-6xl text-white/5 font-serif select-none pointer-events-none">
            匠
          </div>
          <p className="text-xl md:text-2xl text-white font-medium mb-4">
            Takumi <span className="text-[#00E5FF] font-mono text-lg">(ta-koo-mee)</span>
          </p>
          <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
            In Japanese culture, a <strong>Takumi</strong> is a master artisan—a craftsman who has dedicated their entire life to the relentless pursuit of perfection in their field. We do not view IT support as a standard service; we view it as an engineering craft. <strong>Takumi Tech</strong> represents absolute precision, unwavering stability, and masterclass execution in digital infrastructure.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* LEAD ARCHITECT PROFILE */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual & Status */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative aspect-square rounded-[2rem] bg-[#0A0A0A] border border-white/10 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-[#2563EB]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <Terminal className="w-24 h-24 text-[#00E5FF] opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse" />
                <span className="text-[10px] text-white font-mono uppercase tracking-widest">Lead Engineer Active</span>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-white font-black uppercase tracking-wider mb-4 text-sm">Core Disciplines</h3>
              <ul className="space-y-3">
                {['Hardware Optimization', 'System Administration', 'Network Architecture', 'Troubleshooting'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-mono text-gray-400">
                    <Zap className="w-3 h-3 text-[#00E5FF]" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Credentials & Bio */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden h-full">
              {/* Decorative Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />
              
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Rudi Mouton</h2>
              <p className="text-[#00E5FF] font-mono text-sm tracking-widest uppercase mb-8">Founder & Lead Systems Engineer</p>
              
              <div className="space-y-6 text-[#A1A1AA] text-sm leading-relaxed">
                <p>
                  My engineering philosophy is simple: stop settling for temporary technical fixes. I architect permanent, secure, and zero-latency solutions for clients who demand the absolute best from their hardware and software.
                </p>
                
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-6" />

                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF]" /> Academic Architecture
                </h3>
                <p>
                  I am currently advancing my deep technical expertise by pursuing a <strong>Diploma in Computer Engineering</strong>. This is heavily backed by an established, fully certified <strong>NQF Level 5 Qualification in IT System Support</strong>. This combination of formal systems administration training and advanced engineering studies allows me to troubleshoot and deploy solutions at a hardware, OS, and network level simultaneously.
                </p>

                <h3 className="text-white font-bold uppercase tracking-wider text-sm mt-8 mb-4 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#00E5FF]" /> Operational Experience
                </h3>
                <p>
                  Theoretical knowledge is nothing without battlefield application. I have cultivated very strong, hands-on industry experience working alongside previous Managed Service Providers (MSPs) during highly active internships. This time spent in the trenches of enterprise IT support trained me to rapidly triage critical failures, optimize backend systems, and deliver seamless client resolutions under pressure.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}