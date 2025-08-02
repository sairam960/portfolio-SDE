'use client'

import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="section-padding-desktop bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="desktop-container relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Technical Expertise
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Skills &{' '}
            <span className="text-gradient bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        {/* Desktop-optimized skills grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 mb-20">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="group bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl hover-lift border border-gray-100 dark:border-gray-700 animate-slide-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Category header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {skillCategory.category === 'Frontend' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    )}
                    {skillCategory.category === 'Backend' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    )}
                    {skillCategory.category === 'Database' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    )}
                    {skillCategory.category === 'DevOps & Tools' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    )}
                  </svg>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {skillCategory.category}
                </h3>
              </div>
              
              {/* Skills list */}
              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="group/skill relative"
                    style={{animationDelay: `${index * 0.2 + skillIndex * 0.1}s`}}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-green-600 dark:group-hover/skill:text-green-400 transition-colors duration-300">
                        {skill}
                      </span>
                      
                      {/* Skill level indicator */}
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              dotIndex < 4
                                ? 'bg-green-500 group-hover/skill:scale-125'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            style={{transitionDelay: `${dotIndex * 0.1}s`}}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Animated progress bar */}
                    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out group-hover/skill:from-green-400 group-hover/skill:to-blue-400"
                        style={{
                          width: '85%',
                          transform: 'translateX(-100%)',
                          animation: `slideInRight 1s ease-out ${index * 0.2 + skillIndex * 0.1}s forwards`
                        }}
                      />
                      
                      {/* Shimmer effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover/skill:animate-shimmer"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase - Desktop layout */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Tech Stack
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The technologies I work with daily
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Docker'].map((tech, index) => (
              <div
                key={tech}
                className="group flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover-lift border border-gray-100 dark:border-gray-700 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-2xl font-bold text-white">{tech.charAt(0)}</span>
                </div>
                
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section - Enhanced for desktop */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl p-12 lg:p-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-2xl transform rotate-45"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Always Learning
              </h3>
              
              <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                I&apos;m constantly exploring new technologies and improving my skills. 
                Currently diving deeper into cloud architecture, AI/ML integration, and modern development practices.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {['AWS Certified', 'React Advanced', 'Node.js Expert', 'TypeScript Pro'].map((badge, index) => (
                  <div
                    key={badge}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="text-white font-semibold text-lg">{badge}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/sairam960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Explore My Work
                </a>
                
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Collaborate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}