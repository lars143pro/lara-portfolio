/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['react-icons'],
  images: {
    // This allows Next.js to display your thumbnails properly on Netlify
    unoptimized: true,
  },
}

module.exports = nextConfig