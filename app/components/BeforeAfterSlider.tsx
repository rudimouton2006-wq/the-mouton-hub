"use client";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After" 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
    setHasInteracted(true);
  };

  return (
    <div 
      className={`relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden group border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none bg-black transition-transform duration-500 ease-out ${isDragging ? 'scale-[1.02] shadow-[0_30px_60px_rgba(0,163,255,0.25)] ring-1 ring-blue-500/50' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setIsDragging(false); }}
    >
      
      {/* PERFORMANCE FIX: decoding="async" and loading="lazy" prevents scroll stuttering */}
      <img 
        src={beforeImage} 
        alt={beforeLabel} 
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale-[40%] contrast-125 opacity-80" 
      />
      
      <div 
        className="absolute top-6 left-6 bg-red-950/80 backdrop-blur-xl border border-red-500/30 px-4 py-2.5 rounded-xl text-[10px] font-black text-red-200 uppercase tracking-widest z-10 transition-all duration-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        style={{ 
          opacity: sliderPosition < 15 ? 0 : 1, 
          transform: sliderPosition < 15 ? 'translateX(-15px)' : 'translateX(0)',
          willChange: 'opacity, transform' 
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
          {beforeLabel}
        </div>
      </div>

      {/* PERFORMANCE FIX: async decoding for the foreground image */}
      <img 
        src={afterImage} 
        alt={afterLabel} 
        draggable={false}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none drop-shadow-2xl"
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          willChange: 'clip-path'
        }}
      />

      <div 
        className="absolute top-6 right-6 bg-emerald-950/80 backdrop-blur-xl border border-emerald-500/30 px-4 py-2.5 rounded-xl text-[10px] font-black text-emerald-200 uppercase tracking-widest z-10 transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        style={{ 
          opacity: sliderPosition > 85 ? 0 : 1, 
          transform: sliderPosition > 85 ? 'translateX(15px)' : 'translateX(0)',
          willChange: 'opacity, transform'
        }}
      >
         <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          {afterLabel}
        </div>
      </div>

      <div 
        className={`absolute top-0 bottom-0 z-20 pointer-events-none transition-all duration-150 ease-out ${isDragging ? 'w-[3px] bg-blue-400 shadow-[0_0_20px_#60a5fa,0_0_40px_#3b82f6]' : 'w-[2px] bg-white shadow-[0_0_10px_#fff,0_0_20px_#3b82f6]'}`}
        style={{ 
          left: `${sliderPosition}%`, 
          transform: 'translateX(-50%)',
          willChange: 'left'
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          
          {!hasInteracted && (
            <div className="absolute w-20 h-20 bg-blue-500/30 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
          )}
          
          <div className={`w-12 h-12 bg-black/80 backdrop-blur-xl border-2 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isDragging ? 'scale-125 border-blue-400 shadow-[0_0_40px_rgba(0,163,255,0.8)]' : isHovering ? 'scale-110 border-white shadow-[0_0_30px_rgba(0,163,255,0.6)]' : 'scale-100 border-blue-500 shadow-[0_0_20px_rgba(0,163,255,0.4)]'}`}>
            <ChevronsLeftRight className={`w-5 h-5 transition-colors duration-300 ${isDragging ? 'text-white animate-pulse' : isHovering ? 'text-white' : 'text-blue-400'}`} aria-hidden="true" />
          </div>
        </div>
      </div>

      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={handleChange}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerCancel={() => setIsDragging(false)}
        className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30 touch-pan-y"
        aria-label="Drag to compare before and after diagnostic states"
      />
    </div>
  );
}