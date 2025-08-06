'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useAnimation, useMotionValue, useSpring } from 'framer-motion'

// Enhanced Skill Data with Icons and Descriptions
const skillsData = {
  frontend: [
    {
      name: 'React',
      level: 90,
      color: 'var(--skill-react)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-react)">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      ),
      description: 'Building interactive UIs'
    },
    {
      name: 'Next.js',
      level: 85,
      color: 'var(--skill-nextjs)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-nextjs)">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.568l-6.5-6.5V4.5h1v5.568l6.5 6.5-.568.568z"/>
        </svg>
      ),
      description: 'Full-stack React framework'
    },
    {
      name: 'TypeScript',
      level: 88,
      color: 'var(--skill-typescript)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-typescript)">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      description: 'Type-safe JavaScript'
    },
    {
      name: 'JavaScript',
      level: 92,
      color: 'var(--skill-javascript)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-javascript)">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      description: 'Core web programming'
    },
    {
      name: 'Tailwind CSS',
      level: 85,
      color: 'var(--skill-tailwind)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-tailwind)">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
      description: 'Utility-first CSS framework'
    },
    {
      name: 'HTML/CSS',
      level: 95,
      color: 'var(--skill-html)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-html)">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      description: 'Web fundamentals'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      level: 88,
      color: 'var(--skill-nodejs)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-nodejs)">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.265-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
      description: 'Server-side JavaScript'
    },
    {
      name: 'Python',
      level: 85,
      color: 'var(--skill-python)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-python)">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      ),
      description: 'Data science & AI'
    },
    {
      name: 'Express.js',
      level: 90,
      color: 'var(--skill-express)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--skill-express)">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.86 1.7-6.57.3-8.663-2.629-.51-.717-.758-1.588-.943-2.588a11.645 11.645 0 01-.478-2.399zm1.116-.49h11.343c-.062-2.876-2.634-5.804-6.13-4.27-3.216 1.414-4.267 3.998-5.213 4.27z"/>
        </svg>
      ),
      description: 'Node.js web framework'
    },
    {
      name: 'PostgreSQL',
      level: 82,
      color: 'var(--skill-postgresql)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-postgresql)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px'
        }}>
          PG
        </div>
      ),
      description: 'Relational database'
    },
    {
      name: 'MongoDB',
      level: 85,
      color: 'var(--skill-mongodb)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-mongodb)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '10px'
        }}>
          DB
        </div>
      ),
      description: 'NoSQL database'
    },
    {
      name: 'FastAPI',
      level: 80,
      color: 'var(--skill-mysql)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-mysql)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '10px'
        }}>
          API
        </div>
      ),
      description: 'Python web framework'
    }
  ],
  tools: [
    {
      name: 'AWS',
      level: 80,
      color: 'var(--skill-aws)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-aws)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '10px'
        }}>
          AWS
        </div>
      ),
      description: 'Cloud platform'
    },
    {
      name: 'Docker',
      level: 78,
      color: 'var(--skill-docker)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-docker)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px'
        }}>
          🐳
        </div>
      ),
      description: 'Containerization'
    },
    {
      name: 'Git',
      level: 90,
      color: 'var(--skill-git)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-git)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '10px'
        }}>
          GIT
        </div>
      ),
      description: 'Version control'
    },
    {
      name: 'Kubernetes',
      level: 70,
      color: 'var(--skill-kubernetes)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-kubernetes)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px'
        }}>
          K8s
        </div>
      ),
      description: 'Container orchestration'
    },
    {
      name: 'CI/CD',
      level: 75,
      color: 'var(--skill-cicd)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-cicd)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '10px'
        }}>
          CI
        </div>
      ),
      description: 'Automation pipelines'
    },
    {
      name: 'Linux',
      level: 85,
      color: 'var(--skill-jenkins)',
      icon: (
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--skill-jenkins)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '12px'
        }}>
          🐧
        </div>
      ),
      description: 'Operating system'
    }
  ]
}

// Enhanced Hexagonal Progress Component with Gradient
const HexagonalProgress: React.FC<{ 
  percentage: number
  color: string
  size: number
  strokeWidth: number
}> = ({ percentage, color, size, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  // Generate hexagon path
  const hexagonPath = () => {
    const centerX = size / 2
    const centerY = size / 2
    const hexRadius = radius * 0.9
    const points = []
    
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3
      const x = centerX + hexRadius * Math.cos(angle)
      const y = centerY + hexRadius * Math.sin(angle)
      points.push(`${x},${y}`)
    }
    
    return `M ${points.join(' L ')} Z`
  }

  return (
    <div className="hexagonal-progress">
      <svg width={size} height={size} className="progress-hexagon">
        {/* Gradient Definition */}
        <defs>
          <linearGradient id={`hexGradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="50%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id={`progressGradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Hexagonal Background */}
        <motion.path
          d={hexagonPath()}
          fill={`url(#hexGradient-${color})`}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />
        
        {/* Circular Progress Ring */}
        <circle
          className="progress-ring-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <motion.circle
          className="progress-ring-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={`url(#progressGradient-${color})`}
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div className="progress-text">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  )
}

// Skill Card Component with Advanced Interactions
const SkillCard: React.FC<{
  skill: typeof skillsData.frontend[0]
  index: number
  category: string
}> = ({ skill, index, category }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const categoryColors = {
    frontend: 'from-blue-500 to-purple-600',
    backend: 'from-green-500 to-teal-600', 
    tools: 'from-orange-500 to-red-600'
  }

  return (
    <motion.div
      ref={cardRef}
      className="skill-card-rectangular"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 150
      }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        scale: 1.03,
        transition: { duration: 0.3, type: "spring", stiffness: 200 }
      }}
    >
      {/* Spotlight Effect */}
      <div 
        className="skill-spotlight"
        style={{
          background: isHovered 
            ? `radial-gradient(200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 70%)`
            : 'none'
        }}
      />

      {/* Animated Border */}
      <div className={`skill-border bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`} />

      <div className="skill-content">
        {/* Icon Section */}
        <motion.div 
          className="skill-icon-container"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {skill.icon}
        </motion.div>

        {/* Skill Info */}
        <div className="skill-info">
          <motion.h4 
            className="skill-name"
            animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
          >
            {skill.name}
          </motion.h4>
          <p className="skill-description">{skill.description}</p>
        </div>
      </div>

      {/* Particle Effects on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div className="skill-particles">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                style={{ backgroundColor: skill.color }}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: mousePosition.x,
                  y: mousePosition.y
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: mousePosition.x + (Math.random() - 0.5) * 100,
                  y: mousePosition.y + (Math.random() - 0.5) * 100
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Enhanced Category Filter with Advanced Animations
const CategoryFilter: React.FC<{
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}> = ({ categories, activeCategory, onCategoryChange }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <motion.div 
      className="category-filter-enhanced"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          className={`filter-btn-rectangular ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
          onHoverStart={() => setHoveredCategory(category)}
          onHoverEnd={() => setHoveredCategory(null)}
          whileHover={{ 
            scale: 1.1,
            y: -5,
            boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -30, rotateY: -45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 120
          }}
        >
          <motion.span
            animate={{
              color: activeCategory === category 
                ? 'var(--color-white)' 
                : hoveredCategory === category 
                  ? 'var(--color-primary)' 
                  : 'var(--color-gray-500)'
            }}
            transition={{ duration: 0.3 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.span>
          
          {/* Active indicator */}
          <motion.div
            className="filter-active-indicator"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: activeCategory === category ? 1 : 0,
              background: activeCategory === category 
                ? 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' 
                : 'transparent'
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          
          {/* Hover glow effect */}
          <motion.div
            className="filter-glow-effect"
            animate={{
              opacity: hoveredCategory === category ? 0.6 : 0,
              scale: hoveredCategory === category ? 1.2 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      ))}
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredSkills, setFilteredSkills] = useState<typeof skillsData.frontend>([])
  
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const categories = ['all', 'frontend', 'backend', 'tools']

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills([
        ...skillsData.frontend,
        ...skillsData.backend,
        ...skillsData.tools
      ])
    } else {
      setFilteredSkills(skillsData[activeCategory as keyof typeof skillsData])
    }
  }, [activeCategory])

  const otherTechnologies = [
    'REST APIs', 'Microservices', 'GraphQL',
    'Figma', 'Postman', 'Jenkins', 'GitHub Actions',
    'Grafana', 'Vector Embeddings', 'OpenAI API'
  ]

  return (
    <section id="skills" ref={sectionRef} className="skills-section-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="skills-title-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            className="skills-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technologies and tools I work with to build amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Skills Grid - Compact Rectangular Layout */}
        <motion.div 
          className="skills-rectangular-grid"
          layout
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${activeCategory}`}
                skill={skill}
                index={index}
                category={activeCategory === 'all' 
                  ? skillsData.frontend.includes(skill) ? 'frontend'
                  : skillsData.backend.includes(skill) ? 'backend'
                  : 'tools'
                  : activeCategory
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Other Technologies */}
        <motion.div 
          className="other-technologies"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {otherTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-tag-modern"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1.2 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}