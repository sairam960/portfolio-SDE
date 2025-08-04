{/*
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-SDE',
  assetPrefix: '/portfolio-SDE/',
  images: {
    unoptimized: true
  }
}

*/}

// next.config.js
/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] // "portfolio‑SDE"
const base = `/` + repo

module.exports = {
  basePath: base,           // path-based routing (Next.js ≥ 10)
  assetPrefix: base + '/',  // prefix for static assets
  trailingSlash: true,      // ensures index.html under each path
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig