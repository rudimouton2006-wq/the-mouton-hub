"use client";

import Link from "next/link";
import { Terminal, Mail, ArrowRight, ShieldCheck, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#030508] pt-16 pb-8 overflow-hidden z-20">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00E5FF]/5 to-transparent blur-3xl pointer-events-none transform-gpu opacity-40" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. BRAND COLUMN */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3 w-max">
              <div className="w-12 h-12 rounded-xl bg-[#0A0D14] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <Terminal className="w-6 h-6 text-gray-300 group-hover:text-[#00E5FF] transition-colors duration-300" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Takumi Tech <div className="w-2 h-2 rounded-full bg-[#00E5FF] mb-1" />
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Premium IT infrastructure, hardware optimization, and professional website design. Engineered for absolute performance.
            </p>
          </div>

          {/* 2. NAVIGATION COLUMN */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              Navigation
            </h3>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "The Engineer", path: "/engineer" },
                { name: "Support Hub", path: "/ticket" },
                { name: "Log a Ticket", path: "/ticket" },
              ].map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path}
                  className="text-gray-400 text-sm md:text-base font-medium hover:text-white transition-colors w-max flex items-center gap-3 group"
                >
                  <ArrowRight className="w-4 h-4 text-[#00E5FF] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. LEGAL COLUMN */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              Legal
            </h3>
            <nav className="flex flex-col gap-4">
              <Link 
                href="/terms"
                className="text-gray-400 text-sm md:text-base font-medium hover:text-white transition-colors w-max flex items-center gap-3 group"
              >
                <ShieldCheck className="w-4 h-4 text-gray-500 group-hover:text-[#2563EB] transition-colors" />
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* 4. CONTACT US COLUMN */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-5">
              <a 
                href="https://wa.me/27818281861" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm md:text-base text-gray-400 hover:text-white transition-colors w-max"
              >
                <MessageCircle className="w-5 h-5 text-gray-500 group-hover:text-[#25D366] transition-colors" />
                <span className="font-bold">WhatsApp Rudi</span>
              </a>
              
              <a 
                href="https://wa.me/27614955695" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm md:text-base text-gray-400 hover:text-white transition-colors w-max"
              >
                <MessageCircle className="w-5 h-5 text-gray-500 group-hover:text-[#25D366] transition-colors" />
                <span className="font-bold">WhatsApp Alex</span>
              </a>

              <a 
                href="mailto:info@takumitech.co.za"
                className="group flex items-center gap-3 text-sm md:text-base text-gray-400 hover:text-white transition-colors w-max mt-1"
              >
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-[#00E5FF] transition-colors" />
                <span className="font-medium">info@takumitech.co.za</span>
              </a>
            </div>
          </div>

          {/* 5. SOCIAL MEDIA COLUMN */}
          <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              Social Media
            </h3>
            <div className="flex flex-col gap-5">
              {/* INSTAGRAM LINK */}
              <a 
                href="https://www.instagram.com/takumitech.co.za/"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm md:text-base text-gray-400 hover:text-white transition-colors w-max"
              >
                <Instagram className="w-5 h-5 text-gray-500 group-hover:text-[#00E5FF] transition-colors" />
                <span className="font-medium">Instagram</span>
              </a>

              {/* LINKEDIN LINK */}
              <a 
                href="https://www.linkedin.com/company/takumi-tech/?viewAsMember=true"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm md:text-base text-gray-400 hover:text-white transition-colors w-max"
              >
                <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-[#0A66C2] transition-colors" />
                <span className="font-medium">LinkedIn</span>
              </a>

              {/* FACEBOOK LINK */}
              <a 
                href="https://www.facebook.com/profile.php?id=61590717218763"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm md:text-base text-gray-400 hover:text-white transition-colors w-max"
              >
                <Facebook className="w-5 h-5 text-gray-500 group-hover:text-[#1877F2] transition-colors" />
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider text-center md:text-left">
            © {currentYear} Takumi Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider bg-[#0A0D14] px-5 py-3 rounded-2xl border border-white/10 shadow-sm">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00E5FF]"></span>
            </span>
            Systems Online
          </div>
        </div>
      </div>
    </footer>
  );
}