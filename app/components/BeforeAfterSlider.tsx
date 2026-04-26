"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop", // Fallback messy server room
  afterImage = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop", // Fallback clean server room
  beforeLabel = "Standard Deployment",
  afterLabel = "Takumi Architecture",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Constrain the X coordinate strictly within the bounds of the container
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    // Bind to window to prevent the slider from "dropping" if the mouse moves too fast
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      // Passive: false is critical here to prevent scrolling while sliding on mobile
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden select-none group border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-ew-resize bg-[#050505]"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* --------------------------------------------------------- */}
      {/* AFTER IMAGE (Background Layer) */}
      {/* --------------------------------------------------------- */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />
      
      {/* After Label (Takumi Side) */}
      <div className="absolute bottom-6 right-6 z-10 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-md transition-opacity duration-300" style={{ opacity: sliderPosition < 80 ? 1 : 0 }}>
        <span className="text-xs font-mono text-blue-300 uppercase tracking-widest">{afterLabel}</span>
      </div>

      {/* --------------------------------------------------------- */}
      {/* BEFORE IMAGE (Foreground Clipped Layer) */}
      {/* --------------------------------------------------------- */}
      <div 
        className="absolute inset-0 bg-cover bg-center border-r border-blue-500/50 shadow-[5px_0_20px_rgba(0,0,0,0.8)] will-change-[clip-path]"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        {/* Desaturation filter on the "Before" side to emphasize the Takumi upgrade */}
        <div className="absolute inset-0 bg-black/40 backdrop-grayscale-[0.5]" />
      </div>

      {/* Before Label (Standard Side) */}
      <div className="absolute bottom-6 left-6 z-10 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 backdrop-blur-md transition-opacity duration-300" style={{ opacity: sliderPosition > 20 ? 1 : 0 }}>
        <span className="text-xs font-mono text-red-300 uppercase tracking-widest">{beforeLabel}</span>
      </div>

      {/* --------------------------------------------------------- */}
      {/* INTERACTIVE SLIDER HANDLE */}
      {/* --------------------------------------------------------- */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent z-20 flex items-center justify-center shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={`w-12 h-12 rounded-2xl bg-[#080808] border border-blue-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] backdrop-blur-xl transition-all duration-200 ${isDragging ? 'scale-90 shadow-[0_0_40px_rgba(37,99,235,0.6)]' : 'scale-100 group-hover:scale-110 group-hover:border-blue-400'}`}>
          <ChevronsLeftRight className="w-5 h-5 text-blue-400" />
        </div>
      </div>
    </div>
  );
}