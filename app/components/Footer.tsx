"use client";

import Link from "next/link";
import { Terminal, Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative z-50 bg-[#030508] border-t border-white/[0.05] pt-20 pb-10 overflow-hidden mt-auto">
      
      {/* --------------------------------------------------------- */}
      {/* AMBIENT GLOW & GRID */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black_0%,transparent_100%)]" />
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#00E5FF]/10 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-max group">
              <div className="w-10 h-10 bg-white/5 border border-white/10 text-white flex items-center justify-center rounded-xl transition-all duration-500 group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/30 group-hover:scale-105 shadow-inner">
                <Terminal className="w-5 h-5 transition-colors duration-500 group-hover:text-[#00E5FF]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase leading-none text-white">Takumi</span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00E5FF] leading-none mt-1.5 font-bold">Tech</span>
              </div>
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed font-medium max-w-xs">
              Premium computer repair, expert hardware upgrades, and fast website design built for your business.
            </p>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2">Our Services</h4>
            <Link href="/services" className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Website Design</Link>
            <Link href="/services" className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Computer Repairs</Link>
            <Link href="/services" className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Network Security</Link>
            <Link href="/services" className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Hardware Upgrades</Link>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2">Support & Help</h4>
            <Link href="/ticket" className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Log a Ticket</Link>
            <Link href="/schedule" className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Support Hub</Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Terms of Service</Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-300 font-medium w-max hover:translate-x-1 inline-block">Privacy Policy</Link>
          </div>

          {/* Newsletter Input Matrix */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-xs mb-2">Newsletter</h4>
            <p className="text-xs text-[#94A3B8] font-medium leading-relaxed mb-2">Subscribe to receive tech tips, security alerts, and updates.</p>
            <form className="flex w-full group relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-[#0A0A0A]/50 border border-white/10 rounded-l-xl px-4 py-3 text-sm font-medium text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E5FF]/50 focus:bg-white/5 transition-all shadow-inner"
                required
              />
              <button 
                type="submit" 
                className="bg-[#00E5FF] border border-[#00E5FF] rounded-r-xl px-4 py-3 hover:bg-[#00B8CC] transition-colors flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5 text-[#030508]" />
              </button>
            </form>
          </div>

        </div>

        {/* Global Legal & Social Base Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Takumi Tech. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:sysadmin@takumitech.co.za" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}