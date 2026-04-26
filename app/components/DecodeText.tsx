"use client";
import { useEffect, useState, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";

interface DecodeTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function DecodeText({ text, delay = 0, className = "" }: DecodeTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const animate = () => {
      let iteration = 0;
      clearInterval(intervalId);

      intervalId = setInterval(() => {
        setDisplayedText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === " ") return " ";
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
        }

        // Adjust the division factor to control decode speed (higher = slower)
        iteration += 1 / 3; 
      }, 30);
    };

    if (!hasAnimated.current) {
      timeoutId = setTimeout(() => {
        animate();
        hasAnimated.current = true;
      }, delay);
    } else if (isHovering) {
      animate();
    } else {
      setDisplayedText(text);
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, isHovering]);

  return (
    <span 
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Fallback to non-breaking spaces of equal length to prevent layout shift before animation starts */}
      {displayedText || text.replace(/./g, "\u00A0")}
    </span>
  );
}