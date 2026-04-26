"use client";
import { useEffect, useRef, useState } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function RevealWrapper({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up" 
}: RevealWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hardware-accelerated observer to watch for viewport entry
    const observer = new IntersectionObserver(
      (entries) => {
        // Once the element enters the viewport, trigger the state change
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Unobserve immediately after triggering so the animation only runs once per load
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { 
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "50px" // Start loading slightly before it hits the actual screen edge
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Calculate the starting position matrix based on the requested direction
  const getTransformDirection = () => {
    switch (direction) {
      case "up": return "translateY(40px)";
      case "down": return "translateY(-40px)";
      case "left": return "translateX(40px)";
      case "right": return "translateX(-40px)";
      case "none": return "translate(0,0)";
      default: return "translateY(40px)";
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0)" : getTransformDirection(),
        // Transition heavily utilizes cubic-bezier curves for a natural, "premium" snap
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform" // GPU acceleration hint
      }}
    >
      {children}
    </div>
  );
}