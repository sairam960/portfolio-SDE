'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode, forwardRef } from 'react'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'filter' | 'cta' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  isActive?: boolean
  isLoading?: boolean
  disabled?: boolean
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  isActive = false,
  isLoading = false,
  disabled = false,
  className = '',
  ...motionProps
}, ref) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const variantClasses = {
    primary: `
      px-8 py-3 rounded-full
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary))
      color: white font-semibold
      shadow-lg hover:shadow-xl
      before:absolute before:inset-0 before:rounded-full
      before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0
      hover:before:opacity-100 before:transition-opacity before:duration-300
      focus:ring-primary-500/50
    `,
    outline: `
      px-8 py-3 rounded-full
      border-2 border-gray-300 dark:border-gray-600
      color: var(--text-primary)
      bg-transparent backdrop-filter backdrop-blur-sm
      hover:border-primary-500 hover:text-primary-500
      hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-secondary-500/10
      dark:hover:border-primary-400 dark:hover:text-primary-400
      focus:ring-primary-500/50
    `,
    filter: `
      px-4 py-2 rounded-full
      border border-gray-300 dark:border-gray-600
      bg-white/80 dark:bg-gray-800/80
      backdrop-filter backdrop-blur-sm
      text-sm font-medium
      color: var(--text-muted)
      hover:border-primary-500 hover:text-primary-500
      hover:bg-primary-50 dark:hover:bg-primary-900/20
      data-[active=true]:bg-gradient-to-r data-[active=true]:from-primary-500 data-[active=true]:to-secondary-500
      data-[active=true]:text-white data-[active=true]:border-primary-500
      data-[active=true]:shadow-lg data-[active=true]:shadow-primary-500/40
      focus:ring-primary-500/50
    `,
    cta: `
      px-8 py-4 rounded-2xl
      bg-gradient-to-r from-primary-500 to-secondary-500
      text-white font-bold text-lg
      shadow-2xl shadow-primary-500/40
      hover:shadow-3xl hover:shadow-primary-500/60
      transform-gpu hover:-translate-y-1
      before:absolute before:inset-0 before:rounded-2xl
      before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0
      hover:before:opacity-100 before:transition-all before:duration-300
      focus:ring-primary-500/50
    `,
    icon: `
      p-3 rounded-full
      bg-white/80 dark:bg-gray-800/80
      backdrop-filter backdrop-blur-sm
      border border-gray-200 dark:border-gray-700
      color: var(--text-secondary)
      hover:color-primary-500 hover:border-primary-500/50
      hover:bg-primary-50 dark:hover:bg-primary-900/20
      hover:scale-110
      focus:ring-primary-500/50
    `
  }

  const sizeClasses = {
    sm: variant === 'filter' ? 'text-sm' : 'text-sm px-4 py-2',
    md: variant === 'filter' ? 'text-base' : 'text-base px-6 py-3',
    lg: variant === 'cta' ? 'text-xl px-10 py-5' : 'text-lg px-8 py-4'
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()

  const motionVariants = {
    primary: {
      hover: { 
        scale: 1.05, 
        y: -3,
        boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)'
      },
      tap: { scale: 0.98 }
    },
    outline: {
      hover: { 
        scale: 1.05,
        y: -3,
        backgroundColor: 'rgba(107, 70, 193, 0.1)',
        borderColor: 'var(--color-secondary)'
      },
      tap: { scale: 0.98 }
    },
    filter: {
      hover: { scale: 1.05 },
      tap: { scale: 0.95 }
    },
    cta: {
      hover: { 
        scale: 1.05, 
        y: -5,
        boxShadow: '0 25px 50px rgba(14, 165, 233, 0.5)'
      },
      tap: { scale: 0.98 }
    },
    icon: {
      hover: { scale: 1.2, y: -2 },
      tap: { scale: 0.95 }
    }
  }

  return (
    <motion.button
      ref={ref}
      className={combinedClasses}
      data-active={isActive}
      disabled={disabled || isLoading}
      variants={motionVariants[variant]}
      whileHover="hover"
      whileTap="tap"
      {...motionProps}
    >
      {isLoading ? (
        <>
          <motion.div
            className="w-5 h-5 mr-2 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Loading...
        </>
      ) : (
        children
      )}
      
      {/* Glow effect for primary and CTA buttons */}
      {(variant === 'primary' || variant === 'cta') && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 blur-lg transition-opacity duration-300 hover:opacity-30 pointer-events-none" />
      )}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button