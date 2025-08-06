'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion'
import { experiences } from '@/lib/data'

// Timeline Item Component
const TimelineItem: React.FC<{
  experience: typeof experiences[0]
  index: number
  isLast: boolean
}> = ({ experience, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, amount: 0.3 })

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50, 
      y: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      ref={itemRef}
      className="timeline-item"
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Gradient Timeline Line */}
      <motion.div 
        className="timeline-line-gradient"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ 
          duration: 1, 
          delay: index * 0.3,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="timeline-connector-gradient"
          animate={{
            background: [
              'linear-gradient(to bottom, #0ea5e9, #8b5cf6)',
              'linear-gradient(to bottom, #8b5cf6, #06b6d4)',
              'linear-gradient(to bottom, #06b6d4, #0ea5e9)',
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {!isLast && (
          <motion.div 
            className="timeline-continuation-gradient"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.3 + 0.5,
            }}
          />
        )}
      </motion.div>

      {/* Enhanced Timeline Dot with Company Logo Badge */}
      <motion.div 
        className="timeline-dot-enhanced"
        whileHover={{ 
          scale: 1.3,
          boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        style={{
          transitionDelay: `${index * 0.2}s`
        }}
      >
        <motion.div 
          className="timeline-dot-inner-enhanced"
          animate={{
            background: [
              'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
              'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              'linear-gradient(135deg, #06b6d4, #0ea5e9)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Company Logo Badge */}
          <motion.div 
            className="company-logo-badge"
            whileHover={{ scale: 1.1 }}
          >
            <div className="logo-backdrop" />
            <span className="company-initial">
              {experience.company.charAt(0)}
            </span>
          </motion.div>
          
          {/* Pulsing Ring Effect */}
          <motion.div
            className="pulse-ring"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Experience Card */}
      <motion.div 
        className={`experience-card-enhanced ${index % 2 === 0 ? 'experience-card-left' : 'experience-card-right'}`}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(14, 165, 233, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Gradient Border Effect */}
        <motion.div 
          className="card-gradient-border"
          animate={{
            background: [
              'linear-gradient(135deg, #0ea5e9, #8b5cf6, #06b6d4)',
              'linear-gradient(135deg, #8b5cf6, #06b6d4, #0ea5e9)',
              'linear-gradient(135deg, #06b6d4, #0ea5e9, #8b5cf6)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Card Content Wrapper */}
        <div className="card-content-wrapper">
        {/* Header */}
        <div className="experience-header">
          <div className="experience-company-info">
            <motion.h3 
              className="experience-company"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {experience.company}
            </motion.h3>
            <motion.h4 
              className="experience-position"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              {experience.position}
            </motion.h4>
            <motion.p 
              className="experience-duration"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.5 }}
            >
              {experience.duration}
            </motion.p>
          </div>

          <motion.button
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="experience-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <ul className="experience-achievements">
                {experience.description.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievementIndex}
                    className="achievement-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: achievementIndex * 0.1,
                      duration: 0.4
                    }}
                  >
                    <div className="achievement-bullet" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="experience-technologies">
                <h5 className="tech-title">Technologies Used</h5>
                <div className="tech-tags">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag-experience"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: techIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgb(14, 165, 233)",
                        color: "white"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        </div> {/* Close card-content-wrapper */}
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={sectionRef} className="experience-section-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="experience-header-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="experience-title-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Work Experience
          </motion.h2>
          
          <motion.p 
            className="experience-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My professional journey and the experiences that shaped my career in software development
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-container">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Summary Stats */}
        
      </div>
    </section>
  )
}