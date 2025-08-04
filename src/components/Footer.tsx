'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section" style={{
      backgroundColor: 'var(--gray-900)',
      color: 'white'
    }}>
      <div className="container-custom">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div 
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: 'var(--border-radius)',
                  color: 'white'
                }}
              >
                <span className="fw-bold fs-4">SK</span>
              </div>
              <div>
                <h5 className="text-white fw-bold mb-0">Sairamnath Krishnan</h5>
                <p className="text-light mb-0" style={{ opacity: 0.7 }}>Full Stack Developer</p>
              </div>
            </div>
            <p className="text-light mb-4" style={{ opacity: 0.7, lineHeight: '1.6' }}>
              Passionate about creating innovative digital solutions that drive business growth 
              and deliver exceptional user experiences.
            </p>
            
            {/* Social Links */}
            <div className="d-flex gap-3">
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
                  className="d-flex align-items-center justify-content-center text-white text-decoration-none"
                  style={{
                    width: '40px', 
                    height: '40px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--border-radius)',
                    transition: 'all var(--transition-base)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
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

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-semibold mb-3">Quick Links</h6>
            <div className="d-flex flex-column gap-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-light text-decoration-none"
                  style={{ 
                    opacity: 0.7,
                    transition: 'all var(--transition-base)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1'
                    e.currentTarget.style.paddingLeft = '8px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.7'
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-semibold mb-3">Contact Info</h6>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: 'var(--primary-color)', 
                    borderRadius: 'var(--border-radius)'
                  }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-light" style={{ opacity: 0.7 }}>ftjsearch@gmail.com</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: 'var(--primary-color)', 
                    borderRadius: 'var(--border-radius)'
                  }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-light" style={{ opacity: 0.7 }}>College Park, MD</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="col-lg-3">
            <h6 className="text-white fw-semibold mb-3">Technologies</h6>
            <div className="d-flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded text-light"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fontSize: '0.75rem',
                    opacity: 0.7
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-light my-4" style={{ opacity: 0.3 }} />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0" style={{ opacity: 0.7 }}>
              © {currentYear} Sairamnath Krishnan. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light mb-0" style={{ opacity: 0.7 }}>
              Built with Next.js & Clean Design
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}