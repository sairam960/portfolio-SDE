import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Optimize font loading - reduce weights for performance
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'], // Reduced from 5 to 3 weights
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'], // Reduced from 5 to 2 weights
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sairam960.github.io/portfolio-SDE'),
  title: 'Sai Krishnan - Full-Stack Software Engineer',
  description: 'Passionate Full-Stack Software Engineer specializing in React, Node.js, Python, and AWS. Building scalable applications and delivering exceptional user experiences.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Portfolio'],
  authors: [{ name: 'Sai Krishnan' }],
  creator: 'Sai Krishnan',
  publisher: 'Sai Krishnan',
  
  // OpenGraph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sairam960.github.io/portfolio-SDE/',
    title: 'Sai Krishnan - Full-Stack Software Engineer',
    description: 'Passionate Full-Stack Software Engineer specializing in React, Node.js, Python, and AWS. Building scalable applications and delivering exceptional user experiences.',
    siteName: 'Sai Krishnan Portfolio',
    images: [
      {
        url: '/portfolio-SDE/images/DSC_6481.jpg',
        width: 1200,
        height: 630,
        alt: 'Sai Krishnan - Software Engineer',
      },
    ],
  },
  
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Krishnan - Full-Stack Software Engineer',
    description: 'Passionate Full-Stack Software Engineer specializing in React, Node.js, Python, and AWS.',
    images: ['/portfolio-SDE/images/DSC_6481.jpg'],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: '6QVYfqpm3tv7P8RHeYhygYm7o3NSpnvrvGPntqJFByw',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sai Krishnan",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Passionate Full-Stack Software Engineer specializing in React, Node.js, Python, and AWS. Building scalable applications and delivering exceptional user experiences.",
    "url": "https://sairam960.github.io/portfolio-SDE/",
    "image": "https://sairam960.github.io/portfolio-SDE/images/DSC_6481.jpg",
    "sameAs": [
      "https://github.com/sairam960",
      "https://www.linkedin.com/in/sairamnathk/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "YourPassion1st"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "University of Maryland"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "AWS",
      "PostgreSQL",
      "MongoDB"
    ]
  }

  return (
    <html lang="en">
      <head>
        {/* Calendly widget styles */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Calendly widget script */}
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} smooth-scroll transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}