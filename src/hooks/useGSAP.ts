'use client';

import { useEffect, useRef, useCallback } from 'react';
import { GSAPAnimations, gsap, ScrollTrigger } from '../lib/gsap';

export function useGSAP() {
  const elementsRef = useRef<Set<Element>>(new Set());
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize GSAP on mount
  useEffect(() => {
    GSAPAnimations.init();
    
    return () => {
      // Cleanup on unmount
      const timeline = timelineRef.current;
      const elements = elementsRef.current;
      
      if (timeline) {
        timeline.kill();
      }
      elements.forEach(element => {
        gsap.killTweensOf(element);
      });
      elements.clear();
    };
  }, []);

  // Add element to tracking
  const trackElement = useCallback((element: Element) => {
    elementsRef.current.add(element);
  }, []);

  // Fade in animation
  const fadeIn = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.fadeIn(selector, options);
  }, [trackElement]);

  // Slide animations
  const slideIn = useCallback((selector: string, direction: 'left' | 'right' | 'up' | 'down' = 'up', options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.slideIn(selector, direction, options);
  }, [trackElement]);

  // Scale animation
  const scaleIn = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.scaleIn(selector, options);
  }, [trackElement]);

  // Rotate animation
  const rotateIn = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.rotateIn(selector, options);
  }, [trackElement]);

  // Staggered text animation
  const staggerText = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.staggerText(selector, options);
  }, [trackElement]);

  // Parallax effect
  const parallax = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.parallax(selector, options);
  }, [trackElement]);

  // Floating animation
  const float = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.float(selector, options);
  }, [trackElement]);

  // Magnetic hover effect
  const magneticHover = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.magneticHover(selector, options);
  }, [trackElement]);

  // Counter animation
  const countUp = useCallback((selector: string, options?: any) => {
    const elements = gsap.utils.toArray(selector) as Element[];
    elements.forEach(trackElement);
    return GSAPAnimations.countUp(selector, options);
  }, [trackElement]);

  // Custom timeline creation
  const createTimeline = useCallback((options?: gsap.TimelineVars) => {
    const tl = gsap.timeline(options);
    timelineRef.current = tl;
    return tl;
  }, []);

  // Refresh ScrollTrigger
  const refresh = useCallback(() => {
    ScrollTrigger.refresh();
  }, []);

  return {
    fadeIn,
    slideIn,
    scaleIn,
    rotateIn,
    staggerText,
    parallax,
    float,
    magneticHover,
    countUp,
    createTimeline,
    refresh,
    gsap,
    ScrollTrigger
  };
}

// Hook for scroll-triggered animations
export function useScrollAnimation(selector: string, animationType: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' = 'fadeIn', options?: any) {
  const elementRef = useRef<HTMLElement | null>(null);
  const { fadeIn, slideIn, scaleIn } = useGSAP();

  useEffect(() => {
    if (!elementRef.current) return;

    const trigger = elementRef.current;
    const animationOptions = {
      ...options,
      trigger: trigger,
    };

    let animation: gsap.core.Timeline | undefined;

    const targetSelector = selector || (trigger as HTMLElement).tagName.toLowerCase();
    
    switch (animationType) {
      case 'fadeIn':
        animation = fadeIn(targetSelector, animationOptions);
        break;
      case 'slideUp':
        animation = slideIn(targetSelector, 'up', animationOptions);
        break;
      case 'slideLeft':
        animation = slideIn(targetSelector, 'left', animationOptions);
        break;
      case 'slideRight':
        animation = slideIn(targetSelector, 'right', animationOptions);
        break;
      case 'scaleIn':
        animation = scaleIn(targetSelector, animationOptions);
        break;
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [selector, animationType, options, fadeIn, slideIn, scaleIn]);

  return elementRef;
}

// Hook for magnetic hover effect
export function useMagneticHover(strength: number = 0.3, speed: number = 0.3) {
  const elementRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let rect = element.getBoundingClientRect();

    const updateRect = () => {
      rect = element.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: speed,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: speed * 1.5,
        ease: "back.out(1.7)",
      });
    };

    element.addEventListener('mouseenter', updateRect);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateRect);

    return () => {
      element.removeEventListener('mouseenter', updateRect);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateRect);
      gsap.killTweensOf(element);
    };
  }, [strength, speed]);

  return elementRef;
}

// Hook for continuous floating animation
export function useFloatingAnimation(duration: number = 4, distance: number = 15) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.to(element, {
      y: distance,
      rotation: 2,
      duration: duration,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [duration, distance]);

  return elementRef;
}