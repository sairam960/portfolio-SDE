'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'gradient' | 'particles'
  colors?: {
    from: string
    via?: string
    to: string
  }
}

export default function SectionDivider({ 
  variant = 'wave', 
  colors = { from: 'var(--color-primary)', via: 'var(--color-secondary)', to: 'var(--color-accent)' }
}: SectionDividerProps) {
  const dividerRef = useRef(null)
  const isInView = useInView(dividerRef, { once: true, amount: 0.3 })

  if (variant === 'wave') {
    return (
      <div className="section-divider-container" ref={dividerRef}>
        <motion.div
          className="wave-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Animated Wave Pattern */}
          <svg
            className="wave-svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={colors.from} stopOpacity="0.8" />
                {colors.via && (
                  <stop offset="50%" stopColor={colors.via} stopOpacity="0.6" />
                )}
                <stop offset="100%" stopColor={colors.to} stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Multiple Wave Layers */}
            <motion.path
              d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M0,80 C300,40 600,120 900,80 C1050,50 1150,100 1200,80 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              opacity="0.7"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2.5, delay: 0.8 }}
            />
            <motion.path
              d="M0,100 C300,60 600,140 900,100 C1050,70 1150,120 1200,100 L1200,120 L0,120 Z"
              fill="url(#waveGradient)"
              opacity="0.5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 3, delay: 1.1 }}
            />
          </svg>

          {/* Wave Animation */}
          <motion.div
            className="wave-animation"
            animate={{
              x: [0, 100, -100, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className="section-divider-container" ref={dividerRef}>
        <motion.div
          className="gradient-divider"
          initial={{ opacity: 0, height: 0 }}
          animate={isInView ? { opacity: 1, height: 'auto' } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Gradient Fade Line */}
          <motion.div
            className="gradient-line"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${colors.from} 25%, ${colors.via || colors.to} 50%, ${colors.to} 75%, transparent 100%)`
            }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          {/* Blur Mask Effect */}
          <motion.div
            className="blur-mask-top"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          <motion.div
            className="blur-mask-bottom"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </motion.div>
      </div>
    )
  }

  if (variant === 'particles') {
    return (
      <div className="section-divider-container" ref={dividerRef}>
        <motion.div
          className="particles-divider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Floating Particles */}
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="divider-particle"
                style={{
                  left: `${(i / 20) * 100}%`,
                  backgroundColor: i % 3 === 0 ? colors.from : i % 3 === 1 ? colors.via || colors.to : colors.to
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  y: Math.random() * 20 - 10
                }}
                animate={isInView ? {
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  y: [0, -30, -60]
                } : {}}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
          
          {/* Central Gradient Line */}
          <motion.div
            className="particles-gradient-line"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${colors.from}33 25%, ${colors.via || colors.to}66 50%, ${colors.to}33 75%, transparent 100%)`
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    )
  }

  return null
}