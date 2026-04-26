"use client";
import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function DecodeText({ text, className = "", delay = 0 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Observer triggers the typing only when the user scrolls to the text
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          setHasRun(true);
          setTimeout(() => {
            typeText();
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasRun, delay, text]);

  const typeText = () => {
    let currentIndex = 0;
    
    // Fast, mechanical typing speed
    const typeNextChar = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        
        // Randomize speed slightly between 30ms and 60ms for a natural, organic feel
        const nextDelay = Math.random() * 30 + 30; 
        setTimeout(typeNextChar, nextDelay);
      } else {
        setIsComplete(true);
      }
    };
    
    typeNextChar();
  };

  return (
    // We use inline-grid to place the invisible placeholder and the typing text on top of each other
    // without using absolute positioning. This fixes the gradient clipping bug.
    <span ref={elementRef} className={`inline-grid ${className}`}>
      
      {/* 1. Invisible placeholder: Sets the exact final width + space for our custom cursor, 
          so the layout never jumps or shifts.
      */}
      <span className="col-start-1 row-start-1 opacity-0 pointer-events-none pr-[10px]" aria-hidden="true">
        {text}
      </span>
      
      {/* 2. Visible typing layer: Types left-to-right inside the reserved grid space */}
      <span className="col-start-1 row-start-1 justify-self-start text-left whitespace-nowrap">
        {displayText}
        
        {/* REFINED CODER CURSOR WITH FADE:
            When typing is done, it waits 300ms, then fades out smoothly over 1000ms. 
        */}
        <span
          className={`inline-block w-[6px] h-[0.8em] bg-blue-500 rounded-sm ml-1 translate-y-[2px] ${
            isComplete 
              ? "opacity-0 transition-opacity duration-1000 delay-300 ease-out" 
              : "opacity-100 animate-[pulse_1s_step-end_infinite]"
          }`}
          // Anti-Gradient Bug Fix: This explicit rule ensures the cursor stays solid blue
          // even when placed behind the gradient text.
          style={{ WebkitTextFillColor: "initial", WebkitBackgroundClip: "initial" }} 
        />
      </span>
      
    </span>
  );
}