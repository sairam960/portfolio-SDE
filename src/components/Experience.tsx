"use client"

import { experiences } from '@/lib/data'
import { motion } from 'framer-motion'

/**
 * Accessible vertical timeline for experience section.
 */
export default function Experience() {
  return (
    <section id="experience" className="experience-section-modern text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="experience-title-modern"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          Work Experience
        </motion.h2>
        <motion.p
          className="experience-subtitle-modern"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          My professional journey and the experiences that shaped my career in software development.
        </motion.p>
        <ol className="experience-timeline-modern">
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.id}
              className="experience-timeline-item"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Dot */}
              <span className="experience-timeline-dot">
                <span className="experience-timeline-dot-inner">{exp.company[0]}</span>
              </span>

              <div className="experience-card-modern">
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-position-title">
                      {exp.position} <span className="experience-company-name">· {exp.company}</span>
                    </h3>
                  </div>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <ul className="experience-description-list">
                  {exp.description.map((item, i) => (
                    <li key={i} className="experience-description-item">
                      <span className="experience-bullet-point" />
                      <span className="experience-description-text">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="experience-tech-list">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="experience-tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
