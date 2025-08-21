'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode, forwardRef, useState, useCallback } from 'react'

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  variant?: 'default' | 'glassmorphism' | 'project' | 'skill' | 'experience' | 'elevated'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  interactive?: boolean
  spotlight?: boolean
  particles?: boolean
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  variant = 'default',
  size = 'md',
  interactive = false,
  spotlight = false,
  particles = false,
  className = '',
  ...motionProps
}, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight && !particles) return
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }, [spotlight, particles])

  const baseClasses = 'relative overflow-hidden transition-all duration-300'

  const variantClasses = {
    default: `
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-xl shadow-soft hover:shadow-medium
    `,
    glassmorphism: `
      bg-white/70 dark:bg-gray-800/70
      backdrop-filter backdrop-blur-10 backdrop-saturate-150
      border border-white/30 dark:border-gray-700/50
      rounded-2xl shadow-large
      before:absolute before:inset-0 before:rounded-2xl
      before:bg-gradient-to-br before:from-white/10 before:to-transparent
      before:pointer-events-none
    `,
    project: `
      bg-white/80 dark:bg-gray-800/80
      backdrop-filter backdrop-blur-8
      border-2 border-white/40 dark:border-gray-700/60
      rounded-2xl shadow-extra-large
      transform-gpu hover:scale-[1.02]
      hover:shadow-2xl hover:border-white/60 dark:hover:border-gray-600/80
      transition-all duration-500 ease-out
    `,
    skill: `
      bg-white/90 dark:bg-gray-800/90
      backdrop-filter backdrop-blur-sm
      border border-gray-200/50 dark:border-gray-700/50
      rounded-xl shadow-medium
      hover:shadow-large hover:-translate-y-2
      transform-gpu transition-all duration-300
    `,
    experience: `
      bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95
      backdrop-filter backdrop-blur-sm
      border-l-4 border-primary-500
      rounded-r-xl shadow-soft hover:shadow-medium
      pl-6 hover:border-l-primary-400
    `,
    elevated: `
      bg-white dark:bg-gray-800
      rounded-3xl shadow-2xl hover:shadow-3xl
      border border-gray-100 dark:border-gray-700
      hover:border-primary-200 dark:hover:border-primary-800
      transform-gpu hover:scale-[1.02] hover:-translate-y-2
    `
  }

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  const interactiveStyles = interactive ? 'cursor-pointer hover:scale-[1.02]' : ''
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${interactiveStyles} ${className}`.trim()

  return (
    <motion.div
      ref={ref}
      className={combinedClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...motionProps}
    >
      {/* Spotlight Effect */}
      {spotlight && (
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-400 pointer-events-none z-10 rounded-2xl"
          style={{
            background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.25), rgba(139, 92, 246, 0.15) 40%, transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      )}

      {/* Particle Effects */}
      {particles && isHovered && (
        <div className="absolute inset-0 pointer-events-none z-20 rounded-2xl overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
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
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Prismatic overlay for project cards */}
      {variant === 'project' && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-30 rounded-2xl mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.15 : 0,
            background: isHovered
              ? `conic-gradient(from ${mousePosition.x}deg at ${mousePosition.x}% ${mousePosition.y}%, 
                  var(--color-pink-500), var(--color-orange-500), var(--color-yellow-400), 
                  var(--color-purple-600), var(--color-blue-500), var(--color-green-400), var(--color-pink-500))`
              : 'transparent'
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Theme-aware border glow */}
      {(variant === 'glassmorphism' || variant === 'project') && (
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent dark:from-gray-700/30 dark:to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>
    </motion.div>
  )
})

Card.displayName = 'Card'

export default Card

// Compound components for common patterns
export const CardHeader = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
)

export const CardTitle = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <h3 className={`text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 ${className}`}>
    {children}
  </h3>
)

export const CardDescription = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${className}`}>
    {children}
  </p>
)

export const CardFooter = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
  <div className={`mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
)