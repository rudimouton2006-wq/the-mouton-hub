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

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: NetworkNode[] = [];
    
    // Configurable System Parameters - Tuned for enterprise aesthetics
    const NODE_COUNT = 60; 
    const CONNECTION_DISTANCE = 160;
    const NODE_SPEED = 0.25;

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
          radius: Math.random() * 1.5 + 0.5, // Subtle variation in node mass
        });
      }
    };

    const renderNetwork = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Deep space background clear (matches --background variable)
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // Update node telemetry
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Infinite boundary wrap (Torus topology)
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
      });

      // Render active network vectors
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            // Dynamic opacity calculation based on proximity
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            // Takumi Blue connection vectors
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Render physical nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        // Takumi Cyan core
        ctx.fillStyle = "rgba(34, 211, 238, 0.4)"; 
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