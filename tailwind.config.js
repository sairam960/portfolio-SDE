/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Modern sophisticated color system
      colors: {
        // Primary indigo-purple gradient system
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        
        // Indigo gradient core
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        
        // Purple gradient core
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21d6',
          900: '#581c87',
          950: '#3b0764',
        },
        
        // Accent colors
        accent: {
          // Cyan accent
          cyan: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
            950: '#083344',
          },
          
          // Pink accent
          pink: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
            600: '#db2777',
            700: '#be185d',
            800: '#9d174d',
            900: '#831843',
            950: '#500724',
          },
          
          // Orange accent
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407',
          },
        },
        
        // Sophisticated background system
        background: {
          light: {
            primary: '#ffffff',
            secondary: '#f8fafc',
            tertiary: '#f1f5f9',
            accent: '#e2e8f0',
          },
          dark: {
            primary: '#0f172a',
            secondary: '#1e293b',
            tertiary: '#334155',
            accent: '#475569',
          },
        },
        
        // Text color system
        text: {
          light: {
            primary: '#0f172a',
            secondary: '#334155',
            tertiary: '#64748b',
            accent: '#94a3b8',
          },
          dark: {
            primary: '#f8fafc',
            secondary: '#e2e8f0',
            tertiary: '#cbd5e1',
            accent: '#94a3b8',
          },
        },
      },
      
      // Modern typography system
      fontFamily: {
        // Display fonts for headings
        display: ['Playfair Display', 'serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        // Body fonts
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        // Monospace for code
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        code: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      
      // Fluid typography system
      fontSize: {
        // Display sizes
        'display-2xl': ['clamp(4rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        
        // Heading sizes
        'heading-xl': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-lg': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['clamp(1.125rem, 1.75vw, 1.5rem)', { lineHeight: '1.35', fontWeight: '600' }],
        'heading-sm': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.4', fontWeight: '600' }],
        
        // Body sizes
        'body-xl': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.6' }],
        'body-lg': ['clamp(1rem, 1.25vw, 1.125rem)', { lineHeight: '1.6' }],
        'body-md': ['clamp(0.95rem, 1.125vw, 1rem)', { lineHeight: '1.65' }],
        'body-sm': ['clamp(0.875rem, 1vw, 0.95rem)', { lineHeight: '1.6' }],
        'body-xs': ['clamp(0.8rem, 0.9vw, 0.875rem)', { lineHeight: '1.5' }],
        
        // Caption and small text
        'caption': ['clamp(0.75rem, 0.85vw, 0.8rem)', { lineHeight: '1.4' }],
        'overline': ['clamp(0.7rem, 0.8vw, 0.75rem)', { lineHeight: '1.4', textTransform: 'uppercase', letterSpacing: '0.1em' }],
      },
      
      // Modern gradient backgrounds
      backgroundImage: {
        // Primary gradients
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        'gradient-primary-dark': 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        
        // Accent gradients
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
        'gradient-pink': 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
        'gradient-orange': 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        
        // Complex gradients
        'gradient-aurora': 'linear-gradient(135deg, #6366f1 0%, #22d3ee 25%, #ec4899 50%, #f97316 75%, #a855f7 100%)',
        'gradient-mesh': 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 25%, rgba(34, 211, 238, 0.1) 50%, rgba(236, 72, 153, 0.1) 75%, rgba(249, 115, 22, 0.1) 100%)',
        
        // Background gradients
        'gradient-light': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        
        // Radial gradients
        'radial-primary': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        'radial-accent': 'radial-gradient(circle at center, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
      },
      
      // Enhanced animations
      animation: {
        // Entrance animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.7s ease-out',
        
        // Floating and movement
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'drift': 'drift 10s ease-in-out infinite',
        
        // Interactive animations
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        
        // Text animations
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'typewriter': 'typewriter 3.5s steps(30) 1s both',
        'cursor-blink': 'cursorBlink 1s infinite',
        
        // Loading animations
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      
      // Enhanced keyframes
      keyframes: {
        // Entrance animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        
        // Movement animations
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '33%': { transform: 'translateX(15px) translateY(-10px)' },
          '66%': { transform: 'translateX(-10px) translateY(15px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        
        // Effect animations
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '30ch' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      
      // Enhanced box shadows
      boxShadow: {
        // Subtle shadows
        'soft': '0 2px 4px -1px rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'subtle': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        
        // Standard shadows
        'medium': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'large': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'extra-large': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        
        // Elevated shadows
        'elevated': '0 8px 30px rgb(0 0 0 / 0.12), 0 2px 8px rgb(0 0 0 / 0.08)',
        'floating': '0 12px 40px rgb(0 0 0 / 0.15), 0 4px 16px rgb(0 0 0 / 0.1)',
        'dramatic': '0 25px 50px -12px rgb(0 0 0 / 0.25), 0 0 0 1px rgb(255 255 255 / 0.1)',
        
        // Colored shadows
        'primary': '0 10px 25px -5px rgba(99, 102, 241, 0.4), 0 4px 6px -2px rgba(99, 102, 241, 0.1)',
        'purple': '0 10px 25px -5px rgba(168, 85, 247, 0.4), 0 4px 6px -2px rgba(168, 85, 247, 0.1)',
        'cyan': '0 10px 25px -5px rgba(6, 182, 212, 0.4), 0 4px 6px -2px rgba(6, 182, 212, 0.1)',
        'pink': '0 10px 25px -5px rgba(236, 72, 153, 0.4), 0 4px 6px -2px rgba(236, 72, 153, 0.1)',
        'orange': '0 10px 25px -5px rgba(249, 115, 22, 0.4), 0 4px 6px -2px rgba(249, 115, 22, 0.1)',
        
        // Inner shadows
        'inner-soft': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'inner-medium': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
        
        // Glow effects
        'glow-primary': '0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)',
      },
      
      // Enhanced spacing system
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
        '102': '25.5rem',
        '106': '26.5rem',
        '110': '27.5rem',
        '114': '28.5rem',
        '118': '29.5rem',
        '122': '30.5rem',
        '126': '31.5rem',
        '130': '32.5rem',
      },
      
      // Modern border radius
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        'full': '9999px',
      },
      
      // Enhanced backdrop blur
      backdropBlur: {
        'none': '0',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      
      // Container queries support
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}