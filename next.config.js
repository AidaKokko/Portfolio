/** @type {import('next').NextConfig} */
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
        destination: '/aida-favicon.ico',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/aida-favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
          {
            key: 'Content-Type',
            value: 'image/x-icon',
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