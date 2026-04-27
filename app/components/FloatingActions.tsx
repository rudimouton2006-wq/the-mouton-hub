"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Terminal } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Hide the floating ticket button if the user is already on the ticket page
  const isTicketPage = pathname === "/ticket";

  // The direct line to Takumi Tech
  const phoneNumber = "27123456789"; // Update with your actual WhatsApp number
  const waMessage = encodeURIComponent("Initializing Takumi Tech Comms... I require IT assistance.");
  const waLink = `https://wa.me/${phoneNumber}?text=${waMessage}`;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show after scrolling 300px down
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[90] flex flex-col gap-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      {/* --------------------------------------------------------- */}
      {/* 1. TICKETING NODE (Hidden on the Ticket Page) */}
      {/* --------------------------------------------------------- */}
      {!isTicketPage && (
        <Link
          href="/ticket"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#050505] border border-[#00E5FF]/50 shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:bg-[#00E5FF]/10 transition-all hover:scale-110"
          aria-label="Log a Diagnostic Ticket"
        >
          <Terminal className="w-6 h-6 text-[#00E5FF] relative z-10" />
          
          {/* Desktop Hover Tooltip */}
          <div className="hidden lg:flex absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#050505]/90 border border-[#00E5FF]/30 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest">Log a Ticket</span>
          </div>
        </Link>
      )}

      {/* --------------------------------------------------------- */}
      {/* 2. WHATSAPP NODE */}
      {/* --------------------------------------------------------- */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#10B981] border border-[#10B981]/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:bg-[#10B981]/90 transition-all hover:scale-110"
        aria-label="Initialize WhatsApp Comm Link"
      >
        {/* Hardware-Accelerated Pulse Effect Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#10B981] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        
        <MessageSquare className="w-6 h-6 text-white relative z-10" />

        {/* Desktop Hover Tooltip */}
        <div className="hidden lg:flex absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#050505]/90 border border-[#10B981]/30 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <span className="text-[10px] font-mono text-[#10B981] uppercase tracking-widest">Priority Comms</span>
        </div>
      </a>
    </div>
  );
}