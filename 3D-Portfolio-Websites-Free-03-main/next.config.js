/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['react-icons'],
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig