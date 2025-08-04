'use client'
 import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="hero-clean">
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="fade-in-up">
              <h1 className="hero-title">
                Hi, I&apos;m <span style={{ color: 'var(--primary-color)' }}>Sai Krishnan</span>
              </h1>
              <p className="hero-subtitle">
                Full-Stack Software Engineer passionate about building scalable applications 
                and delivering exceptional user experiences with modern technologies.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a 
                  href="#projects" 
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('projects')
                    if (element) {
                      const headerOffset = 100
                      const elementPosition = element.offsetTop
                      const offsetPosition = elementPosition - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn-outline"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('contact')
                    if (element) {
                      const headerOffset = 100
                      const elementPosition = element.offsetTop
                      const offsetPosition = elementPosition - headerOffset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                  }}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 text-center">
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Portfolio Image */}
              <div className="mx-auto mb-4"
                style={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                display: 'flex',
                alignItems: 'center',
                boxShadow: 'var(--shadow-xl)',
                overflow: 'hidden',
                border: '4px solid white'
              }}>         

                <Image
                  src="/portfolio-SDE/images/DSC_6481.jpg"
                  alt="Sai"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                  style={{ objectFit: 'cover' }}
                />

              </div>
              
              {/* Social Links */}
              <div className="d-flex justify-content-center gap-3">
                {[
                  { 
                    href: 'https://github.com/sairam960', 
                    label: 'GitHub',
                    icon: (
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )
                  },
                  { 
                    href: 'https://www.linkedin.com/in/sairamnathk/', 
                    label: 'LinkedIn',
                    icon: (
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  },
                  { 
                    href: 'mailto:ftjsearch@gmail.com', 
                    label: 'Email',
                    icon: (
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'var(--gray-100)',
                      borderRadius: '50%',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'all var(--transition-base)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-color)'
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--gray-100)'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}