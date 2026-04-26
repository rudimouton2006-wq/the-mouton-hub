"use client";
import { useEffect, useRef, useState } from "react";

export default function VisualEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // We use refs instead of React State for the coordinates. 
  // This prevents the page from re-rendering 60 times a second and lagging the site.
  const mouse = useRef({ x: 0, y: 0 });
  const trailing = useRef({ x: 0, y: 0 });
  const requestRef = useRef<any>(null);

  useEffect(() => {
    // Safety Switch: Disable custom cursors on mobile/touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouse.current = { x: e.clientX, y: e.clientY };

      // The main dot updates instantly for zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const renderTrail = () => {
      // The Lerp Engine: Calculates the distance between the trail and the mouse, 
      // and moves the trail 15% (0.15) of that distance every single frame.
      trailing.current.x += (mouse.current.x - trailing.current.x) * 0.15;
      trailing.current.y += (mouse.current.y - trailing.current.y) * 0.15;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailing.current.x}px, ${trailing.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Loop the animation continuously
      requestRef.current = requestAnimationFrame(renderTrail);
    };

    // Attach event listeners
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    
    // Start the physics engine
    requestRef.current = requestAnimationFrame(renderTrail);

    // Cleanup memory when leaving the page
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* 1. The Main Cursor Dot (Solid Blue, Instant Tracking) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[100] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* 2. The Trailing Ring (Glass effect, Physics-delayed) */}
      <div
        ref={trailRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-blue-400/40 rounded-full pointer-events-none z-[99] transition-opacity duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}