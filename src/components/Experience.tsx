'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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

  const itemVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 },
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
      {/* Timeline Line */}
      <div className="timeline-line">
        <div className="timeline-connector" />
        {!isLast && <div className="timeline-continuation" />}
      </div>

      {/* Timeline Dot */}
      <motion.div 
        className="timeline-dot"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="timeline-dot-inner">
          {experience.company.charAt(0)}
        </div>
      </motion.div>

      {/* Experience Card */}
      <motion.div 
        className={`experience-card ${index % 2 === 0 ? 'experience-card-left' : 'experience-card-right'}`}
        whileHover={{ 
          y: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
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

        {/* Card Decorative Elements */}
        <div className="card-decoration" />
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
        <motion.div 
          className="experience-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}