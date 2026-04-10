"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  pulse: number;
  pulseSpeed: number;
}

export default function PageBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = document.documentElement.scrollHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${document.documentElement.scrollHeight}px`;
      ctx.scale(dpr, dpr);
      init();
    };

    const init = () => {
      const count = Math.floor((window.innerWidth * document.documentElement.scrollHeight) / 18000);
      particles = Array.from({ length: Math.min(count, 120) }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * document.documentElement.scrollHeight,
        size: 0.6 + Math.random() * 1.2,
        opacity: 0.06 + Math.random() * 0.14,
        speed: 0.08 + Math.random() * 0.18,
        drift: (Math.random() - 0.5) * 0.12,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.004 + Math.random() * 0.008,
      }));
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.pulse += p.pulseSpeed;
        const ao = p.opacity * (0.6 + Math.sin(p.pulse) * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 110, ${ao})`;
        ctx.fill();

        p.y -= p.speed;
        p.x += p.drift;

        if (p.y < -4) p.y = h + 4;
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
      });

      rafId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
