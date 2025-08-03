'use client'

import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2)
  const { ref: statsRef, visibleItems: visibleStats } = useStaggeredAnimation(4, 150)
  return (
    <section ref={heroRef} id="home" className="position-relative vh-100 d-flex align-items-center overflow-hidden bg-gradient-professional smooth-scroll">
      {/* Enhanced background elements for desktop */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className={`position-absolute animate-float ${heroVisible ? 'animate-fade-in' : ''}`} 
             style={{top: '25%', left: '25%', width: '24rem', height: '24rem', background: 'rgba(96, 165, 250, 0.4)', borderRadius: '50%', filter: 'blur(50px)', animationDelay: '0.5s'}}></div>
        <div className={`position-absolute animate-float ${heroVisible ? 'animate-fade-in' : ''}`} 
             style={{top: '33%', right: '25%', width: '24rem', height: '24rem', background: 'rgba(168, 85, 247, 0.4)', borderRadius: '50%', filter: 'blur(50px)', animationDelay: '1s'}}></div>
        <div className={`position-absolute animate-float ${heroVisible ? 'animate-fade-in' : ''}`} 
             style={{bottom: '25%', left: '33%', width: '24rem', height: '24rem', background: 'rgba(251, 113, 133, 0.4)', borderRadius: '50%', filter: 'blur(50px)', animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Main content - optimized for landscape viewing */}
      <div className="position-relative desktop-container w-100" style={{zIndex: 10}}>
        <div className="row g-5 align-items-center" style={{minHeight: '80vh'}}>
          
          {/* Left side - Text content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className={`mb-4 ${heroVisible ? 'animate-slide-in-left' : ''}`}>
              <div className="d-inline-flex align-items-center px-4 py-2 rounded-pill bg-gradient-success text-white fw-semibold mb-4 success-glow animate-magnetic-hover">
                <span className="badge bg-success rounded-pill me-3 animate-pulse" style={{width: '12px', height: '12px'}}></span>
                <span className="d-flex align-items-center gap-2">
                  ✨ Available for new opportunities
                  <span className="text-success">•</span>
                  <span className="badge bg-success-subtle text-success-emphasis rounded-pill px-2 py-1">Open to work</span>
                </span>
              </div>
              
              <h1 className="display-1 fw-bold text-dark lh-sm">
                Hi, I&apos;m{' '}
                <span className="d-block text-gradient">
                  Sairamnath Krishnan
                </span>
              </h1>
              
              <div className="mb-4">
                <p className="fs-3 fw-semibold">
                  <span className="text-gradient-gold">Full Stack Developer</span> & 
                  <span className="text-gradient"> Software Engineer</span>
                </p>
                
                <p className="fs-5 text-secondary lh-lg" style={{maxWidth: '48rem'}}>
                  🚀 Transforming ideas into <span className="fw-semibold text-primary">powerful digital solutions</span> with 
                  modern technology and user-focused design. 
                  <br />
                  💡 Passionate about creating <span className="fw-semibold text-info">scalable applications</span> that drive business growth.
                </p>
                
                {/* Key highlights for stakeholders */}
                <div className="d-flex flex-wrap gap-2 pt-2">
                  {['3+ Years Experience', '10+ Projects Delivered', 'Full-Stack Expertise', '100% Client Satisfaction'].map((highlight, index) => (
                    <span key={highlight} className="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3 py-2 fw-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Action buttons - Desktop optimized */}
            <div className={`d-flex flex-column flex-sm-row gap-3 ${heroVisible ? 'animate-slide-in-left' : ''}`} style={{animationDelay: '0.6s'}}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary btn-lg px-5 py-3 rounded-4 fw-bold fs-5 shadow-lg premium-glow animate-magnetic-hover"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)',
                  border: 'none',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(79, 70, 229, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(79, 70, 229, 0.3)';
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
                className="btn btn-outline-success btn-lg px-5 py-3 rounded-4 fw-bold fs-5 shadow-lg success-glow animate-magnetic-hover"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  color: '#059669',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.2)';
                }}
              >
                <span className="d-flex align-items-center gap-3">
                  <span className="fs-4">💬</span>
                  <span>Let&apos;s Discuss Your Project</span>
                </span>
              </button>
            </div>
            
            {/* Social links - Desktop layout */}
            <div className="d-flex align-items-center gap-4 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <span className="small fw-medium text-muted">Follow me:</span>
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
                    className="btn btn-outline-secondary rounded-3 p-2 shadow hover-lift"
                    style={{width: '40px', height: '40px'}}
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
            <div className="position-relative animate-slide-in-right">
              {/* Main avatar container */}
              <div className="position-relative" style={{width: '20rem', height: '20rem'}}>
                {/* Rotating rings */}
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-4 border-primary border-opacity-25" style={{animation: 'spin 20s linear infinite'}}></div>
                <div className="position-absolute rounded-circle border border-4 border-info border-opacity-25" style={{top: '1rem', left: '1rem', right: '1rem', bottom: '1rem', animation: 'spin 15s linear infinite reverse'}}></div>
                
                {/* Avatar */}
                <div className="position-absolute bg-gradient-professional rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{top: '2rem', left: '2rem', right: '2rem', bottom: '2rem'}}>
                  <span className="display-2 fw-bold text-white">SK</span>
                </div>
                
                {/* Floating elements */}
                <div className="position-absolute bg-warning rounded-3 d-flex align-items-center justify-content-center shadow animate-float" style={{top: '-1rem', right: '-1rem', width: '3rem', height: '3rem'}}>
                  <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="position-absolute bg-success rounded-3 d-flex align-items-center justify-content-center shadow animate-float" style={{bottom: '-1rem', left: '-1rem', width: '3rem', height: '3rem', animationDelay: '1s'}}>
                  <svg className="text-white" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="position-absolute bg-danger rounded-3 d-flex align-items-center justify-content-center shadow animate-float" style={{top: '50%', left: '-2rem', width: '2.5rem', height: '2.5rem', animationDelay: '2s'}}>
                  <svg className="text-white" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats section for business impact */}
        <div ref={statsRef} className="mt-5">
          <h3 className={`text-center fs-5 fw-semibold text-secondary mb-4 ${visibleStats.includes(0) ? 'animate-fade-in' : ''}`}>
            📊 <span className="text-gradient">Proven Track Record</span>
          </h3>
          
          <div className="row g-4">
            {[
              { number: '3+', label: 'Years Experience', icon: '🏆', color: 'text-warning' },
              { number: '10+', label: 'Projects Delivered', icon: '🚀', color: 'text-primary' },
              { number: '15+', label: 'Technologies Mastered', icon: '⚡', color: 'text-info' },
              { number: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'text-success' }
            ].map((stat, index) => (
              <div key={stat.label} className="col-6 col-lg-3">
                <div className={`card card-premium rounded-4 p-4 text-center animate-magnetic-hover premium-glow ${
                  visibleStats.includes(index) ? 'animate-bounce-in' : ''
                }`} style={{
                  opacity: visibleStats.includes(index) ? 1 : 0,
                  transform: visibleStats.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  animationDelay: `${index * 0.1}s`
                }}>
                  <div className="fs-2 mb-2" style={{ animation: visibleStats.includes(index) ? 'float 3s ease-in-out infinite' : 'none' }}>
                    {stat.icon}
                  </div>
                  <div className={`display-6 fw-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="small text-muted fw-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Business value proposition */}
          <div className="mt-4 text-center">
            <div className="d-inline-flex align-items-center gap-3 px-4 py-3 bg-gradient-success rounded-4 border border-success border-opacity-25">
              <span className="fs-3">💡</span>
              <span className="fs-5 fw-semibold text-white">
                Ready to deliver <span className="text-warning">immediate business value</span> with proven technical expertise
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - positioned for desktop */}
      <div className={`position-absolute bottom-0 start-50 translate-middle-x d-none d-lg-block animate-magnetic-hover ${heroVisible ? 'animate-fade-in' : ''}`} 
           style={{marginBottom: '2rem', animationDelay: '1.2s'}}>
        <div className="border border-2 border-secondary rounded-pill d-flex justify-content-center cursor-pointer"
             style={{
               width: '28px', 
               height: '45px', 
               transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
               background: 'rgba(255, 255, 255, 0.1)',
               backdropFilter: 'blur(10px)'
             }}
             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
             onMouseEnter={(e) => {
               e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
               e.currentTarget.style.borderColor = '#4f46e5';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.transform = 'translateY(0) scale(1)';
               e.currentTarget.style.borderColor = '#6b7280';
             }}>
          <div className="bg-secondary rounded-pill mt-2" 
               style={{
                 width: '4px', 
                 height: '14px', 
                 animation: 'magneticPull 2s ease-in-out infinite',
                 background: 'linear-gradient(135deg, #4f46e5, #7c3aed)'
               }}></div>
        </div>
      </div>
    </section>
  )
}