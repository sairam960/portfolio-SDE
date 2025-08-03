'use client'

import { projects } from '@/lib/data'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="section-padding-desktop bg-white dark:bg-slate-900 position-relative overflow-hidden">
      {/* Background decoration */}
      <div className="position-absolute top-0 end-0 w-33 h-33 bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-900/20 rounded-circle" style={{filter: 'blur(3rem)'}}></div>
      
      <div className="desktop-container position-relative" style={{zIndex: 10}}>
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center px-4 py-3 rounded-pill bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-primary dark:text-blue-200 fw-semibold mb-4 premium-glow" style={{fontSize: '0.875rem'}}>
            <span className="bg-primary rounded-circle animate-pulse me-3" style={{width: '12px', height: '12px'}}></span>
            <span className="d-flex align-items-center gap-2">
              🏆 Featured Work
              <span className="text-primary dark:text-blue-400">•</span>
              <span className="bg-light dark:bg-blue-800 px-2 py-1 rounded-pill" style={{fontSize: '0.75rem'}}>Production Ready</span>
            </span>
          </div>
          
          <h2 className="display-2 fw-bold text-dark dark:text-white mb-4">
            Featured{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="fs-3 text-secondary dark:text-gray-400 mx-auto" style={{maxWidth: '64rem', lineHeight: '1.6'}}>
            🎨 <span className="fw-semibold text-primary dark:text-blue-400">Production-ready applications</span> that demonstrate technical expertise and business impact
            <br />
            💼 Each project showcases <span className="fw-semibold text-primary dark:text-purple-400">scalable architecture</span>, modern technologies, and user-centered design
          </p>
        </div>

        {/* Desktop-optimized grid layout */}
        <div className="row g-4 mb-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="col-lg-6 col-xl-4"
            >
              <div className="card h-100 card-premium rounded-3 overflow-hidden shadow hover-lift border border-light dark:border-gray-700 animate-slide-up premium-glow"
                   style={{animationDelay: `${index * 0.2}s`}}>
              {/* Project image/header */}
              <div className="position-relative bg-gradient-professional overflow-hidden" style={{height: '16rem'}}>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(0,0,0,0.2)'}}></div>
                
                {/* Success indicator */}
                <div className="position-absolute top-3 start-3 px-2 py-1 bg-success text-white rounded-pill fw-bold" style={{fontSize: '0.75rem'}}>
                  ✅ LIVE
                </div>
                
                {/* Project title overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center px-3">
                  <div style={{fontSize: '2.5rem'}} className="mb-3">🚀</div>
                  <h3 className="display-6 fw-bold text-white">
                    {project.title}
                  </h3>
                </div>
                
                {/* Corner decoration */}
                <div className="position-absolute top-3 end-3 d-flex align-items-center justify-content-center bg-white bg-opacity-25 rounded premium-glow" style={{width: '40px', height: '40px'}}>
                  <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="card-body p-4">
                <h3 className="card-title display-6 fw-bold text-dark dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="card-text text-secondary dark:text-gray-400 mb-4 fs-5" style={{lineHeight: '1.6'}}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-light dark:bg-blue-900/30 text-primary dark:text-blue-300 rounded-3 fw-medium"
                      style={{animationDelay: `${index * 0.2 + techIndex * 0.05}s`, fontSize: '0.875rem'}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="d-flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark d-flex align-items-center gap-2 text-decoration-none"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary d-flex align-items-center gap-2 text-decoration-none"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0" style={{background: 'linear-gradient(to right, rgba(37, 99, 235, 0.05), rgba(147, 51, 234, 0.05))', pointerEvents: 'none'}}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action - Desktop layout */}
        <div className="text-center">
          <div className="rounded-3 p-5 position-relative overflow-hidden" style={{background: 'linear-gradient(to right, #eff6ff, #faf5ff)'}}>
            {/* Background decoration */}
            <div className="position-absolute top-0 start-0 bg-primary rounded-circle" style={{width: '128px', height: '128px', opacity: 0.1, filter: 'blur(2rem)'}}></div>
            <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle" style={{width: '192px', height: '192px', opacity: 0.1, filter: 'blur(2rem)'}}></div>
            
            <div className="position-relative" style={{zIndex: 10}}>
              <h3 className="display-4 fw-bold text-dark dark:text-white mb-4">
                Want to see more of my work?
              </h3>
              
              <p className="fs-4 text-secondary dark:text-gray-400 mb-4 mx-auto" style={{maxWidth: '32rem'}}>
                Explore my complete portfolio on GitHub and discover more projects that showcase my passion for development.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a
                  href="https://github.com/sairam960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View All Projects
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn btn-outline-primary d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Collaborate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}