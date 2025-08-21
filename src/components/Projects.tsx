'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView, useAnimation, useScroll, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/data'
import { Button, Card, Section, Container, SectionTitle, SectionSubtitle } from './ui'

// Enhanced project type with additional features
interface ProjectCardProps {
  project: typeof projects[0]
  index: number
  onOpenModal: (project: typeof projects[0]) => void
  isLoading: boolean
}

// Skeleton Loader Component
const ProjectSkeleton = () => (
  <div className="project-skeleton">
    <div className="skeleton-image"></div>
    <div className="skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-description"></div>
      <div className="skeleton-tech">
        <div className="skeleton-badge"></div>
        <div className="skeleton-badge"></div>
        <div className="skeleton-badge"></div>
      </div>
    </div>
  </div>
)

// Project Card Component with Glassmorphism and Performance Optimization
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenModal, isLoading }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    if (!showParticles) {
      setShowParticles(true) // Enable particles only after first hover
    }
  }, [showParticles])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  if (isLoading) {
    return <ProjectSkeleton />
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={`project-card-advanced ${index % 2 === 0 ? 'project-card-large' : 'project-card-small'}`}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50,
        transition: { 
          duration: 0.4,
          type: "spring",
          stiffness: 200
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(project)}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Advanced Spotlight Effect */}
      <motion.div 
        className="spotlight-effect-advanced"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.25), rgba(139, 92, 246, 0.15) 40%, transparent 70%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Prismatic Rainbow Gradient Overlay */}
      <motion.div 
        className="prismatic-overlay"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 0.15,
          background: `conic-gradient(from ${mousePosition.x}deg at ${mousePosition.x}% ${mousePosition.y}%, 
            var(--color-pink-500), var(--color-orange-500), var(--color-yellow-400), var(--color-purple-600), var(--color-blue-500), var(--color-green-400), var(--color-pink-500))`
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glass Background with Enhanced Gradient */}
      <div className="card-glass-bg-advanced" />
      
      {/* Floating Particles Effect - Performance Optimized */}
      {showParticles && isHovered && (
        <AnimatePresence>
          <motion.div className="floating-particles">
            {[...Array(3)].map((_, i) => ( // Reduced from 4 to 3 particles
              <motion.div
                key={i}
                className="particle"
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: mousePosition.x,
                  y: mousePosition.y
                }}
                animate={{
                  opacity: [0, 0.4, 0], // Reduced opacity for better performance
                  scale: [0, 0.8, 0], // Reduced scale for better performance
                  x: mousePosition.x + (Math.random() - 0.5) * 150, // Reduced range
                  y: mousePosition.y + (Math.random() - 0.5) * 150 // Reduced range
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.5, // Shorter duration
                  delay: i * 0.15,
                  repeat: 2, // Limited repeats instead of infinite
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
      
      {/* Image Section */}
      <div className="project-image-container">
        {project.imageUrl ? (
          <>
            {!imageLoaded && (
              <div className="image-placeholder">
                <div className="loading-spinner"></div>
              </div>
            )}
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`project-image-modern ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
              onLoad={() => setImageLoaded(true)}
              style={{ objectFit: 'cover' }}
            />
            {/* Image Overlay */}
            <div className="image-overlay" />
          </>
        ) : (
          <div className="placeholder-container">
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Advanced Hover Details Overlay */}
        <motion.div 
          className="hover-details-advanced"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20
            }
          }}
        >
          <motion.div 
            className="hover-content-advanced"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.1, duration: 0.3 }
            }}
          >
            <motion.div
              className="hover-icon"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.div>
            <h4>Explore Project</h4>
            <p>Click to view details & live demo</p>
            <motion.div 
              className="hover-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="project-content-modern">
        <motion.h3 
          className="project-title-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="project-description-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <motion.div 
          className="project-tech-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="tech-badge-modern"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-more">+{project.technologies.length - 3}</span>
          )}
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="project-links-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {project.liveUrl && project.liveUrl !== '#' && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-modern"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-modern"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Project Modal Component
const ProjectModal: React.FC<{
  project: typeof projects[0] | null
  isOpen: boolean
  onClose: () => void
}> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  // For demo purposes, create multiple images (in real app, these would come from project data)
  const projectImages = [
    project.imageUrl,
    project.imageUrl, // In real app, these would be different images
    project.imageUrl
  ].filter(Boolean) as string[]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="modal-close" onClick={onClose}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Carousel */}
            <div className="modal-image-section">
              {projectImages.length > 0 && (
                <div className="image-carousel">
                  <div className="carousel-container">
                    {projectImages.map((img, index) => (
                      <div
                        key={index}
                        className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {projectImages.length > 1 && (
                    <div className="carousel-dots">
                      {projectImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="modal-info-section">
              <h2>{project.title}</h2>
              <p className="modal-description">{project.description}</p>
              
              <div className="modal-tech-section">
                <h4>Technologies Used</h4>
                <div className="modal-tech-grid">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="modal-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-primary"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-secondary"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Main Projects Component
export default function Projects() {
  const [selectedTech, setSelectedTech] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Get all unique technologies
  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies))]

  // Filter projects based on technology
  useEffect(() => {
    let filtered = projects

    if (selectedTech !== 'All') {
      filtered = filtered.filter(project =>
        project.technologies.includes(selectedTech)
      )
    }

    setFilteredProjects(filtered)
  }, [selectedTech])


  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <Section 
      id="projects" 
      ref={sectionRef} 
      variant="gradient" 
      spacing="xl"
      background
      className="projects-section-modern"
    >
      <Container size="xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle className="projects-title">Featured Projects</SectionTitle>
          <SectionSubtitle className="projects-subtitle">
            A showcase of my technical expertise and creative problem-solving abilities
          </SectionSubtitle>
        </motion.div>

        {/* Technology Filter Bar */}
        <motion.div 
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Technology Filter */}
          <div className="tech-filter">
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant="filter"
                size="sm"
                isActive={selectedTech === tech}
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={openModal}
                isLoading={isLoading}
              />
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && !isLoading && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.64-6.71-3.58M6.343 6.343A8 8 0 1021.657 21.657 8 8 0 006.343 6.343z" />
              </svg>
              <h3>No projects found</h3>
              <p>Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </motion.div>

        {/* View All Projects Button */}
        {!isLoading && filteredProjects.length > 0 && (
          <motion.div 
            className="projects-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://github.com/sairam960"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span>Explore All Projects</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </Container>
    </Section>
  )
}