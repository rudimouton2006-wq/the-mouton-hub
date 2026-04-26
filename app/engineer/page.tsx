"use client";
import { ShieldCheck, Cpu, GraduationCap, Award, CheckCircle2, Server, Terminal } from "lucide-react";
import Link from "next/link";
import DecodeText from "../components/DecodeText";
import MagneticWrapper from "../components/MagneticWrapper";
import RevealWrapper from "../components/RevealWrapper";

export default function EngineerPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <header className="w-full max-w-4xl mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          <DecodeText text="Lead" /> <br className="md:hidden" />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,163,255,0.2)]">
            <DecodeText text="Engineer" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1200} direction="up">
          <p className="text-gray-300 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-500" aria-hidden="true" />
            Technical Authority & Credentials
          </p>
        </RevealWrapper>
      </header>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Profile Card */}
        <article className="md:col-span-5 h-full" aria-label="Engineer Profile">
          <RevealWrapper delay={150} className="h-full">
            <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-blue-500/30 relative overflow-hidden h-full flex flex-col group hover:border-blue-500/80 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,163,255,0.15)] bg-black/40 backdrop-blur-md">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-bl-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-700" aria-hidden="true" />
              <div className="scanline opacity-10 absolute inset-0 pointer-events-none" aria-hidden="true" />
              
              <div className="mb-8 flex items-center gap-5 relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,163,255,0.2)] group-hover:border-blue-500/50 group-hover:scale-105 transition-all duration-500">
                  <Terminal className="w-10 h-10 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-1">Rudi Mouton</h2>
                  <p className="text-blue-400 font-mono text-xs uppercase tracking-widest py-1 px-3 bg-blue-500/10 rounded-md border border-blue-500/20 w-fit">System Architect</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 flex-grow relative z-10">
                Standard repair shops guess at problems; engineers diagnose systems. By applying rigorous computer engineering standards to everyday tech problems, I ensure that The Mouton Hub delivers enterprise-grade reliability to local households and commercial spaces.
              </p>

              <div className="space-y-4 font-mono text-xs text-gray-400 uppercase relative z-10 bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span>Callsign</span>
                  <span className="text-white font-bold tracking-widest">R. Mouton</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3 pt-1">
                  <span>Base of Operations</span>
                  <span className="text-white font-bold tracking-widest">Bellville, ZA</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>System Status</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-2 tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_1.5s_ease-in-out_infinite]" aria-hidden="true" /> Online
                  </span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </article>

        {/* Credentials Block */}
        <section className="md:col-span-7 flex flex-col gap-6" aria-label="Qualifications and Experience">
          
          <RevealWrapper delay={250}>
            <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-500 flex flex-col md:flex-row items-start gap-6 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,163,255,0.1)] group">
              <div className="p-4 bg-blue-500/10 rounded-2xl flex-shrink-0 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-inner">
                <Award className="w-8 h-8 text-blue-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-blue-400 transition-colors">National Certificate in IT System Support</h3>
                <p className="text-xs text-white font-mono tracking-widest uppercase mb-3 py-1 px-3 bg-white/10 rounded-md inline-block">NQF Level 5</p>
                <p className="text-sm text-gray-400 leading-relaxed">Certified foundation in hardware architecture, network protocols, and enterprise-level system troubleshooting methodologies.</p>
              </div>
            </article>
          </RevealWrapper>

          <RevealWrapper delay={400}>
            <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-500 flex flex-col md:flex-row items-start gap-6 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,163,255,0.1)] group">
              <div className="p-4 bg-blue-500/10 rounded-2xl flex-shrink-0 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-inner">
                <GraduationCap className="w-8 h-8 text-blue-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-blue-400 transition-colors">Computer Engineering (CPUT)</h3>
                <p className="text-xs text-white font-mono tracking-widest uppercase mb-3 py-1 px-3 bg-white/10 rounded-md inline-block">Diploma in Engineering Technology</p>
                <p className="text-sm text-gray-400 leading-relaxed">Currently advancing academic expertise in embedded systems, electrical engineering, and low-level hardware design at the Cape Peninsula University of Technology.</p>
              </div>
            </article>
          </RevealWrapper>

          <RevealWrapper delay={550}>
            <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-500 flex flex-col md:flex-row items-start gap-6 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,163,255,0.1)] group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="p-4 bg-blue-500/10 rounded-2xl flex-shrink-0 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-inner relative z-10">
                <Server className="w-8 h-8 text-blue-400" aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-blue-400 transition-colors">Active Industry Operations</h3>
                <p className="text-xs text-blue-400 font-mono tracking-widest uppercase mb-3 py-1 px-3 bg-blue-500/10 border border-blue-500/20 rounded-md inline-block">IT Intern at a Premier MSP</p>
                <p className="text-sm text-gray-400 leading-relaxed">Deploying real-world commercial IT infrastructure, managing server deployments, and executing high-level network diagnostics during an internship at a leading Managed Service Provider.</p>
              </div>
            </article>
          </RevealWrapper>

        </section>
      </div>

      <RevealWrapper delay={700} direction="up">
        <div className="mt-20 text-center">
           <MagneticWrapper pullStrength={0.2}>
             <Link 
                href="/schedule" 
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] ring-1 ring-blue-400/50 inline-flex items-center justify-center gap-3 min-h-[60px]"
             >
                Request Engineering Support <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
             </Link>
           </MagneticWrapper>
        </div>
      </RevealWrapper>

    </main>
  );
}