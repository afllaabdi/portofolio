/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portofolio',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'api.dicebear.com'],
  },
}

export default nextConfig
