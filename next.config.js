/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['styled-components', 'framer-motion'],
    optimizeCss: true,
    craCompat: false,
    appDir: true,
    serverActions: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
            },
            common: {
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  modularizeImports: {
    'styled-components': {
      transform: 'styled-components/{{member}}',
    },
    'framer-motion': {
      transform: 'framer-motion/{{member}}',
    },
  },
}

module.exports = nextConfig; 