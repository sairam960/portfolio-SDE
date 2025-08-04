'use client';

import { useEffect, useRef, useState } from 'react';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 20;
    
    // Create simple particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.5 + 0.2;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: #3b82f6;
        border-radius: 50%;
        opacity: ${opacity};
        left: ${x}px;
        top: ${y}px;
        animation: float ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
      `;

      container.appendChild(particle);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.3
      }}
      aria-hidden="true"
    />
  );
}