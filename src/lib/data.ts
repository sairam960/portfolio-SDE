import { Project, Experience, Skill } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Inventory Management Application',
    description: 'A full-stack inventory management solution with user authentication, inventory tracking, and real-time inventory dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS','Tableau'],
    githubUrl: 'https://github.com/mfongpanera',
    liveUrl: '#',
    imageUrl: '/portfolio-SDE/images/project1.png'
  },
  {
    id: '2',
    title: 'AI Admissions Assistant',
    description: 'An AI-powered tool to assist with student admissions, featuring document analysis, chat support, and application tracking.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/sairam960/advisor-app',
    liveUrl: '#',
    imageUrl: '/portfolio-SDE/images/ai-app.png'
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'YourPassion1st',
    position: 'Software Engineer',
    duration: 'Feb 2025 - Present',
    description: [
      'Mentored junior developers and conducted code reviews',
      'Led end-to-end infrastructure migration from a legacy private server to AWS, leveraging S3 for scalable storage and ECS for containerized service deployment.',
      'Modernized static website using Next.js and React.js, improving onboarding flow and reducing average page load time by 60%.'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript']
  },
  {
    id: '2',
    company: 'Myma.ai',
    position: 'Founding Software Engineer',
    duration: 'Jan 2024 - Dec 2024',
    description: [
      'Optimized database queries improving application performance by 40%',
      'Integrated third-party APIs and payment gateways',
      'Engineered OpenAI powered chat agents to automate customer complaint and room service process, improving complaint turnaround-time by 30x and boosting customer satisfaction by 30%.',
      'Engineered multiple MCP servers and hooked in relevant API’s for dynamic context based chat responses and reducing hallucinations.'
    ],
    technologies: ['OpenAI API', 'Python', 'CosmosDB', 'JavaScript']
  },
  {
    id: '3',
    company: 'Freelance Projects',
    position: 'Software Developer',
    duration: 'Jan 2024 - Dec 2024',
    description: [ 
      'Automated deployment processes using GitHub Actions, reducing manual errors and deployment time by 50%',
      'Automated inventory counting with a React application, saved store team 7+ hours/week.',
      'Built an analytics tool to visualize $1M+ in annual inventory data, cutting procurement processing time by 30%.',
      'Designed ETL pipelines to calculate operational costs from Grubhub sales data, reducing operational costs by 47% during summer.'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Github Actions','Python']
  },
  {
    id: '4',
    company: 'LTIMindtree',
    position: 'Software Engineer',
    duration: 'Jun 2021 - Jul 2023',
    description: [ 
      'Architected an OpenTelemetry-based observability and diagnostics platform for cloud-native microservices, enabling real-time distributed tracing and anomaly detection, reducing MTTR by 25%.'
    ],
    technologies: ['JavaScript', 'OpenTelemetry', 'Code Instrumentation', 'Cloud','Microservices']
  }
]

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Express.js', 'Django', 'RESTful APIs', 'Microservices']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase']
  },
  {
    category: 'DevOps & Tools',
    items: ['AWS', 'Docker', 'Git', 'CI/CD', 'Jenkins', 'GitHub Actions']
  }
]