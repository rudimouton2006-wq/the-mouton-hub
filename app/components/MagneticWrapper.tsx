"use client";
import { useRef, useState, ReactNode, MouseEvent } from "react";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  pullStrength?: number; // Controls how intensely the button pulls toward the cursor
}

export default function MagneticWrapper({ children, className = "", pullStrength = 0.15 }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Calculate the exact center of the button
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance between mouse and button center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply the magnetic pull
    setPosition({ 
      x: distanceX * pullStrength, 
      y: distanceY * pullStrength 
    });
  };

  const handleMouseLeave = () => {
    // Snap back to zero coordinates when the mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex ${className}`}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
        // Fast transition when tracking the mouse, smooth springy transition when snapping back
        transition: x === 0 && y === 0 ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}