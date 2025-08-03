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
    <header className="navbar navbar-expand-md navbar-light bg-white bg-opacity-90 border-bottom fixed-top" style={{backdropFilter: 'blur(12px)', zIndex: 1050}}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100" style={{minHeight: '80px'}}>
          <div className="navbar-brand d-flex align-items-center gap-3">
            <div className="bg-gradient-professional rounded-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
              <span className="text-white fw-bold fs-5">SK</span>
            </div>
            <span className="fs-3 fw-bold text-gradient">
              Sairam
            </span>
          </div>
          
          <div className="d-none d-md-block">
            <div className="d-flex gap-2">
              <button
                onClick={() => scrollToSection('home')}
                className="btn btn-outline-secondary btn-sm px-3 py-2 rounded-3"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-outline-secondary btn-sm px-3 py-2 rounded-3"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="btn btn-outline-secondary btn-sm px-3 py-2 rounded-3"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="btn btn-outline-secondary btn-sm px-3 py-2 rounded-3"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline-secondary btn-sm px-3 py-2 rounded-3"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="d-md-none">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-outline-secondary p-2 rounded-3"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="d-md-none">
            <div className="navbar-collapse bg-white border-top p-3">
              <button
                onClick={() => scrollToSection('home')}
                className="btn btn-link text-secondary text-decoration-none d-block w-100 text-start p-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-link text-secondary text-decoration-none d-block w-100 text-start p-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="btn btn-link text-secondary text-decoration-none d-block w-100 text-start p-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="btn btn-link text-secondary text-decoration-none d-block w-100 text-start p-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-link text-secondary text-decoration-none d-block w-100 text-start p-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}