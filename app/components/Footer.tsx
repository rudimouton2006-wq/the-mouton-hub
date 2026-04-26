import Link from "next/link";
import { Terminal, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-[50] bg-[#050505] border-t border-white/5 pt-16 pb-8 overflow-hidden shrink-0">
      {/* Deep Space Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-blue-600/5 rounded-[100%] blur-[120px] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Status */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-500">
                <Terminal className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white group-hover:text-blue-400 transition-colors">
                The Mouton Hub
              </span>
            </Link>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Enterprise-grade IT infrastructure, advanced network architecture, and elite hardware procurement protocols.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Global Systems Secure</span>
            </div>
          </div>

          {/* Column 2: Systems Directory */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Systems Directory</h3>
            <nav className="flex flex-col gap-4">
              {["Dashboard", "Services", "Hardware", "Schedule", "Engineer"].map((item) => {
                // Map the display name to the correct route
                const href = item === "Dashboard" ? "/" : item === "Hardware" ? "/shop" : `/${item.toLowerCase()}`;
                return (
                  <Link 
                    key={item} 
                    href={href} 
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium w-fit flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Column 3: Operational Base */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Operational Base</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 text-sm text-gray-400 font-medium">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="leading-relaxed">Oakdale, Bellville<br />Cape Town, ZA</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <span>08:00 - 18:00 (SAST)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Escalation */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Escalation</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              For immediate hardware diagnostics or network sourcing requests, initialize a ticket through the secure portal.
            </p>
            <Link 
              href="/contact" 
              className="px-6 py-4 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 hover:border-blue-500/50 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all text-white hover:text-blue-400 group shadow-inner"
            >
              <MessageSquare className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
              Log Support Ticket
            </Link>
          </div>

        </div>

        {/* Deep Copyright & Legal Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest text-center md:text-left">
            &copy; {currentYear} The Mouton Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-white/10 hidden md:block" aria-hidden="true" />
            <p className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
              Lead Engineer: <span className="text-blue-400 font-bold">Rudi Mouton</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}