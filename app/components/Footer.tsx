"use client";

import Link from "next/link";
import { Terminal, Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative z-50 bg-[#050505] border-t border-white/10 pt-16 pb-8 overflow-hidden mt-auto">
      {/* Subtle bottom-edge ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-max group">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm transition-transform duration-500 group-hover:rotate-90">
                <Terminal className="w-4 h-4 transition-transform duration-500 group-hover:-rotate-90" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter uppercase leading-none text-white">Takumi</span>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-400 leading-none mt-1">Systems</span>
              </div>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed font-mono uppercase tracking-wider max-w-xs">
              Enterprise-grade IT infrastructure and zero-trust network architecture deployed with uncompromising precision.
            </p>
          </div>

          {/* Architecture Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2">Architecture</h4>
            <Link href="/services" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-medium w-max">Network Defense</Link>
            <Link href="/services" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-medium w-max">Infrastructure Setup</Link>
            <Link href="/shop" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-medium w-max">Hardware Sourcing</Link>
            <Link href="/engineer" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-medium w-max">System Diagnostics</Link>
          </div>

          {/* Support Node Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2">Support Nodes</h4>
            <Link href="/contact" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors font-medium w-max">Establish Comms</Link>
            <Link href="/schedule" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors font-medium w-max">Schedule Briefing</Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors font-medium w-max">Operational Protocols</Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors font-medium w-max">Privacy Matrix</Link>
          </div>

          {/* System Alerts Input Matrix */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2">System Alerts</h4>
            <p className="text-xs text-gray-500 font-mono tracking-wider mb-2">Subscribe for critical architecture updates and hardware availability.</p>
            <form className="flex w-full group relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="ENTER COMM LINK..." 
                className="w-full bg-white/5 border border-white/10 rounded-l-md px-4 py-3 text-xs font-mono text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                required
              />
              <button 
                type="submit" 
                className="bg-white/10 border border-l-0 border-white/10 rounded-r-md px-4 py-3 hover:bg-cyan-500 hover:border-cyan-500 transition-colors flex items-center justify-center group-focus-within:border-cyan-500/50"
                aria-label="Submit Communication Link"
              >
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </form>
          </div>

        </div>

        {/* Global Legal & Social Base Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Takumi Tech Systems. All rights secured.
          </p>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:sysadmin@takumitech.co.za" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}