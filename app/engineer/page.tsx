import Link from "next/link";
import { 
  Terminal, GraduationCap, MapPin, Briefcase, 
  Award, Cpu, Network, ArrowRight, ShieldCheck 
} from "lucide-react";

export const metadata = {
  title: "Lead Architect | Takumi Tech",
  description: "Review the technical credentials, academic background, and professional trajectory of the Takumi Tech Lead Engineer.",
};

export default function EngineerPage() {
  return (
    <div className="w-full flex flex-col items-center justify-start pb-32 pt-12 md:pt-20 z-10">
      
      {/* --------------------------------------------------------- */}
      {/* DOSSIER HERO TERMINAL */}
      {/* --------------------------------------------------------- */}
      <section className="relative w-full max-w-4xl mx-auto text-center px-4 mb-20">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00E5FF] mr-4" />
          <span className="text-xs font-mono text-[#00E5FF] tracking-[0.3em] uppercase">Personnel File</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00E5FF] ml-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight text-white">
          Lead <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2563EB]">Architect</span>
        </h1>
        
        <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
          Hardware is useless without the elite minds required to configure it. Review the qualifications, academic rigor, and professional trajectory driving the Takumi Tech infrastructure.
        </p>
      </section>

      {/* --------------------------------------------------------- */}
      {/* CORE IDENTITY & CLEARANCE MATRIX */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden bg-[#0A0A0A] flex flex-col md:flex-row gap-10 items-start">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Avatar / Designation Block */}
          <div className="w-full md:w-1/3 flex flex-col gap-6 relative z-10">
            <div className="w-32 h-32 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,229,255,0.2)]">
              <Terminal className="w-16 h-16 text-[#00E5FF]" />
            </div>
            
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-1">Rudi Mouton</h2>
              <h3 className="text-sm font-mono text-[#00E5FF] uppercase tracking-widest mb-4">Principal IT Engineer</h3>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg w-max">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="text-[10px] font-mono text-[#10B981] uppercase tracking-widest">Clearance: Absolute</span>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="w-full md:w-2/3 relative z-10 flex flex-col justify-center h-full pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-10">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Operational Mandate</h4>
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-medium mb-6">
              "Technology should operate silently and flawlessly. My professional objective is to architect resilient digital environments—from granular hardware optimizations to scalable enterprise networks—ensuring our clients operate with zero latency and absolute security."
            </p>
            <div className="flex flex-wrap gap-3">
              {['Hardware Diagnostics', 'Network Topology', 'Web Architecture', 'System Optimization'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-gray-300 uppercase tracking-wider">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* TECHNICAL DOSSIER GRID */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Academic Blueprint */}
          <div className="glass-card rounded-[2rem] p-8 border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#2563EB]/20 transition-colors duration-500" />
            
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center mb-6 relative z-10">
              <GraduationCap className="w-6 h-6 text-[#2563EB]" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-white mb-6 relative z-10">Academic Blueprint</h3>
            
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col border-l-2 border-[#2563EB]/30 pl-4">
                <span className="text-[10px] font-mono text-[#2563EB] uppercase tracking-widest mb-1">Active Pursuit</span>
                <strong className="text-sm text-white font-bold tracking-wide">Diploma in Engineering Technology</strong>
                <span className="text-xs text-[#A1A1AA] font-medium mt-1">Computer Engineering via CPUT</span>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">Focusing on advanced engineering mathematics, physical computing, and digital architecture.</p>
              </div>
            </div>
          </div>

          {/* Operational Experience */}
          <div className="glass-card rounded-[2rem] p-8 border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#A855F7]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#A855F7]/20 transition-colors duration-500" />
            
            <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/30 flex items-center justify-center mb-6 relative z-10">
              <Briefcase className="w-6 h-6 text-[#A855F7]" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-white mb-6 relative z-10">Industry Operations</h3>
            
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col border-l-2 border-[#A855F7]/30 pl-4">
                <span className="text-[10px] font-mono text-[#A855F7] uppercase tracking-widest mb-1">IT Professional</span>
                <strong className="text-sm text-white font-bold tracking-wide">Flawless IT</strong>
                <span className="text-xs text-[#A1A1AA] font-medium mt-1">Enterprise infrastructure maintenance and technical support.</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#A855F7]/30 pl-4">
                <span className="text-[10px] font-mono text-[#A855F7] uppercase tracking-widest mb-1">Technical Internship</span>
                <strong className="text-sm text-white font-bold tracking-wide">Optimi College / College SA</strong>
                <span className="text-xs text-[#A1A1AA] font-medium mt-1">Practical application of IT protocols and systems management.</span>
              </div>
            </div>
          </div>

          {/* Base of Operations */}
          <div className="glass-card rounded-[2rem] p-8 border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors group relative overflow-hidden md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/5 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
              <div className="w-14 h-14 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#10B981]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-black uppercase tracking-wide text-white mb-1">Central Hub</h3>
                <span className="text-sm text-[#A1A1AA] font-medium">Oakdale, Bellville | Cape Town, ZA</span>
              </div>
            </div>

            <Link 
              href="/schedule" 
              className="relative z-10 group/btn flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all hover:bg-white/10 shrink-0"
            >
              Deploy Engineer <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}