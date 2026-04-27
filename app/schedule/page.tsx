"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Terminal, ShieldCheck, Cpu, Network, CheckCircle2, ChevronRight } from "lucide-react";

export default function SchedulePage() {
  const [formStep, setFormStep] = useState(1);
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormStep((prev) => prev + 1);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start pt-12 md:pt-20 pb-24 relative">
      
      {/* Background Ambient Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* --------------------------------------------------------- */}
      {/* SCHEDULING HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-3xl mx-auto text-center px-4 mb-16 z-10">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500 mr-4" />
          <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase">Client Onboarding</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500 ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Initialize <span className="text-gradient">Diagnostic</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
          Log a secure ticket below. A Takumi Tech lead engineer will review your operational parameters and initiate contact to draft a custom architectural blueprint.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* DIAGNOSTIC TICKET ENGINE */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-3xl mx-auto px-4 z-10">
        <div className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
          
          {/* Progress Matrix */}
          <div className="flex items-center justify-between mb-12 relative z-10">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${formStep >= 1 ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-500'}`}>1</div>
              <span className={`text-[10px] font-mono uppercase tracking-widest hidden sm:block ${formStep >= 1 ? 'text-white' : 'text-gray-500'}`}>Module</span>
            </div>
            <div className={`h-px flex-grow mx-4 transition-colors ${formStep >= 2 ? 'bg-blue-500/50' : 'bg-white/10'}`} />
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${formStep >= 2 ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-500'}`}>2</div>
              <span className={`text-[10px] font-mono uppercase tracking-widest hidden sm:block ${formStep >= 2 ? 'text-white' : 'text-gray-500'}`}>Timing</span>
            </div>
            <div className={`h-px flex-grow mx-4 transition-colors ${formStep >= 3 ? 'bg-blue-500/50' : 'bg-white/10'}`} />
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${formStep >= 3 ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-500'}`}>3</div>
              <span className={`text-[10px] font-mono uppercase tracking-widest hidden sm:block ${formStep >= 3 ? 'text-white' : 'text-gray-500'}`}>Transmit</span>
            </div>
          </div>

          {/* Form Content Engine */}
          <form className="relative z-10">
            
            {/* STEP 1: Select Operational Module */}
            {formStep === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-black text-white uppercase tracking-wider mb-6">Select Required Module</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  
                  <button
                    type="button"
                    onClick={() => setSelectedModule("Network Defense")}
                    className={`p-6 rounded-xl border text-left transition-all duration-300 ${selectedModule === "Network Defense" ? 'bg-blue-500/20 border-blue-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.3)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                  >
                    <ShieldCheck className={`w-6 h-6 mb-4 ${selectedModule === "Network Defense" ? 'text-blue-400' : 'text-gray-500'}`} />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Network Defense</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">Zero-trust routing, VLAN segmentation, and perimeter auditing.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedModule("Hardware Sourcing")}
                    className={`p-6 rounded-xl border text-left transition-all duration-300 ${selectedModule === "Hardware Sourcing" ? 'bg-purple-500/20 border-purple-500 shadow-[inset_0_0_20px_rgba(168,85,247,0.3)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                  >
                    <Cpu className={`w-6 h-6 mb-4 ${selectedModule === "Hardware Sourcing" ? 'text-purple-400' : 'text-gray-500'}`} />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Hardware Sourcing</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">Procurement of rare compute nodes and high-density storage.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedModule("Architecture Audit")}
                    className={`p-6 rounded-xl border text-left transition-all duration-300 sm:col-span-2 ${selectedModule === "Architecture Audit" ? 'bg-emerald-500/20 border-emerald-500 shadow-[inset_0_0_20px_rgba(16,185,129,0.3)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                  >
                    <Network className={`w-6 h-6 mb-4 ${selectedModule === "Architecture Audit" ? 'text-emerald-400' : 'text-gray-500'}`} />
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Complete System Audit</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">End-to-end review of current digital and physical infrastructure for bottlenecks.</p>
                  </button>

                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={handleNext}
                    disabled={!selectedModule}
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Module <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Timing Protocol */}
            {formStep === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">Establish Briefing Window</h3>
                <p className="text-xs text-gray-400 font-mono tracking-widest uppercase mb-8 flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Timezone synced to SAST (Cape Town Node)
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {["09:00", "11:30", "14:00", "16:45"].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-4 rounded-lg border font-mono text-sm transition-all duration-300 ${selectedTime === time ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[inset_0_0_15px_rgba(34,211,238,0.3)]' : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button 
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="text-xs font-mono text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Return
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!selectedTime}
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Window <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Transmission Protocol */}
            {formStep === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-black text-white uppercase tracking-wider mb-6">Finalize Comm Link</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Designation / Organization</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                      placeholder="ENTER ENTITY NAME..."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Secure Email Link</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all"
                      placeholder="SYSADMIN@DOMAIN.COM"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Operational Constraints (Optional)</label>
                    <textarea 
                      rows={3}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all custom-scrollbar resize-none"
                      placeholder="Provide brief context regarding your current architecture..."
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button 
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="text-xs font-mono text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Return
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                  >
                    Transmit Data <Terminal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Success Terminal */}
            {formStep === 4 && (
              <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Transmission Secured</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-md mx-auto mb-8">
                  Your diagnostic parameters have been logged. A lead engineer will review the {selectedModule} request for {selectedTime} SAST and establish comms shortly.
                </p>
                <Link 
                  href="/" 
                  className="px-8 py-3 border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest hover:bg-white/5 transition-colors rounded-lg"
                >
                  Return to Main Terminal
                </Link>
              </div>
            )}

          </form>
        </div>
      </section>

    </div>
  );
}