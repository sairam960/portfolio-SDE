import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding-desktop bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-50 to-transparent dark:from-purple-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="desktop-container relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Career Journey
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Work{' '}
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey and the experiences that shaped my career in software development
          </p>
        </div>

        {/* Desktop-optimized timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline line - enhanced for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 rounded-full"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-20 lg:mb-32">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl z-10 hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                </div>
              </div>
              
              {/* Content card */}
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Experience card */}
                <div className={`${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                  <div className="group bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-xl hover-lift border border-gray-100 dark:border-gray-700 animate-slide-up"
                       style={{animationDelay: `${index * 0.3}s`}}>
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {experience.position}
                        </h3>
                        <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                          {experience.company}
                        </h4>
                      </div>
                      
                      <div className="mt-4 lg:mt-0">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm font-medium">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="space-y-4 mb-8">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg group-hover/item:text-gray-900 dark:group-hover/item:text-gray-300 transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:text-purple-800 dark:hover:text-purple-200 transition-all duration-300 hover:scale-105 cursor-default"
                          style={{animationDelay: `${index * 0.3 + techIndex * 0.05}s`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Visual element */}
                <div className={`${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'} flex justify-center lg:justify-${index % 2 === 0 ? 'start' : 'end'}`}>
                  <div className="relative animate-slide-up" style={{animationDelay: `${index * 0.3 + 0.2}s`}}>
                    <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-white/10 opacity-50">
                        <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white/30 rounded-xl"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/30 rounded-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/20 rounded-2xl"></div>
                      </div>
                      
                      {/* Company initial or icon */}
                      <div className="text-6xl lg:text-7xl font-bold text-white relative z-10">
                        {experience.company.charAt(0)}
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center animate-float">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Career highlights - Desktop optimized */}
        <div className="mt-32">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400/10 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-400/10 rounded-full filter blur-xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Career Highlights
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Key achievements and milestones in my professional journey
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {[
                  { number: '3+', label: 'Years Experience', icon: '⏳' },
                  { number: '15+', label: 'Projects Completed', icon: '🚀' },
                  { number: '8+', label: 'Technologies Mastered', icon: '💻' },
                  { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center group">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl lg:text-4xl">{stat.icon}</span>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}