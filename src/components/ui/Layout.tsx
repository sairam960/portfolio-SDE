'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode, forwardRef } from 'react'

export interface ContainerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
  className?: string
}

export interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
  children: ReactNode
  variant?: 'default' | 'hero' | 'gradient' | 'dark'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  background?: boolean
  className?: string
  id?: string
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(({
  children,
  size = 'lg',
  padding = true,
  className = '',
  ...motionProps
}, ref) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full'
  }

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : ''
  const combinedClasses = `mx-auto ${sizeClasses[size]} ${paddingClasses} ${className}`.trim()

  return (
    <motion.div
      ref={ref}
      className={combinedClasses}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
})

export const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  variant = 'default',
  spacing = 'lg',
  background = false,
  className = '',
  id,
  ...motionProps
}, ref) => {
  const variantClasses = {
    default: 'text-gray-900 dark:text-white',
    hero: `
      min-h-screen flex items-center justify-center
      text-gray-900 dark:text-white
      relative overflow-hidden
    `,
    gradient: `
      bg-gradient-to-br from-gray-50 via-primary-50/30 to-secondary-50/30
      dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900
      text-gray-900 dark:text-white
      relative
    `,
    dark: `
      bg-gray-900 dark:bg-black
      text-white
      relative
    `
  }

  const spacingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  }

  const backgroundPattern = background ? `
    before:absolute before:inset-0 before:opacity-10 before:pointer-events-none
    before:bg-[radial-gradient(circle_at_20%_20%,_rgba(14,165,233,0.1)_0%,_transparent_50%),radial-gradient(circle_at_80%_80%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]
    dark:before:opacity-5
  ` : ''

  const combinedClasses = `
    relative
    ${variantClasses[variant]}
    ${spacingClasses[spacing]}
    ${backgroundPattern}
    ${className}
  `.trim()

  return (
    <motion.section
      ref={ref}
      id={id}
      className={combinedClasses}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      {...motionProps}
    >
      {children}
    </motion.section>
  )
})

Container.displayName = 'Container'
Section.displayName = 'Section'

// Grid component for common layout patterns
export interface GridProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  cols?: '1' | '2' | '3' | '4' | 'auto'
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
  className?: string
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(({
  children,
  cols = '3',
  gap = 'lg',
  responsive = true,
  className = '',
  ...motionProps
}, ref) => {
  const colsClasses = {
    '1': 'grid-cols-1',
    '2': responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
    '3': responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    '4': responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-4',
    'auto': 'grid-cols-auto-fit'
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }

  const combinedClasses = `grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`.trim()

  return (
    <motion.div
      ref={ref}
      className={combinedClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, staggerChildren: 0.1 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
})

Grid.displayName = 'Grid'

// Flex component for flexbox layouts
export interface FlexProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  wrap?: boolean
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(({
  children,
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 'md',
  className = '',
  ...motionProps
}, ref) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse'
  }

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  }

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }

  const wrapClass = wrap ? 'flex-wrap' : ''

  const combinedClasses = `
    flex
    ${directionClasses[direction]}
    ${alignClasses[align]}
    ${justifyClasses[justify]}
    ${wrapClass}
    ${gapClasses[gap]}
    ${className}
  `.trim()

  return (
    <motion.div
      ref={ref}
      className={combinedClasses}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
})

Flex.displayName = 'Flex'