"use client";
import { Suspense } from "react";
import { Terminal, Cpu, ShieldCheck, Award, Briefcase, GraduationCap, Wrench, Code, Activity } from "lucide-react";
import DecodeText from "../components/DecodeText";
import RevealWrapper from "../components/RevealWrapper";

function EngineerLogic() {
  return (
    <div className="w-full flex flex-col items-center relative z-10 px-4 md:px-6">
      
      {/* --------------------------------------------------------- */}
      {/* HEADER: PERSONNEL DOSSIER */}
      {/* --------------------------------------------------------- */}
      <header className="w-full max-w-5xl mb-20 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 backdrop-blur-md">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest">Personnel Dossier: Active</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
          <DecodeText text="Lead" /> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <DecodeText text="Engineer" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1000} direction="up">
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Rudi Mouton. Computer Engineering specialist based in Cape Town, ZA. Architecting high-performance digital ecosystems, enterprise hardware solutions, and secure network infrastructure.
          </p>
        </RevealWrapper>
      </header>

      {/* --------------------------------------------------------- */}
      {/* MAIN GRID: DOSSIER MODULES */}
      {/* --------------------------------------------------------- */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        
        {/* COLUMN 1: OPERATIONAL EXPERIENCE & EDUCATION */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Experience Module */}
          <RevealWrapper delay={200} direction="right">
            <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Briefcase className="w-5 h-5 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Operational Record</h2>
              </div>

              <div className="space-y-8 relative z-10">
                {/* Flawless IT */}
                <div className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 group-hover:ring-indigo-500/40 transition-all" />
                    <div className="w-px h-full bg-gradient-to-b from-indigo-500/50 to-transparent mt-2" />
                  </div>
                  <div className="pb-4">
                    <h3 className="text-lg font-bold text-white mb-1">IT Professional</h3>
                    <h4 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-3">Flawless IT</h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                      Deploying and maintaining enterprise IT infrastructure. Providing advanced system diagnostics, network optimization, and secure operational support for corporate clients.
                    </p>
                  </div>
                </div>

                {/* Internship */}
                <div className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-600 group-hover:bg-indigo-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">IT Internship</h3>
                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-3">Optimi College / College SA</h4>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed">
                      Executed foundational IT protocols, gaining practical deployment experience in system administration and technical support architectures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Academic Foundation Module */}
          <RevealWrapper delay={300} direction="right">
            <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Academic Foundation</h2>
              </div>

              <div className="flex gap-5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Diploma in Engineering Technology</h3>
                  <h4 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-3">Computer Engineering • CPUT</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">
                    Intensive focus on Engineering Mathematics, applied Physics, and core computational architecture. Bridging the gap between physical hardware and low-level software systems.
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>

        </div>

        {/* COLUMN 2: CAPABILITIES & PROJECTS */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Tech Stack */}
          <RevealWrapper delay={400} direction="left" className="flex-grow">
            <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-gradient-to-bl from-white/[0.03] to-transparent relative overflow-hidden h-full flex flex-col">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Core Capabilities</h2>
              </div>

              <div className="flex flex-col gap-4 relative z-10 flex-grow">
                {[
                  { name: "Full-Stack Architecture", tech: "Next.js, React, Vercel", icon: <Terminal className="w-4 h-4 text-cyan-400" /> },
                  { name: "Hardware Procurement", tech: "Enterprise Sourcing & Logistics", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
                  { name: "Network Infrastructure", tech: "Routing & Security Protocols", icon: <Activity className="w-4 h-4 text-cyan-400" /> },
                  { name: "System Optimization", tech: "AtlasOS, Deep Performance Tuning", icon: <Cpu className="w-4 h-4 text-cyan-400" /> }
                ].map((skill, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#111] border border-white/5 flex items-start gap-4 group hover:border-cyan-500/30 transition-colors">
                    <div className="mt-0.5 shrink-0">{skill.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{skill.name}</h4>
                      <p className="text-xs font-mono text-gray-500">{skill.tech}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Off-Duty Protocols / Interests */}
          <RevealWrapper delay={500} direction="left">
            <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-[#080808] relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Wrench className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-wider">Off-Duty Protocols</h2>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">
                    <strong className="text-white">Mechanical Engineering:</strong> Complete restoration & performance tuning of a 1983 Nissan 1400.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">
                    <strong className="text-white">Media Production:</strong> Active film/TV background actor via Colt Talent Agency.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">
                    <strong className="text-white">Athletics:</strong> Black Belt & WP Provincial Karate. WP Provincial Hockey. General fitness training.
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>

        </div>
      </div>
    </div>
  );
}

export default function EngineerPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 flex flex-col items-center overflow-hidden relative w-full">
      {/* Global Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-indigo-600/5 rounded-[100%] blur-[150px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center w-full"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>}>
        <EngineerLogic />
      </Suspense>
    </main>
  );
}