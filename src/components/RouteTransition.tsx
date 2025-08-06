'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'
import SkeletonLoader from './SkeletonLoader'

interface RouteTransitionProps {
  children: ReactNode
  showSkeleton?: boolean
  skeletonVariant?: 'card' | 'text' | 'avatar' | 'list'
  skeletonCount?: number
}

export default function RouteTransition({ 
  children, 
  showSkeleton = false,
  skeletonVariant = 'card',
  skeletonCount = 3
}: RouteTransitionProps) {
  const [isLoading, setIsLoading] = useState(showSkeleton)
  const [showContent, setShowContent] = useState(!showSkeleton)

  useEffect(() => {
    if (showSkeleton) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        setShowContent(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [showSkeleton])

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    enter: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }

  const skeletonVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  }

  const contentVariants = {
    initial: { 
      opacity: 0,
      y: 30
    },
    enter: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.1
      }
    }
  }

  return (
    <div className="route-transition-container">
      <AnimatePresence mode="wait">
        {isLoading && showSkeleton ? (
          <motion.div
            key="skeleton"
            className="skeleton-loading-container"
            variants={skeletonVariants}
            initial="initial"
            exit="exit"
          >
            <motion.div
              className="skeleton-content-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header skeleton */}
              <div className="skeleton-header">
                <SkeletonLoader variant="text" count={1} height="40px" />
              </div>
              
              {/* Main content skeleton */}
              <div className="skeleton-main-content">
                <SkeletonLoader 
                  variant={skeletonVariant} 
                  count={skeletonCount}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : showContent ? (
          <motion.div
            key="content"
            className="route-content"
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.div variants={contentVariants}>
              {children}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}