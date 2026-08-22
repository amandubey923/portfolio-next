"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
}

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);
  const animFrameId = useRef<number | null>(null);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    // Only enable for desktop devices with fine precision pointers
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    isReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMounted(true);
    document.documentElement.classList.add("custom-cursor-enabled");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest("a, button, input, textarea, select, [role='button'], label, summary")
        );
        setIsHovered(isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // Canvas setup for high-performance flame particles
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Animation Loop
    const render = () => {
      // 1. Smooth cursor interpolation
      const ease = 0.45;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      // 2. Flame / Energy Particles (if not reduced motion)
      if (!isReducedMotion.current && ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const dx = mousePos.current.x - prevMousePos.current.x;
        const dy = mousePos.current.y - prevMousePos.current.y;
        const speed = Math.hypot(dx, dy);

        // Spawn 1-2 tiny flame particles when moving
        if (speed > 1.5 && isVisible) {
          const count = speed > 10 ? 2 : 1;
          for (let i = 0; i < count; i++) {
            if (particles.current.length < 8) {
              const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.4;
              const pSpeed = Math.random() * 1.5 + 0.5;
              particles.current.push({
                x: cursorPos.current.x + (Math.random() - 0.5) * 4,
                y: cursorPos.current.y + (Math.random() - 0.5) * 4,
                size: Math.random() * 3 + 2,
                alpha: 0.8,
                vx: -Math.cos(angle) * pSpeed + (Math.random() - 0.5) * 0.5,
                vy: -Math.sin(angle) * pSpeed + (Math.random() - 0.5) * 0.5,
              });
            }
          }
        }

        prevMousePos.current = { x: mousePos.current.x, y: mousePos.current.y };

        // Get computed primary theme color dynamically
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#18cef2";

        // Update and draw particles
        for (let i = particles.current.length - 1; i >= 0; i--) {
          const p = particles.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.size *= 0.92;
          p.alpha *= 0.86;

          if (p.alpha <= 0.05 || p.size <= 0.5) {
            particles.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.globalAlpha = p.alpha;
          ctx.shadowColor = primaryColor;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("resize", resizeCanvas);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      {/* 1. High-Performance Particle Canvas for the Flame Trail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* 2. Futuristic AI Precision Cursor Core */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div className="relative flex items-center justify-center">
          {/* Subtle Outer HUD Reticle (Expands on Hover) */}
          <div
            className={`absolute rounded-full border border-primary/60 transition-all duration-300 ${
              isHovered
                ? "h-9 w-9 scale-110 border-primary shadow-[0_0_15px_var(--cyber-glow-primary)] rotate-45"
                : "h-6 w-6 scale-90 opacity-40 rotate-0"
            } ${isClicking ? "scale-75 opacity-90" : ""}`}
          >
            {/* Micro HUD corner ticks */}
            <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-1 w-0.5 bg-primary" />
            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-0.5 bg-primary" />
            <span className="absolute top-1/2 -left-0.5 -translate-y-1/2 h-0.5 w-1 bg-primary" />
            <span className="absolute top-1/2 -right-0.5 -translate-y-1/2 h-0.5 w-1 bg-primary" />
          </div>

          {/* Central Precision Energy Core */}
          <div
            className={`rounded-full bg-primary shadow-[0_0_12px_var(--cyber-glow-primary)] transition-all duration-200 ${
              isHovered ? "h-2 w-2" : "h-1.5 w-1.5"
            } ${isClicking ? "scale-150 shadow-[0_0_20px_var(--cyber-glow-strong)]" : ""}`}
          />

          {/* Click Ripple Wave */}
          {isClicking && (
            <div className="absolute h-10 w-10 rounded-full border-2 border-primary animate-ping opacity-60 pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
}

