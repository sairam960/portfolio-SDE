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
      
          {/* Hero to About Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#0066FF', via: '#6B46C1', to: '#10B981' }} 
          />
          
          <section id="about">
            <About />
          </section>
          
          {/* About to Experience Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#6B46C1', via: '#0066FF', to: '#10B981' }} 
          />
          
          <section id="experience">
            <Experience />
          </section>
          
          {/* Experience to Skills Divider - Particles  */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#6B46C1', via: '#0066FF', to: '#10B981' }} 
          />
          
          <section id="skills">
            <Skills />
          </section>
          
          {/* Skills to Projects Divider - Particles */}
          <SectionDivider 
            variant="particles" 
            colors={{ from: '#10B981', via: '#0066FF', to: '#6B46C1' }} 
          />
          
          <section id="projects">
            <Projects />
          </section>
          
          {/* Projects to Contact Divider - Gradient Fade */}
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
    </PageTransition>
  )
}