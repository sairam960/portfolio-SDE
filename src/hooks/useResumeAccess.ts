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

// Get Google Apps Script URL from environment variables (with fallback for production)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzMOOtPE2em3iH195EdUvXjAHjLWmkNvN8Kq8BoYGfAJRwqaE0UfUG70NxGFCnV7IADbg/exec'

export function useResumeAccess(): UseResumeAccessReturn {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const submitData = useCallback(async (data: FormData) => {
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    try {
      // Check if URL is configured
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Google Apps Script URL not configured. Please check environment variables.')
      }

      // Basic client-side validation
      if (!data.name.trim() || !data.email.trim()) {
        throw new Error('Name and email are required')
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address')
      }

      // Prepare the payload - simplified structure
      const payload = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct'
      }

      console.log('Submitting to:', GOOGLE_SCRIPT_URL)
      console.log('Payload:', payload)

      // Submit to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'cors',
        // Add timeout to prevent hanging
        signal: AbortSignal.timeout(15000) // 15 second timeout
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Response:', result)

      if (result.status === 'error') {
        throw new Error(result.message || 'Submission failed')
      }

      if (result.status !== 'success') {
        throw new Error('Unexpected response from server')
      }

      console.log('Data successfully saved to Google Sheets')
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
        } else if (err.message.includes('CORS') || err.message.includes('Access-Control-Allow-Origin')) {
          setError('Cross-origin request blocked. Please ensure the Google Apps Script is properly configured with CORS headers.')
        } else if (err.message.includes('preflight')) {
          setError('Request blocked by CORS policy. The server needs to handle OPTIONS requests properly.')
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