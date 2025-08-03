import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-primary gpu-accelerated">
      <ParticleBackground 
        particleCount={60}
        maxDistance={120}
        repelStrength={0.4}
        colors={['#8b5cf6', '#06b6d4', '#f59e0b', '#6366f1', '#14b8a6', '#ffffff']}
      />
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}