"use client";

import { useState, FormEvent, useEffect, Suspense } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Send, Terminal, ShieldCheck, CheckCircle, XCircle, ArrowLeft, 
  Activity, Server, Globe, Layers, Network, Wrench, User, Mail, 
  AlignLeft, ArrowRight, Briefcase, Search, Cloud, MapPin, Users, ArrowUpRight 
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// ---------------------------------------------------------
// CATEGORY & SUB-MENU DATA
// ---------------------------------------------------------
const PRIMARY_SERVICES = [
  { id: "hardware-cat", icon: Server, label: "IT & Hardware", isCategory: true, theme: "hover:border-[#00E5FF]/40 text-gray-300 hover:text-white" },
  { id: "web-cat", icon: Globe, label: "Web & Branding", isCategory: true, theme: "hover:border-[#8B5CF6]/40 text-gray-300 hover:text-white" },
  { id: "network", icon: Network, label: "Internet & Wi-Fi", isCategory: false, theme: "hover:border-[#10B981]/40 text-gray-300 hover:text-white" },
  { id: "retainer", icon: Briefcase, label: "Business Retainer", isCategory: false, theme: "hover:border-[#F59E0B]/40 text-gray-300 hover:text-white" },
  { id: "logistics-cat", icon: MapPin, label: "Drop-Off / On-Site", isCategory: true, theme: "hover:border-[#F43F5E]/40 text-gray-300 hover:text-white" },
];

const HARDWARE_SERVICES = [
  { id: "tech-support", label: "Computer Help & Support", desc: "General diagnostics and troubleshooting.", icon: Activity, color: "text-[#00E5FF]" },
  { id: "repairs", label: "Physical Hardware Repairs", desc: "Thermal repasting, part replacements.", icon: Wrench, color: "text-[#00E5FF]" },
  { id: "pc-build", label: "Custom PC Assembly", desc: "Bring your parts, we build it perfectly.", icon: Layers, color: "text-[#00E5FF]" },
  { id: "device-opt", label: "System Speed-Up", desc: "Virus removal and software cleanup.", icon: ShieldCheck, color: "text-[#00E5FF]" },
];

const WEB_SERVICES = [
  { id: "web-dev", label: "Website Design", desc: "Professional landing pages and sites.", icon: Globe, color: "text-[#8B5CF6]" },
  { id: "email", label: "Professional Email", desc: "Business email setup (R95/month).", icon: Mail, color: "text-[#8B5CF6]" },
  { id: "backup", label: "Secure Cloud Backups", desc: "Automated data protection (R350).", icon: Cloud, color: "text-[#8B5CF6]" },
  { id: "google", label: "Google SEO Setup", desc: "Get found on local search (R350).", icon: Search, color: "text-[#8B5CF6]" },
];

const LOGISTICS_SERVICES = [
  { id: "dropoff", label: "Hardware Drop-Off", desc: "Schedule a time to drop off your tech.", icon: Server, color: "text-[#F43F5E]" },
  { id: "onsite", label: "On-Site Call-Out", desc: "Request an engineer at your location.", icon: MapPin, color: "text-[#F43F5E]" }
];

// ---------------------------------------------------------
// HARDWARE-ACCELERATED ANIMATION VARIANTS
// ---------------------------------------------------------
const stepVariants: Variants = {
  hidden: { opacity: 0, x: 15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, x: -15, transition: { duration: 0.25, ease: "easeIn" } }
};

const subMenuVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } }
};

// ---------------------------------------------------------
// SMART TICKET FORM COMPONENT
// ---------------------------------------------------------
function SmartTicketForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeInput, setActiveInput] = useState<string | null>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isPreselected, setIsPreselected] = useState(false);

  const [formData, setFormData] = useState({
    designation: "",
    returnVector: "",
    module: "",
    payload: "",
  });

  // SMART URL INTERCEPTOR
  useEffect(() => {
    const serviceParam = searchParams.get("service") || searchParams.get("category") || searchParams.get("mode");
    
    if (serviceParam) {
      setIsPreselected(true);

      const moduleMap: Record<string, string> = {
        "tech-support": "Computer Help",
        "network": "Internet & Network Setup",
        "web-dev": "Website Design",
        "sourcing": "Buying Tech & Parts",
        "device-opt": "Computer Speed-Up",
        "repairs": "Physical Repairs",
        "pc-build": "Custom PC Assembly",
        "retainer": "Takumi Business Retainer",
        "email": "Professional Email Setup",
        "backup": "Secure Cloud Backups",
        "google": "Google SEO Setup",
        "dropoff": "Hardware Drop-Off",
        "onsite": "On-Site Deployment"
      };

      const templateMap: Record<string, string> = {
        "retainer": "I am interested in applying for The Takumi Retainer (R450/month) for my business. Please contact me to set this up.",
        "email": "I would like to set up a Professional Business Email (R95/month).",
        "backup": "I would like to set up Secure Cloud Backups to protect my business data.",
        "google": "I would like to get my business listed and optimized on Google.",
        "pc-build": "I have my own parts and need a custom PC assembled with professional cable management.",
        "network": "I am requesting an on-site deployment for an internet/network setup.",
        "dropoff": "I need to schedule a hardware drop-off for physical repairs or diagnostics.",
        "onsite": "I am requesting an on-site engineering deployment at my location."
      };

      setFormData(prev => ({
        ...prev,
        module: moduleMap[serviceParam] || serviceParam.toUpperCase(),
        payload: prev.payload || templateMap[serviceParam] || ""
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (option: any) => {
    if (option.isCategory) {
      setSelectedCategory(option.id);
    } else {
      setFormData({ ...formData, module: option.label });
      setTimeout(() => setStep(3), 150); 
    }
  };

  const handleNext = () => {
    if (step === 1 && isPreselected) {
      setStep(3);
    } else {
      setStep((prev) => prev + 1);
    }
  };
  
  const handleBack = () => {
    if (step === 3 && isPreselected) {
      setStep(1);
    } else if (step === 2 && selectedCategory) {
      setSelectedCategory(null);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const isStep1Valid = formData.designation.trim().length > 0 && formData.returnVector.includes("@");
  const isStep3Valid = formData.payload.trim().length > 10;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isStep3Valid) return;
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payloadData = {
      ...formData,
      urgency: "CRITICAL", 
      dynamicData: `Direct Support Log from Ticketing Node`,
    };

    try {
      const response = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setStep(4);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Transmission failure:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-6 transform-gpu">
      
      {/* Back Navigation */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#00E5FF]" /> Back to Home
        </Link>
      </motion.div>

      {/* TICKET INTERFACE MATRIX */}
      <div className="bg-[#0A0D14] border border-white/5 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col min-h-[580px]">
        
        {/* PROGRESS INDICATOR BAR */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#00E5FF] to-[#2563EB]"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>

        <div className="p-6 sm:p-10 md:p-12 flex flex-col flex-grow">
          
          {/* Header */}
          {step < 4 && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6 border-b border-white/5 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#030508] border border-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                    Step 0{step} <span className="text-gray-600 font-normal">/ 03</span>
                  </h1>
                  <p className="text-[10px] sm:text-xs font-mono text-[#00E5FF] uppercase tracking-widest mt-1">
                    {step === 1 && "Your Identity"}
                    {step === 2 && (selectedCategory ? "Select Module" : "Choose Service Area")}
                    {step === 3 && (isPreselected ? `Details for: ${formData.module}` : "Tell Us What You Need")}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ANIMATED FORM ENGINE */}
          <form onSubmit={handleSubmit} className="flex flex-col flex-grow relative">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: IDENTITY & DIRECT CONTACT */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-5 flex-grow justify-center will-change-transform">
                  
                  {isPreselected && (
                    <div className="p-4 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 mb-2 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-[#00E5FF]">
                        We've selected <strong className="text-white">{formData.module}</strong> for you. Enter your details to continue.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <User className="w-3 h-3" /> Your Full Name
                    </label>
                    <input 
                      type="text" name="designation" value={formData.designation} onChange={handleChange} onFocus={() => setActiveInput('designation')} onBlur={() => setActiveInput(null)}
                      className={`w-full bg-[#030508] border rounded-xl px-5 py-4 text-base font-medium text-white focus:outline-none transition-all duration-300 ${activeInput === 'designation' ? 'border-[#00E5FF]/50 ring-1 ring-[#00E5FF]/20' : 'border-white/5 hover:border-white/10'}`}
                      placeholder="E.g., John Doe" autoFocus
                    />
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <input 
                      type="email" name="returnVector" value={formData.returnVector} onChange={handleChange} onFocus={() => setActiveInput('email')} onBlur={() => setActiveInput(null)}
                      className={`w-full bg-[#030508] border rounded-xl px-5 py-4 text-base font-medium text-white focus:outline-none transition-all duration-300 ${activeInput === 'email' ? 'border-[#00E5FF]/50 ring-1 ring-[#00E5FF]/20' : 'border-white/5 hover:border-white/10'}`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="mt-auto flex flex-col gap-6 pt-4">
                    <button 
                      type="button" 
                      onClick={handleNext} 
                      disabled={!isStep1Valid} 
                      className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-[#030508] font-bold uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                      Next Step <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* DIRECT CONTACT FALLBACK (Matches the Modal Design) */}
                    <div className="flex flex-col pt-6 border-t border-white/5">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Or bypass the queue:</span>
                      
                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <a 
                          href="https://wa.me/27818281861" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center p-3 rounded-xl bg-[#030508] border border-white/5 hover:border-[#00E5FF]/40 transition-colors flex-1"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mr-3">
                            <Terminal className="w-4 h-4 text-gray-300 group-hover:text-[#00E5FF] transition-colors" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-white font-bold text-xs">Message Rudi</h4>
                            <p className="text-gray-500 text-[10px] mt-0.5">Tech & Engineering</p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#00E5FF] transition-colors" />
                        </a>
                        
                        <a 
                          href="https://wa.me/27614955695" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center p-3 rounded-xl bg-[#030508] border border-white/5 hover:border-[#2563EB]/40 transition-colors flex-1"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mr-3">
                            <Users className="w-4 h-4 text-gray-300 group-hover:text-[#2563EB] transition-colors" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-white font-bold text-xs">Message Alex</h4>
                            <p className="text-gray-500 text-[10px] mt-0.5">Client Relations</p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#2563EB] transition-colors" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: MEGA MENU */}
              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-4 flex-grow will-change-transform">
                  <AnimatePresence mode="wait">
                    
                    {!selectedCategory && (
                      <motion.div key="main-categories" variants={subMenuVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col flex-grow">
                        <p className="text-gray-400 text-sm mb-4 font-medium">Select a department below.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow content-start">
                          {PRIMARY_SERVICES.map((option) => {
                            const Icon = option.icon;
                            return (
                              <button key={option.id} type="button" onClick={() => handleServiceSelect(option)} className={`relative flex items-center justify-between p-5 rounded-xl border transition-all duration-300 text-left bg-[#030508] border-white/5 hover:-translate-y-0.5 ${option.theme}`}>
                                <div className="flex items-center gap-4">
                                  <Icon className="w-5 h-5 text-gray-500" />
                                  <span className="text-sm font-bold transition-colors">
                                    {option.label}
                                  </span>
                                </div>
                                {option.isCategory && <ArrowRight className="w-4 h-4 text-gray-600" />}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {selectedCategory === "hardware-cat" && (
                      <motion.div key="sub-hardware" variants={subMenuVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col flex-grow">
                        <p className="text-[#00E5FF] text-sm mb-4 font-bold tracking-wide">Select your hardware service:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {HARDWARE_SERVICES.map((option) => (
                             <button key={option.id} type="button" onClick={() => handleServiceSelect(option)} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#030508] hover:bg-[#00E5FF]/5 hover:border-[#00E5FF]/30 transition-all text-left group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                   <option.icon className={`w-5 h-5 ${option.color}`} />
                                </div>
                                <div>
                                   <span className="block text-sm font-bold text-gray-300 group-hover:text-[#00E5FF] transition-colors">{option.label}</span>
                                   <span className="block text-[10px] text-gray-500 mt-0.5">{option.desc}</span>
                                </div>
                             </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {selectedCategory === "web-cat" && (
                      <motion.div key="sub-web" variants={subMenuVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col flex-grow">
                        <p className="text-[#8B5CF6] text-sm mb-4 font-bold tracking-wide">Select your web service:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {WEB_SERVICES.map((option) => (
                             <button key={option.id} type="button" onClick={() => handleServiceSelect(option)} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#030508] hover:bg-[#8B5CF6]/5 hover:border-[#8B5CF6]/30 transition-all text-left group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                   <option.icon className={`w-5 h-5 ${option.color}`} />
                                </div>
                                <div>
                                   <span className="block text-sm font-bold text-gray-300 group-hover:text-[#8B5CF6] transition-colors">{option.label}</span>
                                   <span className="block text-[10px] text-gray-500 mt-0.5">{option.desc}</span>
                                </div>
                             </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {selectedCategory === "logistics-cat" && (
                      <motion.div key="sub-logistics" variants={subMenuVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col flex-grow">
                        <p className="text-[#F43F5E] text-sm mb-4 font-bold tracking-wide">Select deployment type:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {LOGISTICS_SERVICES.map((option) => (
                             <button key={option.id} type="button" onClick={() => handleServiceSelect(option)} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#030508] hover:bg-[#F43F5E]/5 hover:border-[#F43F5E]/30 transition-all text-left group">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                   <option.icon className={`w-5 h-5 ${option.color}`} />
                                </div>
                                <div>
                                   <span className="block text-sm font-bold text-gray-300 group-hover:text-[#F43F5E] transition-colors">{option.label}</span>
                                   <span className="block text-[10px] text-gray-500 mt-0.5">{option.desc}</span>
                                </div>
                             </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  <div className="pt-6 mt-auto flex justify-start border-t border-white/5">
                    <button type="button" onClick={handleBack} className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: PAYLOAD */}
              {step === 3 && (
                <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-6 flex-grow will-change-transform">
                  <div className="flex flex-col gap-2 flex-grow">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <AlignLeft className="w-3 h-3" /> Provide Request Details
                    </label>
                    <textarea 
                      name="payload" value={formData.payload} onChange={handleChange} onFocus={() => setActiveInput('payload')} onBlur={() => setActiveInput(null)}
                      className={`w-full flex-grow bg-[#030508] border rounded-xl px-5 py-5 text-sm font-medium text-white focus:outline-none transition-all duration-300 resize-none min-h-[220px] ${activeInput === 'payload' ? 'border-[#00E5FF]/50 ring-1 ring-[#00E5FF]/20' : 'border-white/5 hover:border-white/10'}`}
                      placeholder="Tell us exactly what you need help with..." autoFocus
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono tracking-widest uppercase flex items-center gap-3">
                      <XCircle className="w-5 h-5 shrink-0" /> Failed to send. Please check your internet.
                    </div>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between mt-auto gap-4 border-t border-white/5 pt-6">
                    <button type="button" onClick={handleBack} disabled={isSubmitting} className="text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 disabled:opacity-50 w-full sm:w-auto justify-center sm:justify-start">
                      <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>

                    <button type="submit" disabled={!isStep3Valid || isSubmitting} className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#030508] font-bold uppercase tracking-widest text-xs rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed w-full sm:w-auto overflow-hidden disabled:hover:shadow-none">
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Activity className="w-4 h-4 animate-spin" /> Sending...
                        </span>
                      ) : (
                        <>
                          <span>Send Request</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: SUCCESS STATE */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center flex-grow py-10 will-change-transform">
                  <div className="mb-6">
                    <CheckCircle className="w-20 h-20 text-[#10B981]" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white mb-3">Request Sent Successfully</h2>
                  <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-10">
                    We have received your message. We will review your request and get back to you at <strong className="text-white">{formData.returnVector}</strong> shortly.
                  </p>
                  <button type="button" onClick={() => window.location.reload()} className="px-8 py-3 bg-[#030508] border border-white/10 rounded-xl text-xs font-bold text-gray-300 uppercase tracking-widest hover:bg-white/5 hover:text-white transition-colors">
                    Send Another Request
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </form>

          {/* Secure Footer */}
          {step < 4 && (
            <div className="absolute bottom-6 left-10 flex items-center gap-2 text-gray-600 pointer-events-none hidden sm:flex">
              <ShieldCheck className="w-3 h-3 text-emerald-500/30" />
              <span className="text-[9px] font-mono uppercase tracking-[0.2em]">Secure & Encrypted Connection</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// MAIN PAGE EXPORT
// ---------------------------------------------------------
export default function TicketPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-24 relative overflow-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-[#030508]">
      
      {/* Background Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-gradient-to-br from-[#00E5FF]/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#2563EB]/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]" />
      </div>

      <Suspense fallback={<div className="relative z-10 text-[#00E5FF] font-mono tracking-widest uppercase">Initializing Secure Terminal...</div>}>
        <SmartTicketForm />
      </Suspense>
      
    </div>
  );
}