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
    <section id="contact" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Let&apos;s Connect
            </h3>
            
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email',
                  value: 'ftjsearch@gmail.com',
                  href: 'mailto:ftjsearch@gmail.com'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Phone',
                  value: '+1 (240) 906-2323',
                  href: 'tel:+12409062323'
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Location',
                  value: 'College Park, MD'
                }
              ].map((item, index) => (
                <div key={item.title} className="group flex items-center animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
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
                    className="group w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={social.label}
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    {social.icon === 'github' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white resize-none transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className={`relative z-10 flex items-center justify-center gap-2 transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  {isSuccess ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </span>
                
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let&apos;s discuss your ideas and bring them to life together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ftjsearch@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/sairamnathk/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}