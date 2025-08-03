'use client'

import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="section-padding-desktop bg-white dark:bg-slate-900 position-relative overflow-hidden">
      {/* Background decoration */}
      <div className="position-absolute top-0 start-0 w-33 h-33 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/20 rounded-circle" style={{filter: 'blur(3rem)'}}></div>
      
      <div className="desktop-container position-relative" style={{zIndex: 10}}>
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center px-4 py-3 rounded-pill text-success fw-semibold mb-4 success-glow" style={{fontSize: '0.875rem', background: 'linear-gradient(to right, #dcfce7, #d1fae5)'}}>
            <span className="bg-success rounded-circle animate-pulse me-3" style={{width: '12px', height: '12px'}}></span>
            <span className="d-flex align-items-center gap-2">
              💻 Core Competencies
              <span className="text-success dark:text-green-400">•</span>
              <span className="bg-light dark:bg-green-800 px-2 py-1 rounded-pill" style={{fontSize: '0.75rem'}}>Market-Ready Skills</span>
            </span>
          </div>
          
          <h2 className="display-2 fw-bold text-dark dark:text-white mb-4">
            Skills &{' '}
            <span className="text-gradient bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="fs-3 text-secondary dark:text-gray-400 mx-auto" style={{maxWidth: '64rem', lineHeight: '1.6'}}>
            🎯 <span className="fw-semibold text-success dark:text-green-400">Enterprise-grade technologies</span> and modern development practices
            <br />
            ⚡ Proven expertise in <span className="fw-semibold text-primary dark:text-blue-400">full-stack development</span> with focus on scalability and performance
          </p>
        </div>

        {/* Desktop-optimized skills grid */}
        <div className="row g-4 mb-5">
          {skills.map((skillCategory, index) => (
            <div key={skillCategory.category} className="col-lg-6 col-xl-3">
              <div className="card h-100 bg-white dark:bg-slate-800 rounded-3 p-4 shadow hover-lift border border-light dark:border-gray-700 animate-slide-up position-relative overflow-hidden"
                   style={{animationDelay: `${index * 0.2}s`}}>
              {/* Category header */}
              <div className="text-center mb-4">
                <div className="d-flex align-items-center justify-content-center mx-auto mb-4 rounded shadow" style={{width: '64px', height: '64px', background: 'linear-gradient(135deg, #10b981, #3b82f6)'}}>
                  <svg className="text-white" width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {skillCategory.category === 'Frontend' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    )}
                    {skillCategory.category === 'Backend' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    )}
                    {skillCategory.category === 'Database' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    )}
                    {skillCategory.category === 'DevOps & Tools' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    )}
                  </svg>
                </div>
                
                <h3 className="display-6 fw-bold text-dark dark:text-white">
                  {skillCategory.category}
                </h3>
              </div>
              
              {/* Skills list */}
              <div className="d-flex flex-column gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="position-relative"
                    style={{animationDelay: `${index * 0.2 + skillIndex * 0.1}s`}}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fs-5 fw-semibold text-dark dark:text-gray-300">
                        {skill}
                      </span>
                      
                      {/* Skill level indicator */}
                      <div className="d-flex gap-1">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`rounded-circle ${
                              dotIndex < 4
                                ? 'bg-success'
                                : 'bg-secondary bg-opacity-25'
                            }`}
                            style={{width: '8px', height: '8px'}}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Animated progress bar */}
                    <div className="progress" style={{height: '8px'}}>
                      <div 
                        className="progress-bar bg-gradient-to-r from-green-500 to-blue-500"
                        role="progressbar"
                        style={{
                          width: '85%',
                          animation: `slideInRight 1s ease-out ${index * 0.2 + skillIndex * 0.1}s forwards`
                        }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Hover overlay effect */}
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 pointer-events-none rounded-3"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase - Desktop layout */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <h3 className="display-4 fw-bold text-dark dark:text-white mb-3">
              My Tech Stack
            </h3>
            <p className="fs-4 text-secondary dark:text-gray-400">
              The technologies I work with daily
            </p>
          </div>
          
          <div className="row g-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Docker'].map((tech, index) => (
              <div key={tech} className="col-6 col-md-3 col-lg-auto">
                <div className="card d-flex flex-column align-items-center p-3 bg-white dark:bg-slate-800 shadow hover-lift border border-light dark:border-gray-700 animate-scale-in h-100"
                     style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="d-flex align-items-center justify-content-center mb-3 rounded" style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #10b981, #3b82f6)'}}>
                    <span className="fw-bold text-white">{tech.charAt(0)}</span>
                  </div>
                  
                  <span className="fw-semibold text-dark dark:text-gray-300 text-center" style={{fontSize: '0.875rem'}}>
                    {tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section - Enhanced for desktop */}
        <div className="text-center">
          <div className="position-relative rounded-3 p-5 overflow-hidden" style={{background: 'linear-gradient(135deg, #059669, #2563eb, #7c3aed)'}}>
            {/* Background decorations */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(0,0,0,0.1)'}}></div>
            <div className="position-absolute bg-white bg-opacity-10 rounded-circle" style={{top: '-32px', right: '-32px', width: '128px', height: '128px'}}></div>
            <div className="position-absolute bg-white bg-opacity-5 rounded-circle" style={{bottom: '-48px', left: '-48px', width: '192px', height: '192px'}}></div>
            <div className="position-absolute top-50 start-25 bg-white bg-opacity-10 rounded" style={{width: '96px', height: '96px', transform: 'rotate(45deg) translate(-50%, -50%)'}}></div>
            
            <div className="position-relative" style={{zIndex: 10}}>
              <h3 className="display-3 fw-bold text-white mb-4">
                Always Learning
              </h3>
              
              <p className="fs-4 text-white text-opacity-75 mb-5 mx-auto" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
                I&apos;m constantly exploring new technologies and improving my skills. 
                Currently diving deeper into cloud architecture, AI/ML integration, and modern development practices.
              </p>
              
              <div className="row g-3 mb-5">
                {['AWS Certified', 'React Advanced', 'Node.js Expert', 'TypeScript Pro'].map((badge, index) => (
                  <div key={badge} className="col-6 col-lg-3">
                    <div className="bg-white bg-opacity-20 border border-white border-opacity-25 rounded p-4 animate-fade-in"
                         style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="d-flex align-items-center justify-content-center bg-white bg-opacity-25 rounded mx-auto mb-3" style={{width: '40px', height: '40px'}}>
                        <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="text-white fw-semibold fs-5">{badge}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a
                  href="https://github.com/sairam960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light d-inline-flex align-items-center gap-3 text-dark px-4 py-3 fw-semibold fs-5 text-decoration-none"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Explore My Work
                </a>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn btn-outline-light d-inline-flex align-items-center gap-3 text-white px-4 py-3 fw-semibold fs-5"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Collaborate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}