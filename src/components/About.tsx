'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView, useAnimation, useScroll, useTransform } from 'framer-motion'

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ 
  value, 
  suffix = '', 
  duration = 2 
}) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(counterRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      const increment = value / (duration * 60) // 60fps
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev >= value) {
            clearInterval(timer)
            return value
          }
          return Math.min(prev + increment, value)
        })
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={counterRef} className="animated-counter">
      {Math.floor(count)}{suffix}
    </span>
  )
}

// Typewriter Effect Component
const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, delay + currentIndex * 2)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <span className="typewriter-text">
      {displayedText}
      <span className={`typewriter-cursor ${showCursor ? 'visible' : ''}`}>|</span>
    </span>
  )
}

// Timeline Card Component
const TimelineCard: React.FC<{
  title: string
  content: string
  technologies: string[]
  isExpanded: boolean
  onToggle: () => void
  index: number
}> = ({ title, content, technologies, isExpanded, onToggle, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="timeline-card"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="timeline-card-header" onClick={onToggle}>
        <h4>{title}</h4>
        <motion.div
          className="expand-icon"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="timeline-card-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p>{content}</p>
            <div className="technology-badges">
              {technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="tech-badge-timeline"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: techIndex * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// 3D Flip Card Component
const FlipCard: React.FC<{
  frontContent: {
    icon: React.ReactNode
    title: string
    subtitle: string
  }
  backContent: {
    description: string
    features: string[]
  }
  index: number
}> = ({ frontContent, backContent, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="flip-card-container"
      initial={{ opacity: 0, y: 50, rotateY: -90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="flip-card"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      >
        {/* Front Face */}
        <div className="flip-card-front">
          <motion.div 
            className="flip-card-icon"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {frontContent.icon}
          </motion.div>
          <h4>{frontContent.title}</h4>
          <p>{frontContent.subtitle}</p>
        </div>

        {/* Back Face */}
        <div className="flip-card-back">
          <p className="flip-card-description">{backContent.description}</p>
          <ul className="flip-card-features">
            {backContent.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: featureIndex * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Floating Shapes Component
const FloatingShapes: React.FC = () => {
  const shapes = [
    { id: 1, size: 60, top: '10%', left: '10%', delay: 0 },
    { id: 2, size: 40, top: '20%', right: '15%', delay: 1 },
    { id: 3, size: 80, bottom: '20%', left: '20%', delay: 2 },
    { id: 4, size: 50, bottom: '30%', right: '10%', delay: 1.5 },
    { id: 5, size: 35, top: '60%', left: '50%', delay: 0.5 },
  ]

  return (
    <div className="floating-shapes-container">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function About() {
  const [expandedCard, setExpandedCard] = useState<number | null>(0)
  const [readMore, setReadMore] = useState(false)
  
  const sectionRef = useRef(null)
  const parallaxRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  })
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const timelineData = [
    {
      title: "AI & Innovation",
      content: "Led development of RAG-powered admissions chatbot and OpenAI-integrated customer service agents, improving response times by 30x and customer satisfaction by 30%.",
      technologies: ["OpenAI API", "Python", "RAG", "LLMs", "NLP"]
    },
    {
      title: "Full-Stack Engineering", 
      content: "Built scalable applications from 0→1, specializing in React, Node.js, and cloud platforms. Modernized legacy systems and improved performance by 40%.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      title: "Cloud & Infrastructure",
      content: "Architected observability platforms with OpenTelemetry, managed AWS deployments, and implemented CI/CD pipelines reducing deployment time by 50%.",
      technologies: ["AWS", "OpenTelemetry", "Kubernetes", "CI/CD", "Microservices"]
    }
  ]

  const flipCards = [
    {
      frontContent: {
        icon: (
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
        title: "Frontend Development",
        subtitle: "Modern UI/UX Solutions"
      },
      backContent: {
        description: "Creating immersive user experiences with cutting-edge technologies and design principles.",
        features: [
          "React & Next.js Applications", 
          "TypeScript Integration",
          "Responsive Design Systems",
          "Performance Optimization",
          "Animation & Interactions"
        ]
      }
    },
    {
      frontContent: {
        icon: (
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        ),
        title: "Backend Development", 
        subtitle: "Scalable Server Solutions"
      },
      backContent: {
        description: "Building robust, secure, and high-performance backend systems that scale.",
        features: [
          "Node.js & Python APIs",
          "Database Architecture", 
          "Microservices Design",
          "Authentication & Security",
          "Performance Monitoring"
        ]
      }
    },
    {
      frontContent: {
        icon: (
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        ),
        title: "Cloud & DevOps",
        subtitle: "Infrastructure Excellence"
      },
      backContent: {
        description: "Architecting cloud-native solutions with automated deployment and monitoring.",
        features: [
          "AWS Cloud Architecture",
          "Docker & Kubernetes",
          "CI/CD Pipelines", 
          "Infrastructure as Code",
          "Monitoring & Observability"
        ]
      }
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="about-section-modern">
      {/* Floating Background Shapes */}
      <FloatingShapes />
      
      {/* Parallax Background */}
      <motion.div 
        ref={parallaxRef}
        className="parallax-background"
        style={{ y: parallaxY }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Introduction */}
        <motion.div 
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="about-title-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypewriterText text="Passionate software engineer" delay={500} />
          </motion.div>

          <motion.p 
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            with <AnimatedCounter value={3} suffix="+" /> years of experience building scalable applications. 
            In my free time I play chess, watch NBA.
          </motion.p>
        </motion.div>

        {/* Main Content Grid - Enhanced with Tailwind responsive classes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10 items-start">
          {/* Journey Section */}
          <motion.div 
            className="about-journey-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glassmorphism-card">
              <div className="section-header">
                <h3 className="text-2xl md:text-3xl">My Journey</h3>
                <div className="section-divider" />
              </div>

              <motion.div 
                className="journey-intro"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-sm md:text-base">
                  I&apos;m a software engineer with a passion for turning complexity into clarity. 
                  I&apos;ve led projects across AI, building a RAG admissions chatbot and engineered 
                  OpenAI powered chat agents to handle customer complaints.
                </p>
                
                <AnimatePresence>
                  {readMore && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-sm md:text-base">
                        I&apos;ve worked closely with ground teams to take products from 0→1 and thrive 
                        in fast-paced, high-impact environments. My expertise spans modern 
                        technologies including React, Node.js, Python, and cloud platforms.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  className="read-more-btn"
                  onClick={() => setReadMore(!readMore)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {readMore ? 'Read Less' : 'Read More'}
                </motion.button>
              </motion.div>

              {/* Timeline Cards */}
              <div className="timeline-container">
                {timelineData.map((item, index) => (
                  <TimelineCard
                    key={index}
                    title={item.title}
                    content={item.content}
                    technologies={item.technologies}
                    isExpanded={expandedCard === index}
                    onToggle={() => setExpandedCard(expandedCard === index ? null : index)}
                    index={index}
                  />
                ))}
              </div>

              {/* Stats */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="stat-item">
                  <div className="stat-number">
                    <AnimatedCounter value={3} suffix="+" />
                  </div>
                  <div className="stat-label">
                    <span>Years Experience</span>
                    <small>Professional Development</small>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <AnimatedCounter value={30} suffix="x" />
                  </div>
                  <div className="stat-label">
                    <span>Performance Improvement</span>
                    <small>in previous role</small>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div 
            className="about-services-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="glassmorphism-card">
              <div className="section-header">
                <h3 className="text-2xl md:text-3xl">What I Do</h3>
                <div className="section-divider" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {flipCards.map((card, index) => (
                  <FlipCard
                    key={index}
                    frontContent={card.frontContent}
                    backContent={card.backContent}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}