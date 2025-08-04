'use client'

export default function About() {
  return (
    <section id="about" className="section section-bg">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="mb-3">About Me</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Passionate software engineer with 3+ years of experience building scalable applications
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="fade-in-up">
              <h3 className="mb-4">My Journey</h3>
              <p className="mb-3">
                I&apos;m a full-stack software engineer with a passion for creating efficient, scalable, 
                and user-friendly applications. With over 3 years of experience in the industry, 
                I&apos;ve worked on various projects ranging from web applications to complex enterprise systems.
              </p>
              <p className="mb-4">
                My expertise spans across modern technologies including React, Node.js, Python, 
                and cloud platforms. I enjoy solving complex problems and turning ideas into 
                reality through clean, maintainable code.
              </p>
              
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-2">
                    <div 
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '50%',
                        color: 'white'
                      }}
                    >
                      <strong>3+</strong>
                    </div>
                    <div>
                      <h6 className="mb-0">Years Experience</h6>
                      <small className="text-muted">Professional Development</small>
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-2">
                    <div 
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'var(--success-color)',
                        borderRadius: '50%',
                        color: 'white'
                      }}
                    >
                      <strong>10+</strong>
                    </div>
                    <div>
                      <h6 className="mb-0">Projects Completed</h6>
                      <small className="text-muted">Web & Mobile Apps</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-clean">
                <h4 className="mb-4">What I Do</h4>
                
                <div className="row g-3">
                  {[
                    {
                      icon: (
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      ),
                      title: 'Frontend Development',
                      description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS'
                    },
                    {
                      icon: (
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      ),
                      title: 'Backend Development',
                      description: 'Creating robust APIs and server-side applications with Node.js, Python, and databases'
                    },
                    {
                      icon: (
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                      ),
                      title: 'Cloud & DevOps',
                      description: 'Deploying applications on AWS, implementing CI/CD pipelines, and ensuring scalability'
                    },
                    {
                      icon: (
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      ),
                      title: 'Problem Solving',
                      description: 'Analyzing complex requirements and architecting efficient solutions'
                    }
                  ].map((service, index) => (
                    <div key={index} className="col-12">
                      <div 
                        className="d-flex align-items-start p-3 rounded"
                        style={{
                          backgroundColor: 'var(--gray-50)',
                          transition: 'all var(--transition-base)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--gray-100)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--gray-50)'
                        }}
                      >
                        <div 
                          className="me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: '48px',
                            height: '48px',
                            backgroundColor: 'var(--primary-color)',
                            borderRadius: 'var(--border-radius)',
                            color: 'white'
                          }}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <h6 className="mb-1">{service.title}</h6>
                          <small className="text-muted">{service.description}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}