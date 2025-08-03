'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// GSAP Configuration for optimal performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Custom easing functions matching CSS
const easeConfig = {
  power1: "power1.out",
  power2: "power2.out", 
  power3: "power3.out",
  back: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
};

export class GSAPAnimations {
  private static timeline: gsap.core.Timeline | null = null;

  // Initialize GSAP and set up global configurations
  static init() {
    // Refresh ScrollTrigger on resize
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    // Set up smooth scrolling
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 0,
    });

    console.log('🎭 GSAP Animations initialized');
  }

  // Fade in animation with ScrollTrigger
  static fadeIn(selector: string, options: GSAPAnimationOptions = {}) {
    const {
      duration = 0.8,
      delay = 0,
      y = 30,
      stagger = 0.1,
      trigger,
      start = "top 80%",
      end = "bottom 20%",
      ease = easeConfig.power2,
    } = options;

    const elements = gsap.utils.toArray(selector);
    
    if (elements.length === 0) return;

    // Set initial state
    gsap.set(elements, { 
      opacity: 0, 
      y: y,
      willChange: "transform, opacity"
    });

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: trigger ? {
        trigger: trigger,
        start: start,
        end: end,
        toggleActions: "play none none reverse",
        once: false,
      } : undefined
    });

    tl.to(elements, {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease,
      onComplete: () => {
        gsap.set(elements, { willChange: "auto" });
      }
    });

    return tl;
  }

  // Slide animations
  static slideIn(selector: string, direction: 'left' | 'right' | 'up' | 'down' = 'up', options: GSAPAnimationOptions = {}) {
    const {
      duration = 1,
      delay = 0,
      distance = 60,
      stagger = 0.15,
      trigger,
      start = "top 85%",
      ease = easeConfig.power3,
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    const transforms: Record<string, any> = {
      left: { x: -distance, y: 0 },
      right: { x: distance, y: 0 },
      up: { x: 0, y: distance },
      down: { x: 0, y: -distance },
    };

    const initialTransform = transforms[direction];

    gsap.set(elements, { 
      opacity: 0, 
      ...initialTransform,
      willChange: "transform, opacity"
    });

    const tl = gsap.timeline({
      scrollTrigger: trigger ? {
        trigger: trigger,
        start: start,
        toggleActions: "play none none reverse",
      } : undefined
    });

    tl.to(elements, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease,
      onComplete: () => {
        gsap.set(elements, { willChange: "auto" });
      }
    });

    return tl;
  }

  // Scale animation
  static scaleIn(selector: string, options: GSAPAnimationOptions = {}) {
    const {
      duration = 0.6,
      delay = 0,
      scale = 0.8,
      stagger = 0.1,
      trigger,
      start = "top 80%",
      ease = easeConfig.back,
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    gsap.set(elements, { 
      opacity: 0, 
      scale: scale,
      willChange: "transform, opacity"
    });

    const tl = gsap.timeline({
      scrollTrigger: trigger ? {
        trigger: trigger,
        start: start,
        toggleActions: "play none none reverse",
      } : undefined
    });

    tl.to(elements, {
      opacity: 1,
      scale: 1,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease,
      onComplete: () => {
        gsap.set(elements, { willChange: "auto" });
      }
    });

    return tl;
  }

  // Rotate and scale animation
  static rotateIn(selector: string, options: GSAPAnimationOptions = {}) {
    const {
      duration = 0.8,
      delay = 0,
      rotation = -10,
      scale = 0.9,
      stagger = 0.1,
      trigger,
      start = "top 80%",
      ease = easeConfig.back,
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    gsap.set(elements, { 
      opacity: 0, 
      rotation: rotation,
      scale: scale,
      willChange: "transform, opacity"
    });

    const tl = gsap.timeline({
      scrollTrigger: trigger ? {
        trigger: trigger,
        start: start,
        toggleActions: "play none none reverse",
      } : undefined
    });

    tl.to(elements, {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease,
      onComplete: () => {
        gsap.set(elements, { willChange: "auto" });
      }
    });

    return tl;
  }

  // Staggered text animation
  static staggerText(selector: string, options: GSAPAnimationOptions = {}) {
    const {
      duration = 0.6,
      delay = 0,
      y = 50,
      stagger = 0.03,
      trigger,
      start = "top 80%",
      ease = easeConfig.power2,
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    // Split text into characters for animation
    elements.forEach((element: any) => {
      const text = element.textContent;
      const chars = text.split('');
      element.innerHTML = chars.map((char: string) => 
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');
    });

    const chars = gsap.utils.toArray(`${selector} .char`);

    gsap.set(chars, { 
      opacity: 0, 
      y: y,
      willChange: "transform, opacity"
    });

    const tl = gsap.timeline({
      scrollTrigger: trigger ? {
        trigger: trigger,
        start: start,
        toggleActions: "play none none reverse",
      } : undefined
    });

    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      stagger: stagger,
      ease: ease,
      onComplete: () => {
        gsap.set(chars, { willChange: "auto" });
      }
    });

    return tl;
  }

  // Parallax scrolling effect
  static parallax(selector: string, options: ParallaxOptions = {}) {
    const {
      speed = 0.5,
      trigger,
      start = "top bottom",
      end = "bottom top",
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    elements.forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: trigger || element,
          start: start,
          end: end,
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    });
  }

  // Floating animation for continuous movement
  static float(selector: string, options: FloatOptions = {}) {
    const {
      duration = 4,
      y = 15,
      rotation = 2,
      delay = 0,
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    elements.forEach((element: any, index: number) => {
      gsap.to(element, {
        y: y,
        rotation: rotation,
        duration: duration + (index * 0.5),
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: delay + (index * 0.2),
        willChange: "transform"
      });
    });
  }

  // Magnetic hover effect
  static magneticHover(selector: string, options: MagneticOptions = {}) {
    const {
      strength = 0.3,
      speed = 0.3,
    } = options;

    const elements = gsap.utils.toArray(selector);
    
    elements.forEach((element: any) => {
      const rect = element.getBoundingClientRect();
      
      element.addEventListener('mouseenter', () => {
        gsap.set(element, { willChange: "transform" });
      });

      element.addEventListener('mousemove', (e: MouseEvent) => {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        gsap.to(element, {
          x: deltaX,
          y: deltaY,
          duration: speed,
          ease: easeConfig.power2,
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: speed * 1.5,
          ease: easeConfig.back,
          onComplete: () => {
            gsap.set(element, { willChange: "auto" });
          }
        });
      });
    });
  }

  // Scroll-based counter animation
  static countUp(selector: string, options: CountUpOptions = {}) {
    const {
      start = 0,
      end = 100,
      duration = 2,
      trigger,
      startTrigger = "top 80%",
    } = options;

    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) return;

    elements.forEach((element: any) => {
      const obj = { value: start };
      
      gsap.to(obj, {
        value: end,
        duration: duration,
        ease: easeConfig.power2,
        onUpdate: () => {
          element.textContent = Math.round(obj.value);
        },
        scrollTrigger: trigger ? {
          trigger: trigger,
          start: startTrigger,
          toggleActions: "play none none reverse",
        } : undefined
      });
    });
  }

  // Page transition animation
  static pageTransition(entering: string, leaving: string) {
    const tl = gsap.timeline();

    // Animate out current content
    tl.to(leaving, {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: easeConfig.power2,
    })
    // Animate in new content
    .fromTo(entering, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: easeConfig.power3,
    });

    return tl;
  }

  // Kill all animations and ScrollTriggers
  static killAll() {
    gsap.killTweensOf("*");
    ScrollTrigger.killAll();
  }

  // Refresh ScrollTrigger calculations
  static refresh() {
    ScrollTrigger.refresh();
  }
}

// Type definitions
interface GSAPAnimationOptions {
  duration?: number;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  rotation?: number;
  distance?: number;
  stagger?: number;
  trigger?: string | Element;
  start?: string;
  end?: string;
  ease?: string;
}

interface ParallaxOptions {
  speed?: number;
  trigger?: string | Element;
  start?: string;
  end?: string;
}

interface FloatOptions {
  duration?: number;
  y?: number;
  rotation?: number;
  delay?: number;
}

interface MagneticOptions {
  strength?: number;
  speed?: number;
}

interface CountUpOptions {
  start?: number;
  end?: number;
  duration?: number;
  trigger?: string | Element;
  startTrigger?: string;
}

export { gsap, ScrollTrigger, easeConfig };