"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

export default function ScrollTools() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Calculate visibility threshold
          if (window.scrollY > 400) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          // Calculate precise scroll completion percentage
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          
          setScrollProgress(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle Mathematics
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  // Calculate offset. When progress is 0, offset = circumference. When 100, offset = 0.
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[80] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <MagneticWrapper pullStrength={0.15}>
        <button
          onClick={scrollToTop}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:bg-[#111]"
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
              stroke="rgba(37,99,235,0.8)" // Blue-600 with opacity
              strokeWidth="2"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-150 ease-out"
              strokeLinecap="round"
            />
          </svg>

          <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-1 transition-all duration-300 relative z-10" />
        </button>
      </MagneticWrapper>
    </div>
  );
}