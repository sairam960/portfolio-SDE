'use client'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Enhanced background elements for desktop */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern for desktop */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Main content - optimized for landscape viewing */}
      <div className="relative z-10 desktop-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center min-h-[80vh]">
          
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Available for work
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I&apos;m{' '}
                <span className="block text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Sairamnath Krishnan
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Full Stack Developer & Software Engineer
              </p>
              
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                I craft modern web applications with clean code and user-centered design. 
                Passionate about creating scalable solutions that make a difference.
              </p>
            </div>
            
            {/* Action buttons - Desktop optimized */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{animationDelay: '0.3s'}}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Talk
                </span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
            
            {/* Social links - Desktop layout */}
            <div className="flex items-center gap-6 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Follow me:</span>
              <div className="flex space-x-4">
                {[
                  { href: 'https://github.com/sairam960', label: 'GitHub', icon: 'github' },
                  { href: 'https://www.linkedin.com/in/sairamnathk/', label: 'LinkedIn', icon: 'linkedin' },
                  { href: 'mailto:ftjsearch@gmail.com', label: 'Email', icon: 'email' }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                    aria-label={social.label}
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
                    {social.icon === 'email' && (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Visual element */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-slide-in-right">
              {/* Main avatar container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating rings */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-800 animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-4 rounded-full border-4 border-purple-200 dark:border-purple-800 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                
                {/* Avatar */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-500">
                  <span className="text-6xl lg:text-7xl font-bold text-white">SK</span>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300" style={{animationDelay: '1s'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300" style={{animationDelay: '2s'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section - Desktop layout */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in" style={{animationDelay: '0.9s'}}>
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Completed' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator - positioned for desktop */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center cursor-pointer hover:border-blue-500 transition-colors duration-300"
             onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}