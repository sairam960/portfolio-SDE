/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-SDE',
  assetPrefix: '/portfolio-SDE',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
  
}

module.exports = nextConfig
