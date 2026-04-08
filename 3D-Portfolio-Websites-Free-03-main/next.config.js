/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This line tells Next.js to "fix" the icon library for you
  transpilePackages: ['react-icons'], 
}

module.exports = nextConfig