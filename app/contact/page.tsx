"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, Terminal, Send, Lock, CheckCircle, XCircle, Share2, Instagram, Linkedin, Facebook } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    const payloadData = {
      designation: formData.get("designation"),
      returnVector: formData.get("returnVector"),
      module: formData.get("module"),
      urgency: formData.get("module") === "emergency" ? "CRITICAL" : "STANDARD",
      payload: formData.get("payload"),
      dynamicData: `Form Submission from ${formData.get("module")} sector`,
    };

    try {
      const response = await fetch("/api/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Transmission failure:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Reset status message after 5 seconds
      setTimeout(() => {
        if (submitStatus !== "idle") setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-start pt-12 md:pt-20 pb-24 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none z-0 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none z-0 -translate-x-1/3" />

      {/* --------------------------------------------------------- */}
      {/* COMMS HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-20 z-10">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500 mr-4" />
          <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase">Global Network</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500 ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Establish <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB] drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Comms Link</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          All external inquiries are routed through our secure intake protocol. Select your preferred channel below or transmit a direct payload to our engineering division.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CONTACT MATRIX GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* DIRECT CHANNELS (1/3 Column) */}
          <div className="flex flex-col gap-6">
            
            <div className="bg-[#050505]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] flex flex-col group hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Direct Email Payload</h3>
              <a href="mailto:sysadmin@takumitech.co.za" className="text-lg font-black text-white hover:text-blue-400 transition-colors uppercase tracking-wider truncate">
                sysadmin@takumitech.co.za
              </a>
            </div>

            <div className="bg-[#050505]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] flex flex-col group hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(16,185,129,0.2)]">
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Priority Voice Node</h3>
              <a href="tel:+27818281861" className="text-lg font-black text-white hover:text-emerald-400 transition-colors uppercase tracking-wider">
                +27 (0) 81 828 1861
              </a>
            </div>

            <div className="bg-[#050505]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] flex flex-col group hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(168,85,247,0.2)]">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Physical Hub</h3>
              <span className="text-sm font-medium text-white leading-relaxed uppercase">
                Cape Town Node<br />
                Western Cape, ZA<br />
                <span className="text-[10px] text-gray-500 mt-2 block tracking-widest">ACCESS: BY APPOINTMENT ONLY</span>
              </span>
            </div>

            {/* NEW SOCIAL NETWORK CARD */}
            <div className="bg-[#050505]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] flex flex-col group hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[inset_0_0_15px_rgba(236,72,153,0.2)]">
                <Share2 className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Social Network</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/takumitech.co.za/" target="_blank" rel="noopener noreferrer" className="group/social flex items-center gap-4 text-sm font-bold text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5 text-gray-500 group-hover/social:text-[#00E5FF] transition-colors" />
                  INSTAGRAM
                </a>
                <a href="https://www.linkedin.com/company/takumi-tech/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="group/social flex items-center gap-4 text-sm font-bold text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-500 group-hover/social:text-[#0A66C2] transition-colors" />
                  LINKEDIN
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590717218763" target="_blank" rel="noopener noreferrer" className="group/social flex items-center gap-4 text-sm font-bold text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5 text-gray-500 group-hover/social:text-[#1877F2] transition-colors" />
                  FACEBOOK
                </a>
              </div>
            </div>

          </div>

          {/* SECURE TRANSMISSION FORM (2/3 Column) */}
          <div className="lg:col-span-2">
            <div className="bg-[#050505]/40 backdrop-blur-2xl border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden h-full flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              
              {/* Form Header */}
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h2 className="text-xl font-black uppercase tracking-wider text-white">Secure Transmission</h2>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Line Encrypted</span>
                </div>
              </div>

              {/* The Form Engine */}
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Sender Designation</label>
                    <input 
                      type="text" 
                      name="designation"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/5 transition-all disabled:opacity-50"
                      placeholder="ENTER NAME / CALLSIGN"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Return Vector (Email)</label>
                    <input 
                      type="email" 
                      name="returnVector"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/5 transition-all disabled:opacity-50"
                      placeholder="SYSADMIN@DOMAIN.COM"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Transmission Level / Service Node</label>
                  <div className="relative">
                    <select 
                      name="module"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/5 transition-all appearance-none cursor-pointer disabled:opacity-50"
                      defaultValue="general"
                    >
                      <optgroup label="Architecture & Infrastructure">
                        <option value="general">General Architecture Inquiry</option>
                        <option value="hardware">Hardware Sourcing & Mastery</option>
                        <option value="emergency">Emergency Incident Response (Critical)</option>
                      </optgroup>
                      <optgroup label="Web Deployment Packages">
                        <option value="web-foundation">Web Deployment: Foundation Build (R850 Once-off)</option>
                        <option value="web-managed">Web Deployment: Managed Environment (R150 / Month)</option>
                      </optgroup>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-grow">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Encrypted Payload</label>
                  <textarea 
                    name="payload"
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full h-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/5 transition-all resize-none disabled:opacity-50"
                    placeholder="Enter your system parameters, project details, or exact requirements here..."
                  />
                </div>

                {/* Form Status Indicators */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono tracking-widest uppercase">
                    <CheckCircle className="w-4 h-4" /> Payload Successfully Transmitted.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono tracking-widest uppercase">
                    <XCircle className="w-4 h-4" /> Transmission Failed. Check Network.
                  </div>
                )}

                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 mt-2">
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2 max-w-[200px] text-center md:text-left">
                    <Lock className="w-3 h-3 shrink-0" /> Data is encrypted end-to-end.
                  </p>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-cyan-600 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all ring-1 ring-cyan-400/50 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Transmitting...</span>
                    ) : (
                      <>Transmit Payload <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}