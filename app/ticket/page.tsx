"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Terminal, ShieldCheck, Cpu, Network, Wrench, Globe, 
  Send, AlertTriangle, CheckCircle2, Lock 
} from "lucide-react";

// ---------------------------------------------------------
// SERVICE CATEGORY MATRIX
// ---------------------------------------------------------
const serviceCategories = [
  { id: "tech-support", name: "Tech Support", icon: <Terminal className="w-5 h-5" />, color: "cyan" },
  { id: "network", name: "Network Support", icon: <Network className="w-5 h-5" />, color: "blue" },
  { id: "web-dev", name: "Web Dev & Domains", icon: <Globe className="w-5 h-5" />, color: "purple" },
  { id: "sourcing", name: "Hardware Sourcing", icon: <Cpu className="w-5 h-5" />, color: "emerald" },
  { id: "device-opt", name: "Device Optimization", icon: <ShieldCheck className="w-5 h-5" />, color: "cyan" },
  { id: "repairs", name: "Hardware Repairs", icon: <Wrench className="w-5 h-5" />, color: "red" },
];

// ---------------------------------------------------------
// THE DYNAMIC FORM ENGINE
// ---------------------------------------------------------
function TicketFormEngine() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize state with URL parameters if present
  const initialCategory = searchParams.get("category") || "tech-support";
  
  const [formData, setFormData] = useState({
    designation: "",
    email: "",
    category: initialCategory,
    urgency: "standard",
    dynamicField: "",
    payload: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeColor, setActiveColor] = useState("cyan");

  // Sync the UI ambient glow color with the active category
  useEffect(() => {
    const activeCat = serviceCategories.find(c => c.id === formData.category);
    if (activeCat) setActiveColor(activeCat.color);
  }, [formData.category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "diagnostic_ticket",
          designation: formData.designation,
          returnVector: formData.email,
          module: formData.category,
          urgency: formData.urgency,
          dynamicData: formData.dynamicField,
          payload: formData.payload,
          // Routing target for the backend API
          targetInbox: "rudi@takumitech.co.za" 
        }),
      });

      if (response.ok) {
        // Redirect to the Secure Acknowledgment Node (Success Page)
        router.push("/success");
      } else {
        throw new Error("Transmission failed");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Encryption failure: Unable to transmit payload. Please use direct comms.");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto z-10 relative">
      
      {/* Dynamic Background Ambient Glow based on active category */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0 transition-colors duration-1000 bg-${activeColor}-900/10`} />

      <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden flex flex-col lg:flex-row gap-12 z-10">
        
        {/* --------------------------------------------------------- */}
        {/* LEFT COLUMN: ACTIVE CATEGORY SELECTION */}
        {/* --------------------------------------------------------- */}
        <div className="w-full lg:w-1/3 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12">
          <div className="mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Diagnostic <span className={`text-${activeColor}-400 transition-colors duration-500`}>Routing</span></h2>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">
              Select the operational module that requires engineering attention. The transmission matrix will adapt accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {serviceCategories.map((cat) => {
              const isActive = formData.category === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: cat.id, dynamicField: "" })}
                  className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? `bg-${cat.color}-500/20 border-${cat.color}-500 shadow-[inset_0_0_15px_rgba(var(--color-${cat.color}-500),0.2)]` 
                      : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${isActive ? `bg-${cat.color}-500/20 text-${cat.color}-400` : 'bg-black/50 text-gray-500 group-hover:text-white'}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider text-left transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {cat.name}
                  </span>
                  {isActive && <CheckCircle2 className={`w-4 h-4 ml-auto text-${cat.color}-400`} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        {/* RIGHT COLUMN: THE DYNAMIC PAYLOAD FORM */}
        {/* --------------------------------------------------------- */}
        <form onSubmit={handleSubmit} className="w-full lg:w-2/3 flex flex-col gap-6">
          
          {/* Identity Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Entity / Designation</label>
              <input 
                type="text" 
                required
                value={formData.designation}
                onChange={(e) => setFormData({...formData, designation: e.target.value})}
                className={`w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-${activeColor}-500/50 focus:bg-white/5 transition-all`}
                placeholder="ENTER NAME / ORGANIZATION"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Return Vector (Email)</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-${activeColor}-500/50 focus:bg-white/5 transition-all`}
                placeholder="SYSADMIN@DOMAIN.COM"
              />
            </div>
          </div>

          {/* Conditional Morphing Field based on Category */}
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex flex-col gap-2">
            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              {formData.category === "web-dev" && "Current Domain / Desired URL"}
              {formData.category === "repairs" && "Hardware Manufacturer & Serial Number"}
              {formData.category === "device-opt" && "Operating System & Device Type"}
              {formData.category === "network" && "Network Scale (Home vs. Enterprise)"}
              {(formData.category === "tech-support" || formData.category === "sourcing") && "Specific Hardware / Software Context"}
            </label>
            <input 
              type="text" 
              required
              value={formData.dynamicField}
              onChange={(e) => setFormData({...formData, dynamicField: e.target.value})}
              className={`w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-${activeColor}-500/50 focus:bg-white/5 transition-all`}
              placeholder="Provide specific technical parameters..."
            />
          </div>

          {/* Urgency Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Incident Urgency</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "low", label: "Low", color: "gray" },
                { id: "standard", label: "Standard", color: "blue" },
                { id: "critical", label: "Critical", color: "red" }
              ].map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setFormData({...formData, urgency: level.id})}
                  className={`py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    formData.urgency === level.id 
                      ? level.id === 'critical' ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-white text-black border-white'
                      : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/30'
                  }`}
                >
                  {level.id === "critical" && formData.urgency === level.id && <AlertTriangle className="w-3 h-3" />}
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Payload */}
          <div className="flex flex-col gap-2 flex-grow">
            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Encrypted Payload (Description)</label>
            <textarea 
              required
              rows={5}
              value={formData.payload}
              onChange={(e) => setFormData({...formData, payload: e.target.value})}
              className={`w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-sm font-medium text-white focus:outline-none focus:border-${activeColor}-500/50 focus:bg-white/5 transition-all custom-scrollbar resize-none`}
              placeholder="Detail your system anomalies or architectural requirements here..."
            />
          </div>

          {/* Footer Action Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 mt-2">
            <div className="flex flex-col">
               <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                 <Lock className="w-3 h-3 text-emerald-400" /> End-to-End Encryption Active
               </p>
               <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mt-1">
                 Routing to: rudi@takumitech.co.za
               </p>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`group relative flex items-center justify-center gap-3 px-10 py-5 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_30px_rgba(var(--color-${activeColor}-500),0.3)] hover:shadow-[0_0_50px_rgba(var(--color-${activeColor}-500),0.5)] transition-all ring-1 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed bg-${activeColor}-600 hover:bg-${activeColor}-500 ring-${activeColor}-400/50`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 animate-spin" /> Transmitting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Transmit Payload <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

// ---------------------------------------------------------
// MAIN EXPORT WITH SUSPENSE BOUNDARY
// ---------------------------------------------------------
export const metadata = {
  title: "Log a Ticket | Takumi Tech",
  description: "Initialize a diagnostic ticket. Form adapts based on requested service module.",

export default function TicketPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-12 md:pt-20 pb-24 relative">
      
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-16 z-10">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white mr-4" />
          <span className="text-xs font-mono text-white tracking-[0.3em] uppercase">Secure Terminal</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Initialize <span className="text-gradient">Diagnostic</span>
        </h1>
      </section>

      {/* The Suspense boundary is strictly required for App Router dynamic query parameters */}
      <Suspense fallback={
        <div className="w-full max-w-5xl mx-auto h-[600px] glass-card rounded-[2.5rem] flex items-center justify-center border border-white/10">
          <div className="flex flex-col items-center gap-4">
             <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-cyan-400 animate-spin" />
             <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest animate-pulse">Establishing Secure Connection...</span>
          </div>
        </div>
      }>
        <TicketFormEngine />
      </Suspense>

    </div>
  );
}