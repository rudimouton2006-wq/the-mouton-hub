"use client";

import { useEffect, useRef } from "react";

// Strict type definition for network nodes
interface NetworkNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Alpha false optimizes rendering by telling the browser the canvas background is opaque
    // We will draw the dark void background manually
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: NetworkNode[] = [];
    
    // Configurable System Parameters - Tuned for the premium "Takumi Tech" aesthetic
    const NODE_COUNT = 60; 
    const CONNECTION_DISTANCE = 150;
    const NODE_SPEED = 0.2; // Ultra-slow, deliberate movement for premium feel

    const initializeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      
      populateNodes(innerWidth, innerHeight);
    };

    const populateNodes = (width: number, height: number) => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * NODE_SPEED,
          vy: (Math.random() - 0.5) * NODE_SPEED,
          radius: Math.random() * 1.2 + 0.5, // Subtle variation in node mass
        });
      }
    };

    const renderNetwork = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // 1. Clear the canvas with the ultra-deep obsidian base
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // 2. Update node telemetry
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Infinite boundary wrap (Torus topology)
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
      });

      // 3. Render active network vectors (The connections)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            // Dynamic opacity calculation based on proximity
            const opacity = 1 - (distance / CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Takumi Royal Blue connection vectors for subtle depth
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 4. Render physical data nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        // Takumi Cyber Cyan core for high-tech accenting
        ctx.fillStyle = "rgba(0, 229, 255, 0.3)"; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(renderNetwork);
    };

    // Initialization Sequence
    initializeCanvas();
    renderNetwork();

    // Resize Observer with Debounce to prevent layout thrashing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initializeCanvas, 200);
    };

    window.addEventListener("resize", handleResize);

    // Absolute Cleanup Protocol
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}