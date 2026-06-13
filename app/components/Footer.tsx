"use client";

import Link from "next/link";
import { Terminal, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#030508] pt-16 pb-8 overflow-hidden z-20">
      
      {/* Subtle Background Glow (Hardware Accelerated) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00E5FF]/5 to-transparent blur-3xl pointer-events-none transform-gpu opacity-50" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3 w-max">
              <div className="w-10 h-10 rounded-xl bg-[#080C16] border border-white/5 flex items-center justify-center transition-all duration-300 transform-gpu group-hover:scale-105">
                <Terminal className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#00E5FF]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-1.5">
                Takumi Tech <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mb-1" />
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-xs">
              Premium computer repair, expert hardware upgrades, and ultra-fast website design. Built for performance, built to last.
            </p>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-black uppercase tracking-wider text-xs flex items-center gap-2">
              <div className="w-1 h-3 bg-[#00E5FF] rounded-full" /> Navigation
            </h3>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Support Hub", path: "/schedule" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className="text-gray-400 text-sm font-medium hover:text-[#00E5FF] transition-colors w-max flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 transform-gpu" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* LEGAL COLUMN */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h3 className="text-white font-black uppercase tracking-wider text-xs flex items-center gap-2">
              <div className="w-1 h-3 bg-[#2563EB] rounded-full" /> Legal
            </h3>
            <nav className="flex flex-col gap-4">
              <Link 
                href="/terms"
                className="text-gray-400 text-sm font-medium hover:text-white transition-colors w-max flex items-center gap-2 group"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#00E5FF] transition-colors" />
                Terms & Privacy
              </Link>
            </nav>
          </div>

          {/* GENERAL CONTACT COLUMN */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-black uppercase tracking-wider text-xs flex items-center gap-2">
              <div className="w-1 h-3 bg-[#8B5CF6] rounded-full" /> Email Us
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Have a general question or want to discuss a custom project? Send us an email anytime.
            </p>
            
            <a 
              href="mailto:info@takumitech.co.za"
              className="group relative flex items-center gap-4 p-1 rounded-2xl bg-[#05080F] border border-white/5 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden w-full transform-gpu hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-[#080C16] flex items-center justify-center border border-white/5 transition-colors duration-300 z-10 shrink-0 group-hover:border-[#00E5FF]/30">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-[#00E5FF] transition-colors duration-300" />
              </div>
              <div className="flex flex-col z-10 overflow-hidden pr-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest transition-colors duration-300 group-hover:text-[#00E5FF]">General Inquiries</span>
                <span className="text-sm font-bold text-white truncate">info@takumitech.co.za</span>
              </div>
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Takumi Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
            </span>
            Systems Online
          </div>
        </div>
      </div>
    </footer>
  );
}