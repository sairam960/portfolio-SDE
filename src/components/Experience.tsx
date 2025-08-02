import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-scale-in"
                   style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <div className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 card-hover animate-slide-${index % 2 === 0 ? 'in-left' : 'in-right'}`}
                     style={{animationDelay: `${index * 0.2 + 0.1}s`}}>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                      {experience.position}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                      {experience.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                    {experience.company}
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-400 flex items-start group">
                        <span className="text-blue-600 mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="4"/>
                          </svg>
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Career highlights */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Career Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}