'use client'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Management System',
      description: 'A full-stack task management application built with React, Node.js, and PostgreSQL. Features real-time updates, user authentication, and project collaboration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sairam960/task-manager',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with payment integration, inventory management, and admin dashboard. Built with Next.js and Stripe for secure transactions.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sairam960/ecommerce',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics. Features real-time charts, export functionality, and responsive design for mobile devices.',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sairam960/analytics',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Clean and intuitive weather application with location-based forecasts, weather maps, and detailed meteorological data from multiple APIs.',
      technologies: ['React Native', 'Redux', 'OpenWeather API', 'Maps'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sairam960/weather-app',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'Full-featured social platform with real-time messaging, file sharing, and user profiles. Implements modern security practices and scalable architecture.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'AWS S3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sairam960/social-platform',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'AI-Powered Chatbot',
      description: 'Intelligent chatbot with natural language processing capabilities. Integrates with various APIs and provides contextual responses for customer support.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'NLP', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/sairam960/ai-chatbot',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <section id="projects" className="section section-bg">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="mb-3">Featured Projects</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            A collection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-6 col-xl-4">
              <div 
                className="project-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div 
                  className="project-image d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'var(--gray-100)',
                    color: 'var(--text-muted)'
                  }}
                >
                  <div className="text-center">
                    <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 mb-0 small">Project Screenshot</p>
                  </div>
                </div>

                <div className="project-content">
                  <h5 className="project-title">{project.title}</h5>
                  <p className="project-description">{project.description}</p>

                  {/* Technologies */}
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link d-flex align-items-center gap-1"
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link d-flex align-items-center gap-1"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-5">
          <a
            href="https://github.com/sairam960"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary d-inline-flex align-items-center gap-2"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}