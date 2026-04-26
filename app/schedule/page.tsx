"use client";
import { Calendar, Clock, MapPin, ArrowRight, ArrowUpRight, Wrench, Monitor, Download, Smartphone } from "lucide-react";
import Link from "next/link";
import DecodeText from "../components/DecodeText";
import MagneticWrapper from "../components/MagneticWrapper";
import RevealWrapper from "../components/RevealWrapper";

export default function SchedulePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <header className="w-full max-w-4xl mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          <DecodeText text="Scheduling" /> <br className="md:hidden" />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,163,255,0.2)]">
            <DecodeText text="Engine" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1200} direction="up">
          <p className="text-gray-300 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" aria-hidden="true" />
            Sync with Engineering Bandwidth
          </p>
        </RevealWrapper>
      </header>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        
        {/* 1. Remote Diagnostic (AnyDesk Update) */}
        <RevealWrapper delay={150} className="h-full">
          <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-500 h-full flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.15)] bg-black/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/10 rounded-br-full blur-3xl pointer-events-none transition-colors duration-500 group-hover:bg-blue-600/20" aria-hidden="true" />
            
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner relative z-10">
              <Monitor className="w-7 h-7 text-blue-400" aria-hidden="true" />
            </div>
            
            <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-3 relative z-10">Remote Triage</h2>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed relative z-10">
              Message me on WhatsApp to arrange a time that fits your schedule. Using AnyDesk, I will remotely access your system to diagnose software errors, OS configurations, or network issues globally.
            </p>
            
            <ul className="space-y-4 font-mono text-xs text-gray-300 uppercase tracking-widest mb-8 relative z-10">
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-blue-500" /> Flexible Scheduling</li>
              <li className="flex items-center gap-3"><Smartphone className="w-4 h-4 text-blue-500" /> Direct WhatsApp Sync</li>
            </ul>

            {/* Direct AnyDesk Downloads */}
            <div className="mb-10 bg-black/60 border border-white/10 rounded-2xl p-5 flex-grow relative z-10 shadow-inner group-hover:border-blue-500/30 transition-colors duration-500">
               <h3 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                 <Download className="w-3 h-3 text-blue-400 animate-bounce" /> Install Remote Client (AnyDesk)
               </h3>
               <div className="flex gap-3">
                 <a href="https://download.anydesk.com/AnyDesk.exe" className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500 rounded-xl text-center font-mono text-[10px] uppercase tracking-widest transition-all">
                   Windows
                 </a>
                 <a href="https://download.anydesk.com/anydesk.dmg" className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500 rounded-xl text-center font-mono text-[10px] uppercase tracking-widest transition-all">
                   Mac OS
                 </a>
               </div>
            </div>

            <MagneticWrapper pullStrength={0.1} className="w-full mt-auto relative z-10">
              <a 
                href="https://wa.me/27818281861?text=Hi%20Rudi,%20I%20would%20like%20to%20arrange%20a%20Remote%20Triage%20session%20via%20AnyDesk." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-5 bg-white/5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10 hover:border-blue-500 rounded-xl font-black text-xs text-center uppercase tracking-widest transition-all min-h-[56px] flex items-center justify-center gap-2"
              >
                Arrange via WhatsApp <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </MagneticWrapper>
          </article>
        </RevealWrapper>

        {/* 2. Hardware Drop-off */}
        <RevealWrapper delay={300} className="h-full">
          <article className="glass-card rounded-[2rem] p-8 border border-blue-500/40 shadow-[0_10px_40px_rgba(0,163,255,0.1)] h-full flex flex-col group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,163,255,0.2)] transition-all duration-500 bg-black/40 backdrop-blur-sm">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-bl-xl z-20 shadow-lg shadow-blue-500/20">Standard</div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-bl-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500 pointer-events-none" aria-hidden="true" />
            
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-500 relative z-10 border border-blue-400/50">
              <MapPin className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            
            <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-3 relative z-10">Hardware Drop-off</h2>
            <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed relative z-10">
              Physical intervention at the Oakdale facility. Bring in your laptops, desktop rigs, or network hardware for deep-level component repairs, physical upgrades, and thorough stress-testing.
            </p>
            
            <ul className="space-y-4 font-mono text-xs text-white uppercase tracking-widest mb-10 relative z-10">
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-emerald-400" /> 24-48hr Turnaround</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-emerald-400" /> Oakdale, Bellville</li>
            </ul>

            <MagneticWrapper pullStrength={0.1} className="w-full mt-auto relative z-10">
              <Link 
                href="/contact?category=Repair" 
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-xl font-black text-xs text-center uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] ring-1 ring-blue-400/50 min-h-[56px] flex items-center justify-center gap-2"
              >
                Log Ticket & Drop OFF <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </MagneticWrapper>
          </article>
        </RevealWrapper>

        {/* 3. On-Site Dispatch */}
        <RevealWrapper delay={450} className="h-full">
          <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-500 h-full flex flex-col group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.15)] bg-black/40 backdrop-blur-sm">
            <div className="absolute top-0 right-0 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-bl-xl z-20">Premium</div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full blur-3xl pointer-events-none transition-colors duration-500 group-hover:bg-yellow-500/10" aria-hidden="true" />
            
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner relative z-10">
              <Wrench className="w-7 h-7 text-blue-400" aria-hidden="true" />
            </div>
            
            <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-3 relative z-10">On-Site Dispatch</h2>
            <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed relative z-10">
              I deploy directly to your location. Required for physical network cable runs, dead-zone elimination, immovable office infrastructure, or clients requesting dedicated field support.
            </p>
            
            <ul className="space-y-4 font-mono text-xs text-gray-300 uppercase tracking-widest mb-10 relative z-10">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-blue-500" /> Greater Cape Town</li>
              <li className="flex items-center gap-3 text-yellow-500"><Clock className="w-4 h-4 text-yellow-500 animate-pulse" /> Call-Out Fee Applies</li>
            </ul>

            <MagneticWrapper pullStrength={0.1} className="w-full mt-auto relative z-10">
              <Link 
                href="/contact?category=Network" 
                className="w-full py-5 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10 hover:border-blue-500 rounded-xl font-black text-xs text-center uppercase tracking-widest transition-all min-h-[56px] flex items-center justify-center gap-2"
              >
                Request Field Engineer <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </MagneticWrapper>
          </article>
        </RevealWrapper>

      </div>

      <RevealWrapper delay={600} direction="up" className="w-full max-w-4xl">
        <div className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left backdrop-blur-md shadow-inner">
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2 flex items-center justify-center md:justify-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Academic Sync Notice
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">Scheduling is dynamically routed around CPUT Computer Engineering coursework. Emergency after-hours triage is available upon special request.</p>
          </div>
        </div>
      </RevealWrapper>

    </main>
  );
}