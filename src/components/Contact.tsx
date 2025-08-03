'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
    
    console.log('Form submitted:', formData)
    setIsSuccess(true)
    setIsSubmitting(false)
    
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding-desktop bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 position-relative overflow-hidden">
      {/* Background decoration */}
      <div className="position-absolute top-0 end-0 w-33 h-33 bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-900/20 rounded-circle" style={{filter: 'blur(3rem)'}}></div>
      
      <div className="desktop-container position-relative" style={{zIndex: 10}}>
        <div className="text-center mb-5 animate-fade-in">
          <div className="d-inline-flex align-items-center px-4 py-2 rounded-pill bg-light dark:bg-blue-900/30 text-primary dark:text-blue-200 fw-medium mb-4" style={{fontSize: '0.875rem'}}>
            <span className="bg-primary rounded-circle animate-pulse me-2" style={{width: '8px', height: '8px'}}></span>
            Let&apos;s Connect
          </div>
          
          <h2 className="display-2 fw-bold text-dark dark:text-white mb-4">
            Get In{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="fs-3 text-secondary dark:text-gray-400 mx-auto" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-6 animate-slide-in-left">
            <h3 className="display-4 fw-bold text-dark dark:text-white mb-4">
              Let&apos;s Connect
            </h3>
            
            <div className="d-flex flex-column gap-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  value: 'ftjsearch@gmail.com',
                  href: 'mailto:ftjsearch@gmail.com'
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Phone',
                  value: '+1 (240) 906-2323',
                  href: 'tel:+12409062323'
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Location',
                  value: 'College Park, MD'
                }
              ].map((item, index) => (
                <div key={item.title} className="group d-flex align-items-center animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="d-flex align-items-center justify-content-center me-4 shadow rounded-3" style={{width: '48px', height: '48px', background: 'linear-gradient(to right, #2563eb, #9333ea)'}}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="fs-5 fw-semibold text-dark dark:text-white mb-1">{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-secondary dark:text-gray-400 text-decoration-none"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-secondary dark:text-gray-400">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-5 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <h4 className="fs-5 fw-semibold text-dark dark:text-white mb-3">Follow Me</h4>
              <div className="d-flex gap-3">
                {[
                  { href: 'https://github.com/sairam960', label: 'GitHub', icon: 'github' },
                  { href: 'https://www.linkedin.com/in/sairamnathk/', label: 'LinkedIn', icon: 'linkedin' },
                  { href: 'mailto:ftjsearch@gmail.com', label: 'Email', icon: 'twitter' }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group d-flex align-items-center justify-content-center bg-light dark:bg-slate-700 rounded text-secondary dark:text-gray-400 text-decoration-none"
                    style={{width: '40px', height: '40px', animationDelay: `${index * 0.05}s`}}
                    aria-label={social.label}
                  >
                    {social.icon === 'github' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
              <div>
                <label htmlFor="name" className="form-label fw-semibold text-dark dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control border-2 rounded-3 bg-white dark:bg-slate-800 text-dark dark:text-white"
                  style={{padding: '1rem 1.5rem'}}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label fw-semibold text-dark dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control border-2 rounded-3 bg-white dark:bg-slate-800 text-dark dark:text-white"
                  style={{padding: '1rem 1.5rem'}}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label fw-semibold text-dark dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control border-2 rounded-3 bg-white dark:bg-slate-800 text-dark dark:text-white"
                  style={{padding: '1rem 1.5rem', resize: 'none'}}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-100 position-relative overflow-hidden rounded-4 fw-bold py-4 border-0 animate-magnetic-hover"
                style={{
                  background: isSuccess 
                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                    : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)',
                  color: 'white',
                  fontSize: '1.1rem',
                  opacity: isSubmitting ? 0.8 : 1, 
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: isSuccess 
                    ? '0 10px 30px rgba(16, 185, 129, 0.3)' 
                    : '0 10px 30px rgba(79, 70, 229, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = isSuccess 
                      ? '0 20px 50px rgba(16, 185, 129, 0.4)' 
                      : '0 20px 50px rgba(79, 70, 229, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = isSuccess 
                      ? '0 10px 30px rgba(16, 185, 129, 0.3)' 
                      : '0 10px 30px rgba(79, 70, 229, 0.3)';
                  }
                }}
              >
                <span className={`position-relative d-flex align-items-center justify-content-center gap-3 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`} style={{zIndex: 10}}>
                  {isSuccess ? (
                    <>
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent Successfully!</span>
                      <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                        animation: 'shimmer 2s ease-in-out infinite'
                      }}></div>
                    </>
                  ) : (
                    <>
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                           style={{ transition: 'transform 0.3s ease' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Send Message</span>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
                
                {isSubmitting && (
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center gap-3">
                      <div className="spinner-border text-white" role="status" style={{width: '1.5rem', height: '1.5rem'}}>
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <span className="text-white fw-semibold">Sending...</span>
                    </div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-5 text-center animate-fade-in">
          <div className="rounded-3 p-5" style={{background: 'linear-gradient(to right, #f9fafb, #eff6ff)'}}>
            <h3 className="display-4 fw-bold text-dark dark:text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="fs-4 text-secondary dark:text-gray-400 mb-4">
              Let&apos;s discuss your ideas and bring them to life together.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center">
              <a
                href="mailto:ftjsearch@gmail.com"
                className="d-inline-flex align-items-center justify-content-center gap-3 text-decoration-none px-6 py-4 rounded-4 fw-bold animate-magnetic-hover"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(79, 70, 229, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(79, 70, 229, 0.3)';
                }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Me</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sairamnathk/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center gap-3 text-decoration-none px-6 py-4 rounded-4 fw-bold animate-magnetic-hover"
                style={{
                  background: 'rgba(79, 70, 229, 0.1)',
                  border: '2px solid rgba(79, 70, 229, 0.3)',
                  color: '#4f46e5',
                  fontSize: '1rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(79, 70, 229, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(79, 70, 229, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(79, 70, 229, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}