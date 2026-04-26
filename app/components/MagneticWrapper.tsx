"use client";
import { useRef, useState, MouseEvent } from "react";

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  pullStrength?: number;
}

export default function MagneticWrapper({ 
  children, 
  className = "", 
  pullStrength = 0.15 
}: MagneticWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    
    // Extract exact mouse coordinates relative to the viewport
    const { clientX, clientY } = e;
    
    // Extract exact dimensions and position of the wrapped element
    const { width, height, left, top } = wrapperRef.current.getBoundingClientRect();
    
    // Calculate the mathematical center of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate how far the mouse is from the center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Apply the magnetic pull fraction
    setPosition({ 
      x: distanceX * pullStrength, 
      y: distanceY * pullStrength 
    });
  };

  const handleMouseLeave = () => {
    // Release the magnetic lock and snap back to origin
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        // If x and y are 0 (mouse left), use a smooth elastic spring-back effect.
        // Otherwise, use a rapid, snappy follow effect.
        transition: position.x === 0 && position.y === 0 
          ? "transform 0.6s cubic-bezier(0.25, 1, 0.2, 1)" 
          : "transform 0.1s ease-out",
        willChange: "transform" // Hardware acceleration hint
      }}
    >
      {children}
    </div>
  );
}