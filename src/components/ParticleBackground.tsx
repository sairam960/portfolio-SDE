'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  element: HTMLDivElement;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  maxDistance?: number;
  repelStrength?: number;
  returnSpeed?: number;
  colors?: string[];
}

export default function ParticleBackground({
  particleCount = 40,
  maxDistance = 120,
  repelStrength = 0.8,
  returnSpeed = 0.02,
  colors = ['#a855f7', '#ec4899', '#3b82f6', '#10b981']
}: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  // Initialize particles
  const createParticles = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const particles: Particle[] = [];

    // Clear existing particles
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle gpu-accelerated';
      
      let x, y;
      
      // Create constellation clusters for 20% of particles
      if (Math.random() < 0.2 && i > 0) {
        // Create small cluster around a previous particle
        const prevParticle = particles[Math.floor(Math.random() * particles.length)];
        if (prevParticle) {
          x = prevParticle.x + (Math.random() - 0.5) * 100;
          y = prevParticle.y + (Math.random() - 0.5) * 100;
          // Keep within bounds
          x = Math.max(50, Math.min(containerRect.width - 50, x));
          y = Math.max(50, Math.min(containerRect.height - 50, y));
        } else {
          x = Math.random() * containerRect.width;
          y = Math.random() * containerRect.height;
        }
      } else {
        x = Math.random() * containerRect.width;
        y = Math.random() * containerRect.height;
      }
      
      // Create varied star sizes for more realistic starfield
      const starType = Math.random();
      let size, opacity;
      
      if (starType < 0.7) {
        // Small distant stars
        size = Math.random() * 1.5 + 0.5;
        opacity = Math.random() * 0.4 + 0.2;
      } else if (starType < 0.9) {
        // Medium stars
        size = Math.random() * 2 + 1.5;
        opacity = Math.random() * 0.6 + 0.3;
      } else {
        // Large bright stars
        size = Math.random() * 3 + 2.5;
        opacity = Math.random() * 0.8 + 0.4;
      }
      
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Add twinkling effect for stars
      const twinkleSpeed = Math.random() * 2 + 1; // 1-3 seconds
      const hasGlow = Math.random() > 0.7; // 30% chance for glow effect
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${opacity};
        will-change: transform, opacity;
        pointer-events: none;
        ${hasGlow ? `box-shadow: 0 0 ${size * 2}px ${color};` : ''}
        animation: twinkle ${twinkleSpeed}s ease-in-out infinite alternate;
      `;

      particle.style.transform = `translate(${x}px, ${y}px)`;
      container.appendChild(particle);

      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        size,
        opacity,
        color,
        element: particle
      });
    }

    particlesRef.current = particles;
  }, [particleCount, colors]);

  // Animation loop
  const animate = useCallback(() => {
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    particles.forEach((particle) => {
      // Calculate distance from mouse
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        // Repel from mouse
        const force = (maxDistance - distance) / maxDistance;
        const angle = Math.atan2(dy, dx);
        
        particle.vx -= Math.cos(angle) * force * repelStrength;
        particle.vy -= Math.sin(angle) * force * repelStrength;
      }

      // Return to base position
      particle.vx += (particle.baseX - particle.x) * returnSpeed;
      particle.vy += (particle.baseY - particle.y) * returnSpeed;

      // Apply friction
      particle.vx *= 0.95;
      particle.vy *= 0.95;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Update DOM element with CSS transforms for better performance
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
      particle.element.style.opacity = `${particle.opacity * (1 - Math.min(distance / maxDistance, 1) * 0.3)}`;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [maxDistance, repelStrength, returnSpeed]);

  // Mouse tracking
  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Handle resize
  const handleResize = useCallback(() => {
    if (!mounted) return;
    
    // Debounce resize
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
      createParticles();
    }, 250);
  }, [mounted, createParticles]);

  // Setup and cleanup
  useEffect(() => {
    setMounted(true);
    
    if (!containerRef.current) return;

    createParticles();
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Clear timeout
      if (window.resizeTimeout) {
        clearTimeout(window.resizeTimeout);
      }
    };
  }, [mounted, animate, createParticles, handleResize]);

  // Floating animation for subtle movement using CSS animations
  useEffect(() => {
    if (!mounted || particlesRef.current.length === 0) return;

    const particles = particlesRef.current;
    
    particles.forEach((particle, index) => {
      // Add subtle floating movement by updating base positions periodically
      const floatInterval = setInterval(() => {
        const time = Date.now() * 0.001;
        particle.baseX = particle.baseX + Math.sin(time + index) * 0.5;
        particle.baseY = particle.baseY + Math.cos(time + index) * 0.3;
      }, 100);

      // Store interval for cleanup
      (particle as any).floatInterval = floatInterval;
    });

    return () => {
      particles.forEach((particle) => {
        if ((particle as any).floatInterval) {
          clearInterval((particle as any).floatInterval);
        }
      });
    };
  }, [mounted]);

  if (!mounted) {
    return null; // Prevent SSR issues
  }

  return (
    <div
      ref={containerRef}
      className="particle-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.7,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    />
  );
}

// Extend Window interface for resize timeout
declare global {
  interface Window {
    resizeTimeout: NodeJS.Timeout;
  }
}