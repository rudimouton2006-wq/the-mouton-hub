"use client";
import { useEffect, useRef } from "react";

interface Node {
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
    let nodes: Node[] = [];
    
    // Configurable Takumi Tech System Parameters
    const NODE_COUNT = 60; // Optimal density for performance
    const CONNECTION_DISTANCE = 150;
    const NODE_SPEED = 0.3;

    const resizeCanvas = () => {
      // Get actual computed size from CSS
      const { innerWidth, innerHeight } = window;
      // Handle high-DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      
      initNodes(innerWidth, innerHeight);
    };

    const initNodes = (width: number, height: number) => {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * NODE_SPEED,
          vy: (Math.random() - 0.5) * NODE_SPEED,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const drawNetwork = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Deep space background fill
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Infinite boundary wrap for a seamless network feel
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
      });

      // Draw active network vectors (lines)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            // Calculate dynamic opacity based on proximity
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            // Takumi Tech Cyan/Blue node connection color
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw the physical nodes (dots)
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.5)"; // Blue-500
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawNetwork);
    };

    // Initialize and start loop
    resizeCanvas();
    drawNetwork();

    // Debounce resize to prevent rapid firing crashes
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    };

    window.addEventListener("resize", handleResize);

    // Ultimate Cleanup Protocol
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}