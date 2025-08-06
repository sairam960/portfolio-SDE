import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'
import PageTransition from '@/components/PageTransition'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <PageTransition>
      {/* Skip to Content Link for Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      {/* Scroll Progress & Navigation */}
      <ScrollProgress showSectionIndicator={true} />
      
      <div className="min-h-screen">
        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          <section id="home">
            <Hero />
          </section>
      
          {/* Hero to About Divider - Wave Pattern */}
          <SectionDivider 
            variant="wave" 
            colors={{ from: '#0ea5e9', via: '#8b5cf6', to: '#06b6d4' }} 
          />
          
          <section id="about">
            <About />
          </section>
          
          {/* About to Skills Divider - Gradient Fade */}
          <SectionDivider 
            variant="gradient" 
            colors={{ from: '#8b5cf6', via: '#06b6d4', to: '#10b981' }} 
          />
          
          <section id="skills">
            <Skills />
          </section>
          
          {/* Skills to Projects Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#06b6d4', via: '#0ea5e9', to: '#8b5cf6' }} 
          />
          
          <section id="projects">
            <Projects />
          </section>
          
          {/* Projects to Experience Divider - Wave Pattern */}
          <SectionDivider 
            variant="wave" 
            colors={{ from: '#10b981', via: '#0ea5e9', to: '#8b5cf6' }} 
          />
          
          <section id="experience">
            <Experience />
          </section>
          
          {/* Experience to Contact Divider - Gradient Fade */}
          <SectionDivider 
            variant="gradient" 
            colors={{ from: '#8b5cf6', via: '#06b6d4', to: '#0ea5e9' }} 
          />
          
          <section id="contact">
            <Contact />
          </section>
          
          {/* Contact to Footer Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#0ea5e9', via: '#8b5cf6', to: '#06b6d4' }} 
          />
          
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}