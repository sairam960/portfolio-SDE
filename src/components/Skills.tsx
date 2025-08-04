'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'Next.js', level: 85, color: '#000000' },
        { name: 'TypeScript', level: 88, color: '#3178C6' },
        { name: 'JavaScript', level: 92, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 85, color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: '#339933' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'Express.js', level: 90, color: '#000000' },
        { name: 'FastAPI', level: 80, color: '#009688' },
        { name: 'PostgreSQL', level: 82, color: '#336791' },
        { name: 'MongoDB', level: 85, color: '#47A248' }
      ]
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'AWS', level: 80, color: '#FF9900' },
        { name: 'Docker', level: 78, color: '#2496ED' },
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Linux', level: 85, color: '#FCC624' },
        { name: 'Kubernetes', level: 70, color: '#326CE5' },
        { name: 'CI/CD', level: 75, color: '#2E8B57' }
      ]
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="mb-3">Skills & Technologies</h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="col-lg-4">
              <div 
                className="card-clean h-100 fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h4 className="mb-4 text-center">{category.title}</h4>
                
                <div className="row g-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="col-12">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <div 
                            className="me-3 rounded d-flex align-items-center justify-content-center"
                            style={{
                              width: '32px',
                              height: '32px',
                              backgroundColor: `${skill.color}20`,
                              border: `2px solid ${skill.color}30`
                            }}
                          >
                            <div 
                              style={{
                                width: '16px',
                                height: '16px',
                                backgroundColor: skill.color,
                                borderRadius: '50%'
                              }}
                            />
                          </div>
                          <span className="fw-medium">{skill.name}</span>
                        </div>
                        <small className="text-muted">{skill.level}%</small>
                      </div>
                      
                      <div 
                        className="progress"
                        style={{ 
                          height: '6px',
                          backgroundColor: 'var(--gray-200)',
                          borderRadius: '3px'
                        }}
                      >
                        <div 
                          className="progress-bar"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            borderRadius: '3px',
                            transition: 'width 1s ease-in-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-5">
          <h4 className="text-center mb-4">Other Technologies</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              'React Native', 'Redux', 'GraphQL', 'REST APIs', 'Microservices',
              'Jest', 'Cypress', 'Webpack', 'Babel', 'ESLint', 'Prettier',
              'Figma', 'Adobe XD', 'Postman', 'Jenkins', 'GitHub Actions'
            ].map((tech, index) => (
              <span
                key={tech}
                className="tech-badge"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'fadeInUp 0.6s ease-out'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}