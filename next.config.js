/** @type {import('next').NextConfig} */
// Force cache purge with new deployment
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/favicon.png',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/favicon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Content-Type',
            value: 'image/png',
          },
        ],
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig; 