"use client"

import { experiences } from '@/lib/data'
import { motion } from 'framer-motion'
import { Section, Container, SectionTitle, SectionSubtitle } from './ui'

/**
 * Accessible vertical timeline for experience section.
 */
export default function Experience() {
  return (
    <Section id="experience" variant="default" spacing="xl" className="experience-section-modern">
      <Container size="md">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle className="experience-title-modern">Work Experience</SectionTitle>
          <SectionSubtitle className="experience-subtitle-modern">
            My professional journey and the experiences that shaped my career in software development.
          </SectionSubtitle>
        </motion.div>
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
      </Container>
    </Section>
  )
}
