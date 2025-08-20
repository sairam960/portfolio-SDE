'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ScrollProgress from '@/components/ScrollProgress'
import LoadingScreen from '@/components/LoadingScreen'

// Dynamic imports for heavy components to improve bundle splitting
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-20 bg-gray-800"></div>
})

const SectionDivider = dynamic(() => import('@/components/SectionDivider'), {
  loading: () => <div className="h-4"></div>
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Remove artificial delay for better performance
    setIsLoading(false)
  }, [])

  return (
    <LoadingScreen isLoading={isLoading}>
      
      {/* Scroll Progress & Navigation */}
      <ScrollProgress showSectionIndicator={true} />
      
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          <section id="home">
            <Hero />
          </section>
      
          {/* Hero to About Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#0066FF', via: '#6B46C1', to: '#10B981' }} 
          />
          
          <section id="about">
            <About />
          </section>
          
          {/* About to Skills Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#6B46C1', via: '#0066FF', to: '#10B981' }} 
          />
          
          <section id="skills">
            <Skills />
          </section>
          
          {/* Skills to Experience Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#10B981', via: '#0066FF', to: '#6B46C1' }} 
          />
          

          <section id="experience">
            <Experience />
          </section>
          
          {/* Experience to Projects Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#10B981', via: '#0066FF', to: '#6B46C1' }} 
          />
          
          <section id="projects">
            <Projects />
          </section>
          
          {/* Projects to Contact Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#6B46C1', via: '#10B981', to: '#0066FF' }} 
          />
          
          <section id="contact">
            <Contact />
          </section>
          
          {/* Contact to Footer Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#0066FF', via: '#6B46C1', to: '#10B981' }} 
          />
          
        </main>
        <Footer />
      </div>
    </LoadingScreen>
  )
}