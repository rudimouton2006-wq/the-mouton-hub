"use client";
import { Suspense } from "react";
import { Shield, FileText, Server, Lock, AlertTriangle, Loader2, Terminal } from "lucide-react";
import DecodeText from "../components/DecodeText";
import RevealWrapper from "../components/RevealWrapper";

function TermsLogic() {
  const lastUpdated = "April 2026";

  return (
    <div className="w-full flex flex-col items-center relative z-10 px-4 md:px-6">
      
      {/* --------------------------------------------------------- */}
      {/* HEADER */}
      {/* --------------------------------------------------------- */}
      <header className="w-full max-w-4xl mb-16 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500/10 border border-gray-500/20 mb-6 backdrop-blur-md">
          <FileText className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Legal & Privacy Directives</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-white">
          <DecodeText text="Operational" /> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <DecodeText text="Protocols" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1000} direction="up">
          <p className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            By accessing The Mouton Hub network and utilizing our diagnostic, scheduling, or hardware procurement systems, you agree to the following terms of service and data security parameters.
          </p>
          <p className="text-xs font-mono text-gray-500 mt-4 uppercase tracking-widest">
            Last System Update: {lastUpdated}
          </p>
        </RevealWrapper>
      </header>

      {/* --------------------------------------------------------- */}
      {/* LEGAL DIRECTIVES CONTENT */}
      {/* --------------------------------------------------------- */}
      <div className="w-full max-w-4xl flex flex-col gap-8 mb-24">

        {/* Section 1: Data Privacy & Security */}
        <RevealWrapper delay={200} direction="up">
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-[#080808] relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/10 transition-colors duration-500" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">1. Data Encryption & Privacy</h2>
            </div>
            
            <div className="space-y-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed relative z-10">
              <p>
                The Mouton Hub employs strict data routing protocols. All client telemetry, diagnostic logs, and sourcing parameters submitted through our portals are encrypted and transmitted directly to the Lead Engineer via secure APIs (Web3Forms).
              </p>
              <p>
                We operate on a zero-trust architecture regarding your personal data. We do not sell, distribute, or expose client email addresses, phone numbers, or operational locations to third-party tracking networks or marketing algorithms.
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* Section 2: Hardware Procurement & Logistics */}
        <RevealWrapper delay={300} direction="up">
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-[#080808] relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-600/10 transition-colors duration-500" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">2. Hardware Procurement</h2>
            </div>
            
            <div className="space-y-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed relative z-10">
              <p>
                When initiating a custom sourcing protocol via the Hardware Hub, please note that pricing and availability of electronic components are subject to global supply chain volatility. Listed prices are highly accurate estimates but may fluctuate based on import tariffs and distributor stock levels.
              </p>
              <p>
                Formal hardware deployment projects and custom builds may require an upfront logistics deposit before acquisition protocols are finalized. All hardware is tested for structural and computational integrity before client handover.
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* Section 3: Diagnostic Ticketing & Liability */}
        <RevealWrapper delay={400} direction="up">
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-[#080808] relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-600/10 transition-colors duration-500" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">3. System Liability</h2>
            </div>
            
            <div className="space-y-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed relative z-10">
              <p>
                While our diagnostic and network architecture services are executed with elite technical precision, The Mouton Hub shall not be held liable for pre-existing system failures, data loss due to prior failing storage drives, or external network breaches occurring outside of our deployed security parameters.
              </p>
              <p>
                Clients are heavily advised to maintain independent, off-site data backups prior to authorizing deep-level kernel debugging or hardware swaps.
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* Section 4: Operational Jurisdiction */}
        <RevealWrapper delay={500} direction="up">
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 bg-[#080808] relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-600/10 transition-colors duration-500" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">4. Operational Jurisdiction</h2>
            </div>
            
            <div className="space-y-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed relative z-10">
              <p>
                These directives and operational protocols are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms shall fall under the exclusive jurisdiction of the courts located within Cape Town, Western Cape.
              </p>
            </div>
          </div>
        </RevealWrapper>

      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 flex flex-col items-center overflow-hidden relative w-full">
      {/* Global Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-white/5 rounded-[100%] blur-[150px] pointer-events-none z-0" aria-hidden="true" />
      <div className="scanline opacity-10 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center w-full"><Loader2 className="w-10 h-10 text-gray-500 animate-spin" /></div>}>
        <TermsLogic />
      </Suspense>
    </main>
  );
}