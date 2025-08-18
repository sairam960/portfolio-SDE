/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-SDE',
  assetPrefix: '/portfolio-SDE',
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
