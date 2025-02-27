/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
