import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section section-bg">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="mb-3">Work Experience</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            My professional journey and the experiences that shaped my career in software development
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="card-clean mb-4 fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="row align-items-center">
                  <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        color: 'white',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {experience.company.charAt(0)}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">{experience.company}</h5>
                      <p className="text-muted small mb-0">{experience.duration}</p>
                    </div>
                  </div>
                  
                  <div className="col-md-9">
                    <h4 className="mb-3">{experience.position}</h4>
                    
                    <ul className="list-unstyled mb-3">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="d-flex align-items-start mb-2">
                          <div 
                            className="flex-shrink-0 mt-2 me-3"
                            style={{
                              width: '6px',
                              height: '6px',
                              backgroundColor: 'var(--primary-color)',
                              borderRadius: '50%'
                            }}
                          />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="d-flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}