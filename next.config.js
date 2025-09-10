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
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true
  },
  
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  
}

module.exports = nextConfig
