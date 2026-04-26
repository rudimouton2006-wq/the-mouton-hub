"use client";
import Link from "next/link";
import { Wrench, Wifi, Globe, ArrowRight, CheckCircle2, Activity, FileText, Settings, ShieldCheck, Check, Camera } from "lucide-react";
import DecodeText from "../components/DecodeText";
import MagneticWrapper from "../components/MagneticWrapper";
import RevealWrapper from "../components/RevealWrapper";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <header className="w-full max-w-5xl mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          <DecodeText text="Service" /> <br className="md:hidden" />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,163,255,0.2)]">
            <DecodeText text="Architecture" delay={600} />
          </span>
        </h1>
        <RevealWrapper delay={1200} direction="up">
          <p className="text-gray-300 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-500" aria-hidden="true" />
            Transparent Pricing & Capabilities
          </p>
        </RevealWrapper>
      </header>

      {/* --- SECTION 1: THE REPAIR METHODOLOGY --- */}
      <section aria-labelledby="repair-heading" className="w-full max-w-5xl mb-24">
        <RevealWrapper delay={100}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <Wrench className="w-6 h-6 text-blue-400" aria-hidden="true" />
            </div>
            <h2 id="repair-heading" className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Hardware Repair</h2>
            <div className="h-px bg-white/10 flex-grow" aria-hidden="true" />
          </div>
        </RevealWrapper>

        <RevealWrapper delay={250}>
          <div className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden border-blue-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <div className="scanline opacity-10 absolute inset-0 pointer-events-none" aria-hidden="true" />
            
            {/* Baseline Pricing Box */}
            <div className="flex flex-col md:flex-row gap-6 mb-16 relative z-10">
              <article className="flex-1 bg-black/60 border border-white/10 rounded-2xl p-6 flex items-center justify-between group hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,163,255,0.1)]">
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">Diagnostic Triage</h3>
                  <p className="text-sm text-gray-400">Fault isolation & system testing.</p>
                </div>
                <span className="text-3xl font-black text-blue-400 group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_15px_rgba(0,163,255,0.3)]">R350</span>
              </article>
              <article className="flex-1 bg-black/60 border border-white/10 rounded-2xl p-6 flex items-center justify-between group hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,163,255,0.1)]">
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">OS Reinstallation</h3>
                  <p className="text-sm text-gray-400">Clean Windows/macOS install + Drivers.</p>
                </div>
                <span className="text-3xl font-black text-blue-400 group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_15px_rgba(0,163,255,0.3)]">R450</span>
              </article>
            </div>

            {/* The Methodology Timeline */}
            <h3 className="font-mono text-sm text-blue-400 uppercase tracking-widest mb-10 text-center relative z-10 flex items-center justify-center gap-2">
              Standard Operating Procedure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-[32px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 z-0" aria-hidden="true" />
              
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-blue-900/50 border border-blue-400 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(0,163,255,0.2)] group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                  <Activity className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-white font-bold uppercase mb-2 tracking-wide">1. Diagnostic</h4>
                <p className="text-xs text-gray-400 px-2 leading-relaxed">System isolation and fault identification.</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group mt-6 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 flex items-center justify-center mb-5 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(0,163,255,0.2)] group-hover:scale-110 transition-all duration-500">
                  <FileText className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                </div>
                <h4 className="text-white font-bold uppercase mb-2 tracking-wide">2. Quote</h4>
                <p className="text-xs text-gray-400 px-2 leading-relaxed">Cost breakdown of parts and labor.</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group mt-6 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 flex items-center justify-center mb-5 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(0,163,255,0.2)] group-hover:scale-110 transition-all duration-500">
                  <Settings className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                </div>
                <h4 className="text-white font-bold uppercase mb-2 tracking-wide">3. Execution</h4>
                <p className="text-xs text-gray-400 px-2 leading-relaxed">Precision repair and component sourcing.</p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center group mt-6 md:mt-0">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 flex items-center justify-center mb-5 group-hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-all duration-500">
                  <CheckCircle2 className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors" aria-hidden="true" />
                </div>
                <h4 className="text-white font-bold uppercase mb-2 tracking-wide">4. Bench Test</h4>
                <p className="text-xs text-gray-400 px-2 leading-relaxed">Stress testing prior to client handoff.</p>
              </div>
            </div>
            
            <div className="mt-14 flex justify-center relative z-10">
              <MagneticWrapper pullStrength={0.15}>
                <Link href="/schedule" className="px-8 py-4 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl font-black text-xs uppercase tracking-widest transition-all min-h-[56px] flex items-center justify-center backdrop-blur-md">
                    Book a Drop-off Slot
                </Link>
              </MagneticWrapper>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* --- SECTION 2: NETWORKING ARCHITECTURE --- */}
      <section aria-labelledby="network-heading" className="w-full max-w-5xl mb-24">
        <RevealWrapper delay={100}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <Wifi className="w-6 h-6 text-blue-400" aria-hidden="true" />
            </div>
            <h2 id="network-heading" className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Network Systems</h2>
            <div className="h-px bg-white/10 flex-grow" aria-hidden="true" />
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RevealWrapper delay={200}>
            <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/5 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.1)] flex flex-col">
              <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Dead-Zone Elimination</h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed flex-grow">Strategic placement and configuration of high-power access points to ensure wall-to-wall coverage in your home or office.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Signal mapping</li>
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Channel optimization</li>
              </ul>
            </article>
          </RevealWrapper>

          <RevealWrapper delay={350}>
            <article className="glass-card rounded-[2rem] p-8 border border-blue-500/30 shadow-[0_0_30px_rgba(0,163,255,0.1)] relative overflow-hidden h-full hover:-translate-y-2 transition-transform duration-500 flex flex-col">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl z-10 shadow-lg shadow-blue-500/20">Popular</div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full blur-3xl pointer-events-none" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide relative z-10">Mesh Router Setup</h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed flex-grow relative z-10">Seamless roaming architecture. Walk through your entire property without ever disconnecting or switching networks.</p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Multi-node configuration</li>
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Band steering setup</li>
              </ul>
            </article>
          </RevealWrapper>

          <RevealWrapper delay={500}>
            <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/5 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.1)] flex flex-col">
              <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Wired Infrastructure</h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed flex-grow">Physical cabling for pure speed and zero latency. Ideal for gaming rigs, home servers, and smart TVs.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Basic Ethernet runs</li>
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Switch installation</li>
              </ul>
            </article>
          </RevealWrapper>
        </div>
        
        <RevealWrapper delay={650} direction="up">
          <div className="mt-10 flex justify-end">
            <MagneticWrapper pullStrength={0.2}>
              <Link href="/schedule" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 min-h-[56px] ring-1 ring-blue-400/50">
                Request Network Dispatch <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </MagneticWrapper>
          </div>
        </RevealWrapper>
      </section>

      {/* --- SECTION 3: THE ENGINEERING PORTFOLIO (VISUAL PROOF) --- */}
      <section aria-labelledby="portfolio-heading" className="w-full max-w-5xl mb-24">
        <RevealWrapper delay={100}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <Camera className="w-6 h-6 text-blue-400" aria-hidden="true" />
            </div>
            <h2 id="portfolio-heading" className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Visual Proof</h2>
            <div className="h-px bg-white/10 flex-grow" aria-hidden="true" />
          </div>
          <p className="text-sm text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Standard technicians treat the symptoms. Engineers rebuild the system. Drag the sliders to compare the difference between typical IT negligence and The Mouton Hub's precision standards.
          </p>
        </RevealWrapper>

        <div className="space-y-16">
          
          {/* Portfolio Item 1: Cable Management */}
          <RevealWrapper delay={200}>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span> 01. Infrastructure Routing
                </h3>
                <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">Eliminating signal interference and heat-traps through meticulous cable management. A tangled home network is rebuilt into a perfectly zip-tied, wall-mounted command center.</p>
              </div>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" 
                afterImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                beforeLabel="Tangled & Exposed"
                afterLabel="Precision Wall-Mounted"
              />
            </div>
          </RevealWrapper>

          {/* Portfolio Item 2: Hardware Restoration */}
          <RevealWrapper delay={300}>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span> 02. Component Restoration
                </h3>
                <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">Dust and degraded thermal paste cause catastrophic thermal throttling. Systems are stripped down, subjected to deep-level cleaning, and repasted with high-grade thermal compounds.</p>
              </div>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1200&auto=format&fit=crop" 
                afterImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" 
                beforeLabel="Dust-Choked & Overheating"
                afterLabel="Ultrasonically Cleaned"
              />
            </div>
          </RevealWrapper>

          {/* Portfolio Item 3: Screen Repair */}
          <RevealWrapper delay={400}>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span> 03. Panel Replacement
                </h3>
                <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">Shattered displays are surgically removed. We source OEM-grade replacement panels globally and execute flawless installations, returning the device to factory-new condition.</p>
              </div>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1200&auto=format&fit=crop" 
                afterImage="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop" 
                beforeLabel="Shattered & Unusable"
                afterLabel="OEM Panel Restored"
              />
            </div>
          </RevealWrapper>

        </div>
      </section>

      {/* --- SECTION 4: WEB CREATION --- */}
      <section aria-labelledby="web-heading" className="w-full max-w-5xl">
        <RevealWrapper delay={100}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <Globe className="w-6 h-6 text-blue-400" aria-hidden="true" />
            </div>
            <h2 id="web-heading" className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Web Development</h2>
            <div className="h-px bg-white/10 flex-grow" aria-hidden="true" />
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          
          <RevealWrapper delay={200}>
            <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/5 transition-all duration-500 h-[90%] flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.1)]">
              <h3 className="text-xl font-bold text-white uppercase mb-2 tracking-wide">Starter Hub</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">A high-impact landing page to establish your digital presence.</p>
              <div className="mb-8">
                <span className="text-3xl font-black text-white">R1,850</span>
                <span className="text-xs text-gray-500 ml-2 uppercase font-mono tracking-widest">Base</span>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Single Landing Page</li>
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Mobile Responsive</li>
                <li className="flex items-start gap-3 text-sm text-gray-300"><Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" /> Basic Contact Form</li>
              </ul>
              <MagneticWrapper pullStrength={0.1} className="w-full mt-auto">
                <Link href="/contact" className="w-full py-4 bg-white/5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10 hover:border-blue-500 rounded-xl font-black text-xs text-center uppercase tracking-widest transition-all min-h-[56px] flex items-center justify-center backdrop-blur-sm">
                  Initialize Project
                </Link>
              </MagneticWrapper>
            </article>
          </RevealWrapper>

          <RevealWrapper delay={350}>
            <article className="glass-card rounded-[2rem] p-8 border-2 border-blue-500 shadow-[0_0_40px_rgba(0,163,255,0.15)] relative h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-b-xl z-10 shadow-lg shadow-blue-500/20">
                Recommended
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white uppercase mt-6 mb-2 tracking-wide relative z-10">Business Scale</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed relative z-10">A complete multi-page architecture designed to convert leads.</p>
              <div className="mb-8 relative z-10">
                <span className="text-4xl font-black text-blue-400 drop-shadow-[0_0_15px_rgba(0,163,255,0.3)]">R4,500</span>
                <span className="text-xs text-gray-500 ml-2 uppercase font-mono tracking-widest">Base</span>
              </div>
              <ul className="space-y-3 mb-10 flex-grow relative z-10">
                <li className="flex items-start gap-3 text-sm text-white"><Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" /> Up to 5 Pages</li>
                <li className="flex items-start gap-3 text-sm text-white"><Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" /> SEO Optimization</li>
                <li className="flex items-start gap-3 text-sm text-white"><Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" /> Custom Analytics Setup</li>
                <li className="flex items-start gap-3 text-sm text-white"><Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" /> Domain Integration</li>
              </ul>
              <MagneticWrapper pullStrength={0.1} className="w-full mt-auto relative z-10">
                <Link href="/contact" className="w-full py-4 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-xl font-black text-xs text-center uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] ring-1 ring-blue-400/50 min-h-[56px] flex items-center justify-center">
                  Deploy Business Build
                </Link>
              </MagneticWrapper>
            </article>
          </RevealWrapper>

          <RevealWrapper delay={500}>
            <article className="glass-card rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/50 hover:bg-blue-900/5 transition-all duration-500 h-[90%] flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,163,255,0.1)]">
              <h3 className="text-xl font-bold text-white uppercase mb-2 tracking-wide">Custom System</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">Full-stack web applications and bespoke software solutions.</p>
              <div className="mb-8">
                <span className="text-3xl font-black text-white">Custom</span>
                <span className="text-xs text-gray-500 ml-2 uppercase font-mono tracking-widest">Quote</span>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm text-gray-400"><Check className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" aria-hidden="true" /> E-Commerce Engines</li>
                <li className="flex items-start gap-3 text-sm text-gray-400"><Check className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" aria-hidden="true" /> Database Architecture</li>
                <li className="flex items-start gap-3 text-sm text-gray-400"><Check className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" aria-hidden="true" /> Third-Party API Wiring</li>
              </ul>
              <MagneticWrapper pullStrength={0.1} className="w-full mt-auto">
                <Link href="/contact" className="w-full py-4 bg-white/5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10 hover:border-blue-500 rounded-xl font-black text-xs text-center uppercase tracking-widest transition-all min-h-[56px] flex items-center justify-center backdrop-blur-sm">
                  Request Assessment
                </Link>
              </MagneticWrapper>
            </article>
          </RevealWrapper>

        </div>
      </section>

    </main>
  );
}