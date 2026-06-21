import Link from "next/link";
import { Terminal, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 bg-[#030508] selection:bg-[#00E5FF]/30 selection:text-white">
      
      {/* --------------------------------------------------------- */}
      {/* STATIC AMBIENT BACKGROUND (Zero Performance Cost) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]">
          {/* Static Architectural Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* HACKER TERMINAL 404 CARD */}
      {/* --------------------------------------------------------- */}
      <section className="w-full max-w-2xl mx-auto bg-[#0A0D14]/90 rounded-[2rem] p-8 md:p-12 flex flex-col border border-white/5 relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        
        {/* Dynamic Status Indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 mb-8 w-max">
          <ShieldAlert className="w-4 h-4 text-red-500" />
          <span className="text-[10px] sm:text-xs font-mono text-red-400 tracking-[0.2em] uppercase font-bold">Fatal Vector: 404</span>
        </div>
        
        {/* The Terminal Window */}
        <div className="w-full bg-[#030508] rounded-xl border border-white/10 p-6 font-mono text-left relative overflow-hidden mb-10 shadow-inner">
           {/* Terminal Window Controls */}
           <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
             <div className="w-3 h-3 rounded-full bg-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
             <div className="w-3 h-3 rounded-full bg-green-500/50" />
           </div>
           
           {/* Terminal Output */}
           <div className="flex flex-col gap-3">
             <p className="text-gray-400 text-xs sm:text-sm break-words">
               <span className="text-[#00E5FF] font-bold">root@takumitech</span>:<span className="text-blue-400">~</span>$ ./locate_target_path
             </p>
             <p className="text-red-500 text-xs sm:text-sm font-bold">
               &gt;_ ERROR 404: DIRECTORY NOT FOUND.
             </p>
             <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
               &gt;_ The requested URL path does not exist in the current server cluster. It may have been moved, deleted, or manually mistyped.
             </p>
             
             {/* Lightweight CSS pulse for the cursor */}
             <p className="text-[#00E5FF] text-xs sm:text-sm mt-4 flex items-center">
               &gt;_ Awaiting manual reroute command
               <span className="inline-block w-2.5 h-4 bg-[#00E5FF] ml-2 animate-pulse shadow-[0_0_8px_#00E5FF]" />
             </p>
           </div>
        </div>

        {/* Action Vector */}
        <div className="w-full flex justify-center sm:justify-start">
          <Link 
            href="/" 
            className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#00E5FF] text-[#030508] font-bold uppercase tracking-wider text-sm rounded-2xl hover:bg-[#00cce6] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_10px_30px_rgba(0,229,255,0.3)]"
          >
            <Terminal className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            Reroute to Main Terminal
          </Link>
        </div>

      </section>
    </main>
  );
}