'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useResumeAccess } from '@/hooks/useResumeAccess'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

interface FormData {
  name: string
  email: string
}

interface FormErrors {
  name?: string
  email?: string
  submit?: string
}

export default function ResumeModal({ isOpen, onClose, onSuccess }: ResumeModalProps) {
  const { isDark } = useTheme()
  const modalRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ name: boolean; email: boolean }>({ name: false, email: false })
  
  const { submitData, isLoading, error, isSuccess } = useResumeAccess()

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      // Focus the first input when modal opens
      setTimeout(() => nameInputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Handle successful submission
  useEffect(() => {
    if (isSuccess) {
      // Show success state briefly then open resume
      setTimeout(() => {
        onSuccess()
        window.open('/portfolio-SDE/resume/Sai_Krishnan_Resume.pdf', '_blank')
        onClose()
        // Reset form
        setFormData({ name: '', email: '' })
        setErrors({})
        setTouched({ name: false, email: false })
      }, 1500)
    }
  }, [isSuccess, onSuccess, onClose])

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        if (value.trim().length > 50) return 'Name must be less than 50 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      default:
        return ''
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const nameError = validateField('name', formData.name)
    const emailError = validateField('email', formData.email)
    
    const newErrors: FormErrors = {}
    if (nameError) newErrors.name = nameError
    if (emailError) newErrors.email = emailError
    
    setErrors(newErrors)
    setTouched({ name: true, email: true })
    
    if (Object.keys(newErrors).length === 0) {
      try {
        await submitData(formData)
      } catch (err) {
        setErrors({ submit: 'Failed to submit. Please try again.' })
      }
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          aria-describedby="resume-modal-description"
        >
          <motion.div
            ref={modalRef}
            className="resume-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="resume-modal-header">
              <h2 id="resume-modal-title" className="resume-modal-title">
                Access Resume
              </h2>
              <button
                className="resume-modal-close"
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="resume-modal-body">
              <p id="resume-modal-description" className="resume-modal-description">
                Please provide your contact information to access my resume. This helps me understand who is interested in my work.
              </p>

              <form onSubmit={handleSubmit} className="resume-modal-form" noValidate>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="resume-name" className="form-label">
                    Full Name <span aria-label="required" className="required-asterisk">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="resume-name"
                    type="text"
                    className={`form-input ${errors.name && touched.name ? 'form-input-error' : ''}`}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="Enter your full name"
                    maxLength={50}
                    aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    disabled={isLoading || isSuccess}
                  />
                  {errors.name && touched.name && (
                    <div id="name-error" className="form-error" role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="resume-email" className="form-label">
                    Email Address <span aria-label="required" className="required-asterisk">*</span>
                  </label>
                  <input
                    id="resume-email"
                    type="email"
                    className={`form-input ${errors.email && touched.email ? 'form-input-error' : ''}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="Enter your email address"
                    aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                    disabled={isLoading || isSuccess}
                  />
                  {errors.email && touched.email && (
                    <div id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Submit Error */}
                {errors.submit && (
                  <div className="form-error" role="alert">
                    {errors.submit}
                  </div>
                )}

                {/* API Error */}
                {error && (
                  <div className="form-error" role="alert">
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {isSuccess && (
                  <motion.div
                    className="form-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    aria-live="polite"
                  >
                    ✓ Thank you! Opening your resume...
                  </motion.div>
                )}

                {/* Actions */}
                <div className="resume-modal-actions">
                  <motion.button
                    type="button"
                    className="btn-outline-modern"
                    onClick={onClose}
                    disabled={isLoading || isSuccess}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  
                  <motion.button
                    type="submit"
                    className="btn-primary-modern"
                    disabled={isLoading || isSuccess}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          className="loading-spinner"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Processing...
                      </>
                    ) : isSuccess ? (
                      '✓ Success!'
                    ) : (
                      'Access Resume'
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}