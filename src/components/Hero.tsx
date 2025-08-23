'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

// Typewriter Hook
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayText, isComplete }
}

// Gradient Mesh Background Component with Progressive Loading
const GradientMeshBackground = () => {
  const meshRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Delay heavy animations until after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000) // 1 second delay for smoother initial load

    const handleMouseMove = (e: MouseEvent) => {
      if (isLoaded) { // Only track mouse after animations are loaded
        setMousePos({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isLoaded])

  return (
    <div className="gradient-mesh-container" ref={meshRef}>
      {/* Animated Gradient Orbs - Progressive Loading */}
      {isLoaded && (
        <>
          <motion.div
            className="gradient-orb orb-1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              background: `radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, rgba(107, 70, 193, 0.08) 50%, transparent 80%)`,
            }}
          />
        </>
      )}
    </div>
  )
}

// Cursor Trail Effect - Removed for better performance

// Modern Skill Pills Component
const SkillPills = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker']
  
  return (
    <motion.div 
      className="skill-pills"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="skill-pill"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.7 + index * 0.1,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
            boxShadow: "0 8px 25px rgba(14, 165, 233, 0.3)"
          }}
        >
          {skill}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  const { isDark } = useTheme()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(0, springConfig)
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const { displayText: titleText, isComplete: titleComplete } = useTypewriter("Hi, I'm Sai Krishnan", 100)
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    setMousePosition({ x: mouseX, y: mouseY })
    
    // 3D tilt effect
    const rotateXValue = (mouseY / rect.height) * 10
    const rotateYValue = (mouseX / rect.width) * -10
    
    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
    x.set(mouseX * 0.1)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    rotateX.set(0)
    rotateY.set(0)
    x.set(0)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // More robust and smooth across all Next.js deployment types
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Optionally update hash for accessibility
      window.history.replaceState(null, '', `#${sectionId}`)
    }
  }

  return (
    <>
      <motion.section 
        ref={ref}
        style={{ y, opacity }}
        className="hero-section-modern text-gray-900 dark:text-white"
        id="home"
      >
        <GradientMeshBackground />
        
        <div className="hero-container-modern">
          <div className="hero-content-modern">
            {/* Text Content */}
            <motion.div 
              className="hero-text-modern"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                x,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="hero-title-modern">
                  <span className="typewriter-modern">
                    {titleText}
                    <motion.span
                      className="cursor-modern"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      |
                    </motion.span>
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={titleComplete ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <div className="role-container-modern">
                  <motion.span
                    className="role-text-modern"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                  >
                    Full-Stack Software Engineer
                  </motion.span>
                </div>
              </motion.div>

              <motion.p
                className="hero-subtitle-modern"
                initial={{ opacity: 0, y: 30 }}
                animate={titleComplete ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                Passionate about building scalable applications and delivering exceptional user experiences with modern technologies.
              </motion.p>

              {/* Skill Pills */}
              <SkillPills />

              <motion.div
                className="hero-buttons-modern"
                initial={{ opacity: 0, y: 30 }}
                animate={titleComplete ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              >
                <motion.button
                  className="btn-primary-modern"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('projects')}
                >
                  <span>View My Work</span>
                  <motion.svg 
                    className="btn-icon-modern"
                    width="20" 
                    height="20" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                  <div className="btn-glow" />
                </motion.button>

                <motion.button
                  className="btn-outline-modern"
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                    borderColor: 'var(--color-secondary)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.open('/portfolio-SDE/resume/Sai_Krishnan_Resume.pdf', '_blank')
                  }}
                >
                  <span>View Resume</span>
                  <motion.svg 
                    className="btn-icon-modern"
                    width="20" 
                    height="20" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.button>

                <motion.button
                  className="btn-outline-modern"
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    backgroundColor: 'rgba(0, 102, 255, 0.1)',
                    borderColor: 'var(--color-primary)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('contact')}
                >
                  <span>Get In Touch</span>
                  <motion.svg 
                    className="btn-icon-modern"
                    width="20" 
                    height="20" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 15 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="hero-image-section-modern"
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="profile-container-modern"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                animate={{
                  y: [0, -10, 0],
                }}
                style={{
                  animationDuration: '6s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out'
                }}
              >
                <div className="profile-image-wrapper-modern">
                  <Image
                    src="/portfolio-SDE/images/DSC_6481.jpg"
                    alt="Sai Krishnan"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="profile-image-modern"
                    priority
                  />
                  <div className="image-overlay-modern" />
                  <div className="image-border-glow" />
                </div>
              </motion.div>

              {/* Floating Social Links */}
              <motion.div 
                className="social-links-modern"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                {[
                  { 
                    href: 'https://github.com/sairam960', 
                    label: 'GitHub',
                    color: 'var(--color-gray-800)',
                    icon: (
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )
                  },
                  { 
                    href: 'https://www.linkedin.com/in/sairamnathk/', 
                    label: 'LinkedIn',
                    color: 'var(--color-blue-600)',
                    icon: (
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  },
                  { 
                    href: 'mailto:ftjsearch@gmail.com', 
                    label: 'Email',
                    color: 'var(--color-red-500)',
                    icon: (
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  }
                ].map((social, index) => {
                  // Theme-aware hover colors
                  const getHoverColors = () => {
                    if (isDark) {
                      return {
                        backgroundColor: social.color,
                        color: 'white'
                      }
                    } else {
                      return {
                        backgroundColor: social.color,
                        color: 'white'
                      }
                    }
                  }

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="social-link-modern"
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 30, scale: 0 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: 2.2 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        y: -5,
                        boxShadow: `0 10px 30px ${social.color}33`,
                        ...getHoverColors()
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}
