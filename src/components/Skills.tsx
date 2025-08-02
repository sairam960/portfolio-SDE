import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="group/skill p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                        {skill}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index < 4
                                ? 'bg-blue-600 group-hover/skill:scale-125'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            style={{transitionDelay: `${index * 0.05}s`}}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: '80%',
                          animationDelay: `${index * 0.1 + skillIndex * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning section */}
        <div className="text-center animate-fade-in">
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Always Learning
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                I&apos;m constantly exploring new technologies and improving my skills. 
                Currently diving deeper into cloud architecture and AI/ML integration.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['AWS Certified', 'React Advanced', 'Node.js Expert', 'TypeScript Pro'].map((badge, index) => (
                  <div
                    key={badge}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-white font-semibold text-sm">{badge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical stack */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            My Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Docker'].map((tech, index) => (
              <div
                key={tech}
                className="group flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">{tech.charAt(0)}</span>
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}