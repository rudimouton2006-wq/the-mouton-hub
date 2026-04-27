"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTools() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestRef.current = requestAnimationFrame(() => {
          // Calculate visibility threshold (appears after 400px)
          if (window.scrollY > 400) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          // Calculate precise scroll completion percentage
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          
          // Prevent division by zero on very short pages
          if (height > 0) {
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check in case the user reloads halfway down the page
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle Mathematics for the Progress Ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  // Offset calculation: 0 progress = full circumference (hidden), 100 progress = 0 offset (full circle)
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[80] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all hover:bg-[#111] hover:border-cyan-500/50"
        aria-label="Return to System Header"
      >
        {/* Dynamic Scroll Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          {/* Background Track */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Active Progress Vector */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="rgba(34,211,238,0.8)" // Takumi Cyan
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150 ease-out"
            strokeLinecap="round"
          />
        </svg>

        {/* Core Icon with hover physics */}
        <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:-translate-y-1 transition-all duration-300 relative z-10" />
      </button>
    </div>
  );
}