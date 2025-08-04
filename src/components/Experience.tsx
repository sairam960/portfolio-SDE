import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding-desktop bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 position-relative overflow-hidden">
      {/* Background decoration */}
      <div className="position-absolute bottom-0 start-0 w-33 h-33 bg-gradient-to-tr from-purple-50 to-transparent dark:from-purple-900/20 rounded-circle" style={{filter: 'blur(3rem)'}}></div>
      
      <div className="desktop-container position-relative" style={{zIndex: 10}}>
        <div className="text-center mb-5">
          <div> 

          </div>
          <br/>  
          <br/>
          <h2 className="display-2 fw-bold text-dark dark:text-white mb-4">
            Work{' '}
            <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="fs-3 text-secondary dark:text-gray-400 mx-auto" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
            My professional journey and the experiences that shaped my career in software development
          </p>
        </div>

        {/* Desktop-optimized timeline */}
        <div className="position-relative mx-auto" style={{maxWidth: '72rem'}}>
          {/* Central timeline line - enhanced for desktop */}
          <div className="position-absolute start-50 translate-middle-x h-100 rounded-pill" style={{width: '4px', background: 'linear-gradient(to bottom, #9333ea, #2563eb, #9333ea)'}}></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className="position-relative mb-5">
              {/* Timeline dot */}
              <div className="position-absolute start-50 translate-middle-x d-flex align-items-center justify-content-center shadow" style={{width: '48px', height: '48px', background: 'linear-gradient(to right, #9333ea, #2563eb)', zIndex: 10, borderRadius: '50%'}}>
                <div className="d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: '24px', height: '24px'}}>
                  <span className="fw-bold text-primary" style={{fontSize: '0.875rem'}}>{index + 1}</span>
                </div>
              </div>
              
              {/* Content card */}
              <div className={`row g-4 align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* Experience card */}
                <div className={`col-lg-6 ${index % 2 === 0 ? 'pe-lg-4' : 'ps-lg-4'}`}>
                  <div className="group bg-white dark:bg-slate-800 rounded-3 p-4 shadow hover-lift border border-light dark:border-gray-700 animate-slide-up"
                       style={{animationDelay: `${index * 0.3}s`}}>
                    
                    {/* Header */}
                    <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between mb-4">
                      <div>
                        <h3 className="display-6 fw-bold text-dark dark:text-white mb-2">
                          {experience.position}
                        </h3>
                        <h4 className="fs-4 fw-semibold text-primary dark:text-purple-400">
                          {experience.company}
                        </h4>
                      </div>
                      
                      <div className="mt-3 mt-lg-0">
                        <span className="d-inline-flex align-items-center px-3 py-2 rounded-pill bg-light dark:bg-purple-900/50 text-primary dark:text-purple-200 fw-medium" style={{fontSize: '0.875rem'}}>
                          <svg className="me-2" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="list-unstyled mb-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="d-flex align-items-start mb-3">
                          <div className="bg-primary rounded-circle flex-shrink-0 mt-2 me-3" style={{width: '8px', height: '8px'}}></div>
                          <span className="text-secondary dark:text-gray-400 fs-5" style={{lineHeight: '1.6'}}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Technologies */}
                    <div className="d-flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-light dark:bg-slate-700 text-dark dark:text-gray-300 rounded-3 fw-medium"
                          style={{animationDelay: `${index * 0.3 + techIndex * 0.05}s`, fontSize: '0.875rem'}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Visual element */}
                <div className={`col-lg-6 d-flex justify-content-center ${index % 2 === 0 ? 'ps-lg-4' : 'pe-lg-4'}`}>
                  <div className="position-relative animate-slide-up" style={{animationDelay: `${index * 0.3 + 0.2}s`}}>
                    <div className="d-flex align-items-center justify-content-center shadow position-relative overflow-hidden rounded-3" style={{width: '256px', height: '256px', background: 'linear-gradient(135deg, #a855f7, #3b82f6, #9333ea)'}}>
                      {/* Background pattern */}
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(255,255,255,0.05)'}}>
                        <div className="position-absolute border border-white border-opacity-25 rounded" style={{top: '16px', left: '16px', width: '48px', height: '48px'}}></div>
                        <div className="position-absolute border border-white border-opacity-25 rounded" style={{bottom: '16px', right: '16px', width: '32px', height: '32px'}}></div>
                        <div className="position-absolute top-50 start-50 translate-middle border border-white border-opacity-25 rounded" style={{width: '80px', height: '80px'}}></div>
                      </div>
                      
                      {/* Company initial or icon */}
                      <div className="text-white fw-bold position-relative" style={{fontSize: '4rem', zIndex: 10}}>
                        {experience.company.charAt(0)}
                      </div>
                      
                      {/* Floating elements */}
                      <div className="position-absolute bg-warning rounded d-flex align-items-center justify-content-center animate-float" style={{top: '-16px', right: '-16px', width: '40px', height: '40px'}}>
                        <svg className="text-white" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        {/* 
        <div className="mt-5">
          <div className="rounded-3 p-5 position-relative overflow-hidden" style={{background: 'linear-gradient(to right, #faf5ff, #eff6ff)'}}>
            
            <div className="position-absolute top-0 start-0 bg-primary rounded-circle" style={{width: '160px', height: '160px', opacity: 0.1, filter: 'blur(2rem)'}}></div>
            <div className="position-absolute bottom-0 end-0 bg-info rounded-circle" style={{width: '224px', height: '224px', opacity: 0.1, filter: 'blur(2rem)'}}></div>
            
            <div className="position-relative" style={{zIndex: 10}}>
              <div className="text-center mb-4">
                <h3 className="display-4 fw-bold text-dark dark:text-white mb-3">
                  Career Highlights
                </h3>
                <p className="fs-4 text-secondary dark:text-gray-400">
                  Key achievements and milestones in my professional journey
                </p>
              </div>
              
              <div className="row g-4">
                {[
                  { number: '3+', label: 'Years Experience', icon: '⏳' },
                  { number: '15+', label: 'Projects Completed', icon: '🚀' },
                  { number: '8+', label: 'Technologies Mastered', icon: '💻' },
                  { number: '100%', label: 'Client Satisfaction', icon: '⭐' }
                ].map((stat, index) => (
                  <div key={stat.label} className="col-6 col-lg-3 text-center">
                    <div className="bg-white dark:bg-slate-800 rounded shadow d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                      <span style={{fontSize: '2rem'}}>{stat.icon}</span>
                    </div>
                    <div className="display-5 fw-bold text-dark dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-secondary dark:text-gray-400 fw-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  )
}