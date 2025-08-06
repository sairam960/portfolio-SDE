'use client'

import { motion } from 'framer-motion'

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'avatar' | 'list'
  count?: number
  height?: string
  className?: string
}

export default function SkeletonLoader({ 
  variant = 'card', 
  count = 1,
  height = 'auto',
  className = ''
}: SkeletonLoaderProps) {
  const shimmerVariants = {
    initial: { backgroundPosition: '-200px 0' },
    animate: { 
      backgroundPosition: 'calc(200px + 100%) 0',
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  }

  const skeletonBase = "skeleton-shimmer"

  const renderSkeletonCard = () => (
    <motion.div 
      className={`skeleton-card ${className}`}
      style={{ height }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image placeholder */}
      <motion.div 
        className={`${skeletonBase} skeleton-image`}
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
      />
      
      {/* Content area */}
      <div className="skeleton-content">
        {/* Title */}
        <motion.div 
          className={`${skeletonBase} skeleton-title`}
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Description lines */}
        <motion.div 
          className={`${skeletonBase} skeleton-text-line`}
          variants={shimmerVariants}
          initial="initial"
          animate="animate" 
        />
        <motion.div 
          className={`${skeletonBase} skeleton-text-line-short`}
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Action buttons */}
        <div className="skeleton-actions">
          <motion.div 
            className={`${skeletonBase} skeleton-button`}
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className={`${skeletonBase} skeleton-button`}
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
          />
        </div>
      </div>
    </motion.div>
  )

  const renderSkeletonText = () => (
    <motion.div 
      className={`skeleton-text-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`${skeletonBase} skeleton-text-line ${i === count - 1 ? 'skeleton-text-line-short' : ''}`}
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </motion.div>
  )

  const renderSkeletonAvatar = () => (
    <motion.div 
      className={`skeleton-avatar-container ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={`${skeletonBase} skeleton-avatar`}
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
      />
      <div className="skeleton-avatar-content">
        <motion.div 
          className={`${skeletonBase} skeleton-name`}
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className={`${skeletonBase} skeleton-subtitle`}
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
        />
      </div>
    </motion.div>
  )

  const renderSkeletonList = () => (
    <motion.div 
      className={`skeleton-list-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="skeleton-list-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <motion.div 
            className={`${skeletonBase} skeleton-list-icon`}
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
          />
          <div className="skeleton-list-content">
            <motion.div 
              className={`${skeletonBase} skeleton-list-title`}
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
            <motion.div 
              className={`${skeletonBase} skeleton-list-subtitle`}
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        return renderSkeletonText()
      case 'avatar':
        return renderSkeletonAvatar()
      case 'list':
        return renderSkeletonList()
      case 'card':
      default:
        return renderSkeletonCard()
    }
  }

  return count > 1 && variant === 'card' ? (
    <div className="skeleton-grid">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          {renderSkeletonCard()}
        </motion.div>
      ))}
    </div>
  ) : (
    renderSkeleton()
  )
}