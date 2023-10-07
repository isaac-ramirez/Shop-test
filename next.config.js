/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'buffcitysoap.com',
      },
    ],
  },
};

module.exports = nextConfig;
