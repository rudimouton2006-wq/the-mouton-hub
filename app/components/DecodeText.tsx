"use client";
import { useState, useEffect, useRef } from "react";

interface DecodeTextProps {
  text: string;
  delay?: number;
  className?: string;
}

// The character pool used for the cryptographic scrambling effect
const GLITCH_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>_";

export default function DecodeText({ text, delay = 0, className = "" }: DecodeTextProps) {
  // Initialize with blank or heavily obfuscated text based on actual length
  const [displayText, setDisplayText] = useState(() => 
    text.split("").map(char => char === " " ? " " : "_").join("")
  );
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Hardware-accelerated intersection observer to trigger on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          // Wait for any staggered delays, then execute
          const timeoutId = setTimeout(() => {
            executeDecodeSequence();
            setHasAnimated(true);
          }, delay);
          
          return () => clearTimeout(timeoutId);
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated, delay, text]);

  const executeDecodeSequence = () => {
    let iteration = 0;
    const maxIterations = text.length * 3; // Controls the total duration of the sweep
    
    const intervalId = setInterval(() => {
      setDisplayText((currentText) => 
        text.split("").map((actualLetter, index) => {
          // Preserve spaces
          if (actualLetter === " ") return " ";
          
          // Once the sweep passes this letter's index, lock in the real letter
          if (index < Math.floor(iteration / 3)) {
            return text[index];
          }
          
          // Otherwise, continue scrambling with random cryptographic characters
          return GLITCH_CHARACTERS[Math.floor(Math.random() * GLITCH_CHARACTERS.length)];
        }).join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(intervalId);
        // Safety lock: ensure final text perfectly matches the input prop
        setDisplayText(text); 
      }
      
      iteration += 1;
    }, 30); // 30ms creates a fluid, 60fps-style rapid scramble
  };

  return (
    <span 
      ref={containerRef} 
      className={`inline-block font-black tracking-tighter ${className}`}
    >
      {displayText}
    </span>
  );
}