"use client";
import { useState, useEffect } from "react";
import { MessageSquare, Zap } from "lucide-react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // The direct line to Takumi Tech Lead Engineer
  // Replace with actual business number (include country code, e.g., 27 for ZA)
  const phoneNumber = "27123456789"; 
  const defaultMessage = encodeURIComponent("Initializing Takumi Tech Comms... I have an inquiry regarding your system architecture / sourcing protocols.");
  const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  useEffect(() => {
    // Scroll-aware visibility: Only show when the user scrolls past the main hero
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Passive listener for high-performance scrolling
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[90] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 border border-emerald-400/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:bg-emerald-500 transition-all hover:scale-110"
        aria-label="Initialize Secure WhatsApp Comm Link"
      >
        {/* Pulse Effect Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        
        {/* Iconography */}
        <MessageSquare className="w-6 h-6 text-white relative z-10" />

        {/* Hover Tooltip Label */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#111] border border-emerald-500/30 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-2">
          <Zap className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-widest">Priority Comm Link</span>
        </div>
      </a>
    </div>
  );
}