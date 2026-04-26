"use client";
import { useRef, useState } from "react";

interface MagneticWrapperProps {
  children: React.ReactNode;
  pullStrength?: number;
  className?: string;
}

export default function MagneticWrapper({
  children,
  pullStrength = 0.15,
  className = "",
}: MagneticWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = wrapperRef.current.getBoundingClientRect();
    
    // Calculate distance from the exact center of the DOM element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Apply the magnetic pull multiplier
    const deltaX = (clientX - centerX) * pullStrength;
    const deltaY = (clientY - centerY) * pullStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Snap back to origin
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block relative z-10 will-change-[transform] ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        // When hovered, the transform tracks instantly. When un-hovered, it smoothly eases back to zero.
        transition: isHovered 
          ? "transform 0.1s linear" 
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {children}
    </div>
  );
}