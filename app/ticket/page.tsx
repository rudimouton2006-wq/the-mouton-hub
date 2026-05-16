"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, Terminal, ShieldCheck, CheckCircle, XCircle, ArrowLeft, Activity, Server, Globe, Layers, Network, Wrench, User, Mail, AlignLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------
// VISUAL SERVICE TARGETS
// ---------------------------------------------------------
const PRIMARY_SERVICES = [
  { 
    id: "hardware", 
    icon: Server, 
    label: "Buying Tech & Parts",
    isCategory: false,
    theme: "hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] active-border:border-[#00E5FF] active-glow:shadow-[0_0_20px_rgba(0,229,255,0.3)] active-text:text-[#00E5FF]"
  },
  { 
    id: "web-category", 
    icon: Globe, 
    label: "Website Design Packages",
    isCategory: true,
    theme: "hover:border-[#8B5CF6]/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] active-border:border-[#8B5CF6] active-glow:shadow-[0_0_20px_rgba(139,92,246,0.3)] active-text:text-[#8B5CF6]"
  },
  { 
    id: "network", 
    icon: Network, 
    label: "Internet & Wi-Fi Setup",
    isCategory: false,
    theme: "hover:border-[#10B981]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] active-border:border-[#10B981] active-glow:shadow-[0_0_20px_rgba(16,185,129,0.3)] active-text:text-[#10B981]"
  },
  { 
    id: "general", 
    icon: Wrench, 
    label: "Computer Help & Repairs",
    isCategory: false,
    theme: "hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active-border:border-white active-glow:shadow-[0_0_20px_rgba(255,255,255,0.2)] active-text:text-white"
  },
];

const WEB_SUB_SERVICES = [
  { 
    id: "web-foundation", 
    icon: Globe, 
    label: "The Foundation Build",
    price: "R850 Once-off",
    desc: "Includes full setup and .co.za domain. Zero monthly fees.",
    theme: "hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] active-border:border-[#00E5FF] active-glow:shadow-[0_0_20px_rgba(0,229,255,0.3)] active-text:text-[#00E5FF]"
  },
  { 
    id: "web-managed", 
    icon: Layers, 
    label: "The Managed Plan",
    price: "R150 / Month",
    desc: "R0 upfront. Covers domain, hosting, and unlimited basic updates.",
    theme: "hover:border-[#8B5CF6]/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] active-border:border-[#8B5CF6] active-glow:shadow-[0_0_20px_rgba(139,92,246,0.3)] active-text:text-[#8B5CF6]"
  },
];

// ---------------------------------------------------------
// ANIMATION VARIANTS (Strictly Typed for Vercel)
// ---------------------------------------------------------
const stepVariants: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    x: -40, 
    filter: "blur(10px)",
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};

const subMenuVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(5px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, filter: "blur(5px)", transition: { duration: 0.3 } }
};

export default function TicketPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [activeInput, setActiveInput] = useState<string | null>(null);
  
  // Category State for Nested Options
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Unified Form State
  const [formData, setFormData] = useState({
    designation: "",
    returnVector: "",
    module: "",
    payload: "",
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Advanced Service Selection Logic
  const handleServiceSelect = (option: any) => {
    if (option.isCategory) {
      setSelectedCategory(option.id);
    } else {
      setFormData({ ...formData, module: option.id });
      setTimeout(() => setStep(3), 300); 
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  
  const handleBack = () => {
    if (step === 2 && selectedCategory) {
      setSelectedCategory(null);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  // Validation Logic
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
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-24 relative overflow-hidden selection:bg-[#00E5FF]/30 selection:text-white bg-transparent">
      
      {/* --------------------------------------------------------- */}
      {/* INSANELY BEAUTIFUL AMBIENT BACKGROUND (WITH EDGE MASKING) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
          {/* Dynamic Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Breathing Aurora Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1], 
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#00E5FF] to-transparent rounded-full blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.08, 0.15, 0.08],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-bl from-[#2563EB] to-transparent rounded-full blur-[130px] mix-blend-screen" 
          />
          
          {/* Base Noise Texture for Premium Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0" />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#00E5FF]" /> 
            Back to Home
          </Link>
        </motion.div>

        {/* TICKET INTERFACE MATRIX */}
        <div className="bg-[#080B12]/80 backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col min-h-[550px]">
          
          {/* PROGRESS INDICATOR BAR */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00E5FF] to-[#2563EB] shadow-[0_0_15px_rgba(0,229,255,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="p-6 sm:p-10 md:p-12 flex flex-col flex-grow">
            
            {/* Animated Header */}
            {step < 4 && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6 border-b border-white/5 pb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#00E5FF]/20 animate-pulse mix-blend-overlay" />
                    <Terminal className="w-5 h-5 text-[#00E5FF] relative z-10" />
                  </div>
                  <div>
                    <h1 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">
                      Step 0{step} <span className="text-gray-500">/ 03</span>
                    </h1>
                    <p className="text-[10px] sm:text-xs font-mono text-[#00E5FF] uppercase tracking-widest mt-1">
                      {step === 1 && "Your Information"}
                      {step === 2 && (selectedCategory ? "Choose Website Plan" : "Choose Service")}
                      {step === 3 && "Tell Us What You Need"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ANIMATED FORM ENGINE */}
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow relative">
              <AnimatePresence mode="wait">
                
                {/* --------------------------------------------------------- */}
                {/* STEP 1: IDENTITY */}
                {/* --------------------------------------------------------- */}
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-6 flex-grow justify-center"
                  >
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <User className="w-3 h-3 text-gray-500" /> Your Full Name
                      </label>
                      <div className="relative group">
                        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${activeInput === 'designation' ? 'opacity-100 shadow-[0_0_20px_rgba(0,229,255,0.15)]' : 'opacity-0'}`} />
                        <input 
                          type="text" 
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          onFocus={() => setActiveInput('designation')}
                          onBlur={() => setActiveInput(null)}
                          className="w-full bg-[#050505]/80 border border-white/10 rounded-xl px-5 py-5 text-base md:text-lg font-medium text-white focus:outline-none focus:border-[#00E5FF]/50 focus:bg-[#00E5FF]/5 transition-all relative z-10"
                          placeholder="E.g., John Doe"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <Mail className="w-3 h-3 text-gray-500" /> Email Address
                      </label>
                      <div className="relative group">
                        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${activeInput === 'email' ? 'opacity-100 shadow-[0_0_20px_rgba(0,229,255,0.15)]' : 'opacity-0'}`} />
                        <input 
                          type="email" 
                          name="returnVector"
                          value={formData.returnVector}
                          onChange={handleChange}
                          onFocus={() => setActiveInput('email')}
                          onBlur={() => setActiveInput(null)}
                          className="w-full bg-[#050505]/80 border border-white/10 rounded-xl px-5 py-5 text-base md:text-lg font-medium text-white focus:outline-none focus:border-[#00E5FF]/50 focus:bg-[#00E5FF]/5 transition-all relative z-10"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="pt-6 mt-auto flex justify-end">
                      <button 
                        type="button"
                        onClick={handleNext}
                        disabled={!isStep1Valid}
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-[#050505] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-gray-200 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      >
                        Next Step <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* --------------------------------------------------------- */}
                {/* STEP 2: SERVICE TARGET */}
                {/* --------------------------------------------------------- */}
                {step === 2 && (
                  <motion.div 
                    key="step2"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-4 flex-grow"
                  >
                    <AnimatePresence mode="wait">
                      {/* VIEW A: MAIN CATEGORIES */}
                      {!selectedCategory && (
                        <motion.div 
                          key="main-categories"
                          variants={subMenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex flex-col flex-grow"
                        >
                          <p className="text-[#94A3B8] text-sm mb-4 font-medium">Click on the service you need below.</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow content-start">
                            {PRIMARY_SERVICES.map((option) => {
                              const isSelected = formData.module === option.id;
                              const Icon = option.icon;
                              const activeBorderClass = option.theme.split(' ').find(c => c.startsWith('active-border:'))?.split(':')[1];
                              const activeGlowClass = option.theme.split(' ').find(c => c.startsWith('active-glow:'))?.split(':')[1];
                              const activeTextClass = option.theme.split(' ').find(c => c.startsWith('active-text:'))?.split(':')[1];
                              const hoverClasses = option.theme.split(' ').filter(c => c.startsWith('hover:')).join(' ');

                              return (
                                <button
                                  key={option.id}
                                  type="button"
                                  onClick={() => handleServiceSelect(option)}
                                  className={`
                                    relative flex flex-col items-start p-6 rounded-2xl border transition-all duration-300 text-left
                                    ${isSelected 
                                      ? `bg-[#050505] ${activeBorderClass} ${activeGlowClass} scale-[0.98]` 
                                      : `bg-[#050505]/50 border-white/5 hover:bg-[#050505]/80 hover:-translate-y-1 ${hoverClasses}`
                                    }
                                  `}
                                >
                                  <div className="flex items-center justify-between w-full mb-4">
                                    <Icon className={`w-6 h-6 transition-colors duration-300 ${isSelected ? activeTextClass : 'text-gray-400'}`} />
                                    {option.isCategory && <ArrowRight className="w-4 h-4 text-gray-600" />}
                                  </div>
                                  <span className={`text-sm font-bold transition-colors duration-300 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                                    {option.label}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* VIEW B: WEB DEPLOYMENT SUB-MENU */}
                      {selectedCategory === "web-category" && (
                        <motion.div 
                          key="sub-categories"
                          variants={subMenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex flex-col flex-grow"
                        >
                          <p className="text-[#8B5CF6] text-sm mb-4 font-bold tracking-wide">Which plan works best for you?</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow content-start">
                            {WEB_SUB_SERVICES.map((option) => {
                              const isSelected = formData.module === option.id;
                              const Icon = option.icon;
                              const activeBorderClass = option.theme.split(' ').find(c => c.startsWith('active-border:'))?.split(':')[1];
                              const activeGlowClass = option.theme.split(' ').find(c => c.startsWith('active-glow:'))?.split(':')[1];
                              const activeTextClass = option.theme.split(' ').find(c => c.startsWith('active-text:'))?.split(':')[1];
                              const hoverClasses = option.theme.split(' ').filter(c => c.startsWith('hover:')).join(' ');

                              return (
                                <button
                                  key={option.id}
                                  type="button"
                                  onClick={() => handleServiceSelect(option)}
                                  className={`
                                    relative flex flex-col items-start p-6 rounded-2xl border transition-all duration-300 text-left
                                    ${isSelected 
                                      ? `bg-[#050505] ${activeBorderClass} ${activeGlowClass} scale-[0.98]` 
                                      : `bg-[#050505]/50 border-white/5 hover:bg-[#050505]/80 hover:-translate-y-1 ${hoverClasses}`
                                    }
                                  `}
                                >
                                  <div className="flex items-center justify-between w-full mb-3">
                                    <Icon className={`w-6 h-6 transition-colors duration-300 ${isSelected ? activeTextClass : 'text-gray-400'}`} />
                                    <span className={`text-sm font-black tracking-widest ${isSelected ? activeTextClass : 'text-white/60'}`}>{option.price}</span>
                                  </div>
                                  <span className={`text-base font-bold mb-2 transition-colors duration-300 ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                                    {option.label}
                                  </span>
                                  <p className="text-xs text-gray-500 leading-relaxed">
                                    {option.desc}
                                  </p>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="pt-6 mt-auto flex justify-start">
                      <button 
                        type="button"
                        onClick={handleBack}
                        className="text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
                      >
                        <ArrowLeft className="w-3 h-3" /> Go Back
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* --------------------------------------------------------- */}
                {/* STEP 3: PAYLOAD (Details) */}
                {/* --------------------------------------------------------- */}
                {step === 3 && (
                  <motion.div 
                    key="step3"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-6 flex-grow"
                  >
                    <div className="flex flex-col gap-2 flex-grow relative">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <AlignLeft className="w-3 h-3 text-gray-500" /> Describe Your Request
                      </label>
                      <div className="relative group h-full flex-grow min-h-[300px]">
                        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${activeInput === 'payload' ? 'opacity-100 shadow-[0_0_20px_rgba(0,229,255,0.15)]' : 'opacity-0'}`} />
                        <textarea 
                          name="payload"
                          value={formData.payload}
                          onChange={handleChange}
                          onFocus={() => setActiveInput('payload')}
                          onBlur={() => setActiveInput(null)}
                          rows={8}
                          className="w-full h-full bg-[#050505]/80 border border-white/10 rounded-xl px-5 py-5 text-sm font-medium text-white focus:outline-none focus:border-[#00E5FF]/50 focus:bg-[#00E5FF]/5 transition-all resize-y relative z-10 custom-scrollbar"
                          placeholder="Tell us exactly what you need help with or what kind of website you want to build..."
                          autoFocus
                        />
                      </div>
                    </div>

                    {submitStatus === "error" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono tracking-widest uppercase flex items-center gap-3">
                        <XCircle className="w-5 h-5 shrink-0" /> Failed to send. Please check your internet.
                      </motion.div>
                    )}

                    <div className="pt-4 flex items-center justify-between mt-auto">
                      <button 
                        type="button"
                        onClick={handleBack}
                        disabled={isSubmitting}
                        className="text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 disabled:opacity-50"
                      >
                        <ArrowLeft className="w-3 h-3" /> Go Back
                      </button>

                      <button 
                        type="submit"
                        disabled={!isStep3Valid || isSubmitting}
                        className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#050505] font-black uppercase tracking-widest text-xs rounded-xl hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all overflow-hidden disabled:opacity-20 disabled:cursor-not-allowed isolate"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        {isSubmitting ? (
                          <span className="animate-pulse flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                            <Activity className="w-4 h-4 animate-spin" /> Sending...
                          </span>
                        ) : (
                          <>
                            <span className="group-hover:text-white transition-colors duration-500">Send Request</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white transition-all duration-500" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* --------------------------------------------------------- */}
                {/* STEP 4: SUCCESS STATE */}
                {/* --------------------------------------------------------- */}
                {step === 4 && (
                  <motion.div 
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center flex-grow py-10"
                  >
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[40px] opacity-20 animate-pulse" />
                      <CheckCircle className="w-24 h-24 text-emerald-400 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                    </div>
                    
                    <h2 className="text-3xl font-black uppercase tracking-wider text-white mb-4">Request Sent Successfully</h2>
                    <p className="text-[#94A3B8] max-w-sm leading-relaxed mb-10">
                      We have received your message. We will review your request and get back to you at <strong>{formData.returnVector}</strong> as soon as possible.
                    </p>

                    <button 
                      type="button"
                      onClick={() => {
                        setFormData({ designation: "", returnVector: "", module: "", payload: "" });
                        setSelectedCategory(null);
                        setStep(1);
                      }}
                      className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-white uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </form>

            {/* Global Secure Footer */}
            {step < 4 && (
              <div className="absolute bottom-6 left-10 flex items-center gap-2 text-gray-500 pointer-events-none hidden sm:flex">
                <ShieldCheck className="w-3 h-3 text-emerald-500/50" />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em]">Secure & Encrypted Connection</span>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}