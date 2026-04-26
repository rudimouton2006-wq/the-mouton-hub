"use client";
import { useEffect, useState } from "react";

export default function VisualEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let ticking = false;

    const updateMousePosition = (ev: MouseEvent) => {
      if (!ticking) {
        animationFrameId = requestAnimationFrame(() => {
          setMousePosition({ x: ev.clientX, y: ev.clientY });
          if (!isVisible) setIsVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <>
      {/* --------------------------------------------------------- */}
      {/* 1. MATHEMATICAL SVG NOISE / GRAIN */}
      {/* --------------------------------------------------------- */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="takumi-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#takumi-noise)" />
        </svg>
      </div>

      {/* --------------------------------------------------------- */}
      {/* 2. DYNAMIC CURSOR AMBIENCE */}
      {/* --------------------------------------------------------- */}
      {/* Desktop only. Hidden on touch devices to save battery and prevent visual bugs */}
      <div className="hidden lg:block fixed inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className={`absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] transition-opacity duration-700 ease-out will-change-[transform,opacity] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translate3d(${mousePosition.x - 300}px, ${mousePosition.y - 300}px, 0)`,
          }}
        />
        {/* Inner tight glow for cursor precision */}
        <div
          className={`absolute w-[150px] h-[150px] bg-cyan-400/10 rounded-full blur-[60px] transition-opacity duration-500 ease-out will-change-[transform,opacity] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translate3d(${mousePosition.x - 75}px, ${mousePosition.y - 75}px, 0)`,
          }}
        />
      </div>

      {/* --------------------------------------------------------- */}
      {/* 3. GLOBAL VIGNETTE FRAME */}
      {/* --------------------------------------------------------- */}
      <div 
        className="fixed inset-0 z-[2] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" 
        aria-hidden="true" 
      />
    </>
  );
}