'use client'
import { useState, useCallback } from 'react'

interface FormData {
  name: string
  email: string
}

interface UseResumeAccessReturn {
  submitData: (data: FormData) => Promise<void>
  isLoading: boolean
  error: string | null
  isSuccess: boolean
}

// Replace this with your actual Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwQ-IVJaH23K4F2TPQZOKzZrCHkebP3YQcDYnO6I9GQLwDEI53cPPMeREiipOwD6Oujmg/exec'

export function useResumeAccess(): UseResumeAccessReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const submitData = useCallback(async (data: FormData) => {
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    try {
      // Basic client-side validation
      if (!data.name.trim() || !data.email.trim()) {
        throw new Error('Name and email are required')
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Prepare the payload
      const payload = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct'
      }

      // Submit to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        // Add timeout to prevent hanging
        signal: AbortSignal.timeout(10000) // 10 second timeout
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.status === 'error') {
        throw new Error(result.message || 'Submission failed')
      }

      if (result.status !== 'success') {
        throw new Error('Unexpected response from server')
      }

      setIsSuccess(true)
      
      // Log success for analytics (optional)
      if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore
        window.gtag('event', 'resume_access', {
          event_category: 'engagement',
          event_label: 'resume_download'
        })
      }

    } catch (err) {
      console.error('Resume access submission error:', err)
      
      if (err instanceof Error) {
        // Handle specific error types
        if (err.name === 'AbortError') {
          setError('Request timed out. Please try again.')
        } else if (err.message.includes('Failed to fetch')) {
          setError('Network error. Please check your connection and try again.')
        } else {
          setError(err.message)
        }
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    submitData,
    isLoading,
    error,
    isSuccess
  }
}