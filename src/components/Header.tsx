'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar navbar-expand-md fixed-top animate-fade-in" 
            style={{
              background: 'rgba(255, 255, 255, 0.9)', 
              backdropFilter: 'blur(25px) saturate(180%)', 
              borderBottom: '1px solid var(--pastel-lavender-medium)',
              zIndex: 1050,
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: 'var(--shadow-soft)'
            }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100" style={{minHeight: '80px'}}>
          <div className="navbar-brand d-flex align-items-center gap-3 animate-magnetic-hover">
            <div className="rounded-3 d-flex align-items-center justify-content-center" 
                 style={{
                   width: '45px', 
                   height: '45px', 
                   background: 'linear-gradient(135deg, var(--pastel-lavender-accent), var(--pastel-rose-accent))',
                   boxShadow: 'var(--shadow-soft)',
                   transition: 'all 0.3s ease'
                 }}>
              <span className="text-white fw-bold fs-4">SK</span>
            </div>
            <span className="fs-3 fw-bold text-gradient" style={{
              background: 'linear-gradient(135deg, var(--pastel-lavender-accent) 0%, var(--pastel-rose-accent) 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Sairam
            </span>
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
                  className="btn position-relative px-5 py-2 rounded-4 fw-medium animate-magnetic-hover"
                  style={{
                    background: 'var(--pastel-lavender-light)',
                    border: '1px solid var(--pastel-lavender-medium)',
                    color: 'var(--text-primary)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animationDelay: `${index * 0.1}s`,
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--pastel-lavender-medium)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--pastel-lavender-light)';
                    e.currentTarget.style.color = 'var(--text-primary)';
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
                background: 'var(--pastel-lavender-light)',
                border: '1px solid var(--pastel-lavender-medium)',
                color: 'var(--text-primary)',
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
              backdropFilter: 'blur(25px) saturate(180%)',
              borderTop: '1px solid var(--pastel-lavender-medium)',
              boxShadow: 'var(--shadow-soft)'
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
                    background: 'var(--pastel-lavender-light)',
                    border: '1px solid var(--pastel-lavender-medium)',
                    color: 'var(--text-primary)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--pastel-lavender-medium)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--pastel-lavender-light)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
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