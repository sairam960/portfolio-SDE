'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

// Calendly TypeScript declarations
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    }
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)
  const logoRef = useRef<HTMLButtonElement>(null)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Magnetic effect for logo
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 150
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!cursorVisible) {
        setCursorVisible(true)
      }
    }

    const handleMouseLeave = () => {
      setCursorVisible(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ftjsearch/30min'
      });
    } else {
      // Fallback to opening Calendly in new tab if widget fails to load
      window.open('https://calendly.com/ftjsearch/30min', '_blank');
    }
  }

  const handleLogoHover = (e: React.MouseEvent) => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      
      logoRef.current.style.transform = `translate(${deltaX * 0.2}px, ${deltaY * 0.2}px) scale(1.05)`
    }
  }

  const handleLogoLeave = () => {
    if (logoRef.current) {
      logoRef.current.style.transform = 'translate(0px, 0px) scale(1)'
    }
  }

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className={`custom-cursor ${cursorVisible ? 'active' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.header 
        className={`header-modern ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Scroll Progress Indicator */}
        <motion.div
          className="scroll-progress"
          style={{ scaleX }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="header-nav-modern">
            {/* Logo/Brand with Magnetic Effect */}
            <motion.div 
              className="header-brand-modern"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                ref={logoRef}
                onClick={() => scrollToSection('home')}
                className="brand-link-modern"
                onMouseEnter={handleLogoHover}
                onMouseMove={handleLogoHover}
                onMouseLeave={handleLogoLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="brand-text-modern"
                  initial={{ rotateY: -90 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  SK
                </motion.span>
                <div className="brand-glow" />
              </motion.button>
            </motion.div>

            {/* Navigation Links with Animated Underlines */}
            <motion.div 
              className="header-links-modern"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link-modern ${activeSection === item.id ? 'active' : ''}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span className="nav-text">{item.label}</span>
                  <motion.div 
                    className="nav-underline"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeSection === item.id ? 1 : 0,
                      background: activeSection === item.id 
                        ? 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' 
                        : 'transparent'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="nav-hover-underline"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* Theme Toggle & CTA */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="header-cta"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.button
                  onClick={handleCalendlyClick}
                  className="cta-button-modern"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let&apos;s Talk</span>
                  <motion.div 
                    className="cta-glow"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  )
}