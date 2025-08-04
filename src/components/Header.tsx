'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar navbar-expand-md fixed-top animate-fade-in" 
            style={{
              background: 'rgba(255, 255, 255, 0.85)', 
              backdropFilter: 'blur(20px) saturate(180%)', 
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              zIndex: 1050,
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100" style={{minHeight: '75px'}}>
          <div className="navbar-brand d-flex align-items-center gap-3 animate-magnetic-hover">
            
          </div>
          
          <div className="d-none d-md-block">
            <div className="d-flex gap-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="btn btn-ghost position-relative px-4 py-2 rounded-4 fw-medium animate-magnetic-hover"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#64748b',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)';
                    e.currentTarget.style.color = '#4f46e5';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(79, 70, 229, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="d-md-none">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn p-2 rounded-4 animate-magnetic-hover"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                   style={{ transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="d-md-none animate-slide-up">
            <div className="border-top p-4" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px) saturate(180%)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="btn w-100 text-start p-3 mb-2 rounded-4 animate-stagger"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#64748b',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)';
                    e.currentTarget.style.color = '#4f46e5';
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}