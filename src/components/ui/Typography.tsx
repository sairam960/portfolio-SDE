'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode, forwardRef } from 'react'

export interface TypographyProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'label'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'display'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black'
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'gradient' | 'inherit'
  align?: 'left' | 'center' | 'right'
  gradient?: boolean
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

const Typography = forwardRef<HTMLElement, TypographyProps>(({
  children,
  variant = 'body',
  size,
  weight = 'normal',
  color = 'inherit',
  align = 'left',
  gradient = false,
  className = '',
  as,
  ...motionProps
}, ref) => {
  // Determine the HTML element to render
  const getElement = () => {
    if (as) return as
    switch (variant) {
      case 'h1': return 'h1'
      case 'h2': return 'h2'
      case 'h3': return 'h3'
      case 'h4': return 'h4'
      case 'h5': return 'h5'
      case 'h6': return 'h6'
      case 'body': return 'p'
      case 'caption': return 'span'
      case 'label': return 'span'
      default: return 'div'
    }
  }

  const baseClasses = 'transition-colors duration-200'

  const variantClasses = {
    h1: 'font-display text-display-xl font-bold leading-tight',
    h2: 'font-display text-display-lg font-bold leading-tight',
    h3: 'font-display text-display-md font-semibold leading-tight',
    h4: 'font-display text-display-sm font-semibold leading-tight',
    h5: 'font-sans text-xl font-medium leading-tight',
    h6: 'font-sans text-lg font-medium leading-tight',
    body: 'font-sans text-body-lg leading-relaxed',
    caption: 'font-sans text-body-sm leading-normal',
    label: 'font-sans text-body-xs font-medium leading-tight'
  }

  const sizeClasses = {
    xs: 'text-body-xs',
    sm: 'text-body-sm',
    md: 'text-body-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
    display: 'text-display-xl'
  }

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black'
  }

  const colorClasses = {
    primary: 'text-gray-900 dark:text-gray-100',
    secondary: 'text-gray-700 dark:text-gray-200',
    muted: 'text-gray-600 dark:text-gray-300',
    accent: 'text-primary-600 dark:text-primary-400',
    gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent',
    inherit: ''
  }

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const gradientEffect = gradient || color === 'gradient'
    ? 'bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent'
    : ''

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    size && sizeClasses[size],
    weightClasses[weight],
    gradientEffect || colorClasses[color],
    alignClasses[align],
    className
  ].filter(Boolean).join(' ')

  const Element = getElement() as any

  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...motionProps}
    >
      <Element
        ref={ref}
        className={combinedClasses}
      >
        {children}
      </Element>
    </motion.div>
  )
})

Typography.displayName = 'Typography'

export default Typography

// Specialized components for common use cases
export const SectionTitle = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
  ({ children, gradient = true, className = '', ...props }, ref) => (
    <Typography
      ref={ref}
      variant="h2"
      as="h2"
      weight="bold"
      align="center"
      gradient={gradient}
      className={`mb-4 ${className}`}
      {...props}
    >
      {children}
    </Typography>
  )
)

export const SectionSubtitle = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant' | 'as'>>(
  ({ children, className = '', ...props }, ref) => (
    <Typography
      ref={ref}
      variant="body"
      as="p"
      color="secondary"
      align="center"
      className={`max-w-2xl mx-auto mb-8 ${className}`}
      {...props}
    >
      {children}
    </Typography>
  )
)

export const CardTitle = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
  ({ children, className = '', ...props }, ref) => (
    <Typography
      ref={ref}
      variant="h4"
      as="h3"
      weight="semibold"
      className={`mb-2 ${className}`}
      {...props}
    >
      {children}
    </Typography>
  )
)

export const CardDescription = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant' | 'as'>>(
  ({ children, className = '', ...props }, ref) => (
    <Typography
      ref={ref}
      variant="body"
      as="p"
      color="secondary"
      className={`leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </Typography>
  )
)

SectionTitle.displayName = 'SectionTitle'
SectionSubtitle.displayName = 'SectionSubtitle'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'