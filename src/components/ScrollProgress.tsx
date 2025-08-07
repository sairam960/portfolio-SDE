'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScrollProgressProps {
  showSectionIndicator?: boolean
}

export default function ScrollProgress({ showSectionIndicator = true }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  const sections = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (totalScroll / windowHeight) * 100
      
      setScrollProgress(progress)
      setIsVisible(totalScroll > 100)

      // Update active section
      if (showSectionIndicator) {
        const scrollPosition = totalScroll + 200
        let currentSection = 'home'

        for (const section of sections) {
          const element = document.getElementById(section.id)
          if (element && scrollPosition >= element.offsetTop) {
            currentSection = section.id
          }
        }

        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [showSectionIndicator, sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX: scrollProgress / 100,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Section Navigation Indicator */}
      <AnimatePresence>
        {isVisible && showSectionIndicator && (
          <motion.div
            className="section-nav-indicator"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                className={`section-nav-dot ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Navigate to ${section.label} section`}
                title={section.label}
              >
                <motion.div
                  className="dot-inner"
                  animate={{
                    scale: activeSection === section.id ? 1 : 0.6,
                    backgroundColor: activeSection === section.id ? 'var(--color-primary)' : 'var(--color-slate-300)'
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="section-label"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {section.label}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="scroll-to-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(14, 165, 233, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            title="Back to top"
          >
            <motion.svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}