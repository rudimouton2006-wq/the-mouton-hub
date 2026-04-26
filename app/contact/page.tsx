"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Wrench, Wifi, Globe, Search, UploadCloud, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import DecodeText from "../components/DecodeText";
import MagneticWrapper from "../components/MagneticWrapper";
import RevealWrapper from "../components/RevealWrapper";

type Category = "Repair" | "Network" | "Web Design" | "Sourcing" | "";

function TicketingFormLogic() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    category: "" as Category,
    deviceMake: "",
    deviceModel: "",
    symptoms: "",
    networkType: "Home",
    isp: "",
    mainIssue: "",
    generalRequest: "",
    file: null as File | null,
  });

  useEffect(() => {
    const preselectedCategory = searchParams.get("category");
    if (preselectedCategory && ["Repair", "Network", "Web Design", "Sourcing"].includes(preselectedCategory)) {
      setFormData((prev) => ({ ...prev, category: preselectedCategory as Category }));
      setStep(2);
    }
  }, [searchParams]);

  const handleCategorySelect = (category: Category) => {
    setFormData({ ...formData, category });
    setStep(2);
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("clientName", formData.clientName);
      payload.append("clientEmail", formData.clientEmail);
      payload.append("clientPhone", formData.clientPhone);
      payload.append("category", formData.category);
      payload.append("deviceMake", formData.deviceMake);
      payload.append("deviceModel", formData.deviceModel);
      payload.append("symptoms", formData.symptoms);
      payload.append("networkType", formData.networkType);
      payload.append("isp", formData.isp);
      payload.append("mainIssue", formData.mainIssue);
      payload.append("generalRequest", formData.generalRequest);
      
      if (formData.file) {
        payload.append("file", formData.file);
      }

      const response = await fetch("/api/ticket", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) throw new Error("Transmission error");
      router.push("/success");
    } catch (error) {
      console.error(error);
      alert("Transmission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div 
        className="w-full bg-white/5 h-2 rounded-full mb-12 overflow-hidden relative z-10 shadow-inner"
        role="progressbar" 
        aria-valuenow={step} 
        aria-valuemin={1} 
        aria-valuemax={3}
      >
        <div className="bg-blue-500 h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_0_15px_rgba(0,163,255,0.8)]" style={{ width: `${(step / 3) * 100}%` }} />
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 min-h-[350px] flex flex-col justify-center" aria-live="polite">
        
        {step === 1 && (
          <fieldset className="animate-in fade-in slide-in-from-bottom-8 duration-500 border-none p-0 m-0">
            <legend className="text-2xl md:text-3xl font-black mb-8 text-white text-center w-full uppercase tracking-wider">Initiate Support Protocol</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <MagneticWrapper pullStrength={0.05} className="w-full">
                <button type="button" onClick={() => handleCategorySelect("Repair")} className="w-full p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,163,255,0.15)] group flex flex-col items-center gap-5 min-h-[140px] backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-blue-500/30">
                    <Wrench className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  </div>
                  <span className="font-mono uppercase text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-widest">Electronics Repair</span>
                </button>
              </MagneticWrapper>
              
              <MagneticWrapper pullStrength={0.05} className="w-full">
                <button type="button" onClick={() => handleCategorySelect("Network")} className="w-full p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,163,255,0.15)] group flex flex-col items-center gap-5 min-h-[140px] backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-blue-500/30">
                    <Wifi className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  </div>
                  <span className="font-mono uppercase text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-widest">Network Support</span>
                </button>
              </MagneticWrapper>
              
              <MagneticWrapper pullStrength={0.05} className="w-full">
                <button type="button" onClick={() => handleCategorySelect("Web Design")} className="w-full p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,163,255,0.15)] group flex flex-col items-center gap-5 min-h-[140px] backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-blue-500/30">
                    <Globe className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  </div>
                  <span className="font-mono uppercase text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-widest">Web Design</span>
                </button>
              </MagneticWrapper>
              
              <MagneticWrapper pullStrength={0.05} className="w-full">
                <button type="button" onClick={() => handleCategorySelect("Sourcing")} className="w-full p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,163,255,0.15)] group flex flex-col items-center gap-5 min-h-[140px] backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-blue-500/30">
                    <Search className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  </div>
                  <span className="font-mono uppercase text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-widest">IT Sourcing</span>
                </button>
              </MagneticWrapper>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <button type="button" onClick={handleBack} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 font-mono text-xs uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-1.5 transition-colors bg-white/5 hover:bg-white/10 w-fit"><ArrowLeft className="w-4 h-4" aria-hidden="true" /> Return to Modes</button>
            
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl space-y-5 mb-8 backdrop-blur-sm">
              <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Phase 1: Client Identification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="clientName" className="sr-only">Full Name</label>
                  <input id="clientName" type="text" required placeholder="Full Name" className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" value={formData.clientName} onChange={(e) => setFormData({...formData, clientName: e.target.value})} />
                </div>
                <div>
                  <label htmlFor="clientEmail" className="sr-only">Email Address</label>
                  <input id="clientEmail" type="email" required placeholder="Email Address" className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" value={formData.clientEmail} onChange={(e) => setFormData({...formData, clientEmail: e.target.value})} />
                </div>
              </div>
              <div>
                <label htmlFor="clientPhone" className="sr-only">Phone Number (Optional)</label>
                <input id="clientPhone" type="tel" placeholder="Phone Number (Optional)" className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" value={formData.clientPhone} onChange={(e) => setFormData({...formData, clientPhone: e.target.value})} />
              </div>
            </div>

            {formData.category === "Repair" && (
              <div className="space-y-5 p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Phase 2: Hardware Parameters</h3>
                <div className="grid grid-cols-2 gap-5">
                  <label htmlFor="deviceMake" className="sr-only">Device Make</label>
                  <input id="deviceMake" type="text" required placeholder="Device Make (e.g. Dell)" className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formData.deviceMake} onChange={(e) => setFormData({ ...formData, deviceMake: e.target.value })} />
                  
                  <label htmlFor="deviceModel" className="sr-only">Device Model</label>
                  <input id="deviceModel" type="text" required placeholder="Model (e.g. XPS 15)" className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formData.deviceModel} onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })} />
                </div>
                <label htmlFor="symptoms" className="sr-only">Symptoms</label>
                <textarea id="symptoms" required rows={4} className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Describe the exact symptoms or error codes..." value={formData.symptoms} onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })} />
              </div>
            )}

            {formData.category === "Network" && (
              <div className="space-y-5 p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Phase 2: Environment Specs</h3>
                <div className="flex gap-4 mb-2">
                  <button type="button" onClick={() => setFormData({ ...formData, networkType: "Home" })} className={`flex-1 py-4 rounded-xl font-mono text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${formData.networkType === "Home" ? "bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-black/60 border border-white/10 text-gray-400 hover:border-blue-500/50"}`}>HOME</button>
                  <button type="button" onClick={() => setFormData({ ...formData, networkType: "Office" })} className={`flex-1 py-4 rounded-xl font-mono text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${formData.networkType === "Office" ? "bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-black/60 border border-white/10 text-gray-400 hover:border-blue-500/50"}`}>OFFICE</button>
                </div>
                <label htmlFor="isp" className="sr-only">Current ISP</label>
                <input id="isp" type="text" placeholder="Current ISP (e.g. Afrihost)" className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" value={formData.isp} onChange={(e) => setFormData({ ...formData, isp: e.target.value })} />
                
                <label htmlFor="mainIssue" className="sr-only">Main Issue</label>
                <textarea id="mainIssue" required rows={3} className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Describe the main network issue (e.g. Dead zones, high latency)..." value={formData.mainIssue} onChange={(e) => setFormData({ ...formData, mainIssue: e.target.value })} />
              </div>
            )}

            {(formData.category === "Web Design" || formData.category === "Sourcing") && (
              <div className="space-y-5 p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Phase 2: Project Architecture</h3>
                <label htmlFor="generalRequest" className="sr-only">Requirements Details</label>
                <textarea id="generalRequest" required rows={6} className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Please provide detailed specifications for the build or the parts you need..." value={formData.generalRequest} onChange={(e) => setFormData({ ...formData, generalRequest: e.target.value })} />
              </div>
            )}

            <div className="mt-10 flex justify-end">
              <MagneticWrapper pullStrength={0.2}>
                <button type="button" onClick={handleNext} className="px-10 py-5 bg-white text-black hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white rounded-xl font-black text-sm uppercase flex items-center gap-2 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)]">Proceed to Step 3 <ArrowRight className="w-5 h-5" aria-hidden="true" /></button>
              </MagneticWrapper>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <button type="button" onClick={handleBack} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 font-mono text-xs uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-1.5 transition-colors bg-white/5 hover:bg-white/10 w-fit"><ArrowLeft className="w-4 h-4" aria-hidden="true" /> Modify Specs</button>
            
            <h2 className="text-3xl font-black mb-3 text-white text-center uppercase tracking-wider">Visual Context</h2>
            <p className="text-center text-sm text-gray-400 mb-10 max-w-md mx-auto">Upload an image of the physical hardware damage, the network space, or the specific error code displayed.</p>
            
            <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 text-center hover:border-blue-500/50 hover:bg-blue-900/10 bg-black/60 relative cursor-pointer group transition-all duration-500 focus-within:ring-2 focus-within:ring-blue-500 shadow-inner">
              <label htmlFor="file-upload" className="sr-only">Upload visual context</label>
              <input id="file-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" onChange={(e) => e.target.files && setFormData({ ...formData, file: e.target.files[0] })} />
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500">
                <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
              </div>
              <p className="font-mono text-sm text-white font-bold tracking-widest uppercase">{formData.file ? formData.file.name : "Tap to initialize upload"}</p>
              <p className="text-xs text-gray-500 mt-2">JPG, PNG, PDF up to 10MB</p>
            </div>

            <div className="mt-12 flex justify-end">
              <MagneticWrapper pullStrength={0.15} className="w-full md:w-auto">
                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 disabled:text-blue-400 disabled:cursor-not-allowed rounded-xl font-black text-sm uppercase tracking-widest flex justify-center items-center gap-3 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] ring-1 ring-blue-400/50 min-h-[60px]">
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Transmitting Data...</> : "Submit Diagnostic Ticket"}
                </button>
              </MagneticWrapper>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center overflow-hidden">
      
      <header className="w-full max-w-3xl mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          <DecodeText text="Diagnostic" /> <br className="md:hidden" />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,163,255,0.2)]">
            <DecodeText text="Ticketing" delay={800} />
          </span>
        </h1>
        <RevealWrapper delay={1200} direction="up">
          <p className="text-gray-300 font-mono text-sm uppercase tracking-widest">
            Automated System Initialization • Cape Town, ZA
          </p>
        </RevealWrapper>
      </header>

      <RevealWrapper delay={150} className="w-full max-w-3xl">
        <section className="glass-card w-full rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)] border border-blue-500/20" aria-label="Ticketing Form">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="scanline opacity-10 pointer-events-none absolute inset-0" aria-hidden="true" />
          
          <Suspense fallback={<div className="min-h-[350px] flex items-center justify-center"><Loader2 className="w-10 h-10 text-blue-500 animate-spin" /></div>}>
            <TicketingFormLogic />
          </Suspense>

        </section>
      </RevealWrapper>

      {/* OPERATIONAL COVERAGE MAP */}
      <section className="w-full max-w-5xl mt-32 mb-10" aria-label="Operational Coverage Area">
        <RevealWrapper delay={0}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <Globe className="w-6 h-6 text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Operational Coverage</h2>
            <div className="h-px bg-white/10 flex-grow" aria-hidden="true" />
          </div>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <div className="glass-card rounded-[2rem] p-2 relative overflow-hidden h-[450px] border border-blue-500/30 shadow-[0_0_50px_rgba(0,163,255,0.15)] group">
            <iframe 
              title="Service Coverage Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.49883584878!2d18.5255474!3d-33.8820468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5a1b329a1b0b%3A0xc3f8373b320d3!2sBellville%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1714150505199!5m2!1sen!2sza" 
              width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%) grayscale(10%)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[1.5rem] opacity-60 group-hover:opacity-90 transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] mix-blend-screen"
            ></iframe>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] bg-blue-500/5 rounded-full border border-blue-500/20 animate-[pulse_3s_ease-in-out_infinite] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(rgba(0,163,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center relative z-10 animate-ping absolute"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_30px_#3b82f6] flex items-center justify-center relative z-10 border-2 border-white"></div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={400} direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 px-6 gap-4 bg-white/5 py-4 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 font-mono text-xs uppercase tracking-widest text-center md:text-left flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Operational Vector: <span className="text-white font-bold">All of Cape Town</span>
            </p>
            <p className="text-gray-300 font-mono text-xs uppercase tracking-widest text-center md:text-right flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Extended Range: <span className="text-white font-bold">Global Remote Hub</span>
            </p>
          </div>
        </RevealWrapper>
      </section>
    </main>
  );
}