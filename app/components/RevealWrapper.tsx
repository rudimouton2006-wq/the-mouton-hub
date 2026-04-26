"use client";
import { useEffect, useRef, useState } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  className?: string;
}

export default function RevealWrapper({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: RevealWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the Intersection Observer for scroll-triggered rendering
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Instantly unobserve to prevent memory leaks and CPU drain
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        // Triggers exactly when the element is 10% visible from the bottom
        rootMargin: "0px 0px -10% 0px", 
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup protocol on component unmount
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current); 
      }
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-12";
      case "down":
        return "-translate-y-12";
      case "left":
        return "translate-x-12";
      case "right":
        return "-translate-x-12";
      case "none":
        return "";
      default:
        return "translate-y-12";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-[opacity,transform] ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getDirectionClasses()}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}