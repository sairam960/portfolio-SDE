'use client'

import { useEffect, useRef } from 'react'
import { useGSAP, useMagneticHover, useFloatingAnimation } from '../hooks/useGSAP'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useMagneticHover(0.2, 0.4)
  const avatarRef = useFloatingAnimation(6, 12)
  const { fadeIn, slideIn, scaleIn, staggerText, countUp } = useGSAP()

  useEffect(() => {
    if (!heroRef.current) return

    // Hero section animations
    fadeIn('.hero-badge', { 
      trigger: heroRef.current,
      delay: 0.2,
      duration: 0.8 
    })

    staggerText('.hero-title', {
      trigger: heroRef.current,
      delay: 0.4,
      duration: 0.6,
      stagger: 0.05
    })

    slideIn('.hero-subtitle', 'up', {
      trigger: heroRef.current,
      delay: 0.8,
      duration: 0.8
    })

    slideIn('.hero-description', 'up', {
      trigger: heroRef.current,
      delay: 1.0,
      duration: 0.6
    })

    slideIn('.hero-buttons', 'up', {
      trigger: heroRef.current,
      delay: 1.2,
      duration: 0.8
    })

    slideIn('.hero-social', 'left', {
      trigger: heroRef.current,
      delay: 1.4,
      duration: 0.6
    })

    slideIn('.hero-avatar', 'right', {
      trigger: heroRef.current,
      delay: 0.6,
      duration: 1.0
    })

    scaleIn('.hero-stats .stat-card', {
      trigger: '.hero-stats',
      start: 'top 85%',
      stagger: 0.1,
      delay: 0.2
    })

    // Counter animations
    countUp('[data-count="3"]', { 
      end: 3, 
      trigger: '.hero-stats',
      startTrigger: 'top 80%'
    })
    countUp('[data-count="10"]', { 
      end: 10, 
      trigger: '.hero-stats',
      startTrigger: 'top 80%'
    })
    countUp('[data-count="15"]', { 
      end: 15, 
      trigger: '.hero-stats',
      startTrigger: 'top 80%'
    })
    countUp('[data-count="100"]', { 
      end: 100, 
      trigger: '.hero-stats',
      startTrigger: 'top 80%'
    })

  }, [fadeIn, slideIn, scaleIn, staggerText, countUp])

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="hero-section section bg-gradient-primary gpu-scroll"
      style={{ paddingTop: '120px', paddingBottom: '80px' }}
    >
      {/* Floating Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}>
        {/* Cosmic Nebula Effects */}
        <div className="position-absolute micro-float" 
             style={{
               top: '20%', 
               left: '10%', 
               width: '250px', 
               height: '250px',
               background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(124, 58, 237, 0.2) 30%, transparent 70%)',
               borderRadius: '50%',
               filter: 'blur(60px)',
               opacity: 0.6
             }}></div>
        <div className="position-absolute micro-float" 
             style={{
               top: '60%', 
               right: '15%', 
               width: '180px', 
               height: '180px',
               background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(14, 165, 233, 0.3) 30%, transparent 70%)',
               borderRadius: '50%',
               filter: 'blur(45px)',
               opacity: 0.5,
               animationDelay: '2s'
             }}></div>
        <div className="position-absolute micro-float" 
             style={{
               bottom: '20%', 
               left: '20%', 
               width: '140px', 
               height: '140px',
               background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(251, 191, 36, 0.2) 30%, transparent 70%)',
               borderRadius: '50%',
               filter: 'blur(35px)',
               opacity: 0.4,
               animationDelay: '4s'
             }}></div>
        {/* Additional Starlight Effects */}
        <div className="position-absolute micro-float" 
             style={{
               top: '10%', 
               right: '30%', 
               width: '80px', 
               height: '80px',
               background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 60%)',
               borderRadius: '50%',
               filter: 'blur(25px)',
               opacity: 0.7,
               animationDelay: '1s'
             }}></div>
        <div className="position-absolute micro-float" 
             style={{
               bottom: '40%', 
               right: '10%', 
               width: '100px', 
               height: '100px',
               background: 'radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, transparent 60%)',
               borderRadius: '50%',
               filter: 'blur(30px)',
               opacity: 0.5,
               animationDelay: '3s'
             }}></div>
      </div>

      <div className="container-fluid-modern position-relative" style={{ zIndex: 10 }}>
        <div className="row align-items-center min-vh-100">
          
          {/* Left Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            
            {/* Status Badge */}
            <div className="hero-badge gsap-fade-in mb-4">
              <div className="d-inline-flex align-items-center px-4 py-2 rounded-pill card-glass neon-primary">
                <span className="me-2" style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--brand-success)',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'pulse 2s ease-in-out infinite'
                }}></span>
                <span className="fw-semibold" style={{ color: 'var(--text-primary)' }}>
                  ✨ Let&apos;s Connect
                </span>
                <span className="ms-2 px-2 py-1 rounded-pill text-gradient-accent fw-medium">
                  Let&apos;s ship products together!
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="hero-title gsap-fade-in mb-4">
              <h1 ref={titleRef} className="display-1 fw-bold lh-1 mb-3" style={{ color: 'var(--text-primary)' }}>
                Hi, I&apos;m{' '}
                <span className="text-gradient-primary d-block">
                  Sairamnath Krishnan
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="hero-subtitle gsap-slide-up mb-4">
              <p className="fs-2 fw-semibold">
                <span className="text-gradient-accent">Software Engineer</span>
              </p>
            </div>

            {/* Description */}
            <div className="hero-description gsap-slide-up mb-4">
              <p className="fs-5 lh-lg mb-4" style={{ 
                maxWidth: '600px', 
                color: 'var(--text-secondary)' 
              }}>
                🚀 Transforming ideas into{' '}
                <span className="fw-semibold text-gradient-primary">powerful digital solutions</span>{' '}
                with modern technology and user-focused design.
                <br />
                💡 Passionate about creating{' '}
                <span className="fw-semibold text-gradient-accent">scalable applications</span>{' '}
                that drive business growth.
              </p>

              {/* Tags */}
              <div className="d-flex flex-wrap gap-2">
                {['3+ Years Experience', 'Founding Member', 'Full-Stack Expertise', 'AI Engineer'].map((tag, index) => (
                  <span 
                    key={tag}
                    className="badge rounded-pill px-3 py-2 card-glass fw-medium"
                    style={{ 
                      color: 'var(--text-primary)',
                      fontSize: '0.875rem'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-buttons gsap-slide-up mb-5">
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-modern btn-primary-modern neon-primary micro-bounce"
                  style={{ fontSize: '1.1rem' }}
                >
                  <span>🎯</span>
                  <span>My Portfolio</span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-modern btn-secondary-modern neon-secondary micro-bounce"
                  style={{ fontSize: '1.1rem' }}
                >
                  <span>💬</span>
                  <span>Let&apos;s chat</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="hero-social gsap-slide-left">
              <div className="d-flex align-items-center gap-3">
                <span className="small fw-medium" style={{ color: 'var(--text-secondary)' }}>
                  Follow me:
                </span>
                <div className="d-flex gap-2">
                  {[
                    { href: 'https://github.com/sairam960', label: 'GitHub', icon: 'github' },
                    { href: 'https://www.linkedin.com/in/sairamnathk/', label: 'LinkedIn', icon: 'linkedin' },
                    { href: 'mailto:ftjsearch@gmail.com', label: 'Email', icon: 'email' }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="d-flex align-items-center justify-content-center card-glass social-link interactive-element"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        color: 'var(--text-primary)'
                      }}
                      aria-label={social.label}
                    >
                      {social.icon === 'github' && (
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                      {social.icon === 'linkedin' && (
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {social.icon === 'email' && (
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
            <div className="hero-avatar gsap-slide-right position-relative">
              
              {/* Main Avatar */}
              <div ref={avatarRef} className="position-relative" style={{ width: '300px', height: '300px' }}>
                
                {/* Cosmic Orbital Rings */}
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                     style={{
                       border: '2px solid var(--cosmic-purple-accent)',
                       opacity: 0.4,
                       animation: 'spin 20s linear infinite',
                       boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                     }}></div>
                <div className="position-absolute rounded-circle"
                     style={{
                       top: '20px', left: '20px', right: '20px', bottom: '20px',
                       border: '2px solid var(--nebula-blue-accent)',
                       opacity: 0.3,
                       animation: 'spin 15s linear infinite reverse',
                       boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
                     }}></div>
                <div className="position-absolute rounded-circle"
                     style={{
                       top: '40px', left: '40px', right: '40px', bottom: '40px',
                       border: '1px solid var(--brand-accent)',
                       opacity: 0.2,
                       animation: 'spin 25s linear infinite',
                       boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
                     }}></div>

                {/* Avatar Circle - Cosmic Core */}
                <div className="position-absolute rounded-circle d-flex align-items-center justify-content-center card-glass neon-accent"
                     style={{
                       top: '50px', left: '50px', right: '50px', bottom: '50px',
                       background: 'linear-gradient(135deg, var(--cosmic-purple), var(--nebula-blue-light), var(--brand-accent))',
                       boxShadow: 'var(--shadow-xl), 0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(6, 182, 212, 0.2)'
                     }}>
                  <span className="display-1 fw-bold" style={{ 
                    color: 'var(--text-primary)',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                  }}>SK</span>
                </div>

                {/* Floating Icons */}
                <div className="position-absolute rounded-4 d-flex align-items-center justify-content-center card-glass micro-float interactive-element neon-success"
                     style={{
                       top: '-10px', right: '-10px',
                       width: '50px', height: '50px',
                       background: 'var(--brand-accent)',
                       color: 'white'
                     }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="position-absolute rounded-4 d-flex align-items-center justify-content-center card-glass micro-float interactive-element neon-success"
                     style={{
                       bottom: '-10px', left: '-10px',
                       width: '50px', height: '50px',
                       background: 'var(--brand-success)',
                       color: 'white',
                       animationDelay: '1s'
                     }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="position-absolute rounded-4 d-flex align-items-center justify-content-center card-glass micro-float interactive-element neon-success"
                     style={{
                       top: '50%', left: '-25px',
                       width: '40px', height: '40px',
                       background: 'var(--brand-secondary)',
                       color: 'white',
                       animationDelay: '2s'
                     }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="hero-stats mt-5 pt-5">
          <h3 className="text-center fs-5 fw-semibold mb-4 text-gradient-primary">
            📊 Proven Track Record
          </h3>
          
          <div className="row g-4">
            {[
              { number: 3, label: 'Years Experience', icon: '🏆', color: 'var(--brand-accent)' },
              { number: 10, label: 'Projects Delivered', icon: '🚀', color: 'var(--brand-primary)' },
              { number: 15, label: 'Technologies Mastered', icon: '⚡', color: 'var(--brand-success)' },
              { number: 100, label: 'Client Satisfaction', icon: '⭐', color: 'var(--brand-secondary)' }
            ].map((stat, index) => (
              <div key={stat.label} className="col-6 col-lg-3">
                <div className="stat-card card-modern neon-hover interactive-element p-4 text-center h-100">
                  <div className="fs-1 mb-3 micro-float">{stat.icon}</div>
                  <div className="display-5 fw-bold mb-2" style={{ color: stat.color }}>
                    <span data-count={stat.number}>{stat.number}</span>
                    {stat.label.includes('Satisfaction') ? '%' : '+'}
                  </div>
                  <div className="small fw-medium" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-5">
            <div className="d-inline-flex align-items-center gap-3 px-5 py-3 card-glass neon-hover rounded-4">
              <span className="fs-2">💡</span>
              <span className="fs-4 fw-semibold" style={{ color: 'var(--text-primary)' }}>
                Ready to deliver{' '}
                <span className="text-gradient-primary fw-bold">immediate business value</span>{' '}
                with proven technical expertise
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-none d-lg-block">
        <div 
          className="card-glass rounded-pill d-flex justify-content-center cursor-pointer interactive-element"
          style={{ width: '30px', height: '50px' }}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="rounded-pill mt-3"
               style={{
                 width: '4px',
                 height: '16px',
                 background: 'linear-gradient(var(--brand-primary), var(--brand-secondary))',
                 animation: 'pulse 2s ease-in-out infinite'
               }}></div>
        </div>
      </div>
    </section>
  )
}

// Add missing keyframes
const style = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }
`

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = style
  document.head.appendChild(styleSheet)
}