"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Milliseconds to wait before revealing
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function RevealWrapper({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up" 
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element crosses into the viewport
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Stop observing once it has revealed (so it doesn't hide/show repeatedly)
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers right before it hits the bottom of the screen
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  // Determine starting position based on direction
  let transformClass = "";
  if (!isVisible) {
    switch (direction) {
      case "up": transformClass = "translate-y-12"; break;
      case "down": transformClass = "-translate-y-12"; break;
      case "left": transformClass = "translate-x-12"; break;
      case "right": transformClass = "-translate-x-12"; break;
      case "none": transformClass = ""; break;
    }
  } else {
    transformClass = "translate-y-0 translate-x-0";
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${transformClass} ${className}`}
    >
      {children}
    </div>
  );
}