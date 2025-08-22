import { Project, Experience, Skill } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Inventory Management Application',
    description: 'A full-stack inventory management solution with user authentication, inventory tracking, and real-time inventory dashboard.',
    technologies: ['React', 'Node.JS', 'PostgreSQL', 'Tailwind CSS','Tableau'],
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
  },
  {
    id: '3',
    title: 'Equity Portfolio Engineering using Python',
    description: 'Fundamental Analysis of stock data using Python and pandas to create a portfolio of stocks based on financial metrics to generate a personalized investment portfolio with Sharpe ratio over 1.',
    technologies: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'scikit-learn'],
    githubUrl: 'https://github.com/sairam960/finance101',
    liveUrl: '#',
    imageUrl: '/portfolio-SDE/images/finance.png'
  },
  {
    id: '4',
    title: 'Crime Data Analysis',
    description: 'Discovered patterns in crime data using Python and pandas, visualizing trends and correlations to provide insights for international students/ non local moving to Montgomery county.',
    technologies: ['Python', 'pandas', 'NumPy', 'Seaborn', 'scikit-learn'],
    githubUrl: 'https://github.com/sairam960/crimeAnalyticsMGPD',
    liveUrl: '#',
    imageUrl: '/portfolio-SDE/images/crime-data.png'
  },
  {
    id: '5',
    title: 'Inc 5000 Company Data Analysis',
    description: 'This project presents a comprehensive analysis of Inc. 5000 companies, exploring growth patterns, industry distribution, geographic concentration, and performance metrics.',
    technologies: ['Python', 'pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    githubUrl: 'https://github.com/sairam960/Inc5000',
    liveUrl: '#',
    imageUrl: '/portfolio-SDE/images/inc5000.png'
  }
  // {
  //   id: '6',
  //   title: 'Real-Time Chat Application',
  //   description: 'A modern real-time chat application built with React and Socket.io, featuring message encryption, user authentication, and multiple chat rooms with live notifications.',
  //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
  //   githubUrl: 'https://github.com/sairam960/chat-app',
  //   liveUrl: '#',
  //   imageUrl: '/portfolio-SDE/images/chat-app.png'
  // }

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
    technologies: ['React', 'Node.js', 'AWS']
  },
  {
    id: '2',
    company: 'Myma.ai',
    position: 'Founding Software Engineer',
    duration: 'Jan 2024 - Dec 2024',
    description: [
      'Engineered OpenAI powered chat agents to automate customer complaint and room service process, improving complaint turnaround-time by 30x and boosting customer satisfaction by 30%.',
      'Reduced hallucination rates by 80%+ through RAG, rule-based filters, and QA pipelines, eliminating overconfident errors in production.',
      'Integrated third-party APIs and payment gateways'
    ],
    technologies: ['OpenAI API', 'Python', 'CosmosDB', 'JavaScript', 'RAG']
  },
  {
    id: '3',
    company: 'University of Maryland',
    position: 'Consultant, Software Engineer',
    duration: 'Jan 2024 - Dec 2024',
    description: [ 
      'Automated inventory counting with a React application, saved store team 7+ hours/week.',
      'Built an analytics tool to visualize $1M+ in annual inventory data, cutting procurement processing time by 30%.',
      'Designed ETL pipelines to calculate operational costs from Grubhub sales data, reducing operational costs by 47% during summer.'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL','Python']
  },
  {
    id: '4',
    company: 'LTIMindtree',
    position: 'Software Engineer',
    duration: 'Jun 2021 - Jul 2023',
    description: [ 
      'Architected an OpenTelemetry-based observability and diagnostics platform for cloud-native microservices, enabling real-time distributed tracing and anomaly detection, reducing MTTR by 25%.'
    ],
    technologies: ['JavaScript', 'OpenTelemetry', 'Code Instrumentation','Microservices']
  }
]

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Express.js', 'GraphQL', 'RESTful APIs', 'Microservices']
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