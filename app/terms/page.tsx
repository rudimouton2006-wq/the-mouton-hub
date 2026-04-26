"use client";
import { ShieldAlert, Database, Cpu, Clock, ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";
import DecodeText from "../components/DecodeText";
import RevealWrapper from "../components/RevealWrapper";
import MagneticWrapper from "../components/MagneticWrapper";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <header className="w-full max-w-4xl mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          <DecodeText text="Terms of" /> <br className="md:hidden" />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,163,255,0.2)]">
            <DecodeText text="Engineering" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1200} direction="up">
          <p className="text-gray-300 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-blue-500" aria-hidden="true" />
            Legal & Operational Policies
          </p>
        </RevealWrapper>
      </header>

      <div className="w-full max-w-4xl space-y-6">
        
        {/* Intro */}
        <RevealWrapper delay={150}>
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden bg-black/40 backdrop-blur-sm">
             <div className="flex items-center gap-4 mb-4">
               <Terminal className="w-6 h-6 text-blue-400" />
               <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">Service Agreement</h2>
             </div>
             <p className="text-sm md:text-base text-gray-400 leading-relaxed">
               By authorizing The Mouton Hub to perform hardware diagnostics, network deployments, website architecture, or hardware sourcing, you agree to the following operational parameters. These terms protect both the client's assets and the engineer's liability.
             </p>
          </div>
        </RevealWrapper>

        {/* Data Liability Clause */}
        <RevealWrapper delay={300}>
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,163,255,0.1)] bg-black/40 backdrop-blur-sm">
             <div className="flex items-center gap-5 mb-6">
               <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                 <Database className="w-7 h-7 text-blue-400" />
               </div>
               <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">1. Data Integrity & Liability</h2>
             </div>
             <div className="space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
               <p>
                 <strong className="text-white">Client Responsibility:</strong> It is the strict responsibility of the client to ensure all critical data, files, and software are fully backed up prior to handing over any device or system for diagnostic triage or repair.
               </p>
               <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 shadow-inner">
                 <p className="text-red-400 leading-relaxed">
                   <strong className="text-red-500 uppercase tracking-widest block mb-2 text-xs font-black">Zero Liability Protocol</strong> 
                   Under no circumstances shall The Mouton Hub, its lead engineer, or its affiliates be held legally or financially liable for data loss, data corruption, or hardware failure that occurs during the diagnostic or repair process. Hardware inherently fails; we do not accept responsibility for pre-existing systemic degradation.
                 </p>
               </div>
             </div>
          </div>
        </RevealWrapper>

        {/* Component Sourcing Clause */}
        <RevealWrapper delay={450}>
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-blue-500/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,163,255,0.1)] bg-black/40 backdrop-blur-sm">
             <div className="flex items-center gap-5 mb-6">
               <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                 <Cpu className="w-7 h-7 text-blue-400" />
               </div>
               <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">2. Component Sourcing & Warranties</h2>
             </div>
             <div className="space-y-5 text-sm md:text-base text-gray-300 leading-relaxed">
               <p>
                 <strong className="text-white">Pass-Through Warranty:</strong> All new hardware sourced and installed by The Mouton Hub carries its original manufacturer warranty (typically 1 to 3 years depending on the OEM). We act solely as the sourcing and deployment agent. 
               </p>
               <p>
                 <strong className="text-white">Labor Exclusions:</strong> Manufacturer warranties cover physical hardware failure. They do not cover the labor required to remove, RMA (Return Merchandise Authorization), or reinstall the replacement part. Standard engineering labor rates apply for secondary installations.
               </p>
             </div>
          </div>
        </RevealWrapper>

        {/* Abandoned Hardware Clause */}
        <RevealWrapper delay={600}>
          <div className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-blue-500/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,163,255,0.1)] bg-black/40 backdrop-blur-sm">
             <div className="flex items-center gap-5 mb-6">
               <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                 <Clock className="w-7 h-7 text-blue-400" />
               </div>
               <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">3. Equipment Abandonment</h2>
             </div>
             <div className="space-y-6 text-sm md:text-base text-gray-300 leading-relaxed">
               <p>
                 <strong className="text-white">30-Day Liquidation Protocol:</strong> Upon completion of a repair or diagnostic, the client will be notified to collect their hardware. 
               </p>
               <div className="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20 shadow-inner">
                 <p className="text-yellow-400 leading-relaxed">
                   Devices left uncollected for more than <strong className="text-yellow-500 font-black tracking-wide">30 calendar days</strong> following the initial notification will be legally classified as abandoned. The Mouton Hub reserves the right to wipe, dismantle, and liquidate the hardware to recover expended labor time and part costs. No compensation will be provided.
                 </p>
               </div>
             </div>
          </div>
        </RevealWrapper>

      </div>

      <RevealWrapper delay={750} direction="up">
        <div className="mt-20 text-center">
           <MagneticWrapper pullStrength={0.2}>
             <Link 
                href="/" 
                className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl font-black text-xs uppercase tracking-widest transition-all inline-flex items-center justify-center gap-3 backdrop-blur-sm"
             >
                <ArrowLeft className="w-4 h-4" /> Return to Dashboard
             </Link>
           </MagneticWrapper>
        </div>
      </RevealWrapper>

    </main>
  );
}