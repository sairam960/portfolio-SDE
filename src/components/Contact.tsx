'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSuccess(true)
    setIsSubmitting(false)
    
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="contact-section-enhanced">
      {/* Animated Background Elements */}
      <div className="contact-bg-elements">
        <motion.div
          className="floating-orb orb-1"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-orb orb-2"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -40, 0],
            scale: [0.8, 1.4, 1.1, 0.8],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div
          className="floating-orb orb-3"
          animate={{
            x: [0, 60, -80, 0],
            y: [0, -60, 80, 0],
            scale: [1.2, 0.9, 1.5, 1.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div 
          className="contact-header-enhanced"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="contact-title-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10">
          {/* Enhanced Contact Details */}
          <motion.div 
            className="contact-details-section-enhanced"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="glassmorphism-card-enhanced"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Gradient Border Animation */}
              <motion.div 
                className="card-gradient-border-contact"
                animate={{
                  background: [
                    'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
                    'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="section-header">
                <h3 className="text-2xl md:text-3xl">Let&apos;s Connect</h3>
                <div className="section-divider" />
              </div>

              <motion.p 
                className="contact-description"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a question or agree Max is the best driver in the grid, drop a hello.
              </motion.p>

              <div className="contact-info-list">
                <motion.div 
                  className="contact-info-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  <div className="contact-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h6>Email</h6>
                    <a href="mailto:ftjsearch@gmail.com">
                      ftjsearch@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-info-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  <div className="contact-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h6>LinkedIn</h6>
                    <a 
                      href="https://www.linkedin.com/in/sairamnathk/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/sairamnathk
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-info-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  <div className="contact-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h6>GitHub</h6>
                    <a 
                      href="https://github.com/sairam960"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      github.com/sairam960
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div 
            className="contact-form-section-enhanced"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="glassmorphism-card-enhanced form-card"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Animated Background Particles */}
              <div className="form-particles">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="form-particle"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, -10, 0],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Gradient Border Animation */}
              <motion.div 
                className="card-gradient-border-contact"
                animate={{
                  background: [
                    'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
                    'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    'linear-gradient(135deg, var(--color-accent), var(--color-secondary))',
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="section-header">
                <h3 className="text-2xl md:text-3xl">Send Message</h3>
                <div className="section-divider" />
              </div>

              <form onSubmit={handleSubmit} className="contact-form-enhanced">
                <motion.div 
                  className="form-group-enhanced"
                  initial={{ opacity: 0, y: 30, rotateX: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                >
                  <motion.div className="input-container">
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input-enhanced"
                      required
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)"
                      }}
                    />
                    <motion.label 
                      htmlFor="name" 
                      className={`form-label-floating ${formData.name ? 'active' : ''}`}
                      animate={{
                        y: formData.name ? -25 : 0,
                        scale: formData.name ? 0.85 : 1,
                        color: formData.name ? 'var(--color-primary)' : 'var(--color-gray-400)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Full Name
                    </motion.label>
                    <motion.div 
                      className="input-border-glow"
                      initial={{ scaleX: 0 }}
                      whileFocus={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="form-group-enhanced"
                  initial={{ opacity: 0, y: 30, rotateX: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                >
                  <motion.div className="input-container">
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input-enhanced"
                      required
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                      }}
                    />
                    <motion.label 
                      htmlFor="email" 
                      className={`form-label-floating ${formData.email ? 'active' : ''}`}
                      animate={{
                        y: formData.email ? -25 : 0,
                        scale: formData.email ? 0.85 : 1,
                        color: formData.email ? 'var(--color-secondary)' : 'var(--color-gray-400)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Email Address
                    </motion.label>
                    <motion.div 
                      className="input-border-glow email"
                      initial={{ scaleX: 0 }}
                      whileFocus={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="form-group-enhanced"
                  initial={{ opacity: 0, y: 30, rotateX: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 1.6, type: "spring", stiffness: 120 }}
                >
                  <motion.div className="input-container">
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input-enhanced form-textarea-enhanced"
                      required
                      rows={5}
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
                      }}
                    />
                    <motion.label 
                      htmlFor="message" 
                      className={`form-label-floating textarea ${formData.message ? 'active' : ''}`}
                      animate={{
                        y: formData.message ? -25 : 0,
                        scale: formData.message ? 0.85 : 1,
                        color: formData.message ? 'var(--color-accent)' : 'var(--color-gray-400)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Your Message
                    </motion.label>
                    <motion.div 
                      className="input-border-glow message"
                      initial={{ scaleX: 0 }}
                      whileFocus={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div className="submit-button-container">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="contact-submit-btn-enhanced"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 1.8, type: "spring", stiffness: 150 }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05,
                      boxShadow: "0 15px 35px rgba(14, 165, 233, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button Background Effects */}
                    <motion.div 
                      className="btn-gradient-bg"
                      animate={{
                        background: isSuccess 
                          ? 'linear-gradient(135deg, var(--color-green-500), var(--color-green-600))'
                          : [
                            'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                            'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
                            'linear-gradient(135deg, var(--color-accent), var(--color-primary)),
                          ]
                      }}
                      transition={{
                        duration: isSuccess ? 0.5 : 3,
                        repeat: isSuccess ? 0 : Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Button Content */}
                    <div className="btn-content">
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            className="loading-spinner-enhanced"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            Sending...
                          </motion.span>
                        </>
                      ) : isSuccess ? (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            Message Sent!
                          </motion.span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </div>
                    
                    {/* Success Particles */}
                    {isSuccess && (
                      <div className="success-particles">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="success-particle"
                            initial={{ 
                              opacity: 0,
                              scale: 0,
                              x: 0,
                              y: 0
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              x: (Math.random() - 0.5) * 100,
                              y: (Math.random() - 0.5) * 100
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}