'use client'

import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2)
  const { ref: statsRef, visibleItems: visibleStats } = useStaggeredAnimation(4, 150)
  return (
    <section ref={heroRef} id="home" className="position-relative d-flex align-items-center overflow-hidden bg-gradient-elegant smooth-scroll" style={{minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px'}}>
      {/* Elegant pastel background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className={`position-absolute animate-float ${heroVisible ? 'animate-fade-in' : ''}`} 
             style={{top: '20%', left: '15%', width: '300px', height: '300px', background: 'var(--pastel-lavender-medium)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.6, animationDelay: '0.5s'}}></div>
        <div className={`position-absolute animate-float ${heroVisible ? 'animate-fade-in' : ''}`} 
             style={{top: '40%', right: '20%', width: '250px', height: '250px', background: 'var(--pastel-rose-medium)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.5, animationDelay: '1s'}}></div>
        <div className={`position-absolute animate-float ${heroVisible ? 'animate-fade-in' : ''}`} 
             style={{bottom: '30%', left: '40%', width: '200px', height: '200px', background: 'var(--pastel-mint-medium)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.4, animationDelay: '1.5s'}}></div>
        <div className={`position-absolute animate-float ${heroVisible ? 'animate-fade-in' : ''}`} 
             style={{top: '60%', right: '10%', width: '180px', height: '180px', background: 'var(--pastel-sky-medium)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.3, animationDelay: '2s'}}></div>
      </div>
      
      {/* Main content - optimized for landscape viewing */}
      <div className="position-relative desktop-container w-100" style={{zIndex: 10}}>
        <div className="row g-5 align-items-center" style={{minHeight: '80vh'}}>
          
          {/* Left side - Text content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className={`mb-4 ${heroVisible ? 'animate-slide-in-left' : ''}`}>
              <div className="d-inline-flex align-items-center px-5 py-3 rounded-pill bg-gradient-soft fw-semibold mb-4 soft-glow animate-magnetic-hover" 
                   style={{color: 'var(--text-primary)', border: '1px solid var(--pastel-mint-medium)'}}>
                <span className="rounded-pill me-3 animate-pulse" 
                      style={{width: '12px', height: '12px', background: 'var(--pastel-mint-accent)'}}></span>
                <span className="d-flex align-items-center gap-2">
                  ✨ Available for new opportunities
                  <span style={{color: 'var(--pastel-mint-accent)'}}>•</span>
                  <span className="rounded-pill px-3 py-1" 
                        style={{background: 'var(--pastel-mint-light)', color: 'var(--text-primary)', fontSize: '0.875rem'}}>
                    Open to work
                  </span>
                </span>
              </div>
              
              <h1 className="display-1 fw-bold lh-sm" style={{color: 'var(--text-primary)'}}>
                Hi, I&apos;m{' '}
                <span className="d-block text-gradient">
                  Sairamnath Krishnan
                </span>
              </h1>
              
              <div className="mb-4">
                <p className="fs-3 fw-semibold">
                  <span className="text-gradient-elegant">Full Stack Developer</span> & 
                  <span className="text-gradient-soft"> Software Engineer</span>
                </p>
                
                <p className="fs-5 lh-lg" style={{maxWidth: '48rem', color: 'var(--text-secondary)'}}>
                  🚀 Transforming ideas into <span className="fw-semibold" style={{color: 'var(--pastel-rose-accent)'}}>powerful digital solutions</span> with 
                  modern technology and user-focused design. 
                  <br />
                  💡 Passionate about creating <span className="fw-semibold" style={{color: 'var(--pastel-lavender-accent)'}}>scalable applications</span> that drive business growth.
                </p>
                
                {/* Key highlights for stakeholders */}
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {['3+ Years Experience', '10+ Projects Delivered', 'Full-Stack Expertise', '100% Client Satisfaction'].map((highlight, index) => (
                    <span key={highlight} className="rounded-pill px-4 py-2 fw-medium" 
                          style={{
                            background: 'var(--pastel-lavender-light)', 
                            color: 'var(--text-primary)',
                            border: '1px solid var(--pastel-lavender-medium)',
                            fontSize: '0.875rem'
                          }}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Action buttons - Desktop optimized */}
            <div className={`d-flex flex-column flex-sm-row gap-4 ${heroVisible ? 'animate-slide-in-left' : ''}`} style={{animationDelay: '0.6s'}}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-lg px-6 py-3 rounded-4 fw-semibold fs-5 animate-magnetic-hover"
                style={{
                  background: 'linear-gradient(135deg, var(--pastel-lavender-accent), var(--pastel-rose-accent))',
                  border: 'none',
                  color: 'white',
                  boxShadow: 'var(--shadow-medium)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-large)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
              >
                <span className="d-flex align-items-center gap-3">
                  <span className="fs-4">🎯</span>
                  <span>View My Portfolio</span>
                  <svg className="icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                       style={{ transition: 'transform 0.3s ease' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-lg px-6 py-3 rounded-4 fw-semibold fs-5 animate-magnetic-hover"
                style={{
                  background: 'var(--pastel-mint-light)',
                  border: '2px solid var(--pastel-mint-medium)',
                  color: 'var(--text-primary)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'var(--shadow-soft)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--pastel-mint-medium)';
                  e.currentTarget.style.borderColor = 'var(--pastel-mint-accent)';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--pastel-mint-light)';
                  e.currentTarget.style.borderColor = 'var(--pastel-mint-medium)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                }}
              >
                <span className="d-flex align-items-center gap-3">
                  <span className="fs-4">💬</span>
                  <span>Let&apos;s Discuss Your Project</span>
                </span>
              </button>
            </div>
            
            {/* Social links - Desktop layout */}
            <div className={`d-flex align-items-center gap-4 ${heroVisible ? 'animate-slide-in-left' : ''}`} style={{animationDelay: '0.8s'}}>
              <span className="small fw-medium" style={{color: 'var(--text-secondary)'}}>Follow me:</span>
              <div className="d-flex gap-3">
                {[
                  { href: 'https://github.com/sairam960', label: 'GitHub', icon: 'github' },
                  { href: 'https://www.linkedin.com/in/sairamnathk/', label: 'LinkedIn', icon: 'linkedin' },
                  { href: 'mailto:ftjsearch@gmail.com', label: 'Email', icon: 'email' }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="d-flex align-items-center justify-content-center rounded-3 animate-magnetic-hover"
                    style={{
                      width: '45px', 
                      height: '45px',
                      background: 'var(--pastel-lavender-light)',
                      border: '1px solid var(--pastel-lavender-medium)',
                      color: 'var(--text-primary)',
                      boxShadow: 'var(--shadow-soft)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--pastel-lavender-medium)';
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--pastel-lavender-light)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                    }}
                    aria-label={social.label}
                  >
                    {social.icon === 'github' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === 'email' && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
            <div className={`position-relative ${heroVisible ? 'animate-slide-in-right' : ''}`}>
              {/* Main avatar container */}
              <div className="position-relative" style={{width: '22rem', height: '22rem'}}>
                {/* Elegant rotating rings */}
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle" 
                     style={{
                       border: '2px solid var(--pastel-lavender-medium)', 
                       animation: 'spin 30s linear infinite',
                       opacity: 0.6
                     }}></div>
                <div className="position-absolute rounded-circle" 
                     style={{
                       top: '1.5rem', left: '1.5rem', right: '1.5rem', bottom: '1.5rem', 
                       border: '2px solid var(--pastel-rose-medium)', 
                       animation: 'spin 25s linear infinite reverse',
                       opacity: 0.4
                     }}></div>
                
                {/* Avatar */}
                <div className="position-absolute rounded-circle d-flex align-items-center justify-content-center" 
                     style={{
                       top: '3rem', left: '3rem', right: '3rem', bottom: '3rem',
                       background: 'linear-gradient(135deg, var(--pastel-lavender-accent), var(--pastel-rose-accent))',
                       boxShadow: 'var(--shadow-large)',
                       border: '3px solid white'
                     }}>
                  <span className="display-2 fw-bold text-white">SK</span>
                </div>
                
                {/* Floating elements */}
                <div className="position-absolute rounded-4 d-flex align-items-center justify-content-center animate-float" 
                     style={{
                       top: '-1rem', right: '-1rem', width: '3.5rem', height: '3.5rem',
                       background: 'var(--pastel-cream-accent)',
                       boxShadow: 'var(--shadow-medium)',
                       color: 'white'
                     }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="position-absolute rounded-4 d-flex align-items-center justify-content-center animate-float" 
                     style={{
                       bottom: '-1rem', left: '-1rem', width: '3.5rem', height: '3.5rem', 
                       animationDelay: '1s',
                       background: 'var(--pastel-mint-accent)',
                       boxShadow: 'var(--shadow-medium)',
                       color: 'white'
                     }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="position-absolute rounded-4 d-flex align-items-center justify-content-center animate-float" 
                     style={{
                       top: '50%', left: '-2rem', width: '3rem', height: '3rem', 
                       animationDelay: '2s',
                       background: 'var(--pastel-sky-accent)',
                       boxShadow: 'var(--shadow-medium)',
                       color: 'white'
                     }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats section for business impact */}
        <div ref={statsRef} className="mt-5">
          <h3 className={`text-center fs-5 fw-semibold mb-4 ${visibleStats.includes(0) ? 'animate-fade-in' : ''}`} 
              style={{color: 'var(--text-secondary)'}}>
            📊 <span className="text-gradient">Proven Track Record</span>
          </h3>
          
          <div className="row g-4">
            {[
              { number: '3+', label: 'Years Experience', icon: '🏆', gradient: 'var(--pastel-cream-accent)' },
              { number: '10+', label: 'Projects Delivered', icon: '🚀', gradient: 'var(--pastel-lavender-accent)' },
              { number: '15+', label: 'Technologies Mastered', icon: '⚡', gradient: 'var(--pastel-sky-accent)' },
              { number: '100%', label: 'Client Satisfaction', icon: '⭐', gradient: 'var(--pastel-mint-accent)' }
            ].map((stat, index) => (
              <div key={stat.label} className="col-6 col-lg-3">
                <div className={`card-elegant rounded-4 p-4 text-center animate-magnetic-hover elegant-glow ${
                  visibleStats.includes(index) ? 'animate-bounce-in' : ''
                }`} style={{
                  opacity: visibleStats.includes(index) ? 1 : 0,
                  transform: visibleStats.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  animationDelay: `${index * 0.1}s`,
                  background: `linear-gradient(145deg, white 0%, var(--pastel-lavender-light) 100%)`,
                  border: `1px solid var(--pastel-lavender-medium)`
                }}>
                  <div className="fs-2 mb-3" style={{ 
                    animation: visibleStats.includes(index) ? 'float 4s ease-in-out infinite' : 'none',
                    animationDelay: `${index * 0.5}s`
                  }}>
                    {stat.icon}
                  </div>
                  <div className="display-6 fw-bold mb-2" style={{color: stat.gradient}}>
                    {stat.number}
                  </div>
                  <div className="small fw-medium" style={{color: 'var(--text-secondary)'}}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Business value proposition */}
          <div className="mt-5 text-center">
            <div className={`d-inline-flex align-items-center gap-4 px-6 py-4 rounded-4 animate-magnetic-hover ${
              visibleStats.includes(3) ? 'animate-bounce-in' : ''
            }`} style={{
              opacity: visibleStats.includes(3) ? 1 : 0,
              transform: visibleStats.includes(3) ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animationDelay: '0.5s',
              maxWidth: '90%',
              margin: '0 auto',
              background: 'linear-gradient(135deg, var(--pastel-mint-light) 0%, var(--pastel-sky-light) 100%)',
              border: '1px solid var(--pastel-mint-medium)',
              boxShadow: 'var(--shadow-medium)'
            }}>
              <span className="fs-2">💡</span>
              <span className="fs-4 fw-semibold text-center" style={{
                lineHeight: '1.4',
                color: 'var(--text-primary)'
              }}>
                Ready to deliver <span style={{color: 'var(--pastel-rose-accent)', fontWeight: 'bold'}}>immediate business value</span> with proven technical expertise
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className={`position-absolute bottom-0 start-50 translate-middle-x d-none d-lg-block animate-magnetic-hover ${heroVisible ? 'animate-fade-in' : ''}`} 
           style={{marginBottom: '2rem', animationDelay: '1.2s'}}>
        <div className="rounded-pill d-flex justify-content-center cursor-pointer"
             style={{
               width: '32px', 
               height: '50px', 
               transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
               background: 'rgba(255, 255, 255, 0.8)',
               backdropFilter: 'blur(20px)',
               border: '2px solid var(--pastel-lavender-medium)',
               boxShadow: 'var(--shadow-soft)'
             }}
             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
             onMouseEnter={(e) => {
               e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
               e.currentTarget.style.borderColor = 'var(--pastel-lavender-accent)';
               e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.transform = 'translateY(0) scale(1)';
               e.currentTarget.style.borderColor = 'var(--pastel-lavender-medium)';
               e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
             }}>
          <div className="rounded-pill mt-3" 
               style={{
                 width: '5px', 
                 height: '16px', 
                 animation: 'magneticPull 2s ease-in-out infinite',
                 background: 'linear-gradient(135deg, var(--pastel-lavender-accent), var(--pastel-rose-accent))'
               }}></div>
        </div>
      </div>
    </section>
  )
}