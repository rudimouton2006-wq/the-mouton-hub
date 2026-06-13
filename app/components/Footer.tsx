"use client";

import Link from "next/link";
import { Terminal, Mail, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#030508] pt-16 pb-8 overflow-hidden z-20">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00E5FF]/5 to-transparent blur-3xl pointer-events-none transform-gpu opacity-40" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. BRAND COLUMN */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3 w-max">
              <div className="w-10 h-10 rounded-xl bg-[#0A0D14] border border-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Terminal className="w-5 h-5 text-gray-300 group-hover:text-[#00E5FF] transition-colors duration-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Takumi Tech <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mb-1" />
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium IT infrastructure, hardware optimization, and web deployment. Engineered for absolute precision.
            </p>
          </div>

          {/* 2. NAVIGATION COLUMN */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              Platform
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services & Pricing", path: "/services" },
                { name: "The Core Team", path: "/engineer" },
                { name: "Log a Ticket", path: "/ticket" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className="text-gray-400 text-sm font-medium hover:text-white transition-colors w-max flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#00E5FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. LEGAL COLUMN */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              Legal
            </h3>
            <nav className="flex flex-col gap-3">
              <Link 
                href="/terms"
                className="text-gray-400 text-sm font-medium hover:text-white transition-colors w-max flex items-center gap-2 group"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#2563EB] transition-colors" />
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* 4. DIRECT CONTACT COLUMN (Re-engineered for uniform comms) */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              Direct Comms
            </h3>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/27818281861" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors w-max"
              >
                <MessageCircle className="w-4 h-4 text-gray-500 group-hover:text-[#00E5FF] transition-colors" />
                <span className="font-bold">Message Rudi <span className="text-[10px] font-normal uppercase tracking-widest opacity-50 ml-1">Tech</span></span>
              </a>
              
              <a 
                href="https://wa.me/27614955695" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors w-max"
              >
                <MessageCircle className="w-4 h-4 text-gray-500 group-hover:text-[#2563EB] transition-colors" />
                <span className="font-bold">Message Alex <span className="text-[10px] font-normal uppercase tracking-widest opacity-50 ml-1">Support</span></span>
              </a>

              <a 
                href="mailto:info@takumitech.co.za"
                className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors w-max mt-2"
              >
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                <span className="font-medium">info@takumitech.co.za</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Takumi Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-[#0A0D14] px-4 py-2 rounded-full border border-white/5">
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